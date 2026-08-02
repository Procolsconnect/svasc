import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { pages, COLLEGE } from "@/data/site";
import campus from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVASC College of Arts and Science, Erode | Official Site" },
      {
        name: "description",
        content:
          "NAAC-accredited SVASC College of Arts and Science, Erode — explore our cells, clubs, placement training and student development initiatives.",
      },
      { property: "og:title", content: "SVASC College of Arts and Science, Erode" },
      {
        property: "og:description",
        content:
          "Industry-aligned programmes, a student-centric approach and fifteen active cells and clubs at SVASC, Erode.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "NAAC", label: "Accredited Institution" },
  { value: "12+", label: "Active Cells & Clubs" },
  { value: "2026", label: "Action Plan Year" },
  { value: "100%", label: "Student Centric" },
];

function Index() {
  return (
    <main>
      <Hero
        priority
        eyebrow="Erode · Tamil Nadu"
        title="Why SVASC?"
        subtitle="Located in Erode, SVASC College of Arts and Science is a NAAC-accredited institution known for its industry-aligned programmes and student-centric approach."
        image="campus"
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-14 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="px-4 text-center">
              <p className="font-display text-4xl font-bold" style={{ color: "var(--gold-deep)" }}>
                {s.value}
              </p>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">The Institution</p>
            <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
              An education that reaches beyond the classroom
            </h2>
            <div className="rule-gold mt-6" />
            <p className="mt-7 leading-relaxed text-muted-foreground">
              {COLLEGE.name} nurtures competence, character and community spirit. Every cell and club
              on campus carries its own vision, mission and annual action plan — from the National
              Service Scheme in the villages of Erode to the Placement &amp; Training Cell that
              prepares students for global careers.
            </p>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-3 border-b-2 pb-1 text-sm uppercase tracking-[0.22em] transition-colors"
              style={{ borderColor: "var(--gold)", color: "var(--gold-deep)" }}
            >
              About the college <ArrowUpRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-5 -right-5 h-full w-full"
                style={{ border: "1px solid var(--gold)" }}
              />
              <img
                src={campus}
                alt="SVASC campus at golden hour"
                loading="lazy"
                width={1920}
                height={1080}
                className="relative h-[420px] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow">Cells &amp; Clubs</p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Life at SVASC</h2>
            <div className="rule-gold mt-6" />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pages.map((p, i) => (
              <Reveal key={p.slug} delay={i * 55}>
                <Link to={p.slug} className="surface-card group block h-full rounded-sm p-8">
                  <span
                    className="font-display text-sm tabular-nums"
                    style={{ color: "var(--gold-deep)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.intro}</p>
                  <span
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]"
                    style={{ color: "var(--gold-deep)" }}
                  >
                    Explore
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="eyebrow">Join Us</p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Begin your journey at SVASC
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Reach out to the office for admissions, club participation or collaboration with any of
              our cells.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-block rounded-sm px-10 py-4 text-sm font-medium uppercase tracking-[0.24em] transition-transform duration-500 hover:-translate-y-1"
              style={{ background: "var(--gradient-gold)", color: "var(--ink)" }}
            >
              Contact the college
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
