
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  CalendarDays,
  Rocket,
  Globe,
  Users,
} from "lucide-react";

import {
  startups,
  getStartupBySlug,
} from "../data/startups";

export default function StartupDetails() {
  const { slug } = useParams();
  const startup = getStartupBySlug(slug);

  if (!startup) {
    return (
      <main className="startup-not-found container">
        <Rocket size={42} />
        <h1>Startup not found</h1>
        <p>
          The startup you are looking for does not exist.
        </p>
        <Link to="/studio" className="studio-primary-btn">
          <ArrowLeft size={18} />
          Back to Studio
        </Link>
      </main>
    );
  }

  const relatedStartups = startups
    .filter((item) => item.id !== startup.id)
    .slice(0, 3);

  return (
    <main className="startup-details-page">
      <section className="startup-details-hero">
        <div className="container">
          <Link to="/studio" className="startup-back">
            <ArrowLeft size={17} />
            Back to Studio
          </Link>

          <div className="startup-details-header">
            <div className="startup-details-logo">
              {startup.logo ? (
                <img
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                />
              ) : (
                <span>{startup.initials}</span>
              )}
            </div>

            <div className="startup-details-heading">
              <div className="startup-details-badges">
                <span>{startup.category}</span>
                <span>{startup.stage}</span>
              </div>

              <h1>{startup.name}</h1>
              <p>{startup.tagline}</p>
            </div>
          </div>

          <div className="startup-details-meta">
            <span>
              <MapPin size={17} />
              {startup.location}
            </span>

            <span>
              <CalendarDays size={17} />
              Founded {startup.founded}
            </span>
          </div>
        </div>
      </section>

      <section className="startup-details-content">
        <div className="container startup-details-grid">
          <div className="startup-details-main">
            <div className="startup-info-block">
              <span className="startup-details-label">
                ABOUT THE STARTUP
              </span>
              <h2>What we're building</h2>
              <p>{startup.fullDescription}</p>
            </div>

            <div className="startup-info-block">
              <span className="startup-details-label">
                FOCUS AREAS
              </span>
              <h2>Technology & Expertise</h2>

              <div className="startup-tech-list">
                {startup.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            {startup.founders.length > 0 && (
              <div className="startup-info-block">
                <span className="startup-details-label">
                  THE PEOPLE
                </span>
                <h2>Meet the founders</h2>

                <div className="startup-founders">
                  {startup.founders.map((founder) => (
                    <div
                      className="startup-founder-card"
                      key={founder.name}
                    >
                      <div className="startup-founder-avatar">
                        <Users size={24} />
                      </div>
                      <div>
                        <h3>{founder.name}</h3>
                        <p>{founder.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="startup-details-sidebar">
            <div className="startup-sidebar-card">
              <h3>Startup Overview</h3>

              <div className="startup-sidebar-item">
                <span>Industry</span>
                <strong>{startup.category}</strong>
              </div>

              <div className="startup-sidebar-item">
                <span>Stage</span>
                <strong>{startup.stage}</strong>
              </div>

              <div className="startup-sidebar-item">
                <span>Founded</span>
                <strong>{startup.founded}</strong>
              </div>

              <div className="startup-sidebar-item">
                <span>Location</span>
                <strong>{startup.location}</strong>
              </div>

              {startup.website && (
                <a
                  href={startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="startup-website-btn"
                >
                  <Globe size={17} />
                  Visit Website
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      {relatedStartups.length > 0 && (
        <section className="startup-related">
          <div className="container">
            <div className="startup-related-header">
              <h2>Discover more startups</h2>

              <Link to="/studio">
                View All
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="startup-related-grid">
              {relatedStartups.map((item) => (
                <Link
                  to={`/studio/${item.slug}`}
                  key={item.id}
                  className="startup-related-card"
                >
                  <div className="startup-related-logo">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        loading="lazy"
                      />
                    ) : (
                      item.initials
                    )}
                  </div>

                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                  </div>

                  <ArrowUpRight size={20} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
