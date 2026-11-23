export type ServiceIcon = "design" | "code" | "brand" | "megaphone";

export interface Service {
  title: string;
  description: string;
  icon: ServiceIcon;
  highlights: string[];
}

export const services: Service[] = [
  {
    title: "UI/UX Design",
    description:
      "Research-led interfaces that feel effortless — from user flows and wireframes to polished, accessible design systems.",
    icon: "design",
    highlights: ["User research", "Prototyping", "Design systems"],
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive websites and web apps built with modern frameworks, tuned for performance and SEO from day one.",
    icon: "code",
    highlights: ["Next.js & React", "Headless CMS", "Performance"],
  },
  {
    title: "Branding",
    description:
      "Distinctive identities with a clear story — logos, typography, colour and guidelines that scale across every touchpoint.",
    icon: "brand",
    highlights: ["Logo & identity", "Brand strategy", "Guidelines"],
  },
  {
    title: "Digital Marketing",
    description:
      "Campaigns that turn attention into growth, with creative content, social strategy and measurable results.",
    icon: "megaphone",
    highlights: ["Social media", "Content", "Analytics"],
  },
];
