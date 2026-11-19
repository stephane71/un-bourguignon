import type { Metadata } from "next";
import { PresentationSection } from "@/components/accueil/PresentationSection";
import { PorteOffreSection } from "@/components/accueil/PorteOffreSection";
import { AnciennesAncres } from "@/components/accueil/AnciennesAncres";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Accueil() {
  return (
    <>
      <AnciennesAncres />
      <PresentationSection />
      <PorteOffreSection />
    </>
  );
}
