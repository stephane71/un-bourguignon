import { LabeledSection } from "@/components/ui/LabeledSection";

const constats = [
  { chiffre: "98 %", texte: "des factures sont justes" },
  { chiffre: "13", texte: "outils traversés par une seule facture conforme" },
  { chiffre: "17", texte: "gestes à la main pour cette même facture" },
  {
    chiffre: "≈ 770 h",
    texte: "de gestion par an, estimées au cadrage, soit ≈ 14 000 à 16 000 €",
  },
];

const indicateurs = [
  {
    indicateur: "Outils traversés par une facture",
    avant: "13",
    apres: "4, sans papier",
  },
  {
    indicateur: "Heures de gestion par an",
    avant: "≈ 770 h",
    apres: "≈ 500 à 600 h rendues",
  },
  {
    indicateur: "Coût annuel",
    avant: "≈ 14 000 à 16 000 €",
    apres: "≈ 9 000 à 13 000 € gagnés",
  },
];

export function CasSection() {
  return (
    <LabeledSection
      id="cas"
      dark
      label="Un cas réel · Exploitation de cinéma"
      title="98 % des factures sont justes. Le temps passé à traiter chacune coûte cher."
      intro="Un exploitant de cinéma paie chaque semaine les distributeurs de films. Son équipe vérifie chaque facture à la main contre les relevés de la caisse. Le dirigeant pensait que l'enjeu était les erreurs de facturation. Le cadrage a mesuré où partait vraiment le temps de gestion."
    >
      <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 border-y border-white/25 py-6">
        {constats.map((c) => (
          <div key={c.texte} className="min-w-0">
            <dt className="font-serif text-4xl lg:text-5xl font-bold text-or-light whitespace-nowrap">
              {c.chiffre}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-white/85">
              {c.texte}
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-10 font-serif text-xl font-bold">La solution proposée</h3>
      <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-white/85">
        Une solution qui contrôle chaque facture contre la caisse, repère les
        doublons, prépare les virements et garde la preuve de chaque paiement.
        La réalisation est découpée en briques à prix ferme, avec leur
        calendrier.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/60">
              <th scope="col" className="py-3 pr-4 text-xs font-bold uppercase tracking-[0.1em]">
                Indicateur
              </th>
              <th scope="col" className="py-3 pr-4 text-xs font-bold uppercase tracking-[0.1em]">
                Au cadrage
              </th>
              <th scope="col" className="py-3 text-xs font-bold uppercase tracking-[0.1em]">
                Avec la solution (estimé)
              </th>
            </tr>
          </thead>
          <tbody>
            {indicateurs.map((i) => (
              <tr key={i.indicateur} className="border-b border-white/25">
                <td className="py-3 pr-4 text-white/85">{i.indicateur}</td>
                <td className="py-3 pr-4">{i.avant}</td>
                <td className="py-3 font-bold">{i.apres}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-white/80">
        Le nombre d&apos;outils, de gestes et la part de factures justes ont été
        mesurés au cadrage. Les heures et les montants sont estimés au cadrage,
        sur les données réelles de l&apos;exploitant, avant réalisation.
      </p>
    </LabeledSection>
  );
}
