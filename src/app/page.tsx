import { HeroSection } from "@/components/sections/HeroSection";
import { AProposSection } from "@/components/sections/AProposSection";
import { PourQuiSection } from "@/components/sections/PourQuiSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MethodeSection } from "@/components/sections/MethodeSection";
import { BeneficesSection } from "@/components/sections/BeneficesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AProposSection />
      <PourQuiSection />
      <ServicesSection />
      <MethodeSection />
      <BeneficesSection />
      <ContactSection />
    </>
  );
}
