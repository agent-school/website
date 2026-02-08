import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "amber" | "navy" | "green" | "red" | "neutral";
  size?: "sm" | "md";
  className?: string;
}

const variantStyles = {
  amber: "bg-amber-100 text-amber-600 border-amber-200",
  navy: "bg-navy-50 text-navy-700 border-navy-100",
  green: "bg-green-50 text-green-700 border-green-200",
  red: "bg-red-50 text-red-700 border-red-200",
  neutral: "bg-cream-100 text-charcoal-600 border-cream-200",
};

const sizeStyles = {
  sm: "px-2.5 py-0.5 text-caption",
  md: "px-3.5 py-1 text-body-sm",
};

export function Badge({
  children,
  variant = "amber",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
