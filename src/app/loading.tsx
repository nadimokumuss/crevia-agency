"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-koyu-yesil">
      {/* Animated circles */}
      <div className="relative mb-8 h-20 w-20">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-hardal-sarisi/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Middle ring */}
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-nane-yesili/40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        {/* Inner dot */}
        <motion.div
          className="absolute inset-5 rounded-full bg-hardal-sarisi"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
      </div>

      {/* Brand text */}
      <motion.p
        className="font-clash text-xl font-semibold text-white"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Crevia
      </motion.p>

      {/* Loading label */}
      <motion.p
        className="mt-3 font-poppins text-sm text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Yükleniyor...
      </motion.p>
    </div>
  );
}
