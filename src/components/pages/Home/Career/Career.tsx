"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MapPin, Clock, ArrowRight, CheckCircle2, Send, Briefcase, FileText, User, Mail, Phone, Link2 } from "lucide-react";
import { JobPosition, positions } from "@/data/carrer";

export function Career() {
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("General Application / Open Role");
  const [submitted, setSubmitted] = useState(false);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    const formEl = document.getElementById("career-apply-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="career"
      className="relative px-4 py-24 sm:px-6 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-[10%] top-[30%] -z-10 size-[340px] rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[5%] bottom-[20%] -z-10 size-[300px] rounded-full bg-cyan-soft/10 blur-[110px]" />

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
                    onClick={() => handleApplyClick(pos.title)}
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

        {/* ── Dedicated Career Application Form Section ────────── */}
        <div id="career-apply-form" className="mt-20 scroll-mt-24">
          <Reveal delay={200}>
            <div className="rounded-3xl p-7 sm:p-10 neu-raised-lg border border-border/60 bg-card max-w-4xl mx-auto relative overflow-hidden">
              {/* Top Accent Gradient Line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-cyan-soft" />

              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold text-primary bg-primary/10 neu-inset-sm border border-primary/20">
                  <Briefcase className="size-3.5" />
                  Job Application Form
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-black text-foreground">
                  Apply for a Role at CodeArenaX
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  Ready to craft production software, build AI systems, or mentor engineers? Submit your application below.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="mx-auto grid size-20 place-items-center rounded-full bg-emerald-500/10 neu-inset text-emerald-500">
                    <CheckCircle2 className="size-10 animate-bounce" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-foreground">
                    Application Submitted Successfully! 🎉
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you for applying to join <span className="font-bold text-foreground">CodeArenaX</span>. Our talent recruitment team will review your profile and contact you within 24 to 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Position selection & Experience */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5 flex items-center gap-1">
                        <Briefcase className="size-3.5 text-primary" /> Target Position *
                      </label>
                      <select
                        value={selectedJobTitle}
                        onChange={(e) => setSelectedJobTitle(e.target.value)}
                        className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                      >
                        <option value="General Application / Open Role">General Application / Open Role</option>
                        {positions.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title} ({p.department})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5 flex items-center gap-1">
                        <Clock className="size-3.5 text-cyan-500" /> Experience Level *
                      </label>
                      <select className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground">
                        <option value="junior">Junior (0 - 1 years)</option>
                        <option value="mid">Mid-Level (1 - 3 years)</option>
                        <option value="senior">Senior (3 - 5+ years)</option>
                        <option value="expert">Lead / Expert (5+ years)</option>
                        <option value="student">Student / Intern</option>
                      </select>
                    </div>
                  </div>

                  {/* Personal details: Name, Email, Phone */}
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5 flex items-center gap-1">
                        <User className="size-3.5 text-primary" /> Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5 flex items-center gap-1">
                        <Mail className="size-3.5 text-primary" /> Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="alex@example.com"
                        className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5 flex items-center gap-1">
                        <Phone className="size-3.5 text-cyan-500" /> Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+880 1700-000000"
                        className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                      />
                    </div>
                  </div>

                  {/* Link: Portfolio / GitHub / LinkedIn / Resume */}
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5 flex items-center gap-1">
                      <Link2 className="size-3.5 text-amber-500" /> Portfolio / GitHub / LinkedIn / Resume Link *
                    </label>
                    <input
                      required
                      type="url"
                      placeholder="https://github.com/alexmorgan or Drive/Dropbox Resume Link"
                      className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                    />
                  </div>

                  {/* Cover Note / Pitch */}
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5 flex items-center gap-1">
                      <FileText className="size-3.5 text-emerald-500" /> Brief Introduction / Why You Want to Join CodeArenaX *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your core technical skills, recent projects, or achievements..."
                      className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-primary py-4 text-sm font-bold text-primary-foreground neu-btn-primary flex items-center justify-center gap-2 select-none"
                  >
                    <Send className="size-4" />
                    <span>Submit Job Application</span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
