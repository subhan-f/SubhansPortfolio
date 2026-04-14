// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import Analytics from '@vercel/analytics/astro';

export default defineConfig({
  site: 'https://subhanfarrakh.com',
  integrations: [
    react(),
    mdx(),
    sitemap(),
    Analytics(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
