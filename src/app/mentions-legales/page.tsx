import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Mentions légales — Stéphane Maire",
  description: "Mentions légales du site un-bourguignon.com",
};

export default function MentionsLegales() {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <h1 className="font-serif text-3xl font-bold text-brun mb-8">
          Mentions légales
        </h1>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-bold text-brun mt-8 mb-3">
            Éditeur du site
          </h2>
          <dl className="text-base leading-relaxed">
            <div className="mb-2">
              <dt className="font-semibold inline">Nom : </dt>
              <dd className="inline">Stéphane Maire</dd>
            </div>
            <div className="mb-2">
              <dt className="font-semibold inline">Statut : </dt>
              <dd className="inline">Entrepreneur individuel (EI)</dd>
            </div>
            <div className="mb-2">
              <dt className="font-semibold inline">Adresse : </dt>
              <dd className="inline">2 rue des Lavoirs, 71390 Moroges, France</dd>
            </div>
            <div className="mb-2">
              <dt className="font-semibold inline">SIRET : </dt>
              <dd className="inline">940 152 887 00011</dd>
            </div>
            <div className="mb-2">
              <dt className="font-semibold inline">Email : </dt>
              <dd className="inline">
                <a
                  href="mailto:stephane-ei@un-bourguignon.com"
                  className="text-brun underline"
                >
                  stephane-ei@un-bourguignon.com
                </a>
              </dd>
            </div>
            <div className="mb-2">
              <dt className="font-semibold inline">Téléphone : </dt>
              <dd className="inline">
                <a href="tel:+33662461643" className="text-brun underline">
                  06 62 46 16 43
                </a>
              </dd>
            </div>
            <div className="mb-2">
              <dt className="font-semibold inline">
                Directeur de la publication :{" "}
              </dt>
              <dd className="inline">Stéphane Maire</dd>
            </div>
          </dl>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-bold text-brun mt-8 mb-3">
            Hébergement
          </h2>
          <dl className="text-base leading-relaxed">
            <div className="mb-2">
              <dt className="font-semibold inline">Hébergeur : </dt>
              <dd className="inline">Vercel Inc.</dd>
            </div>
            <div className="mb-2">
              <dt className="font-semibold inline">Adresse : </dt>
              <dd className="inline">
                340 S Lemon Ave #4133, Walnut, CA 91789, USA
              </dd>
            </div>
            <div className="mb-2">
              <dt className="font-semibold inline">Site web : </dt>
              <dd className="inline">
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brun underline"
                >
                  https://vercel.com
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-bold text-brun mt-8 mb-3">
            Propriété intellectuelle
          </h2>
          <p className="text-base leading-relaxed mb-2">
            L&apos;ensemble du contenu de ce site (textes, images, graphismes,
            logo, structure) est la propriété exclusive de Stéphane Maire, sauf
            mention contraire. Toute reproduction, représentation, modification,
            publication ou adaptation de tout ou partie des éléments du site,
            quel que soit le moyen ou le procédé utilisé, est interdite sans
            autorisation écrite préalable de Stéphane Maire.
          </p>
          <p className="text-base leading-relaxed mb-2">
            Toute exploitation non autorisée du site ou de son contenu sera
            considérée comme constitutive d&apos;une contrefaçon et poursuivie
            conformément aux dispositions du Code de la propriété
            intellectuelle.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-bold text-brun mt-8 mb-3">
            Données personnelles
          </h2>
          <p className="text-base leading-relaxed mb-2">
            Ce site ne collecte aucune donnée personnelle.
          </p>
          <p className="text-base leading-relaxed mb-2">
            Aucun cookie n&apos;est utilisé.
          </p>
          <p className="text-base leading-relaxed mb-2">
            Aucun outil d&apos;analyse ou de suivi n&apos;est intégré.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl font-bold text-brun mt-8 mb-3">
            Liens hypertextes
          </h2>
          <p className="text-base leading-relaxed mb-2">
            Ce site peut contenir des liens vers d&apos;autres sites internet.
            Stéphane Maire ne dispose d&apos;aucun moyen de contrôle sur le
            contenu de ces sites tiers et décline toute responsabilité quant à
            leur contenu, leurs pratiques en matière de protection des données ou
            tout dommage pouvant résulter de leur consultation.
          </p>
        </section>
      </Container>
    </div>
  );
}
