# <img src="public/images/logo_header.png" width="28" alt="Mộc Việt" /> **Mộc Việt**

**MOC VIET ARCHITECTURE & INTERIOR COMPANY LIMITED**

> 📐 Architecture · 🛋️ Interior design · 🪵 Wood interior

Mộc Việt is a consulting, design and construction company for wood interior with many years of experience — townhouses, villas, high-end apartments and factory workshops. This site showcases projects, services and company values with a clean, modern front and full SEO.

**Tech:** Next.js 14 (App Router), React 18, Tailwind CSS, SASS.

## Getting started

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Create `.env.local` (see `.env.example`):

| Variable                  | Description                                             |
| ------------------------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_ROOT_DOMAIN` | Canonical site URL (e.g. `https://mocviet.netlify.app`) |

Used for SEO canonical URLs and sitemap.

## SEO

- **Default metadata** in `src/app/layout.jsx` from `DataSeo` in `src/libs/constants.js` (title, description, openGraph image).
- **Per-page metadata** on about, projects, services, and project detail (`[code]`) for dynamic titles and descriptions.
- **Canonical** and **robots** driven by `NEXT_PUBLIC_ROOT_DOMAIN`.
- **Google Tag Manager** wired in layout (script + noscript).

To change default SEO: edit `DataSeo` in `src/libs/constants.js`.

## Scripts

| Command      | Description           |
| ------------ | --------------------- |
| `yarn dev`   | Development server    |
| `yarn build` | Production build      |
| `yarn start` | Run production server |
| `yarn lint`  | Run ESLint            |

## Deploy

Build and run as a standard Next.js app. Compatible with Vercel, Netlify, or any Node host (set `NEXT_PUBLIC_ROOT_DOMAIN` to your production URL).
