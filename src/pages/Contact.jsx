import { useState } from "react";
import { theme, fonts } from "../styles/theme";
import { SectionLabel, AccentText, SectionWrapper, GlowDot } from "../components/UI";

function FormField({ label, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label style={{
        fontSize: "12px", color: theme.muted, display: "block",
        marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase",
        fontFamily: fonts.display, fontWeight: 600,
      }}>
        {label}{required && <span style={{ color: theme.accent }}> *</span>}
      </label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: `1px solid ${theme.border}`,
      paddingBottom: "20px", marginBottom: "20px",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", width: "100%", padding: 0,
        }}
      >
        <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "15px", color: theme.text, textAlign: "left" }}>{q}</span>
        <span style={{
          color: theme.accent, fontSize: "20px",
          transform: open ? "rotate(45deg)" : "none",
          transition: "transform 0.3s", flexShrink: 0, marginLeft: "12px",
        }}>+</span>
      </button>
      {open && (
        <p style={{ color: theme.muted, fontSize: "14px", lineHeight: 1.8, marginTop: "14px", animation: "fadeIn 0.3s ease" }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  const serviceOptions = [
    "Web Application Development",
    "Database Architecture",
    "Cloud & DevOps",
    "ISP / Network Systems",
    "API Development & Integration",
    "IT Infrastructure & Support",
    "Other / Not Sure",
  ];

  const faqs = [
    { q: "Where are you based and do you work remotely?", a: "I'm based in Espoo, Finland, and am open to on-site roles in Finland as well as fully remote work for international clients." },
    { q: "What's your typical project timeline?", a: "It depends on scope. Small projects take 1–3 weeks; medium-sized web apps typically take 4–8 weeks. ISP and enterprise systems are quoted individually." },
    { q: "Do you offer ongoing maintenance after project delivery?", a: "Yes, I offer post-launch support packages and can be retained for ongoing development and infrastructure management." },
    { q: "What technologies do you specialise in?", a: "My core stack is PHP, Python, MySQL, REST APIs, and Docker. I also have strong experience with Mikrotik API, Radius Server, and Azure basics." },
    { q: "Are you available for full-time roles in Finland?", a: "Yes! I'm actively seeking full-time IT or web development roles in Finland. I hold a valid residence permit and am ready to start quickly." },
  ];

  const infos = [
    { icon: "📧", label: "Email", val: "cseshahed@gmail.com", href: "mailto:cseshahed@gmail.com" },
    { icon: "📞", label: "Phone", val: "+358 44 248 4992", href: "tel:+358442484992" },
    { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/Solaiman Sikder", href: "#" },
    { icon: "🐱", label: "GitHub", val: "github.com/Shahedcse", href: "#" },
    { icon: "📍", label: "Location", val: "Hansakallio 3A 19, Espoo, Finland", href: null },
  ];

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
          <SectionLabel>Let's Talk</SectionLabel>
          <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(38px, 5vw, 68px)", fontWeight: 800, lineHeight: 1.05, marginBottom: "24px" }}>
            Start a <AccentText>Conversation</AccentText>
          </h1>
          <p style={{ color: theme.muted, fontSize: "18px", maxWidth: "520px", lineHeight: 1.8 }}>
            Whether you have a project, a job opportunity, or just want to say hello —
            I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Main contact section ── */}
      <SectionWrapper>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "60px" }} className="two-col">
          {/* Left info */}
          <div>
            {/* Availability */}
            <div style={{
              background: theme.accentDim,
              border: `1px solid rgba(0,229,160,0.25)`,
              borderRadius: "12px", padding: "20px 24px",
              display: "flex", gap: "12px", alignItems: "flex-start",
              marginBottom: "32px",
            }}>
              <GlowDot style={{ marginTop: "4px", flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "14px", color: theme.accent, marginBottom: "4px" }}>
                  Currently Available
                </div>
                <p style={{ fontSize: "13px", color: theme.muted, lineHeight: 1.7 }}>
                  Open to full-time roles in Finland, freelance projects, and remote consulting opportunities.
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {infos.map((info, i) => (
                <div key={i} style={{
                  display: "flex", gap: "14px", alignItems: "center",
                  padding: "16px 0",
                  borderBottom: i < infos.length - 1 ? `1px solid ${theme.border}` : "none",
                }}>
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "10px",
                    background: theme.card,
                    border: `1px solid ${theme.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "18px", flexShrink: 0,
                  }}>{info.icon}</div>
                  <div>
                    <div style={{ fontSize: "11px", color: theme.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{info.label}</div>
                    {info.href
                      ? <a href={info.href} className="nav-link-hover"
                          style={{ color: theme.text, fontSize: "14px", textDecoration: "none", fontWeight: 500 }}
                        >{info.val}</a>
                      : <span style={{ fontSize: "14px", fontWeight: 500 }}>{info.val}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Response time */}
            <div style={{
              marginTop: "28px",
              background: theme.card, border: `1px solid ${theme.border}`,
              borderRadius: "12px", padding: "20px 24px",
            }}>
              <div style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "14px", marginBottom: "8px" }}>⏱ Response Time</div>
              <p style={{ fontSize: "13px", color: theme.muted, lineHeight: 1.7 }}>
                I typically respond within <strong style={{ color: theme.accent }}>24 hours</strong> on business days.
                For urgent inquiries, please call directly.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div style={{
            background: theme.card, border: `1px solid ${theme.border}`,
            borderRadius: "16px", padding: "40px",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: "200px", height: "200px",
              background: `radial-gradient(circle at top right, ${theme.accentDim}, transparent 65%)`,
              pointerEvents: "none",
            }} />

            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0", animation: "slideInUp 0.5s ease" }}>
                <div style={{
                  width: "72px", height: "72px", borderRadius: "50%",
                  background: theme.accentDim, border: `2px solid ${theme.accent}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "32px", margin: "0 auto 24px",
                  boxShadow: `0 0 40px ${theme.accentGlow}`,
                }}>✅</div>
                <h3 style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: "24px", color: theme.accent, marginBottom: "12px" }}>
                  Message Sent!
                </h3>
                <p style={{ color: theme.muted, fontSize: "15px", lineHeight: 1.8, maxWidth: "320px", margin: "0 auto 24px" }}>
                  Thanks for reaching out, {form.name}! I'll get back to you within 24 hours.
                </p>
                <button className="btn-outline" onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <div>
                <h2 style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: "22px", marginBottom: "28px" }}>
                  Send a Message
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <FormField label="Full Name" value={form.name} onChange={v => setForm(f => ({ ...f, name: v }))} placeholder="Solaiman Sikder" required />
                    <FormField label="Email" type="email" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} placeholder="you@example.com" required />
                  </div>

                  <FormField label="Company / Organisation" value={form.company} onChange={v => setForm(f => ({ ...f, company: v }))} placeholder="Your company (optional)" />

                  {/* Service select */}
                  <div>
                    <label style={{
                      fontSize: "12px", color: theme.muted, display: "block",
                      marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase",
                      fontFamily: fonts.display, fontWeight: 600,
                    }}>Service Needed</label>
                    <select
                      value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      style={{
                        width: "100%", background: theme.surface,
                        border: `1px solid ${theme.border}`, borderRadius: "8px",
                        padding: "13px 16px", color: form.service ? theme.text : theme.muted,
                        fontSize: "14px", fontFamily: fonts.body, outline: "none",
                        cursor: "pointer", appearance: "none",
                      }}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label style={{
                      fontSize: "12px", color: theme.muted, display: "block",
                      marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase",
                      fontFamily: fonts.display, fontWeight: 600,
                    }}>Estimated Budget</label>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {["< €500", "€500–€2k", "€2k–€5k", "€5k+", "Ongoing"].map(b => (
                        <button key={b} onClick={() => setForm(f => ({ ...f, budget: b }))} style={{
                          background: form.budget === b ? theme.accent : theme.surface,
                          color: form.budget === b ? "#000" : theme.muted,
                          border: `1px solid ${form.budget === b ? theme.accent : theme.border}`,
                          borderRadius: "6px", padding: "8px 14px", cursor: "pointer",
                          fontFamily: fonts.body, fontSize: "13px", fontWeight: 500,
                          transition: "all 0.2s",
                        }}>{b}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{
                      fontSize: "12px", color: theme.muted, display: "block",
                      marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase",
                      fontFamily: fonts.display, fontWeight: 600,
                    }}>Message <span style={{ color: theme.accent }}>*</span></label>
                    <textarea
                      rows={5} value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <button
                    className="btn-primary"
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>

                  <p style={{ fontSize: "12px", color: theme.muted, textAlign: "center" }}>
                    Your information is secure and will never be shared.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* ── FAQ ── */}
      <SectionWrapper style={{ background: theme.surface }}>
        <SectionLabel>FAQ</SectionLabel>
        <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, marginBottom: "48px" }}>
          Common <AccentText>Questions</AccentText>
        </h2>
        <div style={{ maxWidth: "720px" }}>
          {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
        </div>
      </SectionWrapper>
    </div>
  );
}
