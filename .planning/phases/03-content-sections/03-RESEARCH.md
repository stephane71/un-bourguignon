# Phase 3: Content Sections - Research

**Researched:** 2026-03-16
**Domain:** Next.js 16 static site -- 7 content sections with responsive layouts, inline SVG icons, next/image portrait
**Confidence:** HIGH

## Summary

Phase 3 builds 7 section components (Hero, A propos, Pour qui, Services, Methode, Benefices, Contact) that compose the full one-page narrative. All sections are Server Components with hardcoded content from `content/presentation_activite.md`. The existing UI primitives (Section, Card, Button, Container) plus established Tailwind CSS 4 theme tokens handle 80% of the work. The primary implementation work is: (1) creating 7 section components in `src/components/sections/`, (2) creating 6 new inline SVG icon components, (3) integrating the portrait via `next/image`, and (4) replacing the current design-system demo in `page.tsx` with the real section composition.

The codebase is clean and patterns are well-established from Phases 1 and 2. No external dependencies are needed. The main risks are: getting the Hero layout correct across breakpoints, handling the 5-card grid in Services, and ensuring all content is transcribed accurately with French accented characters.

**Primary recommendation:** Implement sections in narrative order (Hero first, Contact last), reusing existing primitives and following established icon/component patterns exactly.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Strict white/ecru alternation: Hero=white, A propos=ecru, Pour qui=white, Services=ecru, Methode=white, Benefices=ecru, Contact=white
- Use existing Section component with alternate prop
- Hero: distinct taller padding, desktop text-left/portrait-right, mobile portrait-above-text
- Portrait sizes: 200px mobile, 280px desktop
- CTA hierarchy: "Prendre contact" as solid primary Button, "Decouvrir mes services" as text link with arrow (not a button)
- Pour qui: 4 plain text-only cards, Card on-white variant with sable border, 2x2 grid on desktop
- Service cards: 5 cards with colored top border accent, on-ecru variant, 1/2/3 column responsive grid, last 2 left-aligned at 3-col
- Methode: two sub-blocks (stepper + formats table), step numbers Lora Bold gold #D4A574 36-48px, vertical mobile / horizontal desktop
- Benefices: 4 items with thin-line SVG icons, custom inline SVG components
- Contact: warm CTA heading, phone tel: and email mailto: as large tap-friendly blocks, LinkedIn/Facebook with existing icons
- New icons: Phone, Mail, Clock, Key, UserCheck, CoinStack -- inline SVG in src/components/icons/
- Zero external icon dependencies

### Claude's Discretion
- Exact Hero padding and typography scale
- A propos section layout (text flow, emphasis of key points)
- Stepper connector design (lines, arrows, dots between steps)
- Formats table styling (standard table, styled cards, or grid layout)
- Benefices icon selections (which 4 icons for: time saved, autonomy, single contact, fair pricing)
- Benefices layout (2x2 grid, single column, or horizontal strip)
- Contact section spacing and block styling
- Service card top border thickness and exact color (or vs argile)

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| HERO-01 | H1 with name + subtitle | Hero component, typography scale from UI-SPEC |
| HERO-02 | Slogan in italic | Lora italic, text-xl |
| HERO-03 | Circular portrait 200/280px | next/image with priority, rounded-full, existing 255x255 PNG |
| HERO-04 | CTA "Prendre contact" -> #contact | Button as="a" variant="primary" |
| HERO-05 | CTA "Decouvrir mes services" -> #services | Text link with arrow, not a Button |
| HERO-06 | Mobile portrait-above-text, desktop side-by-side | Flexbox column/row at lg breakpoint |
| APRO-01 | Section with content from presentation_activite.md section 1 | Section alternate, max-w-3xl prose |
| APRO-02 | Key points: independant, relation directe, deplacement, EI | Bold spans or dl within prose |
| POUR-01 | 4 problem cards | Card on-white, grid 1/2 columns |
| POUR-02 | Stacked mobile, 2x2 desktop | grid grid-cols-1 md:grid-cols-2 |
| POUR-03 | Content from presentation_activite.md section 2 | Verbatim transcription with accents |
| SERV-01 | 5 service domain cards | Card on-ecru with top border accent |
| SERV-02 | Each card: title + description + bullet list | H3 + p + ul structure |
| SERV-03 | 1-col mobile, 2-col tablet, 3-col desktop | grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 |
| SERV-04 | Content from presentation_activite.md section 3 | Verbatim transcription |
| METH-01 | 3-step stepper | Custom stepper layout with connectors |
| METH-02 | Vertical mobile, horizontal desktop | Flex column/row at lg breakpoint |
| METH-03 | Step numbers Lora Bold, or-light, 36-48px | font-serif font-bold text-or-light text-4xl lg:text-5xl |
| METH-04 | Formats table (consultation, mission, atelier, suivi) | HTML table with thead/th/tbody, overflow-x-auto wrapper |
| METH-05 | Content from presentation_activite.md section 4 | Verbatim transcription |
| BENE-01 | 4 benefits with thin-line SVG icons + Lora title + Instrument Sans text | New icon components + grid layout |
| BENE-02 | Content from presentation_activite.md section 5 | Verbatim transcription |
| CONT-01 | Phone tel:+33662461643, min 48px tap target | a href="tel:...", min-h-12, bg-brun styled block |
| CONT-02 | Email mailto:, clickable | a href="mailto:...", min-h-12, bordered block |
| CONT-03 | LinkedIn and Facebook with icons | Existing LinkedIn.tsx + Facebook.tsx components |
| CONT-04 | Mobile: stacked full-width | flex-col, max-w-md mx-auto |
| CONT-05 | No form -- direct contact only | Static content, no form elements |
| A11Y-04 | Alt attributes on all images | Portrait alt text, icons aria-hidden |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.6 | Framework, static export | Already configured with output: 'export' |
| React | 19.2.4 | UI library | Already installed |
| Tailwind CSS | 4.2.1 | Utility-first styling | Already configured with @theme tokens |
| next/image | (bundled) | Portrait image with priority loading | Built-in, works with unoptimized: true |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next/font/google | (bundled) | Lora + Instrument Sans self-hosted | Already configured in layout.tsx |

### Alternatives Considered
None. All decisions are locked. Zero new dependencies needed.

**Installation:**
```bash
# No new packages needed -- everything is already installed
```

## Architecture Patterns

### Recommended Project Structure
```
src/
  components/
    sections/           # NEW -- 7 section components
      HeroSection.tsx
      AProposSection.tsx
      PourQuiSection.tsx
      ServicesSection.tsx
      MethodeSection.tsx
      BeneficesSection.tsx
      ContactSection.tsx
    icons/              # EXISTING + 6 new icons
      Burger.tsx        # existing
      Close.tsx         # existing
      LinkedIn.tsx      # existing
      Facebook.tsx      # existing
      Phone.tsx         # NEW
      Mail.tsx          # NEW
      Clock.tsx         # NEW
      Key.tsx           # NEW
      UserCheck.tsx     # NEW
      CoinStack.tsx     # NEW
    ui/                 # EXISTING -- reuse as-is
      Button.tsx
      Card.tsx
      Section.tsx
      Container.tsx
  app/
    page.tsx            # REPLACE demo content with 7 section components
```

### Pattern 1: Section Component
**What:** Each section is a Server Component that wraps content in the existing `Section` primitive.
**When to use:** Every section component.
**Example:**
```typescript
// Source: existing Section.tsx + UI-SPEC contract
import { Section } from "@/components/ui/Section";

export function AProposSection() {
  return (
    <Section id="a-propos" alternate>
      <h2 className="font-serif text-xl lg:text-4xl font-bold">Qui suis-je ?</h2>
      {/* prose content */}
    </Section>
  );
}
```

### Pattern 2: Icon Component
**What:** Inline SVG with consistent API matching existing icons.
**When to use:** All 6 new icons.
**Example:**
```typescript
// Source: existing LinkedIn.tsx pattern
interface PhoneProps {
  className?: string;
  size?: number;
}

export function Phone({ className = "", size = 24 }: PhoneProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {/* path data */}
    </svg>
  );
}
```

**Note:** Benefices icons use stroke-based thin-line style (`fill="none"`, `stroke="currentColor"`, `strokeWidth={1.5}`) per BENE-01. Contact icons (Phone, Mail) should match this style for consistency. Existing LinkedIn/Facebook icons use `fill="currentColor"` -- that is the social icon convention and is fine to keep as-is.

### Pattern 3: Card with Top Border Accent (Service Cards)
**What:** Card on-ecru with a colored top border for visual distinction.
**When to use:** Services section only.
**Example:**
```typescript
<Card variant="on-ecru" className="border-t-3 border-or">
  <h3 className="font-serif text-xl font-bold">Facturation electronique</h3>
  <p className="mt-2 text-base leading-relaxed">...</p>
  <ul className="mt-3 space-y-1 text-base leading-relaxed">
    <li>-- Accompagnement a la mise en conformite</li>
  </ul>
</Card>
```

### Pattern 4: Page Composition
**What:** page.tsx imports and renders all 7 sections in order.
**Example:**
```typescript
import { HeroSection } from "@/components/sections/HeroSection";
import { AProposSection } from "@/components/sections/AProposSection";
// ... etc

export default function Home() {
  return (
    <>
      <HeroSection />
      <AProposSection />
      <PourQuiSection />
      <ServicesSection />
      <MethodeSection />
      <BeneficesSection />
      <ContactSection />
    </>
  );
}
```

**Note:** The `<main>` wrapper is already in `layout.tsx`, so page.tsx should use a fragment `<>` or no wrapper, not add another `<main>`.

### Anti-Patterns to Avoid
- **Adding "use client" to section components:** All 7 sections are static content with zero interactivity. They must remain Server Components. No useState, no useEffect, no event handlers.
- **Using Button component for the secondary CTA:** The context decision explicitly says "Decouvrir mes services" is a text link with arrow, NOT a button. Use a plain `<a>` tag.
- **Creating a shared data file for content:** Content is hardcoded in each component, transcribed from `presentation_activite.md`. No JSON/TS data layer -- keep it simple.
- **Using CSS Grid subgrid for stepper connectors:** Subgrid support is good but adds complexity. Simple flexbox with border connectors is sufficient.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Section wrapper with bg alternation | Custom section divs | Existing `Section` component with `alternate` prop | Already handles bg-ecru/bg-white, padding, Container |
| Card styling | Custom card divs | Existing `Card` component with variants | Already handles border, padding, rounded corners |
| Primary CTA button | Custom anchor styles | Existing `Button as="a"` | Already handles min-h-12, focus styles, hover |
| Image optimization | Manual img tags | `next/image` with priority | Handles lazy loading, sizing, alt attributes |

**Key insight:** Phase 1 and 2 built all the UI primitives needed. Phase 3 is pure composition -- assembling existing primitives with content.

## Common Pitfalls

### Pitfall 1: Portrait Image Sizing with next/image
**What goes wrong:** The portrait is 255x255 PNG but needs to display at 200px mobile / 280px desktop. Using `width={280} height={280}` on next/image will upscale on desktop (255 -> 280) causing blur.
**Why it happens:** The source image is smaller than the largest display size.
**How to avoid:** Either: (a) accept 255px as max (close enough to 280), or (b) provide a higher-res source. The current 255x255 at 73KB is fine for mobile (200px display = within source size). For desktop at 280px, the 255px source will be slightly upscaled -- acceptable given rounded-full crop and the priority is avoiding extra image weight. Use CSS to control display size: `w-[200px] h-[200px] lg:w-[280px] lg:h-[280px]` and let the image fill.
**Warning signs:** Blurry portrait on desktop retina displays.

### Pitfall 2: Hero Section Padding Override
**What goes wrong:** The existing Section component applies `py-16 sm:py-20 lg:py-24`. The Hero needs `py-20 sm:py-28 lg:py-32` (taller). Passing className to override may not work due to Tailwind class specificity.
**Why it happens:** Tailwind CSS does not guarantee override order for conflicting utility classes.
**How to avoid:** Use the Section component's `className` prop to add the custom padding, BUT also ensure the base padding classes are overridden. The cleanest approach: pass `className="!py-20 sm:!py-28 lg:!py-32"` using Tailwind's important modifier, OR don't use the Section component for Hero and instead build a custom section wrapper that reuses Container directly.
**Warning signs:** Hero has the same padding as other sections despite custom classes.

### Pitfall 3: French Accented Characters
**What goes wrong:** Content transcribed without accents (e.g., "methode" instead of "methode" or wrong encoding). The content source uses proper French: e, a, e, etc.
**Why it happens:** Copy-paste errors, or typing ASCII when Unicode is needed.
**How to avoid:** Copy text directly from `content/presentation_activite.md`. The file uses UTF-8 encoding. Verify accents render correctly in the browser.
**Warning signs:** Missing accents visible in rendered output.

### Pitfall 4: Service Card Grid Orphan at 3 Columns
**What goes wrong:** With 5 cards in a 3-column grid, the last row has 2 cards + 1 empty cell. If centering is applied, the last 2 cards shift to center.
**Why it happens:** Developers add `justify-items-center` or similar to the grid.
**How to avoid:** Decision is locked: natural grid flow, left-aligned. Just use `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` with no centering overrides. Cards 4 and 5 will naturally sit in columns 1 and 2, with column 3 empty.
**Warning signs:** Last row cards are centered instead of left-aligned.

### Pitfall 5: Stepper Connector Alignment
**What goes wrong:** Horizontal connectors between steps don't align with step numbers or look broken at different screen widths.
**Why it happens:** Mixing absolute positioning with flexbox, or using borders that don't span the gap.
**How to avoid:** Use a simple approach: a border-top line between step columns on desktop. On mobile, a border-left line on the left side of each step (except the first). Keep connectors decorative (sable color, thin) -- they don't need to be pixel-perfect.
**Warning signs:** Connectors overlap content or have gaps at certain breakpoints.

### Pitfall 6: Layout.tsx main Wrapper Duplication
**What goes wrong:** The current page.tsx wraps content in `<main>`. But layout.tsx already wraps `{children}` in `<main>`. Adding another `<main>` in page.tsx creates invalid HTML (nested main elements).
**Why it happens:** Not checking layout.tsx before modifying page.tsx.
**How to avoid:** page.tsx should return a fragment or div, NOT a `<main>`. The `<main>` is already in layout.tsx.
**Warning signs:** HTML validator reports nested `<main>` elements.

## Code Examples

### Hero Section Layout (Mobile-First)
```typescript
// Desktop: text left, portrait right. Mobile: portrait centered above text.
<Section id="hero" className="!py-20 sm:!py-28 lg:!py-32">
  <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
    {/* Portrait -- shown first on mobile (order-first), second on desktop */}
    <div className="lg:order-last flex-shrink-0">
      <Image
        src="/images/photo-portrait.png"
        alt="Stephane Maire, consultant numerique"
        width={280}
        height={280}
        className="rounded-full w-[200px] h-[200px] lg:w-[280px] lg:h-[280px]"
        priority
      />
    </div>
    {/* Text block */}
    <div className="text-center lg:text-left">
      <h1 className="font-serif text-4xl lg:text-5xl font-bold">Stephane Maire</h1>
      <p className="font-sans text-xl lg:text-2xl mt-3">Consultant numerique de proximite</p>
      <p className="font-serif text-xl italic mt-4">
        La methode d&apos;un expert, la proximite d&apos;un artisan.
      </p>
      <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-8">
        <Button as="a" href="#contact">Prendre contact</Button>
        <a href="#services" className="font-sans font-bold text-brun underline-offset-4 hover:underline inline-flex items-center gap-1 min-h-12">
          Decouvrir mes services &rarr;
        </a>
      </div>
    </div>
  </div>
</Section>
```

### Stepper (Methode Section)
```typescript
// Vertical on mobile, horizontal on desktop
<div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
  {steps.map((step, i) => (
    <div key={i} className="flex-1 relative">
      {/* Connector line (not on first step) */}
      {i > 0 && (
        <div className="hidden lg:block absolute top-6 -left-px w-full h-0.5 bg-sable -translate-x-full" />
      )}
      <span className="font-serif font-bold text-or-light text-4xl lg:text-5xl">
        {i + 1}
      </span>
      <h3 className="font-serif text-xl font-bold mt-2">{step.title}</h3>
      <p className="text-base leading-relaxed mt-2">{step.description}</p>
    </div>
  ))}
</div>
```

### Formats Table (Methode Section)
```typescript
<div className="overflow-x-auto mt-12 lg:mt-16">
  <table className="w-full text-left">
    <thead>
      <tr className="border-b-2 border-sable">
        <th scope="col" className="font-serif font-bold py-3 px-4">Format</th>
        <th scope="col" className="font-serif font-bold py-3 px-4">Duree</th>
        <th scope="col" className="font-serif font-bold py-3 px-4">Ideal pour</th>
      </tr>
    </thead>
    <tbody>
      {formats.map((f, i) => (
        <tr key={i} className="border-b border-sable">
          <td className="py-3 px-4 font-bold">{f.name}</td>
          <td className="py-3 px-4">{f.duration}</td>
          <td className="py-3 px-4">{f.ideal}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

### Contact Block (Phone)
```typescript
<a
  href="tel:+33662461643"
  className="flex items-center justify-center gap-3 min-h-12 w-full bg-brun text-white rounded-lg px-6 py-3 font-sans font-bold text-base hover:bg-brun/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2"
>
  <Phone size={20} />
  06 62 46 16 43
</a>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| tailwind.config.ts | @theme in CSS | Tailwind CSS 4 (2025) | Already done in globals.css |
| Pages Router | App Router | Next.js 13+ | Already using App Router |
| Client components everywhere | Server Components default | Next.js 13+ | All 7 sections are Server Components |
| External icon libraries (react-icons, lucide) | Inline SVG components | Project decision | Zero dependency, consistent API |

**Deprecated/outdated:**
- `tailwind.config.ts` -- not used in this project (Tailwind CSS 4 uses @theme)
- `next/image` optimization -- disabled via `unoptimized: true` for static export

## Open Questions

1. **Portrait upscaling on desktop retina**
   - What we know: Source is 255x255 PNG (73KB). Display size is 280px on desktop.
   - What's unclear: Whether 255px source at 280px CSS display looks acceptable on retina (would need ~560px for crisp 2x).
   - Recommendation: Accept current image for now. The circular crop and small size difference (255 vs 280) make it barely noticeable. If portrait looks blurry, user can provide a higher-res source. Alternatively, display at 255px on desktop instead of 280px.

2. **Hero Section padding override strategy**
   - What we know: Section component has fixed padding. Hero needs different padding.
   - What's unclear: Whether Tailwind important modifier (`!py-20`) works reliably with the Section component's existing classes.
   - Recommendation: Test `!py-*` approach first. Fallback: don't use Section for Hero, manually compose `<section>` + `<Container>` with custom padding.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None installed |
| Config file | none |
| Quick run command | `npm run build` (static export validates all components compile) |
| Full suite command | `npm run build && npm run lint` |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| HERO-01 | H1 with name + subtitle | build | `npm run build` | N/A (build validates) |
| HERO-03 | Portrait renders | build + manual | `npm run build` then visual check | N/A |
| HERO-06 | Responsive layout | manual-only | Visual check at 375px/1024px | N/A |
| SERV-03 | Grid columns responsive | manual-only | Visual check at 375px/768px/1024px | N/A |
| METH-02 | Stepper vertical/horizontal | manual-only | Visual check at 375px/1024px | N/A |
| CONT-01 | Phone tel: link | manual-only | Tap test on mobile device | N/A |
| A11Y-04 | Alt on images | lint | `npm run lint` (eslint jsx-a11y) | N/A |
| ALL | Components compile | build | `npm run build` | N/A |

### Sampling Rate
- **Per task commit:** `npm run build`
- **Per wave merge:** `npm run build && npm run lint`
- **Phase gate:** Build green + visual inspection of all 7 sections at mobile/desktop

### Wave 0 Gaps
- No test framework installed -- not needed for this phase. Build validation + lint + manual visual inspection are sufficient for static content components.
- ESLint with eslint-config-next provides basic jsx-a11y checks (alt attributes, heading order).

## Sources

### Primary (HIGH confidence)
- Project codebase: `src/components/ui/Section.tsx`, `Card.tsx`, `Button.tsx` -- actual component APIs
- Project codebase: `src/components/icons/LinkedIn.tsx` -- icon component pattern
- Project codebase: `src/app/layout.tsx` -- confirms main wrapper, font setup
- Project codebase: `src/app/globals.css` -- confirms @theme tokens, scroll-margin-top
- Project codebase: `content/presentation_activite.md` -- all section content source
- Project codebase: `public/images/photo-portrait.png` -- 255x255 PNG, 73KB
- `.planning/phases/03-content-sections/03-CONTEXT.md` -- all locked decisions
- `.planning/phases/03-content-sections/03-UI-SPEC.md` -- visual/interaction contracts
- `.planning/research/PITFALLS.md` -- known pitfalls for this stack

### Secondary (MEDIUM confidence)
- Next.js 16 next/image with static export -- `priority` prop triggers preload, works with unoptimized (training data)
- Tailwind CSS 4 important modifier (`!`) -- works for class override conflicts (training data)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - all packages already installed and configured, versions confirmed from package.json
- Architecture: HIGH - existing code patterns verified by reading actual source files
- Pitfalls: HIGH - codebase-specific issues identified from actual file inspection (portrait size, main wrapper, padding override)

**Research date:** 2026-03-16
**Valid until:** 2026-04-16 (stable -- no external dependencies, locked decisions)
