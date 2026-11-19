import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LinkedIn } from "@/components/icons/LinkedIn";

const LINKEDIN_URL = "https://www.linkedin.com/in/stephanemaire71";

const reperes = [
  {
    titre: "Plus de 15 ans",
    texte:
      "de conception et de développement de logiciels, à Paris puis à distance : finance, réseaux, sécurité, vente.",
  },
  {
    titre: "Un seul interlocuteur",
    texte:
      "Je mène moi-même chaque étape, du premier échange à la maintenance.",
  },
  {
    titre: "Partout en France",
    texte: "Dans vos locaux et à distance, en France métropolitaine.",
  },
];

/** Repris du profil LinkedIn (page Expérience), hors activité indépendante actuelle. */
const parcours = [
  {
    periode: "2023 – 2025",
    qui: "Zeliq",
    quoi: "Plateforme de prospection commerciale",
    texte:
      "Arrivé dans les premiers mois du projet : mise en place de l'architecture, règles de travail communes, bibliothèque de composants partagée pour livrer plus vite, outils d'IA adoptés pour coder mieux et plus vite.",
  },
  {
    periode: "2021 – 2022",
    qui: "Thales",
    quoi: "Cryptobox, stockage et partage de fichiers sécurisés",
    texte:
      "Dans une équipe de 10 personnes, responsable de l'interface : maintenance, nouvelles fonctionnalités, versions pour Windows et macOS, intégration du module de chiffrement.",
  },
  {
    periode: "2019 – 2020",
    qui: "Scaled Risk",
    quoi: "Plateforme de données pour les institutions financières",
    texte:
      "Rendre la plateforme utilisable par les équipes métier, et construire des indicateurs qui aident un gestionnaire d'actifs à piloter son portefeuille.",
  },
  {
    periode: "2017 – 2018",
    qui: "La Foulée",
    quoi: "Calendrier des courses à pied en France, projet personnel",
    texte:
      "Conçu et construit seul, de bout en bout : collecte automatique des événements, base de données, accès aux données, application web, référencement.",
  },
  {
    periode: "2015 – 2017",
    qui: "Wisembly",
    quoi: "Solution d'animation de réunions et d'événements",
    texte:
      "Maintenance et évolution de l'application principale, puis une nouvelle application de tableau de bord et d'analyse pour les clients.",
  },
  {
    periode: "2010 – 2015",
    qui: "SFR",
    quoi: "Plateforme de diffusion de contenus, en alternance",
    texte:
      "Tableau de bord des indicateurs de la plateforme, pour suivre la consommation et repérer les anomalies.",
  },
];

const engagements = [
  {
    titre: "Mesurer avant de construire",
    texte:
      "J'observe le travail à son poste, sur vos supports réels, et je chiffre ce qu'il vous coûte avant toute construction.",
  },
  {
    titre: "Annoncer le prix avant l'engagement",
    texte: "Des forfaits fermes, connus avant que vous décidiez. Aucun dépassement.",
  },
  {
    titre: "Vous laisser la propriété",
    texte:
      "Les droits vous sont cédés par écrit. Le code, les comptes et la documentation sont à votre nom.",
  },
];

const lienClassName =
  "inline-flex items-center gap-2 min-h-12 font-bold text-brun underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2 rounded-sm";

export function PresentationSection() {
  return (
    <section
      id="presentation"
      className="bg-ecru pt-16 pb-16 sm:pt-24 lg:pt-28 lg:pb-24"
    >
      <Container>
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-8 sm:gap-12">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-terre">
              Logiciel et automatisations sur mesure
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-[16ch]">
              Stéphane Maire, ingénieur logiciel.
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed">
              Je conçois et je construis des logiciels et des automatisations
              sur mesure pour les entreprises. Je pars de votre façon de
              travailler, observée avec ceux qui font le travail, et je mesure
              avant de construire.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 ${lienClassName}`}
            >
              <LinkedIn size={18} />
              Mon profil LinkedIn
            </a>
          </div>
          <Image
            src="/images/photo-portrait.webp"
            alt="Stéphane Maire"
            width={255}
            height={255}
            priority
            className="rounded-full flex-shrink-0 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[230px] lg:h-[230px]"
          />
        </div>

        <dl className="mt-14 grid grid-cols-1 md:grid-cols-3 md:gap-x-10 border-t border-brun">
          {reperes.map((r) => (
            <div key={r.titre} className="py-5 border-b border-sable min-w-0">
              <dt className="font-serif text-2xl font-bold">{r.titre}</dt>
              <dd className="mt-1 text-base leading-relaxed">{r.texte}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 text-xs font-bold uppercase tracking-[0.12em] text-terre">
          Mon parcours
        </p>
        <ol className="mt-4 border-t border-sable">
          {parcours.map((p) => (
            <li
              key={p.qui}
              className="grid grid-cols-1 md:grid-cols-[8rem_minmax(0,1fr)] gap-1 md:gap-6 py-4 border-b border-sable"
            >
              <span className="text-sm font-bold text-terre md:pt-1">
                {p.periode}
              </span>
              <div className="min-w-0">
                <p className="font-serif text-lg font-bold leading-snug">
                  {p.qui}{" "}
                  <span className="font-sans text-base font-normal">
                    · {p.quoi}
                  </span>
                </p>
                <p className="mt-1 max-w-[70ch] text-base leading-relaxed">
                  {p.texte}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <a
          href={`${LINKEDIN_URL}/details/experience/`}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-2 ${lienClassName}`}
        >
          <LinkedIn size={18} />
          Le détail de mon parcours sur LinkedIn
        </a>

        <p className="mt-12 text-xs font-bold uppercase tracking-[0.12em] text-terre">
          Mes engagements
        </p>
        <dl className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagements.map((e) => (
            <div key={e.titre} className="border-t border-sable pt-4">
              <dt className="font-serif text-lg font-bold">{e.titre}</dt>
              <dd className="mt-1 text-base leading-relaxed">{e.texte}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
