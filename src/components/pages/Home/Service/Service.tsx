import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/service";
import Link from "next/link";

export function Services() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Everything you need to ship real products"
          subtitle="One senior team across strategy, design and engineering — no handoffs, no guesswork."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-3xl p-7 transition-all duration-350 neu-raised neu-hover">
                {/* Icon box — neumorphic inset */}
                <div className="grid size-16 place-items-center rounded-2xl neu-icon">
                  {s.glyph}
                </div>

                <h3 className="mt-6 text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>

                <Link
                  href={`/services/${s.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Learn More & Details
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
