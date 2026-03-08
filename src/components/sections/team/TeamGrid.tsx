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
              {/* Placeholder image area */}
              <div className="bg-mat-yesil/20 h-56 flex items-center justify-center">
                <span className="font-clash text-5xl text-nane-yesili/30 font-bold">
                  {member.name.charAt(0)}
                </span>
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
