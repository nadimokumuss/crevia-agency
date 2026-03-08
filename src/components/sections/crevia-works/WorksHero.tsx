"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function WorksHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-[40vh] flex items-center relative overflow-hidden bg-gradient-to-br from-koyu-yesil via-orman-yesili/30 to-koyu-yesil"
    >
      {/* Hardal accent radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(224,187,70,0.08),transparent_60%)]" />

      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(224, 187, 70, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(224, 187, 70, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative z-10 text-center py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <Badge>SaaS Products</Badge>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="w-16 h-1 bg-hardal-sarisi rounded-full mx-auto mb-6" />
            <h1 className="font-clash text-4xl md:text-6xl font-bold text-white mb-4">
              Crevia{" "}
              <span className="text-hardal-sarisi">Works</span>
            </h1>
            <p className="font-syne text-lg md:text-xl text-nane-yesili/80 max-w-2xl mx-auto">
              Dijital iş süreçlerinizi hızlandıran SaaS çözümlerimiz.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
