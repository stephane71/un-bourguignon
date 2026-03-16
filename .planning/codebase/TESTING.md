# Testing Patterns

**Analysis Date:** 2026-03-16

## Test Framework

**Runner:**
- Not configured - no test framework detected in project dependencies
- No Jest, Vitest, or other test runner configured in `package.json`
- Next.js test infrastructure not yet set up

**Assertion Library:**
- Not applicable - testing infrastructure not present

**Run Commands:**
- No test commands available currently
- To add testing, install framework (Jest or Vitest) and create configuration

## Test File Organization

**Location:**
- Not applicable - no tests currently present in codebase
- Recommended pattern for Next.js: co-locate tests with source files
- Use naming convention: `*.test.ts`, `*.test.tsx`, `*.spec.ts`, `*.spec.tsx`

**Naming:**
- Convention for this project: Use `.test.tsx` suffix for component tests
- Example: `src/app/page.test.tsx` for testing `src/app/page.tsx`

**Structure:**
```
src/
├── app/
│   ├── page.tsx
│   ├── page.test.tsx          # Co-located test
│   ├── layout.tsx
│   └── layout.test.tsx        # Co-located test
└── components/
    ├── Button.tsx
    └── Button.test.tsx        # Co-located test
```

## Test Structure

**Suite Organization:**
- Not yet established - framework not configured
- When implementing, use `describe()` blocks to group related tests
- Structure: one test suite per component/function

**Patterns to follow when tests are added:**
```typescript
// Example pattern for future implementation
describe("Home component", () => {
  test("renders heading", () => {
    // test implementation
  });

  test("displays correct text", () => {
    // test implementation
  });
});
```

**Setup/Teardown:**
- Use `beforeEach()` for setup before each test
- Use `afterEach()` for cleanup after each test
- Use `beforeAll()` for expensive operations run once per suite

## Mocking

**Framework:**
- Not configured - would use Jest's built-in mocking or Vitest equivalent
- Recommended: Jest Mock or MSW (Mock Service Worker) for API mocking

**Patterns:**
- Mock Next.js modules: `jest.mock("next/navigation")`
- Mock child components to isolate units
- Use factory functions for test data

**What to Mock:**
- External API calls (use mocks or MSW)
- Child components (in unit tests)
- Third-party libraries with side effects
- Next.js routing and navigation

**What NOT to Mock:**
- Core application logic that's being tested
- Utilities and helpers (test them directly)
- Rendering libraries (React, Next.js core)

## Fixtures and Factories

**Test Data:**
- Not yet implemented
- Recommended approach when tests are added:

```typescript
// Example factory pattern for future use
const createMockMetadata = (overrides = {}) => ({
  title: "Un Bourguignon",
  description: "Site vitrine professionnel",
  ...overrides,
});
```

**Location:**
- Recommend: `src/__tests__/fixtures/` for shared test data
- Alternatively: `src/__tests__/factories/` for factory functions

## Coverage

**Requirements:** Not enforced (no testing setup)

**Recommended targets:**
- Statements: 80%+
- Branches: 75%+
- Functions: 80%+
- Lines: 80%+

**View Coverage:**
- Not available without test framework installed
- When implemented: `npm test -- --coverage`

## Test Types

**Unit Tests:**
- Scope: Test individual components and functions in isolation
- Approach: Mock dependencies, test single responsibility
- Location: Co-located with source files (`src/app/page.test.tsx`)

**Integration Tests:**
- Scope: Test multiple components working together
- Approach: Use more realistic component hierarchies
- Recommended location: `src/__tests__/integration/`
- Focus on user interactions and data flow

**E2E Tests:**
- Framework: Not configured
- Recommended: Playwright or Cypress for Next.js projects
- Would test full user journeys through the application

## Common Patterns

**Async Testing:**
```typescript
// Pattern to use when implemented:
test("async operation completes", async () => {
  const result = await someAsyncFunction();
  expect(result).toBeDefined();
});
```

**Error Testing:**
```typescript
// Pattern to use when implemented:
test("throws error on invalid input", () => {
  expect(() => functionThatThrows()).toThrow();
});

// For async:
test("rejects on error", async () => {
  await expect(asyncFunctionThatThrows()).rejects.toThrow();
});
```

## Future Setup Recommendations

**To implement testing in this project:**

1. Install testing framework:
   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   # or
   npm install --save-dev vitest @testing-library/react @testing-library/vitest
   ```

2. Create `jest.config.js` or `vitest.config.ts`

3. Add test scripts to `package.json`:
   ```json
   {
     "scripts": {
       "test": "jest",
       "test:watch": "jest --watch",
       "test:coverage": "jest --coverage"
     }
   }
   ```

4. Create setup files for test utilities and global mocks

5. Start with component unit tests for `src/app/` files

---

*Testing analysis: 2026-03-16*
