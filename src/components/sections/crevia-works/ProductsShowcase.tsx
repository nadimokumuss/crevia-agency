"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const products = [
  {
    name: "Ajans Yönetim Paneli",
    description:
      "Ajansınızın tüm operasyonlarını tek bir panelden yönetin. Proje takibi, ekip yönetimi ve finansal raporlama bir arada.",
    features: [
      "Proje ve görev yönetimi",
      "Ekip performans takibi",
      "Finansal raporlama",
      "Müşteri iletişim yönetimi",
    ],
  },
  {
    name: "Müşteri Portal",
    description:
      "Müşterilerinize özel portal ile proje süreçlerini şeffaf ve etkili yönetin. Gerçek zamanlı güncellemeler ve onay süreçleri.",
    features: [
      "Gerçek zamanlı proje takibi",
      "Dosya paylaşımı",
      "Onay süreçleri",
      "Mesajlaşma sistemi",
    ],
  },
  {
    name: "Proje Takip Sistemi",
    description:
      "Projelerinizi baştan sona takip edin. Zaman çizelgesi, kaynak yönetimi ve otomatik bildirimlerle hiçbir detayı kaçırmayın.",
    features: [
      "Gantt şeması görünümü",
      "Kaynak planlama",
      "Otomatik bildirimler",
      "Zaman takibi",
    ],
  },
];

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    setRotateX((-mouseY / rect.height) * 8);
    setRotateY((mouseX / rect.width) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className="bg-gradient-to-br from-orman-yesili to-koyu-yesil rounded-2xl p-8 border border-hardal-sarisi/20 cursor-pointer"
    >
      <div className="w-10 h-1 bg-hardal-sarisi rounded-full mb-4" />
      <h3 className="font-clash text-2xl font-bold text-white mb-3">
        {product.name}
      </h3>
      <p className="font-poppins text-sm text-nane-yesili/70 leading-relaxed mb-6">
        {product.description}
      </p>

      <ul className="space-y-3">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="w-4 h-4 text-hardal-sarisi flex-shrink-0" />
            <span className="font-poppins text-sm text-nane-yesili/80">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ProductsShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section>
      <Container>
        <SectionHeading
          title="Ürünlerimiz"
          subtitle="İş süreçlerinizi dijitalleştiren SaaS çözümlerimiz."
          centered
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
