import Image from "next/image";
import { LabeledSection } from "@/components/ui/LabeledSection";

const valeurs = [
  {
    titre: "Mesurer avant de construire",
    texte: "C'est le rôle du cadrage d'un mois, avant toute réalisation.",
  },
  {
    titre: "Annoncer le prix avant l'engagement",
    texte: "Forfaits fermes, aucun dépassement.",
  },
  {
    titre: "Vous laisser la propriété",
    texte: "Droits cédés par écrit au paiement de chaque brique.",
  },
];

export function AProposSection() {
  return (
    <LabeledSection id="a-propos" label="Votre interlocuteur" title="Qui suis-je ?">
      <div className="mt-8 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10">
        <Image
          src="/images/photo-portrait.webp"
          alt="Stéphane Maire"
          width={200}
          height={200}
          className="rounded-full flex-shrink-0 w-[140px] h-[140px] lg:w-[180px] lg:h-[180px]"
        />
        <div className="max-w-[62ch] space-y-5">
          <p className="text-base leading-relaxed">
            Je suis Stéphane Maire, ingénieur logiciel. Pendant plus de 15 ans
            à Paris, j&apos;ai conçu et développé des logiciels sur des sujets
            liés à la finance, aux réseaux et à la vente.
          </p>
          <p className="text-base leading-relaxed">
            Je commence toujours par écouter ceux qui font le travail, à leur
            poste, sur leurs supports réels. Du premier entretien à la mise en
            service, vous avez un seul interlocuteur, qui connaît votre métier.
          </p>
          <p className="text-base leading-relaxed">
            Je me déplace dans vos locaux et je travaille à distance, partout
            en France métropolitaine.
          </p>
        </div>
      </div>
      <dl className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {valeurs.map((v) => (
          <div key={v.titre} className="border-t border-sable pt-4">
            <dt className="font-serif font-bold text-lg">{v.titre}</dt>
            <dd className="mt-1 text-base leading-relaxed">{v.texte}</dd>
          </div>
        ))}
      </dl>
    </LabeledSection>
  );
}
