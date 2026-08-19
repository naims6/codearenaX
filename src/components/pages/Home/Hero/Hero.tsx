"use client";

import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { HeroVisual } from "./HeroVisual";
import Link from "next/link";
import { stats } from "@/data/stats";

const avatarLetters = ["A", "M", "R", "S", "J"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen lg:h-[100svh] lg:max-h-[1000px] w-full flex-col justify-between overflow-x-clip bg-background pt-24 pb-6 sm:pt-28 lg:pt-16 transition-colors duration-400"
    >
      {/* ── Background ambient glows ────────────────────── */}
      <div className="hero-orb pointer-events-none absolute left-[8%] top-[15%] -z-20 size-[380px] rounded-full bg-primary/10 blur-[130px]" />
      <div className="hero-orb-2 pointer-events-none absolute bottom-[10%] right-[5%] -z-20 size-[340px] rounded-full bg-cyan-soft/15 blur-[110px]" />
      <div className="hero-pulse pointer-events-none absolute left-[55%] top-[50%] -z-20 size-[240px] rounded-full bg-indigo-soft/10 blur-[90px]" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent line */}
      <div className="hero-line-pulse pointer-events-none absolute top-[28%] left-0 right-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-4 sm:px-6">
        <div className="grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left — copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow — neumorphic inset pill */}
            <div className="hero-entrance opacity-0">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-wide text-primary border border-border/40 neu-inset-sm bg-card">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                Trusted Software Development Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-entrance delay-100 opacity-0 mt-5 text-[2.1rem] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[2.85rem] xl:text-[3.15rem]">
              We Build Software{" "}
              <span className="bg-gradient-to-br from-primary via-primary-light to-cyan-soft bg-clip-text text-transparent">
                That Moves
              </span>
              <br />
              Your Business Forward.
            </h1>

            {/* Description */}
            <p className="hero-entrance delay-200 opacity-0 mt-4 max-w-[490px] text-base leading-relaxed text-muted-foreground lg:text-lg">
              CodeArenaX is a full-service software development company. We
              design and build web apps, mobile apps, and custom software that
              help businesses grow, automate, and scale.
            </p>

            {/* CTAs */}
            <div className="hero-entrance delay-300 opacity-0 mt-7 flex flex-wrap items-center gap-4">
              {/* Primary — blue neumorphic raised */}
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-2xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground select-none neu-btn-primary"
              >
                Start a Project
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              {/* Secondary — neumorphic ghost */}
              <Link
                href="#services"
                className="group inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold text-foreground border border-border/40 select-none transition-all duration-300 neu-btn-ghost"
              >
                Our Services
                <ChevronRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </div>

            {/* Social proof */}
            <div className="hero-entrance delay-400 opacity-0 mt-7 flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatarLetters.map((letter, i) => (
                  <div
                    key={i}
                    className="size-8 rounded-full border-2 border-background bg-primary/90 flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                    style={{ opacity: 1 - i * 0.1 }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-3 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">
                  120+ clients
                </span>{" "}
                trust CodeArenaX
              </p>
            </div>
          </div>

          {/* Right — visual */}
          <div className="hero-entrance delay-200 opacity-0 lg:col-span-5 flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* ── Bottom stats bar ────────────────────────────── */}
      <div className="hero-entrance delay-500 opacity-0 relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 rounded-2xl border border-border/40 neu-raised md:grid-cols-4 bg-card">
          {stats.map(({ value, label }, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col items-center justify-center py-3.5 px-4 text-center",
                i < 3 ? "border-r border-border/40" : "",
              )}
            >
              <span className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                {value}
              </span>
              <span className="mt-0.5 text-[11px] text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
