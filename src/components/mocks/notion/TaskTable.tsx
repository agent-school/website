"use client";

import { Check, Circle, AlertCircle, Pencil } from "lucide-react";

import { type Task, type Status, type Priority } from "./types";

interface TaskTableProps {
  tasks: Task[];
  selectedTaskIds: string[];
  onToggleSelect: (taskId: string) => void;
}

const STATUS_CONFIG: Record<Status, { color: string; icon: React.ReactNode; bg: string }> = {
  "To Do": {
    color: "text-slate-500",
    bg: "bg-slate-100 dark:bg-slate-800",
    icon: <Circle className="w-3.5 h-3.5" />,
  },
  "In Progress": {
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    icon: <AlertCircle className="w-3.5 h-3.5" />,
  },
  "Done": {
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30",
    icon: <Check className="w-3.5 h-3.5" />,
  },
};

const PRIORITY_CONFIG: Record<Priority, { color: string; bg: string }> = {
  "High": {
    color: "text-red-700 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
  "Medium": {
    color: "text-orange-700 dark:text-orange-400",
    bg: "bg-orange-100 dark:bg-orange-900/30",
  },
  "Low": {
    color: "text-slate-600 dark:text-slate-400",
    bg: "bg-slate-100 dark:bg-slate-800",
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const isToday = date.toDateString() === today.toDateString();
  const isTomorrow = date.toDateString() === tomorrow.toDateString();
  const isYesterday = date.toDateString() === yesterday.toDateString();

  if (isToday) return "Today";
  if (isTomorrow) return "Tomorrow";
  if (isYesterday) return "Yesterday";

  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  return `${month} ${day}`;
}

function isOverdue(dateString: string, status: Status): boolean {
  if (status === "Done") return false;
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date < today;
}

export function TaskTable({ tasks, selectedTaskIds, onToggleSelect }: TaskTableProps) {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-700">
            <th className="w-10 px-3 py-2 text-left">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-slate-300 dark:border-slate-600"
                disabled
              />
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-slate-600 dark:text-slate-400">
              Task Name
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-slate-600 dark:text-slate-400 w-32">
              Status
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-slate-600 dark:text-slate-400 w-28">
              Priority
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-slate-600 dark:text-slate-400 w-40">
              Assignee
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-slate-600 dark:text-slate-400 w-32">
              Due Date
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            const statusConfig = STATUS_CONFIG[task.status];
            const priorityConfig = PRIORITY_CONFIG[task.priority];
            const overdue = isOverdue(task.dueDate, task.status);

            return (
              <tr
                key={task.id}
                className="group border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-3 py-2.5">
                  <input
                    type="checkbox"
                    checked={selectedTaskIds.includes(task.id)}
                    onChange={() => onToggleSelect(task.id)}
                    className="w-4 h-4 rounded border-slate-300 dark:border-slate-600"
                  />
                </td>
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2 group/cell">
                    <span className="text-sm text-slate-900 dark:text-slate-100">
                      {task.name}
                    </span>
                    <Pencil className="w-3 h-3 text-slate-400 opacity-0 group-hover/cell:opacity-100 transition-opacity" />
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <div
                    className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium ${statusConfig.color} ${statusConfig.bg}`}
                  >
                    {statusConfig.icon}
                    {task.status}
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <div
                    className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${priorityConfig.color} ${priorityConfig.bg}`}
                  >
                    {task.priority}
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-blue-500 flex items-center justify-center text-[10px] font-medium text-white">
                      {task.assignee.avatar}
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {task.assignee.name}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <span
                    className={`text-sm ${
                      overdue
                        ? "text-red-600 dark:text-red-400 font-medium"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {formatDate(task.dueDate)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {tasks.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">No tasks found</p>
        </div>
      )}
    </div>
  );
}
