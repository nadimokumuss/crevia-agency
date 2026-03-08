"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/creviagency/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/crevia-agency" },
];

export default function SocialLinks() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="font-syne text-lg font-semibold text-white mb-4">
        Bizi Takip Edin
      </h3>
      <div className="flex gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-10 h-10 rounded-full bg-orman-yesili/50 flex items-center justify-center text-nane-yesili/70 hover:bg-hardal-sarisi hover:text-koyu-yesil hover:scale-110 transition-all duration-200"
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}
