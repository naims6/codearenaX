const groups = [
  {
    title: "Services",
    links: [
      "Software Development",
      "Web & Mobile",
      "UI/UX Design",
      "AI Solutions",
    ],
  },
  { title: "Company", links: ["About", "Work", "Careers", "Contact"] },
  { title: "Resources", links: ["Blog", "Case Studies", "Support", "Privacy"] },
];

export function Footer() {
  return (
    <div className="px-4 pb-10 pt-4">
      <div className="mx-auto max-w-6xl rounded-3xl bg-card p-8 neu-raised sm:p-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground neu-glow">
                <span className="font-mono text-sm font-bold">{"</>"}</span>
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">
                CodeArena<span className="text-primary">X</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Building modern software and digital products that move businesses
              forward.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CodeArenaX. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed &amp; built with care.
          </p>
        </div>
      </div>
    </div>
  );
}
