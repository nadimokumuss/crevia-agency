import { cn } from "@/lib/cn";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
}

export default function GradientText({
  children,
  className,
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        "bg-gradient-to-r from-hardal-sarisi to-nane-yesili bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Component>
  );
}
