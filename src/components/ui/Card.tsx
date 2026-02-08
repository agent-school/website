"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-2xl border border-cream-200 shadow-soft ${paddingStyles[padding]} ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 8px 40px rgba(15, 27, 51, 0.12)",
              transition: { duration: 0.2 },
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
}

export function GlassCard({
  children,
  className = "",
  padding = "md",
}: CardProps) {
  return (
    <motion.div
      className={`glass-card rounded-2xl ${paddingStyles[padding]} ${className}`}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
}
