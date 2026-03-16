# Phase 1: Foundation & Design System - Research

**Researched:** 2026-03-16
**Domain:** Next.js static export configuration, Tailwind CSS 4 design tokens, Google Fonts via next/font, UI primitives
**Confidence:** HIGH

## Summary

Phase 1 establishes the build configuration, design system tokens, font loading, and reusable UI primitives that all subsequent phases depend on. The project uses Next.js 16.1.6 with Tailwind CSS 4.2.1 -- both already installed. The primary technical challenges are: (1) configuring static export before any component work begins, (2) using Tailwind CSS 4's `@theme` directive (NOT a JS config file) for design tokens, (3) loading Lora + Instrument Sans via `next/font/google` with CSS variables connected to Tailwind, and (4) stripping the dark mode boilerplate that would break the warm palette for 30-40% of mobile users.

The existing codebase is a fresh Next.js scaffold with placeholder content. The `next.config.ts` is empty (needs `output: 'export'`), `globals.css` has dark mode boilerplate to remove, and `layout.tsx` has basic metadata with `lang="fr"` already set (FOND-06 partially done). No `tailwind.config.ts` exists, which is correct for Tailwind CSS 4.

**Primary recommendation:** Configure static export and strip boilerplate first, then define all design tokens in `globals.css` via `@theme`, set up fonts in `layout.tsx`, and build the four UI primitives (Button, Card, Section, Container) as Server Components.

<user_constraints>

## User Constraints (from CONTEXT.md)

### Locked Decisions
- Color palette hex values are canonical: ecru `#F5F0E8`, sable `#E8DCC8`, brun `#6B4C3B`, terre `#8B6914`, or `#C5973B`, argile `#B8754C`
- Primary page background is white (`#FFFFFF`), ecru for alternating sections
- Gold (or/argile) is decorative only -- never for text on light backgrounds
- Body text uses brun on white/ecru -- must pass WCAG AA (4.5:1 minimum)
- Phase 1 delivers 4 primitives: Button (primary + secondary), Card, Section wrapper (ID anchor, alternating bg), Container (max-width, responsive padding)
- METH-03 specifies `#D4A574` for step numbers -- reconcile with or value at Claude's discretion

### Claude's Discretion
- Button variant styling (solid+outline vs solid+ghost) -- must fit "artisan" feel
- Card styling (shadow vs border accent) -- "not a pixel too many" philosophy
- Typography mapping: serif (Lora) for meaning, sans-serif (Instrument Sans) for practical info -- Claude maps to heading/body usage
- Font weights selection -- balance flexibility vs load time
- Heading scale (sizes, line heights, letter spacing)
- Container max-width and responsive padding values
- Section wrapper vertical padding

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope

</user_constraints>

<phase_requirements>

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| FOND-01 | Static export configured (`output: 'export'`, `images.unoptimized: true`) | next.config.ts configuration pattern verified via official Next.js docs |
| FOND-02 | Tailwind CSS 4 theme tokens via `@theme` (palette ecru/sable/brun/terre/or/argile) | `@theme` directive with `--color-*` namespace verified via Tailwind CSS 4 official docs |
| FOND-03 | Google Fonts loaded via next/font/google (Lora + Instrument Sans) with CSS variables | `next/font/google` with `variable` option + `@theme inline` for Tailwind integration verified |
| FOND-04 | Dark mode CSS boilerplate stripped from globals.css | Current globals.css contains `prefers-color-scheme: dark` block that must be removed entirely |
| FOND-05 | Mobile-first responsive layout with Tailwind breakpoints | Tailwind CSS 4 default breakpoints (sm/md/lg/xl/2xl) work automatically, no config needed |
| FOND-06 | HTML lang attribute set to `fr` | Already present in current layout.tsx -- verify preserved during font setup |

</phase_requirements>

## Standard Stack

### Core (Already Installed)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.6 | Framework, static export, font optimization | Already installed, `output: 'export'` for static HTML |
| React | 19.2.4 | Component library | Already installed |
| Tailwind CSS | 4.2.1 | Utility CSS with `@theme` design tokens | Already installed via `@tailwindcss/postcss` |
| TypeScript | 5.9.3 | Type safety | Already installed |

### Supporting (No New Packages Needed for Phase 1)
Phase 1 requires zero new npm packages. All functionality comes from built-in Next.js and Tailwind CSS features.

### Not Needed
| Instead of | Why Not |
|------------|---------|
| `tailwind.config.ts` | Tailwind CSS 4 uses `@theme` in CSS, not JS config |
| Any CSS-in-JS library | Tailwind utility classes suffice |
| Component library (shadcn, etc.) | 4 simple primitives, hand-built to match artisan aesthetic |

## Architecture Patterns

### Recommended Project Structure (Phase 1 additions)
```
src/
├── app/
│   ├── globals.css          # @theme tokens, base styles (MODIFY)
│   ├── layout.tsx           # Font loading, CSS variables (MODIFY)
│   └── page.tsx             # Test page for primitives (MODIFY)
├── components/
│   └── ui/
│       ├── Button.tsx       # Primary + secondary variants (NEW)
│       ├── Card.tsx          # Reusable card primitive (NEW)
│       ├── Container.tsx     # Max-width + responsive padding (NEW)
│       └── Section.tsx       # ID anchor, padding, alternating bg (NEW)
next.config.ts               # Static export config (MODIFY)
```

### Pattern 1: Tailwind CSS 4 Design Tokens via @theme

**What:** Define all custom colors and font families in `globals.css` using the `@theme` directive. This replaces the Tailwind v3 `tailwind.config.ts` approach entirely.

**When to use:** Always in Tailwind CSS 4 -- this is the ONLY way to define custom theme values.

**Example:**
```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  /* Artisan Numerique palette */
  --color-ecru: #F5F0E8;
  --color-sable: #E8DCC8;
  --color-brun: #6B4C3B;
  --color-terre: #8B6914;
  --color-or: #C5973B;
  --color-argile: #B8754C;
}

@theme inline {
  /* Font families -- use inline because values reference CSS variables from next/font */
  --font-serif: var(--font-lora), ui-serif, Georgia, serif;
  --font-sans: var(--font-instrument), ui-sans-serif, system-ui, sans-serif;
}
```
Source: [Tailwind CSS Theme Variables docs](https://tailwindcss.com/docs/theme)

**Key detail:** Use `@theme inline` for fonts that reference CSS variables injected by `next/font/google`. Without `inline`, the CSS variable resolution fails because `var(--font-lora)` is resolved at the definition site, not the usage site. Colors use regular `@theme` because they are static hex values.

### Pattern 2: next/font/google with CSS Variables

**What:** Import Google Fonts, assign CSS variable names, apply to the `<html>` element so Tailwind can reference them.

**Example:**
```typescript
// src/app/layout.tsx
import { Lora, Instrument_Sans } from 'next/font/google';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${lora.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```
Source: [Next.js Font Optimization docs](https://nextjs.org/docs/app/getting-started/fonts)

**How it connects:** `next/font/google` injects `--font-lora` and `--font-instrument` as CSS variables on `<html>`. The `@theme inline` block in `globals.css` maps these to Tailwind's `--font-serif` and `--font-sans` namespaces. Result: `font-serif` and `font-sans` utility classes use Lora and Instrument Sans respectively.

### Pattern 3: Static Export Configuration

**What:** Configure Next.js for static HTML export with unoptimized images.

**Example:**
```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
```

**Why first:** This MUST be the very first change. Running `npm run build` validates the static export works. Any server-dependent code introduced later will fail at build time, catching issues early.

### Pattern 4: UI Primitives as Server Components

**What:** All four primitives (Button, Card, Section, Container) are Server Components -- no `"use client"` directive needed. They are pure presentational components with no state.

**Example (Section wrapper):**
```typescript
// src/components/ui/Section.tsx
interface SectionProps {
  id: string;
  children: React.ReactNode;
  alternate?: boolean;  // true = ecru background, false = white
  className?: string;
}

export function Section({ id, children, alternate = false, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`${alternate ? 'bg-ecru' : 'bg-white'} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {children}
      </div>
    </section>
  );
}
```

### Anti-Patterns to Avoid
- **Creating `tailwind.config.ts`:** Tailwind CSS 4 ignores it. Custom tokens silently fail to apply.
- **Adding `"use client"` to primitives:** These components have no state or event handlers. Keep them as Server Components.
- **Using `@theme` (not `inline`) for font variables:** CSS variable resolution will fail. Font utilities will render fallback fonts.
- **Keeping dark mode boilerplate:** 30-40% of mobile users see black background instead of the artisan palette.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font self-hosting | Manual @font-face declarations | `next/font/google` | Handles subsetting, preloading, zero CLS, privacy (no Google requests) |
| Responsive breakpoints | Custom media queries | Tailwind default breakpoints (sm/md/lg/xl) | Battle-tested values, consistent with ecosystem |
| Design token system | CSS custom properties manually | Tailwind `@theme` directive | Auto-generates utility classes (bg-ecru, text-brun, font-serif) |
| Static export | Custom build scripts | `output: 'export'` in next.config.ts | Native Next.js feature, Vercel auto-detects |

**Key insight:** Phase 1 is entirely configuration and thin wrappers. Every capability comes from built-in Next.js and Tailwind CSS 4 features. The only "code" is the four UI primitives, which are simple presentational components.

## Common Pitfalls

### Pitfall 1: Tailwind CSS 4 Config in Wrong Format
**What goes wrong:** Developer creates `tailwind.config.ts` with v3 syntax. Custom colors silently fail. `bg-ecru` does nothing.
**Why it happens:** Most tutorials and AI training data reference Tailwind v3.
**How to avoid:** Define tokens in `globals.css` using `@theme { --color-ecru: #F5F0E8; }`. No JS config file.
**Warning signs:** Custom utility classes apply no styling despite appearing in the HTML.

### Pitfall 2: @theme vs @theme inline for Fonts
**What goes wrong:** Fonts defined with regular `@theme` that reference CSS variables resolve at definition site, not usage site. Font utilities render fallback.
**Why it happens:** CSS variable scoping -- `var(--font-lora)` in `@theme` resolves where the theme variable is defined, where `--font-lora` may not exist.
**How to avoid:** Use `@theme inline` for font definitions that reference CSS variables from `next/font/google`.
**Warning signs:** `font-serif` renders system serif instead of Lora.

### Pitfall 3: Dark Mode Boilerplate Surviving
**What goes wrong:** The current `globals.css` has `prefers-color-scheme: dark` setting `--background: #0a0a0a`. Users with system dark mode see black background.
**Why it happens:** Boilerplate from `create-next-app` not stripped.
**How to avoid:** Remove the entire `@media (prefers-color-scheme: dark)` block and the generic body styles. Replace with project-specific base styles.
**Warning signs:** Test on phone with dark mode enabled.

### Pitfall 4: Static Export Not Configured Early
**What goes wrong:** Development proceeds with `next dev` (full server). At build time, server-dependent code causes failures.
**Why it happens:** `next dev` masks the static export constraint.
**How to avoid:** Add `output: 'export'` as the FIRST change. Run `npm run build` immediately to validate.
**Warning signs:** Build errors mentioning "output: export" incompatibility.

### Pitfall 5: Contrast Failures on Earth-Tone Palette
**What goes wrong:** Gold/argile used for text on light backgrounds fails WCAG AA.
**How to avoid:** Maintain the contrast matrix:
- brun on white: ~6.8:1 -- PASS AA
- brun on ecru: ~5.2:1 -- PASS AA
- brun on sable: ~4.5:1 -- borderline AA (verify carefully)
- or on ecru: ~2.8:1 -- FAIL (decorative only)
- white on brun: ~6.8:1 -- PASS AA (good for buttons)
**Warning signs:** Any text using or/argile/terre colors on light backgrounds.

## Code Examples

### Complete globals.css (Phase 1 target)
```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  /* Artisan Numerique palette */
  --color-ecru: #F5F0E8;
  --color-sable: #E8DCC8;
  --color-brun: #6B4C3B;
  --color-terre: #8B6914;
  --color-or: #C5973B;
  --color-argile: #B8754C;
}

@theme inline {
  --font-serif: var(--font-lora), ui-serif, Georgia, serif;
  --font-sans: var(--font-instrument), ui-sans-serif, system-ui, sans-serif;
}

body {
  color: theme(--color-brun);
  background-color: #ffffff;
}
```

### Complete layout.tsx (Phase 1 target)
```typescript
// src/app/layout.tsx
import type { Metadata } from "next";
import { Lora, Instrument_Sans } from 'next/font/google';
import "./globals.css";

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument',
});

export const metadata: Metadata = {
  title: "Un Bourguignon",
  description: "Site vitrine professionnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${lora.variable} ${instrumentSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

### Button Primitive (recommended structure)
```typescript
// src/components/ui/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  as?: 'button' | 'a';
  href?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  // Primary: brun background, white text
  // Secondary: transparent with brun border
  // Both: min-h-12 (48px tap target), font-sans, rounded
  // ...
}
```

### next.config.ts (Phase 1 target)
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
```

## State of the Art

| Old Approach (Tailwind v3) | Current Approach (Tailwind v4) | When Changed | Impact |
|---------------------------|-------------------------------|--------------|--------|
| `tailwind.config.ts` with `theme.extend.colors` | `@theme { --color-*: value }` in CSS | Tailwind CSS 4.0 (Jan 2025) | Config is CSS-native, no JS file needed |
| `content: ['./src/**/*.tsx']` in config | Automatic content detection | Tailwind CSS 4.0 | No content glob needed |
| `theme.extend.fontFamily` in JS | `@theme inline { --font-*: value }` in CSS | Tailwind CSS 4.0 | Fonts defined alongside colors in CSS |

**Deprecated/outdated:**
- `tailwind.config.ts` / `tailwind.config.js` -- Tailwind CSS 4 does not use these by default
- `darkMode: 'class'` config -- handled differently in v4, but irrelevant (no dark mode in this project)

## Open Questions

1. **Instrument Sans import name confirmation**
   - What we know: Google Fonts multi-word convention uses underscores in next/font/google (e.g., `Source_Sans_3`). Instrument Sans should be `Instrument_Sans`.
   - What's unclear: Not verified against the actual next/font type definitions.
   - Recommendation: The import will produce a TypeScript error at build time if wrong. Verify by running `npm run build` immediately after setting up fonts.

2. **METH-03 gold color reconciliation**
   - What we know: METH-03 specifies `#D4A574` for step numbers, but the palette has `or: #C5973B`.
   - What's unclear: Whether to add a second gold variant or adjust one value.
   - Recommendation: Add `--color-or-light: #D4A574` as a supplementary token for step numbers. Both are decorative golds, slightly different warmth. This is at Claude's discretion per CONTEXT.md.

3. **Lora and Instrument Sans -- variable font weight ranges**
   - What we know: Both are variable fonts on Google Fonts. Lora supports 400-700 weight range. Instrument Sans supports 400-700.
   - Recommendation: No `weight` parameter needed when calling `next/font/google` for variable fonts -- all weights in the range are automatically available.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual browser validation + `npm run build` |
| Config file | None -- no test framework installed |
| Quick run command | `npm run build` |
| Full suite command | `npm run build && npx serve out` |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| FOND-01 | Static export produces `out/` directory | build | `npm run build && test -d out` | N/A (build check) |
| FOND-02 | Tailwind palette classes apply correct colors | manual | Build + visual inspection of test page | N/A |
| FOND-03 | Lora + Instrument Sans render without FOUT | manual | Build + serve + browser network throttle | N/A |
| FOND-04 | No dark mode override on dark-mode device | manual | Build + serve + toggle system dark mode | N/A |
| FOND-05 | Layout responds correctly at 375px and 1280px | manual | Build + serve + DevTools responsive mode | N/A |
| FOND-06 | `<html lang="fr">` present | build | `npm run build && grep 'lang="fr"' out/index.html` | N/A |

### Sampling Rate
- **Per task commit:** `npm run build` (validates static export still works)
- **Per wave merge:** `npm run build && npx serve out` (visual inspection at 375px + 1280px)
- **Phase gate:** Build succeeds, test page renders all tokens and primitives correctly

### Wave 0 Gaps
- [ ] Test page (`src/app/page.tsx`) -- must display all color tokens, both fonts, and all 4 primitives for visual validation
- [ ] No automated test framework needed for Phase 1 -- all validation is build success + visual

## Sources

### Primary (HIGH confidence)
- [Tailwind CSS 4 Theme Variables](https://tailwindcss.com/docs/theme) -- `@theme` directive, `@theme inline`, color/font namespaces
- [Next.js Font Optimization](https://nextjs.org/docs/app/getting-started/fonts) -- `next/font/google` setup, CSS variables, `display: 'swap'`
- [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports) -- `output: 'export'` configuration

### Secondary (MEDIUM confidence)
- [Tailwind CSS 4 + Next.js font integration patterns](https://www.buildwithmatija.com/blog/how-to-use-custom-google-fonts-in-next-js-15-and-tailwind-v4) -- `@theme inline` for CSS variable fonts
- [Instrument Sans on Google Fonts](https://fonts.google.com/specimen/Instrument+Sans) -- availability confirmed
- Project research files: `.planning/research/PITFALLS.md`, `.planning/research/SUMMARY.md`

### Tertiary (LOW confidence)
- `Instrument_Sans` exact import name -- inferred from naming convention, not verified against type definitions

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- all packages already installed, versions confirmed in package.json
- Architecture: HIGH -- `@theme` directive and `next/font/google` patterns verified via official docs
- Pitfalls: HIGH -- current codebase inspected, dark mode boilerplate and empty config confirmed present
- Font integration: MEDIUM -- `@theme inline` pattern verified conceptually but `Instrument_Sans` import name not type-checked

**Research date:** 2026-03-16
**Valid until:** 2026-04-16 (stable stack, no fast-moving dependencies)
