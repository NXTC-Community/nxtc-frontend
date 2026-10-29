
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Handshake,
  Building2,
  Globe2,
  Sparkles,
  Search,
  Users,
} from "lucide-react";

const partners = [
  {
    id: 1,
    name: "Sample Technology Partner",
    category: "Technology",
    description:
      "Technology solutions and infrastructure supporting founders and digital products.",
    website: "",
    logo: "",
    initials: "TP",
  },
  {
    id: 2,
    name: "Sample Community Partner",
    category: "Community",
    description:
      "Connecting talented individuals, founders and growing startup communities.",
    website: "",
    logo: "",
    initials: "CP",
  },
  {
    id: 3,
    name: "Sample Education Partner",
    category: "Education",
    description:
      "Making learning, mentorship and entrepreneurial knowledge more accessible.",
    website: "",
    logo: "",
    initials: "EP",
  },
  {
    id: 4,
    name: "Sample Ecosystem Partner",
    category: "Ecosystem",
    description:
      "Supporting collaboration and the development of innovative ventures.",
    website: "",
    logo: "",
    initials: "SP",
  },
];

const categories = [
  "All Partners",
  "Technology",
  "Community",
  "Education",
  "Ecosystem",
];

function PartnersHero() {
  return (
    <section className="partners-hero">
      <div className="container partners-hero-inner">
        <span className="partners-eyebrow">
          <Handshake size={16} />
          OUR ECOSYSTEM
        </span>

        <h1>
          Better together.
          <br />
          <span>Stronger through connection.</span>
        </h1>

        <p>
          Great ideas grow through meaningful partnerships.
          Discover the organizations helping our ecosystem
          connect, collaborate and create new opportunities.
        </p>

        <a href="#partners-list" className="partners-primary-btn">
          Explore Partners
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function PartnerCard({ partner }) {
  const content = (
    <>
      <div className="partner-card-top">
        <div className="partner-logo">
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              loading="lazy"
            />
          ) : (
            <span aria-hidden="true">{partner.initials}</span>
          )}
        </div>

        {partner.website && (
          <ArrowUpRight size={21} aria-hidden="true" />
        )}
      </div>

      <div className="partner-card-content">
        <span className="partner-category">
          {partner.category}
        </span>

        <h3>{partner.name}</h3>

        <p>{partner.description}</p>
      </div>

      {partner.website && (
        <span className="partner-card-link">
          Visit Website
          <ArrowUpRight size={16} />
        </span>
      )}
    </>
  );

  if (!partner.website) {
    return (
      <article className="partner-card">
        {content}
      </article>
    );
  }

  return (
    <a
      href={partner.website}
      className="partner-card partner-card-clickable"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${partner.name} website`}
    >
      {content}
    </a>
  );
}

function PartnersDirectory() {
  const [activeCategory, setActiveCategory] =
    useState("All Partners");

  const [search, setSearch] = useState("");

  const filteredPartners = useMemo(() => {
    const query = search.trim().toLowerCase();

    return partners.filter((partner) => {
      const matchesCategory =
        activeCategory === "All Partners" ||
        partner.category === activeCategory;

      const matchesSearch =
        partner.name.toLowerCase().includes(query) ||
        partner.description.toLowerCase().includes(query) ||
        partner.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section
      className="partners-directory"
      id="partners-list"
    >
      <div className="container">
        <div className="partners-heading">
          <div>
            <span className="partners-section-label">
              THE NETWORK
            </span>

            <h2>Meet our ecosystem.</h2>
          </div>

          <p>
            Explore the different types of organizations
            represented across our network.
          </p>
        </div>

        <div className="partners-toolbar">
          <div
            className="partners-filters"
            role="group"
            aria-label="Filter partners by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`partners-filter ${
                  activeCategory === category
                    ? "partners-filter-active"
                    : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="partners-search">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search partners..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              aria-label="Search partners"
            />
          </label>
        </div>

        <p className="partners-result-count" aria-live="polite">
          {filteredPartners.length} partner
          {filteredPartners.length === 1 ? "" : "s"} found
        </p>

        {filteredPartners.length > 0 ? (
          <div className="partners-grid">
            {filteredPartners.map((partner) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
              />
            ))}
          </div>
        ) : (
          <div className="partners-empty">
            <Search size={34} />
            <h3>No partners found</h3>
            <p>Try another keyword or category.</p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Partners");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function PartnershipBenefits() {
  const benefits = [
    {
      icon: Users,
      title: "Community Access",
      description:
        "Connect with motivated builders, founders and startup enthusiasts.",
    },
    {
      icon: Globe2,
      title: "Ecosystem Visibility",
      description:
        "Present your organization within an innovation-focused network.",
    },
    {
      icon: Sparkles,
      title: "Collaboration",
      description:
        "Explore opportunities to co-create programs, events and initiatives.",
    },
  ];

  return (
    <section className="partners-benefits">
      <div className="container">
        <div className="partners-heading">
          <div>
            <span className="partners-section-label">
              WHY COLLABORATE?
            </span>
            <h2>Creating value together.</h2>
          </div>
        </div>

        <div className="partners-benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                className="partners-benefit"
                key={benefit.title}
              >
                <div className="partners-benefit-icon">
                  <Icon size={25} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnersCTA() {
  return (
    <section className="partners-cta-section">
      <div className="container">
        <div className="partners-cta">
          <div className="partners-cta-icon">
            <Building2 size={28} />
          </div>

          <span className="partners-cta-label">
            LET'S COLLABORATE
          </span>

          <h2>
            Let's build something
            <br />
            meaningful together.
          </h2>

          <p>
            Interested in becoming part of the ecosystem?
            We're always open to exploring new partnerships
            and collaborative opportunities.
          </p>

          <a
            className="partners-cta-button"
            href="mailto:YOUR_EMAIL@example.com?subject=Partnership%20Inquiry"
          >
            Become a Partner
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Partners() {
  return (
    <main className="partners-page">
      <PartnersHero />
      <PartnersDirectory />
      <PartnershipBenefits />
      <PartnersCTA />
    </main>
  );
}
