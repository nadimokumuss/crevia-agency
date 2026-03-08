"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { services } from "@/data/services";

export default function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-koyu-yesil relative overflow-hidden">
      <Container>
        <SectionHeading
          title="Hizmetlerimiz"
          subtitle="İşletmenizi dijital dünyada büyütecek çözümler"
          centered
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="bg-orman-yesili/50 rounded-2xl p-6 border border-mat-yesil/20 hover:-translate-y-1 hover:border-hardal-sarisi/30 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-hardal-sarisi/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-hardal-sarisi" />
                </div>

                {/* Title */}
                <h3 className="font-syne font-semibold text-lg text-white mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-poppins text-nane-yesili/70 text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Link */}
                <Link
                  href={`/hizmetlerimiz#${service.id}`}
                  className="inline-flex items-center text-sm font-syne font-medium text-hardal-sarisi hover:text-hardal-sarisi/80 transition-colors group-hover:gap-2 gap-1"
                >
                  Detaylı Bilgi
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
