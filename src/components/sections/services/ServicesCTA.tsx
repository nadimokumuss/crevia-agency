"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";

export default function ServicesCTA() {
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
          className="bg-orman-yesili/30 rounded-2xl border border-mat-yesil/20 py-16 px-8 text-center"
        >
          <h2 className="font-clash text-3xl md:text-4xl font-bold text-white mb-4">
            Projeniz İçin Teklif Alın
          </h2>
          <p className="font-poppins text-nane-yesili/70 max-w-xl mx-auto mb-8">
            Dijital dönüşüm yolculuğunuzda yanınızdayız. Projenizi konuşalım ve
            size özel bir teklif hazırlayalım.
          </p>
          <Button href="/iletisim" size="lg">
            İletişime Geçin
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
