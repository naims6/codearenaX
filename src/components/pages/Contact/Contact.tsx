"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4500);
  };

  return (
    <section
      id="contact"
      className="relative px-4 py-24 sm:px-6 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="pointer-events-none absolute left-[8%] top-[15%] -z-10 size-[380px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[5%] bottom-[15%] -z-10 size-[340px] rounded-full bg-cyan-soft/15 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Exceptional Together"
          subtitle="Have an IT project in mind, need custom software, or want to enroll in a bootcamp? Send us a message."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-stretch">
          {/* ── Left Column: Contact Info Cards ────────────────── */}
          <div className="lg:col-span-5 h-full">
            <Reveal className="h-full">
              <div className="h-full flex flex-col justify-between rounded-3xl p-7 sm:p-9 neu-raised border border-border/50 bg-card">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold text-primary bg-primary/10 neu-inset-sm border border-primary/20">
                    <Sparkles className="size-3.5" />
                    Direct Contact Details
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold text-foreground tracking-tight">
                    We&apos;d Love to Hear From You
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Our engineering and design team is ready to discuss your
                    requirements and provide a tailored technical roadmap.
                  </p>
                </div>

                <div className="space-y-4 my-auto py-4">
                  {/* Email Card */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl neu-inset bg-surface/70 border border-border/30">
                    <div className="grid size-10 place-items-center rounded-xl neu-raised bg-card text-primary shrink-0">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">
                        Email Us
                      </p>
                      <a
                        href="mailto:hello@codearenax.com"
                        className="text-sm font-extrabold text-foreground hover:text-primary transition-colors"
                      >
                        hello@codearenax.com
                      </a>
                      <p className="text-[10px] text-muted-foreground">
                        Response time: &lt; 4 hours
                      </p>
                    </div>
                  </div>

                  {/* Phone / WhatsApp Card */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl neu-inset bg-surface/70 border border-border/30">
                    <div className="grid size-10 place-items-center rounded-xl neu-raised bg-card text-cyan-500 shrink-0">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">
                        Call / WhatsApp
                      </p>
                      <a
                        href="tel:+8801700000000"
                        className="text-sm font-extrabold text-foreground hover:text-primary transition-colors block"
                      >
                        +880 1700-000000
                      </a>
                      <span className="text-xs text-muted-foreground">
                        +1 (555) 019-2834 (US Direct)
                      </span>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl neu-inset bg-surface/70 border border-border/30">
                    <div className="grid size-10 place-items-center rounded-xl neu-raised bg-card text-amber-500 shrink-0">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">
                        Office & Hub
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        Dhaka, Bangladesh
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Global Remote Engineering Squads
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl neu-inset bg-surface/70 border border-border/30">
                    <div className="grid size-10 place-items-center rounded-xl neu-raised bg-card text-emerald-500 shrink-0">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">
                        Working Hours
                      </p>
                      <p className="text-xs font-bold text-foreground">
                        Mon - Sat: 9:00 AM - 8:00 PM (GMT+6)
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        24/7 Emergency Support for Clients
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/30">
                  <p className="text-[11px] text-muted-foreground text-center font-medium">
                    ⚡ Guaranteed response within 4 hours during business days.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right Column: Project Inquiry Form ─────────────── */}
          <div className="lg:col-span-7 h-full">
            <Reveal delay={150} className="h-full">
              <div className="h-full flex flex-col justify-between rounded-3xl p-7 sm:p-9 neu-raised-lg border border-border/60 bg-card relative">
                {submitted ? (
                  <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="mx-auto grid size-20 place-items-center rounded-full bg-emerald-500/10 neu-inset text-emerald-500">
                      <CheckCircle2 className="size-10 animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-foreground">
                      Message Sent Successfully! 🎉
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      Thank you for reaching out to CodeArenaX. Our project
                      director will review your inquiry and contact you within 4
                      hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-black text-foreground">
                        Start a Project / Inquiry
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Fill out the details below and we will get back to you
                        with a free consultation and project estimate.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Your Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="sarah@company.com"
                          className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Service Needed
                        </label>
                        <select className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground">
                          <option value="web-dev">Software Development</option>
                          <option value="ai-ml">AI Solutions</option>
                          <option value="graphic-design">
                            Design & Branding
                          </option>
                          <option value="video-editing">Video Editing</option>
                          <option value="cloud-devops">Cloud & DevOps</option>
                          <option value="bootcamp">
                            Bootcamp / Training Inquiry
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Estimated Budget
                        </label>
                        <select className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground">
                          <option value="tier1">&lt; $1,000</option>
                          <option value="tier2">$1,000 - $5,000</option>
                          <option value="tier3">$5,000 - $15,000</option>
                          <option value="tier4">$15,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        Project Overview / Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your project goals, timelines, or specific requirements..."
                        className="w-full rounded-2xl px-4 py-3 text-xs neu-inset bg-surface border border-border/40 focus:outline-none focus:border-primary text-foreground resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-primary py-3.5 text-sm font-bold text-primary-foreground neu-btn-primary flex items-center justify-center gap-2 select-none"
                    >
                      <Send className="size-4" />
                      <span>Send Project Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
