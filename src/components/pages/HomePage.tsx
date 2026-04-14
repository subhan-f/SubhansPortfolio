import { useState, useEffect, Suspense, lazy } from "react";
import { Hero } from "@components/sections/Hero";
import { IntroAnimation } from "@components/shared/IntroAnimation";

const About = lazy(() => import("@components/sections/About").then((m) => ({ default: m.About })));
const Skills = lazy(() => import("@components/sections/Skills").then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import("@components/sections/Projects").then((m) => ({ default: m.Projects })));
const Experience = lazy(() => import("@components/sections/Experience").then((m) => ({ default: m.Experience })));
const Testimonials = lazy(() => import("@components/sections/Testimonials").then((m) => ({ default: m.Testimonials })));
const Contact = lazy(() => import("@components/sections/Contact").then((m) => ({ default: m.ContactForm })));
const FAQ = lazy(() => import("@components/sections/FAQ").then((m) => ({ default: m.FAQ })));

const SectionLoader = () => (
  <div className="h-screen flex items-center justify-center bg-black">
    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
  </div>
);

let hasShownIntroForThisPageLoad = false;

export const HomePage = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [homeAnimationsReady, setHomeAnimationsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasShownIntroForThisPageLoad) {
      setHomeAnimationsReady(true);
      return;
    }

    let navType: string | undefined;
    try {
      const navEntries = performance.getEntriesByType("navigation");
      if (navEntries.length > 0) {
        navType = (navEntries[0] as PerformanceNavigationTiming).type;
      }
    } catch {
      navType = "navigate";
    }

    const shouldShow = navType === "navigate" || navType === "reload";
    if (shouldShow) {
      hasShownIntroForThisPageLoad = true;
      setShowIntro(true);
    } else {
      setHomeAnimationsReady(true);
    }
  }, []);

  const handleIntroFinish = () => {
    setShowIntro(false);
    setHomeAnimationsReady(true);
  };

  return (
    <>
      {showIntro && <IntroAnimation onFinish={handleIntroFinish} />}
      <Hero shouldAnimate={homeAnimationsReady} />
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <FAQ />
      </Suspense>
    </>
  );
};
