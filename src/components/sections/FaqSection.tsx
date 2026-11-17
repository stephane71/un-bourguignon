import { Section } from "@/components/ui/Section";

const questions = [
  {
    q: "Et si le cadrage montre qu'il ne faut rien construire ?",
    r: "Le dossier le dit. Parfois, un réglage de vos logiciels ou un logiciel du marché suffit : le dossier vous le recommande, et il vous appartient.",
  },
  {
    q: "Pourquoi du sur mesure plutôt qu'un logiciel du marché ?",
    r: "Un logiciel du marché fait souvent l'essentiel, de la même façon pour tous. Le sur mesure prend en charge ce qui fait votre différence, et ce qui se fait encore à côté, à la main. Le cadrage vous indique, chiffres à l'appui, ce qui vous rapporte le plus.",
  },
  {
    q: "Combien de temps mes équipes doivent-elles y consacrer ?",
    r: "Pour le cadrage, cinq entretiens d'environ deux heures, et l'accès aux documents du travail étudié. Pour chaque brique, une demi-journée environ pour la valider.",
  },
  {
    q: "Peut-on commencer par une seule brique ?",
    r: "Oui. Chaque brique apporte à elle seule un gain à votre métier : un process allégé, du temps rendu, des erreurs évitées.",
  },
  {
    q: "Que devient la solution une fois livrée ?",
    r: "Elle vous appartient et continue de fonctionner : le code, les comptes et la documentation sont chez vous dès la première brique. Un contrat de maintenance et d'évolution peut l'adapter à mesure que votre activité évolue.",
  },
  {
    q: "Où intervenez-vous ?",
    r: "Dans vos locaux en Saône-et-Loire, et à distance partout en France métropolitaine.",
  },
];

export function FaqSection() {
  return (
    <Section id="questions" alternate>
      <h2 className="font-serif text-xl lg:text-4xl font-bold">
        Ce que les dirigeants demandent avant de signer
      </h2>
      <div className="mt-8 max-w-3xl divide-y divide-sable border-y border-sable">
        {questions.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="cursor-pointer list-none font-serif text-lg font-bold flex items-start justify-between gap-4 min-h-12 items-center focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2 rounded">
              {item.q}
              <span
                aria-hidden="true"
                className="text-argile text-2xl leading-none group-open:rotate-45 transition-transform"
              >
                +
              </span>
            </summary>
            <p className="mt-2 text-base leading-relaxed">{item.r}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
