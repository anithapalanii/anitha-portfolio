import React from "react";
import varuvi from "../assets/images/varuvi.png";
import oms from "../assets/images/oms.png";
import nithi from "../assets/images/nithitex.png";
// Add these imports when you have the screenshots
// import nithitex from "../assets/images/nithitex.png";
// import oms from "../assets/images/oms.png";

const projects = [
  {
    name: "Nithitex",
    kind: "Textile Management Application",
    image: nithi, // nithitex
    theme: "purple",
    stack: ["React.js", "JavaScript", "Bootstrap", "CSS", "Redux Toolkit"],
    points: [
      "Built CRUD modules for employee management, inventory and product billing.",
      "Connected frontend with RESTful APIs using Axios and Fetch.",
      "Added form validation, state management and multipart file uploads.",
      "Fully responsive across desktop, tablet and mobile.",
    ],
    link: "",
  },
  {
    name: "Varuvi",
    kind: "Company Website",
    image: varuvi,
    theme: "blue",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    points: [
      "Built the responsive company website from scratch.",
      "Developed clean and user-friendly website layouts.",
      "Tested layouts across browsers and screen sizes.",
    ],
    link: "",
  },
  {
    name: "OMS",
    kind: "Product",
    image: oms, // oms
    theme: "green",
    stack: ["React.js", "JavaScript", "Bootstrap", "CSS", "Redux Toolkit"],
    points: [
      "Developed Employee Module with complete CRUD operations.",
      "Implemented Timesheet management functionality.",
      "Integrated role-based Menu Permissions.",
      "Developed Reports module for viewing and managing data.",
      "Built reusable and responsive UI components.",
    ],
    link: "",
  },
];

const themes = {
  purple: {
    border: "border-purple-500/70",
    glow: "shadow-purple-600/20",
    title: "text-purple-300",
    badge: "border-purple-400/30 bg-purple-500/10 text-purple-200",
    check: "bg-purple-500",
    accent: "from-purple-600/20",
  },
  blue: {
    border: "border-cyan-500/70",
    glow: "shadow-cyan-500/20",
    title: "text-cyan-300",
    badge: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
    check: "bg-cyan-500",
    accent: "from-cyan-600/20",
  },
  green: {
    border: "border-emerald-500/70",
    glow: "shadow-emerald-500/20",
    title: "text-emerald-300",
    badge: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
    check: "bg-emerald-500",
    accent: "from-emerald-600/20",
  },
};

const ScreenshotFrame = ({ name, image, theme }) => (
  <div className="group overflow-hidden rounded-xl border border-white/20 bg-[#080d1d] shadow-2xl transition duration-500 hover:-translate-y-1">
    {/* Browser header */}
    <div className="flex items-center gap-2 border-b border-white/10 bg-[#111827] px-3 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
      <span className="ml-3 rounded-full bg-white/5 px-4 py-1 text-[10px] text-gray-400">{name.toLowerCase()}.app</span>
    </div>

    {/* Screenshot */}
    {image ? (
      <div className="aspect-video overflow-hidden bg-white">
        <img
          src={image}
          alt={`${name} project screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
      </div>
    ) : (
      <div className={`flex aspect-video items-center justify-center bg-gradient-to-br ${themes[theme].accent} via-[#10182d] to-[#050816]`}>
        <div className="text-center">
          <div className="mb-3 text-4xl text-white/30">⌘</div>
          <p className="text-sm font-semibold text-white/70">{name}</p>
          <p className="mt-1 text-xs text-gray-500">Add your project screenshot</p>
        </div>
      </div>
    )}
  </div>
);

const Project = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#030817] px-5 py-20 md:px-8 lg:px-12">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-700/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            My <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-2xl text-cyan-400">{"</>"}</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {projects.map((p) => {
            const t = themes[p.theme];

            return (
              <article
                key={p.name}
                className={`group relative flex flex-col overflow-hidden rounded-[28px] border ${t.border} bg-gradient-to-br ${t.accent} via-[#0b1227] to-[#06101b] p-5 shadow-2xl ${t.glow} transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-6`}>
                {/* Project title */}
                <div className="mb-6 text-center">
                  <h3 className="text-3xl font-bold tracking-tight text-white">{p.name}</h3>
                  <p className={`mt-2 text-sm font-medium ${t.title}`}>{p.kind}</p>
                </div>

                {/* Project Screenshot */}
                <ScreenshotFrame name={p.name} image={p.image} theme={p.theme} />

                {/* Technology Stack */}
                <div className="my-6 flex flex-wrap justify-center gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className={`rounded-full border px-3 py-2 text-xs font-medium ${t.badge}`}>
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mb-5 h-px bg-white/10" />

                {/* Project Features */}
                <ul className="flex-1 space-y-4">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm leading-6 text-gray-200">
                      <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${t.check} text-xs font-bold text-white`}>
                        ✓
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* View Project */}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-7 inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10 ${t.badge}`}>
                    View Project <span>↗</span>
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
