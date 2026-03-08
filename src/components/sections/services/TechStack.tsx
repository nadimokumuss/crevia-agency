"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Node.js",
  "WordPress",
  "Shopify",
];

export default function TechStack() {
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
        >
          <SectionHeading
            title="Kullandığımız Teknolojiler"
            subtitle="Projelerinizde en güncel teknolojileri kullanıyoruz."
            centered
          />
        </motion.div>
      </Container>

      {/* Marquee scroll */}
      <div className="overflow-hidden mt-8">
        <div className="flex animate-[marquee_20s_linear_infinite]">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 px-8 py-4 mx-2 rounded-xl bg-orman-yesili/30 border border-mat-yesil/20"
            >
              <span className="font-syne text-lg font-medium text-mat-yesil whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS keyframe for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Section>
  );
}
