const experience = [
  {
    title: "Founder",
    org: "theTwoCubes",
    orgHref: "https://thetwocubes.com",
    period: "Oct 2024 – Present",
    points: [
      "Founded and lead a software consulting studio, delivering production software while managing end-to-end product development, deployment, and client communication.",
      "Delivered a computer vision system using YOLOv11 and OpenCV, automatically detects optimal logo placement on garments; in production handling large image volumes.",
      "Delivered a back-office automation platform integrating Outlook email processing, OTP relay workflows, Odoo ERP, and LAN communication, reducing manual intervention significantly.",
    ],
  },
  {
    title: "Inter IIT Tech Meet 14.0",
    org: "Algorithmic Trading, Ebullient Securities",
    orgHref: null,
    period: "December 2025",
    points: [
      "Developed a modular Python pipeline for preprocessing, feature engineering, model training, and large-scale backtesting on 1-second financial tick data spanning one year.",
      "Designed a regime-aware gated LSTM with attention, achieving 26.16% annualized returns, Calmar ratio of 20.60, and −1.27% maximum drawdown.",
    ],
  },
];

const skillBlocks = [
  { title: "Languages", items: ["Python", "C", "C++", "SQL", "Bash"] },
  { title: "Frameworks", items: ["PyTorch", "Scikit-Learn", "React", "Express.js", "FastAPI"] },
  { title: "Tools", items: ["Linux", "Git", "Docker", "ROS2", "Nginx", "Vim"] },
  { title: "Concepts", items: ["ML / Deep Learning", "Data Structures", "OOP", "Shell Scripting", "UNIX Processes"] },
];

const achievements = [
  { title: "HCLTech x IIT Mandi DL Hackathon'26", result: "1st place", detail: "50+ teams" },
  { title: "KrackHack'25", result: "1st place", detail: "100+ teams · GDG IIT Mandi" },
];

const leadership = [
  {
    role: "Coordinator",
    org: "ACM, IIT Mandi",
    detail: "Leading technical initiatives, organizing competitive programming contests, designing and validating problem sets, and mentoring students through workshops and coding sessions.",
  },
  {
    role: "ML Developer",
    org: "Google Developers Group, IIT Mandi",
    detail: "Organized KrackHack 2026 for 800+ participants, leading the ML track, problem design, sponsorship coordination, and community engagement.",
  },
  {
    role: "Academic Sub-Counselor",
    org: "Computer Science Batch 2024",
    detail: "Mentored junior CSE students on academics and campus life.",
  },
];

export default function About() {
  return (
    <main>
      {/* Header*/}
      <section className="pt-36 pb-16">
        <div className="container">
          <p className="eyebrow">Background</p>
          <h1
            className="mt-4 text-[color:var(--ink)]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
          >
            About
          </h1>
          <br />
          <p
            className="text-[color:var(--ink-muted)] mt-4 leading-relaxed"
            style={{ fontSize: "1.0625rem", maxWidth: "520px" }}
          >
            Third-year Computer Science student at IIT Mandi, passionate about building
            intelligent software, scalable systems, and AI-powered products.
            My work spans production-grade applications, automation platforms, backend engineering, and machine learning.

          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="section-white py-20 border-t border-[color:var(--line)]">
        <div className="container">
          <p className="eyebrow mb-10">Experience</p>
          <br/>
          <div className="space-y-12">
            {experience.map((item, i) => (
              <div
                key={item.title}
                className={`grid md:grid-cols-[260px_1fr] gap-8 md:gap-16 ${i < experience.length - 1
                  ? "pb-12 border-b border-[color:var(--line)]"
                  : ""
                  }`}
              >
                {/* Meta */}
                <div>
                  <p className="font-semibold text-[color:var(--ink)]" style={{ fontSize: "1rem" }}>
                    {item.title}
                  </p>
                  {item.orgHref ? (
                    <a
                      href={item.orgHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[color:var(--accent)] mt-1.5 leading-snug hover:underline inline-block"
                    >
                      {item.org} ↗
                    </a>
                  ) : (
                    <p className="text-sm text-[color:var(--ink-muted)] mt-1.5 leading-snug">{item.org}</p>
                  )}
                  <p className="text-xs text-[color:var(--ink-faint)] mt-2 font-medium tracking-wide uppercase">
                    {item.period}
                  </p>
                </div>

                {/* Points */}
                <ul className="space-y-4">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3.5 text-sm text-[color:var(--ink-muted)] leading-relaxed">
                      <span className="dot mt-[9px] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education + Skills */}
      <section className="py-20 border-t border-[color:var(--line)]">
        <div className="container">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20">

            {/* Education */}
            <div>
              <p className="eyebrow mb-6">Education</p>
              <br />
              <h3
                className="font-semibold text-[color:var(--ink)]"
                style={{ fontSize: "1.125rem", lineHeight: 1.3 }}
              >
                Indian Institute of Technology, Mandi
              </h3>
              <p className="text-sm text-[color:var(--ink-muted)] mt-2">
                B.Tech in Computer Science and Engineering
              </p>
              <p className="text-xs text-[color:var(--ink-faint)] mt-1 uppercase tracking-wide font-medium">
                Aug 2024 – Present
              </p>

              <div className="mt-8 panel p-6 inline-block">
                <p className="eyebrow">CGPA</p>
                <p
                  className="font-semibold mt-2 text-[color:var(--ink)]"
                  style={{ fontFamily: "var(--font-body)", fontSize: "2.5rem", letterSpacing: "-0.04em", lineHeight: 1 }}
                >
                  9.7
                  <span className="font-normal text-[color:var(--ink-faint)]" style={{ fontSize: "1.25rem" }}>
                    {" "}/10
                  </span>
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs text-[color:var(--ink-faint)] uppercase tracking-wide font-medium mb-2">
                  Coursework
                </p>
                <p className="text-sm text-[color:var(--ink-muted)] leading-relaxed">
                  Data Structures & Algorithms, Design of Algorithms, DBMS,
                  Formal Languages & Automata Theory, Computer Organization,
                  Machine Learning, Deep Learning
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="eyebrow mb-6">Skills</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                {skillBlocks.map((block) => (
                  <div key={block.title}>
                    <p className="text-xs font-medium uppercase tracking-widest text-[color:var(--ink-faint)] mb-3">
                      {block.title}
                    </p>
                    <p className="text-sm text-[color:var(--ink-muted)] leading-relaxed">
                      {block.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section-dark py-20">
        <div className="container">
          <p className="eyebrow-light mb-10">Recognition</p>
          <br/>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Competitions */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-6">
                Competitions
              </p>
              <div>
                {achievements.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start justify-between gap-6 py-4 border-b border-white/10 last:border-0"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white truncate">{item.title}</p>
                      <p className="text-xs text-white/40 mt-0.5">{item.detail}</p>
                    </div>
                    <p className="text-sm font-medium text-white/60 whitespace-nowrap flex-shrink-0">
                      {item.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-6">
                Leadership & Activities
              </p>
              <br />
              <div className="space-y-6">
                {leadership.map((item) => (
                  <div key={item.role} className="space-y-1">
                    <p className="text-sm font-medium text-white">{item.role}</p>
                    <p className="text-xs text-white/50">{item.org}</p>
                    <p className="text-sm text-white/50 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
