import { type ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function CodeBlock({ children, title, className = "" }: CodeBlockProps) {
  return (
    <div
      className={`bg-navy-900 rounded-xl overflow-hidden shadow-medium ${className}`}
    >
      {title && (
        <div className="flex items-center gap-2 px-4 py-3 bg-navy-800 border-b border-navy-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-amber-400/60" />
            <div className="w-3 h-3 rounded-full bg-green-400/60" />
          </div>
          <span className="font-mono text-caption text-navy-300 ml-2">
            {title}
          </span>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-body-sm text-navy-100 leading-relaxed">
          {children}
        </pre>
      </div>
    </div>
  );
}
