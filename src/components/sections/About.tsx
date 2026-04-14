import { motion } from "framer-motion";

const stats = [
  { label: "Experience", value: "1.5+ years" },
  { label: "Speciality", value: "AI Automation" },
  { label: "Focus", value: "Integrations & AI" },
];

const glows = [
  "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
  "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="relative w-40 h-40 md:w-50 md:h-50 rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 80 }}
          >
            
            <motion.img src="https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601091/Subhan_Farrakh_photo.png" alt="Subhan Farrakh Profile" loading="lazy" className="absolute inset-0" />
          </motion.div>
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
              Subhan Farrakh
            </h2>
            <p className="mb-2 text-lg sm:text-xl text-white/90 font-semibold">
              AI Automation Engineer
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I build intelligent automation systems that streamline business operations and
              eliminate repetitive work. From API integrations to full-stack web apps, I design
              scalable, high-performance solutions. Focused on delivering measurable impact, I help
              businesses save time, reduce costs, and scale efficiently.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 1, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">About Me</h3>

          </div>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I specialize in building AI-driven automation systems that replace repetitive processes
            with efficient, scalable workflows. By combining automation tools, APIs, and modern web
            technologies, I create solutions that simplify operations and improve productivity.
          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            My work focuses on helping businesses operate smarter — reducing manual effort,
            optimizing processes, and delivering systems that are reliable, fast, and built for
            growth.
          </p>

          <div className="mt-8 flex justify-center">
            
           <a
              href="/about"
              className="inline-block px-5 py-2 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
            >
              Read More
            </a>
          </div>
                     
        </motion.div>
        
      </div>
    </section>
  );
};
