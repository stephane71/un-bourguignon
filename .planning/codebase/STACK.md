# Technology Stack

**Analysis Date:** 2026-03-16

## Languages

**Primary:**
- TypeScript 5.9.3 - Application and component logic
- TSX/JSX - React component syntax

**Secondary:**
- CSS - Styling via Tailwind CSS
- JavaScript - Build and configuration files (ESM modules)

## Runtime

**Environment:**
- Node.js 24.11.0 (tested with current environment; `.nvmrc` not configured)

**Package Manager:**
- npm 11.6.1
- Lockfile: `package-lock.json` (present)

## Frameworks

**Core:**
- Next.js 16.1.6 - Full-stack React framework with App Router
- React 19.2.4 - UI library
- React DOM 19.2.4 - DOM rendering

**Styling:**
- Tailwind CSS 4.2.1 - Utility-first CSS framework
- @tailwindcss/postcss 4.2.1 - Tailwind CSS PostCSS plugin

**Build/Dev:**
- PostCSS 8.5.8 - CSS transformations
- Next.js Turbopack - Fast bundler for development (enabled via `next dev --turbopack`)

## Key Dependencies

**Runtime:**
- `next` - Framework handling routing, SSR, API routes
- `react` - Core component library
- `react-dom` - React DOM bindings

**Development:**
- `typescript` - Type checking and compilation
- `@types/node` - Node.js type definitions
- `@types/react` - React type definitions
- `@types/react-dom` - React DOM type definitions
- `eslint` - Code linting
- `eslint-config-next` - Next.js ESLint configuration
- `tailwindcss` - CSS framework
- `@tailwindcss/postcss` - PostCSS integration for Tailwind

## Configuration

**TypeScript:**
- Config: `tsconfig.json`
- Target: ES2017
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- JSX: react-jsx (automatic runtime)

**Next.js:**
- Config: `next.config.ts` (minimal configuration, defaults used)
- App Router enabled (Next.js 16.1.6 with app/ directory)

**ESLint:**
- Config: `eslint.config.mjs`
- Extends: `next/core-web-vitals`, `next/typescript`
- Format: Flat config (ESLint v9+)

**PostCSS:**
- Config: `postcss.config.mjs`
- Plugins: Tailwind CSS PostCSS plugin

## Platform Requirements

**Development:**
- Node.js 24.11.0+ (inferred from lock file compatibility)
- npm 11.6.0+ (from package-lock.json)
- Git (for version control)

**Production:**
- Node.js runtime compatible with Next.js 16.1.6
- Build output: Standard Next.js standalone or self-hosted deployment

## Scripts

```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build production bundle
npm start          # Start production server
npm run lint       # Run ESLint checks
```

---

*Stack analysis: 2026-03-16*
