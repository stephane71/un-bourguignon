# Architecture

**Analysis Date:** 2026-03-16

## Pattern Overview

**Overall:** Next.js App Router with Server Components (SSR/SSG)

**Key Characteristics:**
- React 19 with TypeScript strict mode
- Next.js 16 with App Router (not Pages Router)
- Server-side rendering by default with Client Component opt-in
- Tailwind CSS 4 for styling with PostCSS integration
- Minimal feature surface - essentially a landing page template

## Layers

**Presentation (UI):**
- Purpose: Render HTML and interactive user interface
- Location: `src/app/`
- Contains: React components (layout, pages), CSS styles
- Depends on: React, Next.js framework
- Used by: Browser clients

**Layout System:**
- Purpose: Provide root HTML structure and metadata
- Location: `src/app/layout.tsx`
- Contains: RootLayout component with metadata export
- Depends on: Next.js Metadata API, React
- Used by: All pages in the application

**Styling:**
- Purpose: Define visual appearance and responsive design
- Location: `src/app/globals.css`
- Contains: Tailwind CSS imports, CSS variables, global styles
- Depends on: Tailwind CSS, PostCSS
- Used by: All components via className utilities

## Data Flow

**Page Rendering Flow:**

1. Browser requests `/`
2. Next.js routes to `src/app/page.tsx` (Home component)
3. Root layout in `src/app/layout.tsx` wraps the page
4. Metadata from layout.tsx is serialized to HTML head
5. Server component renders to HTML string
6. CSS from `src/app/globals.css` is injected via Tailwind
7. HTML response sent to browser

**Styling Flow:**

1. CSS imports in `src/app/layout.tsx` load `src/app/globals.css`
2. Tailwind processes @import directive at build time
3. PostCSS plugin (@tailwindcss/postcss) generates utility classes
4. CSS is bundled with the application
5. Components use className prop with Tailwind utilities (e.g., "flex items-center justify-center")

**Build Flow:**

1. TypeScript compiled to JavaScript (target: ES2017)
2. PostCSS processes CSS with Tailwind plugin
3. Next.js creates optimized production bundle with Turbopack (dev) or default bundler (prod)
4. Static assets served from `public/` directory

## Key Abstractions

**RootLayout:**
- Purpose: Define the base HTML structure and global metadata
- Examples: `src/app/layout.tsx`
- Pattern: Next.js default export RootLayout component with metadata export
- Responsibilities: Set page title, description, language, wrap all pages

**Home Page:**
- Purpose: Landing page entry point
- Examples: `src/app/page.tsx`
- Pattern: Simple functional React component with default export
- Responsibilities: Display hero content (heading)

**Global Styles:**
- Purpose: Apply consistent styling across entire application
- Examples: `src/app/globals.css`
- Pattern: CSS variables for theming, Tailwind CSS utility-first approach
- Responsibilities: Define color scheme, typography, light/dark mode support

## Entry Points

**Application Entry:**
- Location: `src/app/layout.tsx`
- Triggers: Application startup, all page loads
- Responsibilities: Configure root HTML document, set metadata, establish default styling context

**Home Page:**
- Location: `src/app/page.tsx`
- Triggers: GET request to `/`
- Responsibilities: Render landing page content with hero heading

**Next.js Configuration:**
- Location: `next.config.ts`
- Triggers: Build time and development server startup
- Responsibilities: Configure Next.js runtime behavior (currently empty/default)

## Error Handling

**Strategy:** Implicit (Next.js default error boundaries)

**Patterns:**
- No explicit error handling implemented yet
- Next.js provides default error page for 404 and 500 errors
- TypeScript strict mode catches compile-time type errors

## Cross-Cutting Concerns

**Logging:** Not implemented - minimal application scope

**Validation:** TypeScript type system provides compile-time validation for React component props

**Authentication:** Not applicable - public marketing site

**CSS Organization:** Utility-first approach via Tailwind CSS with CSS variables for theming (--background, --foreground)

---

*Architecture analysis: 2026-03-16*
