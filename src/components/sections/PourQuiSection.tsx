import { Section } from "@/components/ui/Section";

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
    <Section id="pour-qui" alternate>
      <h2 className="font-serif text-xl lg:text-4xl font-bold">
        Vous êtes au bon endroit si…
      </h2>
      <p className="mt-4 text-base leading-relaxed max-w-3xl">
        Je travaille avec les dirigeants de PME qui produisent, le plus souvent
        de 3 à 10 salariés, quel que soit le secteur : atelier, fabrication,
        production alimentaire, agriculture, bâtiment, services.
      </p>
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {signes.map((signe) => (
          <li
            key={signe}
            className="bg-white rounded-xl p-5 border-l-4 border-or text-base leading-relaxed"
          >
            {signe}
          </li>
        ))}
      </ul>
      <p className="mt-8 font-serif text-xl font-bold">
        Deux de ces phrases décrivent votre entreprise ? Parlons-en.
      </p>
      <p className="mt-6 text-base leading-relaxed max-w-3xl">
        Vous travaillez seul, en micro-entreprise ou en entreprise
        individuelle ? Appelez-moi aussi : je vous dirai franchement si je
        peux vous être utile.
      </p>
    </Section>
  );
}
