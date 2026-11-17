import Image from "next/image";
import { Section } from "@/components/ui/Section";

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
    <Section id="a-propos">
      <h2 className="font-serif text-xl lg:text-4xl font-bold">
        Qui suis-je ?
      </h2>
      <div className="mt-8 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10">
        <Image
          src="/images/photo-portrait.webp"
          alt="Stéphane Maire"
          width={200}
          height={200}
          className="rounded-full flex-shrink-0 w-[140px] h-[140px] lg:w-[200px] lg:h-[200px]"
        />
      <div className="max-w-3xl space-y-6">
        <p className="text-base leading-relaxed">
          Je suis Stéphane Maire, entrepreneur individuel installé à Moroges,
          en Saône-et-Loire. Avant de m&apos;installer ici, j&apos;ai travaillé
          en start-up à Paris, à concevoir des logiciels.
        </p>
        <p className="text-base leading-relaxed">
          Je commence toujours par écouter ceux qui font le travail, à leur
          poste, sur leurs supports réels. Du premier entretien à la mise en
          service, vous avez un seul interlocuteur, qui connaît votre métier.
        </p>
        <p className="text-base leading-relaxed">
          Je me déplace dans vos locaux en Saône-et-Loire et je travaille à
          distance partout en France métropolitaine.
        </p>
      </div>
      </div>
      <dl className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {valeurs.map((v) => (
          <div key={v.titre} className="border-l-4 border-or pl-4">
            <dt className="font-serif font-bold text-xl">{v.titre}</dt>
            <dd className="mt-1 text-base leading-relaxed">{v.texte}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
