"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Shield, Sparkles, Target } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBox from "@/components/ui/IconBox";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const values = [
  {
    icon: Lightbulb,
    title: "Yenilikçilik",
    description:
      "En son teknolojileri ve trendleri takip ederek projelerimizde yenilikçi çözümler sunuyoruz.",
  },
  {
    icon: Shield,
    title: "Güvenilirlik",
    description:
      "Zamanında teslimat, şeffaf iletişim ve kaliteli sonuçlarla güveninizi kazanıyoruz.",
  },
  {
    icon: Sparkles,
    title: "Yaratıcılık",
    description:
      "Her projede özgün ve yaratıcı yaklaşımlarla markanızı rakiplerinden ayırıyoruz.",
  },
  {
    icon: Target,
    title: "Sonuç Odaklılık",
    description:
      "Sadece güzel tasarımlar değil, ölçülebilir sonuçlar üreten stratejiler geliştiriyoruz.",
  },
];

export default function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section variant="gradient">
      <Container>
        <SectionHeading
          title="Değerlerimiz"
          subtitle="Bizi biz yapan temel değerlerimiz."
          centered
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              className="bg-orman-yesili/50 rounded-2xl p-8 border border-mat-yesil/20"
            >
              <IconBox icon={value.icon} variant="primary" size="lg" className="mb-4" />
              <h3 className="font-syne text-xl font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="font-poppins text-sm text-nane-yesili/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
