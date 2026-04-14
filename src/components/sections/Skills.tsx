import { useRef, useEffect, useState } from 'react';
import { useMotionValue, motion } from 'framer-motion';
import { FaJava, FaPython, FaNodeJs, FaReact, FaDocker } from 'react-icons/fa6';
import {
  SiN8N,
  SiMake,
  SiZapier,
  SiExpress,
  SiFastapi,
  SiMongodb,
} from 'react-icons/si';
import { AiOutlineOpenAI } from 'react-icons/ai';
import { BiLogoPostgresql } from 'react-icons/bi';
import { RiSupabaseFill, RiTailwindCssFill } from 'react-icons/ri';

const skills = [
  { icon: <FaJava />, label: 'Java' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <SiN8N />, label: 'n8n' },
  { icon: <SiMake />, label: 'Make' },
  { icon: <SiZapier />, label: 'Zapier' },
  { icon: <AiOutlineOpenAI />, label: 'OpenAI' },
  { icon: <RiSupabaseFill />, label: 'SupaBase' },
  { icon: <SiFastapi />, label: 'FastAPI' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <SiExpress />, label: 'ExpressJS' },
  { icon: <FaReact />, label: 'React' },
  { icon: <RiTailwindCssFill />, label: 'Tailwind CSS' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <BiLogoPostgresql />, label: 'PostgreSQL' },
  { icon: <FaDocker />, label: 'Docker' },
];

export const Skills = () => {
  const repeated = [...skills, ...skills];
  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchY = useRef<number | null>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) =>
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1),
      { threshold: [0.1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const onWheel = (e: WheelEvent) => setDir(e.deltaY > 0 ? -1 : 1);
    const onTouchStart = (e: TouchEvent) =>
      (touchY.current = e.touches[0].clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (touchY.current == null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [active]);

  useEffect(() => {
    let id: number;
    let last = performance.now();
    const SPEED = 80;
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      let next = x.get() + SPEED * dir * dt;
      const loop = trackRef.current?.scrollWidth
        ? trackRef.current.scrollWidth / 2
        : 0;
      if (loop) {
        if (next <= -loop) next += loop;
        if (next >= 0) next -= loop;
      }
      x.set(next);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [dir, x]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden overflow-x-clip"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-75 h-75 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-75 h-75 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>
      <motion.h2
        className="text-4xl mt-5 pb-0.5 sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>
      <motion.p
        className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Modern Problems | Modern Solutions
      </motion.p>
      <div className="relative w-full overflow-visible">
        <div className="overflow-x-clip">
          <motion.div
            ref={trackRef}
            className="flex gap-10 text-6xl text-[#1cd8d2]"
            style={{ x, whiteSpace: 'nowrap', willChange: 'transform' }}
          >
            {repeated.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 min-w-30"
                aria-label={s.label}
                title={s.label}
              >
                <span className="hover:scale-125 transition-transform duration-300">
                  {s.icon}
                </span>
                <p className="text-sm">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
