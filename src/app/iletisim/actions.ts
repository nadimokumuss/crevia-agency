"use server";

interface ContactFormResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  formData: FormData
): Promise<ContactFormResult> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const subject = formData.get("subject") as string | null;
  const message = formData.get("message") as string | null;

  // Basic validation
  if (!name || name.trim().length < 2) {
    return {
      success: false,
      message: "Lütfen geçerli bir ad soyad giriniz.",
    };
  }

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Lütfen geçerli bir e-posta adresi giriniz.",
    };
  }

  if (!subject || subject.trim().length < 2) {
    return {
      success: false,
      message: "Lütfen bir konu giriniz.",
    };
  }

  if (!message || message.trim().length < 10) {
    return {
      success: false,
      message: "Lütfen en az 10 karakter uzunluğunda bir mesaj giriniz.",
    };
  }

  // Placeholder: In production, send email, save to DB, etc.
  console.log("Contact form submission:", {
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() || "",
    subject: subject.trim(),
    message: message.trim(),
  });

  return {
    success: true,
    message: "Mesajınız başarıyla gönderildi!",
  };
}
