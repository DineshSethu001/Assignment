import { site } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";

const details = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Studio", value: "Bengaluru, India · Remote worldwide" },
  { label: "Response time", value: "Within one business day" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-50 py-24 sm:py-32 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Tell us a little about your project and we'll get back to you with next steps."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 p-8 text-white">
              <h3 className="font-display text-2xl font-semibold">Start a project</h3>
              <p className="mt-3 text-white/80">
                Whether it&apos;s a full rebrand or a quick landing page, we&apos;d love to hear from you.
              </p>
              <dl className="mt-8 space-y-6">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt className="text-sm text-white/70">{d.label}</dt>
                    <dd className="mt-1 font-medium">
                      {d.href ? (
                        <a href={d.href} className="underline-offset-4 hover:underline">
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
