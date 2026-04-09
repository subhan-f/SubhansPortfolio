import type { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, Link, redirect } from "react-router";
import { motion } from "framer-motion";
import { experiences } from "~/data/experiences";
import { generateMeta } from "~/lib/seo";
import { Calendar, MapPin, ArrowLeft, Briefcase, CheckCircle, Code } from "lucide-react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const experience = experiences.find((e) => e.slug === params.slug);
  if (!experience) {
    throw redirect("/experience");
  }
  return { experience };
};

export const meta: MetaFunction = ({ data, location }) => {
  const exp = (data as { experience: typeof experiences[0] })?.experience;
  if (!exp) return [];
  return generateMeta({
    title: `${exp.role} at ${exp.company} | Subhan Farrakh`,
    description: exp.shortDescription,
    path: location.pathname,
  });
};

export default function ExperienceDetail() {
  const { experience } = useLoaderData<typeof loader>();

  // JSON-LD Schema for Occupation/WorkExperience
  const schema = {
    "@context": "https://schema.org",
    "@type": "Occupation",
    name: experience.role,
    description: experience.fullDescription,
    occupationLocation: {
      "@type": "Country",
      name: experience.location?.split('(')[1]?.replace(')', '') || "Remote",
    },
    skills: experience.technologies.join(", "),
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      currency: "USD",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://subhanfarrakh.com/experience/${experience.slug}`,
    },
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/experience"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Experience
        </Link>

        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{experience.role}</h1>
          <div className="flex flex-wrap items-center gap-3 text-xl text-gray-300 mb-4">
            <span className="font-semibold">{experience.company}</span>
            {experience.location && (
              <>
                <span className="text-gray-500">•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={18} />
                  {experience.location}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar size={18} />
            <span>{experience.duration}</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="prose prose-invert max-w-none mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            {experience.fullDescription}
          </p>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          className="bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-[#1cd8d2]" />
            Key Achievements
          </h2>
          <ul className="space-y-3">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#1cd8d2] mt-1">▹</span>
                <span className="text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          className="bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 mb-10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-[#1cd8d2]" />
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 rounded-lg text-gray-200 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center p-8 bg-gradient-to-r from-[#302b63]/20 via-[#00bf8f]/20 to-[#1cd8d2]/20 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Interested in similar results for your business?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1cd8d2] text-black rounded-lg font-semibold hover:bg-[#00bf8f] transition-colors"
          >
            Let's Work Together
          </Link>
        </motion.div>
      </div>
    </section>
  );
}