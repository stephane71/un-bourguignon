import { Section } from "@/components/ui/Section";
import { Clock } from "@/components/icons/Clock";
import { Key } from "@/components/icons/Key";
import { UserCheck } from "@/components/icons/UserCheck";
import { CoinStack } from "@/components/icons/CoinStack";

export function BeneficesSection() {
  return (
    <Section id="benefices">
      <h2 className="font-serif text-xl lg:text-4xl font-bold">
        Ce que vous gagnez
      </h2>
      <p className="mt-4 text-base leading-relaxed max-w-3xl">
        Une solution de gestion sur mesure, qui fait à votre place ce que vos
        équipes font à la main, construite autour de vos étapes, de vos règles, de vos exceptions et de
        votre vocabulaire.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <CoinStack size={32} className="text-argile" />
          <h3 className="font-serif text-xl font-bold mt-3">
            Des coûts de gestion réduits
          </h3>
          <p className="text-base leading-relaxed mt-2">
            Ressaisir, recopier, rapprocher, vérifier ce qui est juste : ces
            gestes répétés passent à la solution. Vos équipes ne traitent plus
            que les exceptions.
          </p>
        </div>
        <div>
          <Key size={32} className="text-argile" />
          <h3 className="font-serif text-xl font-bold mt-3">
            Une information saisie une seule fois
          </h3>
          <p className="text-base leading-relaxed mt-2">
            La solution suit votre façon de travailler. Une information saisie
            une fois est disponible partout, à jour. Vos logiciels en place
            restent en place.
          </p>
        </div>
        <div>
          <Clock size={32} className="text-argile" />
          <h3 className="font-serif text-xl font-bold mt-3">
            Du temps rendu au métier
          </h3>
          <p className="text-base leading-relaxed mt-2">
            Les heures gagnées sur la gestion retournent à la production, aux
            clients, à l&apos;équipe.
          </p>
        </div>
        <div>
          <UserCheck size={32} className="text-argile" />
          <h3 className="font-serif text-xl font-bold mt-3">
            Moins de dépendance à une mémoire
          </h3>
          <p className="text-base leading-relaxed mt-2">
            Les règles, les exceptions et l&apos;historique sont écrits dans la
            solution, disponibles même quand la personne qui les connaît est
            absente.
          </p>
        </div>
      </div>
    </Section>
  );
}
