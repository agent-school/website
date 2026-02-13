"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface DataDisplayProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (row: T, index: number) => void;
  highlightedRows?: number[];
  className?: string;
}

type SortConfig<T> = {
  key: keyof T;
  direction: "asc" | "desc";
} | null;

/**
 * Table component for displaying data grids in mock interfaces
 * Supports sorting, row highlighting, and responsive horizontal scroll
 */
export function DataDisplay<T extends Record<string, any>>({
  data,
  columns,
  onRowClick,
  highlightedRows = [],
  className = "",
}: DataDisplayProps<T>) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>(null);

  const handleSort = (key: keyof T) => {
    setSortConfig((current) => {
      if (!current || current.key !== key) {
        return { key, direction: "asc" };
      }
      if (current.direction === "asc") {
        return { key, direction: "desc" };
      }
      return null;
    });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue === bValue) return 0;

    const comparison = aValue < bValue ? -1 : 1;
    return sortConfig.direction === "asc" ? comparison : -comparison;
  });

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-700">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={`px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300 ${
                  column.sortable ? "cursor-pointer select-none" : ""
                }`}
                onClick={column.sortable ? () => handleSort(column.key) : undefined}
              >
                <div className="flex items-center gap-2">
                  {column.label}
                  {column.sortable && (
                    <div className="flex flex-col">
                      <ChevronUp
                        className={`w-3 h-3 -mb-1 ${
                          sortConfig?.key === column.key && sortConfig?.direction === "asc"
                            ? "text-orange-600 dark:text-orange-400"
                            : "text-slate-400"
                        }`}
                      />
                      <ChevronDown
                        className={`w-3 h-3 ${
                          sortConfig?.key === column.key && sortConfig?.direction === "desc"
                            ? "text-orange-600 dark:text-orange-400"
                            : "text-slate-400"
                        }`}
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => {
            const isHighlighted = highlightedRows.includes(rowIndex);
            return (
              <motion.tr
                key={rowIndex}
                onClick={onRowClick ? () => onRowClick(row, rowIndex) : undefined}
                className={`border-b border-slate-100 dark:border-slate-800 transition-colors ${
                  onRowClick ? "cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50" : ""
                } ${
                  isHighlighted
                    ? "bg-orange-50 dark:bg-orange-900/20 ring-2 ring-orange-500 dark:ring-orange-400"
                    : ""
                }`}
                animate={{
                  backgroundColor: isHighlighted
                    ? [
                        "rgba(20, 184, 166, 0.1)",
                        "rgba(20, 184, 166, 0.15)",
                        "rgba(20, 184, 166, 0.1)",
                      ]
                    : "transparent",
                }}
                transition={{
                  duration: 2,
                  repeat: isHighlighted ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400"
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : String(row[column.key])}
                  </td>
                ))}
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
