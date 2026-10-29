
export const perks = [
  {
    id: 1,
    slug: "cloud-starter",
    title: "Cloud Starter Pack",
    provider: "Demo Cloud Partner",
    initials: "CL",
    category: "Cloud & Hosting",
    description:
      "Explore a sample offer for cloud hosting and infrastructure tools.",
    discount: "30% OFF",
    type: "Promo Code",
    code: "DEMO-CLOUD-30",
    status: "demo",
    featured: true,
    theme: "green",
    website: "",
    validUntil: null,
    eligibility: "Example: verified platform members",
    terms: [
      "This is a demonstration offer.",
      "The displayed promo code is not redeemable.",
      "Real partner verification is required before launch.",
    ],
  },
  {
    id: 2,
    slug: "design-toolkit",
    title: "Design Toolkit",
    provider: "Demo Design Partner",
    initials: "DS",
    category: "Design",
    description:
      "A demonstration discount for design and prototyping tools.",
    discount: "20% OFF",
    type: "Promo Code",
    code: "DEMO-DESIGN-20",
    status: "demo",
    featured: false,
    theme: "orange",
    website: "",
    validUntil: null,
    eligibility: "Example: startup founders",
    terms: [
      "For frontend demonstration only.",
      "The code cannot be used for a purchase.",
    ],
  },
  {
    id: 3,
    slug: "learning-access",
    title: "Learning Access",
    provider: "Demo Learning Partner",
    initials: "ED",
    category: "Education",
    description:
      "Sample access to courses, professional training and learning resources.",
    discount: "FREE TRIAL",
    type: "Partner Offer",
    code: "",
    status: "demo",
    featured: false,
    theme: "vanilla",
    website: "",
    validUntil: null,
    eligibility: "Example: registered members",
    terms: [
      "This is a placeholder benefit.",
      "Actual eligibility and availability are not confirmed.",
    ],
  },
];

export const perkCategories = [
  "All Perks",
  "Cloud & Hosting",
  "Design",
  "Education",
];

export function getPerkBySlug(slug) {
  return perks.find((perk) => perk.slug === slug);
}
