export interface Experience {
  slug: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  shortDescription: string;
  fullDescription: string;
  achievements: string[];
  technologies: string[];
  image?: string;
}

export const experiences: Experience[] = [
  {
    slug: 'allstate-mapping',
    role: 'AI Automation Developer',
    company: 'AllState Mapping',
    location: 'USA (Remote)',
    duration: 'Feb 2025 - May 2025',
    shortDescription:
      'Built real-estate automation pipeline cutting manual data entry by 90%.',
    fullDescription:
      'AllState Mapping needed to streamline their lead processing from Zillow into their CRM and project management tools. I designed and implemented an end-to-end automation pipeline that captures new leads, enriches data, and syncs across Monday.com and HubSpot, eliminating manual copy-paste work and reducing errors.',
    achievements: [
      'Reduced manual data entry by 90%, saving 15+ hours per week',
      'Integrated Zillow API with Monday.com and HubSpot',
      'Implemented error handling and notification system',
      'Created dashboard for monitoring automation health',
    ],
    technologies: ['n8n', 'Zillow API', 'Monday.com API', 'HubSpot API', 'JavaScript', 'Webhooks'],
    image: '/assets/projects/allstate.jpg',
  },
  {
    slug: 'odd-jobs-on-demand',
    role: 'AI Automation Developer',
    company: 'Odd Jobs On Demand',
    location: 'USA (Remote)',
    duration: 'Jan 2025 - Mar 2025',
    shortDescription:
      'Designed voice AI agent and work order automation, reducing status calls by 75%.',
    fullDescription:
      'Odd Jobs On Demand provides on-demand maintenance services. I built a voice AI agent that handles incoming status inquiries and automatically updates work orders in their system. This eliminated the need for manual call-backs and improved operational efficiency.',
    achievements: [
      'Reduced status-related calls by 75%',
      'Increased operational efficiency by 40%',
      'Integrated voice AI (Vapi) with job management system',
      'Built real-time status update notifications',
    ],
    technologies: ['Vapi.ai', 'Make.com', 'Airtable', 'Twilio', 'Node.js', 'REST APIs'],
    image: '/assets/projects/oddjobs.jpg',
  },
  {
    slug: 'kidskulturspass',
    role: 'Web Dev & Automation Specialist',
    company: 'KidsKulturSpass',
    location: 'Germany (Remote)',
    duration: 'Dec 2024 - Jan 2026',
    shortDescription:
      'Built MERN dashboards & automated email workflows, cutting manual processing by 50%.',
    fullDescription:
      'KidsKulturSpass organizes cultural events for children. I developed a custom MERN dashboard for event management and automated email workflows using HubSpot and Google Calendar. The system handles registrations, reminders, and follow-ups automatically.',
    achievements: [
      'Reduced manual processing time by 50%',
      'Built full-stack MERN dashboard with user roles',
      'Automated email sequences based on event triggers',
      'Integrated Google Calendar for event scheduling',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'HubSpot', 'Google Calendar API', 'GCP'],
    image: '/assets/projects/kidskulturspass.jpg',
  },
];
