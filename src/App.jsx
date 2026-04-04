import { useState, lazy, Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSectionObserver } from './hooks/useSectionObserver';
import { isBot } from './utils/botDetect';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import IntroAnimation from './components/IntroAnimation';
import WhatsappButton from './components/WhatsappButton';

// Lazy load heavy sections
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

const SectionLoader = () => (
  <div className="h-screen flex items-center justify-center bg-black text-white">
    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
  </div>
);

function App() {
  const activeSection = useSectionObserver();
  
  const [showAnimation, setShowAnimation] = useState(() => !isBot());
  const [animationVisible, setAnimationVisible] = useState(() => !isBot());
  const [introComplete, setIntroComplete] = useState(() => isBot()); // Bots see content immediately

  // For non‑bots, remove animation after it finishes (or fallback)
  useEffect(() => {
    if (!isBot() && showAnimation) {
      const timer = setTimeout(() => {
        setAnimationVisible(false);
        setIntroComplete(true); // ✅ fallback: ensure content appears
      }, 3000); // slightly longer than total animation (~3s)
      return () => clearTimeout(timer);
    }
  }, [showAnimation]);

  const shouldRenderAnimation = showAnimation && animationVisible;

  return (
    <>
      {shouldRenderAnimation && (
        <IntroAnimation
          onFinish={() => {
            setAnimationVisible(false);
            setIntroComplete(true); // ✅ normal finish
          }}
        />
      )}

      <Helmet>
        <title>{activeSection.title}</title>
        <meta name="description" content={activeSection.description} />
        <meta
          name="keywords"
          content="AI automation, agentic AI, n8n, Make, React developer, workflow automation"
        />
        <meta name="author" content="Subhan Farrakh" />
        <meta property="og:title" content={activeSection.title} />
        <meta property="og:description" content={activeSection.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://subhanfarrakh.com" />
        <meta property="og:image" content="https://subhanfarrakh.com/og-image.jpg" />
        <meta name="twitter:image" content="https://subhanfarrakh.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://subhanfarrakh.com" />
      </Helmet>

      <div className="relative gradient text-white">
        <CustomCursor />
        <Navbar />
        <Home introComplete={introComplete} />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </Suspense>
        <WhatsappButton />
      </div>
    </>
  );
}

export default App;