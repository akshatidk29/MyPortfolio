const links = [
  { label: "Email", display: "akshatmittal2024@gmail.com", href: "mailto:akshatmittal2024@gmail.com", external: false },
  { label: "GitHub", display: "akshatidk29", href: "https://github.com/akshatidk29", external: true },
  { label: "LinkedIn", display: "Akshat Mittal", href: "https://www.linkedin.com/in/akshat-mittal-511477313", external: true },
  { label: "Resume", display: "Download PDF", href: "/Resume.pdf", external: true },
];

export default function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: "#0F0F0F", scrollMarginTop: "80px" }}>
      <div className="container pt-20 pb-12">

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          {/* Heading */}
          <div>
            <p className="eyebrow-light mb-5">Contact</p>
            <br />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: "normal",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                color: "#FFFFFF",
              }}
            >
              Let's build something together.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.5)",
                marginTop: "16px",
                maxWidth: "340px",
              }}
            >
              Open to internships, research collaborations, and interesting problems.
              <br />
              Based at IIT Mandi, India.
            </p>
          </div>

          {/* Links */}
          <div style={{ paddingTop: "4px" }}>
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  transition: "border-color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.22)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.08)")}
              >
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.65)" }}>
                  {item.label}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
                  {item.display} ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "56px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
            Akshat Mittal
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
            Updated July 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
