"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Burger } from "@/components/icons/Burger";
import { Close } from "@/components/icons/Close";

const NAV_LINKS = [
  { label: "A propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Methode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.querySelector("main")?.setAttribute("inert", "");
      menuRef.current?.querySelector("a")?.focus();

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") close();
      };
      document.addEventListener("keydown", onKeyDown);

      return () => {
        document.querySelector("main")?.removeAttribute("inert");
        document.removeEventListener("keydown", onKeyDown);
      };
    } else {
      document.querySelector("main")?.removeAttribute("inert");
    }
  }, [isOpen, close]);

  useEffect(() => {
    const header = document.querySelector("header");
    const onScroll = () => {
      header?.classList.toggle("shadow-sm", window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        className="min-h-12 min-w-12 inline-flex items-center justify-center text-brun hover:text-brun/70 focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2"
      >
        {isOpen ? <Close /> : <Burger />}
      </button>

      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed inset-0 top-16 z-40 bg-white ${isOpen ? "motion-safe:transition-opacity duration-200 opacity-100" : "hidden"}`}
      >
        <nav
          className="flex flex-col items-center justify-center h-full gap-8"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="font-serif text-xl text-brun min-h-12 inline-flex items-center hover:text-brun/70 focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
          <Button as="a" href="#contact" onClick={close}>
            Me contacter
          </Button>
        </nav>
      </div>
    </div>
  );
}
