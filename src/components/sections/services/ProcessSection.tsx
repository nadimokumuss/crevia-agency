"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, FileText, Code, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Keşif",
    description: "Projenizi ve hedeflerinizi detaylıca analiz ediyoruz.",
  },
  {
    number: 2,
    icon: FileText,
    title: "Planlama",
    description: "Strateji ve yol haritasını birlikte belirliyoruz.",
  },
  {
    number: 3,
    icon: Code,
    title: "Geliştirme",
    description: "Projenizi en güncel teknolojilerle hayata geçiriyoruz.",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Teslim",
    description: "Test edilmiş ve optimize edilmiş projenizi teslim ediyoruz.",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section variant="gradient">
      <Container>
        <SectionHeading
          title="Çalışma Sürecimiz"
          subtitle="Projelerinizi 4 adımda hayata geçiriyoruz."
          centered
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-mat-yesil/30 -translate-y-1/2 z-0" />

          {/* Connection line - mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-6 w-px bg-mat-yesil/30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center"
              >
                {/* Number circle */}
                <div className="w-12 h-12 rounded-full bg-hardal-sarisi text-koyu-yesil flex items-center justify-center font-clash text-lg font-bold flex-shrink-0">
                  {step.number}
                </div>

                <div className="lg:mt-4">
                  {/* Icon */}
                  <div className="lg:flex lg:justify-center lg:mb-3">
                    <step.icon className="w-6 h-6 text-hardal-sarisi" />
                  </div>

                  <h3 className="font-syne text-lg font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="font-poppins text-sm text-nane-yesili/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
