"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FloatingShapes from "@/components/ui/FloatingShapes";
import {
  fadeInUp,
  staggerContainer,
} from "@/lib/animations";

const heroWords = "Dijital Dünyada İz Bırakan Çözümler".split(" ");

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-koyu-yesil to-orman-yesili"
    >
      {/* Floating background shapes */}
      <FloatingShapes />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(176, 211, 194, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(176, 211, 194, 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10 text-center py-20">
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8"
        >
          <Badge>Yaratıcı Ajans</Badge>
        </motion.div>

        {/* Heading with stagger word reveal */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-clash text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {heroWords.map((word, i) => (
            <motion.span
              key={i}
              variants={fadeInUp}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Slogans */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10"
        >
          {[
            { emoji: "🚀", text: "Dijitali deneyime dönüştürüyoruz." },
            { emoji: "🎯", text: "360° dijital strateji." },
            { emoji: "⚡️", text: "Cesur. Yaratıcı. Etkili." },
          ].map((slogan, i) => (
            <motion.span
              key={i}
              variants={fadeInUp}
              className="font-syne text-base sm:text-lg md:text-xl text-nane-yesili/80"
            >
              {slogan.emoji} {slogan.text}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/hizmetlerimiz" size="lg">
            Hizmetlerimizi Keşfedin
          </Button>
          <Button href="/referanslarimiz" variant="outline" size="lg">
            Projelerimiz
          </Button>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-nane-yesili/50"
        >
          <span className="font-poppins text-xs tracking-widest uppercase">
            Keşfet
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
