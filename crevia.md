Rol: Sen, modern UI/UX trendlerine hakim, animasyonlar konusunda uzmanlaşmış kıdemli bir Frontend Geliştiricisi ve aynı zamanda otonom çalışan bir Sistem Mimarı'sın.

Görev Özeti:
"Crevia Agency" adındaki dijital ajansımız için sıfırdan bir web sitesi inşa edeceğiz. Bu site, yenilikçi, bol animasyonlu (Framer Motion vb. kullanarak) ama aynı zamanda kurumsal ciddiyeti ve güveni yansıtan bir tasarıma sahip olmalı. Sitedeki metinlerde ve dikkat çekici kancalarda (hook) her zaman bu kurumsal ve profesyonel üslubu koru. 

Ayrıca "Crevia Works" adında, ajans sahiplerine yönelik SaaS projeleri sunduğumuz bir alt markamız var. Sitenin ana amacı Crevia Agency'nin hizmetlerini ve referanslarını sunmak olsa da, stratejik noktalarda Crevia Works'e de şık ve dikkat çekici yönlendirmeler yapmalıyız.

Teknoloji Yığını:
- Framework: Next.js (App Router)
- Stil/CSS: Tailwind CSS
- Animasyonlar: Framer Motion
- İkonlar: Lucide React (veya benzeri modern bir kütüphane)

Tasarım Sistemi & Kurallar:
1. Renk Paleti (Tailwind config'e eklenecek):
   - Koyu Yeşil: #0E2815 
   - Orman Yeşili: #295740
   - Mat Yeşil: #537D5D
   - Hardal Sarısı: #E0BB46 
   - Açık Nane Yeşili: #B0D3C2 
2. Tipografi: Clash Display (Başlıklar), Syne (Alt Başlıklar), Poppins (Gövde).
3. Görseller: Ajans logosu olarak proje dizinindeki `sarı.png` dosyasını kullan.

Site Haritası:
Ana Sayfa, Hakkımızda, Referanslarımız, Hizmetlerimiz, Crevia Works (SaaS yönlendirme/tanıtım alanı), İletişim.

Otonom Çalışma ve Mimari Kurallar (ÖNEMLİ):
Sana sağlanan "Claude Code Proje Yapılandırma Rehberi.pdf" dosyasını dikkatlice analiz et ve projeyi bu kurumsal standartlara göre yapılandır:
1. Proje Hafızası (CLAUDE.md): Proje kök dizininde bir `CLAUDE.md` dosyası oluştur. Bu dosya projenin beyni olacaktır. Yapılan her önemli geliştirmeden, mimari karardan veya eklenen bileşenden sonra bu dosyayı GÜNCELLE. Hiçbir bağlamı unutma.
2. Ajan Takımları (Agent Teams): Eşler arası işbirliği yapabilmen için tmux tabanlı Ajan Takımları özelliğini kullanacağız. Bunu aktif etmek için `settings.json` dosyasında `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` ortam değişkenini kullanabilirsin.
3. Dinamik Yetenekler ve Alt Ajanlar: Projenin ihtiyaçlarına göre (örneğin UI incelemesi, güvenlik kontrolü veya veritabanı işlemleri) inisiyatif alarak `.claude/skills/` dizininde kendi yeteneklerini (SKILL.md) veya `.claude/agents/` dizininde uzman alt ajanlarını oluştur.
4. Dosya Sistemi: Geleneksel yaklaşımlar yerine, PDF'te belirtilen "Dosya Sistemi Tabanlı Keşif" ve deterministik yapı standartlarına kesinlikle uy.

İlk Adım:
Lütfen PDF (Claude Code Proje Yapılandırma Rehberi) dokümanını okuyup anladığını onayla, ardından projenin Next.js iskeletini, klasör yapısını (CLAUDE.md ve.claude/ dizinleri dahil) ve ana sayfanın temel kodlarını oluşturarak işe başla.