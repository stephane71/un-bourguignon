import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/MobileMenu";

const NAV_LINKS = [
  { label: "A propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Methode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <Container className="flex items-center justify-between h-16 lg:h-20">
        {/* Brand */}
        <a href="#" className="font-serif text-xl font-bold text-brun">
          Stephane Maire
        </a>

        {/* Desktop nav -- hidden on mobile */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-base text-brun min-h-12 inline-flex items-center hover:text-brun/70 focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
          <Button as="a" href="#contact">
            Me contacter
          </Button>
        </nav>

        {/* Mobile menu -- client component boundary */}
        <MobileMenu />
      </Container>
    </header>
  );
}
