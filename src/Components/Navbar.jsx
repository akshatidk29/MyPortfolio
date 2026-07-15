import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work",   href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "About",  href: "/about" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (href) => location.pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-[color:var(--bg)]/90 backdrop-blur-md border-b border-[color:var(--line)]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">

            {/* Wordmark */}
            <Link
              to="/"
              className="font-semibold text-sm tracking-tight text-[color:var(--ink)] hover:text-[color:var(--ink-muted)] transition-colors duration-150"
              style={{ fontFamily: "var(--font-body)", letterSpacing: "-0.01em" }}
            >
              Akshat Mittal
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm transition-colors duration-150 ${
                    isActive(link.href)
                      ? "text-[color:var(--ink)] font-medium"
                      : "text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex items-center gap-4 pl-4 border-l border-[color:var(--line)]">
                <a
                  href="https://github.com/akshatidk29"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[color:var(--ink-faint)] hover:text-[color:var(--ink)] transition-colors duration-150"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-xs py-1.5 px-4"
                >
                  Resume
                </a>
              </div>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors p-1"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[color:var(--line)] bg-[color:var(--bg)]/95 backdrop-blur-md">
            <div className="container py-4 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`py-2.5 text-sm transition-colors duration-150 ${
                    isActive(link.href)
                      ? "text-[color:var(--ink)] font-medium"
                      : "text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-5 pt-4 mt-2 border-t border-[color:var(--line)]">
                <a
                  href="https://github.com/akshatidk29"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[color:var(--ink-faint)] hover:text-[color:var(--ink)] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors"
                >
                  Resume ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
