import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <Section id="hero" className="!py-20 sm:!py-28 lg:!py-32">
      <div className="text-left max-w-3xl">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
          Votre gestion vous coûte des heures chaque semaine.
          Récupérez-les.
        </h1>
        <p className="mt-6 text-lg leading-relaxed">
          Ressaisir, recopier, rapprocher, vérifier à la main : ce travail
          pèse sur vos coûts et ralentit votre production. Je construis une
          solution adaptée à votre façon de produire, qui fait ce travail à la
          place de vos équipes. Avant de vous engager, vous savez ce que vous
          coûte votre gestion actuelle et ce que vous allez gagner.
        </p>
        <div className="mt-6 flex justify-start">
          <p className="border-l-4 border-or pl-4 text-left font-serif text-xl italic leading-normal">
            Un mois pour mesurer.<br />
            Deux mois par brique pour construire.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
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
      </div>
    </Section>
  );
}
