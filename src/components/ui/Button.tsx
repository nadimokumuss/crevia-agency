"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { hoverScale, tapScale } from "@/lib/animations";

const variantStyles = {
  primary:
    "bg-hardal-sarisi text-koyu-yesil font-semibold hover:bg-hardal-sarisi/90",
  secondary:
    "bg-orman-yesili text-white font-semibold hover:bg-orman-yesili/90",
  outline:
    "border-2 border-mat-yesil text-mat-yesil bg-transparent hover:bg-mat-yesil/10",
  ghost: "bg-transparent text-white hover:bg-white/10",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

interface ButtonProps {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  href?: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-syne transition-colors duration-200 cursor-pointer",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <motion.div
        whileHover={disabled ? undefined : hoverScale}
        whileTap={disabled ? undefined : tapScale}
        className="inline-block"
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? undefined : hoverScale}
      whileTap={disabled ? undefined : tapScale}
      className={classes}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
