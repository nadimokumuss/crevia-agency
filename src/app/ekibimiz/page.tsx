import type { Metadata } from "next";
import TeamHero from "@/components/sections/team/TeamHero";
import TeamGrid from "@/components/sections/team/TeamGrid";

export const metadata: Metadata = {
  title: "Ekibimiz",
  description:
    "Crevia Agency ekibiyle tanışın. Projelerinizi hayata geçiren tutkulu ve uzman kadromuz.",
};

export default function EkibimizPage() {
  return (
    <>
      <TeamHero />
      <TeamGrid />
    </>
  );
}
