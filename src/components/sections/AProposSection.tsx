import { Section } from "@/components/ui/Section";

export function AProposSection() {
  return (
    <Section id="a-propos" alternate>
      <h2 className="font-serif text-xl lg:text-4xl font-bold">
        Qui suis-je ?
      </h2>
      <div className="mt-8 max-w-3xl space-y-6">
        <p className="text-base leading-relaxed">
          Je suis Stéphane Maire, consultant numérique indépendant. Mon activité
          est née d&apos;un constat simple : les petits entrepreneurs locaux
          &mdash; artisans, maraîchers, fleuristes, commerçants des marchés
          &mdash; sont souvent seuls face aux obligations numériques croissantes
          et aux outils qui évoluent sans cesse.
        </p>
        <p className="text-base leading-relaxed">
          J&apos;ai choisi d&apos;exercer en indépendant pour garder la liberté
          d&apos;une relation directe, sans intermédiaire, avec chacun de mes
          clients. Pas de grand cabinet, pas de prestataire lointain : je me
          déplace, j&apos;écoute, je m&apos;adapte à la réalité concrète de
          chaque activité.
        </p>
        <p className="text-base leading-relaxed font-serif italic">
          La méthode d&apos;un expert, la proximité d&apos;un artisan.
        </p>
        <p className="text-base leading-relaxed">
          Je travaille avec la rigueur et les outils d&apos;un consultant
          expérimenté, mais je reste accessible, disponible, et profondément
          ancré dans le tissu économique local.
        </p>
        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <dt className="font-serif font-bold text-xl">Expertise</dt>
            <dd className="mt-1 text-base leading-relaxed">
              Conseil numérique, facturation électronique, outils de gestion
            </dd>
          </div>
          <div>
            <dt className="font-serif font-bold text-xl">Proximité</dt>
            <dd className="mt-1 text-base leading-relaxed">
              Déplacement chez le client, accompagnement personnalisé
            </dd>
          </div>
          <div>
            <dt className="font-serif font-bold text-xl">À distance</dt>
            <dd className="mt-1 text-base leading-relaxed">
              Formation, conseil et création d&apos;outils sur mesure
            </dd>
          </div>
          <div>
            <dt className="font-serif font-bold text-xl">Forme juridique</dt>
            <dd className="mt-1 text-base leading-relaxed">
              Entreprise individuelle &mdash; relation directe, sans
              sous-traitance
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
