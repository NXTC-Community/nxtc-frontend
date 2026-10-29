
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

const heroEvents = [
  {
    id: 1,
    title: "AI Builders Meetup",
    type: "Meetup",
    date: "12 Nov 2026",
    location: "Baku",
    position: "left-small",
  },
  {
    id: 2,
    title: "Frontend Jam",
    type: "Workshop",
    date: "18 Nov 2026",
    location: "Online",
    position: "left-medium",
  },
  {
    id: 3,
    title: "Hack & Ship 2026",
    type: "Hackathon",
    date: "24–26 Nov 2026",
    location: "Baku",
    position: "center-featured",
  },
  {
    id: 4,
    title: "Startup Sprint",
    type: "Pitch Day",
    date: "03 Dec 2026",
    location: "Baku",
    position: "right-medium",
  },
  {
    id: 5,
    title: "Product Thinking Lab",
    type: "Training",
    date: "09 Dec 2026",
    location: "Online",
    position: "right-small",
  },
];

function HeroEventCard({ event }) {
  return (
    <article
      className={`hero-event-card ${event.position}`}
    >
      <div className="hero-event-card__top">
        <span className="hero-event-card__type">
          {event.type}
        </span>
      </div>

      <div className="hero-event-card__body">
        <h3>{event.title}</h3>

        <div className="hero-event-card__meta">
          <span>
            <CalendarDays size={14} />
            {event.date}
          </span>

          <span>
            <MapPin size={14} />
            {event.location}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function HomeHero() {
  const animatedEvents = [
    ...heroEvents,
    ...heroEvents,
  ];

  return (
    <section className="home-hero-v2">
      <div className="container home-hero-v2__inner">
        <div className="home-hero-v2__content">
          <h1>
            Discover events, teams
            <br />
            and startups in one ecosystem.
          </h1>

          <p>
            Join hackathons, discover opportunities and
            connect with the next generation of builders.
          </p>

          <div className="home-hero-v2__actions">
            <Link
              to="/events"
              className="hero-btn hero-btn-primary"
            >
              Tədbirlərə baxın
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/register"
              className="hero-btn hero-btn-secondary"
            >
              Qeydiyyatdan keçin
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="home-hero-v2__events">
        <div className="hero-events-stage">
          {animatedEvents.map((event, index) => (
            <div
              key={`${event.id}-${index}`}
              className="hero-event-motion"
              style={{
                "--event-index": index,
                "--event-count": animatedEvents.length,
              }}
            >
              <HeroEventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
