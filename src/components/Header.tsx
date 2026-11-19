"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/MobileMenu";
import { navigationFor } from "@/components/navigation";

export function Header() {
  const { links, cta } = navigationFor(usePathname());

  return (
    <header className="sticky top-0 z-50 bg-ecru border-b border-sable">
      <Container className="flex items-center justify-between h-16 lg:h-20">
        {/* Brand */}
        <a href="/" className="font-serif text-xl font-bold text-brun">
          Stéphane Maire
        </a>

        {/* Desktop nav -- hidden on mobile */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Navigation principale"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-base text-brun min-h-12 inline-flex items-center hover:text-brun/70 focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
          <Button as="a" href={cta.href}>
            {cta.label}
          </Button>
        </nav>

        {/* Mobile menu */}
        <MobileMenu links={links} cta={cta} />
      </Container>
    </header>
  );
}
