export const myData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Subhan Farrakh',
  url: 'https://subhanfarrakh.com',
  image: 'https://subhanfarrakh.com/assets/Subhan.png', // Absolute URL is required for schema
  sameAs: [
    'https://linkedin.com/in/subhanf',
    'https://github.com/subhan-f',
    'https://www.fiverr.com/subhan_codes',
    'https://twitter.com/SubhanFarrakh',
  ],
  jobTitle: 'AI Automation Engineer',
  description:
    'I build intelligent automation systems that streamline business operations and eliminate repetitive work. Specialist in n8n, Make, and Agentic AI.',
  knowsAbout: [
    'AI Automation',
    'Agentic AI',
    'n8n',
    'Make.com',
    'Zapier',
    'Workflow Automation',
    'MERN Stack Development',
    'CRM Integration',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Independent / Freelance',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'COMSATS University Islamabad, Abbottabad Campus.', // Optional but helps E-E-A-T
  },
};
