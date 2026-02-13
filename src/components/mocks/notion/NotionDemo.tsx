"use client";

import { MockUIProvider, useMockUI } from "@/components/mocks/_framework/MockUIContext";
import { MockUIShell } from "@/components/mocks/_framework/MockUIShell";
import { AgentInterface } from "@/components/mocks/_framework/AgentInterface";

import { TaskTable } from "./TaskTable";
import { handleNotionQuery } from "./queries";
import { INITIAL_TASKS } from "./data";
import { type NotionData } from "./types";

const SUGGESTED_QUERIES = [
  "Add task: Write blog post",
  "Show high priority tasks",
  "Tasks due this week",
  "Mark as complete",
  "Assign to Sarah",
];

function NotionContent() {
  const { state, sendQuery, selectElement, deselectElement } = useMockUI<NotionData>();

  const handleToggleSelect = (taskId: string) => {
    if (state.selectedElements.includes(taskId)) {
      deselectElement(taskId);
    } else {
      selectElement(taskId);
    }
  };

  return (
    <div className="h-full">
      <MockUIShell
        title="Notion — Project Tasks"
        sidebar={
          <AgentInterface
            messages={state.responses}
            onSendQuery={sendQuery}
            isLoading={state.isLoading}
            placeholder="Ask about tasks..."
            suggestedQueries={SUGGESTED_QUERIES}
            title="Task Agent"
            subtitle="Manage your tasks with natural language"
          />
        }
      >
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-2xl text-slate-900 dark:text-slate-100">
                All Tasks
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {state.data.tasks.length} task(s)
                {state.selectedElements.length > 0 && (
                  <span className="ml-2 text-teal-600 dark:text-teal-400">
                    • {state.selectedElements.length} selected
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Task Table */}
          <TaskTable
            tasks={state.data.tasks}
            selectedTaskIds={state.selectedElements}
            onToggleSelect={handleToggleSelect}
          />
        </div>
      </MockUIShell>
    </div>
  );
}

export function NotionDemo() {
  const initialData: NotionData = {
    tasks: INITIAL_TASKS,
    selectedTaskIds: [],
  };

  return (
    <MockUIProvider<NotionData>
      initialData={initialData}
      queryHandler={handleNotionQuery}
    >
      <NotionContent />
    </MockUIProvider>
  );
}
