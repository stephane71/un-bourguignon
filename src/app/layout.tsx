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

const siteTitle =
  "Stéphane Maire — Consultant numérique de proximité | Saône-et-Loire";
const siteDescription =
  "Consultant numérique indépendant en Saône-et-Loire pour artisans, commerçants et TPE. Facturation électronique, outils de gestion, présence en ligne, formation IA. Contactez-moi au 06 62 46 16 43.";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stéphane Maire",
  jobTitle: "Consultant numérique de proximité",
  description:
    "Consultant numérique indépendant pour artisans, commerçants et petits entrepreneurs en Saône-et-Loire et partout en France.",
  telephone: "+33662461643",
  email: "stephane-ei@un-bourguignon.com",
  url: "https://un-bourguignon.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 rue des Lavoirs",
    addressLocality: "Moroges",
    postalCode: "71390",
    addressRegion: "Saône-et-Loire",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  sameAs: [
    "https://www.linkedin.com/in/stephanemaire71",
    "https://www.facebook.com/stephane.maire1",
  ],
  knowsAbout: [
    "Facturation électronique",
    "Outils numériques de gestion",
    "Présence en ligne locale",
    "Formation intelligence artificielle",
    "Création d'outils personnalisés",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${lora.variable} ${instrumentSans.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
