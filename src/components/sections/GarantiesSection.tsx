import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const garanties = [
  {
    titre: "Vos logiciels en place restent en place",
    texte:
      "La solution s'appuie sur les données qu'ils produisent, sans toucher à ce qui est réglementé ou certifié : caisse, comptabilité, paie.",
  },
  {
    titre: "Le code et les droits sont à vous",
    texte:
      "Le code est dans un dépôt au nom de votre entreprise dès la première brique. Les droits vous sont cédés par écrit au paiement de chaque brique.",
  },
  {
    titre: "Les comptes à votre nom",
    texte: "Hébergement, nom de domaine, sauvegardes. Vous gardez les clés.",
  },
  {
    titre: "Une documentation à chaque brique",
    texte:
      "Le fonctionnement de la solution, les règles de votre métier qu'elle applique, son mode d'emploi.",
  },
  {
    titre: "Des technologies courantes et éprouvées",
    texte: "Sans composant rare ni propriétaire.",
  },
  {
    titre: "Vos données jamais diffusées",
    texte:
      "Analysées pour le cadrage, elles restent chez vous. Ce qui en sort, ce sont des chiffres agrégés, jamais une pièce nominative.",
  },
];

export function GarantiesSection() {
  return (
    <Section id="garanties" alternate>
      <h2 className="font-serif text-xl lg:text-4xl font-bold">
        Vos garanties, écrites
      </h2>
      <p className="mt-4 text-base leading-relaxed max-w-3xl">
        La solution est à vous, et elle est construite pour durer. Après la
        mise en service, rien n&apos;est imposé : un contrat de maintenance et
        d&apos;évolution reste possible, chiffré à part.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {garanties.map((g) => (
          <Card key={g.titre} variant="on-ecru">
            <h3 className="font-serif text-xl font-bold">{g.titre}</h3>
            <p className="mt-2 text-base leading-relaxed">{g.texte}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
