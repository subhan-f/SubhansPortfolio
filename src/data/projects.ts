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
    slug: 'mk-studio',
    title: 'MK Studio',
    shortDescription: 'Creative agency website with CMS integration.',
    fullDescription:
      'MK Studio is a creative design agency based in Europe. I built their modern portfolio website with a custom CMS, allowing them to easily update projects, team members, and blog posts. The site features smooth animations, optimized image loading, and a contact form integrated with their CRM.',
    client: 'MK Studio',
    year: '2024',
    role: 'Full Stack Developer',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Custom CMS for portfolio and blog',
      'Server-side rendering for SEO',
      'Image optimization and lazy loading',
      'Contact form with email notification',
      'Admin dashboard for content management',
    ],
    challenges:
      'The client needed an intuitive interface to manage content without technical knowledge.',
    solution:
      'Built a headless CMS with a simple admin panel using React and MongoDB.',
    outcome:
      'Client updates content weekly without developer assistance, saving hours per month.',
    link: 'https://mk.studio',
    image: 'https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601090/img1_fbin6l.jpg',
    gallery: ['https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601090/img1_fbin6l.jpg', "https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601090/photo1_flzlue.jpg"],
    bgColor: '#0d4d3d',
  },
  {
    slug: 'gamily',
    title: 'Gamily',
    shortDescription: 'Family organization and chore management app.',
    fullDescription:
      'Gamily helps families manage chores, allowances, and schedules in one place. I developed the backend API and real-time notification system. The app includes parent/child roles, reward tracking, and calendar sync.',
    client: 'Gamily Inc.',
    year: '2025',
    role: 'Backend & API Developer',
    technologies: ['Node.js', 'PostgreSQL', 'Socket.io', 'JWT', 'Docker'],
    features: [
      'Real-time chore assignment and completion tracking',
      'Allowance and reward system',
      'Family calendar with reminders',
      'Push notifications for task deadlines',
      'Parental controls and activity logs',
    ],
    challenges:
      'Real-time sync across multiple devices and user roles required careful data architecture.',
    solution:
      'Implemented WebSockets with Socket.io and a PostgreSQL database with row-level security.',
    outcome:
      'Over 500 families use the app daily, reducing missed chores by 40%.',
    link: 'https://gamilyapp.com',
    image: "https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601089/img2_rnallk.jpg",
    gallery: ["https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601089/img2_rnallk.jpg", "https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601090/photo2_tp1d4g.jpg"],
    bgColor: '#3884d3',
  },
  {
    slug: 'hungry-tiger',
    title: 'Hungry Tiger',
    shortDescription: 'Restaurant ordering and delivery platform.',
    fullDescription:
      'Hungry Tiger is a multi-vendor food ordering platform connecting restaurants with customers. I built the vendor dashboard, order management system, and integrated payment gateways.',
    client: 'Hungry Tiger',
    year: '2024',
    role: 'Full Stack Developer',
    technologies: ['React', 'Redux', 'Node.js', 'Stripe', 'MongoDB'],
    features: [
      'Multi-vendor restaurant onboarding',
      'Real-time order tracking',
      'Secure payment processing',
      'Vendor analytics and reporting',
      'Customer reviews and ratings',
    ],
    challenges:
      'Handling concurrent orders during peak hours without performance degradation.',
    solution:
      'Optimized database queries, implemented Redis caching, and used queue workers for order processing.',
    outcome:
      'Platform processes 200+ orders daily with 99.9% uptime.',
    link: 'https://hungrytiger.com',
    image: "https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601089/img3_cqzkvj.jpg",
    gallery: ["https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601089/img3_cqzkvj.jpg", 'https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601093/photo3_hiavxb.jpg'],
    bgColor: '#dc9317',
  },
];
