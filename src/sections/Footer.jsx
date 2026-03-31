import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { label } from 'framer-motion/client';

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

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black ">
      
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.35),transparent_70%)]'/>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.30),transparent_70%)]'/>

      <motion.div
        className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="font-semibold leading-none text-white text-center select-none"
          style={{
            fontSize: 'clamp(3rem,5vw,14rem)',
            letterSpacing: '0.02em',
            lineHeight: 0.9,
            whiteSpace: 'nowrap',
            textShadow: '0 2px 18px rgba(0,0,0,0.45)',
          }}
        >
          Subhan Farrakh
        </h1>
        <div className="h-0.75 w-24 md:w-32 rounded-full bg-linear-to-r from-[#0d58cc] via-cyan-300 to-emerald-400" />
        <div className="flex gap-5 text-2xl md:text-3xl">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              href={href}
              key={label}
              aria-label={label}
              target="_blank"
              rel="noopner noreferrer"
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Icon className="w-6 h-6 md:w-8 md:h-8"/>
            </motion.a>
          ))}
        </div>
        <p className='text-gray-300 italic max-w-xl'>
          "Do what you love the BEST, let me automate the REST." 😜
        </p>
        <p className='text-xs text-gray-400'>
          &copy; {new Date().getFullYear()} Subhan Farrakh. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
