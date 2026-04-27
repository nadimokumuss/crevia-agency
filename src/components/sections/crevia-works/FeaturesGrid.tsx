"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Plug,
  BarChart3,
  FileBarChart,
  Users,
  FolderKanban,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBox from "@/components/ui/IconBox";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: Plug,
    title: "Kolay Entegrasyon",
    description: "Mevcut sistemlerinizle sorunsuz entegrasyon. API desteği ile hızlı kurulum.",
  },
  {
    icon: BarChart3,
    title: "Gerçek Zamanlı Analitik",
    description:
      "Anlık verilerle performansınızı takip edin ve veri odaklı kararlar alın.",
  },
  {
    icon: FileBarChart,
    title: "Otomatik Raporlama",
    description:
      "Özelleştirilebilir raporlar ile zaman kazanın. Otomatik e-posta bildirimleri.",
  },
  {
    icon: Users,
    title: "Müşteri Yönetimi",
    description:
      "Müşteri ilişkilerinizi tek bir yerden yönetin. CRM entegrasyonu dahil.",
  },
  {
    icon: FolderKanban,
    title: "Proje Takibi",
    description:
      "Projelerinizi Kanban, liste veya takvim görünümünde takip edin.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Altyapı",
    description:
      "SSL sertifikası, veri şifreleme ve düzenli yedekleme ile verileriniz güvende.",
  },
];

export default function FeaturesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section variant="gradient">
      <Container>
        <SectionHeading
          title="Özellikler"
          subtitle="Tüm ürünlerimizde standart olarak sunduğumuz özellikler."
          centered
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="bg-orman-yesili/30 rounded-2xl p-6 border border-mat-yesil/20"
            >
              <IconBox icon={feature.icon} variant="primary" size="md" className="mb-4" />
              <h3 className="font-syne text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="font-poppins text-sm text-nane-yesili/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
