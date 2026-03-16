import { Section } from "@/components/ui/Section";
import { Clock } from "@/components/icons/Clock";
import { Key } from "@/components/icons/Key";
import { UserCheck } from "@/components/icons/UserCheck";
import { CoinStack } from "@/components/icons/CoinStack";

export function BeneficesSection() {
  return (
    <Section id="benefices" alternate>
      <h2 className="font-serif text-xl lg:text-4xl font-bold">
        Ce que vous gagnez
      </h2>
      <p className="mt-4 text-base leading-relaxed max-w-3xl">
        Travailler avec moi, c&apos;est choisir un accompagnement qui produit
        des r&eacute;sultats mesurables dans votre quotidien professionnel
        &mdash; pas des promesses g&eacute;n&eacute;rales.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Clock size={32} className="text-brun" />
          <h3 className="font-serif text-xl font-bold mt-3">
            Du temps r&eacute;cup&eacute;r&eacute; sur
            l&apos;administratif
          </h3>
          <p className="text-base leading-relaxed mt-2">
            Chaque outil bien configur&eacute;, chaque processus
            simplifi&eacute;, c&apos;est du temps rendu au m&eacute;tier. Que
            ce soit la facturation automatis&eacute;e, un tableau de suivi
            efficace ou une pr&eacute;sence en ligne qui fonctionne sans
            intervention quotidienne &mdash; l&apos;objectif est toujours de
            r&eacute;duire la charge administrative invisible.
          </p>
        </div>
        <div>
          <Key size={32} className="text-brun" />
          <h3 className="font-serif text-xl font-bold mt-3">
            L&apos;autonomie, pas la d&eacute;pendance
          </h3>
          <p className="text-base leading-relaxed mt-2">
            Une mission r&eacute;ussie, c&apos;est un client qui n&apos;a plus
            besoin de moi pour les gestes du quotidien. Je forme,
            j&apos;explique, je fournis des supports clairs. Vous repartez avec
            les cl&eacute;s en main.
          </p>
        </div>
        <div>
          <UserCheck size={32} className="text-brun" />
          <h3 className="font-serif text-xl font-bold mt-3">
            Un interlocuteur unique qui comprend votre m&eacute;tier
          </h3>
          <p className="text-base leading-relaxed mt-2">
            Pas de hotline, pas de ticket de support. Un seul interlocuteur,
            disponible, qui conna&icirc;t votre activit&eacute; et votre
            contexte. Vous n&apos;avez pas &agrave; r&eacute;expliquer
            &agrave; chaque fois &mdash; le suivi est personnalis&eacute; et
            continu.
          </p>
        </div>
        <div>
          <CoinStack size={32} className="text-brun" />
          <h3 className="font-serif text-xl font-bold mt-3">
            La certitude de payer juste
          </h3>
          <p className="text-base leading-relaxed mt-2">
            Devis clair avant toute intervention, tarif adapt&eacute; &agrave;
            la taille et aux besoins r&eacute;els de votre structure. Pas de
            forfait surdimensionn&eacute;, pas de surprise en fin de mission.
            Vous savez ce que vous achetez.
          </p>
        </div>
      </div>
    </Section>
  );
}
