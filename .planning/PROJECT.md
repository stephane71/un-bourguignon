# Site Vitrine — Stéphane Maire EI

## What This Is

Un site vitrine one-page pour Stéphane Maire, consultant numérique indépendant (EI) basé à Moroges (71390). Le site présente son activité d'accompagnement numérique pour micro-entrepreneurs et artisans en Saône-et-Loire, et génère des prises de contact directes (téléphone, email). Mobile-first, statique, sans analytics ni cookies.

## Core Value

Les prospects locaux peuvent comprendre ce que fait Stéphane et le contacter en moins de 30 secondes depuis un smartphone.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ Base Next.js 16.1.6 + Tailwind CSS 4 + TypeScript — existing
- ✓ App Router avec structure `src/app/` — existing

### Active

<!-- Current scope. Building toward these. -->

- [ ] Header avec navigation ancrée (burger mobile) + CTA "Me contacter"
- [ ] Section Hero : nom, sous-titre, slogan, portrait circulaire, 2 CTAs
- [ ] Section À propos : présentation de Stéphane, relation directe, déplacement client
- [ ] Section Pour qui : 4 cards problèmes courants (empilées mobile, 2×2 desktop)
- [ ] Section Services : 5 domaines d'intervention en cards responsives (1→2→3 colonnes)
- [ ] Section Méthode : stepper 3 étapes (vertical mobile, horizontal desktop) + tableau formats
- [ ] Section Bénéfices : 4 bénéfices illustrés (icône trait fin + titre Lora + texte)
- [ ] Section Contact : coordonnées cliquables (tel, email, LinkedIn, Facebook), pas de formulaire
- [ ] Footer : liens réseaux sociaux, email, téléphone, mentions légales
- [ ] Bouton retour en haut (flottant, visible à 300px de scroll)
- [ ] Charte visuelle "Artisan Numérique" : palette écru/sable/brun/terre/or/argile
- [ ] Typographie : Lora (serif) + Instrument Sans via next/font/google
- [ ] Design mobile-first avec breakpoints Tailwind (base → sm → md → lg → xl)
- [ ] Éléments interactifs min. 48px de hauteur
- [ ] Static Export (`output: 'export'`) pour déploiement Vercel
- [ ] Métadonnées SEO (title, description, Open Graph, lang fr)
- [ ] Données structurées JSON-LD (LocalBusiness schema.org)
- [ ] Page mentions légales (`/mentions-legales`)
- [ ] Portrait circulaire (200px mobile, 280px desktop)
- [ ] Favicon initiales "SM"
- [ ] Lighthouse Performance ≥ 90, Accessibilité ≥ 90, SEO ≥ 95
- [ ] Contraste WCAG AA (ratio ≥ 4.5:1 sur texte principal)

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- Formulaire de contact — les coordonnées directes sont le choix délibéré
- Analytics ou tracking — pas de cookies, pas de bannière
- Blog ou espace de contenu — site vitrine statique uniquement
- Prise de rendez-vous en ligne — hors périmètre v1
- Espace client / connexion — pas pertinent
- Multilingue — audience locale francophone uniquement
- E-commerce ou réservation — hors positionnement

## Context

- Le repo contient déjà un setup Next.js 16.1.6 frais (App Router, Tailwind CSS 4, TypeScript strict)
- La structure existante utilise `src/app/` avec path alias `@/*` → `./src/*`
- Tailwind CSS 4 (pas v3 comme mentionné dans le PRD) — adapter la config en conséquence
- Le contenu textuel des sections sera fourni séparément (fichiers `presentation_activite.md` et `design-philosophy.md` à venir)
- La photo portrait sera fournie par Stéphane
- Le SIRET est à compléter pour les mentions légales
- L'audience arrive principalement via smartphone (Google, Google Business Profile, recommandation)
- Positionnement : "La méthode d'un expert, la proximité d'un artisan."

## Constraints

- **Tech stack** : Next.js 16 + Tailwind CSS 4 + TypeScript — déjà en place, pas de changement
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
| One-page avec navigation ancrée | Audience peu tech-savvy, parcours simple et linéaire | — Pending |
| Pas de formulaire de contact | Coordonnées directes = friction minimale pour l'audience | — Pending |
| Tailwind CSS 4 (pas v3) | Déjà installé dans le repo, pas de raison de downgrader | — Pending |
| Next.js 16 (pas 14+) | Version déjà en place, compatible avec le besoin | — Pending |
| Palette "Artisan Numérique" | Cohérence avec l'identité visuelle existante (LinkedIn, PDF) | — Pending |
| Lora + Instrument Sans | Serif pour l'émotion/le sens, sans-serif pour l'information pratique | — Pending |

---
*Last updated: 2026-03-16 after initialization*
