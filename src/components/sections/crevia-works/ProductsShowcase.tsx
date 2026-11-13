import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight, CheckCircle2, Clock3 } from "lucide-react";
import Link from "next/link";

const featuredProducts = [
  {
    name: "Crevia Sales OS",
    kicker: "Satış Operasyonları",
    status: "Geliştirme / İç Kullanım",
    ready: true,
    description:
      "Ajansların potansiyel müşterileri keşfetmesine, önceliklendirmesine ve satış takip süreçlerini tek yerden yönetmesine yardımcı olmak için geliştirilen sistem.",
    features: [
      "Yetkili kullanıcının başlattığı müşteri taraması",
      "Kurallara dayalı ihtiyaç ve öncelik puanlaması",
      "CRM ve satış iş akışlarının takibi",
    ],
  },
  {
    name: "Crevia Ad Bot",
    kicker: "Reklam Operasyonları",
    status: "Yeniden Geliştirme Planında",
    ready: false,
    description:
      "Reklam hesaplarının izlenmesi, kampanya durumlarının değerlendirilmesi ve operasyonel uyarılar için daha önce geliştirilen prototip. Güncel bir ürün olarak kullanıma sunulmuyor.",
    features: [
      "Kampanya izleme yaklaşımı",
      "Raporlama ve uyarı akışları",
      "Yeni sürümün tasarım ve geliştirme planı",
    ],
  },
];

const otherProducts = [
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

export default function ProductsShowcase() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Ürün Çalışmalarımız"
          subtitle="Satış, reklam ve ajans operasyonlarına yönelik çözümlerimiz."
          centered
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProducts.map((product) => (
            <article key={product.name} className="rounded-2xl border border-mat-yesil/30 bg-orman-yesili/30 p-7 md:p-9">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <span className="font-syne text-xs font-semibold uppercase tracking-widest text-hardal-sarisi">
                  {product.kicker}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-mat-yesil/40 px-3 py-1 text-xs text-nane-yesili/80">
                  {product.ready ? <CheckCircle2 size={14} /> : <Clock3 size={14} />}
                  {product.status}
                </span>
              </div>
              <h2 className="mb-4 font-clash text-3xl font-bold text-white">{product.name}</h2>
              <p className="mb-6 font-poppins leading-relaxed text-nane-yesili/75">{product.description}</p>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-nane-yesili/85">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-hardal-sarisi" size={17} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/iletisim" className="mt-8 inline-flex items-center gap-2 font-syne font-semibold text-hardal-sarisi hover:underline">
                Detaylı Bilgi Alın <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="mb-6 font-clash text-2xl font-bold text-white md:text-3xl">
            Diğer Çözümlerimiz
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProducts.map((product) => (
              <article
                key={product.name}
                className="rounded-2xl border border-hardal-sarisi/20 bg-gradient-to-br from-orman-yesili to-koyu-yesil p-7 transition-colors hover:border-hardal-sarisi/50"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-hardal-sarisi" />
                <h3 className="mb-3 font-clash text-2xl font-bold text-white">
                  {product.name}
                </h3>
                <p className="mb-6 font-poppins text-sm leading-relaxed text-nane-yesili/70">
                  {product.description}
                </p>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-nane-yesili/85">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-hardal-sarisi" size={17} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
