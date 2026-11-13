"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import { submitContactForm } from "@/app/iletisim/actions";

export default function ContactForm({ enabled }: { enabled: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setError("");
    setLoading(true);
    try {
      const result = await submitContactForm(data);
      if (result.success) setSubmitted(true);
      else setError(result.message);
    } catch {
      setError("Gönderim sırasında bir hata oluştu. Lütfen doğrudan e-posta ile iletişime geçin.");
    } finally {
      setLoading(false);
    }
  };

  if (!enabled) {
    return (
      <div className="rounded-2xl border border-mat-yesil/25 bg-orman-yesili/30 p-8">
        <p className="mb-5 font-poppins leading-relaxed text-nane-yesili/80">
          Çevrimiçi form şu anda etkin değil. Teklif veya iş birliği talebinizi doğrudan e-posta ile iletebilirsiniz.
        </p>
        <a className="inline-flex rounded-xl bg-hardal-sarisi px-6 py-3 font-syne font-semibold text-koyu-yesil" href="mailto:info@creviagency.com?subject=Crevia%20Agency%20-%20%C4%B0leti%C5%9Fim">
          E-posta Gönder
        </a>
      </div>
    );
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-2xl border border-mat-yesil/30 bg-orman-yesili/30 p-8 text-center">
        <h3 className="mb-2 font-clash text-2xl font-bold text-white">Mesajınız Alındı</h3>
        <p className="font-poppins text-nane-yesili/75">Mesajınız e-posta servisince kabul edildi. En kısa sürede dönüş yapacağız.</p>
      </div>
    );
  }

  return (
    <motion.div ref={ref} variants={fadeInUp} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Ad Soyad" name="name" placeholder="Adınız ve soyadınız"
          value={formData.name} onChange={handleChange} required />
        <Input label="E-posta" name="email" type="email" placeholder="ornek@email.com"
          value={formData.email} onChange={handleChange} required />
        <Input label="Telefon" name="phone" type="tel" placeholder="+90 5XX XXX XX XX"
          value={formData.phone} onChange={handleChange} />
        <Input label="Konu" name="subject" placeholder="Proje konunuz"
          value={formData.subject} onChange={handleChange} required />
        <Textarea label="Mesaj" name="message" placeholder="Projeniz hakkında detayları yazın..."
          value={formData.message} onChange={handleChange} required rows={5} />
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Bu alanı boş bırakın</label>
          <input id="contact-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        {error && <p role="alert" className="text-sm text-red-200">{error}</p>}
        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? "Gönderiliyor..." : "Mesaj Gönder"}
        </Button>
        <p className="text-xs text-nane-yesili/60">
          Alternatif: <a href="mailto:info@creviagency.com" className="underline">info@creviagency.com</a>
        </p>
      </form>
    </motion.div>
  );
}
