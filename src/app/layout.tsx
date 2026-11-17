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
  "Gestion sur mesure pour les PME de production | Stéphane Maire";
const siteDescription =
  "Votre gestion vous coûte des heures chaque semaine. Un mois de cadrage à 3 000 € HT, puis une solution sur mesure par briques. Basé en Saône-et-Loire.";
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
  "@type": "ProfessionalService",
  name: "Stéphane Maire",
  alternateName: "Gestion sur mesure",
  description:
    "Solutions de gestion sur mesure pour les PME de production : un mois de cadrage pour mesurer, puis une réalisation par briques de deux mois, à prix ferme.",
  slogan: "Un mois pour mesurer. Deux mois par brique pour construire.",
  image: "https://un-bourguignon.com/images/photo-portrait.png",
  telephone: "+33662461643",
  email: "stephane@un-bourguignon.com",
  url: "https://un-bourguignon.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 rue des Lavoirs",
    addressLocality: "Moroges",
    postalCode: "71390",
    addressRegion: "Saône-et-Loire",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Saône-et-Loire" },
    { "@type": "Country", name: "France" },
  ],
  founder: {
    "@type": "Person",
    name: "Stéphane Maire",
  },
  sameAs: [
    "https://www.linkedin.com/in/stephanemaire71",
    "https://www.facebook.com/stephane.maire1",
  ],
  knowsAbout: [
    "Logiciel de gestion sur mesure",
    "Automatisation de la gestion",
    "Facturation électronique",
    "Suivi de production",
    "Tableau de bord du dirigeant",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Cadrage",
      description:
        "Un mois, cinq entretiens : dossier d'audit chiffré, maquette sur données réelles, devis ferme par briques.",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: 3000,
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
    },
    {
      "@type": "Offer",
      name: "Réalisation d'une brique",
      description:
        "Deux mois par brique : une ou plusieurs fonctionnalités qui agissent sur un process existant, mises en service et documentées.",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: 5000,
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
        unitText: "brique",
      },
    },
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
