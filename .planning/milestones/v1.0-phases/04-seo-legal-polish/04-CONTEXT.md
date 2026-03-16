# Phase 4: SEO, Legal & Polish - Context

**Gathered:** 2026-03-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Rendre le site découvrable par les moteurs de recherche, conforme légalement, performant (Lighthouse ≥90/90/95), et prêt pour la production. Couvre : JSON-LD, SEO meta, mentions légales, favicon, accessibilité (contraste, reduced-motion), optimisation images, et print stylesheet.

</domain>

<decisions>
## Implementation Decisions

### Mentions légales
- Page `/mentions-legales` avec contenu complet
- Responsable publication : Stéphane Maire, Entreprise Individuelle
- Adresse : 2 rue des Lavoirs, 71390 Moroges
- SIRET : 940 152 887 00011
- Email : stephane-ei@un-bourguignon.com
- Téléphone : 06 62 46 16 43
- Hébergeur : Vercel Inc., San Francisco, USA (coordonnées officielles Vercel)
- Pas de formulaire, pas de cookies, pas d'analytics → mentions simplifiées

### JSON-LD LocalBusiness
- Schema.org LocalBusiness avec : name, jobTitle ("Consultant numérique"), telephone, email, address (Moroges), sameAs (LinkedIn, Facebook)
- areaServed : France entière (intervention à distance)
- Pas d'openingHours — contact par téléphone/email
- Services listés dans le JSON-LD (facturation électronique, outils numériques, présence en ligne, formation IA, outils personnalisés)

### SEO Meta
- Title : "Stéphane Maire — Consultant numérique de proximité" (déjà en place dans layout.tsx)
- Description SEO déjà en place — ajuster pour inclure localisation Saône-et-Loire
- Open Graph déjà en place — vérifier complétude
- Vérifier hiérarchie sémantique H1 > H2 > H3

### Favicon
- Initiales "SM" — fond brun, texte écru
- Forme : carré arrondi
- Générer en SVG pour netteté à toutes les tailles
- Formats : favicon.ico (16/32px), apple-touch-icon (180px), favicon SVG

### Print stylesheet
- Masquer header, footer, navigation, boutons CTA
- Afficher le contenu principal (sections informatives)
- Coordonnées bien visibles en bas de l'impression
- Pas de couleurs de fond, optimiser pour impression N&B

### Portrait optimisation
- Convertir le portrait PNG en WebP
- Cible : < 100KB pour un bon LCP mobile
- Conserver le PNG comme fallback si nécessaire

### Accessibilité
- Audit contraste WCAG AA (ratio ≥ 4.5:1) sur toutes les combinaisons texte/fond
- Support `prefers-reduced-motion` : désactiver smooth scroll et transitions CSS

### Claude's Discretion
- Approche technique pour le favicon (SVG inline vs fichier statique)
- Stratégie de compression du portrait
- Détails du print stylesheet (marges, tailles de police)
- Implémentation de `prefers-reduced-motion`

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project specs
- `.planning/PROJECT.md` — Vision, contraintes, decisions clés du projet
- `.planning/REQUIREMENTS.md` — Exigences SEO-01 à SEO-06, A11Y-01, A11Y-05, PERF-01 à PERF-05, POLI-01, POLI-02

### Content source
- `content/presentation_activite.md` — Contenu textuel source pour vérifier cohérence SEO

### Existing implementation
- `src/app/layout.tsx` — Metadata SEO/OG déjà partiellement en place (à compléter, pas recréer)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `layout.tsx` : Metadata export avec title, description, OG, Twitter card déjà configurés
- `Container`, `Section` : Primitives UI réutilisables pour la page mentions légales
- Palette de couleurs complète dans les tokens Tailwind (@theme)

### Established Patterns
- Server Components partout sauf MobileMenu — la page mentions légales sera un Server Component
- Static export (`output: 'export'`) — pas de server-side rendering
- next/font/google pour les polices (Lora, Instrument Sans)

### Integration Points
- `src/app/mentions-legales/page.tsx` — nouvelle route à créer
- `src/app/layout.tsx` — compléter metadata, ajouter JSON-LD
- `public/` — favicon files (favicon.ico, apple-touch-icon.png, favicon.svg)
- `src/app/globals.css` — print stylesheet et prefers-reduced-motion

</code_context>

<specifics>
## Specific Ideas

- Le SIRET est confirmé : 940 152 887 00011
- L'adresse complète : 2 rue des Lavoirs, 71390 Moroges
- Hébergeur Vercel — utiliser les coordonnées officielles
- Zone d'intervention France entière (pas juste locale)
- Favicon fond brun (#5B3E31) + texte écru (#F5F0E8), carré arrondi

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 04-seo-legal-polish*
*Context gathered: 2026-03-16*
