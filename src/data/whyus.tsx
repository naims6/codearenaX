export const items = [
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