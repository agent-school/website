"use client";

import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

interface MetricCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  variant?: "default" | "highlight";
}

export function MetricCard({
  value,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  variant = "default",
}: MetricCardProps) {
  const bgClass =
    variant === "highlight"
      ? "bg-amber-50 border-amber-200"
      : "bg-white border-cream-200";

  return (
    <div
      className={`rounded-xl border p-5 text-center ${bgClass}`}
    >
      <div className="font-display text-display-sm text-navy-800 mb-1">
        <AnimatedCounter
          target={value}
          prefix={prefix}
          suffix={suffix}
          duration={1.8}
        />
      </div>
      <p className="text-body-sm font-semibold text-navy-700">{label}</p>
      {sublabel && (
        <p className="text-caption text-charcoal-400 mt-0.5">{sublabel}</p>
      )}
    </div>
  );
}
