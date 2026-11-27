import React, { useEffect, useState } from "react";

// TODO: confirm the resume file is at /public/resume.pdf
import resume from "../assets/Pdf/Anitha.pdf";

const RESUME_URL = resume;

const navLinks = [
  { path: "#home", name: "Home" },
  { path: "#about", name: "About" },
  { path: "#skills", name: "Skills" },
  { path: "#projects", name: "Projects" },
  { path: "#contact", name: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const handleClick = (path) => {
    setActive(path);
    setMenuOpen(false);
  };

  // Close mobile menu with the Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close mobile menu if the screen grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Highlight the link of the section currently in view
  // TODO: section ids must match navLinks (home, about, skills, projects, contact)
  useEffect(() => {
    const sections = navLinks.map((item) => document.querySelector(item.path)).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-80% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030817]/90 backdrop-blur-md">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <a href="#home" onClick={() => handleClick("#home")} className="font-display text-2xl font-bold text-white">
          Anitha P<span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">.</span>
        </a>

        {/* Desktop links (md and up) */}
        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={() => handleClick(item.path)}
                  className={`rounded-lg px-4 py-2 text-sm transition ${
                    active === item.path ? "bg-cyan-400/10 text-cyan-300" : "text-gray-200 hover:bg-white/5 hover:text-cyan-300"
                  }`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={RESUME_URL}
            download="Anitha_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-4 rounded-full border border-purple-400/60 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 px-5 py-2 text-sm text-white transition hover:from-purple-600/40 hover:to-cyan-500/40">
            Download Resume
          </a>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="z-[60] text-white transition hover:text-cyan-300 md:hidden">
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile dropdown */}
        <div
          id="mobile-menu"
          className={`absolute left-5 right-5 top-full mt-3 rounded-2xl border border-purple-500/30 bg-[#0b1227] p-5 shadow-xl shadow-purple-950/40 transition-all duration-300 md:hidden ${
            menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0 pointer-events-none"
          }`}>
          <ul className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={() => handleClick(item.path)}
                  className={`block rounded-lg px-4 py-3 text-sm transition ${
                    active === item.path ? "bg-cyan-400/10 text-cyan-300" : "text-gray-200 hover:bg-white/5 hover:text-cyan-300"
                  }`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={RESUME_URL}
            download="Anitha_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full border border-purple-400/60 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 px-4 py-3 text-center text-sm text-white">
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
