
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
  UserRound,
  Users,
  LayoutGrid,
  Gift,
  BookOpen,
  Handshake,
  LogIn,
} from "lucide-react";

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Podcasts", to: "/podcasts" },
  { label: "About", to: "/about" },
];

const ecosystemLinks = [
  { label: "Startup Studio", to: "/studio", icon: LayoutGrid },
  { label: "Perks & Discounts", to: "/perks", icon: Gift },
  { label: "Resources", to: "/resources", icon: BookOpen },
  { label: "Partners", to: "/partners", icon: Handshake },
];

const accountLinks = [
  { label: "My Profile", to: "/profile", icon: UserRound },
  { label: "My Teams", to: "/teams", icon: Users },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="navbar">
      <nav className="navbar-container container" aria-label="Main navigation">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          NXTC<span>.</span>
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          id="primary-navigation"
          className={`navbar-content ${mobileOpen ? "navbar-open" : ""}`}
        >
          <div className="navbar-links">
            {mainLinks.slice(0, 3).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="navbar-dropdown">
              <button type="button" className="navbar-dropdown-trigger">
                Ecosystem
                <ChevronDown size={15} />
              </button>

              <div className="navbar-dropdown-menu">
                {ecosystemLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={closeMenu}
                      className="navbar-dropdown-item"
                    >
                      <Icon size={17} />
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>
          </div>

          <div className="navbar-account">
            <div className="navbar-dropdown navbar-profile-dropdown">
              <button
                type="button"
                className="navbar-profile-trigger"
                aria-label="Account menu"
              >
                <UserRound size={20} />
                <ChevronDown size={14} />
              </button>

              <div className="navbar-dropdown-menu navbar-account-menu">
                {accountLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className="navbar-dropdown-item"
                      onClick={closeMenu}
                    >
                      <Icon size={17} />
                      {item.label}
                    </NavLink>
                  );
                })}

                <div className="navbar-dropdown-divider" />

                <Link
                  to="/login"
                  className="navbar-dropdown-item"
                  onClick={closeMenu}
                >
                  <LogIn size={17} />
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
