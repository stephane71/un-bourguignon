import type { Metadata } from "next";
import { Lora, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

const siteTitle = "Stéphane Maire — Consultant numérique de proximité";
const siteDescription =
  "Consultant numérique indépendant pour artisans, commerçants et petits entrepreneurs. Facturation électronique, outils de gestion, présence en ligne, formation IA et création d'outils sur mesure. Accompagnement personnalisé sur le terrain.";
const siteUrl = "https://un-bourguignon.com";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Stéphane Maire",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${lora.variable} ${instrumentSans.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
