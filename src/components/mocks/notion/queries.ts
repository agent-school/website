import { type QueryResult } from "@/types/agent";
import { type MockUIState } from "@/types/mock-ui";

import { type NotionData, type Task, type Status, type Priority } from "./types";
import { ASSIGNEES } from "./data";

export async function handleNotionQuery(
  query: string,
  state: MockUIState<NotionData>
): Promise<QueryResult> {
  const lowerQuery = query.toLowerCase().trim();
  const { data } = state;

  // ADD TASK
  if (lowerQuery.startsWith("add task") || lowerQuery.startsWith("create task")) {
    const taskNameMatch = query.match(/(?:add task|create task):?\s*(.+)/i);
    if (!taskNameMatch || !taskNameMatch[1]) {
      return {
        response: "Please specify a task name. Example: 'Add task: Write blog post'",
        error: "Missing task name",
      };
    }

    const taskName = taskNameMatch[1].trim();
    const newTask: Task = {
      id: `task-${Date.now()}`,
      name: taskName,
      status: "To Do",
      priority: "Medium",
      assignee: ASSIGNEES[0],
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      createdAt: new Date().toISOString().split("T")[0],
    };

    return {
      response: `Created task "${taskName}" with status To Do, priority Medium, and due date in 7 days.`,
      dataUpdate: {
        tasks: [newTask, ...data.tasks],
      },
      highlight: newTask.id,
    };
  }

  // MARK AS COMPLETE / UPDATE STATUS
  if (
    lowerQuery.includes("mark") &&
    (lowerQuery.includes("complete") || lowerQuery.includes("done"))
  ) {
    // Try to find selected tasks first
    if (data.selectedTaskIds.length > 0) {
      const updatedTasks = data.tasks.map((task) =>
        data.selectedTaskIds.includes(task.id) ? { ...task, status: "Done" as Status } : task
      );

      return {
        response: `Marked ${data.selectedTaskIds.length} task(s) as complete.`,
        dataUpdate: {
          tasks: updatedTasks,
          selectedTaskIds: [],
        },
        highlight: data.selectedTaskIds,
      };
    }

    // Otherwise try to find task by name
    const taskNameMatch = query.match(/mark\s+["']?(.+?)["']?\s+as/i);
    if (taskNameMatch) {
      const taskName = taskNameMatch[1].trim().toLowerCase();
      const task = data.tasks.find((t) => t.name.toLowerCase().includes(taskName));

      if (task) {
        const updatedTasks = data.tasks.map((t) =>
          t.id === task.id ? { ...t, status: "Done" as Status } : t
        );

        return {
          response: `Marked "${task.name}" as complete.`,
          dataUpdate: { tasks: updatedTasks },
          highlight: task.id,
        };
      }
    }

    return {
      response: "Please select a task or specify which task to mark as complete.",
      error: "No task specified",
    };
  }

  // FILTER BY PRIORITY
  if (lowerQuery.includes("priority") || lowerQuery.includes("high") || lowerQuery.includes("medium") || lowerQuery.includes("low")) {
    let priority: Priority | null = null;

    if (lowerQuery.includes("high")) priority = "High";
    else if (lowerQuery.includes("medium")) priority = "Medium";
    else if (lowerQuery.includes("low")) priority = "Low";

    if (priority) {
      const filteredTasks = data.tasks.filter((task) => task.priority === priority);
      const taskIds = filteredTasks.map((t) => t.id);

      return {
        response: `Found ${filteredTasks.length} ${priority.toLowerCase()} priority task(s).`,
        dataUpdate: { tasks: filteredTasks },
        highlight: taskIds,
      };
    }
  }

  // FILTER BY STATUS
  if (lowerQuery.includes("to do") || lowerQuery.includes("todo")) {
    const filteredTasks = data.tasks.filter((task) => task.status === "To Do");
    const taskIds = filteredTasks.map((t) => t.id);

    return {
      response: `Found ${filteredTasks.length} tasks in To Do status.`,
      dataUpdate: { tasks: filteredTasks },
      highlight: taskIds,
    };
  }

  if (lowerQuery.includes("in progress")) {
    const filteredTasks = data.tasks.filter((task) => task.status === "In Progress");
    const taskIds = filteredTasks.map((t) => t.id);

    return {
      response: `Found ${filteredTasks.length} tasks in progress.`,
      dataUpdate: { tasks: filteredTasks },
      highlight: taskIds,
    };
  }

  if (lowerQuery.includes("done") || lowerQuery.includes("completed")) {
    const filteredTasks = data.tasks.filter((task) => task.status === "Done");
    const taskIds = filteredTasks.map((t) => t.id);

    return {
      response: `Found ${filteredTasks.length} completed tasks.`,
      dataUpdate: { tasks: filteredTasks },
      highlight: taskIds,
    };
  }

  // FILTER BY DUE DATE
  if (lowerQuery.includes("due") || lowerQuery.includes("week") || lowerQuery.includes("overdue")) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (lowerQuery.includes("overdue") || lowerQuery.includes("past due")) {
      const filteredTasks = data.tasks.filter((task) => {
        if (task.status === "Done") return false;
        const dueDate = new Date(task.dueDate);
        dueDate.setHours(0, 0, 0, 0);
        return dueDate < today;
      });
      const taskIds = filteredTasks.map((t) => t.id);

      return {
        response: `Found ${filteredTasks.length} overdue task(s).`,
        dataUpdate: { tasks: filteredTasks },
        highlight: taskIds,
      };
    }

    if (lowerQuery.includes("this week") || lowerQuery.includes("week")) {
      const weekEnd = new Date(today);
      weekEnd.setDate(weekEnd.getDate() + 7);

      const filteredTasks = data.tasks.filter((task) => {
        const dueDate = new Date(task.dueDate);
        dueDate.setHours(0, 0, 0, 0);
        return dueDate >= today && dueDate <= weekEnd;
      });
      const taskIds = filteredTasks.map((t) => t.id);

      return {
        response: `Found ${filteredTasks.length} task(s) due this week.`,
        dataUpdate: { tasks: filteredTasks },
        highlight: taskIds,
      };
    }
  }

  // ASSIGN TO SOMEONE
  if (lowerQuery.includes("assign")) {
    const assigneeNames = ASSIGNEES.map((a) => a.name.toLowerCase());
    const matchedAssignee = ASSIGNEES.find((assignee) =>
      lowerQuery.includes(assignee.name.toLowerCase().split(" ")[0])
    );

    if (matchedAssignee) {
      if (data.selectedTaskIds.length > 0) {
        const updatedTasks = data.tasks.map((task) =>
          data.selectedTaskIds.includes(task.id)
            ? { ...task, assignee: matchedAssignee }
            : task
        );

        return {
          response: `Assigned ${data.selectedTaskIds.length} task(s) to ${matchedAssignee.name}.`,
          dataUpdate: {
            tasks: updatedTasks,
            selectedTaskIds: [],
          },
          highlight: data.selectedTaskIds,
        };
      }

      return {
        response: "Please select one or more tasks to assign.",
        error: "No tasks selected",
      };
    }

    return {
      response: `Available assignees: ${ASSIGNEES.map((a) => a.name.split(" ")[0]).join(", ")}`,
      error: "Unknown assignee",
    };
  }

  // FILTER BY ASSIGNEE
  const matchedAssignee = ASSIGNEES.find((assignee) =>
    lowerQuery.includes(assignee.name.toLowerCase().split(" ")[0])
  );

  if (matchedAssignee) {
    const filteredTasks = data.tasks.filter(
      (task) => task.assignee.id === matchedAssignee.id
    );
    const taskIds = filteredTasks.map((t) => t.id);

    return {
      response: `Found ${filteredTasks.length} task(s) assigned to ${matchedAssignee.name}.`,
      dataUpdate: { tasks: filteredTasks },
      highlight: taskIds,
    };
  }

  // SHOW ALL / RESET
  if (lowerQuery.includes("show all") || lowerQuery.includes("reset")) {
    // Note: This won't reset to original, but will show current state
    return {
      response: "Showing all tasks.",
    };
  }

  // DEFAULT - SEARCH BY TASK NAME
  const matchedTasks = data.tasks.filter((task) =>
    task.name.toLowerCase().includes(lowerQuery)
  );

  if (matchedTasks.length > 0) {
    const taskIds = matchedTasks.map((t) => t.id);
    return {
      response: `Found ${matchedTasks.length} task(s) matching "${query}".`,
      dataUpdate: { tasks: matchedTasks },
      highlight: taskIds,
    };
  }

  return {
    response: "I can help you manage tasks. Try: 'Add task: [name]', 'Show high priority tasks', 'Mark as complete', 'Tasks due this week', or 'Assign to [name]'.",
    error: "Query not understood",
  };
}
