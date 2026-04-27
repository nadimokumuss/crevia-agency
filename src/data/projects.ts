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
  "Dijital Pazarlama",
  "UI/UX",
  "SEO & İçerik",
  "Sosyal Medya",
  "Video Prodüksiyon",
  "Grafik Tasarım",
  "Yapay Zeka",
];

export const projects: Project[] = [
  {
    id: "cindy-acibadem",
    title: "Cindy Acıbadem",
    category: "Web Tasarım",
    description:
      "Güzellik merkezi için modern web sitesi, marka kimliği ve sosyal medya yönetimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Web Tasarım", "Marka Kimliği", "Sosyal Medya", "Video Prodüksiyon"],
  },
  {
    id: "aus-coffee",
    title: "AUS Coffee Co.",
    category: "Web Tasarım",
    description:
      "Specialty coffee markası için kurumsal web sitesi, SEO çalışması ve sosyal medya yönetimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Web Tasarım", "SEO & İçerik", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "bosfor-terrace",
    title: "Bosfor Terrace Grill",
    category: "Web Tasarım",
    description:
      "Restaurant & lounge için web sitesi, dijital pazarlama ve video prodüksiyon.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Web Tasarım", "Dijital Pazarlama", "Video Prodüksiyon", "Sosyal Medya"],
  },
  {
    id: "most-hooqah",
    title: "Most Hooqah",
    category: "Web Tasarım",
    description:
      "Nargile & lounge için web sitesi, UI/UX tasarımı ve sosyal medya yönetimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Web Tasarım", "UI/UX", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "zen-leo-gym",
    title: "Zen Leo Gym",
    category: "Dijital Pazarlama",
    description:
      "Spor salonu için dijital pazarlama stratejisi, sosyal medya yönetimi ve reklam kampanyaları.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Dijital Pazarlama", "Sosyal Medya", "Video Prodüksiyon", "Grafik Tasarım"],
  },
  {
    id: "blak-coffee",
    title: "BLAK Coffee Co.",
    category: "Marka Kimliği",
    description:
      "Kahve topluluğu markası için marka kimliği, sosyal medya stratejisi ve içerik üretimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Marka Kimliği", "Sosyal Medya", "Grafik Tasarım", "Video Prodüksiyon"],
  },
  {
    id: "san-kuafor",
    title: "San Kuaför",
    category: "Video Prodüksiyon",
    description:
      "Kuaför salonu için tanıtım filmi, SEO çalışması, sosyal medya ve grafik tasarım.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Video Prodüksiyon", "SEO & İçerik", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "emre-ayaksiz",
    title: "Emre Ayaksız",
    category: "Marka Kimliği",
    description:
      "Kişisel marka kimliği, içerik prodüksiyonu ve sosyal medya yönetimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Marka Kimliği", "Video Prodüksiyon", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "gusta-lounge",
    title: "Gusta Lounge",
    category: "Video Prodüksiyon",
    description:
      "Lounge için atmosfer filmleri, dijital pazarlama ve sosyal medya içerikleri.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Video Prodüksiyon", "Dijital Pazarlama", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "resident-istanbul",
    title: "Resident İstanbul",
    category: "Video Prodüksiyon",
    description:
      "Mekan için tanıtım filmleri, UI/UX odaklı dijital varlık ve sosyal medya yönetimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Video Prodüksiyon", "UI/UX", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "dry-center",
    title: "DRY CENTER",
    category: "Dijital Pazarlama",
    description:
      "Kuru temizleme zinciri için dijital pazarlama, grafik tasarım ve video prodüksiyon.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Dijital Pazarlama", "Grafik Tasarım", "Video Prodüksiyon", "Sosyal Medya"],
  },
  {
    id: "mondi-home",
    title: "Mondi Home",
    category: "Grafik Tasarım",
    description:
      "Ev tekstili markası için grafik tasarım, katalog, yapay zeka destekli içerik ve sosyal medya.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Grafik Tasarım", "Yapay Zeka", "Sosyal Medya", "Video Prodüksiyon"],
  },
  {
    id: "beko-tekintaş",
    title: "Beko Tekintaş",
    category: "SEO & İçerik",
    description:
      "Beko yetkili bayi için SEO çalışması, dijital pazarlama ve sosyal medya yönetimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["SEO & İçerik", "Dijital Pazarlama", "Sosyal Medya", "Grafik Tasarım"],
  },
  {
    id: "one2one-coffee",
    title: "One2One Coffee",
    category: "Marka Kimliği",
    description:
      "Kahvehane için marka kimliği, sosyal medya stratejisi ve görsel içerik üretimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Marka Kimliği", "Sosyal Medya", "Grafik Tasarım", "Video Prodüksiyon"],
  },
  {
    id: "smoky-lounge",
    title: "Smoky Lounge",
    category: "Sosyal Medya",
    description:
      "Bakırköy lounge için sosyal medya yönetimi, reklam materyalleri ve tanıtım içerikleri.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Sosyal Medya", "Grafik Tasarım", "Video Prodüksiyon", "Dijital Pazarlama"],
  },
  {
    id: "diva-grup-optik",
    title: "Diva Grup Optik",
    category: "Grafik Tasarım",
    description:
      "Optik zinciri için grafik tasarım, SEO çalışması, sosyal medya ve video prodüksiyon.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Grafik Tasarım", "SEO & İçerik", "Sosyal Medya", "Video Prodüksiyon"],
  },
  {
    id: "adora-kuafor",
    title: "Adora Kuaför",
    category: "Sosyal Medya",
    description:
      "Kuaför salonu için sosyal medya yönetimi, marka kimliği ve reklam hizmetleri.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Sosyal Medya", "Marka Kimliği", "Grafik Tasarım", "Video Prodüksiyon"],
  },
  {
    id: "yumm-pizza",
    title: "Yumm Pizza",
    category: "Grafik Tasarım",
    description:
      "Pizza markası için menü ve görsel kimlik tasarımı, yapay zeka destekli içerik ve sosyal medya.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Grafik Tasarım", "Yapay Zeka", "Sosyal Medya", "Video Prodüksiyon"],
  },
  {
    id: "pop-house",
    title: "Pop House İstanbul",
    category: "Dijital Pazarlama",
    description:
      "Eğlence mekanı için dijital pazarlama, etkinlik tanıtımları ve sosyal medya yönetimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Dijital Pazarlama", "Sosyal Medya", "Video Prodüksiyon", "Grafik Tasarım"],
  },
  {
    id: "turkdegs",
    title: "Türkdegs",
    category: "UI/UX",
    description:
      "Marka için UI/UX tasarımı, görsel kimlik çalışmaları ve sosyal medya yönetimi.",
    image: "/images/projects/placeholder.jpg",
    tags: ["UI/UX", "Marka Kimliği", "Sosyal Medya", "Grafik Tasarım"],
  },
];
