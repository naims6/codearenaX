import { Reveal } from "@/components/shared/Reveal";
import { steps } from "@/data/process";

export function Process() {
  return (
    <section className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl rounded-3xl bg-card p-8 neu-raised sm:p-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            How we work
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A simple, proven process
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 90}>
              <div className="h-full rounded-2xl bg-secondary/50 p-6 neu-inset">
                <span className="font-mono text-2xl font-bold text-primary/50">
                  {step.no}
                </span>
                <h3 className="mt-3 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
