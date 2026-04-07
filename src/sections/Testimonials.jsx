import React from 'react';
import t1 from '../assets/antonio.png';
import t2 from '../assets/AliSimms.webp';
import t3 from '../assets/Lidi.webp';
import t4 from '../assets/sonia.webp';
import { motion } from 'framer-motion';
import { OptimizedImage } from '../components/OptimizedImage';

const testimonials = [
  {
    name: 'Ali Simms',
    role: 'Odd Jobs Property Maintenance, USA',
    review:
      "Subhan is a very conscientious and professional developer. He understands what you're looking for and does his best to provide it. He's very skilled, and will take very good care of your automation and AI needs.",
    image: t2,
  },
  {
    name: 'Lidi Anettem',
    role: 'Buy Properties Group, USA',
    review:
      'I had the pleasure of working with Subhan, who demonstrated exceptional skill in creating zaps for my business. His outstanding listening skills ensured he thoroughly understood my specific needs and business requirements... ',
    image: t3,
  },
  {
    name: 'Antonio Macan',
    role: 'KidsKulturSpass, Germany',
    review: 'Subhan is a true expert in his field. Will keep going with him for future.',
    image: t1,
  },
  {
    name: 'Sonia De La Torre',
    role: 'FHOD LLC, USA',
    review:
      'Subhan did an exceptional job setting up my Podio CRM. He was professional, efficient, and incredibly knowledgeable, making the process smooth and hassle-free. Highly recommend his services!',
    image: t4,
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What People Say
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:rotate-1"
          >
            <OptimizedImage
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
              loading="lazy"
            />
            <p className="text-gray-200 italic mb-4">{t.review}</p>
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-400">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
