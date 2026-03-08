import HeroSection from "@/components/sections/home/HeroSection";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import StatsSection from "@/components/sections/home/StatsSection";
import ReferencesPreview from "@/components/sections/home/ReferencesPreview";
import CreviaWorksBanner from "@/components/sections/home/CreviaWorksBanner";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import ContactCTA from "@/components/sections/home/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <ReferencesPreview />
      <CreviaWorksBanner />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
