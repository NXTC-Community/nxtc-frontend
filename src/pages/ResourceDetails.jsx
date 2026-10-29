
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
} from "lucide-react";

import {
  resources,
  getResourceBySlug,
} from "../data/resources";

export default function ResourceDetails() {
  const { slug } = useParams();
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return (
      <main className="container resource-not-found">
        <BookOpen size={42} />
        <h1>Resource not found</h1>
        <p>The requested resource does not exist.</p>
        <Link
          to="/resources"
          className="resources-primary-btn"
        >
          <ArrowLeft size={18} />
          Back to Resources
        </Link>
      </main>
    );
  }

  const related = resources
    .filter(
      (item) =>
        item.slug !== resource.slug &&
        item.category === resource.category
    )
    .slice(0, 3);

  return (
    <main className="resource-details-page">
      <section className="resource-details-hero">
        <div className="container">
          <Link
            to="/resources"
            className="resource-details-back"
          >
            <ArrowLeft size={18} />
            Back to Resources
          </Link>

          <span className="resource-details-category">
            {resource.category}
          </span>

          <h1>{resource.title}</h1>
          <p>{resource.description}</p>

          <div className="resource-details-meta">
            <span>{resource.provider}</span>
            <span>{resource.type}</span>
          </div>
        </div>
      </section>

      <section className="resource-details-content">
        <div className="container resource-details-layout">
          <div className="resource-details-main">
            <span className="resources-section-label">
              ABOUT THIS RESOURCE
            </span>

            <h2>Overview</h2>
            <p>{resource.details}</p>

            <h2>Topics covered</h2>

            <div className="resource-details-tags">
              {resource.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <aside className="resource-details-sidebar">
            <h3>Resource Information</h3>

            <div className="resource-info-row">
              <span>Provider</span>
              <strong>{resource.provider}</strong>
            </div>

            <div className="resource-info-row">
              <span>Category</span>
              <strong>{resource.category}</strong>
            </div>

            <div className="resource-info-row">
              <span>Type</span>
              <strong>{resource.type}</strong>
            </div>

            {resource.url && (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-external-button"
              >
                Open Resource
                <ExternalLink size={18} />
              </a>
            )}
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="resources-related">
          <div className="container">
            <h2>Related resources</h2>

            <div className="resources-related-grid">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/resources/${item.slug}`}
                  className="resources-related-card"
                >
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <ArrowUpRight size={22} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
