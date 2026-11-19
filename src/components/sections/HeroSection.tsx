import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const segments = [
  { nom: "Cadrage", prix: "3 000 € HT", duree: "1 mois", classe: "seg-1" },
  { nom: "Brique 1", prix: "5 000 € HT", duree: "2 mois", classe: "seg-2" },
  { nom: "Brique 2", prix: "5 000 € HT", duree: "2 mois", classe: "seg-2" },
  {
    nom: "Brique suivante",
    prix: "5 000 € HT",
    duree: "2 mois",
    classe: "seg-2 seg-open",
  },
  {
    nom: "Maintenance et évolution",
    prix: "Sur contrat",
    duree: "dans la durée",
    classe: "seg-3",
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="bg-ecru pt-16 pb-14 sm:pt-24 lg:pt-28 lg:pb-20">
      <Container>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-terre">
          Gestion sur mesure, par Stéphane Maire · pour les entreprises,
          partout en France
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-[19ch]">
          Votre gestion vous coûte des heures chaque semaine.{" "}
          <span className="text-brun/75">Récupérez-les.</span>
        </h1>
        <p className="mt-6 max-w-[58ch] text-lg leading-relaxed">
          Ressaisir, recopier, rapprocher, vérifier à la main : ce travail pèse
          sur vos coûts et ralentit votre activité. Je construis une solution
          adaptée à votre façon de travailler, qui fait ce travail à la place
          de vos équipes. Avant de vous engager, vous savez ce que vous coûte votre
          gestion actuelle et ce que vous allez gagner.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-8">
          <Button as="a" href="#contact">
            Demander un premier échange
          </Button>
          <a
            href="#deroule"
            className="font-sans font-bold text-brun underline-offset-4 hover:underline inline-flex items-center gap-1 min-h-12"
          >
            Voir le déroulé et les prix &rarr;
          </a>
        </div>

        <a
          href="#cas"
          className="mt-10 inline-grid grid-cols-1 sm:grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-1 items-baseline max-w-[660px] bg-white border-l-2 border-argile px-5 py-4 no-underline group"
        >
          <strong className="font-serif text-2xl font-bold whitespace-nowrap">
            ≈ 500 à 600 h
          </strong>
          <span className="text-base leading-relaxed">
            de gestion rendues par an : c&apos;est l&apos;estimation du cadrage
            réalisé chez un exploitant de cinéma.{" "}
            <em className="not-italic text-terre whitespace-nowrap group-hover:underline">
              Voir le cas
            </em>
          </span>
        </a>

        <p className="mt-14 lg:mt-20 font-serif text-xl lg:text-2xl font-bold">
          Un mois pour mesurer. Deux mois par brique pour construire.
        </p>
        <div className="chain" role="list" aria-label="Les étapes et leurs prix">
          {segments.map((s) => (
            <div key={s.nom} className={`seg ${s.classe}`} role="listitem">
              <div className="cote" aria-hidden="true">
                <span>{s.duree}</span>
              </div>
              <p className="font-serif text-lg font-bold">
                {s.nom}
                <span className="sr-only"> : {s.duree}, </span>
              </p>
              <p className="text-sm">{s.prix}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed">
          Forfaits fermes, hors taxes. Chaque losange marque un point de
          décision : vous continuez, vous attendez ou vous arrêtez. Après
          chaque mise en service, la maintenance et l&apos;évolution vous sont
          proposées par contrat.
        </p>
      </Container>
    </section>
  );
}
