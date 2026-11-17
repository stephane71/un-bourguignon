import { LabeledSection } from "@/components/ui/LabeledSection";

const questions = [
  {
    q: "Et si le cadrage montre qu'il ne faut rien construire ?",
    r: "Le dossier le dit. Parfois, un réglage de vos logiciels ou un logiciel du marché suffit : le dossier vous le recommande.",
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
    r: "Partout en France métropolitaine : dans vos locaux, et à distance.",
  },
];

export function FaqSection() {
  return (
    <LabeledSection
      id="questions"
      label="Questions"
      title="Ce que les dirigeants demandent avant de signer."
    >
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        {questions.map((item) => (
          <div key={item.q} className="py-5 border-t border-sable min-w-0">
            <h3 className="font-serif text-lg font-bold leading-snug">
              {item.q}
            </h3>
            <p className="mt-2 text-base leading-relaxed">{item.r}</p>
          </div>
        ))}
      </div>
    </LabeledSection>
  );
}
