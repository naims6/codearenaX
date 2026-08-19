"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MapPin, Clock, ArrowRight, CheckCircle2, X } from "lucide-react";
import { JobPosition, positions } from "@/data/carrer";

export function Career() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job);
    setAppliedSuccess(false);
  };

  const submitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setSelectedJob(null);
      setAppliedSuccess(false);
    }, 2800);
  };

  return (
    <section
      id="career"
      className="relative px-4 py-24 sm:px-6 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-[10%] top-[30%] -z-10 size-[340px] rounded-full bg-primary/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Careers at CodeArenaX"
          title="Join Our Mission to Build IT Solutions & Empower Engineers"
          subtitle="We are looking for talented developers, AI engineers, video editors, designers, and mentors to join our growing team."
        />

        {/* ── Open Positions Grid ────────────────────────────── */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {positions.map((pos, idx) => (
            <Reveal key={pos.id} delay={idx * 90}>
              <div className="group flex h-full flex-col justify-between p-6 rounded-3xl neu-raised neu-hover border border-border/50 bg-card">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full px-3 py-1 text-[10px] font-bold text-primary bg-primary/10 neu-inset-sm border border-primary/20">
                      {pos.department}
                    </span>
                    <span className="text-[10px] font-semibold text-muted-foreground">
                      {pos.experience}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {pos.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {pos.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="size-3.5 text-primary" />
                      <span>{pos.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-3.5 text-cyan-500" />
                      <span>{pos.type}</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {pos.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg px-2.5 py-1 text-[10px] font-semibold text-foreground/80 bg-surface neu-inset-sm border border-border/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="size-3.5" /> Actively Hiring
                  </span>

                  <button
                    onClick={() => handleApply(pos)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground neu-btn-primary active:scale-95 transition-transform"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Job Application Modal ────────────────────────────── */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl p-6 neu-raised bg-card border border-border/60 shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 grid size-8 place-items-center rounded-full neu-inset text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>

            {appliedSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/10 neu-inset text-emerald-500">
                  <CheckCircle2 className="size-8 animate-bounce" />
                </div>
                <h4 className="text-xl font-bold text-foreground">
                  Application Submitted! 🎉
                </h4>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Thank you for applying for{" "}
                  <span className="font-bold text-foreground">
                    {selectedJob.title}
                  </span>
                  . Our recruitment team will review your application shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={submitApplication} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-primary tracking-wide uppercase">
                    CodeArenaX Careers
                  </span>
                  <h4 className="text-lg font-extrabold text-foreground mt-0.5">
                    Apply for {selectedJob.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {selectedJob.department} • {selectedJob.location} •{" "}
                    {selectedJob.type}
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
                      placeholder="e.g. Jordan Lee"
                      className="w-full rounded-xl px-3.5 py-2.5 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-foreground mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jordan@example.com"
                      className="w-full rounded-xl px-3.5 py-2.5 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-foreground mb-1">
                      Portfolio / GitHub / LinkedIn URL
                    </label>
                    <input
                      required
                      type="url"
                      placeholder="https://github.com/jordan"
                      className="w-full rounded-xl px-3.5 py-2.5 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 rounded-2xl bg-primary py-3 text-xs font-bold text-primary-foreground neu-btn-primary"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
