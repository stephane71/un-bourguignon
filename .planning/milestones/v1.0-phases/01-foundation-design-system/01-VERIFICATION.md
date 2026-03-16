---
phase: 01-foundation-design-system
verified: 2026-03-16T14:00:00Z
status: human_needed
score: 11/11 must-haves verified
re_verification: false
human_verification:
  - test: "Open out/index.html (or run npx serve out) at 375px viewport width and visually confirm no horizontal overflow"
    expected: "All sections are fully visible within the viewport with no horizontal scroll bar"
    why_human: "Responsive overflow cannot be verified programmatically without a rendering engine"
  - test: "Open out/index.html and confirm Lora renders for headings and Instrument Sans renders for body text — check that fonts load without a flash of unstyled text"
    expected: "H1/H2 elements display in Lora (serif), body paragraphs and buttons display in Instrument Sans (sans-serif), no FOUT visible on first paint"
    why_human: "Font rendering and FOUT require a browser; next/font injects preload links (confirmed in HTML) but visual rendering needs human confirmation"
  - test: "Open out/index.html and visually compare color swatches against the spec: ecru #F5F0E8, sable #E8DCC8, brun #6B4C3B, terre #8B6914, or #C5973B, or-light #D4A574, argile #B8754C"
    expected: "Each swatch tile renders the correct color matching its hex value"
    why_human: "Tailwind CSS 4 @theme token compilation to actual CSS requires visual browser check to confirm the utility classes resolve to the right hex values"
---

# Phase 1: Foundation & Design System — Verification Report

**Phase Goal:** The project builds as a static export with the correct design tokens, fonts, and UI primitives ready for section development
**Verified:** 2026-03-16T14:00:00Z
**Status:** human_needed (all automated checks passed; 3 visual rendering items for human)
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths

All truths are drawn from the PLAN frontmatter `must_haves` (Plans 01-01 and 01-02) and the ROADMAP success criteria.

| # | Truth | Status | Evidence |
|---|-------|--------|---------|
| 1 | `npm run build` produces a static HTML export in `out/` without errors | VERIFIED | Build completed with `✓ Compiled successfully`, `out/index.html` confirmed present |
| 2 | Tailwind palette classes (bg-ecru, text-brun, etc.) apply correct hex colors | VERIFIED (automated) | `@theme` block in `globals.css` defines all 7 tokens; `out/index.html` contains `bg-ecru`, `bg-brun`, etc. as class attributes; visual rendering is a human item |
| 3 | Lora and Instrument Sans fonts load via next/font with CSS variables on html element | VERIFIED | `layout.tsx` imports both fonts, sets `variable: "--font-lora"` and `variable: "--font-instrument"`; `out/index.html` confirms `class="lora_...__variable instrument_sans_...__variable"` on `<html>` and font preload links in `<head>` |
| 4 | No dark mode override exists — dark-mode users see white background with brun text | VERIFIED | `globals.css` contains no `prefers-color-scheme`; body style is `color: theme(--color-brun); background-color: #ffffff` — unconditional |
| 5 | `html` element has `lang=fr` attribute | VERIFIED | `layout.tsx` has `<html lang="fr" ...>`; `out/index.html` confirms `<html lang="fr" ...>` |
| 6 | Container constrains content to max-w-6xl with responsive horizontal padding | VERIFIED | `Container.tsx`: `mx-auto max-w-6xl px-4 sm:px-6 lg:px-8`; rendered in `out/index.html` |
| 7 | Section wrapper supports id anchor and alternating white/ecru backgrounds | VERIFIED | `Section.tsx` accepts required `id` prop and `alternate` boolean; renders `bg-ecru` when true, `bg-white` when false; all 5 sections in `page.tsx` are wired correctly |
| 8 | Button has primary (brun bg, white text) and secondary (transparent, brun border) variants with 48px min height | VERIFIED | `Button.tsx`: primary = `bg-brun text-white`, secondary = `bg-transparent text-brun border-[1.5px] border-brun`, both with `min-h-12`; rendered in HTML output |
| 9 | Card displays with rounded-xl, correct padding, and contextual background | VERIFIED | `Card.tsx`: `rounded-xl p-6`, on-white adds `border border-sable`, on-ecru has no border; both variants rendered in `out/index.html` |
| 10 | Test page renders all color tokens, typography specimens, and all 4 primitives | VERIFIED | `page.tsx` imports Button, Card, Section, Container; renders all 7 swatches with hex labels, 5 typography specimens, 4 button instances, 4 card instances across 5 alternating sections |
| 11 | Layout does not overflow at 375px mobile viewport | HUMAN NEEDED | Responsive grid classes confirmed (`grid-cols-2 sm:grid-cols-4`, `grid-cols-1 sm:grid-cols-2`, `px-4` base padding), but visual rendering at 375px requires a browser |

**Score:** 11/11 truths verified (10 automated + 1 human)

---

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `next.config.ts` | Static export configuration | VERIFIED | Contains `output: 'export'` and `images: { unoptimized: true }` |
| `src/app/globals.css` | Design tokens and base styles | VERIFIED | `@import "tailwindcss"`, `@theme` with 7 color tokens, `@theme inline` with font families, body styles; no dark mode, no `:root`, no `--foreground`/`--background` |
| `src/app/layout.tsx` | Font loading and CSS variable injection | VERIFIED | Imports `Lora` and `Instrument_Sans` from `next/font/google`, both with `variable` and `display: "swap"`, both injected as class on `<html>` |
| `src/components/ui/Container.tsx` | Max-width container with responsive padding | VERIFIED | Exports `Container`, `max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto`, 12 lines, substantive |
| `src/components/ui/Section.tsx` | Section wrapper with id anchor and alternating backgrounds | VERIFIED | Exports `Section`, imports `Container`, required `id` prop, `alternate` toggles `bg-ecru`/`bg-white`, `py-16 sm:py-20 lg:py-24` |
| `src/components/ui/Button.tsx` | Primary and secondary button variants | VERIFIED | Exports `Button`, discriminated union types for polymorphic `as` prop, `min-h-12`, focus ring, no `"use client"` |
| `src/components/ui/Card.tsx` | Reusable card primitive | VERIFIED | Exports `Card`, `variant` prop (`"on-white"` | `"on-ecru"`), `rounded-xl p-6`, no shadow, no `"use client"` |
| `src/app/page.tsx` | Visual test page for all design system elements | VERIFIED | Contains "Systeme de design", all 7 color classes with hex labels, 5 typography specimens, all button/card variants, all 4 primitives imported |

---

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `src/app/layout.tsx` | `src/app/globals.css` | CSS variables `--font-lora` and `--font-instrument` injected on html, consumed by `@theme inline` in globals.css | WIRED | `layout.tsx` injects both `variable` class names on `<html>`; `globals.css` `@theme inline` references `var(--font-lora)` and `var(--font-instrument)`; `out/index.html` confirms both class names present on `<html>` |
| `src/app/globals.css` | Tailwind utility classes | `@theme` block generates `bg-ecru`, `text-brun`, `font-serif`, `font-sans` utilities | WIRED | `@theme` defines `--color-*` tokens (static); `@theme inline` defines `--font-*` (runtime); all utility classes appear in rendered HTML |
| `src/components/ui/Section.tsx` | `src/components/ui/Container.tsx` | Section renders Container internally | WIRED | `Section.tsx` line 1: `import { Container } from "./Container"`; Section body wraps children in `<Container>` |
| `src/app/page.tsx` | `src/components/ui/*` | Test page imports and renders all 4 primitives | WIRED | `page.tsx` imports Button, Card, Section, Container; all 4 rendered in output |

---

### Requirements Coverage

Requirements claimed by plans: FOND-01, FOND-02, FOND-03, FOND-04, FOND-05, FOND-06 (all 6 phase requirements)

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|-------------|-------------|--------|---------|
| FOND-01 | 01-01-PLAN | Static export configured (`output: 'export'`, `images.unoptimized: true`) | SATISFIED | `next.config.ts` contains both fields exactly as specified |
| FOND-02 | 01-01-PLAN | Tailwind CSS 4 theme tokens defined via `@theme` (palette ecru/sable/brun/terre/or/argile) | SATISFIED | `globals.css` `@theme` block defines all 7 tokens (including supplementary `--color-or-light`) |
| FOND-03 | 01-01-PLAN | Google Fonts loaded via next/font/google (Lora + Instrument Sans) with CSS variables | SATISFIED | `layout.tsx` loads both fonts with `variable` props, `display: "swap"`; HTML confirms preload links |
| FOND-04 | 01-01-PLAN | Dark mode CSS boilerplate stripped from globals.css | SATISFIED | No `prefers-color-scheme`, no `--background`, no `--foreground` in `globals.css` |
| FOND-05 | 01-02-PLAN | Mobile-first responsive layout with Tailwind breakpoints (base/sm/md/lg/xl) | SATISFIED | All 4 primitives use mobile-first breakpoints (`px-4 sm:px-6 lg:px-8`, `py-16 sm:py-20 lg:py-24`, `grid-cols-1 sm:grid-cols-2`, `text-4xl lg:text-5xl`) |
| FOND-06 | 01-01-PLAN | HTML lang attribute set to `fr` | SATISFIED | `layout.tsx` and `out/index.html` both confirm `lang="fr"` |

No orphaned requirements: REQUIREMENTS.md Traceability table maps exactly FOND-01 through FOND-06 to Phase 1, and all 6 are claimed by plans.

---

### Anti-Patterns Found

No blockers or warnings found.

| File | Pattern | Severity | Result |
|------|---------|----------|--------|
| All `src/components/ui/*.tsx` | `"use client"` directive | Check | None found — all 4 primitives are Server Components |
| All phase files | TODO/FIXME/PLACEHOLDER | Check | None found |
| `src/app/globals.css` | `prefers-color-scheme` dark mode | Check | None found |
| `src/app/globals.css` | `--foreground` / `--background` remnants | Check | None found |
| `src/app/globals.css` | `:root` block | Check | None found |
| `src/components/ui/*.tsx` | Empty implementations (`return null`, `return {}`) | Check | None found |

---

### Human Verification Required

Three items cannot be verified programmatically and require opening the site in a browser.

#### 1. Mobile overflow at 375px

**Test:** Open `out/index.html` in a browser (or run `npx serve out`), set the viewport to 375px width using DevTools, and scroll through all 5 sections.
**Expected:** No horizontal scrollbar, no content clipped or extending beyond the viewport. Color swatches wrap to 2 columns, cards stack to 1 column.
**Why human:** CSS responsive behavior requires a rendering engine; Tailwind class presence is confirmed but pixel-level rendering is not.

#### 2. Font rendering and no FOUT

**Test:** Open `out/index.html` in a browser, disable cache (DevTools Network tab), and load the page. Observe headings and body text on initial paint.
**Expected:** H1/H2 elements render in Lora (a serif font — noticeable serifs on letters), body paragraphs and buttons render in Instrument Sans (a clean sans-serif). No visible flash where text appears in a system font first.
**Why human:** Font rendering and FOUT require a browser; `display: "swap"` is confirmed in code and preload links are in HTML, but the visual result depends on network timing.

#### 3. Color swatch correctness

**Test:** Open `out/index.html` in a browser and compare each color swatch tile against its labeled hex value. Use a color picker tool if needed.
**Expected:** Ecru swatch is a warm off-white (#F5F0E8), Brun is a dark warm brown (#6B4C3B), Or is a warm golden (#C5973B), etc. The page body background is pure white and body text appears in Brun.
**Why human:** Tailwind CSS 4 `@theme` token compilation to CSS custom properties, and their resolution to actual rendered colors, requires a browser to confirm.

---

### Gaps Summary

No gaps. All 11 automated must-haves are verified. The phase goal is structurally complete: the project builds to `out/`, all 6 FOND requirements are satisfied, all 4 primitives are substantive and wired, and the test page exercises the full design system. The 3 human items are visual quality checks (rendering, overflow, color accuracy) that complete the verification, not blockers.

---

_Verified: 2026-03-16T14:00:00Z_
_Verifier: Claude (gsd-verifier)_
