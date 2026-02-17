import { useNavigate } from "react-router-dom";
import { theme, fonts } from "../styles/theme";
import { GlowDot } from "./UI";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{
      background: "#08080d",
      borderTop: `1px solid ${theme.border}`,
      padding: "60px 5% 32px",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "60px",
          marginBottom: "48px",
          paddingBottom: "48px",
          borderBottom: `1px solid ${theme.border}`,
        }} className="three-col">
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: fonts.display, fontWeight: 800, fontSize: "28px",
              background: `linear-gradient(135deg, ${theme.accent}, ${theme.blue})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", marginBottom: "16px",
            }}>SS.</div>
            <p style={{ color: theme.muted, fontSize: "14px", lineHeight: 1.9, maxWidth: "300px" }}>
              Full-Stack Web Developer & IT Systems Specialist based in Espoo, Finland.
              Building scalable, efficient digital solutions.
            </p>
            <div style={{
              display: "flex", alignItems: "center", gap: "8px", marginTop: "20px",
            }}>
              <GlowDot />
              <span style={{ fontSize: "13px", color: theme.accent, fontWeight: 500 }}>Available for opportunities</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{
              fontFamily: fonts.display, fontWeight: 700,
              fontSize: "12px", letterSpacing: "0.15em",
              textTransform: "uppercase", color: theme.muted,
              marginBottom: "20px",
            }}>Navigation</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.map(l => (
                <button
                  key={l.label}
                  onClick={() => navigate(l.path)}
                  className="nav-link-hover"
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: theme.muted, fontSize: "14px",
                    textAlign: "left", padding: 0,
                    fontFamily: fonts.body,
                  }}
                >{l.label}</button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: fonts.display, fontWeight: 700,
              fontSize: "12px", letterSpacing: "0.15em",
              textTransform: "uppercase", color: theme.muted,
              marginBottom: "20px",
            }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "cseshahed@gmail.com", href: "mailto:cseshahed@gmail.com" },
                { label: "+358 44 248 4992", href: "tel:+358442484992" },
                { label: "Espoo, Finland", href: null },
              ].map((c, i) => (
                c.href
                  ? <a key={i} href={c.href}
                      className="nav-link-hover"
                      style={{ color: theme.muted, fontSize: "14px", textDecoration: "none" }}
                    >{c.label}</a>
                  : <span key={i} style={{ color: theme.muted, fontSize: "14px" }}>{c.label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: "16px",
        }}>
          <p style={{ fontSize: "13px", color: theme.muted }}>
            © {new Date().getFullYear()} Md. Solaiman Sikder · All rights reserved
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["LinkedIn", "GitHub", "Shahedcse (GitHub)"].map(s => (
              <a key={s} href="#"
                className="nav-link-hover"
                style={{ fontSize: "13px", color: theme.muted, textDecoration: "none" }}
              >{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
