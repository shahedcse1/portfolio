import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { theme, fonts } from "../styles/theme";
import { AccentText, SectionLabel, GlowDot, Tag } from "../components/UI";

// ── Typing Effect ─────────────────────────────────────────────────────────────
function TypingEffect() {
  const titles = ["Web App Developer", "Full-Stack Engineer", "IT Systems Specialist", "PHP & Python Expert", "Big Data Enthusiast"];
  const [typed, setTyped] = useState("");
  const [tIdx, setTIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[tIdx];
    const speed = deleting ? 38 : 78;
    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setTyped(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIdx > 0) {
        setTyped(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else {
        setDeleting(false);
        setTIdx(i => (i + 1) % titles.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, tIdx]);

  return (
    <h2 style={{
      fontFamily: fonts.display,
      fontSize: "clamp(20px, 2.5vw, 30px)",
      fontWeight: 600, color: theme.muted, marginBottom: "28px",
      minHeight: "44px",
    }}>
      <span style={{ color: theme.accent }}>{"< "}</span>
      {typed}
      <span style={{
        borderRight: `3px solid ${theme.accent}`,
        marginLeft: "2px",
        animation: "blink 1s step-end infinite",
      }} />
      <span style={{ color: theme.accent }}>{" />"}</span>
    </h2>
  );
}

// ── Hero Avatar ───────────────────────────────────────────────────────────────
function HeroAvatar() {
  return (
    <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* Outer rings */}
      {["-20px", "-50px", "-80px"].map((offset, i) => (
        <div key={i} style={{
          position: "absolute",
          inset: offset,
          borderRadius: "50%",
          border: `${i === 0 ? 2 : 1}px solid rgba(0,229,160,${0.25 - i * 0.08})`,
          animation: `${i % 2 === 0 ? "spin" : "spinReverse"} ${18 + i * 8}s linear infinite`,
          borderTopColor: i === 0 ? theme.accent : "transparent",
          borderRightColor: "transparent",
          borderBottomColor: i === 0 ? "transparent" : "rgba(0,229,160,0.1)",
        }} />
      ))}

      {/* Photo / Avatar */}
      <div style={{
        width: "320px", height: "370px",
        borderRadius: "180px 180px 130px 130px",
        overflow: "hidden",
        border: `3px solid ${theme.accent}`,
        boxShadow: `0 0 60px ${theme.accentGlow}, 0 0 120px rgba(0,229,160,0.08)`,
        position: "relative",
        animation: "float 6s ease-in-out infinite",
        background: theme.surface,
        zIndex: 1,
      }}>
        <div style={{
          width: "100%", height: "100%",
          background: `linear-gradient(145deg, ${theme.surface}, #1a1a2e)`,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(ellipse at 50% 0%, rgba(0,229,160,0.15) 0%, transparent 65%)`,
          }} />
          <div style={{
            width: "120px", height: "120px", borderRadius: "50%",
            background: `linear-gradient(135deg, ${theme.accent}, ${theme.blue})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: "20px", position: "relative", zIndex: 1,
            boxShadow: `0 0 40px ${theme.accentGlow}`,
          }}>
            <span style={{ fontFamily: fonts.display, fontSize: "48px", fontWeight: 800, color: "#000" }}>SS</span>
          </div>
          <div style={{ fontFamily: fonts.display, fontSize: "17px", fontWeight: 700, color: theme.text, position: "relative", zIndex: 1 }}>
            Solaiman Sikder
          </div>
          <div style={{ fontSize: "13px", color: theme.accent, position: "relative", zIndex: 1, marginTop: "4px" }}>
            Web App Developer
          </div>
          {/* Floating tech badges */}
          {[
            { label: "PHP", top: "16%", left: "6%" },
            { label: "Python", top: "52%", left: "2%" },
            { label: "Docker", top: "30%", right: "4%" },
            { label: "MySQL", top: "70%", right: "6%" },
          ].map((b, i) => (
            <div key={i} style={{
              position: "absolute",
              top: b.top, left: b.left, right: b.right,
              background: "rgba(0,229,160,0.12)",
              border: "1px solid rgba(0,229,160,0.3)",
              borderRadius: "100px", padding: "4px 12px",
              fontSize: "11px", color: theme.accent, fontWeight: 500,
            }}>{b.label}</div>
          ))}
        </div>
      </div>

      {/* Bottom badge */}
      <div style={{
        position: "absolute", bottom: "-20px", left: "50%",
        transform: "translateX(-50%)",
        background: theme.card, border: `1px solid ${theme.border}`,
        borderRadius: "100px", padding: "8px 20px",
        display: "flex", alignItems: "center", gap: "8px",
        whiteSpace: "nowrap", boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
        zIndex: 2,
      }}>
        <span>📍</span>
        <span style={{ fontSize: "13px", color: theme.muted }}>Espoo, Finland</span>
      </div>
    </div>
  );
}

// ── Floating Tech Bar ─────────────────────────────────────────────────────────
function TechBar() {
  const techs = ["PHP", "Python", "JavaScript", "MySQL", "Docker", "Azure", "REST API", "Git", "HTML5", "CSS3", "Firebase", "Mikrotik"];
  return (
    <div style={{
      overflow: "hidden",
      padding: "24px 0",
      borderTop: `1px solid ${theme.border}`,
      borderBottom: `1px solid ${theme.border}`,
      background: theme.surface,
      position: "relative",
    }}>
      <div style={{
        display: "flex", gap: "0",
        animation: "shimmer 20s linear infinite",
        whiteSpace: "nowrap",
      }}>
        {[...techs, ...techs].map((t, i) => (
          <span key={i} style={{
            padding: "0 32px",
            fontSize: "13px",
            fontFamily: fonts.display,
            fontWeight: 700,
            color: i % 3 === 0 ? theme.accent : theme.muted,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
            {t} <span style={{ color: theme.border, margin: "0 0 0 32px" }}>·</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes shimmer {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ── Recent Work Preview ───────────────────────────────────────────────────────
function RecentWork({ navigate }) {
  const works = [
    { title: "ISP Franchise Platform", year: "2022–23", color: theme.accent, cat: "Systems" },
    { title: "Business Mapping System", year: "2021", color: theme.blue, cat: "Web App" },
    { title: "ERP & POS Solution", year: "2016–19", color: theme.purple, cat: "Enterprise" },
  ];

  return (
    <div style={{ padding: "80px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800 }}>
              Recent <AccentText>Projects</AccentText>
            </h2>
          </div>
          <button className="btn-outline" onClick={() => navigate("/portfolio")} style={{ whiteSpace: "nowrap" }}>
            View All →
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="three-col">
          {works.map((w, i) => (
            <div key={i} className="card-hover" style={{
              background: theme.card,
              border: `1px solid ${theme.border}`,
              borderRadius: "12px", overflow: "hidden",
              cursor: "pointer",
            }} onClick={() => navigate("/portfolio")}>
              <div style={{ height: "3px", background: `linear-gradient(90deg, ${w.color}, transparent)` }} />
              <div style={{ padding: "28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                  <Tag>{w.cat}</Tag>
                  <span style={{ fontSize: "12px", color: theme.muted }}>{w.year}</span>
                </div>
                <h3 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "16px" }}>{w.title}</h3>
                <div style={{ marginTop: "16px", color: w.color, fontSize: "13px", fontWeight: 600 }}>
                  View project →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Testimonials / Certifications ─────────────────────────────────────────────
function Certs() {
  const certs = [
    { icon: "🐍", title: "Python Essentials 1", issuer: "PCEP-30-02 Aligned · Edube" },
    { icon: "⚙️", title: "IT Process Automation", issuer: "Airslate · 2023" },
    { icon: "🌐", title: "Web Development in PHP", issuer: "BASIS · Bangladesh" },
    { icon: "📊", title: "Big Data Analytics", issuer: "Arcada UAS · 2025–2026" },
  ];

  return (
    <div style={{ padding: "60px 5% 80px", background: theme.surface }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionLabel>Credentials</SectionLabel>
        <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800, marginBottom: "40px" }}>
          Certifications & <AccentText>Training</AccentText>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }} className="four-col">
          {certs.map((c, i) => (
            <div key={i} className="card-hover" style={{
              background: theme.card,
              border: `1px solid ${theme.border}`,
              borderRadius: "12px", padding: "24px",
            }}>
              <div style={{ fontSize: "32px", marginBottom: "14px" }}>{c.icon}</div>
              <div style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "15px", marginBottom: "6px" }}>{c.title}</div>
              <div style={{ fontSize: "12px", color: theme.muted }}>{c.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner({ navigate }) {
  return (
    <div style={{ padding: "80px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          background: `linear-gradient(135deg, rgba(0,229,160,0.08), rgba(0,180,216,0.08))`,
          border: `1px solid rgba(0,229,160,0.2)`,
          borderRadius: "20px", padding: "60px 48px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: "32px", flexWrap: "wrap",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-50px", right: "-50px",
            width: "250px", height: "250px", borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.accentDim}, transparent 65%)`,
            pointerEvents: "none",
          }} />
          <div>
            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, marginBottom: "12px" }}>
              Ready to build something <AccentText>amazing?</AccentText>
            </h2>
            <p style={{ color: theme.muted, fontSize: "16px", maxWidth: "440px" }}>
              Let's collaborate on your next web project, system integration, or IT challenge.
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => navigate("/contact")}>
              Start a Project →
            </button>
            <button className="btn-outline" onClick={() => navigate("/portfolio")}>
              See My Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate();
  const stats = [
    { num: "7+", label: "Years Exp." },
    { num: "3", label: "Companies" },
    { num: "20+", label: "Projects" },
    { num: "2", label: "Countries" },
  ];

  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center",
        padding: "100px 5% 60px",
        position: "relative", overflow: "hidden",
      }}>
        {/* BG glows */}
        <div style={{
          position: "absolute", top: "15%", right: "8%",
          width: "560px", height: "560px", borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "5%",
          width: "320px", height: "320px", borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0,180,216,0.05) 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "60px", alignItems: "center",
          width: "100%", maxWidth: "1200px", margin: "0 auto",
          position: "relative", zIndex: 1,
        }} className="two-col">
          {/* Left */}
          <div style={{ animation: "slideInLeft 0.9s ease both" }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(0,229,160,0.1)",
              border: "1px solid rgba(0,229,160,0.25)",
              borderRadius: "100px", padding: "7px 18px", marginBottom: "28px",
            }}>
              <GlowDot />
              <span style={{ fontSize: "13px", color: theme.accent, fontWeight: 500, letterSpacing: "0.06em" }}>
                Open to Work · Finland
              </span>
            </div>

            <h1 style={{
              fontFamily: fonts.display,
              fontSize: "clamp(42px, 5.5vw, 76px)",
              fontWeight: 800, lineHeight: 1.0,
              marginBottom: "18px",
            }}>
              Hi, I'm<br />
              <span style={{
                background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.blue} 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Solaiman
              </span>
            </h1>

            <TypingEffect />

            <p style={{
              fontSize: "16px", color: theme.muted,
              maxWidth: "500px", lineHeight: 1.85, marginBottom: "40px",
            }}>
              IT professional & full-stack developer with 7+ years building scalable ISP systems,
              APIs, and enterprise web apps in Bangladesh & Finland.
              Currently pursuing an MSc in Big Data Analytics at Arcada UAS, Espoo.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => navigate("/portfolio")}>
                View My Work →
              </button>
              <button className="btn-outline" onClick={() => navigate("/contact")}>
                Hire Me
              </button>
            </div>

            {/* Stats */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4,1fr)",
              gap: "20px", marginTop: "52px",
              paddingTop: "32px",
              borderTop: `1px solid ${theme.border}`,
            }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{
                    fontFamily: fonts.display,
                    fontSize: "34px", fontWeight: 800,
                    color: theme.accent, lineHeight: 1,
                    animation: "countUp 0.8s ease both",
                  }}>{s.num}</div>
                  <div style={{ fontSize: "12px", color: theme.muted, marginTop: "4px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ animation: "slideInRight 0.9s ease both" }} className="hide-mobile">
            <HeroAvatar />
          </div>
        </div>
      </section>

      {/* ── Tech scrolling bar ── */}
      <TechBar />

      {/* ── Recent Work ── */}
      <RecentWork navigate={navigate} />

      {/* ── Certifications ── */}
      <Certs />

      {/* ── CTA ── */}
      <CTABanner navigate={navigate} />
    </div>
  );
}
