"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      layout
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* Placeholder background */}
      <div className="bg-gradient-to-br from-orman-yesili to-mat-yesil h-64 relative">
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge>{project.category}</Badge>
        </div>

        {/* Placeholder icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-clash text-5xl font-bold text-nane-yesili/10">
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-koyu-yesil/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="font-clash text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>
          <p className="font-poppins text-sm text-nane-yesili/80 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-poppins text-hardal-sarisi bg-hardal-sarisi/10 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
