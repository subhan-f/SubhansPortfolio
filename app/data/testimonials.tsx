export interface Testimonial {
  name: string;
  role: string;
  review: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ali Simms",
    role: "Odd Jobs Property Maintenance, USA",
    review:
      "Subhan is a very conscientious and professional developer. He understands what you're looking for and does his best to provide it. He's very skilled, and will take very good care of your automation and AI needs.",
    image: "/assets/AliSimms.webp",
  },
  {
    name: "Lidi Anettem",
    role: "Buy Properties Group, USA",
    review:
      "I had the pleasure of working with Subhan, who demonstrated exceptional skill in creating zaps for my business. His outstanding listening skills ensured he thoroughly understood my specific needs and business requirements...",
    image: "/assets/Lidi.webp",
  },
  {
    name: "Antonio Macan",
    role: "KidsKulturSpass, Germany",
    review: "Subhan is a true expert in his field. Will keep going with him for future.",
    image: "/assets/antonio.png",
  },
  {
    name: "Sonia De La Torre",
    role: "FHOD LLC, USA",
    review:
      "Subhan did an exceptional job setting up my Podio CRM. He was professional, efficient, and incredibly knowledgeable, making the process smooth and hassle-free. Highly recommend his services!",
    image: "/assets/sonia.webp",
  },
];