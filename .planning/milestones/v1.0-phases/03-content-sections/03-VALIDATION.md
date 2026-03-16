---
phase: 3
slug: content-sections
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-16
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None (build validation + ESLint) |
| **Config file** | eslint.config.mjs |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npm run lint` |
| **Estimated runtime** | ~15 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && npm run lint`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 03-01-01 | 01 | 1 | HERO-01 | build | `npm run build` | N/A | ⬜ pending |
| 03-01-02 | 01 | 1 | HERO-02 | build | `npm run build` | N/A | ⬜ pending |
| 03-01-03 | 01 | 1 | HERO-03 | build | `npm run build` | N/A | ⬜ pending |
| 03-01-04 | 01 | 1 | HERO-04 | build | `npm run build` | N/A | ⬜ pending |
| 03-01-05 | 01 | 1 | HERO-05 | build | `npm run build` | N/A | ⬜ pending |
| 03-01-06 | 01 | 1 | HERO-06 | manual | Visual check 375px/1024px | N/A | ⬜ pending |
| 03-02-01 | 02 | 1 | APRO-01, APRO-02 | build | `npm run build` | N/A | ⬜ pending |
| 03-02-02 | 02 | 1 | POUR-01, POUR-02, POUR-03 | build | `npm run build` | N/A | ⬜ pending |
| 03-02-03 | 02 | 1 | SERV-01, SERV-02, SERV-03, SERV-04 | build+manual | `npm run build` + visual grid check | N/A | ⬜ pending |
| 03-02-04 | 02 | 1 | METH-01, METH-02, METH-03, METH-04, METH-05 | build+manual | `npm run build` + visual stepper check | N/A | ⬜ pending |
| 03-02-05 | 02 | 1 | BENE-01, BENE-02 | build | `npm run build` | N/A | ⬜ pending |
| 03-03-01 | 03 | 1 | CONT-01, CONT-02, CONT-03, CONT-04, CONT-05 | build+manual | `npm run build` + tap test | N/A | ⬜ pending |
| 03-03-02 | 03 | 1 | A11Y-04 | lint | `npm run lint` | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Existing infrastructure covers all phase requirements. Build validation (`npm run build`) confirms all components compile. ESLint with `eslint-config-next` provides jsx-a11y checks for alt attributes and heading order. No additional test framework needed for static content components.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Hero responsive layout | HERO-06 | CSS layout visual | Check portrait centered above text at 375px, side-by-side at 1024px |
| Service card grid columns | SERV-03 | CSS grid visual | Verify 1col/375px, 2col/768px, 3col/1024px with 5th card left-aligned |
| Methode stepper orientation | METH-02 | CSS layout visual | Verify vertical at 375px, horizontal at 1024px |
| Phone tel: link | CONT-01 | Requires mobile device | Tap phone number, verify dialer opens |
| Email mailto: link | CONT-02 | Requires mail client | Click email, verify mail client opens |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
