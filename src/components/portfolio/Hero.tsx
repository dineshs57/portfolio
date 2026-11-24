import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, quickFacts } from "@/data/profile";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-12 lg:gap-12">
        <div className="animate-in fade-in slide-in-from-left-16 duration-1000 lg:col-span-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            {profile.role}
          </p>

          <h1 className="mt-8 text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Building Intelligent Solutions{" "}
            <span className="text-muted-foreground">Through Technology</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'm <span className="text-foreground">{profile.name}</span>, an Information Technology
            student working across AI, machine learning, computer vision and software development.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-11 px-6">
              <a href="#projects">
                View Projects
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-6">
              <a href={profile.resumeUrl} download={profile.resumeFileName}>
                <Download />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="size-4" /> Email
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" /> {profile.location}
            </span>
          </div>
        </div>

        <aside
          aria-label="Quick facts"
          className="animate-in fade-in slide-in-from-right-16 self-end duration-1000 lg:col-span-4"
        >
          <dl className="divide-y divide-border rounded-xl border border-border bg-surface">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="px-5 py-4">
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-1.5 text-sm text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
