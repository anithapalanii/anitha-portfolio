import React from "react";

// Keep this the same file as the Navbar's RESUME_URL
// const RESUME_URL = "../assets/Pdf/Anitha.pdf";
import RESUME_URL from "../assets/Pdf/Anitha.pdf";

const facts = [
  { value: "1 year", label: "Professional experience" },
  { value: "2", label: "Applications shipped" },
  { value: "B.Sc. CS", label: "Sri Vijay Vidyalaya College, 2023" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black bg-[radial-gradient (ellipse_at_85%_0%,#431407_0%,#1c0a03_40%,#000_75%)] px-5 py-16 md:px-10">
      {/* soft glow, bottom right */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-4xl font-light tracking-tight text-white md:text-5xl">About me</h2>
          <div className="mt-6 h-px w-40 bg-gradient-to-r from-red-600 to-transparent" />

          <div className="rounded-3xl mt-4 border border-white/15 bg-white/5 p-6 backdrop-blur-md md:p-8">
            <p className="max-w-xl leading-8 text-gray-200">
              I'm a junior frontend developer at Zenfuture Private Limited. I turn designs into responsive, accessible pages with React.js, Tailwind
              CSS and Bootstrap, and I connect them to Spring Boot backends through REST APIs.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-gray-400">
              I like reusable components, clean forms and code that the next developer can read without asking me.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="">
            <div className="mt-6 grid gap-4  sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md">
                  <dd className="font-display text-2xl font-bold text-red-700">{f.value}</dd>
                  <dt className="mt-1 text-sm leading-5 text-gray-400">{f.label}</dt>
                </div>
              ))}
            </div>

            <a
              href={RESUME_URL}
              download="Anitha.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-red-700 px-8 py-3 text-base font-medium text-white transition hover:bg-red-600">
              <i className="fi fi-tr-download"></i>
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
