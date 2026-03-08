import type { Metadata } from "next";
import { clashDisplay, syne, poppins } from "./fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Crevia Agency | Dijital Ajans",
    template: "%s | Crevia Agency",
  },
  description:
    "Dijital dünyada iz bırakan çözümler. Web tasarım, marka kimliği, dijital pazarlama ve daha fazlası.",
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
    title: "Crevia Agency | Dijital Ajans",
    description:
      "Dijital dünyada iz bırakan çözümler. Web tasarım, marka kimliği, dijital pazarlama ve daha fazlası.",
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
