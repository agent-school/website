import { type ReactNode } from "react";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  children?: ReactNode;
}

export function SectionHeader({
  overline,
  title,
  description,
  align = "center",
  dark = false,
  children,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const textColor = dark ? "text-white" : "text-slate-900";
  const mutedColor = dark ? "text-slate-300" : "text-slate-600";
  const overlineColor = dark ? "text-orange-400" : "text-orange-600";

  return (
    <div className={`max-w-3xl ${alignClass} mb-16`}>
      {overline && (
        <p
          className={`font-mono text-caption uppercase tracking-widest ${overlineColor} mb-4`}
        >
          {overline}
        </p>
      )}
      <h2
        className={`font-display text-display-md md:text-display-lg ${textColor} mb-4 text-balance`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-body-lg ${mutedColor} text-balance`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
