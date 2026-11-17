import { Container } from "./Container";

interface LabeledSectionProps {
  id: string;
  /** Repère court affiché dans la colonne de gauche */
  label: string;
  /** Titre de la section, formulé comme une phrase */
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Bande sombre, réservée au cas réel */
  dark?: boolean;
  children?: React.ReactNode;
}

export function LabeledSection({
  id,
  label,
  title,
  intro,
  dark = false,
  children,
}: LabeledSectionProps) {
  return (
    <section
      id={id}
      className={`${
        dark ? "bg-brun text-white" : "bg-ecru border-t border-sable"
      } py-16 sm:py-20 lg:py-24`}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] gap-4 lg:gap-10">
          <p
            className={`text-xs font-bold uppercase tracking-[0.12em] lg:pt-3 ${
              dark ? "text-white/80" : "text-terre"
            }`}
          >
            {label}
          </p>
          <div className="min-w-0">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold leading-tight max-w-[24ch]">
              {title}
            </h2>
            {intro && (
              <p
                className={`mt-4 max-w-[62ch] text-base leading-relaxed ${
                  dark ? "text-white/85" : ""
                }`}
              >
                {intro}
              </p>
            )}
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
