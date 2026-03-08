import { cn } from "@/lib/cn";

const variantStyles = {
  dark: "bg-koyu-yesil",
  light: "bg-nane-yesili/10",
  accent: "bg-hardal-sarisi/10",
  gradient:
    "bg-gradient-to-b from-koyu-yesil via-orman-yesili/30 to-koyu-yesil",
};

interface SectionProps {
  children: React.ReactNode;
  variant?: keyof typeof variantStyles;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  variant = "dark",
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 relative overflow-hidden",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </section>
  );
}
