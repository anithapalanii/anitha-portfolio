import React from "react";
// TODO: add your screenshots, then uncomment these imports and use them in `image` below
// import nithitexImg from "../assets/images/nithitex.png";
// import varuviImg from "../assets/images/varuvi.png";

const projects = [
  {
    name: "Nithitex",
    kind: "Textile management application",
    image: "", // nithitexImg
    stack: ["React.js", "JavaScript", "Bootstrap", "CSS", "Redux Toolkit"],
    points: [
      "Built CRUD modules for employee management, inventory and product billing.",
      "Connected the frontend to RESTful APIs with Axios and Fetch.",
      "Added form validation, state management and multipart file uploads.",
      "Made every screen work on desktop, tablet and mobile.",
    ],
    link: "", // add live or GitHub URL
  },
  {
    name: "Varuvi",
    kind: "Company website",
    image: "", // varuviImg
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    points: ["Built the responsive company website from scratch.", "Tested layouts across browsers and screen sizes."],
    link: "", // add live URL
  },
];

const ScreenshotFrame = ({ name, image }) => (
  <div className="overflow-hidden rounded-2xl border border-white/15 bg-neutral-950 shadow-2xl shadow-orange-900/20">
    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-red-500" />
      <span className="h-3 w-3 rounded-full bg-yellow-500" />
      <span className="h-3 w-3 rounded-full bg-green-500" />
      <span className="ml-3 truncate rounded-full bg-white/5 px-3 py-0.5 text-xs text-gray-400">{name.toLowerCase()}.app</span>
    </div>

    {image ? (
      <img src={image} alt={`${name} screenshot`} loading="lazy" className="aspect-video w-full object-cover object-top" />
    ) : (
      <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-orange-950 via-neutral-950 to-black text-sm text-gray-500">
        Add a {name} screenshot
      </div>
    )}
  </div>
);

const Project = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black bg-[radial-gradient(ellipse_at_0%_100%,#431407_0%,#140702_40%,#000_75%)] px-5 py-10 md:px-10">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-light tracking-tight text-white md:text-5xl">Projects</h2>
        <div className="mt-6 h-px w-40 bg-gradient-to-r from-orange-600 to-transparent" />

        <div className="mt-12 space-y-8">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="grid items-center gap-8 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md md:grid-cols-2 md:p-8">
              {/* image side alternates */}
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <ScreenshotFrame name={p.name} image={p.image} />
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-400">{p.kind}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-full border  text-xs border-orange-500/40 bg-orange-600/10 px-3 py-1 text-orange-300">
                      {s}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 space-y-3 leading-7 text-gray-300">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm ">
                      <span className="mt-3 h-1.5 w-1.5 text-xs shrink-0 rounded-full bg-orange-500" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block rounded-full bg-orange-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-orange-500">
                    View {p.name}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
