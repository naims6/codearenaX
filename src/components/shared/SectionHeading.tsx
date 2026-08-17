import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal>
      <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        {/* Eyebrow — neumorphic inset pill */}
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary neu-inset-sm"
        >
          <span className="size-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>

        <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-[2.25rem]">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}