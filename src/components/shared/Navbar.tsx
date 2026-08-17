"use client"
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { links } from "@/data/navbar";



export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-3xl px-5 py-3 transition-all duration-500 sm:px-7",
          scrolled
            ? "soft-card bg-card/80 backdrop-blur-xl"
            : "bg-transparent shadow-none",
        )}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="soft-card grid size-9 place-items-center rounded-xl">
            <span className="size-3.5 rounded-md bg-primary" />
          </span>
          <span className="text-[17px] font-bold tracking-tight text-foreground">
            CodeArenaX
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="glow-primary hidden rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground md:inline-flex"
          >
            Start a Project
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="soft-card grid size-10 place-items-center rounded-xl text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="soft-card mx-auto mt-3 max-w-6xl rounded-3xl bg-card/90 p-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-2 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="glow-primary mt-2 block rounded-2xl bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
