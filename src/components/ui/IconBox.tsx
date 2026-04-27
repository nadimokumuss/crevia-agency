import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

const variantStyles = {
  primary: "bg-hardal-sarisi/15 text-hardal-sarisi",
  secondary: "bg-orman-yesili text-nane-yesili",
  accent: "bg-nane-yesili/15 text-nane-yesili",
};

interface IconBoxProps {
  icon: LucideIcon;
  variant?: keyof typeof variantStyles;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

const iconSizeMap = {
  sm: 18,
  md: 22,
  lg: 28,
};

export default function IconBox({
  icon: Icon,
  variant = "primary",
  size = "md",
  className,
}: IconBoxProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-xl",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <Icon size={iconSizeMap[size]} />
    </div>
  );
}
