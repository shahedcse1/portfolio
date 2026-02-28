import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { theme, fonts } from "../styles/theme";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  const goto = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname === path;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "0 5%",
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? `1px solid ${theme.border}` : "none",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "72px",
      }}>
        {/* Logo */}
        <div
          onClick={() => goto("/")}
          style={{
            fontFamily: fonts.display,
            fontWeight: 800, fontSize: "24px",
            cursor: "pointer",
            background: `linear-gradient(135deg, ${theme.accent}, ${theme.blue})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Solaiman<span style={{ WebkitTextFillColor: theme.accent }}>.</span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "36px" }} className="hide-mobile">
          {links.map(l => (
            <button
              key={l.name}
              onClick={() => goto(l.path)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: fonts.body,
                fontSize: "14px", fontWeight: isActive(l.path) ? "500" : "300",
                color: isActive(l.path) ? theme.accent : theme.muted,
                letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "color 0.2s", padding: "4px 0",
                borderBottom: isActive(l.path) ? `2px solid ${theme.accent}` : "2px solid transparent",
                position: "relative",
              }}
            >
              {l.name}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            className="btn-primary hide-mobile"
            onClick={() => goto("/contact")}
            style={{ padding: "10px 22px", fontSize: "13px" }}
          >
            Hire Me ↗
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none", background: "none", border: "none",
              cursor: "pointer", flexDirection: "column", gap: "5px",
              padding: "4px",
            }}
            className="hamburger"
          >
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: "22px", height: "2px",
                background: menuOpen && i === 1 ? "transparent" : theme.text,
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(5px,5px)"
                  : i === 2 ? "rotate(-45deg) translate(5px,-5px)"
                  : "none"
                  : "none",
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 999,
          background: "rgba(10,10,15,0.98)",
          backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: "32px",
          animation: "fadeIn 0.2s ease",
        }}>
          {links.map(l => (
            <button
              key={l.name}
              onClick={() => goto(l.path)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: fonts.display,
                fontSize: "32px", fontWeight: 800,
                color: isActive(l.path) ? theme.accent : theme.text,
                letterSpacing: "0.05em",
              }}
            >
              {l.name}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
