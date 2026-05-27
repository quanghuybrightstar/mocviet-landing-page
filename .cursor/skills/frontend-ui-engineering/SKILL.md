---
name: frontend-ui-engineering
description: Builds production-quality UIs. Use when building or modifying user-facing interfaces. Use when creating components, implementing layouts, managing state, or when the output needs to look and feel production-quality rather than AI-generated.
---

# Frontend UI Engineering

Production UI for **Mộc Việt** — Next.js 14 App Router, Sanity CMS, Tailwind 3, global SCSS. Match `DESIGN.md` (colors, typography); avoid generic “AI” layouts (purple gradients, oversized cards, arbitrary spacing).

## When to use

New/changed pages, components, layouts, modals, galleries, responsive fixes, loading/empty/error states.

## Repo structure

```
src/
├── app/                    # Routes (page.jsx, layout.jsx, metadata)
├── components/             # UI (feature folders: projects/, ui/)
├── libs/                   # sanity.js, constants, helpers, fonts
├── styles/                 # global.scss
└── sanity/                 # Studio schema & custom inputs (TS)
public/assets/              # icons, static images
```

- Imports: `@/components/...`, `@/libs/...`, `@public/...` for icons.
- Components: PascalCase file + default export (`ProjectDetailGallery.jsx`).
- Pages: async Server Components; fetch in page or via `src/libs/sanity.js`.

## Server vs client

| Need | Pattern |
|------|---------|
| Sanity fetch, SEO, static params | Server Component in `src/app/**/page.jsx` |
| `useState`, clicks, modals, Swiper/PhotoSwipe | `"use client"` at top of file |
| Shared data | Fetch once in page → pass props |

```jsx
// page.jsx (server)
const project = await getProjectDetailByCode(code);
if (!project) return notFound();
return <ProjectDetailGallery images={project.images} title={project.title} />;

// ProjectDetailGallery.jsx (client)
"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
```

Use `export const revalidate = 60` on CMS-driven routes when stale content is acceptable.

## UI conventions

- **Navigation:** `next/link` (`<Link href="...">`), not `<a>` for internal routes.
- **Images:** `next/image` with `sizes` / `fill` / explicit `width`/`height`; static icons from `public/`.
- **Styling:** Tailwind utilities first; tokens from `DESIGN.md` (`#e9713d`, `#1a202c`, `#e1e5ea`, etc.). Global rules in `src/styles/global.scss`.
- **MUI:** only where already used (e.g. `IconButton` + `@mui/icons-material` in modals) — don't spread MUI for simple markup.
- **Icons:** `@public/assets/icons` (`IconPhotograph`, etc.).
- **CMS:** all GROQ and `sanityClient` in `src/libs/sanity.js`; pages call exported fetchers.

## Component design

- One main responsibility per file; split when > ~150–200 lines.
- Presentation vs data: page/container loads data; children render props.
- Prefer composition (children, small subcomponents) over huge prop objects.
- Document non-obvious props with JSDoc `@param`.

```jsx
/**
 * @param {{ images: string[], title: string }} props
 */
export default function ProjectDetailGallery({ images, title = "" }) {
  const list = images ?? [];
  if (!list.length) return null;
  // ...
}
```

## States every UI should handle

- **Loading:** skeleton or reserved layout (avoid layout shift).
- **Empty:** `null` or friendly message — not a blank gap.
- **Error:** server `notFound()` / `error.jsx` where appropriate; client surfaces retry or close.

## Responsive & a11y

- Mobile-first Tailwind (`grid-cols-1 md:grid-cols-3`, etc.).
- Test ~320, 768, 1024, 1440px.
- Interactive tiles: `role="button"`, `tabIndex={0}`, keyboard handler if not `<button>`.
- Icon-only controls: `aria-label`. Don't rely on color alone for status.
- Prefer `<button type="button">` over clickable `<div>` when possible.

## Avoid AI aesthetic

Use brand palette from `DESIGN.md`, consistent radius (`rounded-xl` where project already does), real Vietnamese copy length, purposeful grids — not template hero + purple gradient cards.

## Verification

- [ ] Renders without console errors
- [ ] Server/client boundary correct (`"use client"` only where needed)
- [ ] Loading / empty / error considered
- [ ] Responsive at key breakpoints
- [ ] Colors/spacing align with `DESIGN.md` and existing pages
- [ ] `pnpm lint` and `pnpm build` pass
