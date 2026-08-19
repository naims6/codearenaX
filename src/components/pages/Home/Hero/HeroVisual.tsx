"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Zap, Code2, CheckCircle2 } from "lucide-react";

export function HeroVisual() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState<string | null>(null);

  const handleScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanMessage("Initializing 3D AI Neural Matrix...");
    setTimeout(() => setScanMessage("Analyzing IT Solutions & Workflows..."), 800);
    setTimeout(() => setScanMessage("AI Core Synced! ⚡"), 1600);
    setTimeout(() => {
      setIsScanning(false);
      setTimeout(() => setScanMessage(null), 2500);
    }, 2200);
  };

  return (
    <div className="relative mx-auto w-full max-w-lg py-4 sm:py-8 select-none">
      {/* ── Dynamic Ambient Neon Glow Backdrops ────────────────── */}
      <div className="hero-pulse pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-primary/30 via-cyan-soft/20 to-indigo-soft/25 blur-[120px]" />
      <div className="hero-orb pointer-events-none absolute left-[10%] top-[10%] -z-10 size-[280px] rounded-full bg-primary/20 blur-[90px]" />

      {/* ── 3D AI Holographic Card Frame ───────────────────────── */}
      <div className="relative rounded-3xl border border-border/60 bg-card/90 neu-raised-lg overflow-hidden transition-all duration-500 hover:border-primary/50 group">
        
        {/* Holographic glowing top edge line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-sm" />

        {/* ── Card Header Strip ─────────────────────────────────── */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-surface/60 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2.5">
              <span className="absolute size-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
              <span className="relative size-2.5 rounded-full bg-cyan-500" />
            </span>
            <span className="text-[11px] font-mono font-extrabold tracking-wider text-foreground">
              CODEARENAX 3D AI CORE
            </span>
          </div>

          <button
            onClick={handleScan}
            disabled={isScanning}
            className="flex items-center gap-1.5 rounded-xl px-3 py-1 text-[10px] font-bold text-primary-foreground bg-primary shadow-sm neu-btn-primary active:scale-95 transition-transform"
          >
            <Sparkles className={`size-3 ${isScanning ? "animate-spin" : ""}`} />
            <span>{isScanning ? "Scanning..." : "Scan Matrix"}</span>
          </button>
        </div>

        {/* ── 3D AI Image Container with Holographic Overlays ───── */}
        <div className="relative aspect-square w-full overflow-hidden p-3 sm:p-4 bg-gradient-to-b from-surface/40 to-background/90">
          
          {/* Main 3D AI Sphere Generated Artwork */}
          <div className="relative size-full rounded-2xl overflow-hidden border border-border/40 neu-inset group-hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/hero-ai-3d.jpg"
              alt="CodeArenaX 3D AI Neural Matrix"
              fill
              priority
              className="object-cover transition-all duration-700 filter drop-shadow-xl group-hover:brightness-110"
            />

            {/* Scanning Beam Animation Overlay */}
            {isScanning && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent h-20 animate-in fade-in slide-in-from-top-full duration-1000 iteration-infinite" />
            )}

            {/* Ambient Dark Gradient Bottom Vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

            {/* Scanner Status Toast */}
            {scanMessage && (
              <div className="absolute top-4 left-4 right-4 z-20 rounded-xl p-2.5 neu-inset bg-card/90 backdrop-blur-md border border-primary/40 text-[10px] font-mono text-cyan-400 text-center animate-in fade-in zoom-in-95 duration-200">
                ⚡ {scanMessage}
              </div>
            )}

            {/* Bottom Overlay Info Strip */}
            <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between rounded-xl p-2.5 neu-inset bg-card/85 backdrop-blur-md border border-border/40">
              <div className="flex items-center gap-2">
                <div className="grid size-6 place-items-center rounded-lg bg-primary/20 text-primary">
                  <Code2 className="size-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground">IT & Digital Solutions</p>
                  <p className="text-[8px] text-muted-foreground">Web Dev, AI/ML, Video Edit & Graphics</p>
                </div>
              </div>

              <span className="flex items-center gap-1 text-[9px] font-extrabold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <CheckCircle2 className="size-3" /> Live Active
              </span>
            </div>
          </div>
        </div>

        {/* ── Card Footer Specs ──────────────────────────────────── */}
        <div className="px-4 py-3 border-t border-border/40 bg-surface/40 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1.5 text-muted-foreground font-mono">
            <Zap className="size-3.5 text-amber-500" />
            <span>AI Neural Acceleration</span>
          </div>
          <span className="font-mono font-bold text-primary">Sub-0.4s Speed</span>
        </div>
      </div>
    </div>
  );
}
