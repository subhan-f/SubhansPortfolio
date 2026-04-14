# Subhan Farrakh Portfolio

Modern portfolio and blog built with Astro + React islands, Tailwind CSS v4, and Framer Motion.

Production site: https://subhanfarrakh.com

## Tech Stack

- Astro 5
- React 19 (islands)
- Tailwind CSS v4
- Framer Motion
- MDX + Astro Content Collections (blog)
- RSS + Sitemap
- EmailJS (contact form)

## Features

- Multi-page portfolio (Home, About, Projects, Experience, Skills, Testimonials, FAQ, Contact)
- Dedicated blog with tags and individual post pages
- Animated React sections with progressive hydration
- SEO metadata, Open Graph, Twitter cards, JSON-LD
- Cloudinary-hosted media assets (images, OG image, favicons)
- Accessible overlay navigation with focus management

## Project Structure

```text
.
├── public/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── shared/
│   ├── content/
│   │   └── blog/
│   ├── data/
│   ├── hooks/
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects/
│   │   ├── experience/
│   │   ├── blog/
│   │   └── rss.xml.ts
│   └── styles/
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Routes

- `/`
- `/about`
- `/projects`
- `/projects/[slug]`
- `/experience`
- `/experience/[slug]`
- `/blog`
- `/blog/[slug]`
- `/blog/tag/[tag]`
- `/skills`
- `/testimonials`
- `/faq`
- `/contact`

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start local development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local dev server (`http://localhost:4321`) |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | View Astro CLI help |

## Environment Variables

Create a `.env` file at the project root for contact form integration:

```env
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Notes:
- Variables must be prefixed with `PUBLIC_` to be available on the client.
- Contact form submission uses EmailJS in `src/components/sections/Contact.tsx`.

## Content Management

- Blog posts live in `src/content/blog/` as MDX files.
- Collection schema is defined in `src/content.config.ts`.
- Add tags in frontmatter to automatically generate tag pages.

## SEO and Assets

- Site URL is configured in `astro.config.mjs`.
- Global metadata, OG image, favicon, and structured data are configured in `src/layouts/MainLayout.astro`.
- Sitemap is generated during build.
- RSS feed is generated at `/rss.xml`.

## Notes

- Path aliases are configured in `tsconfig.json` (`@components/*`, `@data/*`, etc.).
- Main hero section component is `Hero` (`src/components/sections/Hero.tsx`).
