import { createFileRoute } from '@tanstack/react-router'
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { COLLEGE, pages } from "@/data/site";
import students from "@/assets/hero-students.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SVASC College of Arts and Science, Erode" },
      {
        name: "description",
        content:
          "About SVASC College of Arts and Science, Erode — a NAAC-accredited institution with industry-aligned programmes and a student-centric approach.",
      },
      { property: "og:title", content: "About SVASC College of Arts and Science" },
      {
        property: "og:description",
        content: "A NAAC-accredited institution in Erode with twelve active cells and clubs.",
      },
    ],
  }),
  component: About,
});

const pillars = [
  {
    title: "Academic Excellence",
    body: "Outcome-based education, innovative teaching-learning practices and continuous quality enhancement guided by the IQAC.",
  },
  {
    title: "Service & Citizenship",
    body: "NSS, Rotaract, JCI and the Consumer Protection Club take students into the community throughout the academic year.",
  },
  {
    title: "Research & Innovation",
    body: "The R&D Cell and II&EDC nurture publications, IPR awareness, prototypes and student start-ups.",
  },
  {
    title: "Career Readiness",
    body: "The Placement & Training Cell delivers a semester-wise aptitude, communication and interview readiness plan.",
  },
];

function About() {
  return (
    <main>
      <Hero
        eyebrow="Our Story"
        title="About SVASC"
        subtitle="A NAAC-accredited institution in Erode shaping competent professionals and responsible citizens."
        image="students"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="eyebrow">The Institution</p>
            <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
              {COLLEGE.name}
            </h2>
            <div className="rule-gold mt-6" />
            <p className="mt-7 leading-relaxed text-muted-foreground">
              Located in {COLLEGE.place}, SVASC is known for its industry-aligned programmes and a
              student-centric approach. Learning here extends well past the lecture hall: twelve
              dedicated cells and clubs run their own vision, mission, objectives and annual action
              plans, giving every student a place to lead, serve and build.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Quality is coordinated institution-wide by the Internal Quality Assurance Cell, while
              the Internal Grievances Committee safeguards a fair and respectful environment for
              students, faculty and staff alike.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <img
              src={students}
              alt="Students studying together in the SVASC library"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full max-h-[460px] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12">
            <p className="eyebrow">What We Stand For</p>
            <h2 className="mt-4 font-display text-4xl font-bold">Four Pillars</h2>
            <div className="rule-gold mt-6" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="surface-card h-full rounded-sm p-8">
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-10">
            <p className="eyebrow">Directory</p>
            <h2 className="mt-4 font-display text-4xl font-bold">Cells &amp; Clubs at a glance</h2>
            <div className="rule-gold mt-6" />
          </Reveal>
          <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {pages.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 40} className="flex gap-4 border-b border-border pb-4">
                <span className="tabular-nums" style={{ color: "var(--gold-deep)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{p.title}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
