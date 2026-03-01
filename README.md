# <img src="public/images/logo_header.png" width="28" alt="Mộc Việt" /> **Mộc Việt**

**MOC VIET ARCHITECTURE & INTERIOR COMPANY LIMITED**

> 📐 Architecture · 🛋️ Interior design · 🪵 Wood interior

Mộc Việt is a consulting, design and construction company for wood interior with many years of experience — townhouses, villas, high-end apartments and factory workshops. This site showcases projects, services and company values with a clean, modern front and full SEO.

**Tech:** Next.js 14 (App Router), React 18, Tailwind CSS, SASS, Sanity CMS (v4) for projects.

---

## Getting started

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment

Copy `.env.example` to `.env.local` and set the values:

| Variable                         | Description                                                             |
| -------------------------------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_ROOT_DOMAIN`        | Canonical site URL (e.g. `https://mocviet.netlify.app`)                 |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | Sanity project ID from [sanity.io/manage](https://www.sanity.io/manage) |
| `NEXT_PUBLIC_SANITY_DATASET`     | Sanity dataset name (e.g. `production`)                                 |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version (e.g. `2024-01-01`)                                  |

Used for: SEO canonical URLs, sitemap, and **projects content** (fetched from Sanity).

---

## Admin: Sanity CMS (Projects)

Projects (“Công trình”) are managed in **Sanity Studio**. The schema is defined in code with fields: **title**, **code** (URL slug), **images** (array).

1. **Open Studio:** Run `yarn dev`, then go to [http://localhost:3000/studio](http://localhost:3000/studio).
2. **Log in:** First time you’ll be redirected to sanity.io to sign in (Google, GitHub, or email).
3. **Add a project:** In the sidebar, open **Công trình** → **Create** → fill **Tên công trình**, generate or type **Mã (slug)** (e.g. `cafe-meo`), add images → **Publish**.
4. **Slug:** The code field auto-generates from the title (Vietnamese diacritics removed, lowercase, hyphens). You can edit it before publishing.
5. **Images:** You can drag-and-drop multiple images onto the images field at once, or add them one by one. Layout is grid.
6. **Env:** Ensure `.env.local` has `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` (same project/dataset as in Sanity).

**Revalidation:** List and detail pages use `revalidate = 60`, so new or updated projects appear within about a minute without a full rebuild.

**Fallback:** If Sanity returns no documents (e.g. empty dataset or missing env), the site still shows projects from `INFO.projects.list_detail` in `src/libs/constants.js`.

---

## SEO

- **Default metadata** in `src/app/layout.jsx` from `DataSeo` in `src/libs/constants.js` (title, description, Open Graph image).
- **Per-page metadata** on about, projects, services, and project detail (`/projects/[code]`) with dynamic titles and descriptions.
- **Canonical** and **robots** use `NEXT_PUBLIC_ROOT_DOMAIN`.
- **Google Tag Manager** is wired in the layout (script + noscript).

To change default SEO, edit `DataSeo` in `src/libs/constants.js`.

---

## Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `yarn dev`   | Start development server |
| `yarn build` | Production build         |
| `yarn start` | Run production server    |
| `yarn lint`  | Run ESLint               |

---

## Deploy

Build and run as a standard Next.js app. Works with Vercel, Netlify, or any Node host. Set `NEXT_PUBLIC_ROOT_DOMAIN` to your production URL and configure the same Sanity env vars in your hosting provider.
