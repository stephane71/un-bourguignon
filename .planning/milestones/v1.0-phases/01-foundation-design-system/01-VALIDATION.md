---
phase: 1
slug: foundation-design-system
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-16
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual browser validation + `npm run build` |
| **Config file** | none — no test framework installed |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npx serve out` |
| **Estimated runtime** | ~10 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && npx serve out`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | FOND-01 | build | `npm run build && test -d out` | N/A | ⬜ pending |
| 01-01-02 | 01 | 1 | FOND-04 | build | `npm run build` | N/A | ⬜ pending |
| 01-02-01 | 02 | 1 | FOND-02 | manual | Build + visual inspection of test page | N/A | ⬜ pending |
| 01-02-02 | 02 | 1 | FOND-03 | manual | Build + serve + browser check | N/A | ⬜ pending |
| 01-02-03 | 02 | 1 | FOND-05 | manual | Build + serve + DevTools responsive mode | N/A | ⬜ pending |
| 01-02-04 | 02 | 1 | FOND-06 | build | `npm run build && grep 'lang="fr"' out/index.html` | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Test page (`src/app/page.tsx`) — must display all color tokens, both fonts, and all 4 primitives for visual validation

*Existing infrastructure covers automated build validation. Visual checks require test page content.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Tailwind palette classes apply correct colors | FOND-02 | Visual appearance of hex values on rendered page | Build, serve, inspect color swatches on test page |
| Lora + Instrument Sans render without FOUT | FOND-03 | Font rendering is visual, FOUT timing can't be automated | Build, serve, throttle network in DevTools, reload |
| No dark mode override on dark-mode device | FOND-04 | Requires system dark mode toggle | Build, serve, toggle system dark mode, verify white/ecru bg |
| Layout responds at 375px and 1280px | FOND-05 | Responsive layout needs visual viewport check | Build, serve, use DevTools responsive mode at both widths |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 10s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
