import { cn } from "@/lib/cn";

const variantStyles = {
  simple: "",
  gradient: "",
  dots: "",
};

interface DividerProps {
  variant?: keyof typeof variantStyles;
  className?: string;
}

export default function Divider({
  variant = "simple",
  className,
}: DividerProps) {
  if (variant === "gradient") {
    return (
      <div className={cn("py-4", className)}>
        <div className="h-px bg-gradient-to-r from-transparent via-mat-yesil/40 to-transparent" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-2 py-6",
          className
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-mat-yesil/40" />
        <span className="w-1.5 h-1.5 rounded-full bg-hardal-sarisi/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-mat-yesil/40" />
      </div>
    );
  }

  // simple
  return (
    <div className={cn("py-4", className)}>
      <div className="h-px bg-mat-yesil/20" />
    </div>
  );
}
