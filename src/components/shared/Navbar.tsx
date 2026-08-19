"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { links } from "@/data/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 select-none">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-400 sm:px-7 neu-raised border border-border/50",
          scrolled ? "bg-card/95 backdrop-blur-md" : "bg-card/85 backdrop-blur-xl",
        )}
      >
        {/* ── Brand Logo ─────────────────────────────────── */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="grid size-9 place-items-center rounded-xl border border-border/40 neu-raised transition-all duration-300 group-hover:scale-105">
            <div className="relative size-[17px]">
              <span className="absolute left-0 top-0 size-2.5 rounded-sm bg-primary" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-sm bg-primary/50 transition-colors duration-300 group-hover:bg-cyan-soft" />
            </div>
          </div>
          <span className="text-[17px] font-extrabold tracking-tight text-foreground">
            CodeArena<span className="text-primary">X</span>
          </span>
        </Link>

        {/* ── Desktop Nav Links ───────────────────────────── */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={cn(
                    "relative rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300",
                    active
                      ? "text-primary bg-primary/10 neu-inset-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface/80"
                  )}
                >
                  {l.label}
                  {active && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Right Actions ──────────────────────────────── */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Start Project CTA — desktop only */}
          <Link
            href="/contact"
            className="group relative hidden md:inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground neu-btn-primary"
          >
            <span>Start Project</span>
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          {/* ── Hamburger — mobile only ──────────────────── */}
          <button
            aria-label="Toggle Navigation Menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="grid size-9 place-items-center rounded-xl border border-border/40 text-foreground neu-raised transition-all duration-300 hover:text-primary active:scale-95 md:hidden"
          >
            {menuOpen
              ? <X className="size-4 text-primary" />
              : <Menu className="size-4" />
            }
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer — hamburger menu ─────────────── */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border/50 bg-card/95 p-4 neu-raised-lg backdrop-blur-xl animate-in slide-in-from-top-3 fade-in duration-250 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200",
                      active
                        ? "bg-primary/10 text-primary border border-primary/20 neu-inset-sm"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground"
                    )}
                  >
                    <span>{l.label}</span>
                    {active && <span className="size-1.5 rounded-full bg-primary" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-3 border-t border-border/40 pt-3">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground neu-btn-primary w-full"
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
