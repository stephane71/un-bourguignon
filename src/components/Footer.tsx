import { Container } from "@/components/ui/Container";
import { LinkedIn } from "@/components/icons/LinkedIn";
import { Facebook } from "@/components/icons/Facebook";

const focusClassName =
  "hover:text-sable transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brun rounded-sm";

export function Footer() {
  return (
    <footer className="bg-brun text-white py-6">
      <Container className="flex flex-col items-start gap-1.5 text-sm leading-relaxed">
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
        <a href="tel:+33662461643" className={focusClassName}>
          06 62 46 16 43
        </a>
        <a href="mailto:stephane-ei@un-bourguignon.com" className={focusClassName}>
          stephane-ei@un-bourguignon.com
        </a>
        <a href="/mentions-legales" className={`${focusClassName} text-white/60 text-xs mt-2`}>
          Mentions légales
        </a>
      </Container>
    </footer>
  );
}
