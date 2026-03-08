"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { fadeInRight, staggerContainer } from "@/lib/animations";

const contactItems = [
  {
    icon: Mail,
    label: "E-posta",
    value: "info@creviagency.com",
    href: "mailto:info@creviagency.com",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Acıbadem, Acıbadem Cd. no: 169 34660 Üsküdar/İstanbul",
    href: undefined,
  },
];

export default function ContactInfo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-6"
    >
      {contactItems.map((item) => {
        const Content = (
          <motion.div
            key={item.label}
            variants={fadeInRight}
            className="flex gap-4 items-start"
          >
            <div className="w-12 h-12 bg-hardal-sarisi/15 rounded-xl flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-hardal-sarisi" />
            </div>
            <div>
              <p className="font-syne text-sm text-nane-yesili/60 mb-0.5">
                {item.label}
              </p>
              <p className="font-poppins text-white break-words">{item.value}</p>
            </div>
          </motion.div>
        );

        if (item.href) {
          return (
            <a
              key={item.label}
              href={item.href}
              className="block hover:opacity-80 transition-opacity"
            >
              {Content}
            </a>
          );
        }

        return <div key={item.label}>{Content}</div>;
      })}
    </motion.div>
  );
}
