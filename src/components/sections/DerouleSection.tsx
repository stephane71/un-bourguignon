import { LabeledSection } from "@/components/ui/LabeledSection";

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
    titre: "Le dossier d'audit",
    texte:
      "Votre circuit actuel décrit geste par geste : volumes, temps, coût annuel en euros, ce qui repose sur la mémoire d'une personne, les risques.",
  },
  {
    titre: "La maquette",
    texte:
      "La future solution en maquette, alimentée par un échantillon de vos données réelles. Vous jugez sur pièce.",
  },
  {
    titre: "Le devis de réalisation",
    texte:
      "Les briques, leur ordre, leur prix ferme et leur calendrier. Les gains attendus en heures et en euros, hypothèses écrites.",
  },
];

const deuxMois = [
  {
    titre: "Premier mois",
    texte:
      "Construction, puis premiers essais sur vos données. Vous manipulez la brique dès ce premier mois.",
  },
  {
    titre: "Second mois",
    texte:
      "Mise en service, ajustements, documentation, prise en main par vos équipes.",
  },
  {
    titre: "Validation",
    texte:
      "Sur des critères écrits au devis et vérifiés sur vos données. Ce que la brique doit faire est connu avant qu'elle commence.",
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
      "Devis, commande et facture électronique conforme, enchaînés sans ressaisie, relances comprises.",
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

const maintenance = [
  {
    titre: "En état de marche",
    texte:
      "La solution continue de faire, jour après jour, ce pour quoi chaque brique a été validée.",
  },
  {
    titre: "Adaptée à votre activité",
    texte:
      "Un nouveau produit, une règle qui change, une équipe qui grandit : la solution suit votre entreprise.",
  },
  {
    titre: "Par celui qui l'a construite",
    texte:
      "Je maintiens la solution que j'ai construite : je connais son fonctionnement et les règles de votre métier qu'elle applique.",
  },
];

function Fiche({ items }: { items: { label: string; valeur: string }[] }) {
  return (
    <dl className="mt-5 grid grid-cols-1 sm:grid-cols-3 border border-sable bg-white">
      {items.map((item, i) => (
        <div
          key={item.label}
          className={`p-4 ${i > 0 ? "border-t sm:border-t-0 sm:border-l border-sable" : ""}`}
        >
          <dt className="text-xs uppercase tracking-[0.1em]">{item.label}</dt>
          <dd className="mt-1 font-serif text-lg font-bold leading-snug">
            {item.valeur}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Repere({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-10 text-xs font-bold uppercase tracking-[0.12em] text-terre">
      {children}
    </p>
  );
}

function TroisColonnes({ items }: { items: { titre: string; texte: string }[] }) {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((l) => (
        <div key={l.titre} className="border-t border-sable pt-4">
          <h4 className="font-serif text-lg font-bold">{l.titre}</h4>
          <p className="mt-1 text-base leading-relaxed">{l.texte}</p>
        </div>
      ))}
    </div>
  );
}

export function DerouleSection() {
  return (
    <LabeledSection
      id="deroule"
      label="Le déroulé et les prix"
      title="Mesurer d'abord, construire brique par brique, puis maintenir et faire évoluer."
    >
      {/* Étape 1 */}
      <div className="mt-8 border-t border-brun pt-6">
        <h3 className="font-serif text-2xl lg:text-3xl font-bold">
          <span className="mr-3 align-middle font-sans text-sm font-bold text-terre">
            Étape 1
          </span>
          Le cadrage
        </h3>
        <Fiche
          items={[
            { label: "Prix", valeur: "3 000 € HT, forfait ferme" },
            { label: "Durée", valeur: "Un mois" },
            { label: "Règlement", valeur: "À la remise du dossier" },
          ]}
        />
        <p className="mt-6 max-w-[62ch] text-base leading-relaxed">
          En un mois, vous savez ce que vous coûte votre gestion actuelle, à
          quoi ressemblera la solution et ce qu&apos;elle coûtera.
        </p>

        <Repere>
          Cinq entretiens avec ceux qui font le travail, dans vos locaux ou à
          distance
        </Repere>
        <ol className="mt-3 border-t border-sable">
          {entretiens.map((e, i) => (
            <li
              key={e.titre}
              className="grid grid-cols-[2.5rem_minmax(0,1fr)] py-3 border-b border-sable text-base leading-relaxed"
            >
              <span className="text-sm font-bold text-terre pt-0.5">
                E{i + 1}
              </span>
              <span>
                <span className="font-bold">{e.titre}</span> {e.texte}
              </span>
            </li>
          ))}
        </ol>

        <Repere>Ce que vous recevez</Repere>
        <TroisColonnes items={livrables} />

        <p className="mt-8 max-w-[62ch] bg-white border-l-2 border-argile px-5 py-4 text-base leading-relaxed">
          <strong>Ce dossier vous appartient, quelle que soit votre décision</strong>{" "}
          : réaliser la solution ou vous arrêter là.
        </p>
      </div>

      {/* Étape 2 */}
      <div className="mt-14 border-t border-brun pt-6">
        <h3 className="font-serif text-2xl lg:text-3xl font-bold">
          <span className="mr-3 align-middle font-sans text-sm font-bold text-terre">
            Étape 2
          </span>
          La réalisation, brique par brique
        </h3>
        <Fiche
          items={[
            { label: "Prix", valeur: "5 000 € HT par brique" },
            { label: "Durée", valeur: "Deux mois par brique" },
            {
              label: "Règlement",
              valeur: "20 % au départ, 80 % à la mise en service",
            },
          ]}
        />
        <p className="mt-6 max-w-[62ch] text-base leading-relaxed">
          Votre solution se construit par briques. Une brique, c&apos;est une
          ou plusieurs fonctionnalités qui agissent directement sur un de vos
          process existants. Chacune fonctionne seule.
        </p>

        <Repere>Une brique, en deux mois</Repere>
        <TroisColonnes items={deuxMois} />

        <Repere>Des exemples de briques</Repere>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {briques.map((b) => (
            <div key={b.titre} className="border border-sable bg-white p-5">
              <h4 className="font-serif text-lg font-bold">{b.titre}</h4>
              <p className="mt-1 text-base leading-relaxed">{b.texte}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed">
          La plus coûteuse vient d&apos;abord, et vous pouvez vous arrêter après
          chacune : ce qui est livré fonctionne et vous appartient.
        </p>
      </div>

      {/* Étape 3 */}
      <div className="mt-14 border-t border-brun pt-6">
        <h3 className="font-serif text-2xl lg:text-3xl font-bold">
          <span className="mr-3 align-middle font-sans text-sm font-bold text-terre">
            Étape 3
          </span>
          La maintenance et l&apos;évolution
        </h3>
        <Fiche
          items={[
            { label: "Prix", valeur: "Chiffré à part, par contrat" },
            { label: "Quand", valeur: "Après la mise en service d'une brique" },
            { label: "Décision", valeur: "Vous décidez" },
          ]}
        />
        <p className="mt-6 max-w-[62ch] text-base leading-relaxed">
          La solution reste en état de marche et s&apos;adapte à mesure que
          votre activité évolue.
        </p>

        <Repere>Ce que couvre cette étape</Repere>
        <TroisColonnes items={maintenance} />
        <p className="mt-4 text-sm leading-relaxed">
          Le contrat et son prix vous sont proposés après la mise en service.
          La solution vous appartient et continue de fonctionner si vous ne le
          signez pas.
        </p>
      </div>
    </LabeledSection>
  );
}
