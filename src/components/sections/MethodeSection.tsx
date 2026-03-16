import { Section } from "@/components/ui/Section";

const steps = [
  {
    title: "Diagnostic terrain",
    description:
      "Je commence toujours par comprendre. Un premier \u00e9change \u2014 souvent sur le terrain ou par t\u00e9l\u00e9phone \u2014 me permet de cerner la situation r\u00e9elle : quels outils sont d\u00e9j\u00e0 utilis\u00e9s, quels sont les blocages, quelles sont les priorit\u00e9s. Pas de solution pr\u00e9fabriqu\u00e9e : chaque diagnostic est unique.",
  },
  {
    title: "Accompagnement personnalis\u00e9",
    description:
      "Je propose un plan d\u2019action concret, adapt\u00e9 \u00e0 la r\u00e9alit\u00e9 du client. L\u2019accompagnement peut prendre la forme de s\u00e9ances de formation, d\u2019une mise en place d\u2019outils avec formation incluse, ou d\u2019un suivi r\u00e9gulier sur plusieurs semaines.",
  },
  {
    title: "Suivi et autonomie",
    description:
      "L\u2019objectif final est l\u2019autonomie du client. Je fournis des supports simples, des guides adapt\u00e9s, et reste disponible pour les questions apr\u00e8s la mission.",
  },
];

const formats = [
  {
    name: "Consultation ponctuelle",
    duration: "1 \u00e0 2 heures",
    ideal: "Question pr\u00e9cise, d\u00e9blocage rapide",
  },
  {
    name: "Mission d\u2019accompagnement",
    duration: "3 \u00e0 10 s\u00e9ances",
    ideal: "Mise en place d\u2019un outil ou d\u2019une conformit\u00e9",
  },
  {
    name: "Atelier collectif",
    duration: "1/2 journ\u00e9e",
    ideal: "Formation en petit groupe (IA, outils num\u00e9riques)",
  },
  {
    name: "Suivi mensuel",
    duration: "1 \u00e0 2 h / mois",
    ideal: "Maintien des comp\u00e9tences, questions au fil de l\u2019eau",
  },
];

export function MethodeSection() {
  return (
    <Section id="methode">
      <h2 className="font-serif text-xl lg:text-4xl font-bold">
        Ma m\u00e9thode de travail
      </h2>

      <div className="mt-8 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex-1 relative lg:px-6 first:lg:pl-0 last:lg:pr-0"
          >
            {i > 0 && (
              <div className="hidden lg:block absolute top-6 left-0 w-6 h-0.5 bg-sable -translate-x-full" />
            )}
            {i > 0 && (
              <div className="lg:hidden w-0.5 h-8 bg-sable ml-5 -mt-8 mb-0" />
            )}
            <span className="font-serif font-bold text-or-light text-4xl lg:text-5xl">
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
                  Dur\u00e9e
                </th>
                <th scope="col" className="font-serif font-bold py-3 px-4">
                  Id\u00e9al pour
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
