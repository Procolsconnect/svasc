import { Mail, MapPin, Phone } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { COLLEGE, pages } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SVASC College of Arts and Science, Erode" },
      {
        name: "description",
        content:
          "Contact SVASC College of Arts and Science, Erode — office address, phone, email and coordinators of every cell and club.",
      },
      { property: "og:title", content: "Contact SVASC College, Erode" },
      {
        property: "og:description",
        content: "Reach the SVASC office or the coordinator of any cell or club.",
      },
    ],
  }),
  component: Contact,
});

function coordinatorOf(slug: string) {
  const page = pages.find((p) => p.slug === slug);
  const block = page?.blocks.find((b) => b.kind === "members");
  if (block && block.kind === "members") return block.items[0];
  return undefined;
}

function Contact() {
  return (
    <main>
      <Hero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Reach the college office, or write directly to the coordinator of any cell or club."
        image="campus"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          {[
            { icon: MapPin, label: "Campus", value: COLLEGE.place },
            { icon: Phone, label: "Phone", value: COLLEGE.phone },
            { icon: Mail, label: "Email", value: COLLEGE.email },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <div className="surface-card h-full rounded-sm p-9 text-center">
                <c.icon className="mx-auto" style={{ color: "var(--gold-deep)" }} />
                <p className="eyebrow mt-5">{c.label}</p>
                <p className="mt-3 font-display text-xl font-bold break-words">{c.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--cream)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-10">
            <p className="eyebrow">Coordinators</p>
            <h2 className="mt-4 font-display text-4xl font-bold">Cell &amp; Club Contacts</h2>
            <div className="rule-gold mt-6" />
          </Reveal>
          <div className="overflow-x-auto rounded-sm border border-border bg-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr style={{ background: "var(--gradient-gold)", color: "var(--ink)" }}>
                  <th className="px-5 py-4 font-semibold uppercase tracking-wide">Cell / Club</th>
                  <th className="px-5 py-4 font-semibold uppercase tracking-wide">Coordinator</th>
                  <th className="px-5 py-4 font-semibold uppercase tracking-wide">Contact</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((p) => {
                  const c = coordinatorOf(p.slug);
                  return (
                    <tr key={p.slug} className="border-t border-border transition-colors hover:bg-secondary">
                      <td className="px-5 py-4 font-medium">{p.title}</td>
                      <td className="px-5 py-4 text-muted-foreground">
                        {c ? `${c.name} · ${c.role}` : "College Office"}
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">
                        {c?.phone ? <span className="block">{c.phone}</span> : null}
                        <a
                          href={`mailto:${c?.email ?? COLLEGE.email}`}
                          className="block break-all hover:underline"
                        >
                          {c?.email ?? COLLEGE.email}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
