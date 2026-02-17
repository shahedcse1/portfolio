import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme, fonts } from "../styles/theme";
import { SectionLabel, AccentText, SectionWrapper } from "../components/UI";

const projects = [
  {
    id: 1,
    title: "ISP Franchise Management Platform",
    cat: "Systems",
    year: "2022–2023",
    company: "Fiber@Home Global",
    color: theme.accent,
    emoji: "🌐",
    role: "Senior Programmer (Lead)",
    summary: "A unified ISP management system integrating franchise and customer data into a single real-time platform, handling high-volume data for thousands of users.",
    challenge: "Multiple ISP franchise branches had disconnected systems causing data inconsistencies, billing errors, and slow customer onboarding.",
    solution: "Designed a unified platform with Mikrotik API and Radius server integration, enabling real-time bandwidth control, automated billing, and centralised customer management.",
    impact: ["Reduced customer onboarding time by 60%", "Unified data from 50+ franchise branches", "Automated monthly billing for 10,000+ accounts", "Eliminated data duplication errors"],
    tech: ["PHP", "Python", "Mikrotik API", "Radius Server", "MySQL", "Docker", "GIT", "REST API"],
    featured: true,
  },
  {
    id: 2,
    title: "Business Mapping & Real-Time Notification System",
    cat: "Web Apps",
    year: "2020–2022",
    company: "Fiber@Home",
    color: theme.blue,
    emoji: "🗺️",
    role: "Programmer",
    summary: "A live business operations system integrating Google Maps for field team tracking and Firebase for instant push notifications across mobile and web.",
    challenge: "Field operations teams had no way to track service requests, technician locations, or receive real-time job updates.",
    solution: "Built a mapping dashboard using Google Maps API and Firebase Cloud Messaging, enabling real-time job dispatch and field agent tracking.",
    impact: ["Real-time updates for 200+ field agents", "Reduced dispatch response time by 40%", "Cross-platform notifications (web + mobile)", "Live map view for operations managers"],
    tech: ["PHP", "Firebase", "Google Maps API", "JavaScript", "MySQL", "REST API"],
    featured: true,
  },
  {
    id: 3,
    title: "Enterprise ERP & POS System",
    cat: "ERP",
    year: "2016–2019",
    company: "Merits Technologies",
    color: theme.purple,
    emoji: "🏢",
    role: "Software Engineer",
    summary: "A comprehensive enterprise resource planning suite with point-of-sale, inventory management, HR modules, and multi-location reporting.",
    challenge: "Business clients relied on disconnected spreadsheets and manual records for inventory, sales, and employee management.",
    solution: "Developed a modular ERP platform with POS terminals, automatic stock tracking, purchase orders, and financial reporting dashboards.",
    impact: ["Deployed at 10+ business clients", "Reduced inventory errors by 70%", "Real-time sales reporting across branches", "Automated purchase order generation"],
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    featured: true,
  },
  {
    id: 4,
    title: "Customer REST API Portal",
    cat: "Web Apps",
    year: "2020–2022",
    company: "Fiber@Home",
    color: theme.amber,
    emoji: "🔌",
    role: "Programmer",
    summary: "A secure RESTful API platform serving mobile and web client apps with authentication, rate limiting, and third-party service integration.",
    challenge: "Multiple client-facing apps needed a single, secure, well-documented API backend to avoid duplicating logic.",
    solution: "Architected a centralised REST API with JWT authentication, API key management, rate limiting, and Swagger documentation.",
    impact: ["Served 3 client-facing applications", "Reduced backend code duplication by 75%", "Achieved 99.5% uptime", "Full API documentation with Postman"],
    tech: ["PHP", "REST API", "JWT", "MySQL", "GIT", "Postman"],
    featured: false,
  },
  {
    id: 5,
    title: "Inventory & Stock Control System",
    cat: "ERP",
    year: "2016–2019",
    company: "Merits Technologies",
    color: theme.pink,
    emoji: "📦",
    role: "Software Engineer",
    summary: "A multi-warehouse inventory system with automated reorder alerts, supplier management, and detailed stock movement reporting.",
    challenge: "Retail clients were facing stockouts and over-ordering due to poor visibility across multiple warehouse locations.",
    solution: "Built a centralised inventory system with minimum stock threshold alerts, supplier purchase flows, and detailed movement logs.",
    impact: ["Deployed in 3 warehouse environments", "Eliminated stockouts for key SKUs", "Automated 80% of reorder workflows", "Reduced manual stock-take time by 50%"],
    tech: ["PHP", "MySQL", "JavaScript", "HTML5"],
    featured: false,
  },
  {
    id: 6,
    title: "IT Process Automation Suite",
    cat: "Systems",
    year: "2023",
    company: "Personal / Freelance",
    color: "#10b981",
    emoji: "⚙️",
    role: "Developer",
    summary: "Python-based automation scripts and Airslate workflows to automate repetitive IT tasks including user provisioning, reporting, and monitoring alerts.",
    challenge: "Manual IT operations such as user account setup, weekly reports, and system health checks were consuming hours of admin time.",
    solution: "Automated workflows using Python scripts and Airslate no-code/low-code platform for IT process management.",
    impact: ["Saved 10+ hours/week on manual tasks", "Automated weekly system reports", "Instant alerts for system anomalies", "Reduced human error in provisioning"],
    tech: ["Python", "Airslate", "Docker", "Bash Scripting"],
    featured: false,
  },
];

const cats = ["All", "Systems", "Web Apps", "ERP"];

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="card-hover"
      onClick={() => onClick(project)}
      style={{
        background: theme.card,
        border: `1px solid ${theme.border}`,
        borderRadius: "14px", overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Top color bar */}
      <div style={{ height: "4px", background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      {/* Emoji hero */}
      <div style={{
        height: "120px",
        background: `linear-gradient(135deg, ${project.color}12, ${theme.surface})`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "48px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${project.color}15, transparent 65%)`,
        }} />
        {project.emoji}
        {project.featured && (
          <div style={{
            position: "absolute", top: "12px", right: "12px",
            background: project.color, color: "#000",
            borderRadius: "100px", padding: "3px 10px",
            fontSize: "10px", fontFamily: fonts.display, fontWeight: 700,
            letterSpacing: "0.06em",
          }}>FEATURED</div>
        )}
      </div>

      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <span style={{
            fontSize: "11px", padding: "3px 9px",
            background: `${project.color}14`, border: `1px solid ${project.color}28`,
            borderRadius: "4px", color: project.color, fontWeight: 600,
          }}>{project.cat}</span>
          <span style={{ fontSize: "12px", color: theme.muted }}>{project.year}</span>
        </div>
        <h3 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "16px", marginBottom: "8px", lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <p style={{ color: theme.muted, fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>
          {project.summary.substring(0, 100)}...
        </p>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.tech.slice(0, 3).map(t => (
            <span key={t} style={{
              fontSize: "11px", padding: "3px 8px",
              background: "rgba(255,255,255,0.04)", border: `1px solid ${theme.border}`,
              borderRadius: "4px", color: theme.muted,
            }}>{t}</span>
          ))}
          {project.tech.length > 3 && (
            <span style={{ fontSize: "11px", padding: "3px 8px", color: theme.muted }}>
              +{project.tech.length - 3} more
            </span>
          )}
        </div>
        <div style={{ marginTop: "16px", color: project.color, fontSize: "13px", fontWeight: 600 }}>
          View Case Study →
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "fadeIn 0.2s ease",
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: theme.card,
          border: `1px solid ${project.color}40`,
          borderRadius: "20px",
          maxWidth: "780px", width: "100%",
          maxHeight: "88vh", overflowY: "auto",
          animation: "slideInUp 0.3s ease both",
          boxShadow: `0 30px 100px rgba(0,0,0,0.6), 0 0 60px ${project.color}20`,
        }}
      >
        {/* Header */}
        <div style={{
          padding: "32px 36px 0",
          borderBottom: `1px solid ${theme.border}`,
          paddingBottom: "24px",
          background: `linear-gradient(135deg, ${project.color}10, transparent)`,
          borderRadius: "20px 20px 0 0",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
                <span style={{
                  fontSize: "11px", padding: "3px 10px",
                  background: `${project.color}18`, border: `1px solid ${project.color}35`,
                  borderRadius: "4px", color: project.color, fontWeight: 600,
                }}>{project.cat}</span>
                <span style={{ fontSize: "12px", color: theme.muted }}>{project.company} · {project.year}</span>
              </div>
              <div style={{ fontSize: "36px", marginBottom: "8px" }}>{project.emoji}</div>
              <h2 style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: "clamp(20px, 3vw, 28px)", marginBottom: "6px" }}>
                {project.title}
              </h2>
              <div style={{ fontSize: "13px", color: project.color, fontWeight: 600 }}>Role: {project.role}</div>
            </div>
            <button onClick={onClose} style={{
              background: "rgba(255,255,255,0.07)", border: "none",
              borderRadius: "50%", width: "36px", height: "36px",
              cursor: "pointer", color: theme.text, fontSize: "18px",
              flexShrink: 0,
            }}>×</button>
          </div>
        </div>

        <div style={{ padding: "28px 36px" }}>
          <p style={{ color: theme.muted, fontSize: "15px", lineHeight: 1.8, marginBottom: "28px" }}>
            {project.summary}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "28px" }} className="two-col">
            <div style={{ background: theme.surface, borderRadius: "12px", padding: "20px" }}>
              <h4 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "14px", color: theme.amber, marginBottom: "10px" }}>🎯 The Challenge</h4>
              <p style={{ color: theme.muted, fontSize: "13px", lineHeight: 1.8 }}>{project.challenge}</p>
            </div>
            <div style={{ background: theme.surface, borderRadius: "12px", padding: "20px" }}>
              <h4 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "14px", color: project.color, marginBottom: "10px" }}>💡 The Solution</h4>
              <p style={{ color: theme.muted, fontSize: "13px", lineHeight: 1.8 }}>{project.solution}</p>
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h4 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "15px", marginBottom: "14px" }}>📊 Impact & Results</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {project.impact.map((imp, i) => (
                <div key={i} style={{
                  display: "flex", gap: "10px", alignItems: "center",
                  background: `${project.color}0d`, border: `1px solid ${project.color}20`,
                  borderRadius: "8px", padding: "10px 14px",
                }}>
                  <span style={{ color: project.color, flexShrink: 0, fontSize: "14px" }}>✓</span>
                  <span style={{ fontSize: "13px" }}>{imp}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "15px", marginBottom: "14px" }}>🛠 Tech Stack</h4>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {project.tech.map(t => (
                <span key={t} style={{
                  fontSize: "12px", padding: "6px 14px",
                  background: `${project.color}14`, border: `1px solid ${project.color}28`,
                  borderRadius: "6px", color: project.color, fontWeight: 500,
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "All" ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <section style={{ padding: "140px 5% 60px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "10%", right: "5%", width: "500px", height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 65%)`,
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionLabel>My Work</SectionLabel>
          <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(38px, 5vw, 68px)", fontWeight: 800, lineHeight: 1.05, marginBottom: "24px" }}>
            Projects &amp; <AccentText>Case Studies</AccentText>
          </h1>
          <p style={{ color: theme.muted, fontSize: "18px", maxWidth: "520px", lineHeight: 1.8 }}>
            7+ years of building real systems — from ISP platforms to enterprise ERPs.
            Click any project for a full case study.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <SectionWrapper>
        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "40px", flexWrap: "wrap" }}>
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{
              background: filter === c ? theme.accent : "transparent",
              color: filter === c ? "#000" : theme.muted,
              border: `1px solid ${filter === c ? theme.accent : theme.border}`,
              borderRadius: "100px", padding: "9px 22px", cursor: "pointer",
              fontFamily: fonts.display, fontWeight: 700, fontSize: "13px",
              transition: "all 0.2s", letterSpacing: "0.04em",
            }}>
              {c} {filter === c && `(${filtered.length})`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
          {filtered.map(p => <ProjectCard key={p.id} project={p} onClick={setSelected} />)}
        </div>
      </SectionWrapper>

      {/* ── Tech Stack Overview ── */}
      <SectionWrapper style={{ background: theme.surface }}>
        <SectionLabel>Tech I Use</SectionLabel>
        <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, marginBottom: "40px" }}>
          My <AccentText>Stack</AccentText>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="four-col">
          {[
            { cat: "Backend", items: ["PHP (Core & Laravel)", "Python 3", "REST API Design", "Node.js (basic)"], color: theme.accent },
            { cat: "Frontend", items: ["JavaScript (ES6+)", "HTML5 & CSS3", "React (basic)", "Responsive Design"], color: theme.blue },
            { cat: "Database", items: ["MySQL", "SQL optimisation", "Database design", "GIT version control"], color: theme.purple },
            { cat: "Infrastructure", items: ["Docker", "Azure (basic)", "Radius Server", "Mikrotik API"], color: theme.amber },
          ].map((group, i) => (
            <div key={i} style={{
              background: theme.card, border: `1px solid ${theme.border}`,
              borderRadius: "14px", padding: "24px",
            }}>
              <div style={{ fontSize: "12px", color: group.color, fontFamily: fonts.display, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
                {group.cat}
              </div>
              {group.items.map((item, j) => (
                <div key={j} style={{
                  fontSize: "13px", padding: "8px 0",
                  borderBottom: j < group.items.length - 1 ? `1px solid ${theme.border}` : "none",
                  color: theme.muted,
                }}>{item}</div>
              ))}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── CTA ── */}
      <SectionWrapper>
        <div style={{
          textAlign: "center", padding: "60px",
          background: theme.card, border: `1px solid ${theme.border}`,
          borderRadius: "20px",
        }}>
          <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, marginBottom: "16px" }}>
            Have a project in mind? <AccentText>Let's build it.</AccentText>
          </h2>
          <p style={{ color: theme.muted, fontSize: "16px", maxWidth: "420px", margin: "0 auto 32px" }}>
            Reach out and let's discuss how I can solve your technical challenges.
          </p>
          <button className="btn-primary" onClick={() => navigate("/contact")}>
            Start a Conversation →
          </button>
        </div>
      </SectionWrapper>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
