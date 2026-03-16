# Phase 2: Layout Shell - Research

**Researched:** 2026-03-16
**Domain:** Sticky header, mobile navigation menu, footer, smooth anchor scrolling (Next.js 16 + Tailwind CSS 4 + React 19)
**Confidence:** HIGH

## Summary

Phase 2 implements three structural components -- a sticky Header with desktop nav links and mobile burger menu, a Footer with social/contact links, and the CSS infrastructure for smooth anchor scrolling with header offset. The technical challenge centers on the mobile menu: it requires a `"use client"` component boundary with ARIA disclosure pattern, focus management (trap + Escape to close), and CSS transitions -- the only interactive JavaScript in the layout shell.

The existing codebase (Next.js 16.1.6, React 19.2.4, Tailwind CSS 4.2.1) provides all needed primitives: `Button` (polymorphic, renders as `<a>`), `Container` (max-width wrapper), and design tokens in `globals.css`. No additional npm dependencies are needed. Social icons (LinkedIn, Facebook) and the burger icon should be inline SVG components to avoid library overhead.

**Primary recommendation:** Use the WAI-ARIA Disclosure pattern (not the Menu/Menubar role pattern) for the mobile navigation. Keep the Header component as a Server Component wrapper that renders a `MobileMenu` client component for interactivity. Use `inert` on `<main>` when the mobile menu is open for focus trapping (universal browser support as of 2024). No focus-trap library needed.

<user_constraints>

## User Constraints (from CONTEXT.md)

### Locked Decisions
- Header: White (#FFFFFF) background, always opaque, subtle bottom shadow appearing on scroll
- Brand: "Stephane Maire" text on left in Lora serif, brun color. No subtitle, no logo.
- Header CTA: "Me contacter" uses existing `Button` component with `as="a" href="#contact"`
- Desktop nav: Curated 4 links only -- A propos, Services, Methode, Contact (not all 7 sections)
- Mobile menu: Full-screen overlay, header stays visible with close button replacing burger
- Mobile menu: Navigation links centered vertically, large tap targets (48px+), same 4 links + CTA
- Mobile menu: Closes on link tap, ARIA attributes (aria-expanded, aria-controls, role="dialog"), Escape to close, focus trap
- Footer: Minimal single band -- social icons (LinkedIn, Facebook), phone, email, "Mentions legales" link
- Footer: Phone and email are clickable (`tel:` and `mailto:` links)

### Claude's Discretion
- Mobile menu overlay background color (white or ecru)
- Footer background color (brun dark, ecru warm, or white with border)
- Social icon color treatment (monochrome on-palette or brand colors)
- Scroll shadow implementation (CSS-only or minimal JS scroll listener)
- Active nav link indicator style (subtle underline, bold, or color change)
- Header height and vertical padding
- Mobile burger icon style (three lines, dots, etc.)
- Transition/animation for mobile menu open/close (CSS transition)

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope

</user_constraints>

<phase_requirements>

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| NAV-01 | Sticky header with anchor navigation links to all sections | Sticky positioning via `sticky top-0 z-50`, Container for alignment, 4 curated nav links |
| NAV-02 | Burger menu on mobile with accessible ARIA attributes and keyboard handling | WAI-ARIA Disclosure pattern, `aria-expanded`, `aria-controls`, `role="dialog"`, Escape handler, `inert` for focus trap |
| NAV-03 | CTA "Me contacter" in header linking to `#contact` | Reuse existing `Button` component with `as="a" href="#contact"` |
| NAV-04 | Smooth scroll to anchors via CSS `scroll-behavior: smooth` + `scroll-margin-top` | CSS-only in `globals.css`, `prefers-reduced-motion` media query to disable |
| FOOT-01 | Footer with social links, email, phone | Inline SVG icons for LinkedIn/Facebook, `tel:` and `mailto:` links with E.164 format |
| FOOT-02 | Link to mentions legales | Standard `<a href="/mentions-legales">` -- page created in Phase 4 |
| A11Y-02 | All interactive elements min 48px height | `min-h-12` on nav links, burger button, footer links, CTA button (already on Button) |
| A11Y-03 | Keyboard navigation with visible focus | `focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2` pattern (matches Button), tabindex management in mobile menu |

</phase_requirements>

## Standard Stack

### Core (already installed)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.6 | App Router, static export | Already configured with `output: 'export'` |
| React | 19.2.4 | Component rendering | Already installed |
| Tailwind CSS | 4.2.1 | Utility-first styling | Design tokens already in `@theme` |

### Supporting (no new installs)
| Asset | Purpose | Why No Library |
|-------|---------|----------------|
| Inline SVG | LinkedIn + Facebook icons, burger/close icons | 3 SVGs < 1KB total vs react-icons at ~20KB+ |
| HTML `inert` attribute | Focus trap for mobile menu | Native browser API, universal support since 2024 |
| CSS `scroll-behavior` | Smooth scrolling | Native CSS, zero JS |
| CSS `scroll-margin-top` | Header offset for anchor targets | Native CSS, zero JS |

### Alternatives Considered
| Instead of | Could Use | Why Not |
|------------|-----------|---------|
| `inert` attribute | focus-trap-react | Extra dependency for 1 use case; `inert` is native and simpler |
| Inline SVG icons | react-icons, lucide-react | Bundle overhead for 4 icons; inline SVG is zero-cost |
| CSS transitions | Framer Motion | Explicitly out of scope per REQUIREMENTS.md |
| JS scroll listener | IntersectionObserver for shadow | Either works; JS listener is simpler for a single boolean state |

**Installation:**
```bash
# No new packages needed
```

## Architecture Patterns

### Component Structure
```
src/
├── components/
│   ├── ui/               # Existing primitives (Button, Card, Container, Section)
│   ├── Header.tsx         # Server Component -- renders nav layout
│   ├── MobileMenu.tsx     # "use client" -- burger toggle, overlay, focus management
│   ├── Footer.tsx         # Server Component -- static footer content
│   └── icons/
│       ├── LinkedIn.tsx   # Inline SVG component
│       ├── Facebook.tsx   # Inline SVG component
│       ├── Burger.tsx     # Inline SVG component (3 lines)
│       └── Close.tsx      # Inline SVG component (X)
├── app/
│   ├── layout.tsx         # Add Header + Footer wrapping {children}
│   ├── globals.css        # Add scroll-behavior + scroll-margin-top
│   └── page.tsx           # Untouched (test page stays for now)
```

### Pattern 1: Server/Client Component Split
**What:** Header renders as a Server Component. Only `MobileMenu` (the interactive burger toggle + overlay) uses `"use client"`.
**When to use:** Always -- minimizes client-side JavaScript bundle.
**Example:**
```typescript
// src/components/Header.tsx (Server Component -- no "use client")
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
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="font-sans text-brun min-h-12 ...">
              {link.label}
            </a>
          ))}
          <Button as="a" href="#contact">Me contacter</Button>
        </nav>

        {/* Mobile menu -- client component */}
        <MobileMenu links={NAV_LINKS} />
      </Container>
    </header>
  );
}
```

### Pattern 2: WAI-ARIA Disclosure for Mobile Menu
**What:** The burger button uses `aria-expanded` and `aria-controls`. The overlay uses `role="dialog"` and `aria-modal="true"`. Background content gets `inert` attribute.
**When to use:** For the mobile navigation overlay.
**Why Disclosure, not Menu role:** The WAI-ARIA APG explicitly recommends Disclosure for website navigation -- the Menu/Menubar roles are for application-style menus with arrow-key navigation, which is unexpected for nav links.
**Example:**
```typescript
// src/components/MobileMenu.tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function MobileMenu({ links }: { links: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    buttonRef.current?.focus(); // Return focus to trigger
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    // Set inert on main content
    const main = document.querySelector("main");
    if (main) main.setAttribute("inert", "");
    // Focus first link
    const firstLink = menuRef.current?.querySelector("a");
    firstLink?.focus();
    // Escape handler
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      if (main) main.removeAttribute("inert");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        className="min-h-12 min-w-12 ..."
      >
        {isOpen ? <CloseIcon /> : <BurgerIcon />}
      </button>

      {/* Overlay */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed inset-0 top-16 z-40 ... ${isOpen ? "..." : "hidden"}`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={close} className="min-h-12 ...">
              {link.label}
            </a>
          ))}
          <Button as="a" href="#contact" onClick={close}>Me contacter</Button>
        </nav>
      </div>
    </div>
  );
}
```

### Pattern 3: Scroll Shadow via JS State (minimal)
**What:** A small `useEffect` adds/removes a shadow class on the header based on `window.scrollY > 0`.
**Why not CSS-only:** There is no pure CSS way to detect scroll position and conditionally apply shadow. The `IntersectionObserver` sentinel technique works but is more complex for the same result.
**Example:**
```typescript
// Inside MobileMenu or a small HeaderShell client component
useEffect(() => {
  const header = document.querySelector("header");
  const onScroll = () => {
    header?.classList.toggle("shadow-sm", window.scrollY > 0);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

**Alternative:** Create a thin `HeaderShell` client component that wraps the header and manages both the scroll shadow state and renders MobileMenu. This keeps a single `"use client"` boundary for the header's interactive concerns.

### Pattern 4: CSS Smooth Scroll with Header Offset
**What:** Add `scroll-behavior: smooth` to `html` and `scroll-margin-top` to sections in `globals.css`.
**Example:**
```css
/* globals.css additions */
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

section[id] {
  scroll-margin-top: 5rem; /* ~80px, match header height + breathing room */
}
```

### Anti-Patterns to Avoid
- **`"use client"` on Header.tsx itself:** Forces the entire header (brand, desktop nav, CTA) to ship as client JS. Only the interactive MobileMenu needs it.
- **`role="menu"` on the mobile nav:** WAI-ARIA APG says Menu role is for app-style menus with arrow-key nav. Website navigation should use Disclosure or plain `<nav>`.
- **JavaScript `scrollIntoView()` for anchor links:** `scroll-behavior: smooth` in CSS handles this natively. JS adds complexity and bundle size for no benefit.
- **`overflow: hidden` on body when menu opens:** Can cause layout shift from scrollbar disappearing. Use `inert` on `<main>` instead -- it disables interaction without affecting layout.
- **Installing react-icons or lucide-react for 4 icons:** Massive bundle overhead. Inline SVG is zero-cost.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Focus trapping | Custom tabindex cycling logic | `inert` attribute on `<main>` | Native, handles edge cases (nested focusables, screen readers), zero JS |
| Smooth scrolling | `window.scrollTo` with `requestAnimationFrame` | CSS `scroll-behavior: smooth` | Native, respects `prefers-reduced-motion`, no JS |
| Icon components | Custom SVG sprite system | Simple functional components returning `<svg>` | 4 icons don't justify a system |
| Scroll position detection | Complex IntersectionObserver setup | Simple `scroll` event listener (passive) | One boolean state, no performance concern |

**Key insight:** This phase has very little that justifies third-party libraries. The HTML platform (`inert`, `scroll-behavior`, `scroll-margin-top`, `aria-expanded`) handles the hard parts natively.

## Common Pitfalls

### Pitfall 1: Fixed Header Covers Anchor Scroll Targets
**What goes wrong:** Clicking `#services` scrolls the section heading behind the sticky header.
**Why it happens:** Browser scrolls anchor to viewport top, ignoring fixed-position elements.
**How to avoid:** `scroll-margin-top: 5rem` on `section[id]` in globals.css. Must match actual header height + some breathing room.
**Warning signs:** Click any nav link -- if the section title is partially hidden, the offset is wrong.

### Pitfall 2: Mobile Menu Traps Focus Incorrectly or Not At All
**What goes wrong:** User can Tab out of the open menu into the page behind it, or focus is trapped but Escape doesn't work, or closing the menu doesn't return focus to the burger button.
**Why it happens:** Focus management requires three coordinated behaviors: trap focus in menu, handle Escape, restore focus on close.
**How to avoid:** Use `inert` on `<main>` (handles trap), add Escape keydown listener (handles dismiss), call `buttonRef.current.focus()` on close (handles restore).
**Warning signs:** Open mobile menu, press Tab repeatedly -- focus should cycle within menu items only.

### Pitfall 3: `"use client"` Boundary Too Wide
**What goes wrong:** Entire Header component becomes a client component, shipping all nav link markup as JavaScript.
**Why it happens:** Developer adds `useState` for menu toggle directly in Header.tsx.
**How to avoid:** Extract MobileMenu (and optionally scroll shadow logic) into a separate `"use client"` component. Keep Header.tsx as a Server Component.
**Warning signs:** Build output shows large JS chunk for header content that is purely static.

### Pitfall 4: Phone Link Format Fails on Mobile
**What goes wrong:** `href="tel:06 62 46 16 43"` does not trigger phone dialer on some mobile browsers.
**Why it happens:** Spaces and local format in the tel: URI. Some browsers fail to parse.
**How to avoid:** Use E.164 format: `href="tel:+33662461643"`. Display the human-readable format: "06 62 46 16 43".
**Warning signs:** Tap phone link on iOS Safari and Android Chrome -- dialer should open with correct number.

### Pitfall 5: Missing `prefers-reduced-motion` for Menu Transitions
**What goes wrong:** Users who have requested reduced motion still see slide/fade animations on the mobile menu.
**Why it happens:** CSS transitions applied without a motion preference check.
**How to avoid:** Wrap transitions in `@media (prefers-reduced-motion: no-preference)` or use Tailwind's `motion-safe:` prefix.
**Warning signs:** Enable "Reduce motion" in OS settings, open/close the menu -- it should appear/disappear instantly.

### Pitfall 6: Footer Links Too Small on Mobile
**What goes wrong:** Social icons and text links render at default size, failing the 48px tap target requirement.
**Why it happens:** Icons are typically 24x24px SVG with no surrounding padding.
**How to avoid:** Wrap icons in `<a>` elements with `min-h-12 min-w-12 inline-flex items-center justify-center` for adequate tap area.
**Warning signs:** Lighthouse "Tap targets" audit flags footer links.

## Code Examples

### Inline SVG Icon Component
```typescript
// src/components/icons/LinkedIn.tsx
interface IconProps {
  className?: string;
  size?: number;
}

export function LinkedIn({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
```

### Footer Component
```typescript
// src/components/Footer.tsx (Server Component)
import { Container } from "@/components/ui/Container";
import { LinkedIn } from "@/components/icons/LinkedIn";
import { Facebook } from "@/components/icons/Facebook";

export function Footer() {
  return (
    <footer className="bg-brun text-white py-6">
      <Container className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/..." aria-label="LinkedIn" className="min-h-12 min-w-12 inline-flex items-center justify-center hover:text-sable transition-colors">
            <LinkedIn />
          </a>
          <a href="https://facebook.com/..." aria-label="Facebook" className="min-h-12 min-w-12 inline-flex items-center justify-center hover:text-sable transition-colors">
            <Facebook />
          </a>
        </div>
        <a href="tel:+33662461643" className="min-h-12 inline-flex items-center px-2 hover:text-sable transition-colors">06 62 46 16 43</a>
        <a href="mailto:stephane-ei@un-bourguignon.com" className="min-h-12 inline-flex items-center px-2 hover:text-sable transition-colors">stephane-ei@un-bourguignon.com</a>
        <a href="/mentions-legales" className="min-h-12 inline-flex items-center px-2 hover:text-sable transition-colors">Mentions legales</a>
      </Container>
    </footer>
  );
}
```

### Layout Integration
```typescript
// src/app/layout.tsx -- additions
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${lora.variable} ${instrumentSans.variable}`}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

## Section IDs for Nav Links

The 4 curated nav links must point to section IDs that Phase 3 will create. Based on `content/presentation_activite.md` sections:

| Nav Label | Anchor href | Section ID | Content Source |
|-----------|-------------|------------|----------------|
| A propos | `#a-propos` | `a-propos` | Section 1: "Qui suis-je ?" |
| Services | `#services` | `services` | Section 3: "Ce que je propose" |
| Methode | `#methode` | `methode` | Section 4: "Ma methode de travail" |
| Contact | `#contact` | `contact` | Contact info at bottom |

Note: "Pour qui" and "Benefices" sections exist but are deliberately excluded from nav (user decision). They remain scrollable.

## Discretion Recommendations

Based on the design philosophy ("space breathes", artisan warmth, meticulous but not excessive):

| Decision | Recommendation | Rationale |
|----------|---------------|-----------|
| Menu overlay background | White (`#FFFFFF`) | Consistent with header staying visible at top; ecru would create a disconnect with the white header |
| Footer background | Brun dark (`#6B4C3B`) with white text | Anchors the page bottom with warmth; creates clear visual bookend. White text on brun passes WCAG AA (~6.8:1) |
| Social icon color | White (monochrome, `currentColor`) on brun footer | Clean, cohesive with footer bg; brand colors would clash with the earth-tone palette |
| Scroll shadow | Minimal JS scroll listener toggling `shadow-sm` | Simpler than IntersectionObserver sentinel; a few lines of code in the client component |
| Active nav indicator | None for now | No way to detect active section without IntersectionObserver (v2 feature INTE-01); simple link styling is cleaner |
| Header height | `h-16` mobile / `h-20` desktop (64px / 80px) | Standard sticky header height; enough room for brand + nav without overwhelming |
| Burger icon | Three horizontal lines (standard hamburger) | Most recognizable pattern; users expect it |
| Menu transition | Fade-in/opacity with `motion-safe:transition-opacity duration-200` | Subtle, fast, respects reduced motion; avoids heavy slide animation |

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `focus-trap-react` library | HTML `inert` attribute | 2023-2024 (universal browser support) | No dependency needed for focus management |
| JS `element.scrollIntoView({ behavior: 'smooth' })` | CSS `scroll-behavior: smooth` | Stable since 2020 | Zero JS for smooth anchor scrolling |
| `position: fixed` for header | `position: sticky` with `top: 0` | Stable for years | Simpler, no layout shift, works with natural document flow |
| Custom icon font (FontAwesome) | Inline SVG components | Industry standard | Better accessibility, tree-shakeable, no font load |
| `@media (prefers-reduced-motion)` manual | Tailwind `motion-safe:` / `motion-reduce:` prefixes | Tailwind CSS 3+ | Utility-first approach consistent with project |

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None installed -- build verification only |
| Config file | none -- see Wave 0 |
| Quick run command | `npm run build` |
| Full suite command | `npm run build && npm run lint` |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| NAV-01 | Sticky header with nav links | smoke (build) | `npm run build` | N/A -- build verifies rendering |
| NAV-02 | Burger menu ARIA + keyboard | manual | Manual keyboard test (Tab, Escape) + Lighthouse a11y | N/A |
| NAV-03 | CTA "Me contacter" links to #contact | smoke (build) | `npm run build` | N/A |
| NAV-04 | Smooth scroll + offset | manual | Manual click test in browser | N/A |
| FOOT-01 | Footer social/email/phone links | smoke (build) | `npm run build` | N/A |
| FOOT-02 | Mentions legales link | smoke (build) | `npm run build` | N/A |
| A11Y-02 | 48px tap targets | manual | Lighthouse accessibility audit | N/A |
| A11Y-03 | Keyboard nav + visible focus | manual | Manual keyboard test + Lighthouse | N/A |

### Sampling Rate
- **Per task commit:** `npm run build`
- **Per wave merge:** `npm run build && npm run lint`
- **Phase gate:** Build green + manual keyboard walkthrough + Lighthouse accessibility >= 90

### Wave 0 Gaps
None -- no test framework is needed for this phase. The primary validations are:
1. `npm run build` succeeds (static export generates HTML)
2. Manual keyboard testing (Tab through all interactive elements, Escape closes menu)
3. Lighthouse accessibility audit (run in Chrome DevTools)

A formal test framework (Vitest/Playwright) would be valuable for Phase 4 polish but is not cost-effective for 3 static components in Phase 2.

## Open Questions

1. **Social media profile URLs**
   - What we know: LinkedIn and Facebook icons are required (FOOT-01)
   - What's unclear: The actual profile URLs for Stephane's LinkedIn and Facebook accounts
   - Recommendation: Use placeholder `href` values (e.g., `https://linkedin.com/in/stephane-maire`) and document as needing real URLs before launch

2. **Mentions legales page**
   - What we know: Footer links to `/mentions-legales` (FOOT-02)
   - What's unclear: Page does not exist yet (Phase 4, SEO-06)
   - Recommendation: Link to `/mentions-legales` now -- it will 404 until Phase 4 creates the page. This is expected.

## Sources

### Primary (HIGH confidence)
- WAI-ARIA Authoring Practices Guide -- Disclosure Navigation Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/
- MDN -- HTML inert attribute: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert
- MDN -- `<dialog>` element and aria-modal: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog
- Existing codebase: `src/components/ui/Button.tsx`, `Container.tsx`, `Section.tsx`, `globals.css`, `layout.tsx`

### Secondary (MEDIUM confidence)
- CSS-Tricks -- Focus management and inert: https://css-tricks.com/focus-management-and-inert/
- web.dev -- The inert attribute: https://web.dev/articles/inert
- Sticky header with scroll shadow pattern: https://musatov.com/posts/sticky-header-with-shadow/

### Tertiary (LOW confidence)
- React 19 focus-trap-react compatibility -- WebSearch only, but irrelevant since we recommend `inert` instead

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- no new dependencies, all tools already in place
- Architecture: HIGH -- Server/Client split is well-documented Next.js pattern; `inert` is a stable web standard
- Pitfalls: HIGH -- documented in project's own PITFALLS.md (Pitfalls 5, 6, 8, 14) plus WAI-ARIA best practices
- Discretion recommendations: MEDIUM -- design judgment based on design-philosophy.md principles, not user-validated

**Research date:** 2026-03-16
**Valid until:** 2026-04-16 (stable domain, no fast-moving dependencies)
