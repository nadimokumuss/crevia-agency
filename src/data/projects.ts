export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const categories = [
  "Tümü",
  "Web Tasarım",
  "Marka Kimliği",
  "E-Ticaret",
  "UI/UX",
  "Dijital Pazarlama",
  "Sosyal Medya",
  "Video Prodüksiyon",
  "Grafik Tasarım",
  "Yapay Zeka",
];

export const projects: Project[] = [
  {
    id: "proje-1",
    title: "TechVision Kurumsal Site",
    category: "Web Tasarım",
    description:
      "Teknoloji firması için modern ve interaktif kurumsal web sitesi tasarımı ve geliştirmesi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "proje-2",
    title: "GreenLife Marka Kimliği",
    category: "Marka Kimliği",
    description:
      "Organik gıda markası için sıfırdan marka kimliği oluşturma projesi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Logo", "Kurumsal Kimlik", "Ambalaj"],
  },
  {
    id: "proje-3",
    title: "StyleHub E-Ticaret",
    category: "E-Ticaret",
    description:
      "Moda perakende markası için kapsamlı e-ticaret platformu geliştirme.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Shopify", "Özel Tema", "Ödeme Entegrasyonu"],
  },
  {
    id: "proje-4",
    title: "FinanceApp Dashboard",
    category: "UI/UX",
    description:
      "Fintech uygulaması için kullanıcı deneyimi tasarımı ve dashboard arayüzü.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Figma", "Prototip", "Kullanılabilirlik Testi"],
  },
  {
    id: "proje-5",
    title: "HealthPlus Dijital Kampanya",
    category: "Dijital Pazarlama",
    description:
      "Sağlık sektöründe dijital pazarlama stratejisi ve uygulama.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Google Ads", "SEO", "Sosyal Medya"],
  },
  {
    id: "proje-6",
    title: "EduConnect Platform",
    category: "Web Tasarım",
    description:
      "Online eğitim platformu için responsive web uygulaması geliştirme.",
    image: "/images/projects/placeholder.jpg",
    tags: ["React", "Node.js", "WebSocket"],
  },
  {
    id: "proje-7",
    title: "ArtisanCafe Rebrand",
    category: "Marka Kimliği",
    description:
      "Butik kafe zinciri için marka yenileme ve görsel kimlik çalışması.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Rebranding", "Mekan Tasarımı", "Sosyal Medya"],
  },
  {
    id: "proje-8",
    title: "AutoParts Online Mağaza",
    category: "E-Ticaret",
    description:
      "Oto yedek parça firması için B2B ve B2C e-ticaret çözümü.",
    image: "/images/projects/placeholder.jpg",
    tags: ["WooCommerce", "ERP Entegrasyonu", "Toptan Satış"],
  },
  {
    id: "proje-9",
    title: "NovaBrand Sosyal Medya Yönetimi",
    category: "Sosyal Medya",
    description:
      "Kozmetik markası için kapsamlı sosyal medya stratejisi ve içerik üretimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Instagram", "İçerik Stratejisi", "Influencer"],
  },
  {
    id: "proje-10",
    title: "SkyView Drone Tanıtım Filmi",
    category: "Video Prodüksiyon",
    description:
      "Gayrimenkul firması için drone çekimi ve profesyonel tanıtım filmi prodüksiyonu.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Drone Çekim", "Tanıtım Filmi", "Post Prodüksiyon"],
  },
  {
    id: "proje-11",
    title: "FestivalX Afiş & Tanıtım Seti",
    category: "Grafik Tasarım",
    description:
      "Müzik festivali için baskı ve dijital ortamlara yönelik kapsamlı grafik tasarım çalışması.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Afiş Tasarım", "Sosyal Medya Kit", "Motion Graphics"],
  },
  {
    id: "proje-12",
    title: "SmartDesk AI Asistan",
    category: "Yapay Zeka",
    description:
      "Müşteri hizmetleri için yapay zeka destekli chatbot ve otomasyon sistemi geliştirme.",
    image: "/images/projects/placeholder.jpg",
    tags: ["AI Chatbot", "NLP", "Otomasyon"],
  },
];
