# Crevia Agency

Crevia Agency için sadeleştirilmiş Next.js 16 / TypeScript / Tailwind CSS web sitesi.

## Sayfalar
- Ana sayfa
- Hakkımızda
- Hizmetlerimiz
- Crevia Works: Crevia Sales OS ve Crevia Ad Bot'un gerçek geliştirme durumları
- İletişim

Ekip, referans, müşteri yorumları ve sürekli güncellenmesi gereken sayısal KPI bölümleri bilinçli olarak kaldırılmıştır.

## Kurulum
```bash
npm ci
npm run lint
npm run build
npm run dev
```

## İletişim formunu etkinleştirme
Site varsayılan olarak çalışan bir **e-posta bağlantısı** gösterir. Sahte form başarı mesajı yoktur.

Gerçek formu açmak için:
1. Resend hesabı oluşturup gönderici domainini doğrulayın.
2. Vercel projesine `RESEND_API_KEY` ve `CREVIA_CONTACT_FROM_EMAIL` ortam değişkenlerini girin (`.env.example`).
3. Yeniden deploy edin; test mesajı gönderip **info@creviagency.com** posta kutusuna ulaştığını doğrulayın.
4. `CREVIA_CONTACT_FROM_EMAIL` alanındaki e-posta, Resend üzerinde doğrulanmış bir gönderici domaine ait olmalıdır.

Form mesajı yalnızca başarılı API yanıtından sonra kabul edildi olarak gösterir. Basit bot alanı ve sunucu doğrulaması var; yüksek trafik için ayrıca rate limiting / CAPTCHA tavsiye edilir. Alıcı e-posta adresi sunucu tarafında sabittir.

## SEO
`NEXT_PUBLIC_SITE_URL` değişkenini gerçek yayın adresine ayarlayın. Bu değer `sitemap.xml`, `robots.txt` ve metadata için kullanılır.

## Ürün açıklamaları
Crevia Sales OS, geliştirme/iç kullanım aşamasında gösterilir. Crevia Ad Bot, eski prototipten yeni sürüme geçiş planı olarak tanıtılır; çalışır ticari ürün veya aktif demo olduğu iddia edilmez.

## Dağıtım
GitHub branch/PR birleştirildiğinde bağlı Vercel projesi normal deployment akışını izler. Üretime alma öncesi içerik, iletişim formu ve SEO adresi kontrol edilmelidir.
