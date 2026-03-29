import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';

import { a, filter, link } from 'framer-motion/client';
import { FaXTwitter } from 'react-icons/fa6';
import avatar from '../assets/avatar.png';
import { href } from 'react-router-dom';
FaXTwitter;

const Fiverr = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="transparent"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15.352 3c0-.471 0-.707-.147-.854C15.06 2 14.823 2 14.352 2h-2.735C8.896 2 6.522 4.51 6.681 8.5H5c-.471 0-.707 0-.854.146C4 8.793 4 9.03 4 9.5V11c0 .471 0 .707.146.854C4.293 12 4.53 12 5 12h2v9c0 .471 0 .707.146.854C7.293 22 7.53 22 8 22h2c.471 0 .707 0 .854-.146C11 21.707 11 21.47 11 21v-9h4.53v9c0 .471 0 .707.147.854c.146.146.382.146.854.146H19c.471 0 .707 0 .854-.146C20 21.707 20 21.47 20 21V10.5c0-.943 0-1.414-.293-1.707S18.943 8.5 18 8.5h-7V7.23c0-.73.5-1.73 1.797-1.73h1.555c.471 0 .707 0 .853-.146c.147-.147.147-.383.147-.854z"
      color="currentColor"
    ></path>
  </svg>
);

const socials = [
  { Icon: Linkedin, label: 'Linkedin', href: 'https://linkedin.com/in/subhanf' },
  { Icon: Fiverr, label: 'Fiverr', href: 'https://www.fiverr.com/subhan_codes' },
  { Icon: Github, label: 'Github', href: 'https://github.com/subhan-f' },
  { Icon: FaXTwitter, label: 'X', href: 'https://twitter.com/@SubhanFarrakh' },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: 'drop-shadow(0 0 0 rgba(0,0,0,0))' },
  hover: {
    scale: 1.2,
    y: -3,
    filter: 'drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))',
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

function Home() {
  const roles = useMemo(() => [
    'AI Automation Engineer',
    'Agentic AI Developer',
    'AI/ML Engineer',
    'MERN Stack Developer',
  ]);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const isTyping = deleting ? subIndex > 0 : subIndex < current.length;
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
  }, [subIndex, index, deleting, roles]);

  useEffect(() => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  return () => document.head.removeChild(style);
  }, []);
  
    const isTypingActive = useMemo(() => {
    const current = roles[index];
    return (deleting && subIndex > 0) || (!deleting && subIndex < current.length);
  }, [deleting, subIndex, index, roles]);

  return (
    <section id="Home" className="w-full h-screen relative bg-black overflow-hidden">
      <ParticlesBackground />
      <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[500vw] md:w-[40vw] h-[70vw] sm:h-[500vw] md:h-[40vw] max-w-125 max-h-125 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[500vw] md:w-[40vw] h-[70vw] sm:h-[500vw] md:h-[40vw] max-w-125 max-h-125 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"></div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-3xl">
            <motion.div
              className="mb-3 text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle"
                style={{
                  height: '1em',
                  animation: isTypingActive ? 'none' : 'blink 1s steps(2, start) infinite',
                }}
              ></span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent 
              bg-clip-text bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I save businesses hundreds of hours by automating workflows with AI — eliminating
              manual tasks, streamlining operations, and letting you focus on growth.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#Projects"
                className="px-6 py-3 rounded-full font-medium text-lg text-white bg-linear-to-r from-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-opacity"
              >
                View My Work
              </a>
              <a
                href="/Resume.pdf"
                download
                className="px-6 py-3 rounded-full font-medium text-lg text-black bg-white shadow-lg hover:bg-gray-200 hover:scale-105 transition-opacity"
              >
                My Resume
              </a>
            </motion.div>
            <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon
                    // fill="currentColor"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block flex-col justify-center items-center h-full w-full">
          <div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              right: '10px',
              width: 'min(22vw, 410px)',
              height: 'min(40vw, 760px)',
              borderRadius: '50%',
              filter: 'blur(38px)',
              opacity: 0.32,
              background: 'conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)',
            }}
          />

          <motion.img
            src={avatar}
            alt="Subhan Farrakh"
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none drop-shadow-xl"
            style={{
              right: '-30px',
              width: 'min(45vw, 780px)',
              maxWidth: '100%',
              maxHeight: '90vh',
            }}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
