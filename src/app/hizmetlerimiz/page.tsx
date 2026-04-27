import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesList from "@/components/sections/services/ServicesList";
import ProcessSection from "@/components/sections/services/ProcessSection";
import TechStack from "@/components/sections/services/TechStack";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Web tasarım, marka kimliği, dijital pazarlama, UI/UX tasarım ve daha fazlası. Crevia Agency hizmetlerini keşfedin.",
};

export default function HizmetlerimizPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <TechStack />
      <ServicesCTA />
    </>
  );
}
