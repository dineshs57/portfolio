import {
  ArrowUpRight,
  Award,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Trophy,
} from "lucide-react";
import {
  achievements,
  certifications,
  education,
  experience,
  focusAreas,
  profile,
  projects,
  skillGroups,
} from "@/data/profile";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, type RevealFrom } from "./Reveal";
import { Tilt } from "./Tilt";
import { Section, Tag } from "./Section";

const triple: RevealFrom[] = ["left", "bottom", "right"];

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="About me">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-7 md:col-start-4">
          <p className="text-lg leading-relaxed text-foreground/90">{profile.summary}</p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {profile.summaryExtra}
          </p>
        </Reveal>
      </div>
      <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:col-span-9 md:col-start-4 md:grid-cols-3">
          {focusAreas.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 80}
              from={triple[i % 3] ?? "bottom"}
              className="bg-surface p-6"
            >
              <p className="font-mono text-xs text-primary">0{i + 1}</p>
              <h3 className="mt-3 text-base font-medium text-foreground">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Technical skills"
      intro="Languages, frameworks and tools I use to build AI systems and web applications."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={(i % 3) * 80}
            from={triple[i % 3] ?? "bottom"}
            className={cn(
              "rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong",
              i === skillGroups.length - 1 &&
                skillGroups.length % 3 === 1 &&
                "sm:col-span-2 lg:col-span-3",
            )}
          >
            <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title="Featured projects"
      intro="Selected work in computer vision, deep learning and AI-driven applications."
    >
      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <Reveal key={project.index} from={i % 2 === 0 ? "left" : "right"}>
            <Tilt>
              <article className="group grid gap-8 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong md:grid-cols-12 md:p-10">
                <div className="md:col-span-1">
                  <p className="font-mono text-sm text-subtle-foreground">{project.index}</p>
                </div>
                <div className="md:col-span-7">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-primary"
                          aria-hidden
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <li key={t}>
                        <Tag>{t}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-between gap-6 md:col-span-4 md:items-end">
                  {project.metric ? (
                    <div className="md:text-right">
                      <p className="text-4xl font-semibold tracking-tight text-foreground">
                        {project.metric.value}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{project.metric.label}</p>
                    </div>
                  ) : (
                    <span />
                  )}
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} source on GitHub`}
                    >
                      <Github />
                      View on GitHub
                      <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="04 — Experience" title="Internship experience">
      {experience.map((job) => (
        <Reveal key={job.company} from="left">
          <article className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="font-mono text-sm text-foreground">{job.period}</p>
              <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
            </div>
            <div className="border-l border-border pl-6 md:col-span-9 md:pl-8">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">{job.role}</h3>
              <p className="mt-1 text-muted-foreground">
                {job.company} <span className="text-subtle-foreground">·</span> {job.project}
              </p>
              <ul className="mt-6 space-y-3">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed text-foreground/85">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {job.links.map((link) => (
                  <Button key={link.label} asChild variant="outline" size="sm">
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowUpRight />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="05 — Education" title="Education">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((ed, i) => (
          <Reveal
            key={ed.school}
            delay={i * 80}
            from={i % 2 === 0 ? "left" : "right"}
            className="rounded-xl border border-border bg-surface p-6 md:p-8"
          >
            <GraduationCap className="size-5 text-primary" aria-hidden />
            <h3 className="mt-5 text-lg font-medium text-foreground">{ed.school}</h3>
            <p className="mt-1 text-muted-foreground">{ed.degree}</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4 text-sm">
              <span className="font-mono text-muted-foreground">{ed.period}</span>
              <span className="text-foreground">{ed.score}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Credentials() {
  return (
    <Section id="certifications" eyebrow="06 — Recognition" title="Certifications & achievements">
      <div className="grid gap-12 md:grid-cols-2 md:gap-8">
        <Reveal from="left">
          <h3 className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Award className="size-4 text-primary" aria-hidden /> Certifications
          </h3>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {certifications.map((c) => (
              <li key={c.title} className="py-5">
                <p className="text-foreground">{c.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80} from="right">
          <h3
            id="achievements"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
          >
            <Trophy className="size-4 text-primary" aria-hidden /> Achievements
          </h3>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {achievements.map((a) => (
              <li key={a.title} className="py-5">
                <p className="text-foreground">{a.title}</p>
                {"detail" in a ? (
                  <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export function Contact() {
  const links = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Github, label: "GitHub", value: "github.com/dineshs57", href: profile.github },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dinesh-s-71670a299",
      href: profile.linkedin,
    },
  ] as const;

  return (
    <Section id="contact" eyebrow="07 — Contact" title="Let's work together">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal from="left" className="md:col-span-5">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm open to internships and opportunities in AI, machine learning and software
            development. The fastest way to reach me is by email.
          </p>
          <Button asChild size="lg" className="mt-8 h-11 px-6">
            <a href={`mailto:${profile.email}`}>
              <Mail />
              Send an email
            </a>
          </Button>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden /> {profile.location}
          </p>
        </Reveal>
        <Reveal delay={80} from="right" className="md:col-span-6 md:col-start-7">
          <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
            {links.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 px-5 py-5 transition-colors hover:bg-surface-raised"
                >
                  <span className="grid size-10 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:text-primary">
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="eyebrow block">{label}</span>
                    <span className="mt-0.5 block truncate text-sm text-foreground">{value}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-subtle-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-subtle-foreground sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
        </p>
        <a href="#home" className="transition-colors hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
