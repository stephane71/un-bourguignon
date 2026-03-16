import { Container } from "@/components/ui/Container";
import { LinkedIn } from "@/components/icons/LinkedIn";
import { Facebook } from "@/components/icons/Facebook";

const linkClassName =
  "min-h-12 inline-flex items-center px-2 hover:text-sable transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brun";

const iconLinkClassName =
  "min-h-12 min-w-12 inline-flex items-center justify-center hover:text-sable transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brun";

export function Footer() {
  return (
    <footer className="bg-brun text-white py-6">
      <Container className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/stephane-maire"
            aria-label="LinkedIn"
            className={iconLinkClassName}
          >
            <LinkedIn />
          </a>
          <a
            href="https://facebook.com/stephane.maire"
            aria-label="Facebook"
            className={iconLinkClassName}
          >
            <Facebook />
          </a>
        </div>
        <a href="tel:+33662461643" className={linkClassName}>
          06 62 46 16 43
        </a>
        <a href="mailto:stephane-ei@un-bourguignon.com" className={linkClassName}>
          stephane-ei@un-bourguignon.com
        </a>
        <a href="/mentions-legales" className={linkClassName}>
          Mentions legales
        </a>
      </Container>
    </footer>
  );
}
