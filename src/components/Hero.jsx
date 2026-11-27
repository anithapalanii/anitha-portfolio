import React from "react";
// TODO: add a PNG of yourself with a transparent background (waist-up, like the reference)
import profile from "../assets/images/profile.png";

const techBadges = [
  { label: "HTML5", className: "left-[3%] top-[25%] bg-orange-600 text-white shadow-lg shadow-orange-500/30", delay: "0s" },

  { label: "Redux Toolkit", className: "left-[36%] top-[10%] bg-purple-700 text-white shadow-lg shadow-purple-500/30", delay: "5s" },

  { label: "CSS3", className: "left-[-4%] top-[48%] bg-blue-600 text-white shadow-lg shadow-blue-500/30", delay: "0.8s" },

  {
    label: "JavaScript (ES6+)",
    className: "left-[-3%] top-[73%] bg-yellow-950 text-yellow-300 border border-yellow-400/40 shadow-lg shadow-yellow-500/20",
    delay: "1.6s",
  },

  {
    label: "React.js",
    className: "right-[-5%] top-[50%] bg-cyan-950 text-cyan-300 border border-cyan-400/40 shadow-lg shadow-cyan-500/30",
    delay: "0.4s",
  },

  { label: "Bootstrap 5", className: "right-[2%] top-[74%] bg-violet-700 text-white shadow-lg shadow-violet-500/30", delay: "0.4s" },

  { label: "REST API Integration", className: "right-[-6%] top-[25%] bg-emerald-700 text-white shadow-lg shadow-emerald-500/30", delay: "0.4s" },

  { label: "Tailwind CSS", className: "right-[40%] top-[85%] bg-sky-300 text-sky-950 shadow-lg shadow-sky-500/30", delay: "0.7s" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden bg-[#030817] bg-[radial-gradient(ellipse_at_85%_100%,#2e1065_0%,#0a1030_40%,#030817_75%)] px-5 md:min-h-[calc(100vh-4rem)] md:px-10">
      <style>{`
        @keyframes floaty { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        .floaty { animation: floaty 4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .floaty { animation: none; } }
      `}</style>

      {/* background blobs */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-purple-700/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-600/15 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* Left: text */}
        <div className="relative z-10">
          <p className="text-lg text-gray-400">
            I am <span className="bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text font-semibold text-transparent">Anitha</span>
          </p>

          <h1 className="mt-2 font-display text-4xl font-light leading-[1.05] tracking-tight text-white md:text-5xl">Frontend Developer</h1>

          <p className="mt-6 max-w-md leading-7 text-gray-300">
            I build responsive React interfaces and connect them to REST APIs. At Zenfuture I work on a textile management app and a company website.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition hover:brightness-110">
              Hire me
            </a>
            <a
              href="#contact"
              aria-label="Send a message"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-cyan-400 hover:text-cyan-300">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="M4 8l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="mt-10 h-px w-full max-w-md bg-gradient-to-r from-purple-500/60 via-cyan-500/30 to-transparent" />
        </div>

        {/* Right: orbit rings, floating tech badges, photo */}
        <div className="relative mx-auto hidden h-[560px] w-full max-w-md md:block">
          {/* orbit rings */}
          <div className="absolute left-1/2 top-[50%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/15" />
          <div className="absolute left-1/2 top-[50%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20" />
          <div className="absolute left-1/2 top-[50%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/25" />

          {/* glow behind person */}
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />

          {techBadges.map((b) => (
            <span
              key={b.label}
              style={{ animationDelay: b.delay }}
              className={`floaty absolute z-20 rounded-xl px-3 py-2 text-sm font-bold shadow-lg ${b.className}`}>
              {b.label}
            </span>
          ))}

          <img src={profile} alt="Anitha Palani" className="absolute bottom-25 left-1/2 z-10 h-[350px] -translate-x-1/2 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
