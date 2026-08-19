"use client";

import { useState } from "react";
import {
  GraduationCap,
  Trophy,
  Code2,
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  X
} from "lucide-react";
import { bootcamps, BootcampItem } from "@/data/bootcamp";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Bootcamp() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "cp" | "ai">("all");
  const [selectedBootcamp, setSelectedBootcamp] = useState<BootcampItem | null>(null);
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);

  const filteredBootcamps = bootcamps.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

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
      {/* Background Ambient Orbs */}
      <div className="pointer-events-none absolute left-[5%] top-[20%] -z-10 size-[350px] rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[5%] bottom-[10%] -z-10 size-[320px] rounded-full bg-cyan-soft/15 blur-[110px]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="CodeArenaX Academy & Bootcamps"
          title="Level Up with Live Web Dev & Competitive Programming Bootcamps"
          subtitle="Join our intensive Free & Paid cohorts led by senior software engineers and competitive programming contest champions."
        />

        {/* ── Category Filter Pills ──────────────────────────── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "all", label: "All Bootcamps", icon: GraduationCap },
            { id: "web", label: "Web Development", icon: Code2 },
            { id: "cp", label: "Competitive Programming", icon: Trophy },
            { id: "ai", label: "AI Engineering", icon: Sparkles },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground neu-btn-primary shadow-md"
                    : "bg-card text-foreground neu-btn-ghost border border-border/40 hover:border-primary/40"
                }`}
              >
                <Icon className="size-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── Bootcamp Cards Grid ───────────────────────────── */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBootcamps.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <article className="group flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-350 neu-raised neu-hover border border-border/50 bg-card relative overflow-hidden">
                
                {/* Top Accent Bar */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-cyan-soft" />

                <div>
                  {/* Category & Tier Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide text-primary bg-primary/10 neu-inset-sm border border-primary/20">
                      {item.categoryLabel}
                    </span>

                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${
                        item.tier.includes("Free")
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                      }`}
                    >
                      {item.tier}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 text-xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Specs Pill List */}
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px] font-medium text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="size-3.5 text-primary" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="size-3.5 text-cyan-500" />
                      <span>{item.studentsCount}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-2 rounded-2xl p-3.5 neu-inset bg-surface/60 border border-border/40">
                    <p className="text-[11px] font-bold text-foreground mb-1.5">What You'll Gain:</p>
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Topics Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.topics.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg px-2.5 py-1 text-[10px] font-semibold text-foreground/80 bg-surface neu-inset-sm border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA Footer */}
                <div className="mt-7 pt-4 border-t border-border/40 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-muted-foreground font-medium">
                      {item.startDate}
                    </span>
                    <span className="text-sm font-extrabold text-foreground">
                      {item.pricing.freeTierDesc || item.pricing.paidTierPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => handleEnroll(item)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground neu-btn-primary select-none active:scale-95 transition-transform"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Enrollment Modal Dialog ───────────────────────────── */}
      {selectedBootcamp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl p-6 neu-raised bg-card border border-border/60 shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedBootcamp(null)}
              className="absolute top-4 right-4 grid size-8 place-items-center rounded-full neu-inset text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>

            {enrolledSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/10 neu-inset text-emerald-500">
                  <CheckCircle2 className="size-8 animate-bounce" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Enrollment Successful! 🎉</h4>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  You have reserved a spot in <span className="font-bold text-foreground">{selectedBootcamp.title}</span>. Check your email for orientation links!
                </p>
              </div>
            ) : (
              <form onSubmit={submitEnrollment} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-primary tracking-wide uppercase">
                    CodeArenaX Academy
                  </span>
                  <h4 className="text-lg font-extrabold text-foreground mt-0.5">
                    Enroll in {selectedBootcamp.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {selectedBootcamp.duration} • {selectedBootcamp.startDate}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-foreground mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      className="w-full rounded-xl px-3.5 py-2.5 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-foreground mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@example.com"
                      className="w-full rounded-xl px-3.5 py-2.5 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-foreground mb-1">
                      Select Track
                    </label>
                    <select className="w-full rounded-xl px-3.5 py-2.5 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground">
                      {selectedBootcamp.isFreeAvailable && (
                        <option value="free">Free Starter Cohort (Core Lessons)</option>
                      )}
                      <option value="paid">
                        Paid Immersion Pass ({selectedBootcamp.pricing.paidTierPrice || "Full Certificate"})
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 rounded-2xl bg-primary py-3 text-xs font-bold text-primary-foreground neu-btn-primary"
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
