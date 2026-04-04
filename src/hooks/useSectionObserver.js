import { useEffect, useState } from 'react';

const sections = [
  { id: 'Home', title: 'Subhan Farrakh – AI Automation Engineer', description: 'AI automation engineer specializing in agentic AI, workflow automation, and full‑stack development. Save hundreds of hours with intelligent systems.' },
  { id: 'About', title: 'About Subhan Farrakh | AI Automation Expert', description: 'Learn about Subhan Farrakh, an AI automation engineer who builds intelligent systems to eliminate repetitive work and scale businesses.' },
  { id: 'Skills', title: 'Tech Stack & Skills | AI, n8n, Make, React, Python', description: 'Explore the tools and technologies I use: n8n, Make, OpenAI, React, Node.js, Docker, and more.' },
  { id: 'Projects', title: 'Portfolio Projects | AI Automation & Web Apps', description: 'Real‑world projects: mk.studio, Gamily, Hungary Tiger – see AI automation in action.' },
  { id: 'experience', title: 'Work Experience | AI Automation Developer', description: 'Professional experience in AI automation for US and European companies – real results, real savings.' },
  { id: 'Testimonials', title: 'Client Testimonials | Trusted by Businesses Worldwide', description: 'What clients say about working with Subhan on automation, CRM, and AI solutions.' },
  { id: 'Contact', title: 'Contact Subhan Farrakh | Start Your Automation Project', description: 'Ready to automate your business? Reach out for a free consultation on AI workflows and integrations.' },
];

export function useSectionObserver() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const observers = sections.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { threshold: 0.3 } // section becomes active when 30% visible
      );
      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return activeSection;
}