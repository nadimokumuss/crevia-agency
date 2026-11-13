import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import SocialLinks from "@/components/sections/contact/SocialLinks";
import MapSection from "@/components/sections/contact/MapSection";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Crevia Agency ile iletişime geçin. Projeniz için teklif alın, sorularınızı sorun.",
};

export default function IletisimPage() {
  return (
    <>
      <ContactHero />
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Form */}
            <div>
              <h2 className="font-clash text-2xl font-bold text-white mb-6">
                Bize Yazın
              </h2>
              <ContactForm enabled={Boolean(process.env.RESEND_API_KEY && process.env.CREVIA_CONTACT_FROM_EMAIL)} />
            </div>

            {/* Right - Contact Info + Social + Map */}
            <div className="space-y-10">
              <div>
                <h2 className="font-clash text-2xl font-bold text-white mb-6">
                  İletişim Bilgileri
                </h2>
                <ContactInfo />
              </div>

              <SocialLinks />
              <MapSection />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
