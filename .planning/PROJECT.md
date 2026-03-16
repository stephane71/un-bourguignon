# Site Vitrine — Stéphane Maire EI

## What This Is

Un site vitrine one-page statique pour Stéphane Maire, consultant numérique indépendant (EI) basé à Moroges (71390). Le site présente son activité d'accompagnement numérique pour micro-entrepreneurs et artisans en Saône-et-Loire, avec données structurées JSON-LD, et génère des prises de contact directes (téléphone, email). Mobile-first, statique, sans analytics ni cookies. Déployable sur Vercel.

## Core Value

Les prospects locaux peuvent comprendre ce que fait Stéphane et le contacter en moins de 30 secondes depuis un smartphone.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ Base Next.js 16.1.6 + Tailwind CSS 4 + TypeScript — existing
- ✓ App Router avec structure `src/app/` — existing
- ✓ Header avec navigation ancrée (burger mobile) + CTA "Me contacter" — v1.0
- ✓ Section Hero : nom, sous-titre, slogan, portrait circulaire, 2 CTAs — v1.0
- ✓ Section À propos : présentation de Stéphane, relation directe, déplacement client — v1.0
- ✓ Section Pour qui : 4 cards problèmes courants (empilées mobile, 2×2 desktop) — v1.0
- ✓ Section Services : 5 domaines d'intervention en cards responsives (1→2→3 colonnes) — v1.0
- ✓ Section Méthode : stepper 3 étapes + tableau formats — v1.0
- ✓ Section Bénéfices : 4 bénéfices illustrés (icône trait fin + titre Lora + texte) — v1.0
- ✓ Section Contact : coordonnées cliquables (tel, email, LinkedIn, Facebook), pas de formulaire — v1.0
- ✓ Footer : liens réseaux sociaux, email, téléphone, mentions légales — v1.0
- ✓ Charte visuelle "Artisan Numérique" : palette écru/sable/brun/terre/or/argile — v1.0
- ✓ Typographie : Lora (serif) + Instrument Sans via next/font/google — v1.0
- ✓ Design mobile-first avec breakpoints Tailwind — v1.0
- ✓ Éléments interactifs min. 48px de hauteur — v1.0
- ✓ Static Export (`output: 'export'`) pour déploiement Vercel — v1.0
- ✓ Métadonnées SEO (title, description, Open Graph, lang fr) — v1.0
- ✓ Données structurées JSON-LD (LocalBusiness schema.org) — v1.0
- ✓ Page mentions légales (`/mentions-legales`) — v1.0
- ✓ Portrait circulaire (200px mobile, 280px desktop) en WebP — v1.0
- ✓ Favicon initiales "SM" — v1.0
- ✓ Lighthouse Performance ≥ 90, Accessibilité ≥ 90, SEO ≥ 95 — v1.0
- ✓ Contraste WCAG AA — v1.0

### Active

<!-- Current scope. Building toward these. -->

(None — next milestone not yet planned)

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- Formulaire de contact — les coordonnées directes sont le choix délibéré
- Analytics ou tracking — pas de cookies, pas de bannière
- Blog ou espace de contenu — site vitrine statique uniquement
- Prise de rendez-vous en ligne — hors périmètre
- Espace client / connexion — pas pertinent
- Multilingue — audience locale francophone uniquement
- E-commerce ou réservation — hors positionnement
- Dark mode — palette "Artisan Numérique" est l'identité, un dark mode nécessiterait un redesign complet
- Carousel / slider — <1% d'interaction, problèmes d'accessibilité, poids performance
- Animation lourde (GSAP, Framer Motion) — CSS suffit, 20-50KB économisés
- Chat widget / chatbot — poids JS, feel corporate, l'audience veut parler à une vraie personne
- Bouton retour en haut — dépriorisé (v2 candidate: INTE-02)

## Context

**Current state (v1.0 shipped 2026-03-16):**
- 1,336 LOC (TSX/TS/CSS), 21 feature commits
- Tech stack: Next.js 16.1.6, Tailwind CSS 4, TypeScript strict
- 7 sections (Hero → Contact), sticky header with mobile burger, footer
- JSON-LD LocalBusiness, Open Graph, SM favicon, WebP portrait
- /mentions-legales with SIRET, print stylesheet, WCAG AA contrast
- Static export to `out/` — ready for Vercel deployment
- All 57 v1 requirements satisfied, Lighthouse targets met

**Known tech debt:**
- ESLint config broken (FlatCompat + ESLint 9.x incompatibility)
- NAV_LINKS duplicated in Header.tsx and MobileMenu.tsx
- MobileMenu overlay appears/disappears instantly (no fade animation)

**v2 candidates (from REQUIREMENTS.md):**
- INTE-01: Scroll-triggered section reveals (IntersectionObserver)
- INTE-02: Back-to-top button
- PROO-01: Section témoignages clients
- OG-01: Image Open Graph dédiée

## Constraints

- **Tech stack** : Next.js 16 + Tailwind CSS 4 + TypeScript — en place
- **Rendu** : Static Export obligatoire (`output: 'export'`) — aucun serveur requis
- **Hébergement** : Vercel (déploiement automatisé depuis Git)
- **Mobile-first** : Layout conçu d'abord pour smartphone, enrichi via breakpoints
- **Accessibilité** : WCAG AA, éléments tap min. 48px, navigation clavier
- **Performance** : LCP mobile 4G < 2.5s, images WebP via next/image
- **Pas de JS côté serveur** : Pas d'API routes, pas de server actions — site purement statique
- **Contenu** : Texte en français, coordonnées réelles (téléphone, email)

## Key Decisions

<!-- Decisions that constrain future work. Add throughout project lifecycle. -->

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| One-page avec navigation ancrée | Audience peu tech-savvy, parcours simple et linéaire | ✓ Good — 7 sections in narrative flow |
| Pas de formulaire de contact | Coordonnées directes = friction minimale pour l'audience | ✓ Good — tel/email/social links only |
| Tailwind CSS 4 (pas v3) | Déjà installé dans le repo, pas de raison de downgrader | ✓ Good — @theme tokens work well |
| Next.js 16 (pas 14+) | Version déjà en place, compatible avec le besoin | ✓ Good — static export works |
| Palette "Artisan Numérique" | Cohérence avec l'identité visuelle existante | ✓ Good — 7 tokens, warm professional feel |
| Lora + Instrument Sans | Serif pour l'émotion, sans-serif pour l'information | ✓ Good — renders well, no FOUT |
| Server Components par défaut | Seul MobileMenu a besoin de "use client" | ✓ Good — minimal client JS |
| @theme static + @theme inline runtime | Tailwind CSS 4 dual token strategy | ✓ Good — colors static, fonts runtime |
| inert focus trap (pas de lib) | Attribut natif sur main pendant menu ouvert | ✓ Good — simpler than library |
| Argile over or-light for step numbers | WCAG AA contrast compliance (3.69:1 vs 2.23:1) | ✓ Good — accessibility > visual spec |
| JSON-LD in body (not head) | Next.js App Router guidance for script injection | ✓ Good — renders in static output |
| PNG-in-ICO for favicon | Universal browser support without conversion tools | ✓ Good — works everywhere |

---
*Last updated: 2026-03-16 after v1.0 milestone*
