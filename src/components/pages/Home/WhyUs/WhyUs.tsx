import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const items = [
  {
    title: "Built for Scale",
    desc: "Architecture that holds up as traffic, data and your team grow.",
    visual: (
      <div className="flex h-full items-end gap-2">
        {[30, 50, 70, 100].map((h) => (
          <span
            key={h}
            style={{ height: `${h}%` }}
            className="w-4 rounded-full bg-primary/25 last:bg-primary"
          />
        ))}
      </div>
    ),
  },
  {
    title: "Modern Technology",
    desc: "A current, well-supported stack chosen for longevity, not hype.",
    visual: (
      <div className="grid h-full w-full place-items-center">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={`size-3 rounded-md ${i % 4 === 0 ? "bg-primary" : "bg-primary/20"}`}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Business Focused",
    desc: "We optimise for outcomes and revenue, not for shipping features.",
    visual: (
      <div className="grid h-full w-full place-items-center">
        <div className="relative size-14 rounded-full border-4 border-primary/20">
          <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary" />
        </div>
      </div>
    ),
  },
  {
    title: "Reliable Delivery",
    desc: "Clear milestones, weekly demos and releases that land on time.",
    visual: (
      <div className="flex h-full w-full flex-col justify-center gap-2">
        <span className="h-2 w-full rounded-full bg-primary/20" />
        <span className="h-2 w-3/4 rounded-full bg-primary/40" />
        <span className="h-2 w-1/2 rounded-full bg-primary" />
      </div>
    ),
  },
];

export function WhyUs() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why CodeArenaX"
          title="A partner teams keep coming back to"
          subtitle="Senior craft, straight answers and software that behaves well long after launch."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <article className="soft-card soft-card-hover h-full rounded-3xl p-7">
                <div className="soft-inset h-24 rounded-2xl p-5">
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
