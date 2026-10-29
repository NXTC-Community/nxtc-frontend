
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Search,
  Rocket,
  GraduationCap,
  Palette,
  Code2,
  ChartNoAxesCombined,
  Sparkles,
} from "lucide-react";

import {
  resources,
  resourceCategories,
} from "../data/resources";

const iconMap = {
  rocket: Rocket,
  graduation: GraduationCap,
  palette: Palette,
  code: Code2,
  chart: ChartNoAxesCombined,
};

function ResourceIcon({ resource, size = 26 }) {
  const Icon = iconMap[resource.icon] || BookOpen;
  return <Icon size={size} strokeWidth={1.8} />;
}

function ResourceCard({ resource }) {
  return (
    <article
      className={`resource-card resource-card-${resource.theme}`}
    >
      <div className="resource-card-top">
        <div className="resource-card-icon">
          <ResourceIcon resource={resource} />
        </div>

        <span className="resource-card-type">
          {resource.type}
        </span>
      </div>

      <div className="resource-card-body">
        <span className="resource-category">
          {resource.category}
        </span>

        <h3>{resource.title}</h3>
        <p className="resource-provider">
          By {resource.provider}
        </p>
        <p className="resource-description">
          {resource.description}
        </p>

        <div className="resource-tags">
          {resource.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <Link
        className="resource-card-link"
        to={`/resources/${resource.slug}`}
      >
        View Resource
        <ArrowUpRight size={18} />
      </Link>
    </article>
  );
}

export default function Resources() {
  const [category, setCategory] =
    useState("All Resources");
  const [search, setSearch] = useState("");

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        category === "All Resources" ||
        resource.category === category;

      const text = [
        resource.title,
        resource.provider,
        resource.description,
        resource.category,
        resource.type,
        ...resource.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && text.includes(query);
    });
  }, [category, search]);

  const featuredResources = resources.filter(
    (resource) => resource.featured
  );

  return (
    <main className="resources-page">
      {/* HERO */}
      <section className="resources-hero">
        <div className="container resources-hero-inner">
          <span className="resources-eyebrow">
            <Sparkles size={16} />
            KNOWLEDGE HUB
          </span>

          <h1>
            Learn more.
            <br />
            <span>Build better.</span>
          </h1>

          <p>
            Discover tools, guides and learning resources
            to help turn ambitious ideas into real products.
          </p>

          <a
            href="#resources-directory"
            className="resources-primary-btn"
          >
            Explore Resources
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FEATURED */}
      <section className="resources-featured">
        <div className="container">
          <div className="resources-heading">
            <div>
              <span className="resources-section-label">
                HANDPICKED RESOURCES
              </span>
              <h2>Featured resources.</h2>
            </div>
            <p>
              Start with a selection of useful learning
              materials for aspiring founders.
            </p>
          </div>

          <div className="resources-featured-grid">
            {featuredResources.map((resource) => (
              <Link
                to={`/resources/${resource.slug}`}
                className="resources-featured-card"
                key={resource.id}
              >
                <div className="resources-featured-icon">
                  <ResourceIcon
                    resource={resource}
                    size={32}
                  />
                </div>

                <span>{resource.category}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>

                <div className="resources-featured-link">
                  Explore Resource
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section
        className="resources-directory"
        id="resources-directory"
      >
        <div className="container">
          <div className="resources-heading">
            <div>
              <span className="resources-section-label">
                RESOURCE LIBRARY
              </span>
              <h2>Find what you need.</h2>
            </div>
            <p>
              Browse helpful resources across different
              stages of building a startup.
            </p>
          </div>

          <div className="resources-toolbar">
            <div
              className="resources-filters"
              role="group"
              aria-label="Resource categories"
            >
              {resourceCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`resources-filter ${
                    category === item ? "active" : ""
                  }`}
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="resources-search">
              <Search size={18} />
              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search resources..."
                aria-label="Search resources"
              />
            </label>
          </div>

          <p
            className="resources-result-count"
            aria-live="polite"
          >
            {filteredResources.length} of{" "}
            {resources.length} resources
          </p>

          {filteredResources.length ? (
            <div className="resources-grid">
              {filteredResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                />
              ))}
            </div>
          ) : (
            <div className="resources-empty">
              <Search size={34} />
              <h3>No resources found</h3>
              <p>Try another keyword or category.</p>
              <button
                type="button"
                onClick={() => {
                  setCategory("All Resources");
                  setSearch("");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="resources-cta-section">
        <div className="container">
          <div className="resources-cta">
            <BookOpen size={36} />
            <span>KEEP LEARNING</span>
            <h2>Every great idea starts with curiosity.</h2>
            <p>
              Explore new skills, useful tools and practical
              knowledge to grow your ideas.
            </p>
            <a
              href="#resources-directory"
              className="resources-cta-button"
            >
              Browse Resources
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
