export type Status = "To Do" | "In Progress" | "Done";
export type Priority = "High" | "Medium" | "Low";

export interface Assignee {
  id: string;
  name: string;
  avatar: string;
}

export interface Task {
  id: string;
  name: string;
  status: Status;
  priority: Priority;
  assignee: Assignee;
  dueDate: string; // ISO date string
  createdAt: string;
}

export interface NotionData {
  tasks: Task[];
  selectedTaskIds: string[];
}

export type NotionQuery =
  | { type: "add_task"; taskName: string }
  | { type: "update_status"; taskId: string; status: Status }
  | { type: "filter_priority"; priority: Priority }
  | { type: "filter_due_date"; dateRange: "past" | "this_week" | "next_week" | "future" }
  | { type: "update_assignee"; taskId: string; assigneeName: string }
  | { type: "show_all" };
