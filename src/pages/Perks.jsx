
import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Gift,
  Search,
  Sparkles,
  TicketPercent,
  X,
} from "lucide-react";

import { perks, perkCategories } from "../data/perks";

function PerkCard({ perk, onDetails }) {
  return (
    <article className={`perk-card perk-card-${perk.theme}`}>
      <div className="perk-card-top">
        <div className="perk-provider-logo">
          {perk.initials}
        </div>

        <span className="perk-discount">
          {perk.discount}
        </span>
      </div>

      <div className="perk-card-body">
        <span className="perk-category">
          {perk.category}
        </span>

        <h3>{perk.title}</h3>
        <p className="perk-provider">{perk.provider}</p>
        <p className="perk-description">
          {perk.description}
        </p>
      </div>

      <div className="perk-card-bottom">
        <span className="perk-demo-label">
          Demo offer
        </span>

        <button
          type="button"
          onClick={() => onDetails(perk)}
          className="perk-details-button"
        >
          View Details
          <ArrowUpRight size={17} />
        </button>
      </div>
    </article>
  );
}

function PerkModal({ perk, onClose }) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(perk.code);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  }

  return (
    <div
      className="perk-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="perk-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="perk-modal-title"
        tabIndex={-1}
      >
        <button
          type="button"
          className="perk-modal-close"
          onClick={onClose}
          aria-label="Close details"
        >
          <X size={22} />
        </button>

        <div className="perk-modal-header">
          <span className="perk-modal-icon">
            <Gift size={26} />
          </span>

          <span className="perk-category">
            {perk.category}
          </span>

          <h2 id="perk-modal-title">{perk.title}</h2>
          <p>{perk.provider}</p>
        </div>

        <div className="perk-modal-content">
          <div className="perk-modal-offer">
            <strong>{perk.discount}</strong>
            <span>Demonstration only</span>
          </div>

          <p>{perk.description}</p>

          {perk.code && (
            <div className="perk-code-section">
              <h3>Promo code preview</h3>

              <div className="perk-code-box">
                <code>{perk.code}</code>

                <button
                  type="button"
                  onClick={copyCode}
                  aria-label="Copy promo code"
                >
                  {copied ? (
                    <Check size={19} />
                  ) : (
                    <Copy size={19} />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <p className="perk-code-note" role="status">
                {copyError
                  ? "Could not copy automatically. Please select the code manually."
                  : "This demo code is not valid for purchases."}
              </p>
            </div>
          )}

          <div className="perk-modal-section">
            <h3>Eligibility</h3>
            <p>{perk.eligibility}</p>
          </div>

          <div className="perk-modal-section">
            <h3>Terms & Conditions</h3>

            <ul>
              {perk.terms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </div>

          {perk.validUntil && (
            <div className="perk-modal-section">
              <h3>Valid until</h3>
              <p>{perk.validUntil}</p>
            </div>
          )}

          {perk.website && (
            <a
              className="perk-provider-link"
              href={perk.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Provider
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Perks() {
  const [category, setCategory] = useState("All Perks");
  const [search, setSearch] = useState("");
  const [selectedPerk, setSelectedPerk] = useState(null);

  const filteredPerks = useMemo(() => {
    const query = search.trim().toLowerCase();

    return perks.filter((perk) => {
      const matchesCategory =
        category === "All Perks" ||
        perk.category === category;

      const matchesSearch = [
        perk.title,
        perk.provider,
        perk.description,
        perk.category,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="perks-page">
      <section className="perks-hero">
        <div className="container perks-hero-content">
          <span className="perks-eyebrow">
            <Sparkles size={16} />
            ECOSYSTEM BENEFITS
          </span>

          <h1>
            More opportunities.
            <br />
            <span>More possibilities.</span>
          </h1>

          <p>
            Discover tools, services and potential benefits
            designed to help startup builders grow.
          </p>

          <a href="#perks-directory" className="perks-hero-button">
            Explore Perks
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section
        className="perks-directory"
        id="perks-directory"
      >
        <div className="container">
          <div className="perks-heading">
            <div>
              <span className="perks-section-label">
                PERKS & DISCOUNTS
              </span>

              <h2>Explore available categories.</h2>
            </div>

            <p>
              Preview how partner benefits and special offers
              will be displayed on the platform.
            </p>
          </div>

          <div className="perks-notice">
            <TicketPercent size={20} />
            <p>
              The current offers are demonstration entries.
              No real discounts or partnerships are implied.
            </p>
          </div>

          <div className="perks-toolbar">
            <div
              className="perks-filters"
              role="group"
              aria-label="Filter perks"
            >
              {perkCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`perks-filter ${
                    category === item ? "active" : ""
                  }`}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="perks-search">
              <Search size={18} />
              <input
                type="search"
                value={search}
                placeholder="Search perks..."
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                aria-label="Search perks"
              />
            </label>
          </div>

          <p className="perks-count" aria-live="polite">
            {filteredPerks.length} offer
            {filteredPerks.length === 1 ? "" : "s"} found
          </p>

          {filteredPerks.length > 0 ? (
            <div className="perks-grid">
              {filteredPerks.map((perk) => (
                <PerkCard
                  key={perk.id}
                  perk={perk}
                  onDetails={setSelectedPerk}
                />
              ))}
            </div>
          ) : (
            <div className="perks-empty">
              <Search size={32} />
              <h3>No perks found</h3>
              <p>Try another category or keyword.</p>

              <button
                type="button"
                onClick={() => {
                  setCategory("All Perks");
                  setSearch("");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="perks-bottom-section">
        <div className="container">
          <div className="perks-bottom-banner">
            <Gift size={35} />

            <h2>Built to help your ideas grow.</h2>

            <p>
              Discover a growing collection of resources,
              services and partner benefits.
            </p>
          </div>
        </div>
      </section>

      {selectedPerk && (
        <PerkModal
          key={selectedPerk.id}
          perk={selectedPerk}
          onClose={() => setSelectedPerk(null)}
        />
      )}
    </main>
  );
}
