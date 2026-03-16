---
phase: 2
slug: layout-shell
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-16
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None installed — build verification only |
| **Config file** | none — Wave 0 not needed |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npm run lint` |
| **Estimated runtime** | ~15 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && npm run lint`
- **Before `/gsd:verify-work`:** Full suite must be green + manual keyboard walkthrough + Lighthouse accessibility >= 90
- **Max feedback latency:** 15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 1 | NAV-01 | smoke (build) | `npm run build` | N/A | ⬜ pending |
| 02-01-02 | 01 | 1 | NAV-02 | manual | Manual keyboard test (Tab, Escape) + Lighthouse a11y | N/A | ⬜ pending |
| 02-01-03 | 01 | 1 | NAV-03 | smoke (build) | `npm run build` | N/A | ⬜ pending |
| 02-01-04 | 01 | 1 | NAV-04 | manual | Manual click test in browser | N/A | ⬜ pending |
| 02-02-01 | 02 | 1 | FOOT-01 | smoke (build) | `npm run build` | N/A | ⬜ pending |
| 02-02-02 | 02 | 1 | FOOT-02 | smoke (build) | `npm run build` | N/A | ⬜ pending |
| 02-01-05 | 01 | 1 | A11Y-02 | manual | Lighthouse accessibility audit | N/A | ⬜ pending |
| 02-01-06 | 01 | 1 | A11Y-03 | manual | Manual keyboard test + Lighthouse | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Existing infrastructure covers all phase requirements. No test framework installation needed for Phase 2 — primary validations are:
1. `npm run build` succeeds (static export generates HTML)
2. Manual keyboard testing (Tab through all interactive elements, Escape closes menu)
3. Lighthouse accessibility audit (run in Chrome DevTools)

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Burger menu opens/closes with ARIA + keyboard | NAV-02 | Interactive state + focus management | Tab to burger button, press Enter to open, verify focus moves into menu, press Escape to close, verify focus returns to burger |
| Smooth scroll to #contact with offset | NAV-04 | Scroll behavior requires visual verification | Click "Me contacter", verify smooth scroll, verify section not hidden behind header |
| 48px minimum tap targets | A11Y-02 | Tap target size is a visual/layout check | Run Lighthouse accessibility audit, verify no tap target warnings |
| Visible focus indicators on all interactive elements | A11Y-03 | Focus ring visibility requires visual check | Tab through all links/buttons, verify visible focus ring on each |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
