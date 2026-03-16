# Phase 4: SEO, Legal & Polish - Research

**Researched:** 2026-03-16
**Domain:** SEO metadata, JSON-LD structured data, legal compliance (France), performance optimization, accessibility, print CSS
**Confidence:** HIGH

## Summary

Phase 4 covers SEO metadata finalization, JSON-LD LocalBusiness structured data, a legal page (`/mentions-legales`), favicon generation, image optimization, accessibility hardening (contrast + reduced-motion), print stylesheet, and Lighthouse score targets. The existing codebase already has partial SEO metadata in `layout.tsx` (title, description, OG, Twitter card) -- the work is to complete and refine it rather than build from scratch.

The portrait image is already 72KB PNG at 255x255, which is under the 100KB target. WebP conversion may still improve this but is not critical. The main accessibility concern is that several color combinations in the palette fail WCAG AA contrast (notably `or`, `or-light`, and `argile` on light backgrounds). The `prefers-reduced-motion` support is partially in place (scroll-behavior already handled in `globals.css`).

**Primary recommendation:** Use Next.js file-based icon conventions for favicon/apple-icon, inject JSON-LD as a `<script>` tag in layout.tsx per official Next.js guidance, and keep all changes in CSS/HTML without adding new dependencies.

<user_constraints>

## User Constraints (from CONTEXT.md)

### Locked Decisions
- Page `/mentions-legales` with full legal content
- Responsable publication: Stephane Maire, Entreprise Individuelle
- Address: 2 rue des Lavoirs, 71390 Moroges
- SIRET: 940 152 887 00011
- Email: stephane-ei@un-bourguignon.com
- Telephone: 06 62 46 16 43
- Hebergeur: Vercel Inc., San Francisco, USA (official Vercel coordinates)
- No form, no cookies, no analytics -- simplified legal mentions
- JSON-LD LocalBusiness with: name, jobTitle ("Consultant numerique"), telephone, email, address (Moroges), sameAs (LinkedIn, Facebook)
- areaServed: France entiere (remote intervention)
- No openingHours -- contact by phone/email
- Services listed in JSON-LD (facturation electronique, outils numeriques, presence en ligne, formation IA, outils personnalises)
- Meta title: "Stephane Maire -- Consultant numerique de proximite" (already in layout.tsx, adjust to include Saone-et-Loire)
- SEO description already in place -- adjust for Saone-et-Loire localization
- Open Graph already in place -- verify completeness
- Verify semantic hierarchy H1 > H2 > H3
- Favicon: initials "SM" -- brown background (#5B3E31), ecru text (#F5F0E8), rounded square
- Formats: favicon.ico (16/32px), apple-touch-icon (180px), favicon SVG
- Print: hide header, footer, nav, CTA buttons; show main content; contact details visible at bottom; no background colors, optimize for B&W
- Portrait: convert PNG to WebP, target < 100KB (currently 72KB PNG -- already under target)
- Accessibility: audit contrast WCAG AA (>= 4.5:1), support prefers-reduced-motion

### Claude's Discretion
- Technical approach for favicon (SVG inline vs static file)
- Portrait compression strategy
- Print stylesheet details (margins, font sizes)
- prefers-reduced-motion implementation

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope

</user_constraints>

<phase_requirements>

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| SEO-01 | Meta title "Stephane Maire -- Consultant numerique de proximite \| Saone-et-Loire" | Modify existing `siteTitle` in layout.tsx to append "\| Saone-et-Loire" |
| SEO-02 | Meta description with local keywords and phone number | Modify existing `siteDescription` in layout.tsx |
| SEO-03 | Open Graph tags (title, description, locale fr_FR, type website) | Already in place -- verify completeness after title/desc update |
| SEO-04 | JSON-LD LocalBusiness (name, jobTitle, telephone, email, address, sameAs) | Script tag injection pattern documented below |
| SEO-05 | Semantic HTML with correct H1 > H2 > H3 hierarchy | Already correct -- one H1 in HeroSection, H2 per section, H3 for sub-items |
| SEO-06 | Legal page `/mentions-legales` (name, legal form, address, email, SIRET, host) | New page.tsx route using existing Container/Section primitives |
| A11Y-01 | Contrast WCAG AA (ratio >= 4.5:1) on all text/background combinations | Contrast audit completed -- several `or`/`argile` combos fail, see Pitfalls |
| A11Y-05 | Support prefers-reduced-motion (disable smooth scroll and transitions) | Scroll-behavior already handled; need to add transition disabling |
| PERF-01 | Lighthouse Performance >= 90 | Static export + minimal JS already favorable; WebP portrait helps LCP |
| PERF-02 | Lighthouse Accessibility >= 90 | Contrast fixes + semantic HTML + ARIA already in place |
| PERF-03 | Lighthouse SEO >= 95 | Meta tags + JSON-LD + semantic HTML covers this |
| PERF-04 | LCP mobile 4G < 2.5s | Portrait image optimization + font display swap already in place |
| PERF-05 | Images optimized WebP, portrait < 100KB | Portrait is 72KB PNG -- WebP will reduce further |
| POLI-01 | Print-friendly stylesheet | @media print rules in globals.css |
| POLI-02 | Favicon initials "SM" in Artisan Numerique palette | File-based favicon convention in Next.js app directory |

</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.6 | Framework -- metadata API, file-based icons | Already in project |
| Tailwind CSS | 4.2.1 | Utility-first CSS including print media | Already in project |

### Supporting
| Tool | Purpose | When to Use |
|------|---------|-------------|
| `next/og` (ImageResponse) | Programmatic icon generation at build time | Favicon/apple-icon generation |
| `sips` (macOS) or `cwebp` | WebP conversion of portrait | Build/prep step for image optimization |

### No New Dependencies Needed
This phase requires **zero new npm packages**. All work uses:
- Next.js built-in metadata API and file conventions
- CSS `@media print` and `@media (prefers-reduced-motion)`
- Static JSON-LD script injection (no library needed)
- Native image tools for WebP conversion

## Architecture Patterns

### Recommended File Structure
```
src/app/
  layout.tsx             # Update metadata + add JSON-LD script
  favicon.ico            # Static favicon file (16x16 or 32x32)
  icon.svg               # SVG icon for modern browsers
  apple-icon.png         # Apple touch icon (180x180)
  mentions-legales/
    page.tsx             # Legal page (Server Component)
  globals.css            # Add @media print + extend prefers-reduced-motion
public/
  images/
    photo-portrait.webp  # Optimized WebP portrait (new)
    photo-portrait.png   # Keep original as fallback
```

### Pattern 1: JSON-LD Injection in Layout
**What:** Add LocalBusiness structured data as a `<script type="application/ld+json">` tag
**When to use:** Site-wide structured data that applies to all pages
**Source:** [Next.js JSON-LD Guide](https://nextjs.org/docs/app/guides/json-ld)

```typescript
// In layout.tsx, inside the <body> or <head> via a component
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Stephane Maire',
  jobTitle: 'Consultant numerique',
  telephone: '+33662461643',
  email: 'stephane-ei@un-bourguignon.com',
  url: 'https://un-bourguignon.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2 rue des Lavoirs',
    addressLocality: 'Moroges',
    postalCode: '71390',
    addressCountry: 'FR',
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  sameAs: [
    'https://www.linkedin.com/in/stephanemaire71',
    'https://www.facebook.com/stephane.maire1',
  ],
};

// In the JSX return:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
  }}
/>
```

### Pattern 2: File-Based Favicon in Next.js App Directory
**What:** Place icon files directly in `src/app/` for automatic `<link>` tag generation
**When to use:** Static favicons and app icons
**Source:** [Next.js App Icons](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)

Three files needed:
1. `src/app/favicon.ico` -- auto-generates `<link rel="icon" href="/favicon.ico" sizes="any" />`
2. `src/app/icon.svg` -- auto-generates `<link rel="icon" href="/icon.svg" type="image/svg+xml" />`
3. `src/app/apple-icon.png` -- auto-generates `<link rel="apple-touch-icon" href="/apple-icon.png" />`

**Recommendation for "SM" favicon:** Create the SVG manually as a static file (`icon.svg`) and convert to `.ico` and `.png` for the other formats. This is simpler and more controllable than using `ImageResponse` for the specific rounded-square "SM" design. The SVG approach gives pixel-perfect control at all sizes.

### Pattern 3: Mentions Legales Page
**What:** Static Server Component page at `/mentions-legales`
**When to use:** Legal compliance page

```typescript
// src/app/mentions-legales/page.tsx
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Mentions legales -- Stephane Maire',
  description: 'Mentions legales du site un-bourguignon.com',
};

export default function MentionsLegales() {
  return (
    <Section>
      <Container>
        <h1>Mentions legales</h1>
        {/* Legal content sections */}
      </Container>
    </Section>
  );
}
```

### Pattern 4: Print Stylesheet
**What:** `@media print` rules in globals.css
**Source:** Standard CSS print media pattern

```css
@media print {
  header, footer, nav,
  .no-print {
    display: none !important;
  }

  body {
    color: #000 !important;
    background: #fff !important;
  }

  a[href]::after {
    content: none; /* Don't print URLs after links */
  }

  /* Show contact info block for print */
  .print-contact {
    display: block !important;
  }
}
```

### Pattern 5: Prefers-Reduced-Motion
**What:** Disable all CSS transitions and animations for users who prefer reduced motion
**Already partially in place:** `scroll-behavior: auto` is set. Need to also disable transitions.

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Anti-Patterns to Avoid
- **Adding `schema-dts` for type safety:** Overkill for a single JSON-LD object. Type the object manually.
- **Using `ImageResponse` for favicon.ico:** `ImageResponse` cannot generate `.ico` files. Use static files.
- **Putting JSON-LD in `<head>` via metadata API:** Next.js metadata API does not support JSON-LD. Use `<script>` tag in component body.
- **Separate print.css file:** Not needed for a simple site. Inline `@media print` in globals.css is cleaner with Tailwind.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Favicon generation | Custom canvas/sharp pipeline | Static SVG + `sips`/ImageMagick conversion | Simpler, deterministic, no runtime dependency |
| SEO meta tags | Manual `<meta>` tags in `<head>` | Next.js `Metadata` export in layout.tsx | Framework handles deduplication, encoding, OG protocol |
| JSON-LD validation | Manual testing | Google Rich Results Test + Schema Markup Validator | Authoritative validation tools |
| WebP conversion | npm image processing library | `sips` (macOS) or `cwebp` CLI | One-time build step, no runtime cost |
| Contrast checking | Manual calculation | Browser DevTools accessibility panel or WebAIM checker | Built-in tools are faster and more reliable |

## Common Pitfalls

### Pitfall 1: Color Contrast Failures
**What goes wrong:** Lighthouse accessibility score drops below 90 due to WCAG AA contrast failures.
**Why it happens:** The project palette has several problematic combinations.
**Contrast audit results (computed):**

| Text Color | Background | Ratio | AA Normal (4.5:1) | AA Large (3:1) |
|-----------|-----------|-------|-------------------|----------------|
| brun on white | | 7.71 | PASS | PASS |
| brun on ecru | | 6.80 | PASS | PASS |
| brun on sable | | 5.70 | PASS | PASS |
| terre on white | | 5.09 | PASS | PASS |
| terre on ecru | | 4.48 | FAIL | PASS |
| or on white | | 2.67 | FAIL | FAIL |
| or on ecru | | 2.35 | FAIL | FAIL |
| or-light on white | | 2.23 | FAIL | FAIL |
| or-light on brun | | 3.47 | FAIL | PASS |
| argile on white | | 3.69 | FAIL | PASS |
| white on brun | | 7.71 | PASS | PASS |

**How to avoid:**
- `or` (#C5973B) and `or-light` (#D4A574) must ONLY be used for large text (>= 18pt / 24px bold) or decorative elements, never for body text.
- `terre` (#8B6914) on ecru (#F5F0E8) at 4.48 is just below 4.5:1 -- needs darkening or must only be used for large text.
- `argile` (#B8754C) on white at 3.69 fails normal text but passes large text.
- The step numbers in Methode section use `or-light` at 36-48px bold -- this passes large text AA (3:1) with 3.47 ratio on brun, but barely. Verify actual usage context.
**Warning signs:** Lighthouse accessibility audit flags "Background and foreground colors do not have a sufficient contrast ratio."

### Pitfall 2: JSON-LD Not Validated
**What goes wrong:** JSON-LD passes syntax check but fails Google Rich Results Test due to missing required fields or wrong types.
**Why it happens:** Schema.org has required (`name`, `address`) and recommended (`telephone`, `url`, `geo`) properties. Missing `address` is a hard failure.
**How to avoid:** Always validate with Google Rich Results Test (https://search.google.com/test/rich-results) after implementation. Include `@type: PostalAddress` for the address object.

### Pitfall 3: Static Export + Dynamic Features
**What goes wrong:** Features that require a server (API routes, server actions) fail silently in `output: 'export'` mode.
**Why it happens:** Next.js static export generates static HTML at build time.
**How to avoid:** All Phase 4 work is purely static (metadata, CSS, JSON-LD, static pages). No server features needed. But do NOT attempt to use `generateMetadata` dynamically or server-side redirects for the mentions-legales page.

### Pitfall 4: Favicon Not Appearing After Deployment
**What goes wrong:** Browser caches old favicon, or Next.js doesn't pick up new icon files.
**Why it happens:** Browsers aggressively cache favicons. Next.js file conventions require exact naming.
**How to avoid:** Use exact file names (`favicon.ico`, `icon.svg`, `apple-icon.png`) in `src/app/`. Clear browser cache when testing. Verify in build output that icon link tags appear in HTML.

### Pitfall 5: Print Stylesheet Missing Contact Details
**What goes wrong:** User prints the page but contact information is hidden because it's in the footer (which is hidden for print).
**How to avoid:** Create a print-only contact block that is `display: none` on screen but `display: block` in `@media print`. Or use a CSS approach that keeps the contact section visible while hiding only the footer wrapper.

## Code Examples

### Complete JSON-LD LocalBusiness Object

```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Stephane Maire',
  jobTitle: 'Consultant numerique de proximite',
  description: 'Consultant numerique independant pour artisans, commercants et petits entrepreneurs en Saone-et-Loire et partout en France.',
  telephone: '+33662461643',
  email: 'stephane-ei@un-bourguignon.com',
  url: 'https://un-bourguignon.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2 rue des Lavoirs',
    addressLocality: 'Moroges',
    postalCode: '71390',
    addressRegion: 'Saone-et-Loire',
    addressCountry: 'FR',
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  sameAs: [
    'https://www.linkedin.com/in/stephanemaire71',
    'https://www.facebook.com/stephane.maire1',
  ],
  knowsAbout: [
    'Facturation electronique',
    'Outils numeriques de gestion',
    'Presence en ligne locale',
    'Formation intelligence artificielle',
    'Creation d\'outils personnalises',
  ],
};
```

### SVG Favicon Template ("SM" Initials)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#5B3E31"/>
  <text x="16" y="22" text-anchor="middle" font-family="Georgia, serif"
        font-size="16" font-weight="bold" fill="#F5F0E8">SM</text>
</svg>
```

### Updated Metadata Export

```typescript
const siteTitle = 'Stephane Maire -- Consultant numerique de proximite | Saone-et-Loire';
const siteDescription = 'Consultant numerique independant en Saone-et-Loire pour artisans, commercants et TPE. Facturation electronique, outils de gestion, presence en ligne, formation IA. Contactez-moi au 06 62 46 16 43.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL('https://un-bourguignon.com'),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://un-bourguignon.com',
    siteName: 'Stephane Maire',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
  },
};
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual `<link>` tags for favicons | File-based icon conventions in `src/app/` | Next.js 13.3+ | Auto-generates correct link tags |
| `next-seo` package | Built-in `Metadata` export | Next.js 13+ | No external dependency needed |
| Separate print.css file | `@media print` in main CSS | Standard practice | Fewer HTTP requests, co-located |
| `react-helmet` for meta | Next.js metadata API | Next.js 13+ | Framework-native, SSG-compatible |

## Open Questions

1. **Vercel official coordinates for legal page**
   - What we know: Vercel Inc., San Francisco, USA
   - What's unclear: Exact street address and contact details for French legal requirements
   - Recommendation: Use "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA" (their registered address) or their official website URL. Verify at deploy time.

2. **Portrait WebP conversion necessity**
   - What we know: Portrait is 72KB PNG at 255x255 -- already under 100KB target
   - What's unclear: Whether WebP conversion will meaningfully improve LCP given the small file size
   - Recommendation: Convert anyway -- WebP will likely bring it to ~30-40KB, improving mobile 4G load time. Use `<picture>` with WebP source and PNG fallback, or just replace with WebP since all modern browsers support it.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Lighthouse CLI + manual validation |
| Config file | None -- Lighthouse runs against built output |
| Quick run command | `npx next build && npx serve out` then Lighthouse in Chrome DevTools |
| Full suite command | `npx next build && npx @lhci/cli autorun` (if configured) |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| SEO-01 | Meta title contains "Saone-et-Loire" | smoke | `npx next build && grep -l "Saone-et-Loire" out/index.html` | No -- Wave 0 |
| SEO-02 | Meta description with phone number | smoke | `grep "06 62 46 16 43" out/index.html` | No -- Wave 0 |
| SEO-03 | OG tags present | smoke | `grep "og:title" out/index.html` | No -- Wave 0 |
| SEO-04 | JSON-LD LocalBusiness valid | manual | Google Rich Results Test on deployed URL | N/A -- manual |
| SEO-05 | Heading hierarchy H1>H2>H3 | smoke | `grep -c "<h1" out/index.html` returns 1 | No -- Wave 0 |
| SEO-06 | Mentions legales page exists | smoke | `test -f out/mentions-legales/index.html` | No -- Wave 0 |
| A11Y-01 | Contrast WCAG AA | manual | Lighthouse accessibility audit | N/A -- manual |
| A11Y-05 | prefers-reduced-motion support | manual | Chrome DevTools rendering emulation | N/A -- manual |
| PERF-01 | Lighthouse Performance >= 90 | manual | Chrome Lighthouse mobile audit | N/A -- manual |
| PERF-02 | Lighthouse Accessibility >= 90 | manual | Chrome Lighthouse mobile audit | N/A -- manual |
| PERF-03 | Lighthouse SEO >= 95 | manual | Chrome Lighthouse mobile audit | N/A -- manual |
| PERF-04 | LCP mobile < 2.5s | manual | Chrome Lighthouse mobile audit | N/A -- manual |
| PERF-05 | Portrait optimized WebP < 100KB | smoke | `test $(stat -f%z public/images/photo-portrait.webp) -lt 102400` | No -- Wave 0 |
| POLI-01 | Print stylesheet hides nav/footer | manual | Chrome print preview | N/A -- manual |
| POLI-02 | Favicon SM appears | smoke | `test -f src/app/favicon.ico` | No -- Wave 0 |

### Sampling Rate
- **Per task commit:** `npx next build` (verify build succeeds with new files)
- **Per wave merge:** `npx next build && npx serve out -l 3000` + manual Lighthouse audit
- **Phase gate:** Full Lighthouse audit on mobile: Performance >= 90, Accessibility >= 90, SEO >= 95

### Wave 0 Gaps
- [ ] No automated test framework installed -- all validation is build-output grep or manual Lighthouse
- [ ] Smoke tests can be run as shell commands against `out/` directory after build
- [ ] Lighthouse CI (`@lhci/cli`) not installed -- manual Chrome DevTools audit is sufficient for this project

## Sources

### Primary (HIGH confidence)
- [Next.js JSON-LD Guide](https://nextjs.org/docs/app/guides/json-ld) - Official pattern for JSON-LD injection (v16.1.6, updated 2026-02-27)
- [Next.js App Icons File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons) - favicon, icon, apple-icon placement (v16.1.6, updated 2026-02-27)
- [Google LocalBusiness Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business) - Required/recommended properties
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness) - Full property reference

### Secondary (MEDIUM confidence)
- Contrast ratio calculations -- computed programmatically from project color tokens using WCAG 2.1 relative luminance formula

### Tertiary (LOW confidence)
- Vercel Inc. registered address -- needs verification at implementation time

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - No new dependencies, all Next.js built-in features verified against v16.1.6 docs
- Architecture: HIGH - Patterns directly from Next.js official documentation
- Pitfalls: HIGH - Contrast ratios computed from actual project colors; JSON-LD requirements from Google docs
- Legal content: MEDIUM - French legal requirements for EI are well-documented but Vercel hosting details need verification

**Research date:** 2026-03-16
**Valid until:** 2026-04-16 (stable domain, unlikely to change)
