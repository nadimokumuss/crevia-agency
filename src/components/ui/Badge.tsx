import { cn } from "@/lib/cn";

const variantStyles = {
  default: "bg-hardal-sarisi/15 text-hardal-sarisi border-hardal-sarisi/30",
  success: "bg-nane-yesili/15 text-nane-yesili border-nane-yesili/30",
  dark: "bg-orman-yesili/50 text-white border-orman-yesili/50",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof variantStyles;
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-syne font-medium rounded-full border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
