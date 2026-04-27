"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { categories } from "@/data/projects";

interface ProjectFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "relative px-5 py-2.5 rounded-full font-syne text-sm font-medium transition-colors duration-200 cursor-pointer",
            activeCategory === category
              ? "text-koyu-yesil"
              : "bg-orman-yesili/50 text-nane-yesili/80 hover:bg-orman-yesili/70"
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="filter"
              className="absolute inset-0 bg-hardal-sarisi rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
}
