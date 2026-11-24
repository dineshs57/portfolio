import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("border-t border-border py-24 md:py-32", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 grid gap-4 md:grid-cols-12 md:gap-8">
          <p className="eyebrow md:col-span-3 md:pt-2">{eyebrow}</p>
          <div className="md:col-span-9">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {title}
            </h2>
            {intro ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}
