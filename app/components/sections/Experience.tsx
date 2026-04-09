// app/components/sections/Experience.tsx

import { ScrollTimeline } from '~/components/shared/ScrollTimeline';
import { experiences } from '~/data/experiences';
import { Calendar, Briefcase } from 'lucide-react';
import { Link } from 'react-router';

export const Experience = () => {
  return (
    <ScrollTimeline
      items={experiences.map((exp, idx) => ({
        id: idx,
        slug: exp.slug,
        year: exp.duration,
        title: exp.role,
        subtitle: exp.company,
        description: exp.shortDescription,
      }))}
      title="Professional Journey"
      subtitle="Where I've made an impact"
      cardAlignment="alternating"
      parallaxIntensity={0.15}
      showProgressLine={true}
      progressColors={{
        from: '#302b63', // deep purple
        via: '#00bf8f', // emerald
        to: '#1cd8d2', // bright cyan
      }}
      renderCard={(item) => (
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
          <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg">
            <Link
            to={`/experience/${item.slug}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-[#1cd8d2]" />
                <span className="text-sm font-medium text-[#1cd8d2]">
                  {item.year}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 mb-3 text-gray-400">
                <Briefcase className="w-4 h-4 text-[#00bf8f]" />
                <span className="text-sm">{item.subtitle}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </Link>
          </div>
        </div>
      )}
    />
  );
};
