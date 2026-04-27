"use client";

import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { staggerContainer } from "@/lib/animations";
import type { Project } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
