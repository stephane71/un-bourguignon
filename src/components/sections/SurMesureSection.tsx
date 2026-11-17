import { LabeledSection } from "@/components/ui/LabeledSection";

const standard = [
  "Part des usages moyens de votre secteur.",
  "Vous demande de travailler comme tout le monde.",
  "Laisse à côté, dans des tableurs, ce qui vous est propre.",
];

const surMesure = [
  "Part de votre mode de production : vos étapes, vos règles, vos exceptions, votre vocabulaire.",
  "Prend en charge ce qui se répète, et laisse à vos équipes ce qui demande leur savoir-faire.",
  "Renforce ce qui vous distingue : plus rapide à produire, plus facile à transmettre.",
];

export function SurMesureSection() {
  return (
    <LabeledSection
      id="sur-mesure"
      label="Sur mesure"
      title="Une solution à la mesure de votre façon de produire."
      intro="Votre entreprise se distingue par sa façon de faire et par des savoirs que d'autres n'ont pas. C'est ce qui vous place sur vos marchés, et c'est ce qu'une solution de gestion sur mesure doit servir."
    >
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="min-w-0">
          <h3 className="font-serif text-xl font-bold text-brun/75 pb-3 border-b border-sable">
            Un logiciel standard
          </h3>
          <ul>
            {standard.map((t) => (
              <li
                key={t}
                className="py-4 border-b border-sable text-base leading-relaxed text-brun/85"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="font-serif text-xl font-bold pb-3 border-b-2 border-argile">
            Une solution sur mesure
          </h3>
          <ul>
            {surMesure.map((t) => (
              <li
                key={t}
                className="py-4 border-b border-sable text-base leading-relaxed"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LabeledSection>
  );
}
