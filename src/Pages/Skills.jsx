import React from "react";

// span = how many of the 3 desktop columns the card takes
const groups = [
  { title: "Languages", icon: "</>", span: "md:col-span-1", items: ["HTML5", "CSS3", "JavaScript"] },
  { title: "Frameworks and libraries", icon: "{ }", span: "md:col-span-1", items: ["React.js", "Tailwind CSS", "Bootstrap"] },
  { title: "API integration", icon: "⇄", span: "md:col-span", items: ["REST APIs", "Axios", "Fetch API", "Redux", "Multipart file uploads"] },
  { title: "Web design", icon: "▭", span: "md:col-span-2", items: ["Responsive design", "Website development", "Cross-browser compatibility"] },
  { title: "Tools", icon: "⌥", span: "md:col-span-1", items: ["Git", "GitHub", "Postman"] },
  { title: "Concepts", icon: "✓", span: "md:col-span-2", items: ["CRUD operations", "Form handling and validation", "State management"] },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black bg-[radial-gradient(ellipse_at_100%_0%,#431407_0%,#140702_40%,#000_75%)] px-5 py-10 md:px-10">
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-red-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-light tracking-tight text-white md:text-5xl">Skills</h2>
        <div className="mt-6 h-px w-40 bg-gradient-to-r from-red-600 to-transparent" />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {groups.map((g) => (
            <article
              key={g.title}
              className={`${g.span} group rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur-md transition-colors hover:border-red-500/60`}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 font-mono text-sm font-bold text-red-400 ring-1 ring-red-500/40">
                  {g.icon}
                </span>
                <h3 className="font-display text-lg font-medium text-white">{g.title}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-sm text-gray-400 transition-colors group-hover:border-red-500/40 ">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
