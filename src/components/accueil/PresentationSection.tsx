import Image from "next/image";
import { Container } from "@/components/ui/Container";

const reperes = [
  {
    titre: "Plus de 15 ans",
    texte:
      "de conception et de développement de logiciels à Paris, sur des sujets liés à la finance, aux réseaux et à la vente.",
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
