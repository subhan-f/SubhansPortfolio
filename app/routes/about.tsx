import type { MetaFunction } from "react-router";
import { About } from "~/components/sections/About";

export const meta: MetaFunction = () => [
  { title: "About Subhan Farrakh | AI Automation Expert" },
  {
    name: "description",
    content:
      "Learn about Subhan Farrakh, an AI automation engineer who builds intelligent systems to eliminate repetitive work and scale businesses.",
  },
];

export default function AboutRoute() {
  return <About />;
}