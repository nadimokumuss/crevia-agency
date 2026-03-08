"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  imageAlt = "",
  children,
  className,
}: CardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-orman-yesili rounded-2xl border border-mat-yesil/20 overflow-hidden",
        "transition-colors duration-200",
        className
      )}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        {title && (
          <h3 className="font-clash text-xl font-semibold text-white mb-2">
            {title}
          </h3>
        )}

        {description && (
          <p className="font-poppins text-nane-yesili/70 text-sm leading-relaxed">
            {description}
          </p>
        )}

        {children}
      </div>
    </motion.div>
  );
}
