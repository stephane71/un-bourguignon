# Requirements: Site Vitrine Stéphane Maire EI

**Defined:** 2026-03-16
**Core Value:** Les prospects locaux peuvent comprendre ce que fait Stéphane et le contacter en moins de 30 secondes depuis un smartphone.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Foundation

- [x] **FOND-01**: Static export configured (`output: 'export'`, `images.unoptimized: true`)
- [x] **FOND-02**: Tailwind CSS 4 theme tokens defined via `@theme` (palette écru/sable/brun/terre/or/argile)
- [x] **FOND-03**: Google Fonts loaded via next/font/google (Lora + Instrument Sans) with CSS variables
- [x] **FOND-04**: Dark mode CSS boilerplate stripped from globals.css
- [x] **FOND-05**: Mobile-first responsive layout with Tailwind breakpoints (base/sm/md/lg/xl)
- [x] **FOND-06**: HTML lang attribute set to `fr`

### Navigation

- [x] **NAV-01**: Sticky header with anchor navigation links to all sections
- [x] **NAV-02**: Burger menu on mobile with accessible ARIA attributes and keyboard handling
- [x] **NAV-03**: CTA "Me contacter" in header linking to `#contact`
- [x] **NAV-04**: Smooth scroll to anchors via CSS `scroll-behavior: smooth` + `scroll-margin-top`

### Hero

- [x] **HERO-01**: H1 with name "Stéphane Maire" + sous-titre "Consultant numérique de proximité"
- [x] **HERO-02**: Slogan en italic "La méthode d'un expert, la proximité d'un artisan."
- [x] **HERO-03**: Portrait circulaire (200px mobile, 280px desktop) avec photo réelle
- [x] **HERO-04**: CTA principal "Prendre contact" → `#contact`
- [x] **HERO-05**: CTA secondaire "Découvrir mes services" → `#services`
- [x] **HERO-06**: Layout mobile (portrait centré au-dessus du texte) et desktop (côte à côte)

### À propos

- [x] **APRO-01**: Section présentant Stéphane avec contenu issu de `presentation_activite.md` section 1
- [x] **APRO-02**: Points clés : indépendant, relation directe, déplacement client, EI

### Pour qui

- [x] **POUR-01**: 4 cards présentant les problèmes courants des prospects
- [x] **POUR-02**: Layout cards empilées sur mobile, 2×2 sur desktop
- [x] **POUR-03**: Contenu issu de `presentation_activite.md` section 2

### Services

- [x] **SERV-01**: 5 cards domaines d'intervention (facturation, outils, présence en ligne, IA, outils personnalisés)
- [x] **SERV-02**: Chaque card : titre + description + liste de sous-prestations
- [x] **SERV-03**: Layout 1 colonne mobile, 2 colonnes tablette, 3 colonnes desktop
- [x] **SERV-04**: Contenu issu de `presentation_activite.md` section 3

### Méthode

- [x] **METH-01**: Stepper 3 étapes (Diagnostic terrain, Accompagnement personnalisé, Suivi et autonomie)
- [x] **METH-02**: Layout vertical sur mobile, horizontal sur desktop
- [x] **METH-03**: Numéros d'étape en Lora Bold, couleur or (#D4A574), 36-48px
- [x] **METH-04**: Tableau des formats d'intervention (consultation, mission, atelier, suivi)
- [x] **METH-05**: Contenu issu de `presentation_activite.md` section 4

### Bénéfices

- [x] **BENE-01**: 4 bénéfices concrets avec icône trait fin + titre Lora + texte Instrument Sans
- [x] **BENE-02**: Contenu issu de `presentation_activite.md` section 5 (temps, autonomie, interlocuteur, prix juste)

### Contact

- [x] **CONT-01**: Téléphone cliquable `tel:+33662461643` — tap-friendly (min. 48px)
- [x] **CONT-02**: Email cliquable `mailto:stephane-ei@un-bourguignon.com`
- [x] **CONT-03**: Liens LinkedIn et Facebook avec icônes
- [x] **CONT-04**: Layout mobile : éléments empilés en pleine largeur
- [x] **CONT-05**: Pas de formulaire — coordonnées directes uniquement

### Footer

- [x] **FOOT-01**: Liens réseaux sociaux, email, téléphone
- [x] **FOOT-02**: Lien vers mentions légales

### SEO & Legal

- [ ] **SEO-01**: Meta title "Stéphane Maire — Consultant numérique de proximité | Saône-et-Loire"
- [ ] **SEO-02**: Meta description avec mots-clés locaux et numéro de téléphone
- [ ] **SEO-03**: Open Graph tags (title, description, locale fr_FR, type website)
- [ ] **SEO-04**: JSON-LD LocalBusiness (name, jobTitle, telephone, email, address, sameAs)
- [ ] **SEO-05**: Semantic HTML avec hiérarchie H1 > H2 > H3 correcte
- [ ] **SEO-06**: Page mentions légales `/mentions-legales` (nom, forme juridique, adresse, email, SIRET, hébergeur)

### Accessibilité

- [ ] **A11Y-01**: Contraste WCAG AA (ratio ≥ 4.5:1) sur toutes les combinaisons texte/fond
- [x] **A11Y-02**: Tous éléments interactifs min. 48px de hauteur
- [x] **A11Y-03**: Navigation clavier fonctionnelle avec focus visible
- [x] **A11Y-04**: Attributs alt sur toutes les images
- [ ] **A11Y-05**: Support `prefers-reduced-motion` (désactiver smooth scroll et transitions)

### Performance

- [ ] **PERF-01**: Lighthouse Performance ≥ 90
- [ ] **PERF-02**: Lighthouse Accessibilité ≥ 90
- [ ] **PERF-03**: Lighthouse SEO ≥ 95
- [ ] **PERF-04**: LCP mobile 4G < 2.5s
- [ ] **PERF-05**: Images optimisées WebP, portrait < 100KB

### Polish

- [ ] **POLI-01**: Print-friendly stylesheet (@media print : masquer nav/footer, afficher coordonnées)
- [ ] **POLI-02**: Favicon initiales "SM" dans la palette Artisan Numérique

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Interactions

- **INTE-01**: Scroll-triggered section reveals (fade-in via IntersectionObserver)
- **INTE-02**: Back-to-top button flottant (visible à 300px de scroll)

### Social Proof

- **PROO-01**: Section témoignages clients (une fois des témoignages réels disponibles)

### OG Image

- **OG-01**: Image Open Graph dédiée (screenshot ou social card designée)

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Formulaire de contact | Coordonnées directes = friction minimale pour l'audience non-tech |
| Analytics / tracking | Pas de cookies = pas de bannière = UX plus propre |
| Blog / espace de contenu | Site statique vitrine, Stéphane n'a pas le temps de publier |
| Prise de rendez-vous en ligne | Audience préfère appeler, service tiers inutile |
| Espace client / connexion | Hors positionnement |
| Multilingue | Audience locale francophone uniquement |
| Chat widget / chatbot | Poids JS, feel corporate, l'audience veut parler à une vraie personne |
| Dark mode | Palette "Artisan Numérique" est l'identité — un dark mode nécessiterait un redesign complet |
| Carousel / slider | <1% d'interaction, problèmes d'accessibilité, poids performance |
| Animation lourde (GSAP, Framer Motion) | CSS suffit, 20-50KB économisés |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOND-01 | Phase 1 | Complete |
| FOND-02 | Phase 1 | Complete |
| FOND-03 | Phase 1 | Complete |
| FOND-04 | Phase 1 | Complete |
| FOND-05 | Phase 1 | Complete |
| FOND-06 | Phase 1 | Complete |
| NAV-01 | Phase 2 | Complete |
| NAV-02 | Phase 2 | Complete |
| NAV-03 | Phase 2 | Complete |
| NAV-04 | Phase 2 | Complete |
| HERO-01 | Phase 3 | Complete |
| HERO-02 | Phase 3 | Complete |
| HERO-03 | Phase 3 | Complete |
| HERO-04 | Phase 3 | Complete |
| HERO-05 | Phase 3 | Complete |
| HERO-06 | Phase 3 | Complete |
| APRO-01 | Phase 3 | Complete |
| APRO-02 | Phase 3 | Complete |
| POUR-01 | Phase 3 | Complete |
| POUR-02 | Phase 3 | Complete |
| POUR-03 | Phase 3 | Complete |
| SERV-01 | Phase 3 | Complete |
| SERV-02 | Phase 3 | Complete |
| SERV-03 | Phase 3 | Complete |
| SERV-04 | Phase 3 | Complete |
| METH-01 | Phase 3 | Complete |
| METH-02 | Phase 3 | Complete |
| METH-03 | Phase 3 | Complete |
| METH-04 | Phase 3 | Complete |
| METH-05 | Phase 3 | Complete |
| BENE-01 | Phase 3 | Complete |
| BENE-02 | Phase 3 | Complete |
| CONT-01 | Phase 3 | Complete |
| CONT-02 | Phase 3 | Complete |
| CONT-03 | Phase 3 | Complete |
| CONT-04 | Phase 3 | Complete |
| CONT-05 | Phase 3 | Complete |
| FOOT-01 | Phase 2 | Complete |
| FOOT-02 | Phase 2 | Complete |
| SEO-01 | Phase 4 | Pending |
| SEO-02 | Phase 4 | Pending |
| SEO-03 | Phase 4 | Pending |
| SEO-04 | Phase 4 | Pending |
| SEO-05 | Phase 4 | Pending |
| SEO-06 | Phase 4 | Pending |
| A11Y-01 | Phase 4 | Pending |
| A11Y-02 | Phase 2 | Complete |
| A11Y-03 | Phase 2 | Complete |
| A11Y-04 | Phase 3 | Complete |
| A11Y-05 | Phase 4 | Pending |
| PERF-01 | Phase 4 | Pending |
| PERF-02 | Phase 4 | Pending |
| PERF-03 | Phase 4 | Pending |
| PERF-04 | Phase 4 | Pending |
| PERF-05 | Phase 4 | Pending |
| POLI-01 | Phase 4 | Pending |
| POLI-02 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 57 total
- Mapped to phases: 57
- Unmapped: 0

---
*Requirements defined: 2026-03-16*
*Last updated: 2026-03-16 after roadmap creation*
