"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";

export default function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-orman-yesili/30 relative overflow-hidden"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-clash text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Projenizi Hayata Geçirelim
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="font-poppins text-nane-yesili/70 text-lg leading-relaxed mb-8"
          >
            Fikirlerinizi gerçeğe dönüştürmek için sabırsızlanıyoruz.
            Markanızın dijital dönüşümünü birlikte başlatalım.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <Button href="/iletisim" size="lg">
              Bizimle İletişime Geçin
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
