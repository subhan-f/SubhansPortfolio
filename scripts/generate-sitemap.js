import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseUrl = 'https://subhanfarrakh.com';

const staticRoutes = ['', 'about', 'skills', 'projects', 'experience', 'testimonials', 'contact'];

// Slugs from data (keep in sync)
const projectSlugs = ['mk-studio', 'gamily', 'hungry-tiger'];
const experienceSlugs = ['allstate-mapping', 'odd-jobs-on-demand', 'kidskulturspass'];

const allRoutes = [
  ...staticRoutes.map(r => ({ path: r, priority: r === '' ? '1.0' : '0.8' })),
  ...projectSlugs.map(slug => ({ path: `projects/${slug}`, priority: '0.7' })),
  ...experienceSlugs.map(slug => ({ path: `experience/${slug}`, priority: '0.7' }))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
    <url>
      <loc>${baseUrl}/${route.path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <priority>${route.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../build/client/sitemap.xml'), sitemap);
console.log('✅ Sitemap generated with project & experience pages');