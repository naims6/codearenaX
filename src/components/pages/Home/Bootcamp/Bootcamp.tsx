"use client";

import { useState } from "react";
import {
  GraduationCap,
  Trophy,
  Code2,
  Sparkles,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  X,
} from "lucide-react";
import { bootcamps, BootcampItem } from "@/data/bootcamp";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

type FilterType = "all" | "web" | "cp" | "ai";

const filters: { id: FilterType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "all", label: "All", icon: GraduationCap },
  { id: "web", label: "Web Dev", icon: Code2 },
  { id: "cp", label: "CP & DSA", icon: Trophy },
  { id: "ai", label: "AI Eng", icon: Sparkles },
];

export function Bootcamp() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedBootcamp, setSelectedBootcamp] = useState<BootcampItem | null>(null);
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);

  const filteredBootcamps = bootcamps.filter((item) =>
    activeFilter === "all" ? true : item.category === activeFilter
  );

  const handleEnroll = (bootcamp: BootcampItem) => {
    setSelectedBootcamp(bootcamp);
    setEnrolledSuccess(false);
  };

  const submitEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolledSuccess(true);
    setTimeout(() => {
      setSelectedBootcamp(null);
      setEnrolledSuccess(false);
    }, 2800);
  };

  return (
    <section id="bootcamps" className="relative px-4 py-24 sm:px-6 overflow-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute left-[5%] top-[20%] -z-10 size-[350px] rounded-full bg-primary/8 blur-[130px]" />
      <div className="pointer-events-none absolute right-[5%] bottom-[10%] -z-10 size-[300px] rounded-full bg-cyan-soft/10 blur-[110px]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="CodeArenaX Academy"
          title="Live Bootcamps for Web, CP & AI Engineering"
          subtitle="Free and paid cohorts led by senior engineers and competitive programming champions."
        />

        {/* ── Filter Pills ─────────────────────────────── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map(({ id, label, icon: Icon }) => {
            const active = activeFilter === id;
            return (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-250 ${
                  active
                    ? "bg-primary text-primary-foreground neu-btn-primary"
                    : "bg-card text-muted-foreground border border-border/40 neu-btn-ghost hover:text-foreground"
                }`}
              >
                <Icon className="size-3.5" />
                {label}
              </button>
            );
          })}
        </div>

        {/* ── Bootcamp Cards ───────────────────────────── */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBootcamps.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <article className="group flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 neu-raised neu-hover border border-border/40 bg-card relative overflow-hidden">
                {/* Accent top bar */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-indigo-400 to-cyan-soft" />

                <div className="space-y-4">
                  {/* Header row: category + tier badge */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold text-primary bg-primary/10 border border-primary/20">
                      {item.categoryLabel}
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      item.tier.includes("Free")
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                    }`}>
                      {item.tier}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>

                  {/* Quick stats row */}
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3 text-primary" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="size-3 text-cyan-500" />
                      {item.studentsCount}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-amber-500">
                      <Star className="size-3 fill-amber-400 text-amber-400" />
                      {item.rating}
                    </span>
                  </div>

                  {/* Highlights — simple list */}
                  <ul className="space-y-1.5">
                    {item.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: date + price + CTA */}
                <div className="mt-5 pt-4 border-t border-border/30 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] text-muted-foreground">{item.startDate}</p>
                    <p className="text-xs font-extrabold text-foreground">
                      {item.pricing.freeTierDesc || item.pricing.paidTierPrice}
                    </p>
                  </div>
                  <button
                    onClick={() => handleEnroll(item)}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground neu-btn-primary active:scale-95 transition-transform"
                  >
                    Enroll
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Enrollment Modal ──────────────────────────── */}
      {selectedBootcamp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl p-6 neu-raised bg-card border border-border/60 shadow-lg animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedBootcamp(null)}
              className="absolute top-4 right-4 grid size-8 place-items-center rounded-full neu-inset text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-4" />
            </button>

            {enrolledSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/10 neu-inset text-emerald-500">
                  <CheckCircle2 className="size-8 animate-bounce" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Enrolled! 🎉</h4>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  You&apos;ve secured a spot in{" "}
                  <span className="font-bold text-foreground">{selectedBootcamp.title}</span>.
                  Check your email for onboarding details!
                </p>
              </div>
            ) : (
              <form onSubmit={submitEnrollment} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                    CodeArenaX Academy
                  </span>
                  <h4 className="text-lg font-extrabold text-foreground mt-0.5">
                    Enroll in {selectedBootcamp.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {selectedBootcamp.duration} · {selectedBootcamp.startDate}
                  </p>
                </div>

                <div className="space-y-3">
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl px-3.5 py-2.5 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl px-3.5 py-2.5 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                  />
                  <select className="w-full rounded-xl px-3.5 py-2.5 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground">
                    {selectedBootcamp.isFreeAvailable && (
                      <option value="free">Free Starter Cohort</option>
                    )}
                    <option value="paid">
                      Paid Immersion — {selectedBootcamp.pricing.paidTierPrice}
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-primary py-3 text-xs font-bold text-primary-foreground neu-btn-primary"
                >
                  Confirm Enrollment
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
