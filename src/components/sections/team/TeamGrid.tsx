"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { team } from "@/data/team";

export default function TeamGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section>
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl overflow-hidden bg-orman-yesili border border-mat-yesil/20"
            >
              {/* Avatar area */}
              <div
                className="h-56 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, hsl(${(member.id.charCodeAt(member.id.length - 1) * 37) % 360}, 25%, 18%), hsl(${(member.id.charCodeAt(member.id.length - 1) * 37 + 40) % 360}, 30%, 28%))`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute w-32 h-32 rounded-full bg-white/5 -top-8 -right-8" />
                <div className="absolute w-20 h-20 rounded-full bg-white/5 -bottom-6 -left-6" />
                <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <span className="font-clash text-2xl font-bold text-white/70">
                    {member.name.split(" ").map((n) => n.charAt(0)).join("")}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-syne text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="font-poppins text-sm text-nane-yesili/70 mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
