"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(amount = 0.3) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  return { ref, isInView };
}
