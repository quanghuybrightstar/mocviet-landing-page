---
version: alpha
name: Mộc Việt Landing Page
description: Design system for MOC VIET ARCHITECTURE & INTERIOR — wood interior consulting, design & construction landing site (Next.js + Sanity CMS).
colors:
  primary: "#e9713d"
  primary-hover: "#e9713d"
  on-primary: "#ffffff"
  foreground: "#1A202C"
  text: "#1a202c"
  background: "#ffffff"
  surface: "#fafafa"
  accent-coral: "#ffcdcd"
  accent-coral-light: "#ffe1e1"
  accent-link: "#ff9a9a"
  badge-warm: "#f0e9db"
  muted: "#b3b3b3"
  border-light: "#e1e5ea"
  border-subtle: "#bdbdbd"
  timeline-line: "#e7e7e7"
  overlay-dark: "#000000"
  footer-bg: "#141313"
  footer-widget-dark: "#3c312e"
  scrollbar-track: "#e0e0e0"
  scrollbar-thumb: "#bdbdbd"
typography:
  body:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
  h1-hero:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 400
    letterSpacing: 1px
    lineHeight: 1.5
  h1-page:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 400
  h2-section:
    fontFamily: Inter
    fontSize: 2.125rem
    fontWeight: 500
  h2-section-mobile:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: 500
  h2-about:
    fontFamily: Inter
    fontSize: 1.875rem
    fontWeight: 700
  h3-card:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 600
  subheading:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    letterSpacing: 2px
    lineHeight: 1.3
  nav-link:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
  nav-link-active:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 600
  badge-number:
    fontFamily: Calistoga
    fontSize: 1.875rem
    fontWeight: 400
  slider-body:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 300
    lineHeight: 1.5
rounded:
  sm: 6px
  md: 8px
  lg: 16px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section-pb-desktop: 160px
  section-pb-mobile: 64px
components:
  button-primary-custom:
    backgroundColor: transparent
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 8px 24px
  button-primary-custom-hover:
    backgroundColor: transparent
    textColor: "{colors.primary}"
  button-hero-outline:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    rounded: 30px
    padding: 12px 16px
  button-hero-outline-hover:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
  button-scroll-top:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    size: 44px
  link-custom:
    textColor: "{colors.accent-link}"
  header-nav:
    textColor: "{colors.on-primary}"
  header-nav-scrolled:
    textColor: "{colors.foreground}"
  footer:
    backgroundColor: "{colors.footer-bg}"
    textColor: "rgba(255, 255, 255, 0.7)"
  project-card-hover:
    textColor: "{colors.primary}"
  project-badge:
    backgroundColor: "{colors.badge-warm}"
    textColor: "{colors.primary}"
  core-value-card:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    rounded: "{rounded.xl}"
  page-surface:
    backgroundColor: "{colors.surface}"
  advantage-icon:
    backgroundColor: "{colors.accent-coral}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    size: 100px
---

## Overview

**Mộc Việt** (MOC VIET ARCHITECTURE & INTERIOR COMPANY LIMITED) is a Vietnamese architecture and wood-interior brand. The landing site communicates trust, craftsmanship, and modern professionalism — not flashy tech, but warm wood tones, clean layouts, and confident typography.

**Brand & style**

- **Domain:** Architecture · Interior design · Wood interior (nội thất gỗ).
- **Mood:** Clean, modern, warm, trustworthy — gallery/showroom feel with full-bleed project photography.
- **Language:** Vietnamese (`lang="vi"`) for all user-facing copy.
- **Stack (do not reinvent):** Next.js 14 App Router, React 18, Tailwind CSS 3, SASS (`src/styles/global.scss`), legacy Bootstrap/FTCO template CSS (`public/assets/css/style.css`), Sanity CMS v4 for projects, MUI only for breadcrumbs.

**Visual references in repo**

| Source | Role |
|--------|------|
| `src/styles/global.scss` | CSS variables, custom utilities, buttons |
| `public/assets/css/style.css` | FTCO navbar, footer, slider, `.heading-section`, `.project` |
| `src/libs/fonts.js` | Inter (body), Calistoga (numeric badges) |
| `tailwind.config.js` | Maps `background` / `foreground` to CSS vars |

Agents generating UI must **reuse existing class names and CSS variables** before introducing new patterns.

---

## Colors

Palette is anchored on warm orange primary, neutral gray text, and soft coral accents inherited from the FTCO interior template.

| Token | Hex | Role |
|-------|-----|------|
| **primary** | `#e9713d` | Brand accent — links hover, active nav, CTAs, scroll-to-top, timeline dots, list markers |
| **foreground / text** | `#1A202C` | Body text, headings on light backgrounds |
| **background** | `#ffffff` | Cards, header when scrolled, button fills |
| **surface** | `#fafafa` | Page body background (`--bg-color`) |
| **accent-coral** | `#ffcdcd` | Service icon circles, heading underline, slider accent bar, legacy hover accents |
| **accent-coral-light** | `#ffe1e1` | `.btn-custom` bottom border |
| **accent-link** | `#ff9a9a` | “Tìm hiểu thêm” link text (`.btn-custom`) |
| **badge-warm** | `#f0e9db` | Project index badge background |
| **muted** | `#b3b3b3` | `.subheading` labels |
| **border-light** | `#e1e5ea` | Project image borders |
| **border-subtle** | `#bdbdbd` @ ~45% opacity in Tailwind `border-[#bdbdbd73]` | Core-value cards on About |
| **timeline-line** | `#e7e7e7` | Vertical line in project list (desktop) |
| **overlay-dark** | `#000000` @ 30% opacity | Hero/slider image overlay (`.overlay_slider`) |
| **footer-bg** | `#141313` | Footer background |
| **footer-widget-dark** | `#3c312e` | `.ftco-bg-dark` sections |

**CSS variables (canonical — prefer these in new code)**

```css
:root {
  --background: #ffffff;
  --foreground: #1A202C;
  --white-color: #fff;
  --primary-color: #e9713d;
  --text-color: #1a202c;
  --bg-color: #fafafa;
}
```

**Semantic usage**

- **primary:** Interactive emphasis only — never flood large backgrounds.
- **accent-coral:** Decorative highlights (icons, underlines), not primary CTA fill.
- **surface:** Default page canvas; content sections may use `bg-light` (`#f8f9fa` in Bootstrap) for alternating blocks.
- **on-dark:** Hero/slider text is white `rgba(255,255,255,0.8)` for paragraphs; headings `#fff`.

---

## Typography

### Font families

| Family | Loading | Usage |
|--------|---------|--------|
| **Inter** | `next/font/google` → `interFont` on `<body>` | All body copy, nav, headings (default) |
| **Calistoga** | `next/font/google` → `calistogaFont` | Project list/detail numeric badges only |
| **Flaticon** | `/assets/css/flaticon.css` | Service advantage icons (`.flaticon-*`) |

Do **not** introduce additional Google Fonts without updating `src/libs/fonts.js` and this file.

### Type scale (implemented)

| Element | Desktop | Mobile | Weight | Notes |
|---------|---------|--------|--------|-------|
| Hero `h2` (slider) | 40px | 24px | 400 | Uppercase, letter-spacing 1px, white on image |
| Page `h1` | 40px | 28px | 400 | Services, Projects listing |
| Section `h2` (`.heading-section`) | 34px | 24px | 500 | With optional `.subheading` above |
| About section `h2` | 30px | 24px | 700 | Tailwind `text-2xl md:text-3xl` |
| Card `h3` | 20–24px | 18–20px | 600 | Project titles, core values |
| `.subheading` | 18px | 18px | 400 | Uppercase, letter-spacing 2px, color `#b3b3b3` |
| Body | 16px | 16px | 400 | `text-sm` / `text-base` on inner pages |
| Nav link | 14px | 14px | 400 (600 when active) | `.ftco-navbar-light .nav-link` |
| Footer widget title | 17–18px | — | 400 | `.ftco-heading-2` |
| Counter stats | 40px | 28px | bold | `.heading-section-white` block |

### Text utilities

- `.primary-color` → `color: var(--primary-color)`
- `.text-balance` → balanced wrapping for long headings
- `.marker-primary` → custom list marker `➤` in primary color
- Rich HTML from CMS/constants may use `<strong class="!font-bold">` — preserve when rendering `dangerouslySetInnerHTML`

---

## Layout

### Grid & containers

- **Bootstrap 4 grid** (`container`, `row`, `col-md-*`) from `style.css` — primary layout for home, services, footer.
- **Tailwind** for newer/refined sections: flex, gap, responsive padding (`md:`, `lg:`).
- **Container padding (mobile):** `1rem` horizontal override in `global.scss` below 768px.

### Breakpoints

| Name | Width | Behavior |
|------|-------|----------|
| `sm` | 576px | Bootstrap default |
| `md` | 768px | Section title scale, `commondPage` padding, slider height |
| `lg` | 1024px | Mobile nav drawer threshold; header menu slide |
| `xl` | 1200px | Bootstrap default |

### Page structure

```
[Header — absolute → fixed on scroll]
[Hero / Page banner — full viewport or calc(100dvh - 74px)]
[Main sections — ftco-section, container]
[Footer — ftco-footer dark]
[ButtonGo2Top — fixed bottom-right]
```

### Spacing conventions

| Pattern | Value | Where |
|---------|-------|-------|
| `.commondPage` bottom padding | 10rem desktop / 4rem mobile | All inner pages |
| Section vertical gap | `gap-6` → `gap-16` (24–64px) | Projects, Services lists |
| `ftco-services` overlap | `margin-top: -50px` | Home advantages over hero |
| Heading block margin | `mb-4`, `mb-5`, `pl-md-5` | `.heading-section`, `.wrap-about` |
| Image intro split | `col-md-5` image + `col-md-7` text | `GridIntroImage` |

### Key routes (navigation)

| Path | Header mode |
|------|-------------|
| `/` | Transparent over slider; white nav text |
| `/about` | Hero banner like home |
| `/projects`, `/services` | `isSpecialHeader` — white header, dark text |
| `/projects/[code]` | Breadcrumb + gallery |

Menu items from `TypeHeader` in `src/libs/constants.js`: Trang chủ, Về chúng tôi, Công trình, Dịch vụ.

---

## Elevation & Depth

| Layer | Treatment |
|-------|-------------|
| **Header (scrolled)** | `box-shadow: 0 2px 16px rgba(54, 56, 79, 0.06)`; background `var(--bg-color)` |
| **Header (special pages)** | `!shadow` + `!bg-white` |
| **Hero overlay** | Black 30% over full-bleed images |
| **Project cards** | Image `scale(1.2–1.3)` on hover; title shifts to primary |
| **Core value cards** | `hover:-translate-y-2.5 hover:shadow-xl` on About |
| **Footer** | Flat dark `#141313` — no heavy elevation |
| **Scrollbar** | 8px width; thumb `#bdbdbd`, track `#e0e0e0` |

**Page loader:** `nextjs-toploader` uses `var(--primary-color)`, no spinner.

**Photography:** Prefer `object-cover`, `rounded-lg` on content images; hero uses `object-bottom` for architectural shots.

---

## Shapes

| Token | Value | Usage |
|-------|-------|-------|
| `rounded.sm` | 6px | `.btn-primary-custom` |
| `rounded.md` | 8px | Scrollbar thumb |
| `rounded.lg` | 16px (`rounded-lg`) | Project images, mission image, cards |
| `rounded.xl` | 32px | About core-value cards |
| `rounded.full` | 50% / `rounded-full` | Advantage icons, scroll-top button |
| **Badge corner** | `rounded-tl-lg rounded-br-lg` | Project index number chip |

**Decorative shapes**

- `.heading-section-with-line:after` — 1.5px × full width line, `#ffcdcd`, 24px below heading
- `.list-has-dot` — vertical timeline with primary circles on `/projects` list (hidden `< 768px`)
- Service icons — 100×100px circle, `#ffcdcd` background

---

## Components

### Header (`HeaderComponent`)

- Classes: `navbar header_container ftco_navbar ftco-navbar-light`
- Logo: `/images/logo_header.png`, height 4rem (3rem mobile)
- Nav links: white on hero; `var(--foreground)` when scrolled or `isSpecialHeader`
- Active item: primary color, font-weight 600
- Mobile (`≤1024px`): full-height drawer `h-[calc(100dvh-74px)]`, black panel, slide from left
- Scroll reveal: transforms from `top: -90px` after 450px scroll

### Hero slider (`SlideComponent`)

- Swiper autoplay 4500ms, `home-slider-full` height `100dvh` (mobile: minus 74px header)
- Overlay + right-aligned text column `col-md-7`
- CTA: `btn btn-white btn-outline-white` (pill 30px radius)
- Images: `/images/slide/slide_{1,2,3}.webp`

### Section heading (`.heading-section`)

```html
<div class="heading-section heading-section-with-line">
  <span class="subheading">Giới thiệu</span>
  <h2 class="mb-4">Title</h2>
</div>
```

White variant on dark/photo backgrounds: `.heading-section-white` for counter block.

### Buttons

| Class | Appearance | When to use |
|-------|------------|-------------|
| `.btn-primary-custom` | Outlined `#1a202c`, hover primary border/text | “Xem thêm”, secondary CTAs |
| `.btn.btn-white.btn-outline-white` | White outline pill on hero | Primary hero CTA |
| `.btn-custom.link-primary` | Coral text + bottom border | “Tìm hiểu thêm” in `GridIntroImage` |
| Scroll top | Primary fill, 44×44 circle, white icon | Global in layout |

### Advantage box (`BoxAdvantage`)

- Structure: `.media.block-6.services` → circular `.icon` (Flaticon) + `.media-body` with uppercase `h3.heading`
- Icon background: `#ffcdcd`, icon color white, 50px glyph

### Project card (`ImageZoom` / `ListProjects`)

- Home grid: `col-md-6 col-lg-3`, fixed height 450px, `.project` hover zoom
- **List page** (`/projects`, `ListProjects`): responsive 2-column equal grid (1 col mobile); center timeline `.list-has-dot` + `.item-dot` on left-column cards (desktop only); scales to any project count
- List card: Calistoga index badge on `#f0e9db` (top-left on image); optional Sanity `tags` (1–3 pills) + `description`
- List hover: image `scale-105`, `shadow-sm` → `shadow-md`, overlay CTA “Xem chi tiết”; title → `var(--primary-color)`
- List entrance: `.project-list-animate` + IntersectionObserver → `.project-list-animate--visible` (`global.scss`)
- Hover: title → `var(--primary-color)`, image scale 1.05 (list wide/half) or 1.2–1.3 (home)

### Grid intro (`GridIntroImage`)

- 5/7 column split, image `object-cover rounded-lg`
- Alternate layout via `posImage="right"` → `flex-row-reverse`
- HTML descriptions allowed via `dangerouslySetInnerHTML`

### Counter (`Parameter`)

- Background image `/images/bg_3.jpg`, white heading typography
- Animated numbers via `NumberAnimated` + react-spring

### Footer (`Footer`)

- Classes: `ftco-footer ftco-bg-dark ftco-section`
- Four columns: brand, links, services, contact (Icons8 bubble icons)
- Social: Facebook SVG, hover scale 110%
- Text: `rgba(255,255,255,0.7)`, links hover white

### Breadcrumb (`MyBreadCrumb`)

- MUI `Breadcrumbs` + Inter, 14px bold links
- Hover: primary color + underline

---

## Do's and Don'ts

### Do

- Use CSS variables `--primary-color`, `--text-color`, `--bg-color` for theme-aware Tailwind arbitrary values: `text-[var(--primary-color)]`.
- Reuse FTCO class names (`ftco-section`, `heading-section`, `ftco-footer`) when building sections matching existing pages.
- Keep **Inter** for all new text; **Calistoga** only for decorative index numbers.
- Use `rounded-lg` on content images and `object-cover` for architectural photography.
- Write UI copy in **Vietnamese**; keep SEO/metadata patterns from `DataSeo` in `src/libs/constants.js`.
- Follow responsive patterns: mobile-first Tailwind (`md:`, `lg:`).
- Pull project content from Sanity when available; fallback to `INFO.projects` constants.
- Prefer Next.js `Image` with explicit `width`/`height` or `fill` + `object-cover`.

### Don't

- Don't replace the warm orange `#e9713d` with Bootstrap template cyan (`#78d5ef` in unused `:root` vars in `style.css`).
- Don't add heavy gradients, neon colors, or dark-mode variants — not part of this brand.
- Don't use pure black `#000` for body text; use `--foreground` / `--text-color`.
- Don't introduce new font families without updating `fonts.js` and this document.
- Don't strip `ftco-*` / Bootstrap grid classes on existing pages without a full migration plan.
- Don't use MUI for layout/components beyond breadcrumbs — styling will clash with FTCO theme.
- Don't set hero text to dark colors on photography — white/light text only with overlay.
- Don't create project UI that ignores `group-hover` scale and primary hover on titles — it's a core interaction pattern.
- Don't hardcode English navigation labels on user-facing chrome.

---

## Agent implementation checklist

When generating or editing UI for this repository:

1. Read `src/styles/global.scss` and match CSS variables.
2. Check `public/assets/css/style.css` for FTCO component rules before writing custom CSS.
3. Import fonts from `@/libs/fonts` — never raw `<link>` for Inter/Calistoga.
4. Align with pages in `src/app/` (home, about, projects, services) for header variant and spacing.
5. Content strings live in `src/libs/constants.js` or Sanity — avoid duplicating long copy in components.
6. Validate contrast: primary `#e9713d` on white for large text/UI chrome; white on primary for filled buttons.

**Spec reference:** [DESIGN.md overview (Google Stitch)](https://stitch.withgoogle.com/docs/design-md/overview) · [format spec](https://github.com/google-labs-code/design.md)

**Stitch workflow:** See [`STITCH-WORKFLOW.md`](./STITCH-WORKFLOW.md) for phased prompts (Foundations → Component library → Pages).
