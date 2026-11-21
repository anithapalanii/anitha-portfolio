import React from "react";
// TODO: add a PNG of yourself with a transparent background (waist-up, like the reference)
import profile from "../assets/images/profile.png";
// import image from "../assets/images/"

const techBadges = [
  { label: "HTML", className: "left-[8%] top-[18%] bg-red-700 text-white", delay: "0s" },
  { label: "CSS", className: "left-[-4%] top-[48%] bg-sky-600 text-white", delay: "0.8s" },
  { label: "JS", className: "left-[6%] top-[76%] bg-neutral-900 text-yellow-300 border border-yellow-300/40", delay: "1.6s" },
  { label: "React", className: "right-[2%] top-[42%] bg-neutral-900 text-cyan-300 border border-cyan-300/40", delay: "0.4s" },
  { label: "Bootstrap", className: "right-[2%] top-[74%] bg-purple-400 text-white border border-purple-300/40", delay: "0.4s" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex md:min-h-[calc(100vh-4rem)] min-h-[calc(100vh-6rem)] items-center overflow-hidden bg-black bg-[radial-gradient(ellipse_at_85%_100%,#7c2d12_0%,#2a1004_40%,#000_75%)] px-5  md:px-10">
      <style>{`
        @keyframes floaty { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        .floaty { animation: floaty 4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .floaty { animation: none; } }
      `}</style>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* Left: text */}
        <div className="relative z-10">
          <p className="text-lg text-gray-400">
            I am <span className="font-semibold text-red-700">Anitha </span>
          </p>

          <h1 className="mt-2 font-display text-4xl font-light leading-[1.05] tracking-tight text-white md:text-5xl">Frontend Developer</h1>

          <p className="mt-6 max-w-md leading-7 text-gray-300">
            I build responsive React interfaces and connect them to REST APIs. At Zenfuture I work on a textile management app and a company website.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="rounded-2xl bg-red-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-600">
              Hire me
            </a>
            <a
              href="#contact"
              aria-label="Send a message"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-red-500 hover:text-red-500">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="M4 8l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="mt-10 h-px w-full max-w-md bg-gradient-to-r from-red-700/60 to-transparent" />

          {/* Glass card */}
          {/* <div className="mt-8 max-w-sm rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
            <p className="text-sm leading-6 text-gray-100">
              Currently building a textile management app at Zenfuture, with React, Tailwind and REST APIs.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">N</span>
              <div>
                <p className="text-sm font-medium text-white">Nithitex</p>
                <p className="text-xs text-gray-400">Current project</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right: orbit rings, floating tech badges, photo */}
        <div className="relative mx-auto hidden h-[560px] w-full max-w-md md:block">
          {/* orbit rings */}
          <div className="absolute left-1/2 top-[50%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-[50%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
          <div className="absolute left-1/2 top-[50%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />

          {/* glow behind person */}
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/30 blur-3xl" />

          {techBadges.map((b) => (
            <span
              key={b.label}
              style={{ animationDelay: b.delay }}
              className={`floaty absolute z-20 rounded-xl px-3 py-2 text-sm font-bold shadow-lg ${b.className}`}>
              {b.label}
            </span>
          ))}

          <img src={profile} alt="Anitha Palani" className="absolute bottom-25  left-1/2 z-10 h-[350px] -translate-x-1/2 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
