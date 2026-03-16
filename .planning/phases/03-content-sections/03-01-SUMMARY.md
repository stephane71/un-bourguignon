---
phase: 03-content-sections
plan: 01
subsystem: ui
tags: [svg, icons, hero, a-propos, next-image, server-components]

# Dependency graph
requires:
  - phase: 02-layout-shell
    provides: Section, Button, Container primitives and layout wrapper
provides:
  - 6 stroke-based SVG icon components (Phone, Mail, Clock, Key, UserCheck, CoinStack)
  - HeroSection with portrait, CTAs, responsive layout
  - AProposSection with prose content and key points definition list
affects: [03-02, 03-03, 03-04]

# Tech tracking
tech-stack:
  added: []
  patterns: [stroke-based icon pattern with fill=none strokeWidth=1.5]

key-files:
  created:
    - src/components/icons/Phone.tsx
    - src/components/icons/Mail.tsx
    - src/components/icons/Clock.tsx
    - src/components/icons/Key.tsx
    - src/components/icons/UserCheck.tsx
    - src/components/icons/CoinStack.tsx
    - src/components/sections/HeroSection.tsx
    - src/components/sections/AProposSection.tsx
  modified: []

key-decisions:
  - "Stroke-based icons use fill=none stroke=currentColor strokeWidth=1.5 (thin-line style distinct from fill-based social icons)"
  - "Hero secondary CTA is plain text link with arrow, not Button component (per CONTEXT.md locked decision)"

patterns-established:
  - "Stroke icon pattern: fill=none, stroke=currentColor, strokeWidth=1.5, strokeLinecap=round, strokeLinejoin=round"
  - "Section components are Server Components with no use client directive"

requirements-completed: [HERO-01, HERO-02, HERO-03, HERO-04, HERO-05, HERO-06, APRO-01, APRO-02, A11Y-04]

# Metrics
duration: 3min
completed: 2026-03-16
---

# Phase 3 Plan 1: Icons, Hero & A Propos Summary

**6 stroke-based SVG icons plus Hero section (H1, portrait, dual CTAs) and A propos section (prose with dl key points) as Server Components**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-16T16:55:05Z
- **Completed:** 2026-03-16T16:58:10Z
- **Tasks:** 3
- **Files modified:** 8

## Accomplishments
- Created 6 stroke-based SVG icon components with consistent API (className, size, aria-hidden)
- Built HeroSection with circular portrait (200/280px responsive), H1, subtitle, italic slogan, primary Button CTA, secondary text link
- Built AProposSection with prose paragraphs and 4-item definition list on ecru background

## Task Commits

Each task was committed atomically:

1. **Task 1: Create 6 new SVG icon components** - `d5b6fef` (feat)
2. **Task 2: Create HeroSection component** - `c385c74` (feat)
3. **Task 3: Create AProposSection component** - `7198c26` (feat)

## Files Created/Modified
- `src/components/icons/Phone.tsx` - Phone handset stroke icon
- `src/components/icons/Mail.tsx` - Mail envelope stroke icon
- `src/components/icons/Clock.tsx` - Clock face stroke icon (time-saved benefit)
- `src/components/icons/Key.tsx` - Key stroke icon (autonomy benefit)
- `src/components/icons/UserCheck.tsx` - Person+checkmark stroke icon (single-contact benefit)
- `src/components/icons/CoinStack.tsx` - Euro coin stroke icon (fair-pricing benefit)
- `src/components/sections/HeroSection.tsx` - Hero section with full content and responsive layout
- `src/components/sections/AProposSection.tsx` - A propos section with prose and definition list

## Decisions Made
- Stroke-based icons use `fill="none"` + `stroke="currentColor"` + `strokeWidth={1.5}` to differentiate from fill-based social icons (LinkedIn, Facebook)
- Hero secondary CTA rendered as plain `<a>` with arrow, not wrapped in Button component (per CONTEXT.md locked decision)
- Used `&apos;` for apostrophes and `&mdash;` for em dashes in JSX content

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- `npm run lint` fails due to pre-existing configuration issue (lint directory not found). Not caused by this plan. Build passes cleanly.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All 6 icons ready for Benefices (plan 03-03) and Contact (plan 03-04) sections
- HeroSection and AProposSection ready for page integration
- Downstream plans 03-02 through 03-04 unblocked

## Self-Check: PASSED

All 8 created files verified on disk. All 3 task commits verified in git log.

---
*Phase: 03-content-sections*
*Completed: 2026-03-16*
