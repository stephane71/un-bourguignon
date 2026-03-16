---
phase: 4
slug: seo-legal-polish
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-16
---

# Phase 4 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Lighthouse CLI + shell smoke tests against `out/` |
| **Config file** | None — Lighthouse runs against built output |
| **Quick run command** | `npx next build` |
| **Full suite command** | `npx next build && npx serve out -l 3000` + manual Lighthouse |
| **Estimated runtime** | ~30 seconds (build) |

---

## Sampling Rate

- **After every task commit:** Run `npx next build`
- **After every plan wave:** Run `npx next build && npx serve out -l 3000` + Lighthouse audit
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 04-01-01 | 01 | 1 | SEO-01 | smoke | `npx next build && grep -l "Saone-et-Loire" out/index.html` | ❌ W0 | ⬜ pending |
| 04-01-02 | 01 | 1 | SEO-02 | smoke | `grep "06 62 46 16 43" out/index.html` | ❌ W0 | ⬜ pending |
| 04-01-03 | 01 | 1 | SEO-03 | smoke | `grep "og:title" out/index.html` | ❌ W0 | ⬜ pending |
| 04-01-04 | 01 | 1 | SEO-04 | manual | Google Rich Results Test on deployed URL | N/A | ⬜ pending |
| 04-01-05 | 01 | 1 | SEO-05 | smoke | `grep -c "<h1" out/index.html` returns 1 | ❌ W0 | ⬜ pending |
| 04-02-01 | 02 | 1 | SEO-06 | smoke | `test -f out/mentions-legales/index.html` | ❌ W0 | ⬜ pending |
| 04-03-01 | 03 | 1 | PERF-05 | smoke | `test $(stat -f%z public/images/photo-portrait.webp) -lt 102400` | ❌ W0 | ⬜ pending |
| 04-03-02 | 03 | 1 | POLI-02 | smoke | `test -f src/app/favicon.ico` | ❌ W0 | ⬜ pending |
| 04-03-03 | 03 | 2 | A11Y-01 | manual | Lighthouse accessibility audit | N/A | ⬜ pending |
| 04-03-04 | 03 | 2 | A11Y-05 | manual | Chrome DevTools rendering emulation | N/A | ⬜ pending |
| 04-04-01 | 04 | 2 | POLI-01 | manual | Chrome print preview | N/A | ⬜ pending |
| 04-04-02 | 04 | 2 | PERF-01 | manual | Chrome Lighthouse mobile audit >= 90 | N/A | ⬜ pending |
| 04-04-03 | 04 | 2 | PERF-02 | manual | Chrome Lighthouse mobile audit >= 90 | N/A | ⬜ pending |
| 04-04-04 | 04 | 2 | PERF-03 | manual | Chrome Lighthouse mobile audit >= 95 | N/A | ⬜ pending |
| 04-04-05 | 04 | 2 | PERF-04 | manual | Chrome Lighthouse mobile audit LCP < 2.5s | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Smoke test commands run against `out/` directory after `npx next build`
- [ ] No test framework to install — all validation is build-output grep or manual Lighthouse

*Existing infrastructure covers smoke tests. Manual Lighthouse audits handle performance/accessibility.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| JSON-LD valid | SEO-04 | Requires Google Rich Results Test | Deploy to preview, paste URL in search.google.com/test/rich-results |
| Contrast WCAG AA | A11Y-01 | Requires visual audit tool | Run Lighthouse accessibility audit, check contrast ratio results |
| prefers-reduced-motion | A11Y-05 | Requires browser emulation | Chrome DevTools > Rendering > Emulate prefers-reduced-motion |
| Print stylesheet | POLI-01 | Requires print preview | Cmd+P in Chrome, verify nav/footer hidden, contacts visible |
| Lighthouse Performance >= 90 | PERF-01 | Requires real browser metrics | Chrome DevTools Lighthouse mobile audit |
| Lighthouse Accessibility >= 90 | PERF-02 | Requires real browser metrics | Chrome DevTools Lighthouse mobile audit |
| Lighthouse SEO >= 95 | PERF-03 | Requires real browser metrics | Chrome DevTools Lighthouse mobile audit |
| LCP < 2.5s mobile | PERF-04 | Requires real browser metrics | Chrome DevTools Lighthouse mobile audit |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
