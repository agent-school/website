"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

export interface InteractiveElementProps {
  id: string;
  children: ReactNode;
  onClick?: () => void;
  highlight?: boolean;
  className?: string;
}

/**
 * Wrapper for clickable UI elements in mock interfaces
 * Provides highlight effect when agent references element
 */
export function InteractiveElement({
  id,
  children,
  onClick,
  highlight = false,
  className = "",
}: InteractiveElementProps) {
  return (
    <motion.div
      id={id}
      onClick={onClick}
      className={`relative ${onClick ? "cursor-pointer" : ""} ${className}`}
      animate={{
        boxShadow: highlight
          ? [
              "0 0 0 0 rgba(20, 184, 166, 0)",
              "0 0 0 4px rgba(20, 184, 166, 0.3)",
              "0 0 0 0 rgba(20, 184, 166, 0)",
            ]
          : "0 0 0 0 rgba(20, 184, 166, 0)",
      }}
      transition={{
        duration: 2,
        repeat: highlight ? Infinity : 0,
        ease: "easeInOut",
      }}
      whileHover={onClick ? { scale: 1.01 } : {}}
      whileTap={onClick ? { scale: 0.99 } : {}}
    >
      {highlight && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(20, 184, 166, 0.2), transparent 70%)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
