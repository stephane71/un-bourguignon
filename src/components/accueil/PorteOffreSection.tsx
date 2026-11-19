import { Container } from "@/components/ui/Container";
import { OFFRE_PATH } from "@/components/navigation";

export function PorteOffreSection() {
  return (
    <section
      id="offres"
      className="bg-white border-t border-sable py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-terre">
          Pour les entreprises
        </p>
        <a
          href={OFFRE_PATH}
          className="group mt-6 block border border-sable border-l-4 border-l-argile bg-ecru p-6 sm:p-10 no-underline focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2"
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold">
            Gestion sur mesure
          </h2>
          <p className="mt-1 text-base">
            Logiciel sur mesure et automatisations, par Stéphane Maire
          </p>
          <p className="mt-8 font-serif text-2xl lg:text-3xl font-bold leading-tight max-w-[26ch]">
            Votre gestion vous coûte des heures chaque semaine.{" "}
            <span className="text-brun/75">Récupérez-les.</span>
          </p>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed">
            Ressaisies, tableurs tenus à la main, vérifications répétées : je
            mesure ce que ce travail vous coûte, puis je construis, brique par
            brique, une solution adaptée à votre façon de travailler.
          </p>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed">
            <strong className="font-serif text-xl">≈ 500 à 600 h</strong> de
            gestion rendues par an : c&apos;est l&apos;estimation du cadrage
            réalisé chez un exploitant de cinéma.
          </p>
          <span className="mt-8 inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-brun text-white font-bold tracking-wide group-hover:bg-brun/90 transition-colors">
            Découvrir l&apos;offre &rarr;
          </span>
        </a>
      </Container>
    </section>
  );
}
