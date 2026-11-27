import React from "react";

const EMAIL = "anithaannie007@gmail.com";

const details = [
  {
    label: "Phone",
    value: "+91 74186 96525",
    href: "tel:+917418696525",
    tile: "border-purple-500/50 from-purple-600/20",
    iconStyle: "bg-purple-500/20 text-purple-300 ring-purple-400/40",
    hover: "hover:text-purple-300",
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "Location",
    value: "Dharmapuri, Tamil Nadu",
    tile: "border-cyan-500/50 from-cyan-600/20",
    iconStyle: "bg-cyan-500/20 text-cyan-300 ring-cyan-400/40",
    icon: (
      <>
        <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030817] bg-[radial-gradient(ellipse_at_50%_100%,#2e1065_0%,#0a1030_40%,#030817_75%)] px-5 py-24 md:px-10">
      {/* background blobs */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-purple-700/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl rounded-[28px] border border-purple-500/40 bg-gradient-to-br from-purple-600/15 via-[#0b1227] to-[#06101b] p-8 text-center shadow-2xl shadow-purple-600/20 md:p-14">
        <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
          Let's build something{" "}
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">together.</span>
        </h2>

        <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500" />
          <span className="text-2xl text-cyan-400">{"</>"}</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500" />
        </div>

        <p className="mx-auto mt-5 max-w-md text-sm text-gray-300">I'm looking for a frontend role where I can keep growing with React.</p>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-10 inline-flex max-w-full items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-2.5 text-sm text-white shadow-lg shadow-purple-600/30 transition hover:brightness-110">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0">
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="M4 8l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="break-all">{EMAIL}</span>
        </a>

        <dl className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          {details.map((d) => (
            <div key={d.label} className={`flex items-center gap-4 rounded-2xl border bg-gradient-to-br ${d.tile} via-[#0b1227] to-[#06101b] p-5`}>
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ring-1 ${d.iconStyle}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {d.icon}
                </svg>
              </span>
              <div>
                <dt className="text-sm text-gray-400">{d.label}</dt>
                <dd className="mt-0.5 text-white">
                  {d.href ? (
                    <a href={d.href} className={`transition-colors ${d.hover}`}>
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Contact;