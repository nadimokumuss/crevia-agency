import type { Metadata } from "next";
import WorksHero from "@/components/sections/crevia-works/WorksHero";
import ProductsShowcase from "@/components/sections/crevia-works/ProductsShowcase";
import FeaturesGrid from "@/components/sections/crevia-works/FeaturesGrid";
import WorksCTA from "@/components/sections/crevia-works/WorksCTA";

export const metadata: Metadata = {
  title: "Crevia Works",
  description:
    "Crevia Works - Dijital iş süreçlerinizi hızlandıran SaaS çözümlerimiz. Ajans yönetim paneli, müşteri portal ve proje takip sistemi.",
};

export default function CreviaWorksPage() {
  return (
    <>
      <WorksHero />
      <ProductsShowcase />
      <FeaturesGrid />
      <WorksCTA />
    </>
  );
}
