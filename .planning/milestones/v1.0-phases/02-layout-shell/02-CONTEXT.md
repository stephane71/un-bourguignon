# Phase 2: Layout Shell - Context

**Gathered:** 2026-03-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Sticky header with mobile burger menu, footer with social/contact links, and root layout structure ready to receive content sections. Navigation links anchor to section IDs. No content sections are built in this phase — only the shell that wraps them.

</domain>

<decisions>
## Implementation Decisions

### Header appearance
- White (#FFFFFF) background, always opaque
- Subtle bottom shadow appearing on scroll (shadow-sm or similar)
- Brand identity: "Stéphane Maire" text on the left in Lora serif, brun color
- No subtitle, no logo — just the name

### Header CTA
- "Me contacter" uses the existing primary Button component (solid brun, white text)
- Reuses `Button` from `src/components/ui/Button.tsx` with `as="a" href="#contact"`

### Navigation links (desktop)
- Curated 4 links, not all 7 sections: À propos, Services, Méthode, Contact
- Pour qui and Bénéfices are reachable by scrolling, not in nav
- Links use Instrument Sans (sans-serif), brun color

### Mobile menu
- Full-screen overlay triggered by burger icon
- Header stays visible at top with close (✕) button replacing burger
- Navigation links centered vertically, large tap targets (48px+)
- Same curated 4 links as desktop, plus "Me contacter" CTA button at bottom
- Menu closes on link tap (scrolls to section)
- ARIA attributes: `aria-expanded`, `aria-controls`, role="dialog" on overlay
- Keyboard: Escape to close, focus trap inside menu

### Footer
- Minimal single band — one line on desktop, stacked on mobile
- Content: social icons (LinkedIn, Facebook), phone, email, "Mentions légales" link
- Phone and email are clickable (`tel:` and `mailto:` links)

### Claude's Discretion
- Mobile menu overlay background color (white or ecru — whichever feels more cohesive)
- Footer background color (brun dark, ecru warm, or white with border — pick what anchors the page best)
- Social icon color treatment (monochrome on-palette or brand colors — depends on footer bg choice)
- Scroll shadow implementation (CSS-only or minimal JS scroll listener)
- Active nav link indicator style (if any — subtle underline, bold, or color change)
- Header height and vertical padding
- Mobile burger icon style (three lines, dots, etc.)
- Transition/animation for mobile menu open/close (CSS transition)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Design identity
- `content/design-philosophy.md` — Visual philosophy: artisan feel, breathing space, serif for meaning/sans-serif for practical
- `content/presentation_activite.md` — Section names and content (needed to set up section ID anchors)

### Phase 1 context (prior decisions)
- `.planning/phases/01-foundation-design-system/01-CONTEXT.md` — Color palette values, contrast rules, UI primitive specs, typography mapping

### Technical references
- `.planning/research/PITFALLS.md` — Tailwind CSS 4 patterns, dark mode stripping, font loading

### Requirements
- `.planning/REQUIREMENTS.md` — NAV-01 through NAV-04, FOOT-01, FOOT-02, A11Y-02, A11Y-03

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/components/ui/Button.tsx` — Primary/secondary variants, already polymorphic (renders as `<a>` or `<button>`). Use for header CTA and mobile menu CTA.
- `src/components/ui/Container.tsx` — Max-width wrapper with responsive padding. Use inside header for content alignment.
- `src/components/ui/Section.tsx` — Section wrapper with id anchor, alternating bg, includes Container. Header/footer are NOT sections — they wrap sections.

### Established Patterns
- Tailwind CSS 4 via `@theme` in `globals.css` — color tokens (ecru, sable, brun, terre, or, argile) already defined
- Fonts loaded via `next/font/google` in `layout.tsx` — CSS variables `--font-lora` and `--font-instrument` available
- `font-sans` class on body uses Instrument Sans as default

### Integration Points
- `src/app/layout.tsx` — Header and Footer components will be added here, wrapping `{children}`
- Section IDs must match nav link `href="#id"` values — coordinate with Phase 3 section names
- `scroll-behavior: smooth` + `scroll-margin-top` needed in `globals.css` for smooth anchor scrolling with header offset

</code_context>

<specifics>
## Specific Ideas

- The header should feel lightweight — "Stéphane Maire" in Lora serif is the brand, not a logo
- Mobile menu is full-screen and immersive — large centered links, not a cramped dropdown
- Footer is deliberately minimal — the Contact section (Phase 3) is the real contact area, footer is just a quick-access echo
- Curated 4 nav links keep the header clean — the page narrative guides the full scroll journey

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-layout-shell*
*Context gathered: 2026-03-16*
