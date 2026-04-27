"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Share2, Video, PenTool } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/data/projects";

const categoryVisuals: Record<string, { gradient: string; icon: React.ReactNode }> = {
  "Web Tasarım": {
    gradient: "from-[#0E2815] via-[#1a3d26] to-[#295740]",
    icon: <Globe className="w-10 h-10 text-hardal-sarisi/50" strokeWidth={1} />,
  },
  "Sosyal Medya": {
    gradient: "from-[#2a0e1a] via-[#3d1525] to-[#5c1e35]",
    icon: <Share2 className="w-10 h-10 text-[#E0BB46]/50" strokeWidth={1} />,
  },
  "Video Prodüksiyon": {
    gradient: "from-[#1a1a0e] via-[#2a2a10] to-[#3d3d15]",
    icon: <Video className="w-10 h-10 text-nane-yesili/50" strokeWidth={1} />,
  },
  "Grafik Tasarım": {
    gradient: "from-[#0e1a1a] via-[#0f2828] to-[#153a3a]",
    icon: <PenTool className="w-10 h-10 text-hardal-sarisi/50" strokeWidth={1} />,
  },
};

export default function ReferencesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const previewProjects = projects.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-koyu-yesil relative overflow-hidden">
      <Container>
        <SectionHeading
          title="Referanslarımız"
          subtitle="Başarıyla tamamladığımız projelerden örnekler"
          centered
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {previewProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              {/* Background */}
              {(() => {
                const visual = categoryVisuals[project.category] ?? { gradient: "from-orman-yesili to-mat-yesil", icon: null };
                return (
                  <div className={`bg-gradient-to-br ${visual.gradient} h-64 w-full relative overflow-hidden`}>
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="absolute w-32 h-32 rounded-full bg-white/5 -top-8 -right-8" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm">{visual.icon}</div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-gradient-to-t from-black/40 to-transparent">
                      <p className="font-clash text-sm font-bold text-white/80 truncate">{project.title}</p>
                    </div>
                  </div>
                );
              })()}

              {/* Category badge - top left */}
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="dark">{project.category}</Badge>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-koyu-yesil/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="font-clash text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="font-poppins text-sm text-nane-yesili/80 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-poppins text-hardal-sarisi/80 bg-hardal-sarisi/10 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Link */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button href="/referanslarimiz" variant="outline" size="lg">
            Tüm Projelerimizi Görün
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
