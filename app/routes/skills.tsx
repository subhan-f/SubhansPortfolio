import type { MetaFunction } from "react-router";
import { Skills } from "~/components/sections/Skills";

export const meta: MetaFunction = () => [
  { title: "Tech Stack & Skills | AI, n8n, Make, React, Python" },
  {
    name: "description",
    content:
      "Explore the tools and technologies I use: n8n, Make, OpenAI, React, Node.js, Docker, and more.",
  },
];

export default function SkillsRoute() {
  return <Skills />;
}