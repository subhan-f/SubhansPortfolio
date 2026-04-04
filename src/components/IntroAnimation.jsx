import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

const greetings = [
  'Hello',
  'Hola',
  'Ciao',
  'Hallo',
  'नमस्ते',
  'Bonjour',
  'こんにちは',
  '안녕하세요',
  'Здравствуйте',
  '你好',
  'مرحبا',
  'Salam',
];

function IntroAnimation({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const origin = isMobile ? '95% 8%' : '50% 8%';

  useEffect(() => {
    if (index < greetings.length - 1) {
      const id = setInterval(() => setIndex((i) => i + 1), 180);
      return () => clearInterval(id);
    } else {
      // After last greeting, wait a moment then trigger exit
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [index]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          key="intro-overlay" // stable key to help AnimatePresence
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white"
          initial={{ clipPath: `circle(150% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1
            key={index}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.12 }}
          >
            {greetings[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroAnimation;