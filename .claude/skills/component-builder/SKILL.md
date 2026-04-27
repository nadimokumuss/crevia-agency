# Component Builder Skill

## Açıklama
Crevia Agency projesi için yeni UI bileşenleri oluşturma yeteneği.

## Kurallar
1. Bileşen dosyaları `src/components/` altında uygun dizine yerleştirilir
2. İnteraktif bileşenler "use client" direktifi ile işaretlenir
3. Props için TypeScript interface tanımlanır
4. `cn()` yardımcısı className birleştirme için kullanılır
5. Animasyonlar `@/lib/animations` merkezi varyantlarından import edilir
6. Renk tokenleri Tailwind sınıfları olarak kullanılır (bg-koyu-yesil, text-hardal-sarisi vb.)
7. Responsive tasarım: mobile-first yaklaşım

## Şablon
```tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeInUp } from "@/lib/animations";

interface ComponentNameProps {
  className?: string;
}

export function ComponentName({ className }: ComponentNameProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn("", className)}
    >
      {/* Content */}
    </motion.div>
  );
}
```
