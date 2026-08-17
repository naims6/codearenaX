import { Activity, CheckCircle2 } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="page-glow absolute -inset-10 -z-10 rounded-full blur-2xl" />

      {/* code card */}
      <div className="soft-card float-slow rounded-3xl p-5">
        <div className="flex items-center gap-1.5 pb-4">
          <span className="size-2.5 rounded-full bg-surface-2 shadow-inner" />
          <span className="size-2.5 rounded-full bg-surface-2 shadow-inner" />
          <span className="size-2.5 rounded-full bg-primary/60" />
        </div>
        <pre className="soft-inset overflow-hidden rounded-2xl p-4 font-mono text-[11px] leading-6 text-muted-foreground sm:text-xs">
          <code>
            <span className="text-primary">const</span> product = build({"{"}
            {"\n"} idea:{" "}
            <span className="text-indigo-soft">&quot;yours&quot;</span>,{"\n"}{" "}
            scale:{" "}
            <span className="text-indigo-soft">&quot;infinite&quot;</span>,
            {"\n"} team:{" "}
            <span className="text-indigo-soft">&quot;CodeArenaX&quot;</span>
            {"\n"}
            {"}"});
          </code>
        </pre>
      </div>

      {/* dashboard card */}
      <div className="soft-card float-slower absolute -bottom-20 -left-4 w-52 rounded-3xl p-4 sm:-left-12 sm:w-60">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">Deploys</span>
          <Activity className="size-4 text-primary" />
        </div>
        <div className="mt-4 flex h-16 items-end gap-1.5">
          {[38, 62, 46, 78, 55, 92, 70].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 rounded-full bg-primary/25 [&:nth-child(6)]:bg-primary"
            />
          ))}
        </div>
      </div>

      {/* status pill */}
      <div className="soft-card float-slow absolute -right-3 -top-8 flex items-center gap-2 rounded-2xl px-4 py-3 sm:-right-8">
        <CheckCircle2 className="size-4 text-primary" />
        <span className="text-xs font-semibold text-foreground">
          99.9% uptime
        </span>
      </div>

      <div className="absolute -right-10 bottom-10 -z-10 size-32 rounded-full bg-cyan-soft/25 blur-3xl" />
    </div>
  );
}
