import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <Section id="hero" className="!py-20 sm:!py-28 lg:!py-32">
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
        {/* Portrait -- appears first on mobile (natural order), on the right on desktop */}
        <div className="lg:order-last flex-shrink-0">
          <Image
            src="/images/photo-portrait.png"
            alt="Stéphane Maire, consultant numérique"
            width={280}
            height={280}
            className="rounded-full w-[200px] h-[200px] lg:w-[280px] lg:h-[280px]"
            priority
          />
        </div>
        {/* Text block */}
        <div className="text-center lg:text-left">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold">
            Stéphane Maire
          </h1>
          <p
            className="font-sans text-xl lg:text-2xl mt-3"
            style={{ lineHeight: "1.4" }}
          >
            Consultant numérique de proximité
          </p>
          <p
            className="font-serif text-xl italic mt-4"
            style={{ lineHeight: "1.5" }}
          >
            La méthode d&apos;un expert, la proximité d&apos;un artisan.
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-8">
            <Button as="a" href="#contact">
              Prendre contact
            </Button>
            <a
              href="#services"
              className="font-sans font-bold text-brun underline-offset-4 hover:underline inline-flex items-center gap-1 min-h-12"
            >
              Découvrir mes services &rarr;
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
