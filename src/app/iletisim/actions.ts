"use server";

interface ContactFormResult {
  success: boolean;
  message: string;
}

function field(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(formData: FormData): Promise<ContactFormResult> {
  const name = field(formData, "name");
  const email = field(formData, "email");
  const phone = field(formData, "phone");
  const subject = field(formData, "subject");
  const message = field(formData, "message");

  // Hidden honeypot field for basic bot screening.
  if (field(formData, "website")) {
    return { success: false, message: "İşlem tamamlanamadı. Lütfen e-posta ile iletişime geçin." };
  }
  if (name.length < 2 || name.length > 120) {
    return { success: false, message: "Ad soyad 2-120 karakter arasında olmalıdır." };
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Lütfen geçerli bir e-posta adresi giriniz." };
  }
  if (phone.length > 40 || subject.length < 2 || subject.length > 150 || message.length < 10 || message.length > 5000) {
    return { success: false, message: "Konu veya mesaj uzunluğunu kontrol edin (mesaj: 10-5000 karakter)." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CREVIA_CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return { success: false, message: "Form şu anda etkin değil. Lütfen info@creviagency.com adresine e-posta gönderin." };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["info@creviagency.com"],
        reply_to: email,
        subject: `Crevia web formu: ${subject}`,
        text: `Ad Soyad: ${name}\nE-posta: ${email}\nTelefon: ${phone || "Belirtilmedi"}\nKonu: ${subject}\n\nMesaj:\n${message}`,
      }),
      cache: "no-store",
    });
    const data: unknown = await response.json().catch(() => null);
    const delivered = Boolean(
      response.ok && data && typeof data === "object" && "id" in data && typeof data.id === "string"
    );
    if (!delivered) {
      return { success: false, message: "Mesaj gönderilemedi. Lütfen doğrudan info@creviagency.com adresine yazın." };
    }
    return { success: true, message: "Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz." };
  } catch {
    return { success: false, message: "Bağlantı hatası oluştu. Lütfen doğrudan info@creviagency.com adresine yazın." };
  }
}
