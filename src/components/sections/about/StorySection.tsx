"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const milestones = [
  {
    year: "2025",
    title: "Kuruluş",
    description:
      "Crevia Agency, Mayıs 2025'te İstanbul'da yaratıcı ve dijital çözümler sunma vizyonuyla kuruldu.",
  },
  {
    year: "2025",
    title: "İlk Müşteriler",
    description:
      "Farklı sektörlerdeki işletmeler için içerik, reklam ve web projelerinde çalışmaya başladık.",
  },
  {
    year: "2025",
    title: "Hızlı Büyüme",
    description:
      "Dijital pazarlama, üretim ve müşteri operasyonları için ekip ve süreçler oluşturduk.",
  },
  {
    year: "2026",
    title: "Crevia Works",
    description:
      "Satış ve reklam süreçlerine yönelik Crevia Works araçlarını geliştirmeye odaklandık.",
  },
];

export default function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section>
      <Container>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Story Text */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="w-16 h-1 bg-hardal-sarisi rounded-full mb-6" />
            <h2 className="font-clash text-3xl md:text-4xl font-bold text-white mb-6">
              Hikayemiz
            </h2>
            <div className="space-y-4 font-poppins text-nane-yesili/70 leading-relaxed">
              <p>
                Crevia Agency, Mayıs 2025&apos;te markaların dijitalde ve sahada en güçlü
                versiyonlarını ortaya çıkarmak amacıyla İstanbul&apos;da kuruldu. Genç ve
                dinamik bir ekiple başlayan yolculuğumuz, kısa sürede farklı
                sektörlerde iş ihtiyaçlarına yönelik projeler üretmemizle devam ediyor.
              </p>
              <p>
                Her projede yenilikçi yaklaşımımız, müşteri odaklı çalışma
                prensibimiz ve teknik mükemmeliyete olan bağlılığımız bizi farklı
                kılıyor. Web tasarımdan sosyal medya yönetimine, fotoğraf ve video
                prodüksiyonundan yapay zeka çözümlerine kadar geniş bir yelpazede
                hizmet sunuyoruz.
              </p>
              <p>
                Bugün strateji, kreatif prodüksiyon, dijital pazarlama ve otomasyon
                alanlarında edindiğimiz deneyimi markaların iş hedeflerine
                uygulanabilir çözümler üretmek için kullanıyoruz.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Milestones */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {milestones.map((milestone) => (
              <motion.div
                key={milestone.year}
                variants={fadeInRight}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <span className="font-clash text-2xl font-bold text-hardal-sarisi">
                    {milestone.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-syne text-lg font-semibold text-white mb-1">
                    {milestone.title}
                  </h3>
                  <p className="font-poppins text-sm text-nane-yesili/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
