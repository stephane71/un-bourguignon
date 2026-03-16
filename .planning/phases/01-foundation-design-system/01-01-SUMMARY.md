---
phase: 01-foundation-design-system
plan: 01
subsystem: ui
tags: [tailwindcss4, next-font, static-export, design-tokens, google-fonts]

requires: []
provides:
  - "Static HTML export to out/ directory"
  - "7 color tokens as Tailwind utilities (bg-ecru, text-brun, etc.)"
  - "Font families as Tailwind utilities (font-serif = Lora, font-sans = Instrument Sans)"
  - "CSS variables --font-lora and --font-instrument on html element"
affects: [01-02, 02-layout-shell, 03-content-sections]

tech-stack:
  added: [next/font/google, tailwindcss4-theme]
  patterns: ["@theme for static tokens, @theme inline for runtime CSS variable references"]

key-files:
  created: []
  modified:
    - next.config.ts
    - src/app/globals.css
    - src/app/layout.tsx

key-decisions:
  - "Used @theme (not inline) for color tokens since they are static hex values"
  - "Used @theme inline for font families since they reference runtime CSS variables from next/font"
  - "Added --color-or-light (#D4A574) as supplementary gold for step numbers per CONTEXT.md"

patterns-established:
  - "Design tokens via @theme block in globals.css"
  - "Font loading via next/font/google with CSS variable injection on html element"

requirements-completed: [FOND-01, FOND-02, FOND-03, FOND-04, FOND-06]

duration: 1min
completed: 2026-03-16
---

# Phase 1 Plan 1: Static Export & Design Tokens Summary

**Static HTML export with 7-color Artisan Numerique palette, Lora/Instrument Sans font loading via next/font, and Tailwind CSS 4 @theme tokens**

## Performance

- **Duration:** 1 min
- **Started:** 2026-03-16T13:04:33Z
- **Completed:** 2026-03-16T13:05:30Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments
- Static HTML export configured (out/ directory produced on build)
- 7 color tokens defined as Tailwind utilities via @theme (ecru, sable, brun, terre, or, or-light, argile)
- Lora and Instrument Sans loaded via next/font/google with CSS variable injection
- Dark mode boilerplate completely stripped from globals.css
- Body defaults to Instrument Sans (font-sans) with brun text on white background

## Task Commits

Each task was committed atomically:

1. **Task 1: Configure static export and design tokens** - `a58fb8f` (feat)
2. **Task 2: Load Google Fonts and wire CSS variables** - `eb4471d` (feat)

## Files Created/Modified
- `next.config.ts` - Static export with unoptimized images
- `src/app/globals.css` - Design tokens (@theme colors, @theme inline fonts), base body styles
- `src/app/layout.tsx` - Google Font loading, CSS variable injection, font-sans body default

## Decisions Made
- Used @theme (not @theme inline) for color tokens since they are static hex values that do not reference CSS variables
- Used @theme inline for font families because they reference --font-lora and --font-instrument CSS variables injected at runtime by next/font
- Added --color-or-light (#D4A574) as supplementary gold token for METH-03 step numbers (per CONTEXT.md Claude discretion allowance)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Build foundation complete: static export works, all design tokens available
- Ready for Plan 02 (page structure and component work)
- All Tailwind color and font utilities available for use in subsequent plans

---
*Phase: 01-foundation-design-system*
*Completed: 2026-03-16*
