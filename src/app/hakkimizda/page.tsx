import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import StorySection from "@/components/sections/about/StorySection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import MissionSection from "@/components/sections/about/MissionSection";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Crevia Agency hakkında bilgi edinin. Hikayemiz, değerlerimiz, ekibimiz ve vizyonumuz.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <MissionSection />
    </>
  );
}
