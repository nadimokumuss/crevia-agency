"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  const current = testimonials[activeIndex];

  return (
    <section className="py-20 md:py-28 bg-koyu-yesil relative overflow-hidden">
      <Container>
        <SectionHeading
          title="Müşterilerimiz Ne Diyor?"
          subtitle="Birlikte çalıştığımız markaların deneyimleri"
          centered
        />

        <div
          ref={ref}
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial card */}
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center"
              >
                {/* Quote icon */}
                <div className="flex justify-center mb-6">
                  <Quote className="w-10 h-10 text-hardal-sarisi" />
                </div>

                {/* Testimonial text */}
                <p className="font-poppins text-lg md:text-xl text-nane-yesili/90 italic leading-relaxed mb-8">
                  &ldquo;{current.content}&rdquo;
                </p>

                {/* Author info */}
                <div>
                  <p className="font-syne font-semibold text-white text-base">
                    {current.name}
                  </p>
                  <p className="font-poppins text-sm text-nane-yesili/60 mt-1">
                    {current.role}, {current.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                  index === activeIndex
                    ? "bg-hardal-sarisi w-8"
                    : "bg-mat-yesil/40 hover:bg-mat-yesil/60"
                )}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
