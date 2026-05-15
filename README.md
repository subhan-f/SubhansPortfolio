# Subhan Farrakh — Portfolio

> AI Automation Engineer · Full-Stack Developer · [subhanfarrakh.com](https://subhanfarrakh.com)

![Portfolio Demo](public/demo.gif)

[![Live](https://img.shields.io/badge/Live-subhanfarrakh.com-0d9488?style=flat-square)](https://subhanfarrakh.com)
[![Astro](https://img.shields.io/badge/Astro-6-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| Framework | Astro 6 with View Transitions |
| UI | React 19 (island architecture) |
| Styling | Tailwind CSS v4 (Vite plugin) |
| Animation | Framer Motion 12 |
| Content | MDX + Astro Content Collections |
| Validation | Zod 4 |
| Icons | Lucide React, React Icons |
| Contact | EmailJS |
| Media | Cloudinary (images, OG, favicons) |
| Analytics | Vercel Analytics + Speed Insights |
| Feeds | RSS + XML Sitemap |

</div>

---

## Features

- **Island architecture** — React components hydrated on demand (`client:load`, `client:visible`) for optimal performance
- **Animated sections** — Framer Motion 12 transitions with a shared animation library (`src/lib/animations.ts`)
- **Intro animation** — Full-screen entry sequence on first load
- **Custom cursor** — Gradient glow cursor on desktop (automatically disabled on touch/tablet devices ≤1023px)
- **Particles background** — Canvas-based particle system
- **Scroll timeline** — Scroll-driven progress indicator
- **WhatsApp float button** — Quick contact shortcut on all pages
- **Blog** — MDX posts with frontmatter tags, auto-generated tag pages, and RSS feed
- **SEO** — Canonical URLs, Open Graph, Twitter cards, JSON-LD structured data, XML sitemap
- **Security headers** — `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` set in Astro config
- **Custom 404** — Branded not-found page
- **Accessible navigation** — Overlay menu with focus management

---

## Project Structure

```text
.
├── public/
│   ├── demo.gif
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, OverlayMenu
│   │   ├── pages/          # Page-level composite components
│   │   ├── sections/       # Hero, About, Projects, Experience, Skills,
│   │   │                   # Testimonials, FAQ, Contact
│   │   └── shared/         # CustomCursor, IntroAnimation, ParticlesBackground,
│   │                       # ScrollTimeline, SocialIcons, WhatsAppButton
│   ├── content/
│   │   └── blog/           # MDX blog posts
│   ├── data/
│   │   ├── experiences.ts
│   │   ├── myData.ts       # JSON-LD / structured data
│   │   ├── projects.ts
│   │   └── testimonials.ts
│   ├── hooks/
│   │   ├── useIsMobile.ts
│   │   └── usePageVisibility.ts
│   ├── layouts/
│   │   ├── BlogLayout.astro
│   │   └── MainLayout.astro
│   ├── lib/
│   │   ├── animations.ts   # Shared Framer Motion variants
│   │   └── utils.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── experience/
│   │   ├── faq.astro
│   │   ├── projects/
│   │   ├── skills.astro
│   │   ├── testimonials.astro
│   │   ├── blog/
│   │   ├── rss.xml.ts
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

---

## Routes

| Route | Description |
|---|---|
| `/` | Home — hero, about summary, featured work |
| `/about` | Full about page |
| `/projects` | Project listing |
| `/projects/[slug]` | Individual project detail |
| `/experience` | Work history listing |
| `/experience/[slug]` | Individual experience detail |
| `/skills` | Skills overview |
| `/testimonials` | Client testimonials |
| `/faq` | Frequently asked questions |
| `/contact` | Contact form (EmailJS) |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual blog post |
| `/blog/tag/[tag]` | Posts filtered by tag |
| `/rss.xml` | RSS feed |

---

## Getting Started

**Prerequisites:** Node.js ≥ 18, [pnpm](https://pnpm.io)

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

---

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start local dev server at `http://localhost:4321` |
| `pnpm build` | Create production build in `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro -- --help` | View Astro CLI help |

---

## Environment Variables

Create a `.env` file at the project root:

```env
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> Variables must be prefixed with `PUBLIC_` to be accessible in client-side code. These are consumed by `src/components/sections/Contact.tsx`.

---

## Path Aliases

Configured in `tsconfig.json`:

| Alias | Resolves to |
|---|---|
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@data/*` | `src/data/*` |
| `@lib/*` | `src/lib/*` |
| `@hooks/*` | `src/hooks/*` |

---

## License

MIT © [Subhan Farrakh](https://subhanfarrakh.com) — see [LICENSE](LICENSE) for details.
