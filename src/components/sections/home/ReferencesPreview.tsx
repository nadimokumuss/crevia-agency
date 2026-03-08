"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/data/projects";

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
              {/* Background placeholder */}
              <div className="bg-orman-yesili h-64 w-full" />

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
