import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LinkedIn } from "@/components/icons/LinkedIn";

const LINKEDIN_URL = "https://www.linkedin.com/in/stephanemaire71";

/**
 * Ce qu'un dirigeant doit retenir de l'expérience (profil LinkedIn, hors
 * activité indépendante actuelle) : des apports, pas un CV.
 */
const apports = [
  {
    titre: "Plus de 15 ans de métier",
    texte:
      "Dans des grands groupes et de jeunes entreprises, j'ai conçu et construit des logiciels dont des équipes se servent au quotidien : finance, sécurité, vente, réseaux.",
  },
  {
    titre: "La technique rendue simple",
    texte:
      "Rendre une plateforme financière utilisable par les équipes métier, donner à un responsable un tableau de bord lisible : mon travail consiste à rendre les logiciels simples pour ceux qui ne sont pas informaticiens.",
  },
  {
    titre: "De bout en bout",
    texte:
      "Des données à l'écran, de la mise en ligne à la maintenance : je maîtrise chaque maillon d'une solution. Chez vous, la même personne écoute, construit et maintient.",
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
              Logiciel et automatisations sur mesure · partout en France
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-[16ch]">
              Stéphane Maire, ingénieur logiciel.
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed">
              Je construis des logiciels et des automatisations sur mesure pour
              les entreprises qui perdent du temps dans leur gestion. J&apos;observe
              d&apos;abord le travail avec ceux qui le font, je mesure ce
              qu&apos;il coûte, puis je construis.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 min-h-12 font-bold text-brun underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2 rounded-sm"
            >
              <LinkedIn size={18} />
              Mon parcours sur LinkedIn
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

        <h2 className="mt-14 text-xs font-bold uppercase tracking-[0.12em] text-terre">
          Ce que je vous apporte
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 md:gap-x-10 border-t border-brun">
          {apports.map((a) => (
            <div key={a.titre} className="py-5 min-w-0">
              <h3 className="font-serif text-xl lg:text-2xl font-bold leading-snug">
                {a.titre}
              </h3>
              <p className="mt-2 text-base leading-relaxed">{a.texte}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xs font-bold uppercase tracking-[0.12em] text-terre">
          Mes engagements
        </h2>
        <dl className="mt-4 grid grid-cols-1 md:grid-cols-3 md:gap-x-10 border-t border-brun">
          {engagements.map((e) => (
            <div key={e.titre} className="py-5 min-w-0">
              <dt className="font-serif text-lg font-bold">{e.titre}</dt>
              <dd className="mt-1 text-base leading-relaxed">{e.texte}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
