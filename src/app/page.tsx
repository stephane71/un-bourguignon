import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { PourQuiSection } from "@/components/sections/PourQuiSection";
import { BeneficesSection } from "@/components/sections/BeneficesSection";
import { DerouleSection } from "@/components/sections/DerouleSection";
import { CasSection } from "@/components/sections/CasSection";
import { GarantiesSection } from "@/components/sections/GarantiesSection";
import { AProposSection } from "@/components/sections/AProposSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PourQuiSection />
      <BeneficesSection />
      <DerouleSection />
      <CasSection />
      <GarantiesSection />
      <AProposSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
