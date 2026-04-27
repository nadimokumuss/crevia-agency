"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import IconBox from "@/components/ui/IconBox";
import Button from "@/components/ui/Button";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { services } from "@/data/services";

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isOdd = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={isOdd ? fadeInLeft : fadeInRight}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-col ${
        isOdd ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-12 items-center py-12 ${
        index < services.length - 1 ? "border-b border-mat-yesil/20" : ""
      }`}
    >
      {/* Icon + Content */}
      <div className="flex-1 space-y-4">
        <IconBox icon={service.icon} variant="primary" size="lg" />
        <h3 className="font-clash text-2xl md:text-3xl font-bold text-white">
          {service.title}
        </h3>
        <p className="font-poppins text-nane-yesili/70 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 pt-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check className="w-4 h-4 text-hardal-sarisi flex-shrink-0" />
              <span className="font-poppins text-sm text-nane-yesili/80">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Button href="/iletisim" variant="outline" size="sm">
            Teklif Alın
          </Button>
        </div>
      </div>

      {/* Placeholder visual */}
      <div className="flex-1 w-full">
        <div className="bg-gradient-to-br from-orman-yesili to-mat-yesil/30 rounded-2xl h-64 lg:h-72 flex items-center justify-center border border-mat-yesil/20">
          <service.icon className="w-16 h-16 text-hardal-sarisi/30" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesList() {
  return (
    <Section>
      <Container>
        {services.map((service, index) => (
          <ServiceItem key={service.id} service={service} index={index} />
        ))}
      </Container>
    </Section>
  );
}
