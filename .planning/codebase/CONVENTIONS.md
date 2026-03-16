# Coding Conventions

**Analysis Date:** 2026-03-16

## Naming Patterns

**Files:**
- Component files: PascalCase with `.tsx` extension (e.g., `layout.tsx`, `page.tsx`)
- Styles: lowercase with `.css` extension (e.g., `globals.css`)
- Config files: lowercase with dot notation (e.g., `postcss.config.mjs`, `eslint.config.mjs`)
- TypeScript source: lowercase or PascalCase depending on export type

**Functions:**
- Functional components: PascalCase (e.g., `RootLayout`, `Home`)
- Regular functions: camelCase (following Next.js conventions)
- Arrow functions are standard practice

**Variables:**
- Constants: camelCase (e.g., `metadata`, `nextConfig`)
- Component props: camelCase with TypeScript type annotations

**Types:**
- Type imports: `import type { TypeName } from "module"` (explicit `type` keyword)
- Exported types: PascalCase (e.g., `Metadata`)
- Type annotations on function parameters and return types using TypeScript syntax

## Code Style

**Formatting:**
- Tool: Next.js built-in ESLint with Prettier integration (via `eslint-config-next`)
- Indentation: 2 spaces (standard Node.js/Next.js convention)
- Semicolons: Required at end of statements
- Line endings: LF (Unix style)

**Linting:**
- Tool: ESLint 9.39.4
- Config: `eslint.config.mjs` (flat config format)
- Rules extend: `next/core-web-vitals` and `next/typescript`
- Command: `npm run lint` (runs `next lint`)
- No custom ESLint rule overrides detected; using Next.js defaults

**Quote Style:**
- Double quotes for JSX/HTML attributes and strings
- Template literals for string interpolation

## Import Organization

**Order:**
1. External library imports (React, Next.js, third-party)
2. Type imports (e.g., `import type { Metadata } from "next"`)
3. Relative imports (local components, utilities)
4. CSS/style imports (placed with other imports)

**Example pattern from codebase:**
```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Un Bourguignon",
  description: "Site vitrine professionnel",
};
```

**Path Aliases:**
- Alias: `@/*` maps to `./src/*` (defined in `tsconfig.json`)
- Enables clean imports: `import { component } from "@/app/layout"`

## Error Handling

**Patterns:**
- No explicit error handling detected in current codebase (minimal scope)
- Next.js default error boundaries for page-level errors
- Follow Next.js error handling conventions when implementing error states

## Logging

**Framework:** console (no dedicated logging library configured)

**Patterns:**
- Not extensively used in current minimal codebase
- Use `console.log()`, `console.error()`, `console.warn()` when needed
- Consider structured logging for production scale-up

## Comments

**When to Comment:**
- Explain complex business logic or non-obvious implementations
- Document component props and their purposes
- Avoid obvious comments that restate code

**JSDoc/TSDoc:**
- Use TypeScript type annotations instead of JSDoc for type documentation
- Optional JSDoc comments for exported functions/components explaining purpose

**Example pattern observed:**
```typescript
export const metadata: Metadata = {
  title: "Un Bourguignon",
  description: "Site vitrine professionnel",
};
```

## Function Design

**Size:** Keep functions small and focused
- Current pages: 7-19 lines
- Functions should do one thing well

**Parameters:**
- Use destructuring for object parameters (React component props)
- Type all parameters explicitly with TypeScript
- Use `Readonly<>` wrapper for immutable props (observed in `layout.tsx`)

**Return Values:**
- Components return JSX.Element or React.ReactNode
- Typed return values using TypeScript

## Module Design

**Exports:**
- Named exports for utility functions
- Default exports for pages and layout components (Next.js convention)
- Use `export const` for non-default exports (e.g., `metadata`)

**Barrel Files:**
- Not applicable to current minimal codebase
- If adding shared utilities, use `index.ts` barrel exports under `src/`

**Component Structure:**
- Page components: `src/app/page.tsx` (Next.js App Router)
- Layout components: `src/app/layout.tsx`
- Global styles: `src/app/globals.css`

## TypeScript Strict Mode

**Configuration:** Enabled (`"strict": true` in `tsconfig.json`)

**Requirements:**
- Explicit type annotations on all function parameters and return types
- No `any` type usage without justification
- Strict null checking enforced

---

*Convention analysis: 2026-03-16*
