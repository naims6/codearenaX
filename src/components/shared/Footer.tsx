import { groups } from "@/data/footer";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <div className="px-4 pb-10 pt-6 sm:px-6 select-none">
      <div className="mx-auto max-w-6xl rounded-3xl p-8 sm:p-10 neu-raised-lg border border-border/50 bg-card">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1.2fr_1.2fr_1.3fr]">
          {/* ── Brand Column ─────────────────────────────────── */}
          <div>
            <Link href="/" className="group flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl neu-raised transition-all duration-300 group-hover:scale-105">
                <div className="relative size-[18px]">
                  <span className="absolute left-0 top-0 size-2.5 rounded-sm bg-primary" />
                  <span className="absolute bottom-0 right-0 size-2.5 rounded-sm bg-primary/50 transition-colors duration-300 group-hover:bg-cyan-soft" />
                </div>
              </div>
              <span className="text-[17px] font-extrabold tracking-tight text-foreground">
                CodeArena<span className="text-primary">X</span>
              </span>
            </Link>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Delivering high-impact IT Solutions (Web, AI/ML, Video Edit,
              Graphic Design) and modern developer bootcamps.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-primary-foreground neu-btn-primary"
            >
              <span>Start a Project</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* ── Dynamic Link Groups (Services & Company) ─────── */}
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-extrabold tracking-wide text-foreground uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-primary font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Contact Info Column ───────────────────────────── */}
          <div>
            <h3 className="text-xs font-extrabold tracking-wide text-foreground uppercase">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Mail className="size-4 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@codearenax.com"
                  className="hover:text-primary transition-colors font-medium"
                >
                  hello@codearenax.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="size-4 text-cyan-500 shrink-0 mt-0.5" />
                <a
                  href="tel:+8801700000000"
                  className="hover:text-primary transition-colors font-medium"
                >
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ───────────────────────────────────── */}
        <div className="mt-10 rounded-2xl px-6 py-4 neu-inset-sm flex flex-col items-center justify-between gap-3 sm:flex-row border border-border/30">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CodeArenaX. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <span>•</span>
            <Link
              href="/services"
              className="hover:text-primary transition-colors"
            >
              Services
            </Link>
            <span>•</span>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
