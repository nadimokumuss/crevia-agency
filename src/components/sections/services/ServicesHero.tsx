"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { fadeInUp } from "@/lib/animations";

export default function ServicesHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-[40vh] flex items-center relative overflow-hidden bg-gradient-to-b from-orman-yesili/20 to-koyu-yesil"
    >
      <FloatingShapes />

      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(176, 211, 194, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(176, 211, 194, 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10 text-center py-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="w-16 h-1 bg-hardal-sarisi rounded-full mx-auto mb-6" />
          <h1 className="font-clash text-4xl md:text-6xl font-bold text-white mb-4">
            Hizmetlerimiz
          </h1>
          <p className="font-syne text-lg md:text-xl text-nane-yesili/80 max-w-2xl mx-auto">
            Markanızı dijital dünyada öne çıkaracak kapsamlı hizmetlerimiz.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
