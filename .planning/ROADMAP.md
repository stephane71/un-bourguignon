# Roadmap: Site Vitrine Stephane Maire EI

## Overview

A 4-phase build delivering a one-page static showcase site for a local digital consultant. Phase 1 locks the build configuration and design system before any component work. Phase 2 builds the navigation shell that wraps all content. Phase 3 fills every content section in narrative order (Hero through Contact). Phase 4 finalizes SEO metadata, legal compliance, and performance polish. Every phase produces a verifiable, buildable artifact.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation & Design System** - Static export config, Tailwind CSS 4 theme tokens, font setup, and reusable UI primitives
- [ ] **Phase 2: Layout Shell** - Sticky header with mobile burger menu, footer, root layout with metadata skeleton
- [ ] **Phase 3: Content Sections** - All 7 page sections (Hero, A propos, Pour qui, Services, Methode, Benefices, Contact)
- [ ] **Phase 4: SEO, Legal & Polish** - JSON-LD, Open Graph, mentions legales, favicon, accessibility audit, Lighthouse targets

## Phase Details

### Phase 1: Foundation & Design System
**Goal**: The project builds as a static export with the correct design tokens, fonts, and UI primitives ready for section development
**Depends on**: Nothing (first phase)
**Requirements**: FOND-01, FOND-02, FOND-03, FOND-04, FOND-05, FOND-06
**Success Criteria** (what must be TRUE):
  1. `npm run build` produces a static HTML export in the `out/` directory without errors
  2. The "Artisan Numerique" color palette (ecru, sable, brun, terre, or, argile) is available as Tailwind utility classes
  3. Lora (serif) and Instrument Sans (sans-serif) render correctly on a page with no flash of unstyled text
  4. A test page with layout primitives displays correctly on mobile (375px) and desktop (1280px) viewports
**Plans**: 2 plans

Plans:
- [ ] 01-01-PLAN.md — Static export config, design tokens, font loading
- [ ] 01-02-PLAN.md — UI primitives (Container, Section, Button, Card) and visual test page

### Phase 2: Layout Shell
**Goal**: Users see a fixed header with working navigation, a footer, and the page structure is ready to receive content sections
**Depends on**: Phase 1
**Requirements**: NAV-01, NAV-02, NAV-03, NAV-04, FOOT-01, FOOT-02, A11Y-02, A11Y-03
**Success Criteria** (what must be TRUE):
  1. Header stays visible while scrolling and contains anchor links to all section IDs
  2. On mobile, a burger menu opens/closes with correct ARIA attributes and keyboard support (Escape to close, focus management)
  3. Tapping "Me contacter" in the header scrolls smoothly to the contact section with correct offset (not hidden behind header)
  4. Footer displays social links, email, phone, and a link to mentions legales
  5. All interactive elements (links, buttons, burger toggle) have a minimum tap target of 48px and visible focus indicators
**Plans**: 2 plans

Plans:
- [ ] 02-01-PLAN.md — Icon SVG components, Footer, and CSS scroll infrastructure
- [ ] 02-02-PLAN.md — Header with desktop nav, MobileMenu with ARIA/focus, layout integration

### Phase 3: Content Sections
**Goal**: The complete one-page content is visible and functional -- a visitor can read the full narrative from Hero to Contact and take action
**Depends on**: Phase 2
**Requirements**: HERO-01, HERO-02, HERO-03, HERO-04, HERO-05, HERO-06, APRO-01, APRO-02, POUR-01, POUR-02, POUR-03, SERV-01, SERV-02, SERV-03, SERV-04, METH-01, METH-02, METH-03, METH-04, METH-05, BENE-01, BENE-02, CONT-01, CONT-02, CONT-03, CONT-04, CONT-05, A11Y-04
**Success Criteria** (what must be TRUE):
  1. The Hero section shows Stephane's name, title, slogan, circular portrait, and two CTAs -- portrait is centered above text on mobile, side-by-side on desktop
  2. A visitor scrolling down reads a coherent narrative: who Stephane is (A propos), who he helps (Pour qui), what he offers (Services), how he works (Methode), what clients gain (Benefices)
  3. The phone number in the Contact section is a tappable `tel:` link that opens the dialer on mobile, and email opens the mail client
  4. Service cards display in 1 column on mobile, 2 on tablet, 3 on desktop -- with correct handling of the 5th card at the 3-column breakpoint
  5. All images have alt attributes and all content sections use semantic headings (H2 for sections, H3 for subsections)
**Plans**: TBD

Plans:
- [ ] 03-01: TBD
- [ ] 03-02: TBD
- [ ] 03-03: TBD

### Phase 4: SEO, Legal & Polish
**Goal**: The site is discoverable by search engines, legally compliant, performant, and ready for production deployment
**Depends on**: Phase 3
**Requirements**: SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, SEO-06, A11Y-01, A11Y-05, PERF-01, PERF-02, PERF-03, PERF-04, PERF-05, POLI-01, POLI-02
**Success Criteria** (what must be TRUE):
  1. Google search result preview shows "Stephane Maire -- Consultant numerique de proximite | Saone-et-Loire" with a relevant description
  2. The `/mentions-legales` page displays all legally required information (name, legal form, address, email, SIRET placeholder, host)
  3. JSON-LD LocalBusiness structured data passes the Google Rich Results Test
  4. Lighthouse scores on mobile: Performance >= 90, Accessibility >= 90, SEO >= 95
  5. Printing the page shows content with contact details visible and navigation/footer hidden
**Plans**: TBD

Plans:
- [ ] 04-01: TBD
- [ ] 04-02: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Design System | 0/2 | Planning complete | - |
| 2. Layout Shell | 0/2 | Planning complete | - |
| 3. Content Sections | 0/TBD | Not started | - |
| 4. SEO, Legal & Polish | 0/TBD | Not started | - |
