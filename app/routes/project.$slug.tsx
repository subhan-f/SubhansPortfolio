import type { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, Link, redirect } from "react-router";
import { motion } from "framer-motion";
import { projects } from "~/data/projects";
import { OptimizedImage } from "~/components/shared/OptimizedImage";
import { generateMeta } from "~/lib/seo";
import { Calendar, User, Code, Award, ArrowLeft, ExternalLink } from "lucide-react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    throw redirect("/projects");
  }
  return { project };
};

export const meta: MetaFunction = ({ data, location }) => {
  const project = (data as { project: typeof projects[0] })?.project;
  if (!project) return [];
  return generateMeta({
    title: `${project.title} | Case Study by Subhan Farrakh`,
    description: project.shortDescription,
    path: location.pathname,
  });
};

export default function ProjectDetail() {
  const { project } = useLoaderData<typeof loader>();

  // JSON-LD Schema for CreativeWork/SoftwareApplication
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.fullDescription,
    url: `https://subhanfarrakh.com/projects/${project.slug}`,
    image: `https://subhanfarrakh.com${project.image}`,
    author: {
      "@type": "Person",
      name: "Subhan Farrakh",
    },
    datePublished: project.year,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
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
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Hero Image */}
        <motion.div
          className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <OptimizedImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          </div>
        </motion.div>

        {/* Metadata Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <Calendar className="w-5 h-5 text-[#1cd8d2] mb-2" />
            <p className="text-xs text-gray-400">Year</p>
            <p className="font-semibold">{project.year}</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <User className="w-5 h-5 text-[#1cd8d2] mb-2" />
            <p className="text-xs text-gray-400">Role</p>
            <p className="font-semibold">{project.role}</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <Code className="w-5 h-5 text-[#1cd8d2] mb-2" />
            <p className="text-xs text-gray-400">Tech Stack</p>
            <p className="font-semibold">{project.technologies.length} tools</p>
          </div>
          {project.client && (
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <Award className="w-5 h-5 text-[#1cd8d2] mb-2" />
              <p className="text-xs text-gray-400">Client</p>
              <p className="font-semibold">{project.client}</p>
            </div>
          )}
        </motion.div>

        {/* Description */}
        <motion.div
          className="prose prose-invert max-w-none mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed">{project.fullDescription}</p>
        </motion.div>

        {/* Features & Challenges */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <motion.div
            className="bg-white/5 p-6 rounded-xl border border-white/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-bold mb-4">✨ Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#1cd8d2] mt-1">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white/5 p-6 rounded-xl border border-white/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-4">🧩 Challenges & Solutions</h2>
            {project.challenges && (
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1">Challenge</p>
                <p className="text-gray-300">{project.challenges}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <p className="text-sm text-gray-400 mb-1">Solution</p>
                <p className="text-gray-300">{project.solution}</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Outcome & CTA */}
        <motion.div
          className="bg-gradient-to-r from-[#302b63]/20 via-[#00bf8f]/20 to-[#1cd8d2]/20 p-8 rounded-2xl border border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {project.outcome && (
            <p className="text-xl font-semibold mb-4">📈 {project.outcome}</p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Visit Live Project <ExternalLink size={18} />
              </a>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}