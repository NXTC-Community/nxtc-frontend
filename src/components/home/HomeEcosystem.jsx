
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  Users,
  Rocket,
  Gift,
} from "lucide-react";

import Reveal from "../ui/Reveal";

const ecosystemItems = [
  {
    number: "01",
    title: "Events & Hackathons",
    description:
      "Discover hackathons, meetups and events. Learn new skills, meet talented people and take on your next challenge.",
    label: "Explore Events",
    path: "/events",
    icon: CalendarDays,
    theme: "events",
  },
  {
    number: "02",
    title: "Build Teams",
    description:
      "Find the right people to bring your ideas to life.",
    label: "Find Your Team",
    path: "/teams",
    icon: Users,
    theme: "teams",
  },
  {
    number: "03",
    title: "Perks & Resources",
    description:
      "Discover tools, benefits and resources for builders.",
    label: "Explore Perks",
    path: "/perks",
    icon: Gift,
    theme: "perks",
  },
  {
    number: "04",
    title: "Startup Studio",
    description:
      "Meet ambitious founders and discover innovative startups, emerging products and new ideas within the ecosystem.",
    label: "Discover Startups",
    path: "/studio",
    icon: Rocket,
    theme: "studio",
  },
];

function EcosystemCard({ item }) {
  const Icon = item.icon;

  return (
    <Link
      to={item.path}
      className={`home-bento-card home-bento-card--${item.theme}`}
    >
      <div className="home-bento-card__top">
        <span className="home-bento-card__number">
          / {item.number}
        </span>

        <ArrowUpRight
          className="home-bento-card__arrow"
          size={22}
          aria-hidden="true"
        />
      </div>

      <div className="home-bento-card__visual">
        <Icon size={40} strokeWidth={1.4} />
      </div>

      <div className="home-bento-card__content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        <span className="home-bento-card__link">
          {item.label}
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}

export default function HomeEcosystem() {
  return (
    <section
      className="home-ecosystem-section"
      aria-labelledby="ecosystem-title"
    >
      <div className="container">
        <Reveal>
          <div className="home-ecosystem-heading">
            <div className="home-ecosystem-heading__main">
              <span className="home-ecosystem-kicker">
                <span />
                EXPLORE THE ECOSYSTEM
              </span>

              <h2 id="ecosystem-title">
                Find your place
                <br />
                in the ecosystem.
              </h2>
            </div>

            <p>
              Discover opportunities, connect with
              like-minded people and turn your ideas
              into something real.
            </p>
          </div>
        </Reveal>

        <div className="home-bento-grid">
          {ecosystemItems.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 130}
              className={`home-bento-reveal home-bento-reveal--${item.theme}`}
            >
              <EcosystemCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
