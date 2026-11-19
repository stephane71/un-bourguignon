import { Container } from "@/components/ui/Container";
import { LinkedIn } from "@/components/icons/LinkedIn";
import { Mail } from "@/components/icons/Mail";
import { Phone } from "@/components/icons/Phone";

const focusClassName =
  "hover:text-sable transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brun rounded-sm";

const coordonnees = [
  {
    href: "tel:+33662461643",
    label: "06 62 46 16 43",
    Icone: Phone,
    externe: false,
  },
  {
    href: "mailto:stephane@un-bourguignon.com",
    label: "stephane@un-bourguignon.com",
    Icone: Mail,
    externe: false,
  },
  {
    href: "https://www.linkedin.com/in/stephanemaire71",
    label: "LinkedIn",
    Icone: LinkedIn,
    externe: true,
  },
];

export function Footer() {
  return (
    <footer className="bg-brun text-white py-8">
      <Container className="flex flex-col items-start gap-3 text-sm leading-relaxed">
        <p className="font-serif text-base font-bold">
          Stéphane Maire, ingénieur logiciel
        </p>
        <ul className="flex flex-col gap-1">
          {coordonnees.map(({ href, label, Icone, externe }) => (
            <li key={href}>
              <a
                href={href}
                {...(externe
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`${focusClassName} inline-flex items-center gap-2.5 py-1 break-all`}
              >
                <Icone size={16} className="flex-shrink-0 text-or-light" />
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-x-4 pt-2 border-t border-white/20 w-full">
          <a href="/gestion-sur-mesure" className={`${focusClassName} text-white/80 text-xs py-1`}>
            Gestion sur mesure
          </a>
          <a href="/mentions-legales" className={`${focusClassName} text-white/80 text-xs py-1`}>
            Mentions légales
          </a>
        </div>
      </Container>
    </footer>
  );
}
