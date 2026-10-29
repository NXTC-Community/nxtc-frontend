
export const resources = [
  {
    id: 1,
    slug: "y-combinator-library",
    title: "Y Combinator Startup Library",
    provider: "Y Combinator",
    category: "Startup",
    type: "Learning Library",
    description:
      "A collection of startup advice, founder insights and practical guidance.",
    details:
      "Explore lessons on building products, finding customers, developing startup ideas and growing a company.",
    url: "https://www.ycombinator.com/library",
    featured: true,
    icon: "rocket",
    theme: "green",
    tags: ["Founders", "Startups", "Growth"],
  },
  {
    id: 2,
    slug: "startup-school",
    title: "Startup School",
    provider: "Y Combinator",
    category: "Startup",
    type: "Online Learning",
    description:
      "Startup education covering core concepts for early-stage founders.",
    details:
      "Learn about evaluating startup ideas, talking to users, launching products and early-stage company development.",
    url: "https://www.startupschool.org/",
    featured: true,
    icon: "graduation",
    theme: "orange",
    tags: ["Education", "Founders", "MVP"],
  },
  {
    id: 3,
    slug: "figma",
    title: "Figma",
    provider: "Figma",
    category: "Design",
    type: "Design Tool",
    description:
      "A collaborative tool for creating interfaces, prototypes and product designs.",
    details:
      "Figma can help product teams design interfaces, prototype user experiences and collaborate on design systems.",
    url: "https://www.figma.com/",
    featured: false,
    icon: "palette",
    theme: "red",
    tags: ["UI/UX", "Prototyping", "Design"],
  },
  {
    id: 4,
    slug: "github",
    title: "GitHub",
    provider: "GitHub",
    category: "Development",
    type: "Developer Platform",
    description:
      "A platform for hosting code, collaboration and software development.",
    details:
      "GitHub supports version control, code review and collaboration across software projects.",
    url: "https://github.com/",
    featured: false,
    icon: "code",
    theme: "vanilla",
    tags: ["Coding", "Git", "Collaboration"],
  },
  {
    id: 5,
    slug: "google-analytics",
    title: "Google Analytics",
    provider: "Google",
    category: "Marketing",
    type: "Analytics Tool",
    description:
      "Tools for understanding website traffic, user behavior and acquisition.",
    details:
      "Use website analytics to understand how visitors discover and interact with a product.",
    url: "https://analytics.google.com/",
    featured: false,
    icon: "chart",
    theme: "green",
    tags: ["Analytics", "Marketing", "Data"],
  },
  {
    id: 6,
    slug: "canva",
    title: "Canva",
    provider: "Canva",
    category: "Design",
    type: "Creative Tool",
    description:
      "An accessible platform for creating visual content and marketing materials.",
    details:
      "Create presentations, social graphics and other visual communication materials using customizable templates.",
    url: "https://www.canva.com/",
    featured: false,
    icon: "palette",
    theme: "orange",
    tags: ["Branding", "Content", "Design"],
  },
];

export const resourceCategories = [
  "All Resources",
  "Startup",
  "Design",
  "Development",
  "Marketing",
];

export function getResourceBySlug(slug) {
  return resources.find((resource) => resource.slug === slug);
}
