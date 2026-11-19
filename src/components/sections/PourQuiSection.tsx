import { LabeledSection } from "@/components/ui/LabeledSection";

const signes = [
  "Une même information est saisie deux ou trois fois : dans le devis, le tableur, puis le logiciel comptable.",
  "Un tableur fait tourner l'entreprise, et une seule personne sait le tenir.",
  "Vos équipes vérifient à la main des documents justes neuf fois sur dix.",
  "Le papier circule encore : imprimer, tamponner, classer, scanner.",
  "Votre logiciel fait l'essentiel, le reste se fait à côté, à la main.",
  "Quand la personne qui sait est absente, tout ralentit.",
  "Personne ne sait combien d'heures la gestion prend chaque semaine.",
];

export function PourQuiSection() {
  return (
    <LabeledSection
      id="pour-qui"
      label="Pour qui"
      title="Vous êtes au bon endroit si…"
      intro="Je travaille avec les dirigeants d'entreprise, le plus souvent de 3 à 10 salariés, quel que soit le secteur : atelier, fabrication, production alimentaire, agriculture, bâtiment, commerce, services."
    >
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 border-t border-sable">
        {signes.map((signe) => (
          <li
            key={signe}
            className="signe relative py-4 pl-7 border-b border-sable text-base leading-relaxed"
          >
            {signe}
          </li>
        ))}
      </ul>
      <p className="mt-7 font-serif text-xl italic max-w-[50ch]">
        Deux de ces phrases décrivent votre entreprise ? Parlons-en.
      </p>
    </LabeledSection>
  );
}
