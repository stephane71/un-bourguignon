---
phase: 04-seo-legal-polish
plan: 01
subsystem: seo
tags: [json-ld, metadata, open-graph, favicon, webp, structured-data]

# Dependency graph
requires:
  - phase: 03-content-sections
    provides: All content sections with correct heading hierarchy
provides:
  - SEO metadata with Saone-et-Loire locality in title and description
  - JSON-LD LocalBusiness structured data with full contact/address/services
  - SM favicon in SVG, ICO, and apple-icon PNG formats
  - WebP optimized portrait image (9KB from 72KB PNG)
affects: [04-02, 04-03]

# Tech tracking
tech-stack:
  added: []
  patterns: [JSON-LD script injection in layout body, Next.js file-based icon convention]

key-files:
  created:
    - src/app/icon.svg
    - src/app/favicon.ico
    - src/app/apple-icon.png
    - public/images/photo-portrait.webp
  modified:
    - src/app/layout.tsx
    - src/components/sections/HeroSection.tsx

key-decisions:
  - "JSON-LD injected as script tag in body before Header per Next.js guidance"
  - "Favicon.ico uses PNG format inside .ico container (accepted by all modern browsers)"
  - "Portrait WebP served directly without picture element fallback (universal WebP support)"

patterns-established:
  - "JSON-LD structured data: script tag in layout.tsx body with dangerouslySetInnerHTML and u003c escaping"
  - "File-based icons: icon.svg, favicon.ico, apple-icon.png in src/app/ for auto link tag generation"

requirements-completed: [SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, PERF-05, POLI-02]

# Metrics
duration: 2min
completed: 2026-03-16
---

# Phase 4 Plan 01: SEO & Favicon Summary

**SEO metadata with Saone-et-Loire locality, JSON-LD LocalBusiness structured data, SM favicon in brown/ecru palette, and WebP portrait optimization (72KB to 9KB)**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-16T19:30:44Z
- **Completed:** 2026-03-16T19:33:11Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments
- Meta title includes "Saone-et-Loire" locality for local SEO targeting
- JSON-LD LocalBusiness with full address, phone, email, LinkedIn/Facebook sameAs, and 5 service areas
- SM favicon displayed in browser tab with brown background and ecru text
- Portrait image reduced from 72KB PNG to 9KB WebP (87% reduction)
- Heading hierarchy verified: exactly 1 H1, H2 per section, H3 for sub-items

## Task Commits

Each task was committed atomically:

1. **Task 1: SEO metadata, Open Graph, JSON-LD LocalBusiness** - `1f6a7eb` (feat)
2. **Task 2: Favicon SM initials + WebP portrait optimization** - `de2d3c8` (feat)

## Files Created/Modified
- `src/app/layout.tsx` - Updated siteTitle/siteDescription, added JSON-LD LocalBusiness script
- `src/app/icon.svg` - SVG favicon with SM initials (brown bg, ecru text, rounded square)
- `src/app/favicon.ico` - 32x32 ICO for legacy browsers
- `src/app/apple-icon.png` - 180x180 Apple touch icon
- `public/images/photo-portrait.webp` - WebP portrait (9KB, from 72KB PNG)
- `src/components/sections/HeroSection.tsx` - Updated img src to .webp

## Decisions Made
- JSON-LD injected as script tag in body before Header per Next.js official guidance (not in head via metadata API)
- Favicon.ico uses PNG format inside .ico container -- accepted by all modern browsers, avoids complex multi-resolution ICO generation
- Portrait served as WebP directly without picture element fallback since WebP has universal browser support

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- SEO metadata and structured data complete, ready for legal page (Plan 02)
- Favicon files auto-detected by Next.js build (icon.svg, apple-icon.png routes generated)
- Portrait WebP serving confirmed in build output

## Self-Check: PASSED

All 7 files verified present. Both task commits (1f6a7eb, de2d3c8) confirmed in git log.

---
*Phase: 04-seo-legal-polish*
*Completed: 2026-03-16*
