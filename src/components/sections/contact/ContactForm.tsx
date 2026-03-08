"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="bg-orman-yesili/30 rounded-2xl border border-mat-yesil/20 p-8 text-center"
      >
        <div className="w-16 h-16 bg-hardal-sarisi/15 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-hardal-sarisi text-2xl">&#10003;</span>
        </div>
        <h3 className="font-clash text-2xl font-bold text-white mb-2">
          Mesajınız Gönderildi!
        </h3>
        <p className="font-poppins text-nane-yesili/70">
          En kısa sürede size geri dönüş yapacağız.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Ad Soyad"
          name="name"
          placeholder="Adınız ve soyadınız"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Input
          label="E-posta"
          name="email"
          type="email"
          placeholder="ornek@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          label="Telefon"
          name="phone"
          type="tel"
          placeholder="+90 5XX XXX XX XX"
          value={formData.phone}
          onChange={handleChange}
        />

        <Input
          label="Konu"
          name="subject"
          placeholder="Proje konunuz"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <Textarea
          label="Mesaj"
          name="message"
          placeholder="Projeniz hakkında detayları yazın..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? "Gönderiliyor..." : "Gönder"}
        </Button>
      </form>
    </motion.div>
  );
}
