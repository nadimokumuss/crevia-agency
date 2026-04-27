"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "w-16 h-1 rounded-full mb-6",
          "bg-hardal-sarisi",
          centered && "mx-auto"
        )}
      />

      <h2
        className={cn(
          "font-clash text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-white"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "font-syne text-lg md:text-xl mt-4 max-w-2xl",
            centered && "mx-auto",
            light ? "text-nane-yesili/80" : "text-nane-yesili/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
