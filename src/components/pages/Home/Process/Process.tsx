import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { steps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Outer raised container wrapping the whole section */}
        <div className="rounded-3xl p-8 sm:p-12 neu-raised-lg">
          <SectionHeading
            eyebrow="How We Work"
            title="A simple, proven process"
            subtitle="Transparent milestones, weekly demos and clear ownership — from first call to final launch."
          />

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.no} delay={i * 90}>
                <li className="h-full rounded-2xl p-6 neu-inset">
                  {/* Step number */}
                  <span className="font-mono text-3xl font-extrabold text-primary/40 leading-none">
                    {step.no}
                  </span>

                  {/* Blue accent bar */}
                  <div className="mt-4 h-1 w-10 rounded-full bg-primary/50" />

                  <h3 className="mt-4 text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
