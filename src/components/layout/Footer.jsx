
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Home", path: "/" },
      { label: "Startup Studio", path: "/studio" },
      { label: "Partners", path: "/partners" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Perks & Discounts", path: "/perks" },
      { label: "Resources", path: "/resources" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              talantir<span>.</span>
            </Link>

            <p>
              Where talent meets opportunity.
              <br />
              Connecting people, ideas and innovation.
            </p>
          </div>

          {/* LINKS */}
          <div className="footer-links">
            {footerGroups.map((group) => (
              <div
                key={group.title}
                className="footer-column"
              >
                <h4>{group.title}</h4>

                {group.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            ))}
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Talantir.
            All rights reserved.
          </p>

          <p>
            Built for the next generation of innovators.
          </p>
        </div>

      </div>
    </footer>
  );
}
