# Milestones

## v1.0 Site Vitrine (Shipped: 2026-03-16)

**Phases completed:** 4 phases, 11 plans
**Feature commits:** 21
**Lines of code:** 1,336 (TSX/TS/CSS)

**Delivered:** One-page static showcase site for a local digital consultant — SEO-optimized, legally compliant, accessible, mobile-first.

**Key accomplishments:**
- Static export with Tailwind CSS 4 design system — 7 color tokens, Lora + Instrument Sans, 4 UI primitives
- Accessible navigation shell — sticky header, mobile burger with ARIA/focus trap, footer with social links
- Complete one-page narrative — 7 sections (Hero → Contact) with responsive layouts and 6 custom icons
- SEO-ready — JSON-LD LocalBusiness, Saône-et-Loire geo-targeting, SM favicon, WebP portrait (9KB)
- Legal & accessibility — /mentions-legales with SIRET, WCAG AA contrast, print stylesheet, reduced-motion
- Performance verified — Lighthouse Performance ≥90, Accessibility ≥90, SEO ≥95

**Tech debt accepted:**
- ESLint config broken (FlatCompat + ESLint 9.x)
- NAV_LINKS duplicated in Header.tsx and MobileMenu.tsx
- MobileMenu instant toggle (no fade animation)
- Nyquist validation not executed (all phases draft)

---

