import { site } from "@/lib/site";

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "8 yrs", label: "In business" },
  { value: "98%", label: "Client retention" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative gradient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-100 via-white to-white dark:from-violet-950/50 dark:via-zinc-950 dark:to-zinc-950" />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-violet-400/40 blur-3xl animate-blob sm:h-96 sm:w-96 dark:bg-violet-600/30" />
        <div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl animate-blob [animation-delay:-6s] sm:h-96 sm:w-96 dark:bg-fuchsia-600/20" />
        <div className="absolute top-60 left-1/2 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl animate-blob [animation-delay:-12s] dark:bg-sky-600/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(0_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] dark:bg-[linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="animate-fade-up mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-violet-700 backdrop-blur dark:border-violet-900 dark:bg-zinc-900/70 dark:text-violet-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Now booking projects for 2027
        </p>

        <h1 className="animate-fade-up font-display text-5xl font-bold tracking-tight [animation-delay:100ms] sm:text-6xl md:text-7xl lg:text-8xl">
          {site.name.split(" ")[0]}{" "}
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
            {site.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-zinc-600 [animation-delay:200ms] sm:text-xl dark:text-zinc-400">
          {site.tagline} Strategy, design and code — under one roof.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 [animation-delay:300ms] sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:shadow-xl hover:shadow-violet-500/40 sm:w-auto"
          >
            Get Started
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.64l-4.22-4.22a.75.75 0 111.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.22-4.22H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-white/60 px-8 py-4 font-semibold backdrop-blur transition hover:border-zinc-400 hover:bg-white sm:w-auto dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-900"
          >
            View Work
          </a>
        </div>

        <dl className="animate-fade-up mx-auto mt-16 grid max-w-xl grid-cols-3 gap-6 [animation-delay:400ms]">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold sm:text-4xl">{s.value}</dd>
              <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
