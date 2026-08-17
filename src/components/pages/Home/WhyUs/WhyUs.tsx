import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { items } from "@/data/whyus";

export function WhyUs() {
  return (
    <section id="whyus" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why CodeArenaX"
          title="A partner teams keep coming back to"
          subtitle="Senior craft, straight answers and software that behaves well long after launch."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <article className="h-full rounded-3xl p-7 transition-all duration-350 neu-raised neu-hover">
                {/* Visual — neumorphic inset well */}
                <div className="h-24 w-full rounded-2xl p-5 neu-inset">
                  {it.visual}
                </div>

                <h3 className="mt-6 text-base font-bold text-foreground">
                  {it.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {it.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
