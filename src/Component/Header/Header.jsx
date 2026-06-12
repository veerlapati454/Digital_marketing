import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/stackly_logo.webp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  const navLinks = [
    { label: "Home",     to: "/",             type: "route"  },
    { label: "Services", to: "#services",     type: "anchor" },
    { label: "Results",  to: "#stats",        type: "anchor" },
    { label: "Pricing",  to: "#pricing",      type: "anchor" },
    { label: "Reviews",  to: "#testimonials", type: "anchor" },
  ];

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">

        {/* ── Logo ── */}
        <Link to="/" className="header__logo" onClick={handleNavClick} aria-label="Go to homepage">
          <img
            src={logo}
            alt="Stackly logo"
            className="header__logo-img"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <span className="header__logo-fallback" style={{ display: "none" }}>
            <span className="logo-brand">Stackly</span>
          </span>
        </Link>

        {/* ── Desktop Nav + Actions (right side) ── */}
        <div className="header__right">
          <nav className="header__nav" aria-label="Main navigation">
            {navLinks.map(({ label, to, type }) =>
              type === "route" ? (
                <NavLink
                  key={label}
                  to={to}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
                  }
                  onClick={handleNavClick}
                >
                  {label}
                  <span className="header__nav-underline" aria-hidden="true" />
                </NavLink>
              ) : (
                <a
                  key={label}
                  href={to}
                  className="header__nav-link"
                  onClick={handleNavClick}
                >
                  {label}
                  <span className="header__nav-underline" aria-hidden="true" />
                </a>
              )
            )}
          </nav>

          <div className="header__actions">
            <Link to="/login" className="header__btn-ghost">Log in</Link>
            <Link to="/signup" className="header__btn-primary">
              <span>Get Started</span>
              <svg className="header__btn-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Hamburger ── */}
        <button
          className={`header__hamburger ${menuOpen ? "header__hamburger--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="header__bar" />
          <span className="header__bar" />
          <span className="header__bar" />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`header__drawer ${menuOpen ? "header__drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="header__drawer-nav" aria-label="Mobile navigation">
          {navLinks.map(({ label, to, type }, i) =>
            type === "route" ? (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `header__drawer-link ${isActive ? "header__drawer-link--active" : ""}`
                }
                onClick={handleNavClick}
                style={{ "--i": i }}
              >
                {label}
              </NavLink>
            ) : (
              <a
                key={label}
                href={to}
                className="header__drawer-link"
                onClick={handleNavClick}
                style={{ "--i": i }}
              >
                {label}
              </a>
            )
          )}
        </nav>

        <div className="header__drawer-actions">
          <Link to="/login" className="header__drawer-login" onClick={handleNavClick}>
            Log in
          </Link>
          <Link to="/signup" className="header__drawer-signup" onClick={handleNavClick}>
            <span>Get Started</span>
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" width="16" height="16">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Backdrop ── */}
      {menuOpen && (
        <div
          className="header__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Header;