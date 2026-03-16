import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function PourQuiSection() {
  return (
    <Section id="pour-qui">
      <h2 className="font-serif text-xl lg:text-4xl font-bold">Pour qui ?</h2>
      <p className="mt-4 text-base leading-relaxed max-w-3xl">
        J'accompagne les micro-entrepreneurs et les entreprises individuelles qui gèrent seuls
        leur activité : le métier, les clients, et tout l'administratif. Qu'ils soient artisans,
        commerçants de marché, prestataires de services ou en cours de reconversion, ils partagent
        les mêmes défis face au numérique.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="on-white">
          <h3 className="font-serif text-xl font-bold">Des outils qui s'imposent sans explication</h3>
          <p className="mt-2 text-base leading-relaxed">
            Logiciels de caisse, plateformes de déclaration, messageries professionnelles…
            Les outils numériques se multiplient sans que personne n'explique comment les
            choisir ni comment les utiliser efficacement.
          </p>
        </Card>
        <Card variant="on-white">
          <h3 className="font-serif text-xl font-bold">Des obligations administratives qui alourdissent le quotidien</h3>
          <p className="mt-2 text-base leading-relaxed">
            Facturation, suivi des devis, déclarations — autant de tâches chronophages qui
            empiètent sur le temps du métier et créent un stress permanent.
          </p>
        </Card>
        <Card variant="on-white">
          <h3 className="font-serif text-xl font-bold">Une présence en ligne difficile à construire seul</h3>
          <p className="mt-2 text-base leading-relaxed">
            Savoir qu'il faut être visible sur Google ou les réseaux sociaux, c'est une chose.
            Savoir comment faire, avec quel outil, et en combien de temps — c'en est une autre.
          </p>
        </Card>
        <Card variant="on-white">
          <h3 className="font-serif text-xl font-bold">Pas d'interlocuteur de confiance</h3>
          <p className="mt-2 text-base leading-relaxed">
            Les grandes agences sont trop chères, les amis qui s'y connaissent pas toujours
            disponibles, et les tutoriels en ligne rarement adaptés à une activité de terrain.
          </p>
        </Card>
      </div>
    </Section>
  );
}
