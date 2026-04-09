import type { MetaFunction } from 'react-router';
import { Link, useSearchParams } from 'react-router';
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { projects } from '~/data/projects';
import { OptimizedImage } from '~/components/shared/OptimizedImage';
import { generateMeta } from '~/lib/seo';
import { Calendar, Search, ArrowUpDown } from 'lucide-react';

export const meta: MetaFunction = ({ location }) =>
  generateMeta({
    title: 'AI Automation & Web Development Projects | Subhan Farrakh',
    description:
      'Explore real-world AI automation and full-stack projects by Subhan Farrakh. n8n workflows, MERN apps, and custom integrations.',
    path: location.pathname,
  });

// Get all unique technologies from projects
const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies)),
).sort();

export default function ProjectsRoute() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedTechs, setSelectedTechs] = useState<string[]>(
    searchParams.get('tech')?.split(',').filter(Boolean) || [],
  );
  const [sortBy, setSortBy] = useState<'year' | 'title'>(
    (searchParams.get('sort') as 'year' | 'title') || 'year',
  );

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.technologies.some((t) => t.toLowerCase().includes(query)),
      );
    }

    // Technology filter
    if (selectedTechs.length > 0) {
      filtered = filtered.filter((p) =>
        selectedTechs.every((tech) => p.technologies.includes(tech)),
      );
    }

    // Sorting
    return [...filtered].sort((a, b) => {
      if (sortBy === 'year') {
        return b.year.localeCompare(a.year);
      }
      return a.title.localeCompare(b.title);
    });
  }, [searchQuery, selectedTechs, sortBy]);

  // Update URL params
  const updateParams = (updates: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams, { replace: true });
  };

  const handleTechToggle = (tech: string) => {
    const newSelection = selectedTechs.includes(tech)
      ? selectedTechs.filter((t) => t !== tech)
      : [...selectedTechs, tech];
    setSelectedTechs(newSelection);
    updateParams({ tech: newSelection.join(',') || null });
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    updateParams({ q: value || null });
  };

  const handleSortChange = (value: 'year' | 'title') => {
    setSortBy(value);
    updateParams({ sort: value });
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTechs([]);
    setSortBy('year');
    setSearchParams({});
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Project Archive
        </motion.h1>
        <motion.p
          className="text-gray-300 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A collection of AI automation systems and full-stack applications I've
          built.
        </motion.p>

        {/* Filters Bar */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#1cd8d2] transition-colors"
            />
          </div>

          {/* Technology Filters */}
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => handleTechToggle(tech)}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                  selectedTechs.includes(tech)
                    ? 'bg-[#1cd8d2] text-black font-medium'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Sort & Clear */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) =>
                  handleSortChange(e.target.value as 'year' | 'title')
                }
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#1cd8d2]"
              >
                <option value="year">Newest First</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
            {(searchQuery || selectedTechs.length > 0) && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-400">
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Link to={`/projects/${project.slug}`} className="block h-full">
                  <div className="relative overflow-hidden rounded-xl bg-gray-900/50 border border-white/10 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity"
                        style={{ backgroundColor: project.bgColor }}
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                        <Calendar size={14} />
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 flex-1">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No projects match your filters.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 text-[#1cd8d2] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
