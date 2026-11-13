import HeroSection from "@/components/sections/home/HeroSection";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import CreviaWorksBanner from "@/components/sections/home/CreviaWorksBanner";
import ContactCTA from "@/components/sections/home/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <CreviaWorksBanner />
      <ContactCTA />
    </>
  );
}
