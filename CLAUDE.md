# Crevia Agency - Proje Hafızası

## Ajans Bilgileri
- **Kuruluş**: Mayıs 2025, İstanbul
- **Tür**: Yaratıcı Ajans (sadece dijital değil, sahada da aktif)
- **İletişim**: info@creviagency.com
- **Adres**: Acıbadem, Acıbadem Cd. no: 169 34660 Üsküdar/İstanbul
- **Instagram**: https://www.instagram.com/creviagency/
- **LinkedIn**: https://www.linkedin.com/company/crevia-agency
- **Rakamlar**: 200+ tamamlanan proje, 50+ mutlu müşteri, 20+ aktif müşteri, 1+ yıllık deneyim
- **Not**: Global/uluslararası marka yok, yalan söylenmemeli

## Gerçek Referans Markalar (20 adet)
Tüm markalarda ortak: Sosyal Medya Yönetimi, Video Prodüksiyon, Grafik Tasarım & Reklam

Web sitesi de yapılanlar: **Cindy Acıbadem, AUS Coffee Co., Bosfor Terrace Grill, Most Hooqah**

| Marka | Instagram |
|-------|-----------|
| Zen Leo Gym | @zenleogym |
| BLAK Coffee Co. | @blakcommunity_ |
| San Kuaför | @sankuaforumraniye_ |
| Mondi Home | @tekintasmondihome |
| Beko Tekintaş | @tekintasbeko |
| Cindy Acıbadem | @cindyacibadem |
| DRY CENTER | @drycentercom |
| AUS Coffee Co. | @auscoffee.co |
| One2One Coffee | @one2onecoffee |
| Gusta Lounge | @gustalounge |
| Smoky Lounge | @smokyloungebakirkoy |
| Bosfor Terrace Grill | @bosforterrace |
| Diva Grup Optik | @divagrupoptik |
| Emre Ayaksız | @emreayaksiz |
| Most Hooqah | @mosthooqah |
| Adora Kuaför | @adorakuafor |
| Resident İstanbul | @residentistanbul |
| Yumm Pizza | @yummpizza_ |
| Pop House İstanbul | @pophouseistanbul |
| Türkdegs | @turkdegs |

## Mimari
- **Framework**: Next.js (App Router) + TypeScript
- **Stil**: Tailwind CSS v4 (CSS-based config, @theme inline)
- **Animasyonlar**: Framer Motion
- **İkonlar**: Lucide React
- **Fontlar**: Clash Display (local, variable), Syne (Google), Poppins (Google)
- **Repo**: https://github.com/nadimokumuss/crevia-agency

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
- `/referanslarimiz` → Referanslarımız (20 gerçek marka, kategori filtreli)
- `/ekibimiz` → Ekibimiz
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
    sections/    # Sayfa bölümleri (home/, about/, services/, references/, crevia-works/, contact/, team/)
  data/          # Veri dosyaları (services, projects, testimonials, team)
  lib/           # Yardımcı fonksiyonlar (cn, animations, hooks)
```

## Önemli Veri Dosyaları
- `src/data/services.ts` → 11 hizmet tanımı
- `src/data/projects.ts` → 20 gerçek marka projesi, 9 kategori filtresi
- `src/data/testimonials.ts` → 11 müşteri yorumu
- `src/data/team.ts` → 6 ekip üyesi (mock data, gerçek isimler girilmeli)

## Proje Kartı Tasarımı
- Her kategori için farklı gradient + Lucide ikon: `src/components/sections/references/ProjectCard.tsx`
- Ana sayfa referans önizlemesi de aynı sistemi kullanıyor: `src/components/sections/home/ReferencesPreview.tsx`
- Ekip kartları: üye ID'sinden türetilen dinamik gradient + initials avatar

## Konvansiyonlar
- Server/Client sınırı: page.tsx Server Component, animasyonlu bölümler "use client"
- Animasyonlar: whileInView + viewport={{ once: true, amount: 0.3 }}
- Tüm görseller: next/image
- Fontlar: next/font ile optimize
- Merkezi animasyon varyantları: src/lib/animations.ts

## Bekleyen İşler
- `TEAM.md` → Gerçek ekip üyesi bilgileri (kullanıcı dolduracak)
- İletişim formu backend → `src/app/iletisim/actions.ts` (şu an sadece console.log)
- Gerçek görseller → Tüm proje ve ekip kartları hâlâ placeholder
- Vercel deploy + creviagency.com domain bağlama (GitHub push hazır)
