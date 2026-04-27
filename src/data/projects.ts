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
  "Sosyal Medya",
  "Video Prodüksiyon",
  "Grafik Tasarım",
];

export const projects: Project[] = [
  {
    id: "cindy-acibadem",
    title: "Cindy Acıbadem",
    category: "Web Tasarım",
    description:
      "Güzellik merkezi için modern web sitesi tasarımı ve geliştirmesi. Sosyal medya yönetimi, video prodüksiyon ve grafik tasarım hizmetleri.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Web Tasarım", "Sosyal Medya", "Video Prodüksiyon", "Grafik Tasarım"],
  },
  {
    id: "aus-coffee",
    title: "AUS Coffee Co.",
    category: "Web Tasarım",
    description:
      "Specialty coffee markası için kurumsal web sitesi. Sosyal medya yönetimi, içerik üretimi ve görsel kimlik çalışmaları.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Web Tasarım", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "bosfor-terrace",
    title: "Bosfor Terrace Grill",
    category: "Web Tasarım",
    description:
      "Restaurant & lounge için web sitesi tasarımı. Tanıtım filmi prodüksiyonu, sosyal medya yönetimi ve reklam çalışmaları.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Web Tasarım", "Video Prodüksiyon", "Sosyal Medya"],
  },
  {
    id: "most-hooqah",
    title: "Most Hooqah",
    category: "Web Tasarım",
    description:
      "Nargile & lounge mekanı için web sitesi ve dijital kimlik çalışması. Sosyal medya ve grafik tasarım hizmetleri.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Web Tasarım", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "zen-leo-gym",
    title: "Zen Leo Gym",
    category: "Sosyal Medya",
    description:
      "Spor salonu için kapsamlı sosyal medya yönetimi, içerik üretimi ve reklam kampanyaları.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Sosyal Medya", "Video Prodüksiyon", "Grafik Tasarım"],
  },
  {
    id: "blak-coffee",
    title: "BLAK Coffee Co.",
    category: "Sosyal Medya",
    description:
      "Kahve topluluğu markası için sosyal medya stratejisi, içerik üretimi ve görsel kimlik çalışmaları.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Sosyal Medya", "Grafik Tasarım", "Video Prodüksiyon"],
  },
  {
    id: "san-kuafor",
    title: "San Kuaför",
    category: "Video Prodüksiyon",
    description:
      "Kuaför salonu için tanıtım filmi, reels prodüksiyonu, sosyal medya yönetimi ve grafik tasarım.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Video Prodüksiyon", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "emre-ayaksiz",
    title: "Emre Ayaksız",
    category: "Video Prodüksiyon",
    description:
      "Kişisel marka için içerik prodüksiyonu, sosyal medya yönetimi ve görsel kimlik çalışmaları.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Video Prodüksiyon", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "gusta-lounge",
    title: "Gusta Lounge",
    category: "Video Prodüksiyon",
    description:
      "Lounge & restaurant için atmosfer filmleri, sosyal medya içerikleri ve reklam prodüksiyonu.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Video Prodüksiyon", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "resident-istanbul",
    title: "Resident İstanbul",
    category: "Video Prodüksiyon",
    description:
      "İstanbul mekanı için tanıtım filmleri, etkinlik çekimleri ve sosyal medya içerik üretimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Video Prodüksiyon", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "dry-center",
    title: "DRY CENTER",
    category: "Grafik Tasarım",
    description:
      "Kuru temizleme zinciri için grafik tasarım, reklam materyalleri, sosyal medya ve video prodüksiyon hizmetleri.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Grafik Tasarım", "Sosyal Medya", "Video Prodüksiyon"],
  },
  {
    id: "mondi-home",
    title: "Mondi Home",
    category: "Grafik Tasarım",
    description:
      "Ev tekstili markası için grafik tasarım, katalog tasarımı, sosyal medya ve video prodüksiyon.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Grafik Tasarım", "Sosyal Medya", "Video Prodüksiyon"],
  },
  {
    id: "beko-tekintaş",
    title: "Beko Tekintaş",
    category: "Sosyal Medya",
    description:
      "Beko yetkili bayi için sosyal medya yönetimi, reklam kampanyaları ve grafik tasarım.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Sosyal Medya", "Grafik Tasarım", "Video Prodüksiyon"],
  },
  {
    id: "one2one-coffee",
    title: "One2One Coffee",
    category: "Sosyal Medya",
    description:
      "Kahvehane markası için sosyal medya stratejisi, içerik üretimi ve görsel kimlik çalışmaları.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Sosyal Medya", "Grafik Tasarım", "Video Prodüksiyon"],
  },
  {
    id: "smoky-lounge",
    title: "Smoky Lounge",
    category: "Sosyal Medya",
    description:
      "Bakırköy lounge mekanı için sosyal medya yönetimi, tanıtım içerikleri ve reklam materyalleri.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Sosyal Medya", "Video Prodüksiyon", "Grafik Tasarım"],
  },
  {
    id: "diva-grup-optik",
    title: "Diva Grup Optik",
    category: "Grafik Tasarım",
    description:
      "Optik zinciri için grafik tasarım, reklam materyalleri, sosyal medya yönetimi ve video prodüksiyon.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Grafik Tasarım", "Sosyal Medya", "Video Prodüksiyon"],
  },
  {
    id: "adora-kuafor",
    title: "Adora Kuaför",
    category: "Sosyal Medya",
    description:
      "Kuaför salonu için sosyal medya yönetimi, içerik üretimi, grafik tasarım ve reklam hizmetleri.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Sosyal Medya", "Grafik Tasarım", "Video Prodüksiyon"],
  },
  {
    id: "yumm-pizza",
    title: "Yumm Pizza",
    category: "Grafik Tasarım",
    description:
      "Pizza markası için menü tasarımı, görsel kimlik, sosyal medya yönetimi ve tanıtım filmleri.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Grafik Tasarım", "Sosyal Medya", "Video Prodüksiyon"],
  },
  {
    id: "pop-house",
    title: "Pop House İstanbul",
    category: "Sosyal Medya",
    description:
      "Eğlence mekanı için sosyal medya yönetimi, etkinlik tanıtımları, grafik tasarım ve video prodüksiyon.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Sosyal Medya", "Video Prodüksiyon", "Grafik Tasarım"],
  },
  {
    id: "turkdegs",
    title: "Türkdegs",
    category: "Grafik Tasarım",
    description:
      "Marka için grafik tasarım, görsel kimlik çalışmaları, sosyal medya yönetimi ve içerik üretimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Grafik Tasarım", "Sosyal Medya", "Video Prodüksiyon"],
  },
];
