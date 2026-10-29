
export const startups = [
  {
    id: 1,
    slug: "nova-ai",
    name: "Nova AI",
    initials: "NA",
    category: "Artificial Intelligence",
    stage: "MVP",
    tagline: "Smarter workflows powered by AI.",
    description:
      "Nova AI is a fictional startup concept focused on making everyday business workflows easier through intelligent automation.",
    fullDescription:
      "Nova AI explores how small teams can use artificial intelligence to simplify repetitive tasks, improve collaboration and spend more time on meaningful work.",
    founded: "2026",
    location: "Baku, Azerbaijan",
    website: "",
    logo: "",
    technologies: ["AI", "Automation", "SaaS"],
    founders: [
      {
        name: "Example Founder",
        role: "Co-founder",
      },
    ],
    featured: true,
    theme: "green",
  },
  {
    id: 2,
    slug: "greenloop",
    name: "GreenLoop",
    initials: "GL",
    category: "Climate Tech",
    stage: "Idea",
    tagline: "Circular solutions for a greener future.",
    description:
      "A fictional climate technology concept exploring circular economy solutions and more sustainable communities.",
    fullDescription:
      "GreenLoop is a demo startup idea focused on sustainability, waste reduction and better resource management.",
    founded: "2026",
    location: "Baku, Azerbaijan",
    website: "",
    logo: "",
    technologies: ["Climate Tech", "Sustainability", "Circular Economy"],
    founders: [],
    featured: true,
    theme: "vanilla",
  },
  {
    id: 3,
    slug: "skillbridge",
    name: "SkillBridge",
    initials: "SB",
    category: "EdTech",
    stage: "Early Stage",
    tagline: "Bridging skills and opportunities.",
    description:
      "A fictional learning platform concept connecting emerging talent with practical learning opportunities.",
    fullDescription:
      "SkillBridge demonstrates how a digital product could help young professionals develop skills and discover new career pathways.",
    founded: "2026",
    location: "Baku, Azerbaijan",
    website: "",
    logo: "",
    technologies: ["EdTech", "Learning", "Career Development"],
    founders: [],
    featured: false,
    theme: "orange",
  },
  {
    id: 4,
    slug: "finpath",
    name: "FinPath",
    initials: "FP",
    category: "FinTech",
    stage: "MVP",
    tagline: "Making financial planning simpler.",
    description:
      "A fictional finance technology concept offering intuitive personal budgeting tools.",
    fullDescription:
      "FinPath is a demo product idea designed around financial literacy, budgeting and accessible financial planning experiences.",
    founded: "2026",
    location: "Baku, Azerbaijan",
    website: "",
    logo: "",
    technologies: ["FinTech", "Budgeting", "Personal Finance"],
    founders: [],
    featured: false,
    theme: "red",
  },
];

export const startupCategories = [
  "All Startups",
  "Artificial Intelligence",
  "Climate Tech",
  "EdTech",
  "FinTech",
];

export function getStartupBySlug(slug) {
  return startups.find((startup) => startup.slug === slug);
}
