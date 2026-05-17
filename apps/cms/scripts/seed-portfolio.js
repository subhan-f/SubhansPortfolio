'use strict';

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects = [
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
    challenges: 'Designing a modular architecture capable of scaling independently while maintaining efficient inter-service communication.',
    solution: 'Implemented a microservices-based backend with isolated services, JWT authentication, Redis caching, and Dockerized deployment.',
    outcome: 'Built a scalable backend architecture with improved maintainability and operational flexibility.',
    bgColor: '#7c3aed',
    imageUrl: 'https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778323254/Screenshot_2026-05-09_at_15-40-26_Jorh_Dashboard_pymytq.png',
    galleryImageUrls: [
      'https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778323254/Screenshot_2026-05-09_at_15-40-26_Jorh_Dashboard_pymytq.png',
    ],
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
    technologies: ['React', 'Node.js', 'MongoDB', 'Google APIs', 'HubSpot', 'Make.com', 'Google Cloud'],
    features: [
      'Operational dashboard development',
      'Google Calendar integrations',
      'CRM workflow automation',
      'Email automation systems',
      'Cloud-based workflow management',
      'Internal operational tooling',
    ],
    challenges: 'Managing multiple interconnected workflows while ensuring reliable automation across cloud services.',
    solution: 'Implemented centralized operational workflows with API integrations and automated event-driven processes.',
    outcome: 'Reduced manual operational overhead and improved workflow efficiency for internal business operations.',
    bgColor: '#0d4d3d',
    imageUrl: 'https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778324625/kks_tkjufl.jpg',
    galleryImageUrls: [
      'https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778324625/kks_tkjufl.jpg',
    ],
  },
  {
    slug: 'video-motion-magnification',
    title: 'Eulerian Video Motion Mag',
    shortDescription: 'Computer vision and AI-based predictive maintenance system using Eulerian Video Magnification.',
    fullDescription:
      'Developed an AI-assisted predictive maintenance system focused on detecting subtle abnormal motor movements using Eulerian Video Magnification and computer vision techniques. The project processed real-time video streams to amplify invisible motion patterns in AC induction motors and explored machine learning-based analysis for fault detection and operational monitoring.',
    client: 'Final Year Project',
    year: '2025',
    role: 'Computer Vision & AI Developer',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'Google Colab', 'NumPy', 'Computer Vision'],
    features: [
      'Eulerian video motion amplification',
      'Real-time video processing',
      'Abnormal motion detection',
      'Machine learning-based analysis',
      'Predictive maintenance workflow',
      'Signal amplification and visualization',
    ],
    challenges: 'Processing subtle motion variations accurately while maintaining stable real-time video amplification and analysis.',
    solution: 'Implemented Eulerian Video Magnification techniques combined with computer vision preprocessing and machine learning workflows.',
    outcome: 'Successfully demonstrated amplified motion visualization for predictive maintenance and anomaly detection research.',
    bgColor: '#dc9317',
    imageUrl: 'https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778324104/vid-mag_d3ywqs.png',
    galleryImageUrls: [
      'https://res.cloudinary.com/dkcdwyrjl/image/upload/v1778324104/vid-mag_d3ywqs.png',
    ],
  },
];

const experiences = [
  {
    slug: 'allstate-mapping',
    role: 'AI Automation Developer',
    company: 'AllState Mapping',
    location: 'USA (Remote)',
    duration: 'Feb 2025 - May 2025',
    shortDescription: 'Built real-estate automation pipeline cutting manual data entry by 90%.',
    fullDescription:
      'AllState Mapping needed to streamline their lead processing from Zillow into their CRM and project management tools. I designed and implemented an end-to-end automation pipeline that captures new leads, enriches data, and syncs across Monday.com and HubSpot, eliminating manual copy-paste work and reducing errors.',
    achievements: ['Reduced manual data entry by 90%, saving 15+ hours per week', 'Integrated Zillow API with Monday.com and HubSpot', 'Implemented error handling and notification system', 'Created dashboard for monitoring automation health'],
    technologies: ['n8n', 'Zillow API', 'Monday.com API', 'HubSpot API', 'JavaScript', 'Webhooks'],
  },
  {
    slug: 'odd-jobs-on-demand',
    role: 'AI Automation Developer',
    company: 'Odd Jobs On Demand',
    location: 'USA (Remote)',
    duration: 'Jan 2025 - Mar 2025',
    shortDescription: 'Designed voice AI agent and work order automation, reducing status calls by 75%.',
    fullDescription:
      'Odd Jobs On Demand provides on-demand maintenance services. I built a voice AI agent that handles incoming status inquiries and automatically updates work orders in their system. This eliminated the need for manual call-backs and improved operational efficiency.',
    achievements: ['Reduced status-related calls by 75%', 'Increased operational efficiency by 40%', 'Integrated voice AI (Vapi) with job management system', 'Built real-time status update notifications'],
    technologies: ['Vapi.ai', 'Make.com', 'Airtable', 'Twilio', 'Node.js', 'REST APIs'],
  },
  {
    slug: 'kidskulturspass-exp',
    role: 'Web Dev & Automation Specialist',
    company: 'KidsKulturSpass',
    location: 'Germany (Remote)',
    duration: 'Dec 2024 - Jan 2026',
    shortDescription: 'Built MERN dashboards & automated email workflows, cutting manual processing by 50%.',
    fullDescription:
      'KidsKulturSpass organizes cultural events for children. I developed a custom MERN dashboard for event management and automated email workflows using HubSpot and Google Calendar. The system handles registrations, reminders, and follow-ups automatically.',
    achievements: ['Reduced manual processing time by 50%', 'Built full-stack MERN dashboard with user roles', 'Automated email sequences based on event triggers', 'Integrated Google Calendar for event scheduling'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'HubSpot', 'Google Calendar API', 'GCP'],
  },
];

const testimonials = [
  {
    name: 'Ali Simms',
    role: 'Odd Jobs Property Maintenance, USA',
    review: "Subhan is a very conscientious and professional developer. He understands what you're looking for and does his best to provide it. He's very skilled, and will take very good care of your automation and AI needs.",
    imageUrl: 'https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601088/AliSimms_ir5fol.webp',
  },
  {
    name: 'Lidi Anettem',
    role: 'Buy Properties Group, USA',
    review: "I had the pleasure of working with Subhan, who demonstrated exceptional skill in creating zaps for my business. His outstanding listening skills ensured he thoroughly understood my specific needs and business requirements...",
    imageUrl: 'https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601090/Lidi_gg1zou.webp',
  },
  {
    name: 'Antonio Macan',
    role: 'KidsKulturSpass, Germany',
    review: 'Subhan is a true expert in his field. Will keep going with him for future.',
    imageUrl: 'https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601089/antonio_qzgkty.png',
  },
  {
    name: 'Sonia De La Torre',
    role: 'FHOD LLC, USA',
    review: 'Subhan did an exceptional job setting up my Podio CRM. He was professional, efficient, and incredibly knowledgeable, making the process smooth and hassle-free. Highly recommend his services!',
    imageUrl: 'https://res.cloudinary.com/dkcdwyrjl/image/upload/q_auto/f_auto/v1775601091/sonia_cutox4.webp',
  },
];

// ─── Cloudinary URL parser ─────────────────────────────────────────────────────

function parseCloudinaryUrl(url) {
  if (!url) return null;
  try {
    // Strip everything up to and including /upload/
    const uploadMatch = url.match(/\/upload\/(.+)/);
    if (!uploadMatch) return null;

    let remaining = uploadMatch[1];

    // Remove named transformation segments like q_auto, f_auto, w_300, c_fill
    remaining = remaining.replace(/^(?:[a-z]+_[a-z0-9]+\/)+/, '');

    // Remove version segment like v1234567
    remaining = remaining.replace(/^v\d+\//, '');

    // remaining = "public_id.ext" or "folder/public_id.ext"
    const dotIdx = remaining.lastIndexOf('.');
    const ext = dotIdx > 0 ? remaining.slice(dotIdx + 1) : 'jpg';
    const publicId = dotIdx > 0 ? remaining.slice(0, dotIdx) : remaining;
    const name = publicId.split('/').pop();

    const mimeMap = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif', avif: 'image/avif' };

    return {
      name,
      ext: `.${ext}`,
      mime: mimeMap[ext.toLowerCase()] ?? 'image/jpeg',
      publicId,
      url,
    };
  } catch {
    return null;
  }
}

// ─── Register a Cloudinary URL as a Strapi file record ────────────────────────

async function registerCloudinaryFile(cloudinaryUrl) {
  if (!cloudinaryUrl) return null;

  const meta = parseCloudinaryUrl(cloudinaryUrl);
  if (!meta) return null;

  // Return existing record if URL already registered
  const existing = await strapi.db.query('plugin::upload.file').findOne({
    where: { url: cloudinaryUrl },
  });
  if (existing) return existing;

  return strapi.db.query('plugin::upload.file').create({
    data: {
      name: meta.name,
      alternativeText: meta.name,
      caption: '',
      width: null,
      height: null,
      formats: null,
      hash: meta.publicId.replace(/\//g, '_'),
      ext: meta.ext,
      mime: meta.mime,
      size: 0,
      url: meta.url,
      previewUrl: null,
      provider: 'cloudinary',
      provider_metadata: {
        public_id: meta.publicId,
        resource_type: 'image',
      },
      folderPath: '/',
    },
  });
}

// ─── Upsert helper ────────────────────────────────────────────────────────────

async function upsertEntry(model, slugField, data) {
  const existing = await strapi.documents(`api::${model}.${model}`).findFirst({
    filters: { [slugField]: data[slugField] },
  });

  if (existing) {
    await strapi.documents(`api::${model}.${model}`).update({
      documentId: existing.documentId,
      data,
    });
    console.log(`  Updated ${model}: ${data[slugField] ?? data.name}`);
  } else {
    await strapi.documents(`api::${model}.${model}`).create({ data });
    console.log(`  Created ${model}: ${data[slugField] ?? data.name}`);
  }
}

// ─── Seeders ──────────────────────────────────────────────────────────────────

async function seedProjects() {
  console.log('\nSeeding projects...');
  for (const { imageUrl, galleryImageUrls, ...p } of projects) {
    const image = await registerCloudinaryFile(imageUrl);
    const galleryFiles = await Promise.all((galleryImageUrls ?? []).map(registerCloudinaryFile));

    await upsertEntry('project', 'slug', {
      ...p,
      image: image?.id ?? null,
      gallery: galleryFiles.filter(Boolean).map((f) => f.id),
      publishedAt: new Date().toISOString(),
    });
  }
}

async function seedExperiences() {
  console.log('\nSeeding experiences...');
  for (const exp of experiences) {
    await upsertEntry('experience', 'slug', {
      ...exp,
      publishedAt: new Date().toISOString(),
    });
  }
}

async function seedTestimonials() {
  console.log('\nSeeding testimonials...');
  for (const { imageUrl, ...t } of testimonials) {
    const image = await registerCloudinaryFile(imageUrl);
    await upsertEntry('testimonial', 'name', {
      ...t,
      image: image?.id ?? null,
      publishedAt: new Date().toISOString(),
    });
  }
}

async function setPublicPermissions() {
  console.log('\nSetting public permissions...');
  const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
  });

  const types = ['project', 'experience', 'testimonial', 'article', 'category', 'author'];
  await Promise.all(
    types.flatMap((t) =>
      ['find', 'findOne'].map((action) => {
        const actionKey = `api::${t}.${t}.${action}`;
        return strapi.query('plugin::users-permissions.permission').findOne({ where: { action: actionKey } })
          .then((existing) => {
            if (!existing) {
              return strapi.query('plugin::users-permissions.permission').create({
                data: { action: actionKey, role: publicRole.id },
              });
            }
          });
      })
    )
  );
  console.log('  Done.');
}

// ─── Entry point ──────────────────────────────────────────────────────────────

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'error';

  await setPublicPermissions();
  await seedProjects();
  await seedExperiences();
  await seedTestimonials();

  console.log('\nPortfolio seed complete.');
  await app.destroy();
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
