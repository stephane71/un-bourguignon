import { Section } from "@/components/ui/Section";

const steps = [
  {
    title: "Diagnostic terrain",
    description:
      "Je commence toujours par comprendre. Un premier échange — souvent sur le terrain ou par téléphone — me permet de cerner la situation réelle : quels outils sont déjà utilisés, quels sont les blocages, quelles sont les priorités. Pas de solution préfabriquée : chaque diagnostic est unique.",
  },
  {
    title: "Accompagnement personnalisé",
    description:
      "Je propose un plan d'action concret, adapté à la réalité du client. L'accompagnement peut prendre la forme de séances de formation, d'une mise en place d'outils avec formation incluse, ou d'un suivi régulier sur plusieurs semaines.",
  },
  {
    title: "Suivi et autonomie",
    description:
      "L'objectif final est l'autonomie du client. Je fournis des supports simples, des guides adaptés, et reste disponible pour les questions après la mission.",
  },
];

const formats = [
  {
    name: "Consultation ponctuelle",
    duration: "1 à 2 heures",
    ideal: "Question précise, déblocage rapide",
  },
  {
    name: "Mission d'accompagnement",
    duration: "3 à 10 séances",
    ideal: "Mise en place d'un outil ou d'une conformité",
  },
  {
    name: "Atelier collectif",
    duration: "1/2 journée",
    ideal: "Formation en petit groupe (IA, outils numériques)",
  },
  {
    name: "Suivi mensuel",
    duration: "1 à 2 h / mois",
    ideal: "Maintien des compétences, questions au fil de l'eau",
  },
];

export function MethodeSection() {
  return (
    <Section id="methode">
      <h2 className="font-serif text-xl lg:text-4xl font-bold">
        Ma méthode de travail
      </h2>

      <div className="mt-8 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex-1 relative lg:px-6 first:lg:pl-0 last:lg:pr-0"
          >
            <span className="font-serif font-bold text-argile text-4xl lg:text-5xl">
              {i + 1}
            </span>
            <h3 className="font-serif text-xl font-bold mt-2">{step.title}</h3>
            <p className="text-base leading-relaxed mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 lg:mt-16">
        <h3 className="font-serif text-xl font-bold">
          Formats d&apos;intervention
        </h3>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-sable">
                <th scope="col" className="font-serif font-bold py-3 px-4">
                  Format
                </th>
                <th scope="col" className="font-serif font-bold py-3 px-4">
                  Durée
                </th>
                <th scope="col" className="font-serif font-bold py-3 px-4">
                  Idéal pour
                </th>
              </tr>
            </thead>
            <tbody>
              {formats.map((f, i) => (
                <tr key={i} className="border-b border-sable">
                  <td className="py-3 px-4 font-bold">{f.name}</td>
                  <td className="py-3 px-4">{f.duration}</td>
                  <td className="py-3 px-4">{f.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
