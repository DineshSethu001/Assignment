export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
}

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const projects: Project[] = [
  {
    title: "Wander",
    category: "Mobile App",
    description: "A travel discovery app that turns trip planning into a visual, swipeable experience.",
    image: unsplash("photo-1545235617-9465d2a55698"),
    imageAlt: "Phone showing a travel app in front of a laptop with the same design",
  },
  {
    title: "Pulse Finance",
    category: "Product Design",
    description: "A calm, data-rich personal finance dashboard designed for clarity on small screens.",
    image: unsplash("photo-1551650975-87deedd944c3"),
    imageAlt: "Hand holding a phone with a finance dashboard interface",
  },
  {
    title: "Nova Cloud",
    category: "Web Development",
    description: "Marketing site and docs for a SaaS platform, rebuilt in Next.js with a 98 Lighthouse score.",
    image: unsplash("photo-1559028012-481c04fa702d"),
    imageAlt: "Desktop monitor displaying a dark-themed SaaS website design",
  },
  {
    title: "Bloom & Co.",
    category: "Branding",
    description: "A vibrant identity and colour system for an independent botanical skincare label.",
    image: unsplash("photo-1561070791-2526d30994b5"),
    imageAlt: "Colour swatches and palette cards spread across a desk",
  },
  {
    title: "Atlas Logistics",
    category: "UX Research",
    description: "Discovery workshops and wireframes that simplified a complex fleet-management workflow.",
    image: unsplash("photo-1586717791821-3f44a563fa4c"),
    imageAlt: "Designer sketching wireframes on a tablet with a stylus",
  },
  {
    title: "Fernwood",
    category: "Illustration",
    description: "A hand-drawn illustration series and icon set for a nature-focused publishing house.",
    image: unsplash("photo-1558655146-9f40138edfeb"),
    imageAlt: "Illustrator drawing on a tablet next to a keyboard",
  },
];
