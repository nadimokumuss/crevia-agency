"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";

export default function CreviaWorksBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-r from-koyu-yesil via-orman-yesili to-koyu-yesil"
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(224,187,70,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(224,187,70,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(224,187,70,0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative hardal-sarisi lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hardal-sarisi/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hardal-sarisi/30 to-transparent" />

      {/* Decorative dots */}
      <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-hardal-sarisi/20" />
      <div className="absolute top-16 left-24 w-1.5 h-1.5 rounded-full bg-hardal-sarisi/15" />
      <div className="absolute bottom-12 right-16 w-2.5 h-2.5 rounded-full bg-hardal-sarisi/20" />
      <div className="absolute bottom-8 right-32 w-1.5 h-1.5 rounded-full bg-hardal-sarisi/15" />
      <div className="absolute top-1/2 right-8 w-2 h-2 rounded-full bg-hardal-sarisi/10" />

      {/* Decorative lines */}
      <div className="absolute top-12 right-20 w-16 h-px bg-hardal-sarisi/15 rotate-45" />
      <div className="absolute bottom-16 left-16 w-20 h-px bg-hardal-sarisi/15 -rotate-12" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-6"
          >
            <Badge>Crevia Works</Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="font-clash text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Reklam ve Satış İçin İş Araçları
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="font-poppins text-nane-yesili/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Crevia Works altında satış ekipleri için müşteri keşfi ve önceliklendirme
            araçları geliştiriyor; reklam operasyonları için önceki prototipimizi
            yeniden tasarlıyoruz.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <Button href="/crevia-works" size="lg">
              Crevia Works&apos;ü Keşfet
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
