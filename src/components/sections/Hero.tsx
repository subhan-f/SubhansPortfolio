import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@components/shared/ParticlesBackground";
import { SocialIcons } from "@components/shared/SocialIcons";

const roles = [
  "AI Automation Engineer",
  "Agentic AI Developer",
  "AI/ML Engineer",
  "MERN Stack Developer",
];

interface HeroProps {
  shouldAnimate: boolean;
}

export const Hero = ({ shouldAnimate }: HeroProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [typingEnabled, setTypingEnabled] = useState(false);

  useEffect(() => {
    if (shouldAnimate) {
      setTypingEnabled(true);
    }
  }, [shouldAnimate]);

  useEffect(() => {
    if (!typingEnabled) return;
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
        else if (!deleting && subIndex === current.length)
          setTimeout(() => setDeleting(true), 1200);
        else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 40 : 60
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, typingEnabled]);

  const isTypingActive = useMemo(() => {
    const current = roles[index];
    return (deleting && subIndex > 0) || (!deleting && subIndex < current.length);
  }, [deleting, subIndex, index]);

  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden">
      <ParticlesBackground />
      <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500" />

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-3xl">
            <motion.div
              className="mb-3 text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[2.5em] sm:min-h-[1.8em]"
              initial={{ opacity: 0, y: 12 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-0.5 ml-1 bg-white align-middle"
                style={{
                  height: "1em",
                  animation:
                    shouldAnimate && !isTypingActive
                      ? "blink 1s steps(2, start) infinite"
                      : "none",
                }}
              />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
            >
              Hello, I'm
              <br />
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Subhan Farrakh
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              I save businesses hundreds of hours by automating workflows with AI — eliminating
              manual tasks, streamlining operations, and letting you focus on growth.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full font-medium text-lg text-white bg-linear-to-r from-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-transform"
              >
                View My Work
              </a>
              <a
                href="/Resume.pdf"
                download
                className="px-6 py-3 rounded-full font-medium text-lg text-black bg-white shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform"
              >
                My Resume
              </a>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SocialIcons className="justify-center lg:justify-start" />
            </motion.div>
          </div>
        </div>

        <div className="relative hidden lg:flex flex-col justify-center items-center h-full w-full">
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              right: 0,
              width: "min(22vw, 410px)",
              height: "min(40vw, 760px)",
              borderRadius: "50%",
              filter: "blur(48px)",
              background: "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)",
            }}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={
              shouldAnimate
                ? { opacity: 0.3, y: 0, scale: 1 }
                : { opacity: 0, y: 40, scale: 0.98 }
            }
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src="https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601090/avatar_yz6dae.png"
            alt="Subhan Farrakh"
            loading="lazy"
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none drop-shadow-xl max-w-full max-h-[90vh]"
            style={{
              right: 0,
              width: "min(40vw, 650px)",
            }}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={
              shouldAnimate
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 40, scale: 0.98 }
            }
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};
