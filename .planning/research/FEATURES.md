# Feature Landscape

**Domain:** One-page showcase website for a local service professional (consultant numerique, micro-entrepreneur)
**Target audience:** Non-tech-savvy micro-entrepreneurs and artisans in Saone-et-Loire, arriving primarily via smartphone
**Researched:** 2026-03-16
**Confidence:** MEDIUM (based on domain expertise; web search unavailable for verification)

## Table Stakes

Features users expect. Missing = product feels incomplete or unprofessional.

### Navigation & Structure

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Sticky/fixed header with anchor nav | Users need orientation on a single long page. Without it, they feel lost after scrolling. | Low | Burger menu on mobile, inline links on desktop. Must collapse on scroll to save screen real estate. |
| Smooth scroll to anchors | Jarring jump-to-section feels broken to users. Smooth scroll signals polish. | Low | CSS `scroll-behavior: smooth` + `scroll-margin-top` offset for sticky header. No JS library needed. |
| Back-to-top button | On long one-page sites, users expect a quick way back. Especially important on mobile. | Low | Appears after ~300px scroll. Fixed position, bottom-right. Min 48px tap target. |
| Mobile-first responsive layout | 70%+ traffic is mobile for local services. A non-mobile site is invisible. | Medium | Design at 375px first, then enrich at sm/md/lg breakpoints. Not "shrink desktop." |
| Logical section ordering | Hero > About/Pour qui > Services > Methode > Benefices > Contact. Users expect a narrative flow. | Low | Follows the classic AIDA funnel: Attention, Interest, Desire, Action. |

### Hero Section

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Clear value proposition above fold | Visitors decide in 3-5 seconds. The hero must answer "what do you do and for whom." | Low | Name + role + one-line positioning. No jargon. "Accompagnement numerique pour artisans et micro-entrepreneurs." |
| Professional portrait photo | A face builds trust. For a solo consultant, the person IS the brand. Absence feels anonymous. | Low | Circular crop, optimized WebP via next/image. Placeholder until real photo provided. |
| Primary CTA visible without scrolling | The most important action (contact) must be reachable immediately. | Low | "Me contacter" button that scrolls to contact section. Secondary CTA: "Decouvrir mes services." |

### Contact & Conversion

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Clickable phone number (`tel:` link) | The primary conversion for local services. Non-tech users tap to call. Must work in one tap. | Low | `<a href="tel:+33...">` with visible number. This is THE most important interactive element. |
| Clickable email (`mailto:` link) | Secondary contact method. Some users prefer writing. | Low | `<a href="mailto:...">` with visible address. |
| Contact section with all coordinates grouped | Users expect one place to find all contact info. Scattered = frustration. | Low | Phone, email, social links. Address/zone optional but useful for local SEO. |
| Social links (LinkedIn, Facebook) | Professional presence signals legitimacy. Expected for any consultant. | Low | Icon links with `target="_blank"` and `rel="noopener noreferrer"`. Accessible labels. |

### SEO & Discoverability

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Meta title + description in French | Google snippet is the storefront. Bad meta = invisible in search. | Low | `<title>` and `<meta name="description">` with location + service keywords. |
| Open Graph tags | Shared links on social/messaging must show a proper preview. Without OG, links look spammy. | Low | `og:title`, `og:description`, `og:image`, `og:url`, `og:locale` (fr_FR). |
| JSON-LD LocalBusiness schema | Google uses structured data for local results, knowledge panels, and rich snippets. | Medium | Schema.org/LocalBusiness with name, address, phone, URL, geo coordinates, service area, opening hours. |
| `lang="fr"` on `<html>` | Screen readers and search engines need language declaration. | Low | Already standard in Next.js layout. |
| Semantic HTML (proper heading hierarchy) | SEO and accessibility both depend on h1 > h2 > h3 structure. | Low | One h1 (hero), h2 per section, h3 for subsections. No skipping levels. |

### Accessibility

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| WCAG AA color contrast (4.5:1 min) | Legal obligation in France (RGAA). Audience includes older users with vision issues. | Low | Test every text/background combination. The warm palette (ecru/brun) needs careful contrast checks. |
| Minimum 48px touch targets | Small buttons = rage taps. Especially critical for the phone number CTA. | Low | Apply to all interactive elements: links, buttons, nav items. |
| Keyboard navigation | Tab order must follow visual order. Focus indicators must be visible. | Low | Skip-to-content link, visible focus rings, logical tab order. |
| Alt text on all images | Screen readers need it. Also serves as fallback when images fail to load. | Low | Portrait: descriptive alt. Decorative icons: `aria-hidden="true"`. |
| Reduced motion support | Some users have vestibular disorders. Respect `prefers-reduced-motion`. | Low | Wrap scroll animations and transitions in media query. Smooth scroll becomes instant. |

### Legal & Trust

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Mentions legales page | Legal requirement in France (LCEN). Non-negotiable. | Low | Separate route `/mentions-legales`. Editeur, hebergeur, SIRET. |
| No cookies / no tracking banner | Deliberate choice. No analytics = no cookie banner = cleaner UX and legal simplicity. | Low | Explicitly NOT having cookies is a feature. No GDPR banner needed. |

### Performance

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Fast initial load (LCP < 2.5s on 4G) | Local audience often on mediocre mobile connections (rural Saone-et-Loire). Slow = bounce. | Medium | Static export, optimized images, minimal JS, system font fallbacks while Google Fonts load. |
| Optimized images (WebP, responsive sizes) | Images are the heaviest assets. Unoptimized = slow and data-expensive. | Low | next/image handles format conversion and srcset. Keep portrait under 100KB. |

## Differentiators

Features that set the site apart from generic local business sites. Not expected, but create competitive advantage.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| "Artisan Numerique" visual identity | Warm, earthy palette (ecru/sable/brun) with serif headings (Lora) feels human and approachable, not corporate. Stands out from generic blue/white templates. | Medium | Requires disciplined application across all sections. The typography pairing (Lora + Instrument Sans) signals craft. |
| Problem-first "Pour qui" section | Instead of listing services abstractly, showing 4 real problems micro-entrepreneurs face ("Mon site n'apparait pas sur Google", "Je ne sais pas utiliser mes outils") creates immediate recognition. | Low | Card-based layout. Each card = one pain point the audience has RIGHT NOW. Empathy-driven, not feature-driven. |
| 3-step method visualization | Making the engagement process transparent ("Echange > Diagnostic > Action") reduces anxiety about hiring a consultant. Most competitor sites lack this. | Medium | Stepper component: vertical on mobile, horizontal on desktop. Plus a format table (sur site, a distance, etc.) |
| Benefits section with intent-based framing | Instead of "what I do," showing "what you get" (autonomy, clarity, time savings). Reframes the value around the client. | Low | 4 benefit cards with thin-line icons. Avoids generic stock imagery. |
| Deliberate absence of contact form | Counter-intuitive but correct for this audience: a form feels like "filling out paperwork." Direct phone/email = faster, more personal, less intimidating. | Low | This is a UX decision, not a missing feature. Should feel intentional, not lazy. |
| Scroll-triggered section reveals | Subtle fade-in as sections enter viewport adds polish without being distracting. Makes the page feel alive vs. a flat document. | Low | CSS-only with `@keyframes` + Intersection Observer. Respect `prefers-reduced-motion`. |
| Favicon with personal branding ("SM") | Most local sites have no favicon or a generic one. Custom initials in the tab/bookmarks reinforces brand recognition. | Low | SVG favicon, matches the warm palette. |
| Service area mention for local SEO | Explicitly stating "Saone-et-Loire," "Chalon-sur-Saone," "Autun," etc. in content helps with geo-targeted search. | Low | Natural placement in content, not keyword-stuffed. Also in JSON-LD `areaServed`. |
| Print-friendly styling | Some non-tech users print web pages. A `@media print` stylesheet that hides nav/footer and formats content cleanly is a small touch that signals attention to the audience. | Low | Hide sticky header, back-to-top, social icons. Show contact info prominently. |

## Anti-Features

Features to explicitly NOT build. Each has reasoning to prevent scope creep.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Contact form | The target audience finds forms intimidating ("What if I write the wrong thing?"). Phone and email are more direct and personal. Forms also require server-side handling or third-party services, breaking the static export constraint. | Prominent clickable phone number + email link. The phone is the hero CTA. |
| Analytics / tracking | No analytics = no cookies = no GDPR banner = cleaner UX. For a one-page site with a phone CTA, call volume IS the metric. Adding analytics adds complexity with near-zero actionable insight. | Track conversions by asking "How did you find me?" during calls. |
| Blog / content section | A blog requires ongoing content creation. Stephane is a solo consultant; his time is better spent with clients. An empty or stale blog signals neglect. | Keep the site static and evergreen. Update services/positioning annually at most. |
| Image carousel / slider | Carousels have abysmal interaction rates (<1% click past first slide). They slow page load and create accessibility issues. | One strong hero image. Static content. |
| Animated background / parallax | Distracting, causes motion sickness for some users, increases complexity, hurts performance on low-end phones. | Subtle section transitions only, respecting `prefers-reduced-motion`. |
| Chat widget / chatbot | Adds JS weight, requires a service, feels corporate. The audience wants to talk to a real person, not a bot. | Phone number. |
| Multi-page architecture | Fragments the content, increases navigation complexity, loses the narrative flow. For 5-7 sections of content, one page is optimal. | Single page with anchor navigation. Only exception: `/mentions-legales` (legal requirement). |
| Online booking / calendar integration | Requires third-party service, adds complexity, and the audience prefers calling. Premature optimization for a consultant starting out. | "Appelez-moi pour convenir d'un rendez-vous." |
| Testimonials section (for now) | Stephane is early in his independent practice. Fake or placeholder testimonials destroy trust. Real ones can be added later. | Defer to v2 once genuine testimonials are collected. The "Methode" section builds confidence instead. |
| Dark mode toggle | Adds complexity for marginal benefit. The warm earthy palette is integral to the brand identity and would need a complete redesign for dark mode. | Single well-designed light theme. |
| Language switcher | Audience is exclusively francophone and local. English adds zero value and doubles content maintenance. | French only, `lang="fr"`. |
| Cookie consent banner | No cookies = no banner needed. The banner itself is a negative UX signal ("this site is tracking me"). | Proudly no cookies. Can mention in mentions legales. |
| Heavy animation library (GSAP, Framer Motion) | Adds 20-50KB+ of JS for effects that CSS can handle. Violates the performance constraint. | CSS transitions + Intersection Observer for scroll reveals. |

## Feature Dependencies

```
Header nav links --> Section IDs (each section must have an id attribute)
Smooth scroll    --> Section IDs + scroll-margin-top (offset for sticky header)
Back-to-top      --> Scroll position detection (IntersectionObserver or scroll event)
Hero CTAs        --> Contact section ID (primary) + Services section ID (secondary)
JSON-LD          --> Contact data (phone, email, address) must be defined centrally
OG image         --> Hero section design must be finalized first (screenshot or designed image)
Portrait photo   --> Must be provided by Stephane before hero section is complete
Favicon          --> Visual identity (palette, typography) must be defined first
Print styles     --> All sections must be built before print optimization
Scroll reveals   --> All sections must have final content before animation timing is tuned
Service cards    --> Content definition (5 services) must be finalized
Pour qui cards   --> Content definition (4 pain points) must be finalized
Methode stepper  --> Content definition (3 steps + format table) must be finalized
```

## MVP Recommendation

**Prioritize (Phase 1 - Core):**
1. Hero section with value proposition + portrait placeholder + 2 CTAs
2. Contact section with clickable phone + email + social links
3. Header with anchor navigation (burger mobile)
4. Semantic HTML structure with all section IDs
5. SEO metadata + JSON-LD LocalBusiness
6. Mentions legales page
7. Mobile-first responsive layout
8. Accessibility fundamentals (contrast, touch targets, keyboard nav)
9. Static export + performance optimization

**Prioritize (Phase 2 - Content sections):**
1. Pour qui section (4 problem cards)
2. Services section (5 service cards)
3. Methode section (stepper + format table)
4. A propos section
5. Benefices section
6. Footer with links
7. Back-to-top button

**Prioritize (Phase 3 - Polish):**
1. Scroll-triggered section reveals
2. Visual identity refinement (palette, typography consistency)
3. Favicon
4. Print stylesheet
5. OG image
6. Lighthouse audit and fixes

**Defer to v2:** Testimonials (once real ones exist), online booking, blog.

## Sources

- PROJECT.md requirements (primary source for validated features)
- Domain expertise on local business websites, one-page design patterns, French legal requirements (LCEN/RGAA), and mobile UX best practices
- Note: Web search was unavailable during this research. Confidence is MEDIUM based on training data. Key claims about JSON-LD LocalBusiness schema, WCAG AA requirements, and French LCEN obligations are well-established standards unlikely to have changed.
