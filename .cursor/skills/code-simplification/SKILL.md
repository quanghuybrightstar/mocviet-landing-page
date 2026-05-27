---
name: code-simplification
description: Simplifies code for clarity. Use when refactoring code for clarity without changing behavior. Use when code works but is harder to read, maintain, or extend than it should be. Use when reviewing code that has accumulated unnecessary complexity.
---

# Code Simplification

Simplify **how** code reads, not **what** it does. Goal: easier to understand and change — not fewer lines for their own sake.

## When to use

- Feature works; implementation feels heavier than needed
- Deep nesting, long functions, vague names, duplicated logic
- After a rushed implementation or messy merge

**Skip when:** code is already clear, you don't understand it yet, or you're rewriting the module anyway.

## Principles

1. **Preserve behavior** — same outputs, errors, side effects. If unsure, don't change it.
2. **Match this repo** — read neighboring files in `src/`; follow `DESIGN.md`, `.cursor/rules/karpathy-guidelines.mdc`, existing naming (`@/` imports, PascalCase components).
3. **Clarity over cleverness** — prefer guard clauses, named helpers, and plain `if` over nested ternaries.
4. **Scope to your task** — simplify what you touched; no drive-by refactors.

## Project layout (Next.js)

| Put here | Not here |
|----------|----------|
| `src/libs/*.js` — fetch helpers, GROQ, pure utils | Business logic duplicated in every page |
| `src/components/**` — UI | Data fetching inside leaf UI unless `"use client"` needs it |
| `src/app/**/page.jsx` — route composition, metadata | Giant monolithic components |
| `src/sanity/**` — schema, Studio inputs (TS ok) | Ad-hoc Sanity queries scattered in components |

**Helpers (`src/libs/`):** export named functions with short, clear names. Extract when logic is reused **2+** times or multi-step; **don't** wrap a single boolean (`return x.length === 0`) in a util used once — inline at the call site.

**Types:** Sanity/Studio code may use TypeScript in `src/sanity/`. App UI is mostly JSX + JSDoc (`@param` on props) — keep prop shapes documented on the component, don't invent a types layer unless the file is already TS.

## Common fixes

| Signal | Fix |
|--------|-----|
| 3+ nesting levels | Early `return`, extract predicate/helper |
| 50+ line function | Split by responsibility |
| `data`, `result`, `temp` | Rename to domain terms (`project`, `imageUrls`) |
| Same 5+ lines in 2 files | Shared function in `src/libs/` |
| Dead imports / unreachable code | Remove after confirming unused |
| `async` + only `return await x` | `return x` |

## React / Next.js

```jsx
// Prefer early return in Server Components
if (!project) return notFound();

// Client: colocate state; don't fetch Sanity in every child
"use client";
const [open, setOpen] = useState(false);

// Avoid trivial wrapper
// Bad: const hasImages = (arr) => arr.length > 0;
// Good: if (images?.length) { ... }
```

Keep **Server Components** default: fetch via `getProjectDetailByCode` / `fetchProjects` in the page or `src/libs/sanity.js`, pass props down. Add `"use client"` only for hooks, events, or browser APIs.

## Process

1. Understand callers, edge cases, and tests (Chesterton's fence).
2. One simplification at a time → `pnpm lint` / `pnpm build`.
3. Refactor commits separate from feature/fix commits when possible.

## Verification

- [ ] Behavior unchanged; no test updates unless behavior intentionally changed
- [ ] `pnpm lint` and `pnpm build` pass
- [ ] Diff limited to relevant files
- [ ] Matches patterns in adjacent `src/` files
