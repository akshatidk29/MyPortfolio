import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectsData from "../Data/Projects.json";
import HeroCube from "../Components/HeroCube";

const featured = projectsData.projects.filter((p) => p.featured).slice(0, 3);

export default function Home() {
  return (
    <main>
      {/*  Hero  */}
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
            <div className="hero-animate max-w-2xl">
              <p className="eyebrow-accent">CSE @ IIT Mandi · Founder, theTwoCubes</p>

              <h1
                className="mt-5 text-[color:var(--ink)]"
                style={{ fontSize: "clamp(3.25rem, 7vw, 5.5rem)" }}
              >
                Akshat Mittal
              </h1>
              <br />
              <p
                className="mt-6 text-[color:var(--ink-muted)] leading-relaxed"
                style={{ fontSize: "1.0625rem", maxWidth: "620px" }}
              >
                I'm a software engineer and founder of theTwoCubes, passionate about
                building intelligent software that solves real-world problems. My work
                spans AI powered automation, scalable backend systems, full-stack web
                applications, developer tools, and modern cloud-native software. I enjoy
                designing systems from the ground up, from architecture and APIs to clean
                user experiences, while continuously exploring new technologies in
                artificial intelligence and distributed systems.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-8">
                <Link to="/work" className="btn btn-outline">
                  View Work <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/studio" className="btn btn-outline">
                  Studio <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Resume ↗
                </a>
              </div>
            </div>

            <HeroCube />
          </div>
        </div>
      </section>

      {/*  Selected Work  */}
      <section className="section-white border-t border-[color:var(--line)] py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow">Work</p>
              <h2
                className="mt-2 text-[color:var(--ink)]"
                style={{ fontSize: "1.75rem" }}
              >
                Selected projects
              </h2>
            </div>
            <Link to="/work" className="link-arrow text-sm hidden md:inline-flex">
              All projects <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div>
            {featured.map((p, i) => (
              <Link
                key={p.id}
                to="/work"
                className="flex items-start gap-6 py-6 border-b border-[color:var(--line)] last:border-0 group -mx-4 px-4 rounded-sm transition-colors duration-150 hover:bg-[color:var(--accent-bg)]"
              >
                <span
                  className="flex-shrink-0 mt-0.5 w-7 text-xs text-[color:var(--ink-faint)]"
                  style={{ fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors duration-150">
                    {p.title}
                  </p>
                  <p className="text-sm text-[color:var(--ink-muted)] mt-1 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="flex-shrink-0 flex items-center gap-3 mt-0.5">
                  <span className="tag hidden sm:inline-block">{p.category}</span>
                  <ArrowUpRight className="w-4 h-4 text-[color:var(--ink-faint)] group-hover:text-[color:var(--accent)] transition-colors duration-150" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link to="/work" className="link-arrow text-sm">
              All projects <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
