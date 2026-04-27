"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  ShoppingBag,
  Layers,
  TrendingUp,
  Share2,
  Video,
  PenTool,
  Cpu,
  LayoutGrid,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/data/projects";

interface CategoryStyle {
  gradient: string;
  accent: string;
  icon: React.ReactNode;
  shapes: string;
}

const categoryStyles: Record<string, CategoryStyle> = {
  "Web Tasarım": {
    gradient: "from-[#0E2815] via-[#1a3d26] to-[#295740]",
    accent: "bg-hardal-sarisi/20",
    icon: <Globe className="w-12 h-12 text-hardal-sarisi/40" strokeWidth={1} />,
    shapes: "before:absolute before:w-32 before:h-32 before:rounded-full before:bg-hardal-sarisi/5 before:-top-8 before:-right-8",
  },
  "Marka Kimliği": {
    gradient: "from-[#2a1a0e] via-[#3d2a10] to-[#5c3d14]",
    accent: "bg-[#E0BB46]/15",
    icon: <Palette className="w-12 h-12 text-[#E0BB46]/50" strokeWidth={1} />,
    shapes: "before:absolute before:w-40 before:h-40 before:rounded-full before:bg-[#E0BB46]/5 before:-bottom-10 before:-right-10",
  },
  "E-Ticaret": {
    gradient: "from-[#0e1a2a] via-[#102436] to-[#1a3a52]",
    accent: "bg-nane-yesili/10",
    icon: <ShoppingBag className="w-12 h-12 text-nane-yesili/40" strokeWidth={1} />,
    shapes: "before:absolute before:w-36 before:h-36 before:rounded-full before:bg-nane-yesili/5 before:-top-6 before:-left-6",
  },
  "UI/UX": {
    gradient: "from-[#1a0e2a] via-[#251540] to-[#3a2060]",
    accent: "bg-[#B0D3C2]/10",
    icon: <Layers className="w-12 h-12 text-[#B0D3C2]/40" strokeWidth={1} />,
    shapes: "before:absolute before:w-44 before:h-44 before:rounded-full before:bg-[#B0D3C2]/5 before:-bottom-12 before:-left-8",
  },
  "Dijital Pazarlama": {
    gradient: "from-[#0e2020] via-[#0f3030] to-[#154040]",
    accent: "bg-hardal-sarisi/15",
    icon: <TrendingUp className="w-12 h-12 text-hardal-sarisi/45" strokeWidth={1} />,
    shapes: "before:absolute before:w-32 before:h-32 before:rounded-full before:bg-hardal-sarisi/5 before:top-1/2 before:-right-8",
  },
  "Sosyal Medya": {
    gradient: "from-[#2a0e1a] via-[#3d1525] to-[#5c1e35]",
    accent: "bg-[#E0BB46]/10",
    icon: <Share2 className="w-12 h-12 text-[#E0BB46]/40" strokeWidth={1} />,
    shapes: "before:absolute before:w-28 before:h-28 before:rounded-full before:bg-[#E0BB46]/5 before:-top-4 before:-right-4",
  },
  "Video Prodüksiyon": {
    gradient: "from-[#1a1a0e] via-[#2a2a10] to-[#3d3d15]",
    accent: "bg-nane-yesili/10",
    icon: <Video className="w-12 h-12 text-nane-yesili/40" strokeWidth={1} />,
    shapes: "before:absolute before:w-40 before:h-40 before:rounded-full before:bg-nane-yesili/5 before:-bottom-8 before:-right-8",
  },
  "Grafik Tasarım": {
    gradient: "from-[#0e1a1a] via-[#0f2828] to-[#153a3a]",
    accent: "bg-hardal-sarisi/15",
    icon: <PenTool className="w-12 h-12 text-hardal-sarisi/40" strokeWidth={1} />,
    shapes: "before:absolute before:w-36 before:h-36 before:rounded-full before:bg-hardal-sarisi/5 before:-top-8 before:-left-8",
  },
  "Yapay Zeka": {
    gradient: "from-[#0a1a2a] via-[#0c2236] to-[#0e2a42]",
    accent: "bg-[#B0D3C2]/15",
    icon: <Cpu className="w-12 h-12 text-[#B0D3C2]/50" strokeWidth={1} />,
    shapes: "before:absolute before:w-48 before:h-48 before:rounded-full before:bg-[#B0D3C2]/5 before:-bottom-16 before:-right-12",
  },
};

const defaultStyle: CategoryStyle = {
  gradient: "from-orman-yesili to-mat-yesil",
  accent: "bg-nane-yesili/10",
  icon: <LayoutGrid className="w-12 h-12 text-nane-yesili/40" strokeWidth={1} />,
  shapes: "",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const style = categoryStyles[project.category] ?? defaultStyle;

  return (
    <motion.div
      variants={fadeInUp}
      layout
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <div className={`bg-gradient-to-br ${style.gradient} h-64 relative overflow-hidden`}>
        {/* Decorative circle shape */}
        <div className={`absolute inset-0 ${style.shapes}`} />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge>{project.category}</Badge>
        </div>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`p-6 rounded-2xl ${style.accent} backdrop-blur-sm`}>
            {style.icon}
          </div>
        </div>

        {/* Bottom title strip (always visible) */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-gradient-to-t from-black/40 to-transparent">
          <h3 className="font-clash text-base font-bold text-white/90 truncate">
            {project.title}
          </h3>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-koyu-yesil/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="font-clash text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>
          <p className="font-poppins text-sm text-nane-yesili/80 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {project.description}
          </p>

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

interface ProjectCardProps {
  project: Project;
}
