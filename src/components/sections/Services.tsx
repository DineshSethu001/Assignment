import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function Services() {
  return (
    <section id="services" className="bg-zinc-50 py-24 sm:py-32 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Services built around your growth"
          description="Small senior team, end-to-end capability. Pick one service or let us handle the whole journey."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-800">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-violet-100 text-violet-700 transition group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-fuchsia-500 group-hover:text-white dark:bg-violet-950 dark:text-violet-300">
                  <Icon name={service.icon} />
                </div>
                <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
