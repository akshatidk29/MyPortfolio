import { ArrowUpRight } from "lucide-react";

const deliveries = [
  {
    id: 1,
    client: "adVoice Inc.",
    clientHref: "https://advoice.co.in",
    type: "Computer Vision",
    status: "In Production",
    description:
      "A system that automatically detects optimal logo placement regions on garments and overlays logos at scale. Built with YOLOv11 and OpenCV; currently in production handling large image volumes.",
    what: [
      "Detection of garment regions suitable for logo placement",
      "Automated logo overlay with correct perspective and scale",
      "Production pipeline handling high-throughput image processing",
    ],
    tech: ["YOLOv11", "OpenCV", "Python", "Computer Vision"],
    value: "$1,000",
  },
  {
    id: 2,
    client: "Client",
    clientHref: null,
    type: "Automation & Integration",
    status: "In Production",
    description:
      "A back-office automation platform that replaced manual workflows with an integrated system covering email processing, OTP relay, ERP connectivity, and internal LAN communication.",
    what: [
      "Automated Outlook email ingestion and routing",
      "OTP relay workflow for secure internal communications",
      "Odoo ERP integration for order and operations data",
      "LAN-based inter-system communication layer",
    ],
    tech: ["Python", "Odoo ERP", "REST APIs", "Email Automation", "Windows Services"],
    value: "$1,500",
  },
];

const services = [
  {
    title: "Computer Vision & Perception",
    desc: "Detection, classification, segmentation, and tracking systems, from prototype to production.",
  },
  {
    title: "Automation & Integration",
    desc: "Connecting business systems, eliminating manual workflows, and building reliable background processes.",
  },
  {
    title: "AI-Powered Applications",
    desc: "RAG pipelines, LLM integrations, and ML-backed features woven into production software.",
  },
  {
    title: "Full-Stack Web",
    desc: "End-to-end MERN or FastAPI applications, APIs, dashboards, and real-time features.",
  },
];

export default function Studio() {
  return (
    <main>
      {/*  Studio Hero  */}
      <section className="pt-36 pb-20 border-b border-[color:var(--line)]">
        <div className="container">
          {/* Wordmark */}
          <div className="flex items-center gap-3 mb-10">
            <img
              src="/Logo.png"
              alt="theTwoCubes"
              width={28}
              height={28}
              style={{ objectFit: "contain" }}
            />
            <span
              className="font-semibold text-[color:var(--ink)]"
              style={{ fontSize: "1rem", fontFamily: "var(--font-body)", letterSpacing: "-0.01em" }}
            >
              theTwoCubes
            </span>
          </div>

          <div className="max-w-2xl">
            <h1
              className="text-[color:var(--ink)]"
              style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)" }}
            >
              Software that ships.
            </h1>
            <br />
            <p
              className="mt-6 text-[color:var(--ink-muted)] leading-relaxed"
              style={{ fontSize: "1.0625rem", maxWidth: "620px" }}
            >
              theTwoCubes is a software engineering studio founded at IIT Mandi. 
              We partner with startups and businesses to design, build, and deploy scalable software, from AI-powered 
              automation and web applications to custom business solutions, taking projects from initial discovery to production
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://thetwocubes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                thetwocubes.com <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a href="mailto:akshatmittal2024@gmail.com" className="btn btn-outline">
                Get in touch
              </a>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-16 pt-10 border-t border-[color:var(--line)] grid grid-cols-2 md:grid-cols-3 gap-8 max-w-lg">
            <div>
              <p className="text-2xl font-semibold text-[color:var(--ink)]" style={{ letterSpacing: "-0.03em" }}>
                $2,500
              </p>
              <p className="text-xs text-[color:var(--ink-faint)] mt-1 uppercase tracking-widest font-medium">
                Delivered
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[color:var(--ink)]" style={{ letterSpacing: "-0.03em" }}>
                2
              </p>
              <p className="text-xs text-[color:var(--ink-faint)] mt-1 uppercase tracking-widest font-medium">
                In Production
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[color:var(--ink)]" style={{ letterSpacing: "-0.03em" }}>
                Aug '25
              </p>
              <p className="text-xs text-[color:var(--ink-faint)] mt-1 uppercase tracking-widest font-medium">
                Founded
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  What we build  */}
      <section className="section-white py-20 border-b border-[color:var(--line)]">
        <div className="container">
          <p className="eyebrow mb-10">Services</p>
          <br />
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10 max-w-3xl">
            {services.map((s) => (
              <div key={s.title}>
                <h3
                  className="font-semibold text-[color:var(--ink)] mb-2"
                  style={{ fontSize: "0.9375rem" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[color:var(--ink-muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Delivered  */}
      <section className="py-20">
        <div className="container">
          <p className="eyebrow mb-10">Delivered</p>
          <br />
          <div className="space-y-12">
            {deliveries.map((d, i) => (
              <div
                key={d.id}
                className={`grid md:grid-cols-[280px_1fr] gap-8 md:gap-16 ${i < deliveries.length - 1 ? "pb-12 border-b border-[color:var(--line)]" : ""
                  }`}
              >
                {/* Meta */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="inline-block px-2 py-0.5 text-xs font-medium rounded"
                      style={{
                        background: "var(--accent-bg)",
                        color: "var(--accent)",
                        borderRadius: "var(--r-xs)",
                      }}
                    >
                      {d.status}
                    </span>
                  </div>
                  {d.clientHref ? (
                    <a
                      href={d.clientHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[color:var(--ink)] hover:text-[color:var(--accent)] transition-colors mt-2 inline-block"
                      style={{ fontSize: "1rem" }}
                    >
                      {d.client} ↗
                    </a>
                  ) : (
                    <p className="font-semibold text-[color:var(--ink)] mt-2" style={{ fontSize: "1rem" }}>
                      {d.client}
                    </p>
                  )}
                  <p className="text-xs text-[color:var(--ink-faint)] mt-1.5 uppercase tracking-wide font-medium">
                    {d.type}
                  </p>
                  <p
                    className="mt-3 text-sm font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {d.value}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {d.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm text-[color:var(--ink-muted)] leading-relaxed mb-6">
                    {d.description}
                  </p>
                  <ul className="space-y-3">
                    {d.what.map((w) => (
                      <li key={w} className="flex items-start gap-3 text-sm text-[color:var(--ink-muted)] leading-relaxed">
                        <span className="dot mt-[9px] flex-shrink-0" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  CTA  */}
      <section className="section-white py-20 border-t border-[color:var(--line)]">
        <div className="container max-w-2xl">
          <p className="eyebrow mb-4">Open to Work</p>
          <br />
          <h2
            className="text-[color:var(--ink)] mb-4"
            style={{ fontSize: "1.75rem" }}
          >
            Have a project in mind?
          </h2>
          <p className="text-sm text-[color:var(--ink-muted)] leading-relaxed mb-8" style={{ maxWidth: "460px" }}>
            theTwoCubes takes on well-scoped software problems, particularly in computer
            vision, automation, and AI-integrated applications. Reach out with a brief
            description and we'll set up a call.
          </p>
          <br />
          <div className="flex flex-wrap gap-3">
            <a href="mailto:akshatmittal2024@gmail.com" className="btn btn-outline">
              akshatmittal2024@gmail.com
            </a>
            <a
              href="https://thetwocubes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              thetwocubes.com <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
