# Phase 04: Deferred Items

## ESLint Configuration Incompatibility

**Discovered during:** Plan 04-03, Task 1 (lint check)
**Severity:** Low (does not affect build or runtime)
**Issue:** `next lint` fails with "Invalid project directory provided, no such directory: lint" (Next.js 16 CLI parsing). Running `npx eslint src/` directly fails with circular JSON reference in `@eslint/eslintrc` FlatCompat wrapper with ESLint 9.x.
**Impact:** Lint cannot run. TypeScript checking during build still validates type safety.
**Suggested fix:** Migrate eslint.config.mjs from FlatCompat wrapper to native ESLint 9 flat config format, or pin eslint to a compatible version.
