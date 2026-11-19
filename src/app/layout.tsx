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
  "Stéphane Maire, ingénieur logiciel | Logiciel et automatisations sur mesure";
const siteDescription =
  "Ingénieur logiciel depuis plus de 15 ans, je conçois des logiciels et des automatisations sur mesure pour les entreprises, dans vos locaux et à distance, partout en France.";
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
    card: "summary_large_image",
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
    "Solutions de gestion sur mesure pour les entreprises : un mois de cadrage pour mesurer, une réalisation par briques de deux mois à prix ferme, puis la maintenance et l'évolution. Un seul interlocuteur, du premier échange à la maintenance.",
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
  areaServed: { "@type": "Country", name: "France" },
  founder: {
    "@type": "Person",
    name: "Stéphane Maire",
    jobTitle: "Ingénieur logiciel",
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
    {
      "@type": "Offer",
      name: "Maintenance et évolution",
      description:
        "Garder la solution en état de marche et l'adapter à l'évolution de l'activité. Proposée après la mise en service d'une brique, chiffrée à part, par contrat.",
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
