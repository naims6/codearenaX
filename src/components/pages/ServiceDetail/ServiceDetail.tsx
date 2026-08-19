"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck, Cpu } from "lucide-react";
import { ServiceDetailItem } from "@/data/service";
import { Reveal } from "@/components/shared/Reveal";

interface ServiceDetailProps {
  service: ServiceDetailItem;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="relative px-4 py-16 sm:px-6 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="pointer-events-none absolute left-[5%] top-[10%] -z-10 size-[380px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[5%] bottom-[10%] -z-10 size-[340px] rounded-full bg-cyan-soft/15 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        
        {/* ── Back Navigation ──────────────────────────────── */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-muted-foreground neu-btn-ghost border border-border/40 hover:text-foreground transition-all"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* ── Service Hero Header ──────────────────────────── */}
        <Reveal>
          <div className="rounded-3xl p-8 sm:p-10 neu-raised-lg border border-border/60 bg-card relative overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-cyan-soft" />

            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold text-primary bg-primary/10 neu-inset-sm border border-primary/20">
                <Sparkles className="size-3.5" />
                {service.category}
              </span>

              <span className="text-xs font-mono text-muted-foreground font-semibold">
                CodeArenaX IT Solutions
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-black text-foreground sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              {service.longDesc}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground neu-btn-primary select-none"
              >
                <span>Start Your {service.title} Project</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-foreground neu-btn-ghost border border-border/40"
              >
                Learn About Our Team
              </Link>
            </div>
          </div>
        </Reveal>

        {/* ── Key Capabilities & Deliverables Grid ──────────── */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          
          {/* Left Column: Key Features */}
          <Reveal delay={100}>
            <div className="h-full rounded-3xl p-7 neu-raised border border-border/40 bg-card space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="grid size-9 place-items-center rounded-xl neu-inset bg-primary/10 text-primary">
                  <Cpu className="size-5" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground">Key Capabilities</h3>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl neu-inset bg-surface/60 border border-border/30">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Project Deliverables */}
          <Reveal delay={200}>
            <div className="h-full rounded-3xl p-7 neu-raised border border-border/40 bg-card space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="grid size-9 place-items-center rounded-xl neu-inset bg-cyan-soft/10 text-cyan-600 dark:text-cyan-400">
                  <Layers className="size-5" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground">What You Receive</h3>
              </div>

              <div className="space-y-3">
                {service.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl neu-inset bg-surface/60 border border-border/30">
                    <ShieldCheck className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Technology Stack Section ─────────────────────── */}
        <Reveal delay={300}>
          <div className="mt-12 rounded-3xl p-7 neu-raised border border-border/40 bg-card">
            <h3 className="text-lg font-extrabold text-foreground mb-4">
              Tools & Technologies We Use
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl px-4 py-2 text-xs font-bold text-foreground bg-surface neu-inset-sm border border-border/30"
                >
                  ⚡ {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Business Benefits & ROI ───────────────────────── */}
        <Reveal delay={400}>
          <div className="mt-12 rounded-3xl p-7 neu-raised border border-border/40 bg-card space-y-4">
            <h3 className="text-lg font-extrabold text-foreground">Why Choose CodeArenaX for {service.title}</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="p-4 rounded-2xl neu-inset bg-surface/70 border border-border/30 text-xs leading-relaxed font-medium text-muted-foreground">
                  <span className="block text-sm font-bold text-foreground mb-1">
                    0{idx + 1}. Advantage
                  </span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Bottom Project Inquiry CTA ────────────────────── */}
        <Reveal delay={500}>
          <div className="mt-14 rounded-3xl p-8 sm:p-10 neu-raised-lg border border-border/60 bg-card text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl font-black text-foreground">
              Ready to build your {service.title} solution?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
              Get in touch with our engineering and design team. We will review your project scope and deliver a tailored roadmap within 24 hours.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground neu-btn-primary select-none"
              >
                <span>Start Your Project Now</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
