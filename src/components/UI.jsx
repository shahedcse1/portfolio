import { theme, fonts } from "../styles/theme";

export const SectionLabel = ({ children }) => (
  <div style={{
    fontFamily: fonts.display,
    fontSize: "12px", fontWeight: 700,
    color: theme.accent, letterSpacing: "0.22em",
    textTransform: "uppercase", marginBottom: "16px",
    display: "flex", alignItems: "center", gap: "12px",
  }}>
    <div style={{ width: "28px", height: "2px", background: theme.accent, borderRadius: "2px" }} />
    {children}
  </div>
);

export const AccentText = ({ children }) => (
  <span style={{
    background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.blue} 100%)`,
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }}>
    {children}
  </span>
);

export const PageHero = ({ label, title, accent, subtitle, children }) => (
  <div style={{
    padding: "140px 5% 80px",
    position: "relative", overflow: "hidden",
  }}>
    <div style={{
      position: "absolute", top: "10%", right: "5%",
      width: "500px", height: "500px", borderRadius: "50%",
      background: `radial-gradient(circle, ${theme.accentDim} 0%, transparent 65%)`,
      pointerEvents: "none",
    }} />
    <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
      <SectionLabel>{label}</SectionLabel>
      <h1 style={{
        fontFamily: fonts.display,
        fontSize: "clamp(42px, 5vw, 72px)",
        fontWeight: 800, lineHeight: 1.05,
        marginBottom: "24px",
      }}>
        {title} <AccentText>{accent}</AccentText>
      </h1>
      {subtitle && (
        <p style={{
          color: theme.muted, fontSize: "18px",
          maxWidth: "560px", lineHeight: 1.8, marginBottom: "16px",
        }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </div>
);

export const Divider = () => (
  <div style={{ height: "1px", background: theme.border, margin: "0 5%" }} />
);

export const Tag = ({ children, color }) => (
  <span style={{
    fontSize: "11px", padding: "4px 10px",
    background: color ? `${color}15` : "rgba(255,255,255,0.05)",
    border: `1px solid ${color ? `${color}30` : theme.border}`,
    borderRadius: "4px",
    color: color || theme.muted,
    fontWeight: 500, letterSpacing: "0.04em",
  }}>{children}</span>
);

export const GlowCard = ({ children, style = {} }) => (
  <div className="card-hover" style={{
    background: theme.card,
    border: `1px solid ${theme.border}`,
    borderRadius: "14px",
    ...style,
  }}>
    {children}
  </div>
);

export const NoiseOverlay = () => (
  <div style={{
    position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
    opacity: 0.5,
  }} />
);

export const GlowDot = ({ style = {} }) => (
  <div style={{
    width: 10, height: 10, borderRadius: "50%",
    background: theme.accent,
    animation: "pulse 2s ease-in-out infinite",
    ...style,
  }} />
);

export const SectionWrapper = ({ children, id, style = {} }) => (
  <section id={id} style={{ padding: "100px 5%", ...style }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {children}
    </div>
  </section>
);
