# Architecture Patterns

**Domain:** One-page static showcase website (site vitrine)
**Researched:** 2026-03-16

## Recommended Architecture

A flat, section-based architecture where the single page (`src/app/page.tsx`) composes discrete section components in reading order. All section components are Server Components (no `'use client'` needed) because they render static content. Only three interactive behaviors require Client Components: the mobile burger menu, the scroll-to-anchor smooth scrolling, and the back-to-top button.

### High-Level Structure

```
src/
  app/
    layout.tsx              # RootLayout: fonts, metadata, JSON-LD, global styles
    page.tsx                # Home: composes all section components in order
    globals.css             # Tailwind imports, CSS variables, custom utilities
    fonts.ts                # Font definitions (Lora + Instrument Sans)
    mentions-legales/
      page.tsx              # Legal page (separate route)
  components/
    layout/
      Header.tsx            # Navigation bar + mobile menu trigger
      Footer.tsx            # Footer with links, socials, legal link
      MobileNav.tsx         # Client Component: burger menu overlay
      BackToTop.tsx         # Client Component: floating scroll-to-top button
    sections/
      Hero.tsx              # Hero section with portrait, CTAs
      About.tsx             # A propos section
      Audience.tsx          # Pour qui section (problem cards)
      Services.tsx          # Services section (intervention cards)
      Method.tsx            # Methode section (stepper + table)
      Benefits.tsx          # Benefices section
      Contact.tsx           # Contact section (clickable coordinates)
    ui/
      SectionWrapper.tsx    # Shared section container (id, padding, max-width)
      Card.tsx              # Reusable card component
      Button.tsx            # CTA button (tel:, mailto:, anchor)
      Icon.tsx              # SVG icon wrapper (trait fin style)
  lib/
    data.ts                 # All text content, structured as typed objects
    metadata.ts             # SEO metadata and JSON-LD schema
```

### Component Boundaries

| Component | Responsibility | Communicates With | Server/Client |
|-----------|---------------|-------------------|---------------|
| `RootLayout` | HTML shell, font CSS variables, global metadata, JSON-LD script tag | All pages | Server |
| `Home (page.tsx)` | Composes sections in order, passes no props (data imported directly) | All section components | Server |
| `Header` | Fixed top nav with anchor links, CTA button, mobile menu trigger | `MobileNav` (renders it) | Server (shell) + Client (interactive parts) |
| `MobileNav` | Overlay menu with anchor links, closes on link click or outside tap | `Header` (toggled by) | **Client** |
| `BackToTop` | Floating button, appears after 300px scroll, scrolls to top | None | **Client** |
| `Hero` | Name, subtitle, slogan, circular portrait, 2 CTAs | `Button`, `next/image` | Server |
| `About` | Presentation paragraph, direct relationship messaging | `SectionWrapper` | Server |
| `Audience` | 4 problem cards (stacked mobile, 2x2 desktop) | `Card`, `SectionWrapper` | Server |
| `Services` | 5 service cards (1 col mobile, 2 col tablet, 3 col desktop) | `Card`, `SectionWrapper` | Server |
| `Method` | 3-step stepper (vertical mobile, horizontal desktop) + formats table | `SectionWrapper` | Server |
| `Benefits` | 4 benefit items with icons | `Icon`, `SectionWrapper` | Server |
| `Contact` | Clickable tel:, mailto:, social links | `Button`, `SectionWrapper` | Server |
| `Footer` | Social links, contact info, mentions legales link | None | Server |
| `SectionWrapper` | Standardized section container: `<section id={id}>` with consistent padding, max-width, background alternation | Used by all sections | Server |
| `Card` | Reusable card with icon, title, description | `Icon` | Server |
| `Button` | CTA rendering for links (anchor, tel, mailto, external) | None | Server |
| `data.ts` | Single source of truth for all text content | Imported by section components | N/A (module) |

### Data Flow

```
data.ts (static content)
    |
    v
page.tsx (imports sections, sections import data directly)
    |
    +---> Hero       ---> renders portrait via next/image
    +---> About
    +---> Audience   ---> renders 4 Card components
    +---> Services   ---> renders 5 Card components
    +---> Method     ---> renders stepper + table
    +---> Benefits   ---> renders 4 Icon+text items
    +---> Contact    ---> renders clickable links
    |
    v
layout.tsx (wraps with Header + Footer, fonts, metadata)
```

**Data does not flow through props from page.tsx to sections.** Each section imports its own data slice from `data.ts`. This is the simplest pattern for a static site: no prop drilling, no context, no state management. Content is co-located with the component that renders it via a shared data module.

**The only runtime state in the entire application:**
1. `MobileNav` open/close (boolean, local useState)
2. `BackToTop` visibility (boolean, derived from scroll position via useEffect)
3. Smooth scroll behavior (CSS `scroll-behavior: smooth` on `<html>`, no JS needed)

## Patterns to Follow

### Pattern 1: Section Wrapper with ID Anchors

Every section gets a consistent wrapper that provides the `id` for anchor navigation, standardized vertical padding, max-width constraint, and alternating background capability.

**What:** A thin wrapper component that every section uses.
**When:** Every section on the page.
**Why:** Consistency in spacing, anchor targets, and the ability to change section rhythm globally.

```typescript
// src/components/ui/SectionWrapper.tsx
interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}
```

### Pattern 2: Content in a Typed Data Module

All page text lives in `src/lib/data.ts`, exported as typed constants. Sections import their slice. This makes content updates trivial (edit one file) and enables type safety on content structure.

**What:** Centralized content, typed with TypeScript interfaces.
**When:** All static text content.

```typescript
// src/lib/data.ts
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  { icon: 'globe', title: 'Presence en ligne', description: '...' },
  // ...
];

export const hero = {
  name: 'Stephane Maire',
  subtitle: 'Consultant numerique independant',
  slogan: 'La methode d\'un expert, la proximite d\'un artisan.',
  cta1: { label: 'Me contacter', href: '#contact' },
  cta2: { label: 'Decouvrir mes services', href: '#services' },
} as const;
```

### Pattern 3: Font Setup with CSS Variables for Tailwind CSS 4

Two Google Fonts defined in a shared `fonts.ts` file, exposed as CSS variables on `<html>`, and mapped to Tailwind theme tokens in `globals.css`.

**What:** `next/font/google` with `variable` option, integrated into Tailwind CSS 4 `@theme`.
**When:** Layout setup (done once).

```typescript
// src/app/fonts.ts
import { Lora, Instrument_Sans } from 'next/font/google';

export const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
});
```

```css
/* In globals.css */
@import 'tailwindcss';

@theme inline {
  --font-serif: var(--font-lora);
  --font-sans: var(--font-instrument-sans);
}
```

```tsx
// In layout.tsx
<html lang="fr" className={`${lora.variable} ${instrumentSans.variable} antialiased`}>
```

This yields `font-serif` and `font-sans` utility classes in Tailwind.

### Pattern 4: Static Export Image Handling

With `output: 'export'`, the default Next.js image optimizer is unavailable. Use `unoptimized: true` in `next.config.ts` for simplicity (images are pre-optimized manually as WebP). This avoids needing a custom loader for a site with only 1-2 images.

**What:** Disable image optimization at config level, serve pre-optimized WebP images from `public/`.
**When:** Static export with very few images.

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

Pre-optimize the portrait image: provide `portrait.webp` at 560px width (covers 280px at 2x density). Place in `public/images/`.

### Pattern 5: Scroll-to-Anchor with CSS Only

Smooth scrolling for anchor navigation requires no JavaScript. CSS `scroll-behavior: smooth` on the `<html>` element handles it. The `scroll-margin-top` property on sections offsets for the fixed header.

**What:** Pure CSS smooth scrolling with header offset.
**When:** All anchor link navigation.

```css
/* In globals.css */
html {
  scroll-behavior: smooth;
}

section {
  scroll-margin-top: 5rem; /* matches fixed header height */
}
```

Anchor links in the header are standard `<a href="#services">` elements. No client-side routing needed.

### Pattern 6: Mobile Navigation as Isolated Client Island

The header renders its static content (logo, nav links) as a Server Component. The mobile menu toggle and overlay are a separate Client Component, keeping the client JS bundle minimal.

**What:** Split Header into server shell + client interactive part.
**When:** Any component that is mostly static but has one interactive behavior.

```tsx
// src/components/layout/Header.tsx (Server Component)
import { MobileNav } from './MobileNav';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Methode', href: '#methode' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-ecru/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="font-serif text-xl font-bold">SM</a>
        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}
```

```tsx
// src/components/layout/MobileNav.tsx
'use client';

import { useState } from 'react';

interface MobileNavProps {
  links: { label: string; href: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  // Renders burger button (md:hidden) + overlay when open
  // Closes on link click or outside tap
  // ...
}
```

### Pattern 7: Responsive Grid with Tailwind Breakpoints

Cards use Tailwind's responsive grid utilities. No custom CSS grid needed.

**What:** Mobile-first grid that adapts at breakpoints.
**When:** Card grids (Audience 4 cards, Services 5 cards).

```tsx
// Audience: 1 col -> 2 col at md
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {problems.map(p => <Card key={p.title} {...p} />)}
</div>

// Services: 1 col -> 2 col at md -> 3 col at lg
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map(s => <Card key={s.title} {...s} />)}
</div>
```

## Anti-Patterns to Avoid

### Anti-Pattern 1: Making Section Components Client Components

**What:** Adding `'use client'` to section components because "they might need interactivity later."
**Why bad:** Increases JS bundle size for zero benefit. Static content renders faster as Server Components (zero client JS). With static export, Server Components render at build time to pure HTML.
**Instead:** Keep all sections as Server Components. Extract only truly interactive bits (menu toggle, scroll listener) into tiny Client Component islands.

### Anti-Pattern 2: Prop Drilling Content from page.tsx

**What:** Passing all content as props from `page.tsx` down to each section.
**Why bad:** Creates a massive props interface on page.tsx, makes the page component unreadable, and adds no value since the data is static.
**Instead:** Each section imports its own content slice from `data.ts`. The page just composes components.

### Anti-Pattern 3: Using next/link for Anchor Navigation

**What:** Using Next.js `<Link>` component for `#section` anchors.
**Why bad:** `next/link` is for route navigation with prefetching. For same-page anchors, a plain `<a href="#section">` is correct and works with CSS `scroll-behavior: smooth`. Using `Link` for anchors can cause unexpected full-page transitions.
**Instead:** Use `<a>` tags for all `#anchor` links. Reserve `Link` for the `/mentions-legales` route.

### Anti-Pattern 4: Complex State Management

**What:** Introducing React Context, Zustand, or similar for managing UI state.
**Why bad:** The site has exactly 2 pieces of runtime state (menu open, scroll position). Adding state management infrastructure is pure overhead.
**Instead:** `useState` in `MobileNav`, `useEffect` with `window.scrollY` in `BackToTop`. That is all.

### Anti-Pattern 5: Custom Image Loader for One Image

**What:** Setting up a Cloudinary or custom image loader for static export.
**Why bad:** The site has one portrait image. The overhead of configuring a loader service is disproportionate. Pre-optimized WebP served from `public/` is simpler, faster to set up, and has zero runtime cost.
**Instead:** `images: { unoptimized: true }` in next.config.ts + manually optimized WebP in `public/images/`.

## Scalability Considerations

This is a static one-page site. "Scalability" means: can the architecture handle reasonable evolution without a rewrite?

| Evolution Scenario | Current Architecture Handles It | How |
|---|---|---|
| Add a new section | Yes | Create new section component, add to page.tsx composition, add data to data.ts |
| Change section order | Yes | Reorder imports in page.tsx |
| Add a second page (e.g., tarifs) | Yes | New route in `src/app/tarifs/page.tsx`, reuse layout/header/footer |
| Add a blog | Partial rewrite | Would need dynamic routes, possibly remove `output: 'export'` or use `generateStaticParams` |
| Multi-language | Moderate rewrite | Would need i18n routing, content restructuring |
| Add contact form | Minor addition | New Client Component, but would need a backend/API (breaks pure static) |

## Build Order (Dependencies)

The architecture has clear dependency layers that dictate build order:

```
Phase 1: Foundation (no dependencies)
  - next.config.ts (output: 'export', images config)
  - fonts.ts (Lora + Instrument Sans setup)
  - globals.css (Tailwind theme, CSS variables, color palette)
  - SectionWrapper, Button, Card, Icon (UI primitives)
  - data.ts (content structure, can have placeholder text)

Phase 2: Layout Shell (depends on Phase 1)
  - Header (needs fonts, nav links, color palette)
  - Footer (needs fonts, color palette)
  - MobileNav (depends on Header for context)
  - BackToTop (independent, but needs scroll offset from header height)
  - RootLayout updates (integrate fonts, metadata, JSON-LD)

Phase 3: Sections (depends on Phase 1 + Phase 2 for full integration)
  - Hero (needs portrait image, Button, fonts, data.ts)
  - About (needs SectionWrapper, data.ts)
  - Audience (needs SectionWrapper, Card, data.ts)
  - Services (needs SectionWrapper, Card, data.ts)
  - Method (needs SectionWrapper, data.ts)
  - Benefits (needs SectionWrapper, Icon, data.ts)
  - Contact (needs SectionWrapper, Button, data.ts)

Phase 4: Assembly + Polish
  - page.tsx composition (all sections in order)
  - mentions-legales page
  - SEO metadata finalization
  - Lighthouse optimization pass
```

**Key dependency insight:** UI primitives (SectionWrapper, Card, Button, Icon) and the data module must exist before sections can be built. The layout shell (Header/Footer) can be built in parallel with sections, but full integration testing requires both.

## Sources

- Next.js 16.1.6 Static Exports documentation: https://nextjs.org/docs/app/guides/static-exports (verified 2026-02-27, HIGH confidence)
- Next.js Font Optimization with Tailwind CSS: https://nextjs.org/docs/app/api-reference/components/font (verified 2026-02-27, HIGH confidence)
- Next.js Image Component API: https://nextjs.org/docs/app/api-reference/components/image (verified 2026-02-27, HIGH confidence)
- Tailwind CSS 4 `@theme inline` pattern for font integration: confirmed in Next.js font docs example (HIGH confidence)
- CSS `scroll-behavior: smooth` and `scroll-margin-top`: standard CSS properties, widely supported (HIGH confidence)
- Server vs Client Component boundaries: Next.js App Router documentation convention (HIGH confidence)

---

*Architecture analysis: 2026-03-16*
