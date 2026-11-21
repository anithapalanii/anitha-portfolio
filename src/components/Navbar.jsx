import React, { useState } from "react";

// TODO: put your resume PDF at /public/resume.pdf
const RESUME_URL = "/resume.pdf";

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

  const closeMenu = () => setMenuOpen(false);
  const handleClick = (path) => {
    setActive(path);
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <a href="#home" className="font-display text-2xl font-bold tracking-tight text-white">
          Anitha P<span className="text-red-600">.</span>
        </a>

        {/* Desktop: pill nav + resume button */}
        <div className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-1 rounded-full border border-white/20 px-2 py-1.5">
            {navLinks.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={() => handleClick(item.path)}
                  className={`block rounded-full px-5 py-1.5 text-sm transition-colors ${
                    active === item.path ? "text-red-700" : "text-gray-200 hover:text-red-600"
                  }`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* <a
            href={RESUME_URL}
            download
            className="flex items-center gap-2 rounded-full border border-orange-500/70 px-4 py-2 text-xs leading-tight text-white transition hover:bg-orange-600/20">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-400">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>
              Download
              <br />
              Resume
            </span>
          </a> */}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="z-[60] text-xl text-white md:hidden">
          <i className={`fi ${menuOpen ? "fi-rs-cross" : "fi-rs-bars-sort"}`}>w</i>
        </button>

        {/* Mobile overlay */}
        <div
          onClick={closeMenu}
          className={`fixed inset-0 z-40  bg-black/60 transition-opacity duration-300 md:hidden ${
            menuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        />

        {/* Mobile drawer */}
        <div
          className={`fixed right-0 top-0 z-50 flex h-screen w-72 flex-col bg-neutral-950 px-6 pt-20 shadow-xl transition-transform duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <ul className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={() => handleClick(item.path)}
                  className={`block rounded-lg px-3 py-3 text-base ${active === item.path ? "text-orange-500" : "text-gray-200"}`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a href={RESUME_URL} download className="mt-6 rounded-full border border-orange-500/70 px-5 py-2.5 text-center text-sm text-white">
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
