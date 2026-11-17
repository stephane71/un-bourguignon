import { Section } from "@/components/ui/Section";

const constats = [
  { chiffre: "98 %", texte: "des factures sont justes" },
  { chiffre: "13", texte: "outils traversés par une seule facture" },
  { chiffre: "17", texte: "gestes à la main pour cette même facture" },
];

const indicateurs = [
  {
    indicateur: "Outils traversés par une facture",
    avant: "13",
    apres: "4, sans papier",
  },
  {
    indicateur: "Heures de gestion par an",
    avant: "≈ 770 h",
    apres: "≈ 500 à 600 h rendues",
  },
  {
    indicateur: "Coût annuel",
    avant: "≈ 14 000 à 16 000 €",
    apres: "≈ 9 000 à 13 000 € gagnés",
  },
];

export function CasSection() {
  return (
    <Section id="cas">
      <p className="font-sans text-sm font-bold uppercase tracking-wide text-terre">
        Un cas réel
      </p>
      <h2 className="mt-1 font-serif text-xl lg:text-4xl font-bold">
        98 % des factures sont justes. Les vérifier coûte cher.
      </h2>
      <p className="mt-4 text-base leading-relaxed max-w-3xl">
        Un exploitant de cinéma paie chaque semaine les distributeurs de films.
        Son équipe vérifie chaque facture à la main contre les relevés de la
        caisse. Le dirigeant pensait que l&apos;enjeu était les erreurs de
        facturation. Le cadrage a mesuré où partait vraiment le temps.
      </p>

      <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {constats.map((c) => (
          <div key={c.texte} className="bg-ecru rounded-xl p-6 text-center">
            <dt className="font-serif text-4xl font-bold text-argile">
              {c.chiffre}
            </dt>
            <dd className="mt-2 text-base">{c.texte}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 text-base leading-relaxed max-w-3xl">
        La solution proposée contrôle chaque facture contre la caisse, repère
        les doublons, prépare les virements et garde la preuve de chaque
        paiement. Le cadrage estime ce qu&apos;elle doit rendre :
      </p>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-sable">
              <th scope="col" className="font-serif font-bold py-3 px-4">
                Indicateur
              </th>
              <th scope="col" className="font-serif font-bold py-3 px-4">
                Au cadrage
              </th>
              <th scope="col" className="font-serif font-bold py-3 px-4">
                Avec la solution (estimé)
              </th>
            </tr>
          </thead>
          <tbody>
            {indicateurs.map((i) => (
              <tr key={i.indicateur} className="border-b border-sable">
                <td className="py-3 px-4 font-bold">{i.indicateur}</td>
                <td className="py-3 px-4">{i.avant}</td>
                <td className="py-3 px-4">{i.apres}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-relaxed max-w-3xl">
        Le nombre d&apos;outils, de gestes et la part de factures justes ont
        été mesurés au cadrage. Les heures et les montants sont estimés au
        cadrage, sur les données réelles de l&apos;exploitant, avant
        réalisation.
      </p>
    </Section>
  );
}
