---
phase: 02-layout-shell
verified: 2026-03-16T16:00:00Z
status: human_needed
score: 13/13 must-haves verified
re_verification: false
human_verification:
  - test: "Verify header sticky behaviour and scroll shadow"
    expected: "Header stays fixed at top of viewport while scrolling. A subtle shadow appears under the header when scrollY > 0 and disappears when back at top."
    why_human: "scroll event handler and shadow-sm toggle are in MobileMenu useEffect — works at runtime only, cannot be verified by static analysis"
  - test: "Verify mobile burger menu open/close animation"
    expected: "When burger is tapped the overlay appears. Ideally it fades in. When closed it disappears."
    why_human: "The overlay uses `hidden` (display:none) when closed and `motion-safe:transition-opacity opacity-100` when open. The transition from display:none cannot animate — the overlay will appear/disappear without a fade. Confirm whether this is acceptable or needs a fix (e.g. replace `hidden` with `opacity-0 pointer-events-none`)."
  - test: "Verify Escape key closes menu and returns focus to burger button"
    expected: "With mobile menu open, pressing Escape closes the overlay and keyboard focus moves back to the burger button."
    why_human: "Focus management and keyboard event handler are runtime behaviours that require a browser"
  - test: "Verify inert focus trap on main content"
    expected: "While the mobile menu is open, Tab and Shift+Tab do not reach elements in the main content area. Focus stays inside the overlay."
    why_human: "inert attribute behaviour requires a browser with accessibility tree support"
  - test: "Verify anchor link scroll with header offset"
    expected: "Clicking a nav link (once Phase 3 section IDs exist) scrolls the target section into view with approximately 80px offset so the sticky header does not cover the section heading."
    why_human: "scroll-margin-top only activates when actual section[id] elements exist in the DOM; Phase 3 has not been built yet"
---

# Phase 2: Layout Shell Verification Report

**Phase Goal:** Users see a fixed header with working navigation, a footer, and the page structure is ready to receive content sections
**Verified:** 2026-03-16T16:00:00Z
**Status:** human_needed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Footer displays LinkedIn and Facebook icon links, phone number, email, and mentions legales link | VERIFIED | `Footer.tsx` lines 16-39: LinkedIn/Facebook `<a>` with `aria-label`, `tel:+33662461643`, `mailto:stephane-ei@un-bourguignon.com`, `/mentions-legales` |
| 2 | Phone link opens dialer with correct E.164 number (+33662461643) | VERIFIED | `href="tel:+33662461643"` at `Footer.tsx:31` |
| 3 | Email link opens mail client to stephane-ei@un-bourguignon.com | VERIFIED | `href="mailto:stephane-ei@un-bourguignon.com"` at `Footer.tsx:34` |
| 4 | All footer links have 48px minimum tap target | VERIFIED | `linkClassName` includes `min-h-12`; `iconLinkClassName` includes `min-h-12 min-w-12` — applied to all 4 footer links |
| 5 | Smooth scroll enabled in CSS and disabled for prefers-reduced-motion | VERIFIED | `globals.css` lines 34-42: `scroll-behavior: smooth` on `html`, overridden to `auto` inside `@media (prefers-reduced-motion: reduce)` |
| 6 | Anchor scroll targets are offset by header height via scroll-margin-top | VERIFIED | `globals.css` lines 44-46: `section[id] { scroll-margin-top: 5rem; }` |
| 7 | Header stays visible (sticky) while scrolling with anchor links to 4 sections | VERIFIED | `Header.tsx:14` `className="sticky top-0 z-50 bg-white"` — NAV_LINKS array contains all 4 anchors (`#a-propos`, `#services`, `#methode`, `#contact`) |
| 8 | On mobile, burger button opens full-screen overlay menu with ARIA disclosure pattern | VERIFIED | `MobileMenu.tsx`: `aria-expanded={isOpen}`, `aria-controls="mobile-menu"`, `role="dialog"`, `aria-modal="true"` at lines 61-74 |
| 9 | Pressing Escape closes the mobile menu and returns focus to burger button | VERIFIED | `MobileMenu.tsx` lines 30-32: keydown listener checks `e.key === "Escape"` calls `close()`; `close` callback calls `buttonRef.current?.focus()` |
| 10 | CTA "Me contacter" in header links to #contact | VERIFIED | `Header.tsx:35` `<Button as="a" href="#contact">Me contacter</Button>` |
| 11 | All interactive elements in header and mobile menu have 48px minimum tap targets | VERIFIED | Header nav links: `min-h-12`; burger button: `min-h-12 min-w-12`; mobile menu links: `min-h-12` |
| 12 | All interactive elements have visible focus indicators (ring-2) | VERIFIED | Every interactive element in Header.tsx, MobileMenu.tsx, and Footer.tsx carries `focus:outline-none focus:ring-2` with appropriate ring colour and offset |
| 13 | Header shows subtle shadow when page is scrolled | VERIFIED (runtime) | `MobileMenu.tsx` lines 44-53: scroll listener toggles `shadow-sm` class on `document.querySelector("header")` — correct but requires browser to confirm |

**Score:** 13/13 truths verified (5 need runtime human confirmation)

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/components/icons/LinkedIn.tsx` | LinkedIn inline SVG icon | VERIFIED | exports `LinkedIn`, `aria-hidden="true"`, `fill="currentColor"` |
| `src/components/icons/Facebook.tsx` | Facebook inline SVG icon | VERIFIED | exports `Facebook`, `aria-hidden="true"`, `fill="currentColor"` |
| `src/components/icons/Burger.tsx` | Hamburger menu icon | VERIFIED | exports `Burger`, `aria-hidden="true"`, `stroke="currentColor"`, 3 `<line>` elements |
| `src/components/icons/Close.tsx` | Close X icon | VERIFIED | exports `Close`, `aria-hidden="true"`, `stroke="currentColor"`, 2 `<line>` elements |
| `src/components/Footer.tsx` | Footer with social, contact, legal links | VERIFIED | exports `Footer`, no `"use client"`, substantive implementation |
| `src/app/globals.css` | Scroll behaviour and scroll-margin-top CSS | VERIFIED | `scroll-behavior: smooth`, reduced-motion override, `section[id]` with `scroll-margin-top: 5rem` |
| `src/components/Header.tsx` | Sticky header with desktop nav and brand | VERIFIED | exports `Header`, `sticky top-0 z-50`, no `"use client"` |
| `src/components/MobileMenu.tsx` | Client component with burger toggle, ARIA, focus management | VERIFIED | `"use client"`, full ARIA disclosure, inert focus trap, Escape handler |
| `src/app/layout.tsx` | Root layout with Header, main, Footer | VERIFIED | imports and renders `<Header />`, `<main>{children}</main>`, `<Footer />` |

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `Footer.tsx` | `icons/LinkedIn.tsx` | import | WIRED | `import { LinkedIn } from "@/components/icons/LinkedIn"` + rendered at line 21 |
| `Footer.tsx` | `icons/Facebook.tsx` | import | WIRED | `import { Facebook } from "@/components/icons/Facebook"` + rendered at line 27 |
| `Header.tsx` | `MobileMenu.tsx` | import and render | WIRED | `import { MobileMenu }` at line 3, `<MobileMenu />` at line 41 |
| `Header.tsx` | `ui/Button.tsx` | import for CTA | WIRED | `import { Button }` at line 2, `<Button as="a" href="#contact">` at line 35 |
| `layout.tsx` | `Header.tsx` | import and render | WIRED | `import { Header }` at line 4, `<Header />` at line 32 |
| `layout.tsx` | `Footer.tsx` | import and render | WIRED | `import { Footer }` at line 5, `<Footer />` at line 34 |
| `MobileMenu.tsx` | `document.querySelector('main')` | inert attribute | WIRED | `document.querySelector("main")?.setAttribute("inert", "")` at line 27; `<main>` exists in `layout.tsx:33` |

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|------------|-------------|--------|----------|
| NAV-01 | 02-02-PLAN.md | Sticky header with anchor navigation links to all sections | SATISFIED | `Header.tsx`: `sticky top-0 z-50`, 4 NAV_LINKS anchors |
| NAV-02 | 02-02-PLAN.md | Burger menu on mobile with accessible ARIA attributes and keyboard handling | SATISFIED | `MobileMenu.tsx`: full ARIA disclosure, Escape handler |
| NAV-03 | 02-02-PLAN.md | CTA "Me contacter" in header linking to #contact | SATISFIED | `Header.tsx:35`: `<Button as="a" href="#contact">Me contacter</Button>` |
| NAV-04 | 02-01-PLAN.md | Smooth scroll to anchors via CSS scroll-behavior + scroll-margin-top | SATISFIED | `globals.css`: both rules present |
| FOOT-01 | 02-01-PLAN.md | Liens réseaux sociaux, email, téléphone | SATISFIED | `Footer.tsx`: LinkedIn, Facebook, `tel:`, `mailto:` links all present |
| FOOT-02 | 02-01-PLAN.md | Lien vers mentions légales | SATISFIED | `Footer.tsx:37`: `href="/mentions-legales"` |
| A11Y-02 | both plans | Tous éléments interactifs min. 48px de hauteur | SATISFIED | `min-h-12` (48px) on every interactive element in Header, MobileMenu, Footer |
| A11Y-03 | 02-02-PLAN.md | Navigation clavier fonctionnelle avec focus visible | SATISFIED (runtime) | `focus:ring-2` on all interactive elements; Escape-to-close + focus restore in MobileMenu |

All 8 requirement IDs from both plan frontmatters are accounted for. No orphaned requirements detected.

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `MobileMenu.tsx` | 75 | `hidden` class used for closed state blocks CSS transition | Info | The `motion-safe:transition-opacity duration-200` class applies when the menu opens but `display:none` (`hidden`) prevents any fade-in animation. The menu appears/disappears instantly. This is a cosmetic limitation — the menu is functionally correct. |

No TODO/FIXME/placeholder comments found. No empty implementations found. No stubs detected.

### Human Verification Required

#### 1. Header scroll shadow

**Test:** Run `npm run dev`, open http://localhost:3000, scroll the page down a few hundred pixels.
**Expected:** A subtle drop shadow appears under the sticky header. When scrolling back to the top the shadow disappears.
**Why human:** The `shadow-sm` toggle is applied via a runtime scroll event listener in `MobileMenu.tsx` — the DOM mutation cannot be verified statically.

#### 2. Mobile menu open/close (and animation behaviour)

**Test:** Open at a viewport width below 1024px (or use DevTools responsive mode). Tap the burger icon.
**Expected:** A full-screen white overlay appears below the header, showing 4 nav links and "Me contacter". The burger icon changes to X.
**Why human:** Runtime DOM toggle. Also note: the overlay does NOT fade in — it appears instantly because `hidden` (display:none) cannot transition. Confirm whether an instant appearance is acceptable or whether the `hidden` class should be replaced with `opacity-0 pointer-events-none` for a proper fade.

#### 3. Escape key and focus restore

**Test:** Open the mobile menu, then press Escape.
**Expected:** The overlay closes and keyboard focus moves to the burger button.
**Why human:** Focus management and keyboard event handling require a live browser with accessibility tooling.

#### 4. Inert focus trap

**Test:** Open the mobile menu and press Tab repeatedly.
**Expected:** Tab cycles only through elements inside the overlay (4 links + CTA button). It does NOT reach header, main content, or footer elements while the menu is open.
**Why human:** The `inert` attribute behaviour requires a browser accessibility tree.

#### 5. Anchor scroll offset (deferred to Phase 3)

**Test:** Once Phase 3 content sections with `id` attributes exist, click a nav link.
**Expected:** The target section scrolls into view with the sticky header not covering it (approximately 80px top offset).
**Why human:** Section IDs do not exist yet; this can only be verified after Phase 3.

### Gaps Summary

No functional gaps found. All 13 observable truths are verified through static analysis and a passing production build. Five items require runtime browser verification (marked as human_needed). One cosmetic note: the mobile menu open animation is instant rather than a fade due to the `hidden` / `motion-safe:transition-opacity` combination — this is a quality-of-life item, not a blocker.

---

_Verified: 2026-03-16T16:00:00Z_
_Verifier: Claude (gsd-verifier)_
