import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function ServicesSection() {
  return (
    <Section id="services" alternate>
      <h2 className="font-serif text-xl lg:text-4xl font-bold">Ce que je propose</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card variant="on-ecru" className="border-t-3 border-or">
          <h3 className="font-serif text-xl font-bold">Facturation électronique</h3>
          <p className="mt-2 text-base leading-relaxed">
            Mise en conformité et prise en main des outils de facturation adaptés à votre activité.
          </p>
          <ul className="mt-3 space-y-1 text-base leading-relaxed">
            <li>— Accompagnement à la mise en conformité</li>
            <li>— Sélection et prise en main d'un logiciel adapté</li>
            <li>— Formation à l'émission et à la réception des factures électroniques</li>
          </ul>
        </Card>
        <Card variant="on-ecru" className="border-t-3 border-or">
          <h3 className="font-serif text-xl font-bold">Outils numériques de gestion</h3>
          <p className="mt-2 text-base leading-relaxed">
            Des outils simples et efficaces pour organiser votre gestion au quotidien.
          </p>
          <ul className="mt-3 space-y-1 text-base leading-relaxed">
            <li>— Diagnostic des besoins et recommandation d'outils simples</li>
            <li>— Mise en place d'un système de suivi clients et devis</li>
            <li>— Formation sur mesure aux outils sélectionnés</li>
          </ul>
        </Card>
        <Card variant="on-ecru" className="border-t-3 border-or">
          <h3 className="font-serif text-xl font-bold">Présence en ligne locale</h3>
          <p className="mt-2 text-base leading-relaxed">
            Gagnez en visibilité auprès de vos clients locaux grâce aux bons outils.
          </p>
          <ul className="mt-3 space-y-1 text-base leading-relaxed">
            <li>— Création et optimisation du profil Google Business</li>
            <li>— Accompagnement sur les réseaux sociaux professionnels (Facebook, LinkedIn)</li>
            <li>— Stratégie de visibilité locale adaptée aux petites structures</li>
          </ul>
        </Card>
        <Card variant="on-ecru" className="border-t-3 border-or">
          <h3 className="font-serif text-xl font-bold">Formation aux outils d'intelligence artificielle</h3>
          <p className="mt-2 text-base leading-relaxed">
            Découvrez comment l'IA peut simplifier vos tâches administratives courantes.
          </p>
          <ul className="mt-3 space-y-1 text-base leading-relaxed">
            <li>— Initiation aux outils IA accessibles (rédaction, traduction, images)</li>
            <li>— Applications concrètes pour les tâches administratives courantes</li>
            <li>— Ateliers en petit groupe ou accompagnement individuel</li>
          </ul>
        </Card>
        <Card variant="on-ecru" className="border-t-3 border-or">
          <h3 className="font-serif text-xl font-bold">Création d'outils personnalisés</h3>
          <p className="mt-2 text-base leading-relaxed">
            Des outils sur mesure pour automatiser et simplifier votre quotidien professionnel.
          </p>
          <ul className="mt-3 space-y-1 text-base leading-relaxed">
            <li>— Tableaux de bord simples adaptés à l'activité</li>
            <li>— Bases de données prospects et clients</li>
            <li>— Automatisation pour réduire les tâches répétitives</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
