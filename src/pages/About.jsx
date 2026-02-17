import { useNavigate } from "react-router-dom";
import { theme, fonts } from "../styles/theme";
import { SectionLabel, AccentText, GlowCard, Tag, SectionWrapper } from "../components/UI";

// Skill bars
function SkillBar({ name, pct, color }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "14px", fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: "13px", color: color || theme.accent, fontFamily: fonts.display, fontWeight: 700 }}>{pct}%</span>
      </div>
      <div style={{ height: "5px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", overflow: "hidden" }}>
        <div style={{
          height: "100%", width: `${pct}%`,
          background: `linear-gradient(90deg, ${color || theme.accent}, ${theme.blue})`,
          borderRadius: "3px",
          transition: "width 1.5s ease",
          boxShadow: `0 0 10px ${color || theme.accentGlow}`,
        }} />
      </div>
    </div>
  );
}

// Timeline item
function TimelineItem({ year, role, company, desc, isLast }) {
  return (
    <div style={{ display: "flex", gap: "24px", paddingBottom: isLast ? 0 : "36px" }}>
      {/* Line & dot */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: "14px", height: "14px", borderRadius: "50%",
          background: theme.accent,
          border: `3px solid ${theme.bg}`,
          boxShadow: `0 0 12px ${theme.accentGlow}`,
          flexShrink: 0,
        }} />
        {!isLast && (
          <div style={{ width: "1px", flex: 1, background: `linear-gradient(to bottom, ${theme.accent}40, transparent)`, marginTop: "4px" }} />
        )}
      </div>
      {/* Content */}
      <div style={{ paddingBottom: isLast ? 0 : "8px" }}>
        <div style={{ fontSize: "12px", color: theme.accent, fontWeight: 700, letterSpacing: "0.1em", marginBottom: "4px" }}>
          {year}
        </div>
        <div style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "16px", marginBottom: "2px" }}>
          {role}
        </div>
        <div style={{ fontSize: "13px", color: theme.muted, marginBottom: desc ? "8px" : 0 }}>{company}</div>
        {desc && <p style={{ fontSize: "13px", color: theme.muted, lineHeight: 1.7 }}>{desc}</p>}
      </div>
    </div>
  );
}

// Language card
function LangCard({ lang, level, pct }) {
  return (
    <div style={{
      background: theme.card, border: `1px solid ${theme.border}`,
      borderRadius: "12px", padding: "20px 24px",
      display: "flex", alignItems: "center", gap: "16px",
    }}>
      <div style={{
        width: "44px", height: "44px", borderRadius: "10px",
        background: theme.accentDim,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: fonts.display, fontWeight: 800, fontSize: "16px",
        color: theme.accent,
      }}>{lang.slice(0, 2).toUpperCase()}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
          <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "14px" }}>{lang}</span>
          <span style={{ fontSize: "12px", color: theme.muted }}>{level}</span>
        </div>
        <div style={{ height: "3px", background: "rgba(255,255,255,0.06)", borderRadius: "2px" }}>
          <div style={{ height: "100%", width: `${pct}%`, background: theme.accent, borderRadius: "2px" }} />
        </div>
      </div>
    </div>
  );
}

// Value card
function ValueCard({ icon, title, desc }) {
  return (
    <div className="card-hover" style={{
      background: theme.card, border: `1px solid ${theme.border}`,
      borderRadius: "14px", padding: "32px",
    }}>
      <div style={{ fontSize: "32px", marginBottom: "16px" }}>{icon}</div>
      <h3 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "16px", marginBottom: "10px" }}>{title}</h3>
      <p style={{ color: theme.muted, fontSize: "14px", lineHeight: 1.8 }}>{desc}</p>
    </div>
  );
}

export default function About() {
  const navigate = useNavigate();

  const skills = [
    { name: "PHP (Laravel / Core)", pct: 90 },
    { name: "Python (Automation / Data)", pct: 82 },
    { name: "JavaScript / HTML5 / CSS3", pct: 78 },
    { name: "MySQL & SQL Database Design", pct: 88 },
    { name: "REST API Design & Integration", pct: 85 },
    { name: "Docker & Containerisation", pct: 72 },
    { name: "Azure Cloud (Basic)", pct: 62 },
    { name: "Mikrotik API / Radius Server", pct: 80 },
  ];

  const tools = ["GIT", "Jira", "Trello", "Firebase", "Google Maps API", "Airslate", "Docker", "VS Code", "Postman", "MySQL Workbench"];

  const timeline = [
    {
      year: "2025–2026",
      role: "MSc — Big Data Analytics (Specialisation)",
      company: "Arcada UAS, Espoo, Finland",
      desc: "Pursuing advanced studies in big data, analytics pipelines, and modern data engineering.",
    },
    {
      year: "Oct 2022 – Oct 2023",
      role: "Senior Programmer",
      company: "Fiber@Home Global, Dhaka, Bangladesh",
      desc: "Led ISP system integration project, managed database architecture and security, mentored junior developers.",
    },
    {
      year: "2020 – 2022",
      role: "Programmer",
      company: "Fiber@Home, Dhaka, Bangladesh",
      desc: "Developed REST APIs and web applications; integrated Firebase notifications and Google Maps into business systems.",
    },
    {
      year: "2016 – 2019",
      role: "Software Engineer",
      company: "Merits Technologies, Bangladesh",
      desc: "Built ERP modules, POS systems, and inventory management solutions. Supported clients with system troubleshooting.",
    },
    {
      year: "2010 – 2013",
      role: "BSc in Computer Science & Engineering",
      company: "National University, Bangladesh",
      desc: "Graduated with a degree covering algorithms, software engineering, networking, and database systems.",
    },
  ];

  const values = [
    { icon: "🎯", title: "Precision-Driven", desc: "I care deeply about code quality, performance, and maintainability. Every system I build is designed to last and scale." },
    { icon: "🔁", title: "Continuous Learner", desc: "From PHP to Big Data, I constantly evolve. Currently studying MSc-level data analytics to broaden my tech horizon." },
    { icon: "🤝", title: "Team Player", desc: "I've led teams and collaborated cross-functionally. I communicate clearly and deliver what I commit to." },
    { icon: "⚡", title: "Problem Solver", desc: "Complex ISP systems, high-volume databases, tricky API integrations — I thrive on solving tough technical problems." },
  ];

  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <section style={{
        padding: "140px 5% 80px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "10%", right: "5%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 65%)`,
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionLabel>Who I Am</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "80px", alignItems: "center" }} className="two-col">
            <div style={{ animation: "slideInLeft 0.9s ease both" }}>
              <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.05, marginBottom: "24px" }}>
                Developer.<br />Problem <AccentText>Solver.</AccentText><br />Lifelong Learner.
              </h1>
              <p style={{ color: theme.muted, fontSize: "16px", lineHeight: 1.9, marginBottom: "20px" }}>
                I'm Md. Solaiman Sikder, an IT professional and full-stack developer based in Espoo, Finland.
                With over 7 years of experience across Bangladesh and Finland, I specialise in building
                robust web applications, ISP management platforms, and enterprise systems.
              </p>
              <p style={{ color: theme.muted, fontSize: "16px", lineHeight: 1.9, marginBottom: "32px" }}>
                My journey began with a BSc in Computer Science from National University, Bangladesh,
                and has taken me through roles at ISP tech companies and software houses.
                Today, I'm advancing my skills further with an MSc in Big Data Analytics at Arcada UAS.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => navigate("/contact")}>
                  Let's Connect →
                </button>
                <button className="btn-outline" onClick={() => navigate("/services")}>
                  My Services
                </button>
              </div>
            </div>

            {/* Profile card */}
            <div style={{ animation: "slideInRight 0.9s ease both" }}>
              <div style={{
                background: theme.card, border: `1px solid ${theme.border}`,
                borderRadius: "16px", padding: "36px",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  width: "200px", height: "200px",
                  background: `radial-gradient(circle at top right, ${theme.accentDim}, transparent 70%)`,
                  pointerEvents: "none",
                }} />
                {/* Avatar */}
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  background: `linear-gradient(135deg, ${theme.accent}, ${theme.blue})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "20px",
                  boxShadow: `0 0 30px ${theme.accentGlow}`,
                }}>
                  <span style={{ fontFamily: fonts.display, fontSize: "28px", fontWeight: 800, color: "#000" }}>SS</span>
                </div>
                <h2 style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: "22px", marginBottom: "4px" }}>
                  Md. Solaiman Sikder
                </h2>
                <p style={{ color: theme.accent, fontSize: "14px", fontWeight: 500, marginBottom: "24px" }}>
                  Full-Stack Developer · IT Specialist
                </p>

                {[
                  { icon: "📍", label: "Location", val: "Espoo, Finland" },
                  { icon: "📧", label: "Email", val: "cseshahed@gmail.com" },
                  { icon: "📞", label: "Phone", val: "+358 44 248 4992" },
                  { icon: "🎓", label: "Education", val: "MSc Big Data, Arcada UAS" },
                  { icon: "🌐", label: "Languages", val: "English, Finnish (basic), Bengali" },
                  { icon: "🏳️", label: "Nationality", val: "Bangladeshi" },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "12px", alignItems: "center",
                    padding: "10px 0",
                    borderBottom: i < 5 ? `1px solid ${theme.border}` : "none",
                  }}>
                    <span style={{ fontSize: "16px" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "10px", color: theme.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</div>
                      <div style={{ fontSize: "13px", fontWeight: 500, marginTop: "1px" }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <SectionWrapper style={{ background: theme.surface }}>
        <SectionLabel>What Drives Me</SectionLabel>
        <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, marginBottom: "48px" }}>
          My <AccentText>Core Values</AccentText>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }} className="four-col">
          {values.map((v, i) => <ValueCard key={i} {...v} />)}
        </div>
      </SectionWrapper>

      {/* ── Skills ── */}
      <SectionWrapper>
        <SectionLabel>Technical Proficiency</SectionLabel>
        <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, marginBottom: "48px" }}>
          Skills & <AccentText>Expertise</AccentText>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="two-col">
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {skills.map((s, i) => <SkillBar key={i} {...s} />)}
          </div>
          <div>
            <h3 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "18px", marginBottom: "24px", color: theme.muted }}>
              Tools & Platforms
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
              {tools.map(t => (
                <span key={t} style={{
                  padding: "8px 16px",
                  background: theme.card,
                  border: `1px solid ${theme.border}`,
                  borderRadius: "8px",
                  fontSize: "13px", fontWeight: 500,
                  transition: "all 0.2s",
                  cursor: "default",
                }}
                  onMouseEnter={e => {
                    e.target.style.borderColor = theme.accent;
                    e.target.style.color = theme.accent;
                  }}
                  onMouseLeave={e => {
                    e.target.style.borderColor = theme.border;
                    e.target.style.color = theme.text;
                  }}
                >{t}</span>
              ))}
            </div>

            <h3 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "18px", marginBottom: "24px", color: theme.muted }}>
              Languages
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <LangCard lang="English" level="Fluent (C1)" pct={88} />
              <LangCard lang="Finnish" level="Elementary (A2)" pct={25} />
              <LangCard lang="Bengali" level="Native (C2)" pct={100} />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Experience Timeline ── */}
      <SectionWrapper style={{ background: theme.surface }}>
        <SectionLabel>My Journey</SectionLabel>
        <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, marginBottom: "48px" }}>
          Experience & <AccentText>Education</AccentText>
        </h2>
        <div style={{ maxWidth: "700px" }}>
          {timeline.map((t, i) => (
            <TimelineItem key={i} {...t} isLast={i === timeline.length - 1} />
          ))}
        </div>
      </SectionWrapper>

      {/* ── CTA ── */}
      <SectionWrapper>
        <div style={{
          textAlign: "center",
          padding: "60px",
          background: theme.card,
          border: `1px solid ${theme.border}`,
          borderRadius: "20px",
        }}>
          <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, marginBottom: "16px" }}>
            Interested in working <AccentText>together?</AccentText>
          </h2>
          <p style={{ color: theme.muted, fontSize: "16px", maxWidth: "440px", margin: "0 auto 32px" }}>
            I'm always open to new projects, consulting, and full-time opportunities in Finland or remote.
          </p>
          <button className="btn-primary" onClick={() => navigate("/contact")}>
            Get In Touch →
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
}
