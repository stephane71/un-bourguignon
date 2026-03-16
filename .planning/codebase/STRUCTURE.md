# Codebase Structure

**Analysis Date:** 2026-03-16

## Directory Layout

```
un-bourguignon/
├── src/                    # Source code (TypeScript/TSX)
│   └── app/                # Next.js App Router pages and layouts
├── public/                 # Static assets (empty or minimal)
├── .planning/              # Project planning documents
│   └── codebase/           # Architecture and code analysis docs
├── node_modules/           # Dependencies (auto-managed)
├── .next/                  # Next.js build output (generated)
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
├── tsconfig.json           # TypeScript compiler configuration
├── next.config.ts          # Next.js configuration
├── eslint.config.mjs       # ESLint configuration
├── postcss.config.mjs      # PostCSS configuration
└── .gitignore              # Git exclusion patterns
```

## Directory Purposes

**`src/`:**
- Purpose: All application source code
- Contains: TypeScript components, styles, layouts
- Key files: `src/app/` - the main application directory

**`src/app/`:**
- Purpose: Next.js App Router directory - defines all pages and layouts
- Contains: Page components, root layout, global styles
- Key files: `layout.tsx` (root), `page.tsx` (home page), `globals.css` (global styles)

**`public/`:**
- Purpose: Static assets served directly (images, fonts, favicons)
- Contains: Currently empty - ready for static files
- Key files: None yet

**`.planning/codebase/`:**
- Purpose: Architecture and code analysis documents
- Contains: ARCHITECTURE.md, STRUCTURE.md, and other codebase documentation
- Key files: Architecture analysis documents

**`.next/`:**
- Purpose: Next.js build output and development artifacts
- Generated: Yes (by Next.js build process)
- Committed: No (in .gitignore)

**`node_modules/`:**
- Purpose: Installed npm dependencies
- Generated: Yes (by npm install)
- Committed: No (in .gitignore)

## Key File Locations

**Entry Points:**
- `src/app/layout.tsx`: Root HTML layout and metadata definition
- `src/app/page.tsx`: Home page component (route: /)

**Configuration:**
- `tsconfig.json`: TypeScript compiler settings, path aliases (@/* → ./src/*)
- `next.config.ts`: Next.js runtime configuration
- `eslint.config.mjs`: ESLint linting rules (extends next/core-web-vitals, next/typescript)
- `postcss.config.mjs`: PostCSS plugins (includes @tailwindcss/postcss)
- `package.json`: Project metadata, scripts (dev, build, start, lint), dependencies

**Core Logic:**
- `src/app/layout.tsx`: RootLayout component with Metadata export
- `src/app/page.tsx`: Home page component

**Styling:**
- `src/app/globals.css`: Global CSS with Tailwind import, CSS variables for dark/light mode

## Naming Conventions

**Files:**
- React components: PascalCase with `.tsx` extension (e.g., `layout.tsx`, `page.tsx`)
- CSS files: kebab-case with `.css` extension (e.g., `globals.css`)
- Config files: config pattern with appropriate extension (e.g., `next.config.ts`, `postcss.config.mjs`)

**Directories:**
- kebab-case for Next.js App Router segments: `src/app/` (Next.js convention)
- Lowercase for directory segments: future routes would follow `/[segment-name]` pattern

**Components:**
- Default exports for page components: `export default function Home() {}`
- Named exports for utilities/helpers: Not yet established (minimal codebase)

**CSS Classes:**
- Tailwind utility classes: `flex`, `items-center`, `justify-center`, `min-h-screen`, `text-4xl`, `font-bold`
- CSS variables: `--background`, `--foreground` (kebab-case)

## Where to Add New Code

**New Feature/Page:**
- Route file: `src/app/[route-name]/page.tsx`
- Layout (if unique): `src/app/[route-name]/layout.tsx`
- Styles: Import in layout.tsx or use Tailwind utilities
- Pattern: Follow existing page.tsx structure - default export function component

**New Component (Reusable):**
- Location: `src/components/` (create this directory for shared components)
- Naming: PascalCase.tsx (e.g., `src/components/Button.tsx`)
- Export: Named or default export based on usage pattern

**Utilities/Helpers:**
- Location: `src/lib/` or `src/utils/` (create as needed)
- Naming: camelCase.ts (e.g., `src/lib/formatting.ts`)
- Export: Named exports for specific functions

**Global Styles:**
- Location: `src/app/globals.css`
- Pattern: Use Tailwind @import, CSS variables, and utility classes (prefer utilities over custom CSS)

## Special Directories

**`.next/`:**
- Purpose: Build output and cache
- Generated: Yes
- Committed: No

**`node_modules/`:**
- Purpose: Installed dependencies
- Generated: Yes (by npm install)
- Committed: No

**`.planning/codebase/`:**
- Purpose: Project documentation and analysis
- Generated: Yes (by GSD tools)
- Committed: Yes

## Path Aliases

**Import Alias:**
- `@/*` → `./src/*`

**Usage:**
```typescript
// Instead of: import Component from '../../../components/Button'
import Button from '@/components/Button'
```

---

*Structure analysis: 2026-03-16*
