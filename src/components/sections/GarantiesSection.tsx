import { LabeledSection } from "@/components/ui/LabeledSection";

const appartient = [
  {
    titre: "Le code, brique par brique",
    texte:
      "Les droits vous sont cédés par écrit au paiement de chaque brique, pas à la fin du projet.",
  },
  {
    titre: "Le code, chez vous dès la première brique",
    texte: "Dans un dépôt ouvert au nom de votre entreprise.",
  },
  {
    titre: "Les comptes, à votre nom",
    texte: "Hébergement, nom de domaine, sauvegardes. Vous gardez les clés.",
  },
  {
    titre: "Vos données",
    texte:
      "Analysées pour le cadrage, jamais diffusées. Ce qui sort de votre entreprise, ce sont des chiffres agrégés, jamais une pièce nominative.",
  },
];

const durable = [
  {
    titre: "Une documentation à chaque brique",
    texte:
      "Le fonctionnement de la solution, les règles de votre métier qu'elle applique, son mode d'emploi. Ce savoir reste dans votre entreprise.",
  },
  {
    titre: "Des technologies courantes et éprouvées",
    texte: "Sans composant rare ni propriétaire.",
  },
  {
    titre: "Vos logiciels en place restent en place",
    texte:
      "La solution s'appuie sur les données qu'ils produisent, sans toucher à ce qui est réglementé ou certifié : caisse, comptabilité, paie.",
  },
];

function Colonne({
  titre,
  items,
}: {
  titre: string;
  items: { titre: string; texte: string }[];
}) {
  return (
    <div className="min-w-0">
      <h3 className="font-serif text-xl font-bold pb-3 border-b border-brun">
        {titre}
      </h3>
      <ul>
        {items.map((g) => (
          <li key={g.titre} className="py-4 border-b border-sable">
            <p className="font-bold">{g.titre}</p>
            <p className="mt-1 text-base leading-relaxed">{g.texte}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function GarantiesSection() {
  return (
    <LabeledSection
      id="garanties"
      label="Vos garanties"
      title="La solution est à vous, et elle est construite pour durer."
    >
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <Colonne titre="Ce qui vous appartient" items={appartient} />
        <Colonne titre="Ce qui la rend durable" items={durable} />
      </div>
      <p className="mt-8 max-w-[62ch] text-base leading-relaxed">
        <strong>Après la mise en service, rien n&apos;est imposé.</strong> Pas
        d&apos;abonnement par utilisateur. L&apos;hébergement coûte quelques
        centaines d&apos;euros par an, chiffrés au devis et payés à votre nom.
        Chaque évolution est chiffrée avant tout travail.
      </p>
    </LabeledSection>
  );
}
