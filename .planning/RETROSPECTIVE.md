# Project Retrospective

*A living document updated after each milestone. Lessons feed forward into future planning.*

## Milestone: v1.0 — Site Vitrine

**Shipped:** 2026-03-16
**Phases:** 4 | **Plans:** 11 | **Sessions:** 1

### What Was Built
- Complete one-page showcase site with 7 content sections (Hero → Contact)
- Accessible navigation shell (sticky header, ARIA mobile menu, focus trap)
- SEO infrastructure (JSON-LD LocalBusiness, Open Graph, geo-targeted meta)
- Legal compliance (/mentions-legales with SIRET, print stylesheet)
- Design system with 7 color tokens, 4 UI primitives, 2 font families
- 12 custom SVG icon components (6 stroke-based, 4 fill-based social, 2 menu)

### What Worked
- Wave-based parallel execution: Plans 01+02 in each phase ran concurrently, halving execution time
- Server Components by default: Only MobileMenu needed "use client" — minimal client JS bundle
- Detailed plan frontmatter (must_haves, key_links, interfaces): executors had enough context to work autonomously
- Static analysis verification caught real issues before human review
- 4-phase structure (foundation → shell → content → polish) — clean dependency chain, each phase built on the last

### What Was Inefficient
- ROADMAP.md tracking got out of sync — Phase 1 and 3 showed unchecked despite being complete
- ESLint config was broken from the start but never fixed — accumulated as silent tech debt
- One-liner extraction from SUMMARYs returned empty — missing field in SUMMARY template usage
- Nyquist validation files were created but never populated — process overhead with no value

### Patterns Established
- `@theme` for static color tokens, `@theme inline` for font families (Tailwind CSS 4 dual strategy)
- Stroke-based icons: `fill=none stroke=currentColor strokeWidth=1.5` with className+size props
- Fill-based social icons: `fill=currentColor` with className+size props
- Section component wraps Container internally — never nest Container inside Section
- Fragment wrapper in page.tsx since layout.tsx provides the main element
- Legal page uses Container directly (not Section) since it's a standalone route

### Key Lessons
1. Plan frontmatter quality directly correlates with executor autonomy — `interfaces` and `must_haves` sections are the highest-leverage investment
2. Contrast requirements can conflict with visual specs — always check WCAG ratios during planning, not just execution
3. Static export verification (grep on `out/`) is fast and catches most issues — browser-only checks should be a small residual
4. For a site this size (1,336 LOC), 4 phases is the right granularity — each phase is meaningful but not overwhelming

### Cost Observations
- Model mix: ~60% opus (orchestration + execution), ~40% sonnet (verification + integration checks)
- Sessions: 1 (entire milestone in single session)
- Notable: Total execution time ~18 minutes for 11 plans — parallel wave execution was key

---

## Cross-Milestone Trends

### Process Evolution

| Milestone | Sessions | Phases | Key Change |
|-----------|----------|--------|------------|
| v1.0 | 1 | 4 | Initial delivery — wave-based parallel execution |

### Cumulative Quality

| Milestone | Requirements | Coverage | Lighthouse |
|-----------|-------------|----------|------------|
| v1.0 | 57/57 | 100% | Perf ≥90, A11y ≥90, SEO ≥95 |

### Top Lessons (Verified Across Milestones)

1. Plan frontmatter (must_haves, interfaces, key_links) is the highest-leverage planning investment
2. Wave-based parallel execution roughly halves phase duration for independent plans
