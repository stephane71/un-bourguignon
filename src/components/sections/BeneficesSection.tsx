import { LabeledSection } from "@/components/ui/LabeledSection";

const gains = [
  {
    titre: "Des coûts de gestion réduits",
    texte:
      "Ressaisir, recopier, rapprocher, vérifier ce qui est juste : ces gestes répétés passent à la solution. Vos équipes ne traitent plus que les exceptions.",
  },
  {
    titre: "Des process fluides",
    texte:
      "Un logiciel sur mesure suit votre façon de travailler. Une information saisie une fois est disponible partout, à jour.",
  },
  {
    titre: "Du temps rendu au métier",
    texte:
      "Les heures gagnées sur la gestion retournent à votre métier, à vos clients, à votre équipe.",
  },
  {
    titre: "Moins de dépendance à une mémoire",
    texte:
      "Les règles, les exceptions et l'historique sont écrits dans la solution, disponibles même quand la personne qui les connaît est absente.",
  },
];

export function BeneficesSection() {
  return (
    <LabeledSection
      id="benefices"
      label="Ce que vous gagnez"
      title="Une solution qui fait à votre place ce que vos équipes font à la main."
    >
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-12 border-t border-brun">
        {gains.map((g) => (
          <div key={g.titre} className="py-5 border-b border-sable min-w-0">
            <h3 className="font-serif text-xl font-bold">{g.titre}</h3>
            <p className="mt-2 text-base leading-relaxed max-w-[52ch]">
              {g.texte}
            </p>
          </div>
        ))}
      </div>
    </LabeledSection>
  );
}
