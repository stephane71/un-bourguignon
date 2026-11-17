import { LabeledSection } from "@/components/ui/LabeledSection";

export function ContactSection() {
  return (
    <LabeledSection
      id="contact"
      label="Prochaine étape"
      title="Un premier échange gratuit, par téléphone ou en visioconférence."
      intro="Vous décrivez ce qui prend du temps dans votre gestion. À l'issue de cet échange, vous savez si un cadrage est utile à votre entreprise."
    >
      <dl className="mt-8 max-w-[640px] border-t border-brun">
        <div className="grid grid-cols-1 sm:grid-cols-[7rem_minmax(0,1fr)] items-baseline gap-1 sm:gap-4 py-4 border-b border-sable">
          <dt className="text-xs font-bold uppercase tracking-[0.1em]">
            Téléphone
          </dt>
          <dd>
            <a
              href="tel:+33662461643"
              className="font-serif text-2xl font-bold underline-offset-4 hover:underline inline-flex min-h-12 items-center"
            >
              06 62 46 16 43
            </a>
          </dd>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[7rem_minmax(0,1fr)] items-baseline gap-1 sm:gap-4 py-4 border-b border-sable">
          <dt className="text-xs font-bold uppercase tracking-[0.1em]">
            Courriel
          </dt>
          <dd className="min-w-0">
            <a
              href="mailto:stephane@un-bourguignon.com"
              className="font-serif text-xl sm:text-2xl font-bold underline-offset-4 hover:underline inline-flex min-h-12 items-center break-all"
            >
              stephane@un-bourguignon.com
            </a>
          </dd>
        </div>
      </dl>
    </LabeledSection>
  );
}
