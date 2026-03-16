import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const colors = [
  { name: "Ecru", hex: "#F5F0E8", bg: "bg-ecru" },
  { name: "Sable", hex: "#E8DCC8", bg: "bg-sable" },
  { name: "Brun", hex: "#6B4C3B", bg: "bg-brun" },
  { name: "Terre", hex: "#8B6914", bg: "bg-terre" },
  { name: "Or", hex: "#C5973B", bg: "bg-or" },
  { name: "Or light", hex: "#D4A574", bg: "bg-or-light" },
  { name: "Argile", hex: "#B8754C", bg: "bg-argile" },
];

export default function Home() {
  return (
    <main>
      {/* 1. Color swatches */}
      <Section id="couleurs">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold">
          Systeme de design
        </h1>
        <p className="font-sans text-base leading-relaxed mt-4">
          Tokens visuels et composants de base
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-8">
          {colors.map((color) => (
            <div key={color.name}>
              <div className={`${color.bg} h-20 rounded-lg`} />
              <p className="text-sm mt-2">
                {color.name}
                <br />
                {color.hex}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 2. Typography specimens */}
      <Section id="typographie" alternate={true}>
        <h2 className="font-serif text-[28px] sm:text-4xl font-bold leading-tight tracking-tight">
          Typographie
        </h2>
        <div className="mt-8">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold">
            Display / H1 — Lora Bold
          </h1>
          <h2 className="font-serif text-[28px] sm:text-4xl font-bold leading-tight tracking-tight mt-6">
            Section Heading / H2 — Lora Bold
          </h2>
          <p className="font-sans text-base font-normal leading-relaxed mt-6">
            Corps de texte — Instrument Sans Regular. La methode d&apos;un expert, la proximite
            d&apos;un artisan. Chaque element est place avec l&apos;attention meticuleuse d&apos;un
            ebeniste ajustant un assemblage.
          </p>
          <p className="font-sans text-sm font-normal leading-normal mt-6">
            Texte secondaire — Instrument Sans 14px. Information pratique et complementaire.
          </p>
          <p className="font-sans text-base font-bold leading-tight tracking-wide mt-6">
            Label / Bouton — Instrument Sans Bold
          </p>
        </div>
      </Section>

      {/* 3. Buttons */}
      <Section id="boutons">
        <h2 className="font-serif text-[28px] sm:text-4xl font-bold leading-tight tracking-tight">
          Boutons
        </h2>
        <div className="flex flex-wrap gap-4 items-center mt-8">
          <Button variant="primary">Prendre contact</Button>
          <Button variant="secondary">Decouvrir mes services</Button>
          <Button as="a" href="#couleurs" variant="primary">Lien primaire</Button>
          <Button as="a" href="#couleurs" variant="secondary">Lien secondaire</Button>
        </div>
      </Section>

      {/* 4. Cards on ecru */}
      <Section id="cartes" alternate={true}>
        <h2 className="font-serif text-[28px] sm:text-4xl font-bold leading-tight tracking-tight">
          Cartes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <Card variant="on-ecru">
            <h3 className="font-serif text-xl font-bold">Titre de carte</h3>
            <p className="mt-2 text-base leading-relaxed">
              Description courte du contenu de cette carte pour valider la typographie et les
              espacements.
            </p>
          </Card>
          <Card variant="on-ecru">
            <h3 className="font-serif text-xl font-bold">Titre de carte</h3>
            <p className="mt-2 text-base leading-relaxed">
              Description courte du contenu de cette carte pour valider la typographie et les
              espacements.
            </p>
          </Card>
        </div>
      </Section>

      {/* 5. Cards on white */}
      <Section id="cartes-blanches">
        <h2 className="font-serif text-[28px] sm:text-4xl font-bold leading-tight tracking-tight">
          Cartes sur fond blanc
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <Card variant="on-white">
            <h3 className="font-serif text-xl font-bold">Titre de carte</h3>
            <p className="mt-2 text-base leading-relaxed">
              Description courte du contenu de cette carte pour valider la typographie et les
              espacements.
            </p>
          </Card>
          <Card variant="on-white">
            <h3 className="font-serif text-xl font-bold">Titre de carte</h3>
            <p className="mt-2 text-base leading-relaxed">
              Description courte du contenu de cette carte pour valider la typographie et les
              espacements.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  );
}
