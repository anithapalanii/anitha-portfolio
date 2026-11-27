import React from "react";

const themes = {
  purple: {
    border: "border-purple-500/50 hover:border-purple-400",
    glow: "shadow-purple-600/20",
    accent: "from-purple-600/20",
    icon: "bg-purple-500/20 text-purple-300 ring-purple-400/40",
    badge: "border-purple-400/30 bg-purple-500/10 text-purple-200",
  },
  cyan: {
    border: "border-cyan-500/50 hover:border-cyan-400",
    glow: "shadow-cyan-500/20",
    accent: "from-cyan-600/20",
    icon: "bg-cyan-500/20 text-cyan-300 ring-cyan-400/40",
    badge: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
  },
  emerald: {
    border: "border-emerald-500/50 hover:border-emerald-400",
    glow: "shadow-emerald-500/20",
    accent: "from-emerald-600/20",
    icon: "bg-emerald-500/20 text-emerald-300 ring-emerald-400/40",
    badge: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
  },
};

// span = how many of the 3 desktop columns the card takes
const groups = [
  { title: "Languages", icon: "</>", span: "md:col-span-1", theme: "purple", items: ["HTML5", "CSS3", "JavaScript"] },
  { title: "Frameworks and libraries", icon: "{ }", span: "md:col-span-1", theme: "cyan", items: ["React.js", "Tailwind CSS", "Bootstrap"] },
  {
    title: "API integration",
    icon: "⇄",
    span: "md:col-span-1",
    theme: "emerald",
    items: ["REST APIs", "Axios", "Fetch API", "Redux", "Multipart file uploads"],
  },
  {
    title: "Web design",
    icon: "▭",
    span: "md:col-span-2",
    theme: "purple",
    items: ["Responsive design", "Website development", "Cross-browser compatibility"],
  },
  { title: "Tools", icon: "⌥", span: "md:col-span-1", theme: "cyan", items: ["Git", "GitHub", "Postman"] },
  {
    title: "Concepts",
    icon: "✓",
    span: "md:col-span-3",
    theme: "emerald",
    items: ["CRUD operations", "Form handling and validation", "State management"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#030817] bg-[radial-gradient(ellipse_at_100%_0%,#1e1b4b_0%,#0a1030_40%,#030817_75%)] px-5 py-16 md:px-10">
      {/* background blobs */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-700/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            My <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-2xl text-cyan-400">{"</>"}</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {groups.map((g) => {
            const t = themes[g.theme];
            return (
              <article
                key={g.title}
                className={`${g.span} group rounded-[28px] border ${t.border} bg-gradient-to-br ${t.accent} via-[#0b1227] to-[#06101b] p-5 shadow-2xl ${t.glow} transition duration-500 hover:-translate-y-1`}>
                <div className="flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-bold ring-1 ${t.icon}`}>
                    {g.icon}
                  </span>
                  <h3 className="font-display text-lg font-medium text-white">{g.title}</h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className={`rounded-full border px-3 py-1.5 text-xs font-medium ${t.badge}`}>
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
