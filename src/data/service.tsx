export const services = [
  {
    title: "Software Development",
    desc: "Custom platforms and internal tools engineered around your business logic, built to last and easy to extend.",
    glyph: (
      <div className="flex flex-col gap-1.5">
        <span className="block h-1.5 w-10 rounded-full bg-primary/70" />
        <span className="block h-1.5 w-7 rounded-full bg-primary/35" />
        <span className="block h-1.5 w-12 rounded-full bg-primary/20" />
      </div>
    ),
  },
  {
    title: "Web & Mobile Applications",
    desc: "Fast, responsive products for every screen — from marketing sites to complex, data-heavy applications.",
    glyph: (
      <div className="flex items-end gap-1.5">
        <span className="block h-8 w-6 rounded-md bg-primary/25" />
        <span className="block h-10 w-8 rounded-md bg-primary/70" />
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Interfaces that feel obvious. We design clear flows, refined details and systems your team can scale.",
    glyph: (
      <div className="grid grid-cols-2 gap-1.5">
        <span className="block size-5 rounded-full bg-primary/70" />
        <span className="block size-5 rounded-md bg-primary/25" />
        <span className="block size-5 rounded-md bg-primary/25" />
        <span className="block size-5 rounded-full bg-cyan-soft/60" />
      </div>
    ),
  },
  {
    title: "Cloud & DevOps",
    desc: "Reliable infrastructure, automated pipelines and observability so releases stay boring and predictable.",
    glyph: (
      <div className="flex flex-col items-start gap-1.5">
        <span className="block h-2.5 w-12 rounded-full bg-primary/70" />
        <span className="block h-2.5 w-9 rounded-full bg-primary/35" />
        <span className="block size-2.5 rounded-full bg-cyan-soft" />
      </div>
    ),
  },
  {
    title: "AI Solutions",
    desc: "Practical AI features — assistants, search and automation — embedded where they actually save time.",
    glyph: (
      <div className="relative size-11">
        <span className="absolute inset-0 rounded-full border-2 border-primary/30" />
        <span className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
      </div>
    ),
  },
  {
    title: "Digital Solutions",
    desc: "End-to-end digital delivery: strategy, integrations and the connective work that keeps products moving.",
    glyph: (
      <div className="flex items-center gap-1.5">
        <span className="block size-4 rounded-md bg-primary/70" />
        <span className="block h-0.5 w-4 bg-primary/30" />
        <span className="block size-6 rounded-lg bg-primary/25" />
      </div>
    ),
  },
];
