"use client";

import { useState } from "react";
import {
  Code2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Terminal,
  Sparkles,
} from "lucide-react";

type TabType = "engineering" | "ai" | "devops";

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<TabType>("engineering");

  return (
    <div className="relative mx-auto w-full max-w-lg py-4 sm:py-6 select-none">
      {/* ── Background Glow ────────────────────────────────────────── */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-primary/20 via-cyan-soft/15 to-indigo-soft/15 blur-[90px]" />

      {/* ── Main Professional Studio Card Container ───────────────── */}
      <div className="rounded-3xl border border-border/60 bg-card/95 neu-raised-lg overflow-hidden transition-all duration-300">
        {/* Top Header Bar with Window Controls & Status */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-surface/70 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="size-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="size-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="ml-2 text-[11px] font-mono font-bold tracking-tight text-foreground/90 flex items-center gap-1.5">
              <Terminal className="size-3 text-primary" />
              codearenax-studio.ts
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-3 gap-1 p-2 bg-surface/40 border-b border-border/30">
          <button
            onClick={() => setActiveTab("engineering")}
            className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold transition-all duration-200 ${
              activeTab === "engineering"
                ? "bg-card text-primary neu-inset-sm shadow-xs font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code2 className="size-3.5" />
            <span>Software</span>
          </button>

          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold transition-all duration-200 ${
              activeTab === "ai"
                ? "bg-card text-primary neu-inset-sm shadow-xs font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Cpu className="size-3.5" />
            <span>AI & ML</span>
          </button>

          <button
            onClick={() => setActiveTab("devops")}
            className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold transition-all duration-200 ${
              activeTab === "devops"
                ? "bg-card text-primary neu-inset-sm shadow-xs font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <ShieldCheck className="size-3.5" />
            <span>Cloud</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="p-5 space-y-4 bg-card">
          {activeTab === "engineering" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-primary" /> Full-Stack
                  Architecture
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  Next.js 15 & React 19
                </span>
              </div>

              {/* Code Snippet Box */}
              <div className="rounded-2xl p-4 neu-inset bg-surface/80 border border-border/40 font-mono text-[11px] leading-relaxed text-foreground/90 space-y-1">
                <div className="text-muted-foreground">
                  Enterprise Web & SaaS Stack
                </div>
                <div>
                  <span className="text-primary font-bold">const</span> app ={" "}
                  <span className="text-cyan-500 font-bold">
                    createProductionApp
                  </span>
                  ({`{`}
                </div>
                <div className="pl-4 text-emerald-600 dark:text-emerald-400">
                  frontend:{" "}
                  <span className="text-amber-500">
                    &quot;Next.js 15 SSR / React 19&quot;
                  </span>
                  ,
                </div>
                <div className="pl-4 text-indigo-500">
                  backend:{" "}
                  <span className="text-amber-500">
                    &quot;Node.js + PostgreSQL&quot;
                  </span>
                  ,
                </div>
                <div className="pl-4 text-cyan-600 dark:text-cyan-400">
                  security:{" "}
                  <span className="text-amber-500">
                    &quot;OAuth2 + Role ACL&quot;
                  </span>
                  ,
                </div>
                <div>{`}`});</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-muted-foreground pt-1">
                <div className="flex items-center gap-1.5 p-2 rounded-xl neu-inset bg-surface/50 border border-border/20">
                  <CheckCircle2 className="size-3.5 text-emerald-500" />{" "}
                  Sub-second Load
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl neu-inset bg-surface/50 border border-border/20">
                  <CheckCircle2 className="size-3.5 text-emerald-500" /> 100/100
                  Lighthouse
                </div>
              </div>
            </div>
          )}

          {activeTab === "ai" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <Cpu className="size-3.5 text-primary" /> AI & Neural
                  Pipelines
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  Python & LangChain
                </span>
              </div>

              {/* Code Snippet Box */}
              <div className="rounded-2xl p-4 neu-inset bg-surface/80 border border-border/40 font-mono text-[11px] leading-relaxed text-foreground/90 space-y-1">
                <div className="text-muted-foreground">
                  # Intelligent Vector RAG Engine
                </div>
                <div>
                  <span className="text-primary font-bold">class</span>{" "}
                  <span className="text-cyan-500 font-bold">
                    AIAgentPipeline
                  </span>
                  :
                </div>
                <div className="pl-4 text-emerald-600 dark:text-emerald-400">
                  vector_db ={" "}
                  <span className="text-amber-500">PineconeVectorStore()</span>
                </div>
                <div className="pl-4 text-indigo-500">
                  llm ={" "}
                  <span className="text-amber-500">
                    OpenAI(model=&quot;gpt-4o&quot;)
                  </span>
                </div>
                <div className="pl-4 text-cyan-600 dark:text-cyan-400">
                  latency ={" "}
                  <span className="text-amber-500">
                    &quot;&lt; 180ms response&quot;
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-muted-foreground pt-1">
                <div className="flex items-center gap-1.5 p-2 rounded-xl neu-inset bg-surface/50 border border-border/20">
                  <CheckCircle2 className="size-3.5 text-emerald-500" />{" "}
                  Semantic Search
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl neu-inset bg-surface/50 border border-border/20">
                  <CheckCircle2 className="size-3.5 text-emerald-500" /> Custom
                  LLM Tuning
                </div>
              </div>
            </div>
          )}

          {activeTab === "devops" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-primary" /> Cloud &
                  Infrastructure
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  AWS & Docker
                </span>
              </div>

              {/* Code Snippet Box */}
              <div className="rounded-2xl p-4 neu-inset bg-surface/80 border border-border/40 font-mono text-[11px] leading-relaxed text-foreground/90 space-y-1">
                <div className="text-muted-foreground">
                  # Terraform Zero-Downtime Cluster
                </div>
                <div>
                  <span className="text-primary font-bold">resource</span>{" "}
                  <span className="text-cyan-500 font-bold">
                    &quot;aws_eks_cluster&quot;
                  </span>{" "}
                  {`{`}
                </div>
                <div className="pl-4 text-emerald-600 dark:text-emerald-400">
                  name ={" "}
                  <span className="text-amber-500">
                    &quot;codearenax-production&quot;
                  </span>
                </div>
                <div className="pl-4 text-indigo-500">
                  auto_scale = <span className="text-amber-500">true</span>
                </div>
                <div className="pl-4 text-cyan-600 dark:text-cyan-400">
                  uptime ={" "}
                  <span className="text-amber-500">
                    &quot;99.99% guaranteed&quot;
                  </span>
                </div>
                <div>{`}`}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-muted-foreground pt-1">
                <div className="flex items-center gap-1.5 p-2 rounded-xl neu-inset bg-surface/50 border border-border/20">
                  <CheckCircle2 className="size-3.5 text-emerald-500" />{" "}
                  Automated CI/CD
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl neu-inset bg-surface/50 border border-border/20">
                  <CheckCircle2 className="size-3.5 text-emerald-500" /> 24/7
                  Monitoring
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Metrics Strip */}
        <div className="px-4 py-3 border-t border-border/40 bg-surface/40 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 text-muted-foreground font-semibold">
            <Layers className="size-3.5 text-primary" />
            <span>CodeArenaX IT Solutions</span>
          </div>
          <span className="font-mono font-bold text-primary">
            Senior Engineering
          </span>
        </div>
      </div>
    </div>
  );
}
