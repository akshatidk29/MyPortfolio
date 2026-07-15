import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import projectsData from "../Data/Projects.json";

const categories = ["All", ...Array.from(new Set(projectsData.projects.map((p) => p.category)))];

export default function Work() {
  const [selected,  setSelected]  = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen">
      {/*  Header */}
      <section className="pt-36 pb-10">
        <div className="container">
          <p className="eyebrow">Archive</p>
          <h1
            className="mt-4 text-[color:var(--ink)]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
          >
            Projects
          </h1>
          <p
            className="text-[color:var(--ink-muted)] mt-4 leading-relaxed"
            style={{ fontSize: "1.0625rem", maxWidth: "480px" }}
          >
            Problem-led builds across AI/ML, robotics, and full-stack.
            Emphasis on measurable outcomes.
          </p>
        </div>
      </section>

      {/*  Category filter  */}
      <div className="border-y border-[color:var(--line)] sticky top-16 bg-[color:var(--bg)]/90 backdrop-blur-md z-10">
        <div className="container">
          <div className="flex items-center gap-1 py-2.5 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded whitespace-nowrap transition-colors duration-150 ${
                  activeTab === cat
                    ? "bg-[color:var(--ink)] text-white"
                    : "text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] hover:bg-[color:var(--line)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/*  Project grid  */}
      <div className="container py-10">
        {filtered.length === 0 ? (
          <p className="text-sm text-[color:var(--ink-muted)] py-12 text-center">
            No projects in this category.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="panel overflow-hidden cursor-pointer group transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                onClick={() => setSelected(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(project)}
              >
                {/* Thumbnail */}
                <div className="h-40 bg-[color:var(--bg)] overflow-hidden flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className="text-[color:var(--ink-faint)]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "3rem",
                        letterSpacing: "-0.03em",
                        fontWeight: "normal",
                      }}
                    >
                      {project.title.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="tag">{project.category}</span>
                    <span className="text-xs text-[color:var(--ink-faint)]">{project.date}</span>
                  </div>

                  <h3
                    className="font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors duration-150"
                    style={{ fontSize: "1rem", lineHeight: 1.25 }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-[color:var(--ink-muted)] mt-1.5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[color:var(--line)]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="text-[color:var(--ink-faint)] hover:text-[color:var(--ink)] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="text-[color:var(--ink-faint)] hover:text-[color:var(--ink)] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/*  Project detail modal  */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[3px] flex items-center justify-center p-4 z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[color:var(--surface)] max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl border border-[color:var(--line)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "modal-in 0.18s ease-out both" }}
          >
            <style>{`@keyframes modal-in { from { opacity:0; transform:scale(0.97) } to { opacity:1; transform:scale(1) } }`}</style>

            <div className="p-7">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h2
                    className="font-semibold text-[color:var(--ink)]"
                    style={{ fontSize: "1.5rem", lineHeight: 1.2 }}
                  >
                    {selected.title}
                  </h2>
                  <p className="text-sm text-[color:var(--ink-muted)] mt-1">{selected.subtitle}</p>
                  <div className="flex items-center gap-3 mt-2.5">
                    <span className="tag">{selected.category}</span>
                    <span className="text-xs text-[color:var(--ink-faint)]">{selected.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="text-[color:var(--ink-faint)] hover:text-[color:var(--ink)] transition-colors flex-shrink-0 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image */}
              {selected.image && (
                <div className="mb-7 rounded-lg overflow-hidden border border-[color:var(--line)] bg-[color:var(--bg)]">
                  <img src={selected.image} alt={selected.title} className="w-full h-52 object-cover" />
                </div>
              )}

              {/* Detail grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-5">
                  {selected.problem && (
                    <div>
                      <p className="eyebrow mb-2">Problem</p>
                      <p className="text-sm text-[color:var(--ink)] leading-relaxed">{selected.problem}</p>
                    </div>
                  )}
                  {selected.approach && (
                    <div>
                      <p className="eyebrow mb-2">Approach</p>
                      <p className="text-sm text-[color:var(--ink)] leading-relaxed">{selected.approach}</p>
                    </div>
                  )}
                  {selected.highlights?.length > 0 && (
                    <div>
                      <p className="eyebrow mb-2">Highlights</p>
                      <ul className="space-y-2">
                        {selected.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-[color:var(--ink)]">
                            <span className="dot mt-[8px] flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="space-y-5">
                  {selected.impact?.length > 0 && (
                    <div>
                      <p className="eyebrow mb-2">Impact</p>
                      <ul className="space-y-2">
                        {selected.impact.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-[color:var(--ink)]">
                            <span className="dot mt-[8px] flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selected.learnings?.length > 0 && (
                    <div>
                      <p className="eyebrow mb-2">Learnings</p>
                      <ul className="space-y-2">
                        {selected.learnings.map((l) => (
                          <li key={l} className="flex items-start gap-2.5 text-sm text-[color:var(--ink)]">
                            <span className="dot mt-[8px] flex-shrink-0" />
                            <span>{l}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Stack */}
              <div className="mt-7">
                <p className="eyebrow mb-3">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {selected.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-3 mt-7 pt-6 border-t border-[color:var(--line)]">
                {selected.github && (
                  <a href={selected.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <Github className="w-3.5 h-3.5" /> View Code
                  </a>
                )}
                {selected.live && (
                  <a href={selected.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
