import { Container } from "@/components/ui/Container";
import { LinkedIn } from "@/components/icons/LinkedIn";
import { Facebook } from "@/components/icons/Facebook";

const focusClassName =
  "hover:text-sable transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brun rounded-sm";

export function Footer() {
  return (
    <footer className="bg-brun text-white py-6">
      <Container className="flex flex-col items-start gap-1.5 text-sm leading-relaxed">
        <p className="font-serif text-base font-bold">
          Stéphane Maire, ingénieur logiciel
        </p>
        <div className="flex items-center gap-3 mb-1">
          <a
            href="https://www.linkedin.com/in/stephanemaire71"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={focusClassName}
          >
            <LinkedIn size={20} />
          </a>
          <a
            href="https://www.facebook.com/stephane.maire1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={focusClassName}
          >
            <Facebook size={20} />
          </a>
        </div>
        <a href="tel:+33662461643" className={`${focusClassName} py-1`}>
          06 62 46 16 43
        </a>
        <a href="mailto:stephane@un-bourguignon.com" className={`${focusClassName} py-1`}>
          stephane@un-bourguignon.com
        </a>
        <div className="flex flex-wrap items-center gap-x-4 mt-2">
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
