import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { experiences } from "~/data/experiences";
import { generateMeta } from "~/lib/seo";
import { Calendar, MapPin, ChevronRight, Award } from "lucide-react";

export const meta: MetaFunction = ({ location }) =>
  generateMeta({
    title: "Professional Experience | AI Automation & Development",
    description:
      "Explore Subhan Farrakh's professional journey in AI automation, full-stack development, and workflow optimization across international clients.",
    path: location.pathname,
  });

export default function ExperienceRoute() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Professional Journey
        </motion.h1>
        <motion.p
          className="text-gray-300 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Where I've delivered impact through automation and development.
        </motion.p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.slug}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/experience/${exp.slug}`}
                className="block group"
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-900/50 border border-white/10 p-6 md:p-8 hover:border-[#1cd8d2]/50 transition-all duration-300">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1cd8d2]/0 via-[#1cd8d2]/0 to-[#1cd8d2]/0 group-hover:from-[#1cd8d2]/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold group-hover:text-[#1cd8d2] transition-colors">
                          {exp.role}
                        </h2>
                        <p className="text-lg text-gray-300">{exp.company}</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#1cd8d2] group-hover:translate-x-1 transition-all" />
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 mb-4">{exp.shortDescription}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 4 && (
                        <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300">
                          +{exp.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}