import React from "react";

import RESUME_URL from "../assets/Pdf/Anitha.pdf";

const facts = [
  {
    value: "1 year",
    label: "Professional experience",
    card: "border-purple-500/50 from-purple-600/20",
    text: "text-purple-300",
  },
  {
    value: "2",
    label: "Applications shipped",
    card: "border-cyan-500/50 from-cyan-600/20",
    text: "text-cyan-300",
  },
  {
    value: "B.Sc. CS",
    label: "Sri Vijay Vidyalaya College, 2023",
    card: "border-emerald-500/50 from-emerald-600/20",
    text: "text-emerald-300",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030817] bg-[radial-gradient(ellipse_at_85%_0%,#1e1b4b_0%,#0a1030_40%,#030817_75%)] px-5 py-16 md:px-10">
      {/* background blobs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            About <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">me</span>
          </h2>
          <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-2xl text-cyan-400">{"</>"}</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[28px] border border-purple-500/50 bg-gradient-to-br from-purple-600/20 via-[#0b1227] to-[#06101b] p-6 shadow-2xl shadow-purple-600/20 md:p-8">
            <p className="max-w-xl leading-8 text-gray-200">
              I'm a junior frontend developer at Zenfuture Private Limited. I turn designs into responsive, accessible pages with React.js, Tailwind
              CSS and Bootstrap, and I connect them to Spring Boot backends through REST APIs.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-gray-400">
              I like reusable components, clean forms and code that the next developer can read without asking me.
            </p>
          </div>

          <div className="flex w-full md:items-center">
            <div className="w-full">
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className={`w-full rounded-2xl border bg-gradient-to-br ${f.card} via-[#0b1227] to-[#06101b] p-5 transition duration-500 hover:-translate-y-1`}>
                    <p className={`font-display text-2xl font-bold ${f.text}`}>{f.value}</p>
                    <p className="mt-1 text-sm leading-5 text-gray-400">{f.label}</p>
                  </div>
                ))}
              </div>

              <a
                href={RESUME_URL}
                download="Anitha.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 text-xs text-white shadow-lg shadow-purple-600/30 transition hover:brightness-110">
                <i className="fi fi-tr-download"></i>
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;