"use client";

import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pillars, stats } from "@/data/about";
import { CheckCircle2, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="pointer-events-none absolute right-[8%] top-[15%] -z-10 size-[360px] rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-[5%] bottom-[15%] -z-10 size-[320px] rounded-full bg-indigo-soft/15 blur-[110px]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About CodeArenaX"
          title="Engineered for Excellence in IT Solutions & Tech Training"
          subtitle="We bridge the gap between high-performance digital agency services and elite developer bootcamps."
        />

        {/* ── Story & Stats Split ────────────────────────────── */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-center">
          {/* Left: About Copy */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div className="rounded-3xl p-7 neu-raised border border-border/50 bg-card space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold text-primary bg-primary/10 neu-inset-sm border border-primary/20">
                  <Zap className="size-3.5" />
                  Our Story & Mission
                </span>

                <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                  Driving Business Growth with Modern IT Capabilities
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Founded with a vision to deliver top-tier digital
                  transformation,{" "}
                  <strong className="text-foreground">CodeArenaX</strong>{" "}
                  provides comprehensive IT solutions — spanning custom Web &
                  Software Development, AI/ML integrations, Video Editing, and
                  Graphic Design.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Alongside our agency operations, we run intensive{" "}
                  <strong className="text-foreground">
                    Free & Paid Bootcamps
                  </strong>{" "}
                  in Web Development and Competitive Programming to empower the
                  next generation of software engineers.
                </p>

                <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>Full-Stack Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>AI & ML Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>Graphic & UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>Video Post-Production</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Impact Metrics Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} delay={idx * 80}>
                  <div className="flex flex-col justify-between p-6 rounded-3xl neu-raised border border-border/40 bg-card hover:border-primary/40 transition-all duration-300">
                    <div className="grid size-11 place-items-center rounded-2xl neu-inset bg-surface mb-4">
                      <Icon className={`size-5 ${s.color}`} />
                    </div>
                    <div>
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                        {s.value}
                      </span>
                      <p className="mt-1 text-xs font-bold text-foreground">
                        {s.label}
                      </p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ── 4 Core IT Pillars Grid ────────────────────────── */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl font-extrabold text-foreground">
              Core IT Capabilities
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              End-to-end expertise across design, code, intelligence, and media
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="group h-full p-6 rounded-3xl neu-raised border border-border/40 bg-card neu-hover flex flex-col justify-between">
                    <div>
                      <div className="grid size-12 place-items-center rounded-2xl neu-inset bg-surface text-primary group-hover:scale-110 transition-transform">
                        <Icon className="size-6" />
                      </div>
                      <h4 className="mt-5 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
