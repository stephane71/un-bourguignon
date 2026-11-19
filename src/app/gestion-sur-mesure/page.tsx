import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { PourQuiSection } from "@/components/sections/PourQuiSection";
import { BeneficesSection } from "@/components/sections/BeneficesSection";
import { SurMesureSection } from "@/components/sections/SurMesureSection";
import { DerouleSection } from "@/components/sections/DerouleSection";
import { InterlocuteurSection } from "@/components/sections/InterlocuteurSection";
import { AvanceSection } from "@/components/sections/AvanceSection";
import { CasSection } from "@/components/sections/CasSection";
import { GarantiesSection } from "@/components/sections/GarantiesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

const title =
  "Gestion sur mesure : logiciel et automatisations pour les entreprises | Stéphane Maire";
const description =
  "Votre gestion vous coûte des heures chaque semaine. Un mois de cadrage à 3 000 € HT, puis un logiciel sur mesure par briques de deux mois, puis la maintenance et l'évolution. Un seul interlocuteur, partout en France.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gestion-sur-mesure" },
  openGraph: {
    title,
    description,
    url: "/gestion-sur-mesure",
  },
  twitter: { title, description },
};

export default function GestionSurMesure() {
  return (
    <>
      <HeroSection />
      <PourQuiSection />
      <BeneficesSection />
      <SurMesureSection />
      <DerouleSection />
      <InterlocuteurSection />
      <AvanceSection />
      <CasSection />
      <GarantiesSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
