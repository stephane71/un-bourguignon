# Domain Pitfalls

**Domain:** One-page static showcase site (Next.js 16 + Tailwind CSS 4)
**Project:** Site Vitrine -- Stephane Maire EI
**Researched:** 2026-03-16
**Confidence:** MEDIUM (training data, not verified against live docs due to tool restrictions)

## Critical Pitfalls

Mistakes that cause build failures, broken deploys, or major rework.

### Pitfall 1: next/image Breaks Static Export Without Explicit Loader

**What goes wrong:** `next build` with `output: 'export'` fails because the default `next/image` optimization requires a Node.js server. The build either errors out or produces broken `<img>` tags with unresolvable `/_next/image` URLs.

**Why it happens:** Next.js Image Optimization is a server-side feature. Static export has no server to resize/optimize images at request time. Developers add `<Image>` components during development (where `next dev` provides a server) and only discover the failure at build time.

**Consequences:** Build fails entirely, or images render as broken links on the deployed static site.

**Prevention:**
- Set `output: 'export'` in `next.config.ts` from day one (not at the end). Build early and often.
- Configure a custom loader or use `unoptimized: true` on the Image component. For this project (single portrait image, few assets), `unoptimized: true` globally in next.config.ts is the simplest approach:
  ```typescript
  const nextConfig: NextConfig = {
    output: 'export',
    images: { unoptimized: true },
  };
  ```
- Pre-optimize images manually (WebP, appropriate dimensions) before placing them in `/public/`.

**Detection:** Run `npm run build` after every structural change. A failed build referencing "Image Optimization" is the signal.

**Phase:** Foundation/Setup -- must be configured before any component work begins.

---

### Pitfall 2: Missing `output: 'export'` Until Late in Development

**What goes wrong:** The project currently has an empty `next.config.ts` with no `output: 'export'`. Development proceeds using `next dev` (which runs a full server). Features that rely on server capabilities (API routes, server actions, dynamic `headers()` or `cookies()` calls) get introduced accidentally. At build time, everything breaks.

**Why it happens:** `next dev` masks the difference between static and server-rendered apps. Everything "works" locally.

**Consequences:** Late discovery of incompatible features requires rework. With `output: 'export'`, the following are unavailable: API routes, middleware, `headers()`/`cookies()`, ISR, server actions, dynamic routes without `generateStaticParams`.

**Prevention:**
- Add `output: 'export'` to `next.config.ts` immediately (the very first task).
- Run `npm run build` in CI or as a pre-commit check to catch issues early.
- The `/mentions-legales` page needs to be a real route under `src/app/mentions-legales/page.tsx` -- this works fine with static export since it is a known static path.

**Detection:** `next build` errors mentioning "output: export" incompatibility.

**Phase:** Foundation/Setup -- first commit of the milestone.

---

### Pitfall 3: Dark Mode CSS Overriding the "Artisan Numerique" Palette

**What goes wrong:** The current `globals.css` includes a `prefers-color-scheme: dark` media query that sets `--background: #0a0a0a` and `--foreground: #ededed`. This is the Next.js default boilerplate. If left in place, users with system dark mode enabled will see a black background instead of the ecru/sable palette -- completely breaking the visual identity.

**Why it happens:** The boilerplate `globals.css` is scaffolded by `create-next-app` and developers forget to strip it when implementing a custom design system.

**Consequences:** The entire "Artisan Numerique" color palette (ecru, sable, brun, terre, or, argile) is invisible to roughly 30-40% of mobile users who have dark mode on. The site looks like a broken default template.

**Prevention:**
- Remove the `prefers-color-scheme: dark` block entirely. This project has a single intentional palette -- no dark mode variant.
- Replace the boilerplate CSS variables with the actual project design tokens.
- Remove the generic `font-family: Arial` fallback (project uses Lora + Instrument Sans).

**Detection:** Test on a phone with dark mode enabled. If colors change, the boilerplate is still active.

**Phase:** Foundation/Setup -- clean up `globals.css` when establishing the design system.

---

### Pitfall 4: Tailwind CSS 4 is NOT Tailwind CSS 3 (Config Migration)

**What goes wrong:** Developers write a `tailwind.config.ts` file with v3 syntax (`theme.extend.colors`, `plugins` array, `content` glob). Tailwind CSS 4 ignores this entirely because configuration moved to CSS using `@theme` directives. Custom colors, fonts, and spacing never apply.

**Why it happens:** Most tutorials, Stack Overflow answers, and AI training data reference Tailwind v3 configuration. Tailwind CSS 4 (released early 2025) uses a fundamentally different configuration model.

**Consequences:** Custom theme values silently fail to apply. Developers waste hours debugging why `bg-ecru` does not work.

**Prevention:**
- Do NOT create `tailwind.config.ts` or `tailwind.config.js`. Tailwind CSS 4 does not use them by default.
- Define custom theme values in `globals.css` using the `@theme` directive:
  ```css
  @import "tailwindcss";

  @theme {
    --color-ecru: #F5F0E8;
    --color-sable: #E8DCC8;
    --color-brun: #6B4C3B;
    --color-terre: #8B6914;
    --color-or: #C5973B;
    --color-argile: #B8754C;
    --font-lora: "Lora", serif;
    --font-instrument: "Instrument Sans", sans-serif;
  }
  ```
- With `@theme`, classes like `bg-ecru`, `text-brun`, `font-lora` work automatically.
- The `content` detection in v4 is automatic -- no need to specify glob patterns.

**Detection:** If any custom utility class does not apply styling, check whether configuration is in CSS (`@theme`) or in a stale JS/TS config file.

**Phase:** Foundation/Setup -- establish the design system correctly from the start.

---

## Moderate Pitfalls

### Pitfall 5: Anchor Navigation Broken by Smooth Scroll + Fixed Header

**What goes wrong:** Clicking `<a href="#services">` scrolls to the section but the fixed/sticky header covers the top 60-80px of the target section. The heading is hidden behind the navbar.

**Why it happens:** The browser scrolls the anchor element to `top: 0` of the viewport, not accounting for fixed-position elements.

**Prevention:**
- Use `scroll-margin-top` on each section element to offset by the header height:
  ```css
  section[id] {
    scroll-margin-top: 5rem; /* match header height + breathing room */
  }
  ```
- Add `scroll-behavior: smooth` on `html` in CSS (not JavaScript) for native smooth scrolling.
- Do NOT use JavaScript `scrollIntoView` for basic anchor links -- the CSS approach is simpler and works with static export.

**Detection:** Click every nav link and verify the section heading is fully visible below the header.

**Phase:** Header + Navigation implementation.

---

### Pitfall 6: Mobile Burger Menu Accessibility Failures

**What goes wrong:** The burger menu opens/closes visually but is unusable for keyboard users and screen readers. Common issues: no `aria-expanded` on the toggle button, menu not focusable, no focus trap, Escape key does not close it, menu items not reachable via Tab.

**Why it happens:** Developers implement the visual toggle with `useState` and `onClick` but skip the ARIA attributes and keyboard event handlers.

**Consequences:** Lighthouse Accessibility drops below 90 (project requirement). Screen reader users cannot navigate. Legal accessibility risk in France (RGAA compliance).

**Prevention:**
- The burger button must have `aria-expanded="true|false"`, `aria-controls="mobile-menu"`, and `aria-label="Menu de navigation"`.
- The menu panel needs `id="mobile-menu"` and `role="navigation"`.
- Add `onKeyDown` handler: Escape closes the menu.
- When menu opens, focus the first link. When it closes, return focus to the burger button.
- Close the menu when a nav link is clicked (user navigates to section).
- Use a `"use client"` component for the interactive header -- this is one of the few components that needs client-side JS.

**Detection:** Test with keyboard only (Tab, Enter, Escape). Run Lighthouse accessibility audit. Test with VoiceOver on macOS/iOS.

**Phase:** Header + Navigation implementation.

---

### Pitfall 7: Font Loading Flash (FOUT) with next/font

**What goes wrong:** On first load, text renders in a fallback font (Arial/Times) and then visibly shifts to Lora/Instrument Sans once the Google Fonts load. This "flash of unstyled text" makes the site look janky for 200-500ms.

**Why it happens:** Even with `next/font/google` (which self-hosts fonts), the font files still need to download. Without proper `font-display` configuration and size-adjust fallbacks, the layout shift is visible.

**Prevention:**
- Use `next/font/google` (not a `<link>` to Google Fonts CDN) -- this is critical for static export as it self-hosts the font files:
  ```typescript
  import { Lora, Instrument_Sans } from 'next/font/google';

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
  ```
- Apply CSS variables on `<html>` or `<body>` so Tailwind `font-lora` / `font-instrument` classes work.
- `display: 'swap'` shows fallback text immediately, then swaps. This is acceptable for a showcase site -- invisible text (FOIT) is worse.
- Use `adjustFontFallback: true` (default) which generates size-adjusted fallback fonts to minimize layout shift.

**Detection:** Throttle network to "Slow 3G" in DevTools and reload. Watch for visible font swap. Check CLS in Lighthouse.

**Phase:** Foundation/Setup -- font loading is part of layout.tsx.

---

### Pitfall 8: Clickable Elements Smaller Than 48px on Mobile

**What goes wrong:** Phone numbers, email links, and navigation links render with default sizing. On mobile, users tap wrong links or cannot tap small targets. This fails both the project's 48px requirement and Lighthouse accessibility checks.

**Why it happens:** Desktop-first thinking. Text links look fine on desktop but are too small for finger taps. Developers forget that `min-height: 48px` applies to the tap target, not just the visible text.

**Consequences:** Lighthouse Accessibility score drops. Users on smartphones (the primary audience) struggle to interact. Frustrating for the exact demographic this site targets (micro-entrepreneurs who may not be tech-savvy).

**Prevention:**
- Apply `min-h-12 py-3 px-4` (or similar) to all interactive elements: nav links, CTA buttons, phone/email links, social links.
- For inline text links (phone, email in the contact section), add padding to create a 48px minimum tap target even if the text is small.
- Test by overlaying a 48x48px box on every clickable element in DevTools.

**Detection:** Chrome DevTools "Tap targets" audit in Lighthouse. Manual testing on a real phone.

**Phase:** Every component phase -- enforce from the start.

---

### Pitfall 9: SEO Deficiencies for a Single-Page Site

**What goes wrong:** Search engines see one URL with a massive page. Without structured data and proper meta, the site competes poorly for local search terms like "consultant numerique Saone-et-Loire."

**Why it happens:** Single-page sites have inherently less URL surface area for SEO. Developers add a `<title>` and `<meta description>` and call it done.

**Consequences:** Poor visibility in Google local results. The Google Business Profile links to a site that Google cannot properly index for specific services.

**Prevention:**
- Add JSON-LD `LocalBusiness` structured data with: name, address (Moroges 71390), telephone, email, areaServed, serviceType, geo coordinates.
- Use semantic HTML: one `<h1>` (hero), then `<h2>` for each section. Do not skip heading levels.
- Add `lang="fr"` on `<html>` (already present -- good).
- Set Open Graph tags for social sharing (og:title, og:description, og:image, og:locale "fr_FR").
- Use `<meta name="geo.region" content="FR-71">` and `<meta name="geo.placename" content="Moroges">` for local SEO signals.
- Ensure the phone number uses `<a href="tel:+33...">` with the international format.

**Detection:** Test with Google Rich Results Test. Validate JSON-LD with Schema.org validator. Check Lighthouse SEO score (target >= 95).

**Phase:** SEO/Metadata phase -- after content is in place but before launch.

---

### Pitfall 10: Portrait Image Performance on Mobile 4G

**What goes wrong:** The hero portrait image loads as a large file (1-2MB JPEG from a phone camera). On mobile 4G, this blows the LCP budget (project requirement: < 2.5s). The circular crop also means the browser downloads pixels that are never displayed.

**Why it happens:** The original photo is used as-is without resizing or format conversion. With `images: { unoptimized: true }`, Next.js will not auto-optimize.

**Consequences:** LCP > 2.5s on mobile. Lighthouse Performance drops below 90. The primary audience (mobile users) sees a slow-loading site.

**Prevention:**
- Pre-process the portrait: crop to square, resize to max 560px (280px display x 2 for retina), convert to WebP.
- Provide multiple sizes via `<picture>` with `srcSet` or use explicit width/height on `<Image>` with manual WebP files.
- Target file size: < 50KB for the portrait after WebP compression.
- Add `priority` prop to the hero Image component to trigger preload (works even with unoptimized).
- Use `fetchPriority="high"` for the LCP image.

**Detection:** Run Lighthouse on mobile preset. Check LCP element -- if it is the portrait, optimize its file size.

**Phase:** Hero section implementation.

---

## Minor Pitfalls

### Pitfall 11: scroll-behavior: smooth Breaks Browser Back Button Behavior

**What goes wrong:** With `scroll-behavior: smooth` on `html`, clicking browser back/forward buttons also smoothly scrolls instead of instantly jumping. This feels sluggish and confusing.

**Prevention:** This is generally acceptable for a single-page site where back/forward navigation is minimal. However, if the `/mentions-legales` page exists as a separate route, the smooth scroll on returning to the main page can feel slow. Consider applying `scroll-behavior: smooth` only on the main page, or accept the minor UX trade-off.

**Phase:** Navigation polish.

---

### Pitfall 12: Responsive Grid Breakpoints Not Matching Real Devices

**What goes wrong:** Cards designed for "2x2 desktop" break at awkward widths. The "Pour qui" section (4 cards) shows 1 card at mobile, but between `sm` and `md` breakpoints, cards are stretched to full width on tablets, looking odd.

**Prevention:**
- Design for specific breakpoints with actual device widths in mind: 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1024px (laptop), 1280px (desktop).
- Use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` or similar -- test at every Tailwind breakpoint.
- For the 5 service cards (odd number), plan the grid to handle the orphan: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with the 5th card spanning or centering.

**Detection:** Use Chrome DevTools responsive mode at each standard breakpoint. Test on a real phone.

**Phase:** Every section with cards or grids.

---

### Pitfall 13: Contrast Failures on Earth-Tone Palette

**What goes wrong:** Earth tones (ecru, sable, or, argile) are mid-range colors. Text in `brun` (#6B4C3B) on `ecru` (#F5F0E8) passes WCAG AA (contrast ~5.2:1), but `or` (#C5973B) on `sable` (#E8DCC8) fails (contrast ~2.1:1). Decorative gold text on light backgrounds is a common trap with warm palettes.

**Prevention:**
- Use `brun` (#6B4C3B) or darker for all body text on light backgrounds. Never use `or` or `argile` for text -- only for decorative accents, borders, or icons.
- Verify every text/background combination with a contrast checker before implementation.
- Maintain a contrast matrix:
  - `brun` on `ecru`: ~5.2:1 -- PASS AA
  - `brun` on `white`: ~6.8:1 -- PASS AA
  - `brun` on `sable`: ~4.5:1 -- borderline AA (use slightly darker variant for body text)
  - `or` on `ecru`: ~2.8:1 -- FAIL (decorative only)
  - White on `brun`: ~6.8:1 -- PASS AA (good for CTA buttons)

**Detection:** Run axe DevTools or Lighthouse. Check every text element manually with WebAIM contrast checker.

**Phase:** Design system setup and every subsequent section.

---

### Pitfall 14: `"use client"` Overuse Inflating JavaScript Bundle

**What goes wrong:** Developers add `"use client"` to the page component or large section components because one small part needs interactivity (e.g., the burger menu). This forces the entire component tree to ship as client-side JavaScript.

**Why it happens:** Misunderstanding of the Server/Client component boundary in Next.js App Router.

**Prevention:**
- Keep page.tsx and section components as Server Components (no `"use client"`).
- Extract only interactive parts into small client components: `MobileMenuToggle`, `ScrollToTopButton`, `SmoothScrollLink`.
- The page should be 95%+ Server Components for a static showcase site.
- With `output: 'export'`, all components are pre-rendered to HTML at build time, but `"use client"` components still ship their JS to the browser for hydration.

**Detection:** Check the build output size. If JavaScript bundle > 100KB for a static showcase site, investigate `"use client"` usage.

**Phase:** Every component phase -- enforce minimal client components.

---

### Pitfall 15: Missing `tel:` and `mailto:` Link Formatting for French Numbers

**What goes wrong:** Phone number displayed as "06 12 34 56 78" but the `href` uses the same format. Some mobile browsers fail to parse the spaced French format. Or the `tel:` link uses the local format without country code, failing for international callers.

**Prevention:**
- Display format: `06 12 34 56 78` (French convention, readable).
- `href` format: `tel:+33612345678` (E.164, no spaces, with country code).
- Email: `href="mailto:contact@example.com"` -- straightforward.
- Test on iOS Safari and Android Chrome -- both should trigger the phone dialer.

**Detection:** Tap the phone link on a real mobile device. Verify the dialer opens with the correct number.

**Phase:** Contact section implementation.

---

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Foundation/Setup | Missing `output: 'export'` and image config (Pitfalls 1-2) | First commit must include next.config.ts with export + unoptimized images |
| Foundation/Setup | Dark mode boilerplate overriding palette (Pitfall 3) | Strip globals.css boilerplate immediately |
| Design System | Tailwind v4 config in wrong format (Pitfall 4) | Use `@theme` in CSS, NOT tailwind.config.ts |
| Design System | Contrast failures on warm palette (Pitfall 13) | Build and verify contrast matrix before implementing sections |
| Font Setup | FOUT flash on load (Pitfall 7) | Configure next/font/google in layout.tsx with `display: 'swap'` |
| Header/Nav | Anchor scroll offset by fixed header (Pitfall 5) | `scroll-margin-top` on all section IDs |
| Header/Nav | Burger menu inaccessible (Pitfall 6) | ARIA attributes + keyboard handling from the start |
| Hero Section | Portrait image too large for mobile (Pitfall 10) | Pre-optimize to WebP < 50KB before implementation |
| All Sections | Tap targets too small (Pitfall 8) | Enforce min-h-12 on all interactive elements |
| All Sections | `"use client"` overuse (Pitfall 14) | Extract minimal interactive components |
| Card Grids | Responsive breakpoints untested (Pitfall 12) | Test every grid at 375px, 768px, 1024px, 1280px |
| Contact | Phone link formatting (Pitfall 15) | E.164 format in href, French display format |
| SEO/Meta | Single-page SEO gaps (Pitfall 9) | JSON-LD LocalBusiness + semantic headings + Open Graph |

## Sources

- Next.js documentation on static exports (output: 'export') -- training data, MEDIUM confidence
- Tailwind CSS 4 release notes and migration guide -- training data, MEDIUM confidence
- WCAG 2.1 AA contrast requirements -- HIGH confidence (stable specification)
- next/font/google documentation -- training data, MEDIUM confidence
- WAI-ARIA Authoring Practices for disclosure/menu patterns -- HIGH confidence (stable specification)

---

*Pitfalls research: 2026-03-16*
