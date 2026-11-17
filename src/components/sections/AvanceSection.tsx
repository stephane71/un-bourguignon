import { LabeledSection } from "@/components/ui/LabeledSection";

const savoirs = [
  { quoi: "Le prix du cadrage : 3 000 € HT", quand: "Dès maintenant", tot: true },
  {
    quoi: "Le prix d'une brique : 5 000 € HT, deux mois",
    quand: "Dès maintenant",
    tot: true,
  },
  {
    quoi: "Ce que vous coûte votre gestion actuelle, en heures et en euros",
    quand: "Fin du cadrage",
  },
  {
    quoi: "La maquette de la future solution, déjà testée sur vos données",
    quand: "Fin du cadrage",
  },
  { quoi: "Le nombre de briques, leur ordre, le prix total", quand: "Devis ferme" },
  { quoi: "Les gains attendus, en heures et en euros", quand: "Devis ferme" },
  { quoi: "La date de mise en service de chaque brique", quand: "Devis ferme" },
];

const engagements = [
  {
    titre: "Aucun dépassement",
    texte:
      "Le prix d'une brique ne bouge pas. Un besoin nouveau donne un nouveau devis, jamais une facture surprise.",
  },
  {
    titre: "Une décision à chaque étape",
    texte:
      "Après le cadrage, après chaque brique : vous continuez, vous attendez ou vous arrêtez.",
  },
  {
    titre: "Un effort connu pour vos équipes",
    texte:
      "Cadrage : cinq entretiens d'environ deux heures. Briques : une demi-journée environ à chaque validation.",
  },
];

export function AvanceSection() {
  return (
    <LabeledSection
      id="d-avance"
      label="Ce que vous savez d'avance"
      title="Le prix total, la date de mise en service et le gain attendu, avant de vous engager."
    >
      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-brun">
              <th
                scope="col"
                className="py-3 pr-4 text-xs font-bold uppercase tracking-[0.1em]"
              >
                Ce que vous savez
              </th>
              <th
                scope="col"
                className="py-3 text-xs font-bold uppercase tracking-[0.1em] whitespace-nowrap"
              >
                À quel moment
              </th>
            </tr>
          </thead>
          <tbody>
            {savoirs.map((s) => (
              <tr key={s.quoi} className="border-b border-sable">
                <td className="py-3 pr-4 text-base">{s.quoi}</td>
                <td
                  className={`py-3 text-sm whitespace-nowrap ${
                    s.tot ? "font-bold text-terre" : ""
                  }`}
                >
                  {s.quand}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {engagements.map((e) => (
          <div key={e.titre} className="border-t border-sable pt-4">
            <h3 className="font-serif text-lg font-bold">{e.titre}</h3>
            <p className="mt-1 text-base leading-relaxed">{e.texte}</p>
          </div>
        ))}
      </div>
    </LabeledSection>
  );
}
