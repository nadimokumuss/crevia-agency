"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stats = [
  { value: 200, suffix: "+", label: "Tamamlanan Proje" },
  { value: 50, suffix: "+", label: "Mutlu Müşteri" },
  { value: 1, suffix: "+", label: "Yıllık Deneyim" },
  { value: 12, suffix: "", label: "Aktif Müşteri" },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-r from-orman-yesili/30 to-nane-yesili/10 relative overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="relative flex flex-col items-center text-center"
            >
              {/* Decorative divider on desktop (between items, not after last) */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-mat-yesil/30" />
              )}

              <div className="font-clash text-4xl md:text-5xl font-bold text-hardal-sarisi mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="font-poppins text-sm md:text-base text-nane-yesili/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
