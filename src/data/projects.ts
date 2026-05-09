export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  client?: string;
  year: string;
  role: string;
  technologies: string[];
  features: string[];
  challenges?: string;
  solution?: string;
  outcome?: string;
  link?: string;
  image: string;
  gallery?: string[];
  bgColor: string;
}
export const projects: Project[] = [
  {
    slug: 'jorh',
    title: 'Jorh',
    shortDescription: 'Microservices-based link management and analytics platform.',
    fullDescription:
      'Jorh is a scalable link management platform designed for creating, managing, and analyzing shortened URLs with modular backend services. The platform was built using a microservices architecture with separate services for authentication, analytics, redirects, and user management. The project focused heavily on backend scalability, API-driven workflows, and maintainable system design.',
    client: 'Personal Project',
    year: '2025',
    role: 'Backend & System Architecture Developer',
    technologies: ['Node.js', 'PostgreSQL', 'Docker', 'JWT', 'Express', 'Redis', 'Microservices'],
    features: [
      'Short URL generation and management',
      'Analytics and click tracking',
      'Authentication and user management',
      'API-driven architecture',
      'Scalable microservices structure',
      'Containerized deployment workflows',
    ],
    challenges:
      'Designing a modular architecture capable of scaling independently while maintaining efficient inter-service communication.',
    solution:
      'Implemented a microservices-based backend with isolated services, JWT authentication, Redis caching, and Dockerized deployment.',
    outcome:
      'Built a scalable backend architecture with improved maintainability and operational flexibility.',
    image:
      'https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778323254/Screenshot_2026-05-09_at_15-40-26_Jorh_Dashboard_pymytq.png',
    gallery: [
      'https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778323254/Screenshot_2026-05-09_at_15-40-26_Jorh_Dashboard_pymytq.png',
    ],
    bgColor: '#7c3aed',
  },

  {
    slug: 'kidskulturspass',
    title: 'KKS',
    shortDescription: 'Operational dashboard and workflow automation system for a German client.',
    fullDescription:
      'Developed automation systems and operational dashboards for KidsKulturSpass to streamline administrative workflows, calendar management, CRM operations, and email-based processes. The project involved integrating multiple SaaS platforms and reducing repetitive operational tasks through automation.',
    client: 'Antonio Macan - KidsKulturSpass',
    year: '2025',
    role: 'Automation & Technical Operations Developer',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Google APIs',
      'HubSpot',
      'Make.com',
      'Google Cloud',
    ],
    features: [
      'Operational dashboard development',
      'Google Calendar integrations',
      'CRM workflow automation',
      'Email automation systems',
      'Cloud-based workflow management',
      'Internal operational tooling',
    ],
    challenges:
      'Managing multiple interconnected workflows while ensuring reliable automation across cloud services.',
    solution:
      'Implemented centralized operational workflows with API integrations and automated event-driven processes.',
    outcome:
      'Reduced manual operational overhead and improved workflow efficiency for internal business operations.',
    image: 'https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778324625/kks_tkjufl.jpg',
    gallery: ['https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778324625/kks_tkjufl.jpg'],
    bgColor: '#0d4d3d',
  },
  {
    slug: 'video-motion-magnification',
    title: 'Eulerian Video Motion Mag',
    shortDescription:
      'Computer vision and AI-based predictive maintenance system using Eulerian Video Magnification.',
    fullDescription:
      'Developed an AI-assisted predictive maintenance system focused on detecting subtle abnormal motor movements using Eulerian Video Magnification and computer vision techniques. The project processed real-time video streams to amplify invisible motion patterns in AC induction motors and explored machine learning-based analysis for fault detection and operational monitoring.',
    client: 'Final Year Project',
    year: '2025',
    role: 'Computer Vision & AI Developer',
    technologies: [
      'Python',
      'OpenCV',
      'TensorFlow',
      'Keras',
      'Google Colab',
      'NumPy',
      'Computer Vision',
    ],
    features: [
      'Eulerian video motion amplification',
      'Real-time video processing',
      'Abnormal motion detection',
      'Machine learning-based analysis',
      'Predictive maintenance workflow',
      'Signal amplification and visualization',
    ],
    challenges:
      'Processing subtle motion variations accurately while maintaining stable real-time video amplification and analysis.',
    solution:
      'Implemented Eulerian Video Magnification techniques combined with computer vision preprocessing and machine learning workflows.',
    outcome:
      'Successfully demonstrated amplified motion visualization for predictive maintenance and anomaly detection research.',
    image: 'https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778324104/vid-mag_d3ywqs.png',
    gallery: ['https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778324104/vid-mag_d3ywqs.png'],
    bgColor: '#7b3fe4',
  },
];
