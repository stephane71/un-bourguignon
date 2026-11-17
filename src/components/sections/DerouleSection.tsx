import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const entretiens = [
  {
    titre: "Comprendre.",
    texte: "Le circuit tel qu'il se vit, raconté par vos équipes.",
  },
  {
    titre: "Montrez-moi.",
    texte:
      "Le travail observé au poste, sur vos supports réels : documents papier, tableurs, courriels, logiciels de gestion.",
  },
  {
    titre: "Valider l'état des lieux.",
    texte: "Les règles du métier et les chiffres relus avec vous, point par point.",
  },
  {
    titre: "La maquette en main.",
    texte:
      "Vos équipes testent la maquette de la future solution sur vos propres données, et l'ajustent avec vous.",
  },
  {
    titre: "La restitution.",
    texte: "Le dossier, la maquette et le devis, présentés au dirigeant.",
  },
];

const livrables = [
  {
    titre: "Le dossier d'audit chiffré",
    texte:
      "Votre circuit actuel décrit geste par geste : volumes, temps, coût annuel en euros, ce qui repose sur la mémoire d'une personne.",
  },
  {
    titre: "La maquette",
    texte:
      "La future solution en maquette, alimentée par un échantillon de vos données réelles. Vous jugez sur pièce.",
  },
  {
    titre: "Le devis ferme",
    texte:
      "Les briques, leur ordre, leur prix et leur calendrier, avec les gains attendus en heures et en euros.",
  },
];

const briques = [
  {
    titre: "Factures fournisseurs contrôlées",
    texte:
      "Chaque facture rapprochée de la commande et de la livraison, l'écart signalé, le paiement préparé.",
  },
  {
    titre: "Du devis à la facture",
    texte:
      "Devis, commande et facture électronique conforme, enchaînés sans ressaisie.",
  },
  {
    titre: "Suivi de production",
    texte:
      "Ordres de fabrication, temps passés et matières consommées, suivis au même endroit.",
  },
  {
    titre: "Planning",
    texte:
      "Équipes, chantiers ou interventions réunis en un seul planning, à jour pour tous.",
  },
  {
    titre: "Stocks et achats",
    texte: "Niveaux suivis, alertes aux seuils, commandes fournisseurs préparées.",
  },
  {
    titre: "Tableau de bord du dirigeant",
    texte: "Marge, encours et trésorerie à jour, sans tableur tenu à la main.",
  },
];

function Fiche({ items }: { items: { label: string; valeur: string }[] }) {
  return (
    <dl className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.label} className="bg-ecru rounded-lg p-4">
          <dt className="text-sm uppercase tracking-wide">{item.label}</dt>
          <dd className="mt-1 font-serif text-xl font-bold">{item.valeur}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DerouleSection() {
  return (
    <Section id="deroule" alternate>
      <h2 className="font-serif text-xl lg:text-4xl font-bold">
        Le déroulé et les prix
      </h2>
      <p className="mt-4 text-base leading-relaxed max-w-3xl">
        Mesurer d&apos;abord, construire ensuite, brique par brique. Les prix
        sont des forfaits fermes, connus avant tout engagement. Après chaque
        étape, vous décidez : vous continuez, vous attendez ou vous arrêtez.
      </p>

      {/* Étape 1 */}
      <Card variant="on-ecru" className="mt-10 border-t-3 border-or">
        <p className="font-sans text-sm font-bold uppercase tracking-wide text-terre">
          Étape 1
        </p>
        <h3 className="mt-1 font-serif text-2xl font-bold">Le cadrage</h3>
        <Fiche
          items={[
            { label: "Prix", valeur: "3 000 € HT" },
            { label: "Durée", valeur: "Un mois" },
            { label: "Règlement", valeur: "À la remise du dossier" },
          ]}
        />
        <p className="mt-6 text-base leading-relaxed">
          En un mois, vous savez ce que vous coûte votre gestion actuelle, à
          quoi ressemblera la solution et ce qu&apos;elle coûtera. Cinq
          entretiens avec ceux qui font le travail, dans vos locaux ou à
          distance :
        </p>
        <ol className="mt-4 space-y-2 text-base leading-relaxed list-decimal list-inside marker:font-bold marker:text-terre">
          {entretiens.map((e) => (
            <li key={e.titre}>
              <span className="font-bold">{e.titre}</span> {e.texte}
            </li>
          ))}
        </ol>
        <h4 className="mt-8 font-serif text-xl font-bold">Ce que vous recevez</h4>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {livrables.map((l) => (
            <div key={l.titre}>
              <p className="font-bold">{l.titre}</p>
              <p className="mt-1 text-base leading-relaxed">{l.texte}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-base leading-relaxed">
          Ce dossier vous appartient, quelle que soit votre décision : réaliser
          la solution ou vous arrêter là. Et si le cadrage montre qu&apos;un
          réglage de vos logiciels suffit, le dossier le dit.
        </p>
      </Card>

      {/* Étape 2 */}
      <Card variant="on-ecru" className="mt-8 border-t-3 border-or">
        <p className="font-sans text-sm font-bold uppercase tracking-wide text-terre">
          Étape 2
        </p>
        <h3 className="mt-1 font-serif text-2xl font-bold">
          La réalisation, brique par brique
        </h3>
        <Fiche
          items={[
            { label: "Prix", valeur: "5 000 € HT par brique" },
            { label: "Durée", valeur: "Deux mois par brique" },
            {
              label: "Règlement",
              valeur: "20 % au départ, 80 % à la mise en service",
            },
          ]}
        />
        <p className="mt-6 text-base leading-relaxed">
          Une brique, c&apos;est une ou plusieurs fonctionnalités qui agissent
          directement sur un de vos process existants et apportent seules un
          gain à votre métier. Le premier mois, vous la manipulez déjà sur vos
          données. Le second mois, elle est mise en service, documentée et
          prise en main par vos équipes. Elle est validée sur des critères
          écrits au devis.
        </p>
        <h4 className="mt-8 font-serif text-xl font-bold">
          Des exemples de briques
        </h4>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {briques.map((b) => (
            <div key={b.titre} className="bg-ecru rounded-lg p-4">
              <p className="font-bold">{b.titre}</p>
              <p className="mt-1 text-base leading-relaxed">{b.texte}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-serif text-xl font-bold">Aucun dépassement</h3>
          <p className="mt-2 text-base leading-relaxed">
            Le prix d&apos;une brique ne bouge pas. Un besoin nouveau donne un
            nouveau devis, jamais une facture surprise.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold">
            Une décision à chaque étape
          </h3>
          <p className="mt-2 text-base leading-relaxed">
            Après le cadrage, après chaque brique : vous continuez, vous
            attendez ou vous arrêtez. Ce qui est livré fonctionne et vous
            appartient.
          </p>
        </div>
      </div>
    </Section>
  );
}
