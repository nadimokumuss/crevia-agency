"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export default function MissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section variant="gradient">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {/* Misyonumuz */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="w-16 h-1 bg-hardal-sarisi rounded-full mb-6" />
            <h2 className="font-syne text-xl font-semibold text-hardal-sarisi mb-4 uppercase tracking-wider">
              Misyonumuz
            </h2>
            <p className="font-clash text-3xl md:text-4xl font-bold text-white leading-tight">
              Dijital dünyada markaların en güçlü versiyonlarını ortaya çıkarmak.
            </p>
          </motion.div>

          {/* Vizyonumuz */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="w-16 h-1 bg-hardal-sarisi rounded-full mb-6" />
            <h2 className="font-syne text-xl font-semibold text-hardal-sarisi mb-4 uppercase tracking-wider">
              Vizyonumuz
            </h2>
            <p className="font-clash text-3xl md:text-4xl font-bold text-white leading-tight">
              Türkiye&apos;nin en yenilikçi dijital ajansı olmak.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
