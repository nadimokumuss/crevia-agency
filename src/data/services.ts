import {
  Globe,
  Palette,
  TrendingUp,
  Layout,
  Search,
  ShoppingCart,
  Share2,
  Camera,
  PenTool,
  Bot,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "web-tasarim",
    title: "Web Tasarım & Yazılım Geliştirme",
    description:
      "Modern, hızlı ve kullanıcı dostu web siteleri tasarlıyor ve geliştiriyoruz. Next.js, React ve en güncel teknolojilerle projelerinizi hayata geçiriyoruz.",
    shortDescription:
      "Modern ve hızlı web siteleri ile dijital varlığınızı güçlendirin.",
    icon: Globe,
    features: [
      "Responsive Tasarım",
      "SEO Uyumlu Altyapı",
      "Hızlı Yükleme Süreleri",
      "Modern UI/UX",
    ],
  },
  {
    id: "marka-kimligi",
    title: "Marka Kimliği",
    description:
      "Markanızın DNA'sını oluşturuyoruz. Logo tasarımından kurumsal kimlik setine, renk paletinden tipografi seçimine kadar tüm marka ihtiyaçlarınızı karşılıyoruz.",
    shortDescription:
      "Markanızı benzersiz kılan görsel kimliğinizi oluşturuyoruz.",
    icon: Palette,
    features: [
      "Logo Tasarımı",
      "Kurumsal Kimlik",
      "Marka Rehberi",
      "Görsel Dil Oluşturma",
    ],
  },
  {
    id: "dijital-pazarlama",
    title: "Dijital Pazarlama",
    description:
      "Hedef kitlenize en etkili şekilde ulaşmanızı sağlıyoruz. Google Ads, sosyal medya yönetimi ve içerik stratejileri ile büyümenize katkıda bulunuyoruz.",
    shortDescription:
      "Dijital kanallardan hedef kitlenize ulaşın, büyümenizi hızlandırın.",
    icon: TrendingUp,
    features: [
      "Google Ads",
      "Sosyal Medya Yönetimi",
      "İçerik Stratejisi",
      "Performans Analizi",
    ],
  },
  {
    id: "ui-ux-tasarim",
    title: "UI/UX Tasarım",
    description:
      "Kullanıcı deneyimini merkezine alan arayüz tasarımları oluşturuyoruz. Araştırma, wireframe, prototip ve test süreçleriyle mükemmel deneyimler sunuyoruz.",
    shortDescription:
      "Kullanıcılarınızı memnun eden, dönüşüm odaklı arayüzler tasarlıyoruz.",
    icon: Layout,
    features: [
      "Kullanıcı Araştırması",
      "Wireframe & Prototip",
      "Kullanılabilirlik Testi",
      "Tasarım Sistemi",
    ],
  },
  {
    id: "seo-icerik",
    title: "SEO & İçerik",
    description:
      "Arama motorlarında üst sıralara çıkmanız için teknik SEO, içerik optimizasyonu ve link building stratejileri uyguluyoruz.",
    shortDescription:
      "Arama motorlarında görünürlüğünüzü artırın, organik trafiğinizi yükseltin.",
    icon: Search,
    features: [
      "Teknik SEO",
      "İçerik Optimizasyonu",
      "Anahtar Kelime Analizi",
      "Link Building",
    ],
  },
  {
    id: "e-ticaret",
    title: "E-Ticaret Çözümleri",
    description:
      "Online satışlarınızı artırmak için özelleştirilmiş e-ticaret platformları kuruyoruz. Ödeme entegrasyonu, stok yönetimi ve kullanıcı deneyimi optimizasyonu sağlıyoruz.",
    shortDescription:
      "Güçlü e-ticaret altyapısı ile online satışlarınızı artırın.",
    icon: ShoppingCart,
    features: [
      "Özel E-Ticaret Sitesi",
      "Ödeme Entegrasyonu",
      "Stok Yönetimi",
      "Dönüşüm Optimizasyonu",
    ],
  },
  {
    id: "sosyal-medya",
    title: "Sosyal Medya Yönetimi",
    description:
      "Markanızın sosyal medya varlığını profesyonel şekilde yönetiyoruz. Strateji geliştirme, içerik üretimi ve topluluk yönetimi ile etkileşiminizi artırıyoruz.",
    shortDescription:
      "Sosyal medyada markanızı büyütün, hedef kitlenizle bağ kurun.",
    icon: Share2,
    features: [
      "Strateji Geliştirme",
      "İçerik Üretimi",
      "Topluluk Yönetimi",
      "Analiz & Raporlama",
    ],
  },
  {
    id: "fotograf-video",
    title: "Fotoğraf & Video Prodüksiyonu",
    description:
      "Profesyonel fotoğraf çekimi ve video prodüksiyon hizmetleri sunuyoruz. Drone çekimlerinden tanıtım filmlerine kadar tüm görsel ihtiyaçlarınızı karşılıyoruz.",
    shortDescription:
      "Profesyonel çekimlerle markanızın hikayesini görselleştirin.",
    icon: Camera,
    features: [
      "Profesyonel Fotoğraf Çekimi",
      "Tanıtım Filmi",
      "Drone Çekimi",
      "Post Prodüksiyon",
    ],
  },
  {
    id: "grafik-tasarim",
    title: "Grafik Tasarım & Tanıtım Filmleri",
    description:
      "Baskı ve dijital ortamlar için yaratıcı grafik tasarım çözümleri üretiyoruz. Motion graphics ve tanıtım filmi prodüksiyonu ile mesajınızı etkili şekilde iletiyoruz.",
    shortDescription:
      "Yaratıcı tasarımlarla markanızın mesajını güçlü şekilde iletin.",
    icon: PenTool,
    features: [
      "Baskı Tasarım",
      "Dijital Tasarım",
      "Motion Graphics",
      "Tanıtım Filmi Prodüksiyonu",
    ],
  },
  {
    id: "yapay-zeka",
    title: "Yapay Zeka Çözümleri",
    description:
      "İşletmeniz için özel yapay zeka çözümleri geliştiriyoruz. AI chatbot, otomasyon sistemleri ve veri analizi ile iş süreçlerinizi akıllı hale getiriyoruz.",
    shortDescription:
      "AI destekli çözümlerle iş süreçlerinizi otomatikleştirin.",
    icon: Bot,
    features: [
      "AI Chatbot Geliştirme",
      "Otomasyon Sistemleri",
      "Veri Analizi",
      "Özel AI Modelleri",
    ],
  },
  {
    id: "crevia-works",
    title: "Crevia Works",
    description:
      "Ajanslar ve işletmeler için geliştirdiğimiz SaaS platformu. Proje yönetimi, müşteri portali ve otomatik raporlama ile ajans operasyonlarınızı dijitalleştirin.",
    shortDescription:
      "Ajans yönetimini kolaylaştıran SaaS platformumuzla tanışın.",
    icon: Sparkles,
    features: [
      "Ajans Yönetim Paneli",
      "Müşteri Portal",
      "Proje Takip Sistemi",
      "Otomatik Raporlama",
    ],
  },
];
