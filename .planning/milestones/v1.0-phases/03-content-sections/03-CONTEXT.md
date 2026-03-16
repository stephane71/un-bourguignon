# Phase 3: Content Sections - Context

**Gathered:** 2026-03-16
**Status:** Ready for planning

<domain>
## Phase Boundary

All 7 page sections (Hero, À propos, Pour qui, Services, Méthode, Bénéfices, Contact) delivering the full one-page narrative. A visitor can read from Hero to Contact and take action. No SEO metadata, no legal page, no animations — those are Phase 4.

</domain>

<decisions>
## Implementation Decisions

### Section rhythm & alternation
- Strict white/ecru alternation: Hero=white, À propos=ecru, Pour qui=white, Services=ecru, Méthode=white, Bénéfices=ecru, Contact=white
- Use existing `Section` component with `alternate` prop to control backgrounds

### Hero composition
- Distinct hero treatment: taller padding, larger typography, more breathing space than other sections
- Desktop (lg+): text left (name, title, slogan, CTAs), portrait circle right
- Mobile: portrait centered above text, then name, title, slogan, CTAs below
- Portrait sizes: 200px mobile, 280px desktop (per HERO-03)
- CTA hierarchy: "Prendre contact" as solid primary Button (brun bg, white text), "Découvrir mes services" as text link with arrow — not a button

### Pour qui cards
- 4 problem cards using plain Card component (white card on white bg, sable border via `on-white` variant)
- No icons on problem cards — text-only content
- Layout: stacked on mobile, 2×2 grid on desktop (per POUR-02)

### Service cards
- 5 cards with colored top border accent (or/argile) to distinguish from Pour qui cards
- Each card: title + description + bullet list of sub-prestations (per SERV-02)
- Layout: 1 column mobile, 2 columns tablet, 3 columns desktop (per SERV-03)
- At 3-column breakpoint, last 2 cards left-aligned (natural grid flow, empty space on right)
- Cards use `on-ecru` Card variant (Services section has ecru background)

### Méthode section
- Two distinct sub-blocks with visual spacing between them:
  1. Stepper: 3 steps (Diagnostic terrain → Accompagnement personnalisé → Suivi et autonomie)
  2. Formats table: consultation, mission, atelier, suivi
- Step numbers in Lora Bold, gold #D4A574, 36-48px (per METH-03)
- Stepper: vertical on mobile, horizontal on desktop (per METH-02)

### Bénéfices section
- 4 benefits with thin-line SVG icons + Lora title + Instrument Sans text (per BENE-01)
- Icons: custom inline SVG components following existing icons/ pattern (Clock, Key, User, Euro or similar)

### Contact section
- Warm CTA treatment: inviting heading ("Prêt à travailler ensemble ?"), prominent tappable contact blocks
- Phone (`tel:`) and email (`mailto:`) as large tap-friendly blocks (min 48px)
- LinkedIn and Facebook links with existing icon components
- New icons needed: Phone.tsx, Mail.tsx (added to src/components/icons/)
- Mobile: elements stacked full-width (per CONT-04)
- No form — direct contact only (per CONT-05)

### Icon approach
- Inline SVG components in src/components/icons/ (consistent with existing Burger, Close, LinkedIn, Facebook)
- New icons to create: Phone, Mail, plus ~4 for Bénéfices (Claude picks specific icons)
- Zero external dependencies — hand-picked SVGs with consistent stroke width and currentColor

### Claude's Discretion
- Exact Hero padding and typography scale
- À propos section layout (text flow, emphasis of key points from content)
- Stepper connector design (lines, arrows, dots between steps)
- Formats table styling (standard table, styled cards, or grid layout)
- Bénéfices icon selections (which 4 icons best represent: time saved, autonomy, single contact, fair pricing)
- Bénéfices layout (2×2 grid, single column, or horizontal strip)
- Contact section spacing and block styling
- Service card top border thickness and exact color (or vs argile)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Content source
- `content/presentation_activite.md` — All textual content for all 7 sections (section 1=À propos, 2=Pour qui, 3=Services, 4=Méthode, 5=Bénéfices, plus Hero and Contact data)
- `content/design-philosophy.md` — Visual philosophy: artisan feel, breathing space, serif for meaning, sans-serif for practical, warm earth tones

### Prior phase context
- `.planning/phases/01-foundation-design-system/01-CONTEXT.md` — Color palette hex values, contrast rules, UI primitive specs (Button, Card, Section, Container), typography mapping
- `.planning/phases/02-layout-shell/02-CONTEXT.md` — Header/footer decisions, nav link list (À propos, Services, Méthode, Contact), section ID coordination

### Technical references
- `.planning/research/PITFALLS.md` — Tailwind CSS 4 patterns, next/image usage, font loading

### Requirements
- `.planning/REQUIREMENTS.md` — HERO-01 through HERO-06, APRO-01/02, POUR-01/02/03, SERV-01/02/03/04, METH-01/02/03/04/05, BENE-01/02, CONT-01/02/03/04/05, A11Y-04

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/components/ui/Button.tsx` — Primary/secondary variants, polymorphic (`as="a"`). Use for Hero CTA.
- `src/components/ui/Card.tsx` — `on-white` and `on-ecru` variants with rounded-xl and p-6. Use for Pour qui and Services cards.
- `src/components/ui/Section.tsx` — Section wrapper with `id`, `alternate` prop (white/ecru), includes Container. Use for all 7 sections.
- `src/components/ui/Container.tsx` — Max-width wrapper with responsive padding.
- `src/components/icons/LinkedIn.tsx`, `Facebook.tsx` — Reuse in Contact section.

### Established Patterns
- Inline SVG icon components: className + size props, aria-hidden, currentColor
- Server Components by default — only MobileMenu uses `use client`
- Tailwind CSS 4 with `@theme` tokens: ecru, sable, brun, terre, or, argile + --color-or-light (#D4A574)
- Fonts: `--font-lora` (serif/meaning) and `--font-instrument` (sans/practical) via CSS variables

### Integration Points
- `src/app/page.tsx` — All 7 section components rendered here in order
- Section IDs must match header nav anchors: `a-propos`, `services`, `methode`, `contact` (plus `hero`, `pour-qui`, `benefices`)
- Portrait image at `public/images/photo-portrait.png` — use with next/image
- `scroll-margin-top` already configured in globals.css for header offset

</code_context>

<specifics>
## Specific Ideas

- Hero should feel like a dedicated landing area — not just another section. Extra breathing space.
- "Prêt à travailler ensemble ?" as the Contact heading — warm, inviting, from the content source
- Service cards with gold top border = the "artisan" accent that makes them feel crafted
- Pour qui cards stay plain (text-only, no icons) — problems described in words, benefits get visual reinforcement
- The Méthode stepper is the visual star, the formats table is supplementary below

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 03-content-sections*
*Context gathered: 2026-03-16*
