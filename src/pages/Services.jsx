import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme, fonts } from "../styles/theme";
import { SectionLabel, AccentText, SectionWrapper } from "../components/UI";

const services = [
  {
    icon: "⚡",
    title: "Web Application Development",
    shortDesc: "End-to-end scalable web apps",
    fullDesc: "I build full-featured, production-ready web applications using PHP (Core & Laravel), Python, and JavaScript. From business portals to ISP management platforms, I deliver clean code that scales.",
    features: [
      "Custom PHP & Python backends",
      "RESTful API design & documentation",
      "Database-driven dynamic applications",
      "Authentication & role-based access",
      "Third-party API integration",
      "Performance optimisation",
    ],
    tags: ["PHP", "Python", "REST API", "JavaScript"],
    color: theme.accent,
  },
  {
    icon: "🗄️",
    title: "Database Architecture & Management",
    shortDesc: "High-performance data systems",
    fullDesc: "Designing robust MySQL databases with efficient schemas, indexing strategies, security hardening, and query optimisation for high-volume, mission-critical systems.",
    features: [
      "Schema design & normalisation",
      "Query optimisation & indexing",
      "Database security & backup strategies",
      "Migration & data modelling",
      "Multi-table relational systems",
      "Stored procedures & triggers",
    ],
    tags: ["MySQL", "SQL", "Data Modelling"],
    color: theme.blue,
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    shortDesc: "Containerised & cloud-ready deployments",
    fullDesc: "Setting up Docker-based containerised environments, basic Azure cloud configurations, Git workflows, and CI/CD pipelines to keep your development and deployment smooth.",
    features: [
      "Docker containerisation",
      "Docker Compose setups",
      "Azure basics (VMs, storage, networking)",
      "Git workflows & branching strategies",
      "Environment configuration",
      "Deployment automation scripts",
    ],
    tags: ["Docker", "Azure", "Git", "CI/CD"],
    color: "#7c3aed",
  },
  {
    icon: "🌐",
    title: "ISP & Network Systems",
    shortDesc: "Specialised ISP management platforms",
    fullDesc: "My niche expertise: building and maintaining ISP management systems including Mikrotik router integration, Radius server setup, franchise portals, and customer billing systems.",
    features: [
      "Mikrotik API integration",
      "Radius server configuration",
      "Bandwidth management systems",
      "Customer/franchise portals",
      "ISP billing & reporting",
      "Network troubleshooting tools",
    ],
    tags: ["Mikrotik API", "Radius", "ISP", "PHP"],
    color: theme.amber,
  },
  {
    icon: "🔗",
    title: "API Development & Integration",
    shortDesc: "Connecting your systems intelligently",
    fullDesc: "Designing clean REST APIs and integrating third-party services including payment gateways, mapping platforms, push notification systems, and business intelligence tools.",
    features: [
      "REST API architecture & design",
      "Firebase push notifications",
      "Google Maps API integration",
      "Third-party payment gateways",
      "Webhook setup & management",
      "API documentation (Swagger/Postman)",
    ],
    tags: ["REST API", "Firebase", "Google Maps", "Webhooks"],
    color: theme.pink,
  },
  {
    icon: "🖥️",
    title: "IT Infrastructure & Support",
    shortDesc: "End-to-end IT systems management",
    fullDesc: "Comprehensive IT support including Windows/Microsoft environment administration, hardware & software deployment, network management, and proactive infrastructure monitoring.",
    features: [
      "Windows Server administration",
      "Microsoft environment setup",
      "Hardware & software deployment",
      "Network management & troubleshooting",
      "IT process automation",
      "End-user technical support",
    ],
    tags: ["Windows", "Networking", "Automation", "Support"],
    color: "#10b981",
  },
];

function ServiceCard({ svc, expanded, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: expanded ? `linear-gradient(135deg, ${svc.color}10, ${theme.card})` : theme.card,
        border: `1px solid ${expanded ? svc.color : theme.border}`,
        borderRadius: "14px", padding: "32px",
        cursor: "pointer",
        transition: "all 0.35s ease",
        transform: expanded ? "scale(1.01)" : "scale(1)",
        boxShadow: expanded ? `0 20px 60px ${svc.color}20` : "none",
      }}
    >
      <div style={{
        width: "54px", height: "54px", borderRadius: "14px",
        background: `${svc.color}18`,
        border: `1px solid ${svc.color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "24px", marginBottom: "20px",
        transition: "all 0.3s",
        boxShadow: expanded ? `0 0 20px ${svc.color}30` : "none",
      }}>
        {svc.icon}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
        <h3 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "17px", flex: 1, lineHeight: 1.3 }}>
          {svc.title}
        </h3>
        <div style={{
          marginLeft: "12px", fontSize: "16px", color: svc.color,
          transform: expanded ? "rotate(45deg)" : "none",
          transition: "transform 0.3s",
          flexShrink: 0,
        }}>+</div>
      </div>

      <p style={{ color: theme.muted, fontSize: "14px", marginBottom: "16px" }}>{svc.shortDesc}</p>

      {/* Tags */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: expanded ? "20px" : 0 }}>
        {svc.tags.map(t => (
          <span key={t} style={{
            fontSize: "11px", padding: "3px 9px",
            background: `${svc.color}14`,
            border: `1px solid ${svc.color}28`,
            borderRadius: "4px", color: svc.color,
            fontWeight: 500,
          }}>{t}</span>
        ))}
      </div>

      {/* Expanded */}
      {expanded && (
        <div style={{ animation: "fadeIn 0.3s ease both" }}>
          <div style={{ height: "1px", background: `${svc.color}25`, margin: "0 0 20px" }} />
          <p style={{ color: theme.muted, fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>{svc.fullDesc}</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {svc.features.map((f, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: svc.color, flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ProcessStep({ num, title, desc }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{
        width: "48px", height: "48px", borderRadius: "12px",
        background: theme.accentDim,
        border: `1px solid rgba(0,229,160,0.2)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: fonts.display, fontWeight: 800, fontSize: "18px",
        color: theme.accent, flexShrink: 0,
      }}>{num}</div>
      <div>
        <h4 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "16px", marginBottom: "6px" }}>{title}</h4>
        <p style={{ color: theme.muted, fontSize: "14px", lineHeight: 1.7 }}>{desc}</p>
      </div>
    </div>
  );
}

function PricingCard({ plan, price, desc, features, highlighted }) {
  const navigate = useNavigate();
  return (
    <div className="card-hover" style={{
      background: highlighted ? `linear-gradient(135deg, rgba(0,229,160,0.08), rgba(0,180,216,0.06))` : theme.card,
      border: `1px solid ${highlighted ? theme.accent : theme.border}`,
      borderRadius: "16px", padding: "36px",
      position: "relative", overflow: "hidden",
      boxShadow: highlighted ? `0 0 60px rgba(0,229,160,0.1)` : "none",
    }}>
      {highlighted && (
        <div style={{
          position: "absolute", top: "16px", right: "16px",
          background: theme.accent, color: "#000",
          borderRadius: "100px", padding: "4px 12px",
          fontSize: "11px", fontFamily: fonts.display, fontWeight: 700,
          letterSpacing: "0.06em",
        }}>POPULAR</div>
      )}
      <h3 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "20px", marginBottom: "8px" }}>{plan}</h3>
      <div style={{ marginBottom: "12px" }}>
        <span style={{ fontFamily: fonts.display, fontSize: "36px", fontWeight: 800, color: highlighted ? theme.accent : theme.text }}>
          {price}
        </span>
        {price !== "Custom" && <span style={{ color: theme.muted, fontSize: "14px" }}> /project</span>}
      </div>
      <p style={{ color: theme.muted, fontSize: "14px", marginBottom: "28px", lineHeight: 1.7 }}>{desc}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "14px" }}>
            <span style={{ color: theme.accent, flexShrink: 0 }}>✓</span>
            {f}
          </div>
        ))}
      </div>
      <button
        className={highlighted ? "btn-primary" : "btn-outline"}
        onClick={() => navigate("/contact")}
        style={{ width: "100%", justifyContent: "center" }}
      >
        Get Started →
      </button>
    </div>
  );
}

export default function Services() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(0);

  const process = [
    { num: "01", title: "Discovery Call", desc: "We discuss your project requirements, goals, timeline, and technical constraints." },
    { num: "02", title: "Planning & Proposal", desc: "I create a detailed technical proposal with architecture plan, milestones, and cost estimate." },
    { num: "03", title: "Development", desc: "Iterative development with regular updates, code reviews, and progress demos." },
    { num: "04", title: "Testing & QA", desc: "Thorough testing across environments — unit tests, integration, and user acceptance." },
    { num: "05", title: "Deployment & Handover", desc: "Smooth deployment with documentation, training, and post-launch support." },
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "€500",
      desc: "Great for small web apps, landing pages, or simple API integrations.",
      features: ["Up to 5 pages / endpoints", "MySQL database", "Basic authentication", "2 weeks delivery", "Email support"],
      highlighted: false,
    },
    {
      plan: "Professional",
      price: "€2,000",
      desc: "Ideal for business platforms, ERP modules, and full-stack applications.",
      features: ["Unlimited pages & endpoints", "Full REST API", "Docker deployment", "Advanced database design", "4 weeks delivery", "Priority support"],
      highlighted: true,
    },
    {
      plan: "Enterprise",
      price: "Custom",
      desc: "For complex ISP systems, large-scale data platforms, or long-term consulting.",
      features: ["Custom architecture", "ISP/Radius integration", "Cloud setup (Azure)", "Dedicated timeslot", "Ongoing maintenance", "SLA agreement"],
      highlighted: false,
    },
  ];

  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <section style={{ padding: "140px 5% 80px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "10%", right: "5%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 65%)`,
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionLabel>What I Offer</SectionLabel>
          <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(38px, 5vw, 68px)", fontWeight: 800, lineHeight: 1.05, marginBottom: "24px" }}>
            Services Built for<br /><AccentText>Real Results</AccentText>
          </h1>
          <p style={{ color: theme.muted, fontSize: "18px", maxWidth: "560px", lineHeight: 1.8 }}>
            From full-stack web applications to specialised ISP systems and cloud deployments —
            tailored, reliable, and scalable solutions for your business.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <SectionWrapper>
        <SectionLabel>Services</SectionLabel>
        <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, marginBottom: "12px" }}>
          Click to <AccentText>Explore</AccentText>
        </h2>
        <p style={{ color: theme.muted, fontSize: "15px", marginBottom: "40px" }}>Select a service to see full details.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
          {services.map((s, i) => (
            <ServiceCard
              key={i} svc={s}
              expanded={expanded === i}
              onClick={() => setExpanded(expanded === i ? null : i)}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ── Process ── */}
      <SectionWrapper style={{ background: theme.surface }}>
        <SectionLabel>How I Work</SectionLabel>
        <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, marginBottom: "48px" }}>
          My <AccentText>Process</AccentText>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px" }} className="two-col">
          {process.map((p, i) => <ProcessStep key={i} {...p} />)}
        </div>
      </SectionWrapper>

      {/* ── Pricing ── */}
      <SectionWrapper>
        <SectionLabel>Investment</SectionLabel>
        <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, marginBottom: "12px" }}>
          Transparent <AccentText>Pricing</AccentText>
        </h2>
        <p style={{ color: theme.muted, fontSize: "15px", marginBottom: "48px" }}>
          All projects are quoted individually. These tiers give you a starting reference.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }} className="three-col">
          {pricing.map((p, i) => <PricingCard key={i} {...p} />)}
        </div>
      </SectionWrapper>

      {/* ── CTA ── */}
      <SectionWrapper style={{ background: theme.surface }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, marginBottom: "16px" }}>
            Not sure what you need? <AccentText>Let's talk.</AccentText>
          </h2>
          <p style={{ color: theme.muted, fontSize: "16px", maxWidth: "440px", margin: "0 auto 32px" }}>
            Every project is unique. Reach out and I'll suggest the best approach for your goals.
          </p>
          <button className="btn-primary" onClick={() => navigate("/contact")}>
            Book a Free Consultation →
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
}
