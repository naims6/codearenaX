"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { links } from "@/data/navbar";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-400 sm:px-7 neu-raised border border-border/50",
          scrolled ? "bg-card/95 backdrop-blur-md" : "bg-card/75 backdrop-blur-xl",
        )}
      >
        {/* ── Brand ─────────────────────────────────────── */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          {/* Logo mark */}
          <div className="grid size-9 place-items-center rounded-xl border border-border/40 neu-raised transition-all duration-300">
            <div className="relative size-[17px]">
              <span className="absolute left-0 top-0 size-2.5 rounded-sm bg-primary" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-sm bg-primary/50 transition-colors duration-300 group-hover:bg-cyan-soft" />
            </div>
          </div>
          <span className="text-[17px] font-extrabold tracking-tight text-foreground">
            CodeArena<span className="text-primary">X</span>
          </span>
        </Link>

        {/* ── Desktop links ─────────────────────────────── */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-surface"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right actions ─────────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* CTA */}
          <Link
            href="/contact"
            className="group relative hidden md:inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground select-none neu-btn-primary"
          >
            <span>Start a Project</span>
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          {/* Mobile burger */}
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-xl border border-border/40 text-foreground neu-raised transition-all duration-300 md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ─────────────────────────────────── */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border/50 bg-card p-4 neu-raised-lg md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-border/40 pt-3 flex items-center gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground neu-btn-primary"
            >
              Start a Project
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
