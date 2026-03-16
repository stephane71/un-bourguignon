# Phase 1: Foundation & Design System - Context

**Gathered:** 2026-03-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Static export configuration, Tailwind CSS 4 design tokens (palette + fonts), and reusable UI primitives (Button, Card, Section, Container). The project builds as a static HTML export with the correct visual identity ready for section development. No content sections, no navigation, no SEO metadata.

</domain>

<decisions>
## Implementation Decisions

### Color palette values
- Use the research-estimated hex values as canonical:
  - ecru: `#F5F0E8` (alternating section background)
  - sable: `#E8DCC8` (card/accent background)
  - brun: `#6B4C3B` (primary text, dark brown)
  - terre: `#8B6914` (secondary accent, dark earth)
  - or: `#C5973B` (decorative gold)
  - argile: `#B8754C` (warm terracotta accent)
- Primary page background is **white (`#FFFFFF`)**, with ecru used for alternating sections to create visual rhythm
- METH-03 specifies `#D4A574` for step numbers — reconcile with or value at Claude's discretion (single gold or two variants)

### Contrast & accessibility
- Gold (or/argile) is **decorative only** — never used for text on light backgrounds
- Body text uses brun (`#6B4C3B`) on white/ecru — passes WCAG AA (~5.2:1 on ecru)
- Claude ensures all text/background combinations meet WCAG AA (4.5:1 minimum)

### UI primitives scope
- Phase 1 delivers 4 primitives ready for Phase 2-3 consumption:
  1. **Button** — Primary + secondary variants, 48px min tap target, focus states
  2. **Card** — Reusable for Pour qui (4 cards) and Services (5 cards), responsive
  3. **Section wrapper** — ID anchor, consistent padding, max-width, alternating white/ecru backgrounds
  4. **Container** — Max-width, responsive padding, used everywhere

### Claude's Discretion
- Button variant styling (solid+outline vs solid+ghost) — must fit the "artisan" feel from design-philosophy.md
- Card styling (shadow vs border accent) — "not a pixel too many" philosophy
- Typography mapping: serif (Lora) for meaning, sans-serif (Instrument Sans) for practical info — Claude maps to specific heading/body usage per the design philosophy principle
- Font weights selection — based on actual usage needs, balancing flexibility vs load time
- Heading scale (sizes, line heights, letter spacing)
- Container max-width and responsive padding values
- Section wrapper vertical padding

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Design identity
- `content/design-philosophy.md` — Visual philosophy: artisan feel, breathing space, serif for meaning/sans-serif for practical, warm earth tones, meticulous spacing
- `content/presentation_activite.md` — All textual content for sections (used in Phase 3, but informs tone for primitives)

### Technical setup
- `.planning/research/PITFALLS.md` — Tailwind CSS 4 `@theme` directive usage (not JS config), dark mode stripping, contrast pitfalls, font loading via next/font/google
- `.planning/research/SUMMARY.md` — Research summary with palette notes and contrast warnings

### Requirements
- `.planning/REQUIREMENTS.md` — FOND-01 through FOND-06 (this phase), METH-03 specifies gold #D4A574 for step numbers

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None yet — fresh Next.js scaffold with placeholder page

### Established Patterns
- Tailwind CSS 4 via `@tailwindcss/postcss` — configuration goes in `globals.css` with `@theme` directive, NOT in a JS/TS config file
- `next/font/google` available for font loading (prevents FOUT)
- App Router with `src/app/` structure and `@/*` path alias

### Integration Points
- `next.config.ts` — needs `output: 'export'` and `images: { unoptimized: true }`
- `src/app/globals.css` — dark mode block to strip, `@theme` tokens to add
- `src/app/layout.tsx` — font loading setup, CSS variable injection, already has `lang="fr"`
- Portrait image exists at `public/images/` — verify quality/size for hero (Phase 3)

</code_context>

<specifics>
## Specific Ideas

- Page background is white, not ecru — ecru creates rhythm as alternating section backgrounds
- The design philosophy strongly emphasizes "space that breathes" and "meticulous spacing" — primitives should reflect generous padding and clean proportions
- "The result of countless hours of refinement" — primitives should look polished, not generic

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-foundation-design-system*
*Context gathered: 2026-03-16*
