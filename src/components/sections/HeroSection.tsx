import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <Section id="hero" className="!py-20 sm:!py-28 lg:!py-32">
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
        {/* Portrait : sous le texte sur mobile, à droite sur ordinateur */}
        <div className="order-last flex-shrink-0">
          <Image
            src="/images/photo-portrait.webp"
            alt="Stéphane Maire"
            width={280}
            height={280}
            className="rounded-full w-[160px] h-[160px] lg:w-[260px] lg:h-[260px]"
            priority
          />
        </div>

        <div className="text-left max-w-2xl">
          <p className="font-sans text-base font-bold uppercase tracking-wide text-argile">
            Gestion sur mesure, par Stéphane Maire
          </p>
          <h1 className="mt-4 font-serif text-4xl lg:text-5xl font-bold leading-tight">
            Votre gestion vous coûte des heures chaque semaine.
            Récupérez-les.
          </h1>
          <p className="mt-6 text-lg leading-relaxed">
            Ressaisir, recopier, rapprocher, vérifier à la main : ce travail
            pèse sur vos coûts et ralentit votre production. Je construis une
            solution autour de votre façon de produire, qui prend ces gestes en
            charge. Avant de vous engager, vous savez ce que vous coûte votre
            gestion actuelle et ce que vous allez gagner.
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
          <p className="mt-6 text-base">
            Pour les PME qui produisent. Basé à Moroges, en Saône-et-Loire,
            j&apos;interviens dans vos locaux et à distance.
          </p>
        </div>
      </div>
    </Section>
  );
}
