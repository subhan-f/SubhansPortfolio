// app/routes/_index.tsx

import type { MetaFunction, LoaderFunctionArgs } from 'react-router';
import { Suspense, lazy, useState, useEffect } from 'react';
import {
  Form,
  useActionData,
  useNavigation,
  useLoaderData,
} from 'react-router';
import { Home } from '~/components/sections/Home';
import { IntroAnimation } from '~/components/shared/IntroAnimation';
import { isBot } from '~/lib/utils';

export const loader = ({ request }: LoaderFunctionArgs) => {
  const userAgent = request.headers.get('user-agent') || '';
  return { isBot: isBot(userAgent) };
};

// Lazy load section components
const About = lazy(() =>
  import('~/components/sections/About').then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import('~/components/sections/Skills').then((m) => ({ default: m.Skills })),
);
const Projects = lazy(() =>
  import('~/components/sections/Projects').then((m) => ({
    default: m.Projects,
  })),
);
const Experience = lazy(() =>
  import('~/components/sections/Experience').then((m) => ({
    default: m.Experience,
  })),
);
const Testimonials = lazy(() =>
  import('~/components/sections/Testimonials').then((m) => ({
    default: m.Testimonials,
  })),
);
const Contact = lazy(() =>
  import('~/components/sections/Contact').then((m) => ({
    default: m.ContactForm,
  })),
);

const FAQ = lazy(() =>
  import('~/components/sections/FAQ').then((m) => ({
    default: m.FAQ,
  })),
);

const ContactWrapper = () => {
  const actionData = useActionData<typeof import('./contact').action>();
  const navigation = useNavigation();
  return (
    <Contact
      actionData={actionData}
      isSubmitting={navigation.state === 'submitting'}
      Form={Form}
    />
  );
};

const SectionLoader = () => (
  <div className="h-screen flex items-center justify-center bg-black">
    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
  </div>
);

export const meta: MetaFunction = () => [
  { title: 'Subhan Farrakh – AI Automation Engineer' },
  {
    name: 'description',
    content:
      'AI automation engineer specializing in agentic AI, workflow automation, and full‑stack development. Save hundreds of hours with intelligent systems.',
  },
  {
    name: 'keywords',
    content:
      'AI automation, agentic AI, n8n, Make, React developer, workflow automation',
  },
  { name: 'author', content: 'Subhan Farrakh' },
  { property: 'og:title', content: 'Subhan Farrakh - AI Automation Engineer' },
  {
    property: 'og:description',
    content:
      'AI automation engineer specializing in agentic AI, workflow automation, and full‑stack development.',
  },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://subhanfarrakh.com' },
  { property: 'og:image', content: 'https://subhanfarrakh.com/og-image.jpg' },
  { name: 'twitter:image', content: 'https://subhanfarrakh.com/og-image.jpg' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { rel: 'canonical', href: 'https://subhanfarrakh.com' },
];

// Module-level flag – resets on every full page reload
let hasShownIntroForThisPageLoad = false;

export default function Index() {
  const { isBot: isBotDetected } = useLoaderData<typeof loader>();
  const [showIntro, setShowIntro] = useState(false);
  const [homeAnimationsReady, setHomeAnimationsReady] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    // Skip if already shown in this page load
    if (hasShownIntroForThisPageLoad) return;
    // Skip for bots
    if (isBotDetected) return;

    // Detect navigation type to differentiate full page loads from client‑side transitions
    let navType: string | undefined;
    try {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        navType = (navEntries[0] as PerformanceNavigationTiming).type;
      }
    } catch {
      // Fallback for older browsers – assume it's a full load
      navType = 'navigate';
    }

    // Show intro on initial navigation or explicit reload (hard refresh)
    // Exclude back/forward to avoid showing when returning via browser history
    const shouldShow = navType === 'navigate' || navType === 'reload';

    if (shouldShow) {
      hasShownIntroForThisPageLoad = true;
      setShowIntro(true);
    } else {
      // If intro is not shown (e.g., client navigation), home animations can start immediately
      setHomeAnimationsReady(true);
    }
  }, [isBotDetected]);

  const handleIntroFinish = () => {
    setShowIntro(false);
    setHomeAnimationsReady(true);
  };

  return (
    <>
      {showIntro && <IntroAnimation onFinish={handleIntroFinish} />}
      <Home shouldAnimate={homeAnimationsReady} />
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <ContactWrapper />
        <FAQ />
      </Suspense>
    </>
  );
}
