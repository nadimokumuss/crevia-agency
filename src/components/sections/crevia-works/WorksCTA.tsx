"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { fadeInUp } from "@/lib/animations";

export default function WorksCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section>
      <Container>
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center py-12"
        >
          <h2 className="font-clash text-3xl md:text-4xl font-bold text-white mb-4">
            Hemen Başlayın
          </h2>
          <p className="font-poppins text-nane-yesili/70 max-w-xl mx-auto mb-8">
            Dijital iş süreçlerinizi bugünden dönüştürmeye başlayın. Demo talep
            edin veya hemen ücretsiz deneyin.
          </p>

          <motion.a
            href="/iletisim"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center justify-center gap-2 bg-hardal-sarisi text-koyu-yesil font-syne font-semibold px-8 py-4 text-lg rounded-xl cursor-pointer"
          >
            Hemen Başlayın
          </motion.a>
        </motion.div>
      </Container>
    </Section>
  );
}
