"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { fadeInUp } from "@/lib/animations";
import Button from "./Button";
import Container from "./Container";

interface CreviaWorksCTAProps {
  variant?: "inline" | "banner";
  className?: string;
}

export default function CreviaWorksCTA({
  variant = "inline",
  className,
}: CreviaWorksCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (variant === "inline") {
    return (
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={cn(
          "rounded-2xl border border-hardal-sarisi/20 bg-orman-yesili/50 p-6",
          "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
          className
        )}
      >
        <div>
          <div className="w-10 h-0.5 bg-hardal-sarisi mb-3" />
          <h4 className="font-clash text-lg font-semibold text-white">
            See Our Work in Action
          </h4>
          <p className="font-poppins text-sm text-nane-yesili/70 mt-1">
            Explore the projects that define our craft.
          </p>
        </div>

        <Button href="/crevia-works" variant="primary" size="sm">
          Crevia Works
          <ArrowRight size={16} />
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-orman-yesili via-mat-yesil/40 to-orman-yesili",
        "py-16 md:py-20",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(224,187,70,0.08),transparent_60%)]" />

      <Container>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="w-16 h-1 bg-hardal-sarisi rounded-full mx-auto mb-6" />

          <h3 className="font-clash text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Crevia Works
          </h3>

          <p className="font-poppins text-nane-yesili/80 text-lg mb-8">
            From concept to launch, explore the projects and results that
            showcase our expertise in digital transformation.
          </p>

          <Button href="/crevia-works" variant="primary" size="lg">
            View Our Portfolio
            <ArrowRight size={20} />
          </Button>
        </div>
      </Container>
    </motion.div>
  );
}
