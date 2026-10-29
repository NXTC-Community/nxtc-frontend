
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Rocket,
  Search,
  Sparkles,
  MapPin,
} from "lucide-react";

import {
  startups,
  startupCategories,
} from "../data/startups";

function StartupCard({ startup }) {
  return (
    <Link
      to={`/studio/${startup.slug}`}
      className={`studio-card studio-card-${startup.theme}`}
    >
      <div className="studio-card-top">
        <div className="studio-startup-logo">
          {startup.logo ? (
            <img
              src={startup.logo}
              alt={`${startup.name} logo`}
              loading="lazy"
            />
          ) : (
            <span>{startup.initials}</span>
          )}
        </div>

        <ArrowUpRight
          size={22}
          className="studio-card-arrow"
        />
      </div>

      <div className="studio-card-meta">
        <span className="studio-category">
          {startup.category}
        </span>

        <span className="studio-stage">
          {startup.stage}
        </span>
      </div>

      <h3>{startup.name}</h3>
      <h4>{startup.tagline}</h4>
      <p>{startup.description}</p>

      <div className="studio-card-footer">
        <span>
          <MapPin size={15} />
          {startup.location}
        </span>
        <span className="studio-view-link">
          View Startup
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

function StudioHero() {
  return (
    <section className="studio-hero">
      <div className="container studio-hero-content">
        <span className="studio-eyebrow">
          <Sparkles size={16} />
          STARTUP STUDIO
        </span>

        <h1>
          Big ideas.
          <br />
          <span>Bold builders.</span>
        </h1>

        <p>
          Explore startup ideas, discover innovative solutions
          and get inspired by the next generation of builders.
        </p>

        <a href="#startup-directory" className="studio-primary-btn">
          Explore Startups
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function StudioDirectory() {
  const [category, setCategory] = useState("All Startups");
  const [search, setSearch] = useState("");

  const filteredStartups = useMemo(() => {
    const query = search.trim().toLowerCase();

    return startups.filter((startup) => {
      const categoryMatch =
        category === "All Startups" ||
        startup.category === category;

      const searchMatch = [
        startup.name,
        startup.category,
        startup.tagline,
        startup.description,
        ...startup.technologies,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  return (
    <section
      className="studio-directory"
      id="startup-directory"
    >
      <div className="container">
        <div className="studio-heading">
          <div>
            <span className="studio-section-label">
              DISCOVER STARTUPS
            </span>
            <h2>Explore what's being built.</h2>
          </div>

          <p>
            Browse promising ideas across technology,
            sustainability, education and more.
          </p>
        </div>

        <div className="studio-toolbar">
          <div
            className="studio-filters"
            role="group"
            aria-label="Startup categories"
          >
            {startupCategories.map((item) => (
              <button
                type="button"
                key={item}
                className={`studio-filter ${
                  category === item
                    ? "studio-filter-active"
                    : ""
                }`}
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="studio-search">
            <Search size={18} />
            <input
              type="search"
              value={search}
              placeholder="Search startups..."
              onChange={(event) =>
                setSearch(event.target.value)
              }
              aria-label="Search startups"
            />
          </label>
        </div>

        <div className="studio-results" aria-live="polite">
          Showing {filteredStartups.length} of {startups.length} startups
        </div>

        {filteredStartups.length > 0 ? (
          <div className="studio-grid">
            {filteredStartups.map((startup) => (
              <StartupCard
                key={startup.id}
                startup={startup}
              />
            ))}
          </div>
        ) : (
          <div className="studio-empty">
            <Search size={32} />
            <h3>No startups found</h3>
            <p>Try a different keyword or category.</p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All Startups");
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

function StudioCTA() {
  return (
    <section className="studio-cta-section">
      <div className="container">
        <div className="studio-cta">
          <Rocket size={36} />
          <span>THE NEXT BIG IDEA</span>

          <h2>Every great startup starts somewhere.</h2>

          <p>
            Discover new ideas and explore the projects
            shaping tomorrow.
          </p>

          <Link to="/partners" className="studio-cta-button">
            Explore Our Ecosystem
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Studio() {
  return (
    <main className="studio-page">
      <StudioHero />
      <StudioDirectory />
      <StudioCTA />
    </main>
  );
}
