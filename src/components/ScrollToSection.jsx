import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeToId = {
  '/': 'home',
  '/about': 'about',
  '/skills': 'skills',
  '/projects': 'projects',
  '/experience': 'experience',
  '/testimonials': 'testimonials',
  '/contact': 'contact',
};

export default function ScrollToSection() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // If there's a hash (e.g., /#projects), scroll to that element
    if (hash) {
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Only scroll to section mapping on homepage
    if (pathname !== '/') return;

    const sectionId = routeToId[pathname];
    if (!sectionId) return;

    let attempts = 0;
    const maxAttempts = 30;
    const interval = 300;

    const tryScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        console.log(`✅ Scrolled to #${sectionId}`);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, interval);
      } else {
        console.warn(`❌ Element #${sectionId} not found after ${maxAttempts} attempts`);
        window.scrollTo(0, 0);
      }
    };

    setTimeout(tryScroll, 300);
  }, [pathname, hash]);

  return null;
}