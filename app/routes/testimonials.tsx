import type { MetaFunction } from "react-router";
import { Testimonials } from "~/components/sections/Testimonials";

export const meta: MetaFunction = () => [
  { title: "Client Testimonials | Trusted by Businesses Worldwide" },
  {
    name: "description",
    content:
      "What clients say about working with Subhan on automation, CRM, and AI solutions.",
  },
];

export default function TestimonialsRoute() {
  return <Testimonials />;
}