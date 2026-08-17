import { groups } from "@/data/footer";
import Link from "next/link";

export function Footer() {
  return (
    <div className="px-4 pb-10 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl p-8 sm:p-10 neu-raised-lg">

        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="max-w-xs">
            <Link href="/" className="group flex items-center gap-3">
              {/* Logo mark — neumorphic raised */}
              <div className="grid size-10 place-items-center rounded-xl neu-raised transition-all duration-300 group-hover:shadow-none">
                <div className="relative size-[18px]">
                  <span className="absolute left-0 top-0 size-2.5 rounded-sm bg-primary" />
                  <span className="absolute bottom-0 right-0 size-2.5 rounded-sm bg-primary/50 transition-colors duration-300 group-hover:bg-cyan-soft" />
                </div>
              </div>
              <span className="text-[17px] font-extrabold tracking-tight text-foreground">
                CodeArena<span className="text-primary">X</span>
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Building modern software and digital products that move businesses forward.
            </p>

            {/* Contact CTA — neumorphic blue button */}
            <Link
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-primary-foreground neu-btn-primary"
            >
              Start a Project
            </Link>
          </div>

          {/* Link groups */}
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold tracking-wide text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar — neumorphic inset divider */}
        <div className="mt-10 rounded-2xl px-6 py-4 neu-inset-sm flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CodeArenaX. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed &amp; built with care.
          </p>
        </div>
      </div>
    </div>
  );
}
