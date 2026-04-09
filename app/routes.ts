import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/_index.tsx'),
  route('about', 'routes/about.tsx'),

  route('projects', 'routes/projects.tsx'),
  route('projects/:slug', 'routes/project.$slug.tsx'),
  
  route('experience', 'routes/experience.tsx'),
  route('experience/:slug', 'routes/experience.$slug.tsx'),

  route('testimonials', 'routes/testimonials.tsx'),
  route('contact', 'routes/contact.tsx'),
] satisfies RouteConfig;
