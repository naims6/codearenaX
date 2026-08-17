"use client";

import { useState } from "react";
import { CheckCircle2, Rocket, Clock, Users } from "lucide-react";

const tabs = {
  "App.tsx": `import { useEffect, useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import { api } from "@/lib/api";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.auth.getSession()
      .then(setUser)
      .catch(console.error);
  }, []);

  if (!user) return <LoginScreen />;
  return <Dashboard user={user} />;
}`,
  "api.ts": `// REST API Service Layer
export const api = {
  projects: {
    list: () =>
      fetch("/api/projects").then(r => r.json()),
    create: (data: Project) =>
      fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify(data),
      }).then(r => r.json()),
  },
  auth: {
    getSession: () =>
      fetch("/api/auth/session")
        .then(r => r.json()),
  },
};`,
  "schema.sql": `-- Client Projects Database
CREATE TABLE projects (
  id          UUID PRIMARY KEY
                DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  client_id   UUID REFERENCES clients(id),
  status      TEXT DEFAULT 'active',
  stack       TEXT[],
  launched_at TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_projects_client
  ON projects (client_id);`,
} as const;

type TabKey = keyof typeof tabs;

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<TabKey>("App.tsx");

  return (
    <div className="relative mx-auto w-full max-w-lg py-8">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-primary/15 blur-[90px] hero-pulse" />

      {/* ─── Main code card — neumorphic raised card ──────────── */}
      <div className="relative rounded-2xl border border-border/50 bg-card neu-raised-lg overflow-hidden transition-all duration-300">
        {/* Top sheen */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Window header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-surface/60">
          {/* Window control dots */}
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-500/70" />
            <span className="size-2.5 rounded-full bg-yellow-500/70" />
            <span className="size-2.5 rounded-full bg-green-500/70" />
          </div>

          {/* File tabs strip — neumorphic inset */}
          <div className="flex items-center gap-0.5 rounded-lg p-0.5 neu-inset-sm bg-background border border-border/30">
            {(Object.keys(tabs) as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-3 py-1 text-[10px] font-mono transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-card text-primary neu-raised border border-primary/20 font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Live badge */}
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500 font-semibold">
            <span className="relative flex size-1.5">
              <span className="absolute size-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative size-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="hidden sm:inline">LIVE</span>
          </div>
        </div>

        {/* Code editor body */}
        <div className="m-3 min-h-[195px] p-4 rounded-xl neu-inset bg-surface/80 border border-border/30">
          <pre className="overflow-x-auto font-mono text-[11px] leading-[1.75] text-foreground/90 whitespace-pre">
            <code>{tabs[activeTab]}</code>
          </pre>
        </div>

        {/* Status footer bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 text-[10px] font-mono border-t border-border/40 bg-surface/40">
          <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Build successful</span>
          <span className="ml-auto text-muted-foreground">Ready to deploy</span>
          <Clock className="size-3 text-muted-foreground" />
          <span className="text-muted-foreground">just now</span>
        </div>
      </div>

      {/* ─── Floating badge 1: top-right ───────────────────── */}
      <div className="float-slow absolute -right-4 -top-2 z-20 flex items-center gap-3 rounded-2xl border border-border/40 bg-card px-4 py-3 neu-raised sm:-right-8">
        <div className="grid size-8 shrink-0 place-items-center rounded-xl neu-inset text-primary bg-primary/10">
          <Rocket className="size-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-foreground">On-Time Delivery</p>
          <p className="text-[10px] text-muted-foreground">95% shipped on schedule</p>
        </div>
      </div>

      {/* ─── Floating badge 2: bottom-left ─────────────────── */}
      <div className="float-slower absolute -bottom-2 -left-4 z-20 flex items-center gap-3 rounded-2xl border border-border/40 bg-card px-4 py-3 neu-raised sm:-left-8">
        <div className="grid size-8 shrink-0 place-items-center rounded-xl neu-inset text-cyan-soft bg-cyan-soft/10">
          <Users className="size-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-foreground">Dedicated Teams</p>
          <p className="text-[10px] text-muted-foreground">Full-stack engineers for you</p>
        </div>
      </div>
    </div>
  );
}
