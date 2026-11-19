import Image from "next/image";
import { LabeledSection } from "@/components/ui/LabeledSection";

const etapes = [
  "Premier échange",
  "Cadrage",
  "Briques",
  "Mise en service",
  "Maintenance et évolution",
];

const forces = [
  {
    titre: "Vous expliquez votre métier une fois",
    texte:
      "Ce que vos équipes racontent au cadrage n'est pas résumé pour quelqu'un d'autre : je les écoute, puis je construis la solution. Rien ne se perd entre l'entretien et la construction.",
  },
  {
    titre: "Celui qui chiffre est celui qui réalise",
    texte:
      "Le prix ferme, le calendrier et les critères de validation écrits au devis engagent celui qui fait le travail.",
  },
  {
    titre: "Des réponses de celui qui connaît la solution",
    texte:
      "Une question, un ajustement, une évolution : vous parlez à celui qui l'a construite et qui connaît vos règles de métier.",
  },
  {
    titre: "Une relation à la taille de votre entreprise",
    texte:
      "Vous n'avez pas à coordonner plusieurs intervenants. Vos équipes ont un seul interlocuteur, qui parle de votre métier plutôt que de technique.",
  },
];

export function InterlocuteurSection() {
  return (
    <LabeledSection
      id="interlocuteur"
      label="Un seul interlocuteur"
      title="Une seule personne, du premier échange à la maintenance."
      intro="Je mène moi-même chaque étape : j'écoute vos équipes pendant le cadrage, je construis les briques, je les mets en service, puis je maintiens et fais évoluer la solution. Personne ne s'intercale entre vous et celui qui fait le travail."
    >
      <div className="mt-8 flex items-center gap-4">
        <Image
          src="/images/photo-portrait.webp"
          alt="Stéphane Maire"
          width={255}
          height={255}
          className="rounded-full flex-shrink-0 w-16 h-16"
        />
        <p className="text-base leading-snug">
          <span className="font-serif text-lg font-bold">
            Stéphane Maire, ingénieur logiciel
          </span>
          <br />
          Plus de 15 ans de conception de logiciels.{" "}
          <a href="/" className="text-terre underline-offset-4 hover:underline">
            Mon parcours
          </a>
        </p>
      </div>

      <figure
        className="relay mt-8"
        aria-label="Premier échange, cadrage, briques, mise en service, maintenance et évolution : la même personne à chaque étape"
      >
        <ol className="relay-steps">
          {etapes.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ol>
        <div className="relay-cote" aria-hidden="true">
          <span>Stéphane Maire, à chaque étape</span>
        </div>
      </figure>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 border-t border-brun">
        {forces.map((f) => (
          <div key={f.titre} className="py-5 border-b border-sable min-w-0">
            <h3 className="font-serif text-xl font-bold">{f.titre}</h3>
            <p className="mt-2 text-base leading-relaxed max-w-[52ch]">
              {f.texte}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-[64ch] bg-white border-l-2 border-argile px-5 py-4 text-base leading-relaxed">
        <strong>Et si je ne suis plus disponible ?</strong> La solution ne
        dépend pas de moi : le code, les comptes et la documentation sont à
        votre nom dès la première brique.{" "}
        <a
          href="#garanties"
          className="text-terre underline-offset-4 hover:underline whitespace-nowrap"
        >
          Voir vos garanties
        </a>
      </p>
    </LabeledSection>
  );
}
