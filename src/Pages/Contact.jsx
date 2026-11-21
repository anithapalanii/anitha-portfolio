import React from "react";

const EMAIL = "anithaannie007@gmail.com";

const details = [
  {
    label: "Phone",
    value: "+91 74186 96525",
    href: "tel:+917418696525",
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "Location",
    value: "Dharmapuri, Tamil Nadu",
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
      className="relative overflow-hidden bg-black bg-[radial-gradient(ellipse_at_50%_100%,#7c2d12_0%,#2a1004_40%,#000_75%)] px-5 py-24 md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur-md md:p-14">
        <h2 className="font-display text-4xl font-light tracking-tight text-white md:text-5xl">Let's build something together.</h2>
        <p className="mx-auto text-sm mt-4 max-w-md text-gray-300">I'm looking for a frontend role where I can keep growing with React.</p>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-10 inline-flex max-w-full items-center gap-3 rounded-full bg-red-700 px-6 py-3 text-base font-medium text-white transition hover:bg-red-600 sm:px-8 sm:text-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0">
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="M4 8l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="break-all">{EMAIL}</span>
        </a>

        <dl className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          {details.map((d) => (
            <div key={d.label} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-black/30 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600/20 text-red-600 ring-1 ring-red-500/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {d.icon}
                </svg>
              </span>
              <div>
                <dt className="text-sm text-gray-400">{d.label}</dt>
                <dd className="mt-0.5 text-white">
                  {d.href ? (
                    <a href={d.href} className="transition-colors hover:text-red-400">
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
