"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("size-9 rounded-xl neu-raised border border-border/40", className)} />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle light/dark theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative grid size-9 place-items-center rounded-xl transition-all duration-300 select-none neu-raised border border-border/40 hover:scale-[1.05] active:scale-[0.95]",
        className,
      )}
    >
      <Sun
        className={cn(
          "size-4 text-amber-500 transition-all duration-300 absolute",
          isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100",
        )}
      />
      <Moon
        className={cn(
          "size-4 text-primary transition-all duration-300 absolute",
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50",
        )}
      />
    </button>
  );
}
