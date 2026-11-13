import type { Metadata } from "next";
import { clashDisplay, syne, poppins } from "./fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://crevia-agency.vercel.app"),
  title: {
    default: "Crevia Agency | Strateji, Kreatif ve Teknoloji",
    template: "%s | Crevia Agency",
  },
  description:
    "Markalar için dijital strateji, performans pazarlaması, kreatif prodüksiyon ve iş otomasyonu çözümleri.",
  keywords: [
    "dijital ajans",
    "web tasarım",
    "marka kimliği",
    "dijital pazarlama",
    "UI/UX tasarım",
    "İstanbul",
  ],
  authors: [{ name: "Crevia Agency" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Crevia Agency",
    title: "Crevia Agency | Strateji, Kreatif ve Teknoloji",
    description:
      "Markalar için dijital strateji, performans pazarlaması, kreatif prodüksiyon ve iş otomasyonu çözümleri.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${clashDisplay.variable} ${syne.variable} ${poppins.variable}`}
    >
      <body className="font-poppins bg-koyu-yesil text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
