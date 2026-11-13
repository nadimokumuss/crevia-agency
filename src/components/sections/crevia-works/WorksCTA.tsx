import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function WorksCTA() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl py-12 text-center">
          <h2 className="mb-4 font-clash text-3xl font-bold text-white md:text-4xl">
            Ürünler Hakkında Konuşalım
          </h2>
          <p className="mb-8 font-poppins leading-relaxed text-nane-yesili/70">
            Satış ve reklam operasyonlarına yönelik ihtiyaçlarınız, iş birliği veya
            ürünlerin mevcut durumu hakkında bilgi almak için bize ulaşın.
          </p>
          <Link href="/iletisim" className="inline-flex items-center justify-center rounded-xl bg-hardal-sarisi px-8 py-4 font-syne font-semibold text-koyu-yesil hover:opacity-90">
            İletişime Geçin
          </Link>
        </div>
      </Container>
    </Section>
  );
}
