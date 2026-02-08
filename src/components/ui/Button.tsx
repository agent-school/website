"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-soft hover:shadow-medium",
  secondary:
    "bg-amber-500 text-navy-900 hover:bg-amber-400 shadow-soft hover:shadow-glow-amber",
  ghost:
    "bg-transparent text-navy-800 hover:bg-cream-100",
  outline:
    "bg-transparent text-navy-800 border-2 border-navy-200 hover:border-amber-500 hover:text-amber-600",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-body-sm rounded-lg",
  md: "px-6 py-3 text-body-md rounded-xl",
  lg: "px-8 py-4 text-body-lg rounded-xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer select-none";
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={disabled ? {} : { y: -2 }}
        whileTap={disabled ? {} : { scale: 0.97 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      whileHover={disabled ? {} : { y: -2 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
