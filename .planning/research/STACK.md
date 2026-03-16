# Technology Stack

**Project:** Site Vitrine -- Stephane Maire EI
**Researched:** 2026-03-16
**Mode:** Subsequent milestone (existing base stack in place)

## Existing Stack (Not Re-Researched)

Already installed and validated. These are fixed constraints:

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | Framework (App Router) |
| React | 19.2.4 | UI library |
| TypeScript | 5.9.3 | Type safety |
| Tailwind CSS | 4.2.1 | Utility-first styling |
| PostCSS | 8.5.8 | CSS transformations |
| ESLint | 9.39.4 | Linting (flat config) |
| Node.js | 24.11.0 | Runtime |

## Recommended Additions

### Static Export Configuration

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `output: 'export'` in next.config.ts | built-in | Static HTML/CSS/JS generation | Required by project constraints. Outputs to `out/` folder. Vercel serves static assets directly. No server needed. |
| `images.unoptimized: true` in next.config.ts | built-in | Disable server-side image optimization | The default `next/image` loader requires a Node.js server at runtime. Static export does not have one. Setting `unoptimized: true` globally tells all `<Image>` components to serve images as-is without server-side transforms. |

**Confidence:** HIGH -- verified against official Next.js 16.1.6 docs (2026-02-27).

**next.config.ts should become:**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

**What this means in practice:**
- `next build` produces an `out/` directory with pure HTML/CSS/JS
- No API routes, no server actions, no ISR, no dynamic routes without `generateStaticParams()`
- Image optimization must happen at build time (pre-optimized WebP files) or via CSS, not at runtime
- Vercel detects `output: 'export'` and serves as static site automatically

### Font Optimization (next/font/google)

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `next/font/google` | built-in (Next.js 16) | Self-host Google Fonts at build time | Zero external requests to Google at runtime. No layout shift (font-display: swap handled automatically). Fonts served from same domain as the site. Privacy-compliant (no cookies, no third-party requests). |

**Confidence:** HIGH -- verified against official Next.js 16.1.6 font docs.

**Fonts to load:**

- **Lora** (variable font) -- serif, for headings and emotional text. Subset: `latin`.
- **Instrument Sans** (variable font) -- sans-serif, for body text and practical information. Subset: `latin`.

**Implementation pattern (CSS variables for Tailwind CSS 4 integration):**

```typescript
// src/app/layout.tsx
import { Lora, Instrument_Sans } from 'next/font/google'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${lora.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

Then in Tailwind CSS 4 (via `@theme` in `globals.css`):

```css
@import "tailwindcss";

@theme {
  --font-serif: var(--font-lora), serif;
  --font-sans: var(--font-instrument-sans), sans-serif;
}
```

This gives you `font-serif` and `font-sans` utility classes in Tailwind.

**Important:** Lora and Instrument Sans are both variable fonts on Google Fonts. Variable fonts do not require specifying `weight` -- all weights are included automatically. This keeps the import clean and gives full weight range.

### Image Handling (next/image with static export)

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `next/image` with `unoptimized` | built-in | Responsive images with layout shift prevention | Even with `unoptimized: true`, next/image still provides: automatic `width`/`height` for CLS prevention, lazy loading via native `loading="lazy"`, `srcSet` and `sizes` attributes for responsive images, `priority` prop for LCP images. |
| Static import for local images | built-in | Auto-detect dimensions | Importing images as ES modules (e.g., `import portrait from './portrait.webp'`) lets Next.js auto-detect width/height at build time, and provides automatic `blurDataURL` for placeholder blur-up. |

**Confidence:** HIGH -- verified against official Next.js 16.1.6 image component API reference.

**Pre-optimization strategy (since runtime optimization is unavailable):**

1. Store original images in `public/images/`
2. Pre-convert to WebP format before committing (use `cwebp` or Squoosh CLI)
3. Provide images at 2x resolution for Retina displays (e.g., 560px wide image for 280px display)
4. Use `priority` prop on the hero portrait image (it is the LCP element)
5. Use `sizes` prop to tell the browser the actual display size

**Portrait image example:**

```tsx
import Image from 'next/image'

<Image
  src="/images/portrait.webp"
  alt="Stephane Maire, consultant numerique"
  width={560}
  height={560}
  priority
  sizes="(max-width: 640px) 200px, 280px"
  className="rounded-full"
/>
```

### SEO: Metadata API

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js Metadata API | built-in | Title, description, Open Graph, robots | Type-safe metadata export from `layout.tsx` and `page.tsx`. Generates all `<head>` tags automatically. No third-party SEO library needed. |
| `metadataBase` | built-in | Base URL for OG images and canonical URLs | Required for absolute URL generation in Open Graph and Twitter cards. |

**Confidence:** HIGH -- verified against official Next.js 16.1.6 generateMetadata API reference.

**Implementation pattern:**

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stephane-maire.fr'), // production URL
  title: {
    default: 'Stephane Maire | Consultant Numerique en Saone-et-Loire',
    template: '%s | Stephane Maire',
  },
  description: 'Accompagnement numerique pour micro-entrepreneurs et artisans en Saone-et-Loire. Site web, outils, presence en ligne.',
  openGraph: {
    title: 'Stephane Maire | Consultant Numerique',
    description: 'La methode d\'un expert, la proximite d\'un artisan.',
    url: '/',
    siteName: 'Stephane Maire - Consultant Numerique',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stephane Maire - Consultant Numerique en Saone-et-Loire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephane Maire | Consultant Numerique',
    description: 'Accompagnement numerique pour micro-entrepreneurs et artisans.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: '/',
  },
}
```

### SEO: JSON-LD Structured Data

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `schema-dts` | ^1.1.2 (LOW confidence on exact version) | TypeScript types for Schema.org | Type-safe JSON-LD authoring. Recommended by Next.js official docs. Prevents typos in schema property names. Dev dependency only -- zero runtime cost. |
| `<script type="application/ld+json">` | built-in | Render structured data | Official Next.js pattern: render as `<script>` tag with `dangerouslySetInnerHTML`. Sanitize `<` characters as `\u003c` to prevent XSS. |

**Confidence:** HIGH for the pattern (official Next.js docs). LOW for `schema-dts` exact latest version (could not verify via npm registry).

**LocalBusiness schema for this project:**

```typescript
import type { LocalBusiness, WithContext } from 'schema-dts'

const jsonLd: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Stephane Maire - Consultant Numerique',
  description: 'Accompagnement numerique pour micro-entrepreneurs et artisans',
  url: 'https://www.stephane-maire.fr',
  telephone: '+33XXXXXXXXX',
  email: 'contact@stephane-maire.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Moroges',
    postalCode: '71390',
    addressRegion: 'Bourgogne-Franche-Comte',
    addressCountry: 'FR',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 46.7833,
      longitude: 4.7333,
    },
    geoRadius: '50000',
  },
  priceRange: '$$',
}
```

Rendered in the page component:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
  }}
/>
```

### File-Based Metadata

| File | Location | Purpose |
|------|----------|---------|
| `favicon.ico` | `src/app/favicon.ico` | Browser tab icon (initiales "SM") |
| `opengraph-image.jpg` | `src/app/opengraph-image.jpg` | Social media share image (1200x630) |
| `robots.txt` | `src/app/robots.ts` (generated) | Search engine directives |
| `sitemap.xml` | `src/app/sitemap.ts` (generated) | Search engine sitemap |

**Confidence:** HIGH -- file-based metadata is a core Next.js App Router convention.

### Accessibility

No additional libraries needed. Built with:

| Pattern | How | Why |
|---------|-----|-----|
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` | Screen readers navigate by landmarks |
| ARIA labels | `aria-label` on navigation, `aria-current="page"` on active link | Required for anchor navigation |
| Skip to content link | Hidden link at top of page | Keyboard users skip nav |
| Focus management | Tailwind `focus-visible:` utilities | Visible focus rings for keyboard, hidden for mouse |
| Color contrast | WCAG AA >= 4.5:1 ratio | Project constraint |
| Touch targets | min 48px height | Project constraint |
| `prefers-reduced-motion` | CSS `@media (prefers-reduced-motion: reduce)` | Disable animations for users who request it |

**Confidence:** HIGH -- these are web standards, not library-specific.

### Animation / Scroll (Optional)

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| CSS `scroll-behavior: smooth` | built-in | Smooth anchor scrolling | Zero JS, zero bundle size. Applied to `<html>` element. Sufficient for anchor navigation on a one-page site. |
| CSS `@keyframes` + Tailwind `animate-*` | built-in | Fade-in, slide-up on scroll | Tailwind CSS 4 includes built-in animation utilities. For scroll-triggered animations, use `IntersectionObserver` in a small client component (~20 lines). No library needed. |

**Do NOT use:**
- **Framer Motion / Motion** -- adds ~30-50KB to bundle for animations that CSS can handle. Overkill for a simple showcase site targeting Lighthouse >= 90.
- **GSAP** -- even heavier, designed for complex timeline animations. Not needed here.
- **AOS (Animate On Scroll)** -- abandoned library, last meaningful update 2019. jQuery-era thinking.

**Confidence:** MEDIUM -- the "no animation library" recommendation is an opinionated choice for this specific project (performance-first, simple animations). If complex staggered animations are desired later, Motion (~30KB) would be the right choice.

**Scroll-triggered animation pattern (zero dependencies):**

```tsx
'use client'
import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}
```

### Icon Library

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Lucide React | ^0.460.0 (LOW confidence on exact version) | SVG icons for services, method, benefits | Tree-shakeable (only imports used icons). Consistent thin line style matches the "trait fin" design spec. MIT licensed. Works as React components with TypeScript types. |

**Confidence:** MEDIUM -- Lucide React is the standard choice for Next.js projects in 2025-2026. Exact latest version not verified.

**Alternative considered:** `react-icons` -- larger package, includes multiple icon sets (FontAwesome, Material, etc.). Unnecessary breadth for this project which needs one consistent style.

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Animation | CSS + IntersectionObserver | Framer Motion / Motion | 30-50KB bundle for simple fade-ins. Performance target is Lighthouse >= 90 on mobile 4G. |
| Icons | Lucide React | react-icons | Too many icon sets bundled. Inconsistent visual style. Lucide is focused and tree-shakeable. |
| SEO | Next.js Metadata API | next-seo | Redundant. The Metadata API in App Router covers everything next-seo did. next-seo is a Pages Router-era library. |
| JSON-LD types | schema-dts | Hand-typed objects | schema-dts provides compile-time validation of Schema.org types. Small dev dependency, zero runtime. |
| Image optimization | Pre-optimized WebP + unoptimized | Custom loader (Cloudinary, etc.) | No remote images. All images are local (portrait, OG image). Pre-optimization is simpler and has zero runtime cost. |
| CSS framework | Tailwind CSS 4 (existing) | CSS Modules, Styled Components | Already installed. Utility-first is ideal for responsive mobile-first design with design tokens. |
| Font loading | next/font/google | Manual @font-face | next/font handles self-hosting, subsetting, font-display, and CLS prevention automatically. |

## Installation

```bash
# Runtime dependency (only if using schema-dts for typed JSON-LD)
# schema-dts is actually a dev dependency -- types only, zero runtime
npm install -D schema-dts

# Icons
npm install lucide-react
```

That is all. The rest is built into Next.js 16.1.6 and Tailwind CSS 4.2.1.

**No other runtime dependencies are needed for this project.**

## Configuration Changes Required

### next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### globals.css (Tailwind CSS 4 theme)

```css
@import "tailwindcss";

@theme {
  /* Fonts */
  --font-serif: var(--font-lora), ui-serif, Georgia, serif;
  --font-sans: var(--font-instrument-sans), ui-sans-serif, system-ui, sans-serif;

  /* Color palette: "Artisan Numerique" */
  /* Define custom colors here -- exact values TBD from design spec */
}
```

### package.json scripts update

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "npx serve out",
    "lint": "next lint"
  }
}
```

Note: `next start` does not work with static export. Use `npx serve out` or similar for local preview of the built site. On Vercel, this is handled automatically.

## Sources

- Next.js 16.1.6 Static Exports guide: https://nextjs.org/docs/app/guides/static-exports (verified 2026-02-27)
- Next.js 16.1.6 Font Optimization: https://nextjs.org/docs/app/getting-started/fonts (verified 2026-02-27)
- Next.js 16.1.6 Image Component API: https://nextjs.org/docs/app/api-reference/components/image (verified 2026-02-27)
- Next.js 16.1.6 Metadata API: https://nextjs.org/docs/app/api-reference/functions/generate-metadata (verified 2026-02-27)
- Next.js 16.1.6 JSON-LD guide: https://nextjs.org/docs/app/guides/json-ld (verified 2026-02-27)
- Next.js 16.1.6 Metadata and OG images: https://nextjs.org/docs/app/getting-started/metadata-and-og-images (verified 2026-02-27)

## Confidence Assessment

| Area | Confidence | Reason |
|------|------------|--------|
| Static export config | HIGH | Verified against official Next.js 16.1.6 docs |
| Font optimization | HIGH | Verified against official Next.js 16.1.6 docs |
| Image handling | HIGH | Verified against official Next.js 16.1.6 Image API reference |
| Metadata / SEO | HIGH | Verified against official Next.js 16.1.6 generateMetadata reference |
| JSON-LD pattern | HIGH | Verified against official Next.js 16.1.6 JSON-LD guide |
| schema-dts version | LOW | Could not verify latest version via npm registry |
| Lucide React version | LOW | Could not verify latest version via npm registry |
| Animation recommendation | MEDIUM | Opinionated choice based on project constraints, not verified ecosystem data |
