import { Reveal } from "@/components/shared/Reveal";
import { ArrowRight } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-28 pt-36 sm:px-6 sm:pt-44"
    >
      <div className="page-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-6xl items-center gap-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <Reveal>
            <span className="soft-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Software studio for ambitious teams
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
              Build Digital Products That Move Businesses Forward.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              CodeArenaX builds modern software, web applications and digital
              solutions that help businesses turn ideas into scalable products.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="glow-primary inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                Start a Project <ArrowRight className="size-4" />
              </a>
              <a
                href="#work"
                className="soft-card soft-card-hover inline-flex items-center rounded-2xl px-6 py-3.5 text-sm font-semibold text-foreground"
              >
                Explore Our Work
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-6">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
