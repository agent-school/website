"use client";

import { type ReactNode } from "react";
import { Monitor } from "lucide-react";

export interface MockUIShellProps {
  title: string;
  children: ReactNode;
  sidebar?: ReactNode;
  className?: string;
}

export function MockUIShell({ title, children, sidebar, className = "" }: MockUIShellProps) {
  return (
    <div
      className={`
        bg-white dark:bg-slate-900
        rounded-2xl
        shadow-glow-teal
        overflow-hidden
        flex flex-col
        h-full
        ${className}
      `.trim()}
    >
      {/* Mobile Notice - Only visible on mobile */}
      <div className="lg:hidden bg-gradient-to-r bg-orange-500 px-4 py-3 flex items-center gap-2">
        <Monitor size={16} className="text-white flex-shrink-0" />
        <p className="text-sm text-white font-medium">
          Best experience on desktop for interactive demos
        </p>
      </div>

      {/* macOS Window Header */}
      <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
        {/* macOS Window Dots */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        {/* Window Title */}
        <h3 className="font-display text-body-md text-slate-900 dark:text-slate-100">
          {title}
        </h3>
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-0">
        {/* Main Content */}
        <div className="flex-1 overflow-auto p-3 min-h-0">
          {children}
        </div>

        {/* Agent Sidebar (collapsible on mobile) */}
        {sidebar && (
          <div className="
            w-full lg:w-96
            border-t lg:border-t-0 lg:border-l
            border-slate-200 dark:border-slate-800
            bg-slate-50 dark:bg-slate-800/50
            overflow-auto
            min-h-0
          ">
            {sidebar}
          </div>
        )}
      </div>
    </div>
  );
}
