# Crevia Agency - Proje Hafızası

## Ajans Bilgileri
- **Kuruluş**: Mayıs 2025, İstanbul
- **Tür**: Yaratıcı Ajans (sadece dijital değil, sahada da aktif)
- **İletişim**: info@creviagency.com
- **Adres**: Acıbadem, Acıbadem Cd. no: 169 34660 Üsküdar/İstanbul
- **Instagram**: https://www.instagram.com/creviagency/
- **LinkedIn**: https://www.linkedin.com/company/crevia-agency
- **Referans Markalar**: Emre Ayaksız, San Kuaför, Dry Center, Beko, Mondi, Cindy Güzellik
- **Rakamlar**: 200+ tamamlanan proje, 50+ mutlu müşteri, 12 aktif müşteri, 1+ yıllık deneyim
- **Not**: Global/uluslararası marka yok, yalan söylenmemeli

## Mimari
- **Framework**: Next.js (App Router) + TypeScript
- **Stil**: Tailwind CSS v4 (CSS-based config, @theme inline)
- **Animasyonlar**: Framer Motion
- **İkonlar**: Lucide React
- **Fontlar**: Clash Display (local, variable), Syne (Google), Poppins (Google)

## Renk Tokenlari
| Token | Hex | Kullanım |
|-------|-----|----------|
| koyu-yesil | #0E2815 | Birincil arka plan |
| orman-yesili | #295740 | Kartlar, ikincil arka plan |
| mat-yesil | #537D5D | Border, muted alanlar |
| hardal-sarisi | #E0BB46 | Vurgu, CTA, highlight |
| nane-yesili | #B0D3C2 | Açık arka plan, hover |

## Tipografi
- `font-clash` → Başlıklar (h1, h2)
- `font-syne` → Alt başlıklar, navigasyon
- `font-poppins` → Gövde metni

## Sayfa Yapısı
- `/` → Ana Sayfa (7 bölüm)
- `/hakkimizda` → Hakkımızda
- `/hizmetlerimiz` → Hizmetlerimiz
- `/referanslarimiz` → Referanslarımız
- `/crevia-works` → Crevia Works (SaaS alt marka)
- `/iletisim` → İletişim

## Hizmetler (11 adet)
1. Web Tasarım & Yazılım Geliştirme
2. Marka Kimliği
3. Dijital Pazarlama
4. UI/UX Tasarım
5. SEO & İçerik
6. E-Ticaret Çözümleri
7. Sosyal Medya Yönetimi
8. Fotoğraf & Video Prodüksiyonu
9. Grafik Tasarım & Tanıtım Filmleri
10. Yapay Zeka Çözümleri
11. Crevia Works

## Dosya Yapısı
```
src/
  app/           # Sayfalar (App Router)
  components/
    ui/          # Yeniden kullanılabilir UI bileşenleri
    layout/      # Navbar, Footer, PageTransition
    sections/    # Sayfa bölümleri (home/, about/, services/, references/, crevia-works/, contact/)
  data/          # Veri dosyaları (services, projects, testimonials)
  lib/           # Yardımcı fonksiyonlar (cn, animations, hooks)
```

## Önemli Veri Dosyaları
- `src/data/services.ts` → 11 hizmet tanımı
- `src/data/projects.ts` → Proje ve kategori verileri (10 kategori)
- `src/data/testimonials.ts` → Müşteri yorumları (11 yorum, her hizmete en az 1)

## Konvansiyonlar
- Server/Client sınırı: page.tsx Server Component, animasyonlu bölümler "use client"
- Animasyonlar: whileInView + viewport={{ once: true, amount: 0.3 }}
- Tüm görseller: next/image
- Fontlar: next/font ile optimize
- Merkezi animasyon varyantları: src/lib/animations.ts

## Bekleyen İşler
- `REFERENCES.md` → Referanslar sayfası detayları (kullanıcı dolduracak)
- `TEAM.md` → Ekip üyeleri bilgileri (kullanıcı dolduracak)
