import Link from "next/link";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import Logo from "@/components/ui/Logo";

const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Referanslarımız", href: "/referanslarimiz" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Crevia Works", href: "/crevia-works" },
  { label: "İletişim", href: "/iletisim" },
];

const services = [
  "Web Tasarım & Yazılım",
  "Marka Kimliği",
  "Dijital Pazarlama",
  "UI/UX Tasarım",
  "SEO & İçerik",
  "E-Ticaret",
  "Sosyal Medya Yönetimi",
  "Fotoğraf & Video",
  "Grafik Tasarım",
  "Yapay Zeka Çözümleri",
  "Crevia Works",
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/creviagency/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/crevia-agency", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-mat-yesil/20 bg-koyu-yesil">
      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="font-clash text-lg font-semibold text-white">
              Hakkımızda
            </h3>
            <Link href="/" className="block">
              <Logo width={120} height={40} />
            </Link>
            <p className="font-poppins text-sm leading-relaxed text-white/60">
              Crevia Agency olarak, markanızı dijital dünyada öne çıkarmak için
              yaratıcı çözümler sunuyoruz. Modern tasarım ve teknoloji ile
              işletmenizi büyütüyoruz.
            </p>
            <p className="font-poppins text-sm text-white/60">
              <span className="text-hardal-sarisi">Crevia Works</span> ile
              projelerimizi keşfedin.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-clash text-lg font-semibold text-white">
              Hızlı Linkler
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-poppins text-sm text-white/60 transition-colors duration-200 hover:text-hardal-sarisi"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="font-clash text-lg font-semibold text-white">
              Hizmetler
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-poppins text-sm text-white/60 transition-colors duration-200 hover:text-hardal-sarisi cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="font-clash text-lg font-semibold text-white">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@creviagency.com"
                  className="flex items-center gap-3 font-poppins text-sm text-white/60 transition-colors duration-200 hover:text-hardal-sarisi"
                >
                  <Mail size={16} className="shrink-0 text-hardal-sarisi" />
                  info@creviagency.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 font-poppins text-sm text-white/60">
                  <MapPin size={16} className="shrink-0 text-hardal-sarisi" />
                  Acıbadem, Acıbadem Cd. no: 169 34660 Üsküdar/İstanbul
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-mat-yesil/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="font-poppins text-sm text-white/40">
            &copy; 2026 Crevia Agency. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/40 transition-colors duration-200 hover:text-hardal-sarisi"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
