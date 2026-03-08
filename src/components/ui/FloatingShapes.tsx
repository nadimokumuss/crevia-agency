"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface FloatingShapesProps {
  className?: string;
}

const shapes = [
  {
    type: "circle" as const,
    size: 80,
    color: "bg-hardal-sarisi",
    opacity: "opacity-[0.06]",
    position: "top-[15%] left-[10%]",
    duration: 7,
    delay: 0,
  },
  {
    type: "square" as const,
    size: 60,
    color: "bg-nane-yesili",
    opacity: "opacity-[0.05]",
    position: "top-[60%] right-[8%]",
    duration: 9,
    delay: 1,
  },
  {
    type: "circle" as const,
    size: 40,
    color: "bg-mat-yesil",
    opacity: "opacity-[0.08]",
    position: "bottom-[20%] left-[20%]",
    duration: 6,
    delay: 2,
  },
  {
    type: "triangle" as const,
    size: 50,
    color: "text-hardal-sarisi",
    opacity: "opacity-[0.07]",
    position: "top-[30%] right-[25%]",
    duration: 8,
    delay: 0.5,
  },
  {
    type: "square" as const,
    size: 35,
    color: "bg-nane-yesili",
    opacity: "opacity-[0.05]",
    position: "bottom-[35%] right-[40%]",
    duration: 10,
    delay: 1.5,
  },
];

function Shape({
  type,
  size,
  color,
  opacity,
  position,
  duration,
  delay,
}: (typeof shapes)[number]) {
  const baseClasses = cn("absolute pointer-events-none", opacity, position);

  const animateProps = {
    y: [0, -20, 0],
    x: [0, 10, 0],
    rotate: type === "square" ? [0, 45, 0] : [0, 10, 0],
  };

  if (type === "triangle") {
    return (
      <motion.div
        className={cn(baseClasses, color)}
        animate={animateProps}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid currentColor`,
        }}
      />
    );
  }

  return (
    <motion.div
      className={cn(
        baseClasses,
        color,
        type === "circle" ? "rounded-full" : "rounded-lg"
      )}
      style={{ width: size, height: size }}
      animate={animateProps}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function FloatingShapes({ className }: FloatingShapesProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      aria-hidden="true"
    >
      {shapes.map((shape, i) => (
        <Shape key={i} {...shape} />
      ))}
    </div>
  );
}
