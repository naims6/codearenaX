import React from "react";

export interface ServiceDetailItem {
  slug: string;
  title: string;
  desc: string;
  longDesc: string;
  category: string;
  iconName: string;
  glyph: React.ReactNode;
  features: string[];
  deliverables: string[];
  technologies: string[];
  benefits: string[];
}

/** Software Development — animated code editor */
const CodeAnim = () => (
  <div
    className="relative w-full overflow-hidden"
    style={{ height: 140, background: "var(--color-surface-2)" }}
  >
    {/* scanline sweep */}
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-8"
      style={{
        background:
          "linear-gradient(to bottom, transparent, oklch(0.54 0.20 258 / 0.12), transparent)",
        animation: "svc-scanline 3.5s linear infinite",
      }}
    />

    {/* top bar */}
    <div
      className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border"
      style={{ background: "var(--color-surface)" }}
    >
      <span className="size-2.5 rounded-full bg-red-400/70" />
      <span className="size-2.5 rounded-full bg-yellow-400/70" />
      <span className="size-2.5 rounded-full bg-green-400/70" />
      <span className="ml-3 text-[10px] text-muted-foreground font-mono opacity-60">
        index.tsx
      </span>
    </div>

    {/* typing lines */}
    <div className="flex flex-col gap-2 px-4 pt-3 pb-4">
      {[
        { color: "oklch(0.54 0.20 258)", w: "72%", delay: "0s" },
        { color: "oklch(0.55 0.18 175)", w: "55%", delay: "0.4s" },
        { color: "oklch(0.54 0.20 258)", w: "85%", delay: "0.8s" },
        { color: "oklch(0.60 0.14 220)", w: "40%", delay: "1.2s" },
        { color: "oklch(0.55 0.10 255)", w: "60%", delay: "1.6s" },
      ].map(({ color, w, delay }, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-5 text-right text-[9px] font-mono text-muted-foreground opacity-50">
            {i + 1}
          </span>
          <div
            className="h-1.5 rounded-full"
            style={{
              background: color,
              width: w,
              opacity: 0.75,
              animation: `svc-line-grow 1.2s ease-out ${delay} both`,
            }}
          />
          {i === 1 && (
            <div
              className="h-3 w-px bg-foreground/60"
              style={{ animation: "svc-cursor-blink 0.9s step-end infinite" }}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

/** AI Solutions — neural network with orbiting nodes */
const AIAnim = () => (
  <div
    className="relative flex w-full items-center justify-center overflow-hidden"
    style={{ height: 140, background: "var(--color-surface-2)" }}
  >
    {/* subtle radial glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, oklch(0.54 0.20 258 / 0.07) 0%, transparent 70%)",
      }}
    />

    {/* outer pulse rings */}
    {[1, 2, 3].map((n) => (
      <span
        key={n}
        className="absolute rounded-full border border-primary/25"
        style={{
          width: n * 44,
          height: n * 44,
          animation: `svc-ring-pulse ${2 + n * 0.8}s ease-in-out infinite`,
          animationDelay: `${n * 0.4}s`,
        }}
      />
    ))}

    {/* orbiting dot 1 */}
    <div
      className="absolute"
      style={{ animation: "svc-dot-orbit 3.5s linear infinite" }}
    >
      <span
        className="block size-3 rounded-full bg-primary shadow-lg"
        style={{ boxShadow: "0 0 8px oklch(0.54 0.20 258 / 0.6)" }}
      />
    </div>

    {/* orbiting dot 2 */}
    <div
      className="absolute"
      style={{ animation: "svc-dot-orbit-r 5s linear infinite" }}
    >
      <span
        className="block size-2 rounded-full"
        style={{
          background: "oklch(0.60 0.18 220)",
          boxShadow: "0 0 6px oklch(0.60 0.18 220 / 0.6)",
        }}
      />
    </div>

    {/* core */}
    <div
      className="relative z-10 flex size-10 items-center justify-center rounded-full bg-primary"
      style={{
        boxShadow: "0 0 20px oklch(0.54 0.20 258 / 0.4)",
        animation: "svc-core-breathe 2.4s ease-in-out infinite",
      }}
    >
      <span className="text-white text-xs font-bold font-mono">AI</span>
    </div>
  </div>
);

/** Design & Branding — animated color swatches */
const DesignAnim = () => {
  const swatches = [
    { color: "oklch(0.54 0.20 258)", delay: "0s", size: 40 },
    { color: "oklch(0.55 0.18 175)", delay: "0.25s", size: 36 },
    { color: "oklch(0.68 0.22 30)", delay: "0.5s", size: 44 },
    { color: "oklch(0.60 0.14 220)", delay: "0.75s", size: 36 },
    { color: "oklch(0.60 0.18 300)", delay: "1s", size: 32 },
  ];

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ height: 140, background: "var(--color-surface-2)" }}
    >
      {/* top label */}
      <div className="absolute top-3 left-0 right-0 flex justify-center">
        <span className="text-[9px] font-mono text-muted-foreground opacity-50 tracking-widest uppercase">
          design system
        </span>
      </div>

      {/* colour dots row */}
      <div className="absolute top-8 flex gap-1.5">
        {swatches.map(({ color }, i) => (
          <span
            key={i}
            className="size-2.5 rounded-full"
            style={{ background: color }}
          />
        ))}
      </div>

      {/* floating swatches */}
      <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
        {swatches.map(({ color, delay, size }, i) => (
          <div
            key={i}
            className="rounded-xl shadow-md"
            style={{
              width: size,
              height: size,
              background: color,
              opacity: 0.88,
              animation: `svc-swatch-pop 3s ease-in-out infinite, svc-palette-drift ${2.5 + i * 0.3}s ease-in-out infinite`,
              animationDelay: delay,
              boxShadow: `0 4px 14px ${color}55`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

/** Video Editing — audio waveform */
const VideoAnim = () => {
  const bars = [
    0.3, 0.6, 0.9, 0.55, 1, 0.75, 0.45, 0.8, 0.35, 0.65, 0.95, 0.5, 0.7, 0.4,
    0.85,
  ];

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ height: 140, background: "var(--color-surface-2)" }}
    >
      {/* play button */}
      <div className="absolute left-4 top-4 flex size-7 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
        <span className="ml-0.5 text-primary text-[10px]">▶</span>
      </div>

      {/* timeline */}
      <div className="absolute bottom-5 inset-x-4 h-0.5 rounded-full bg-border overflow-hidden">
        <div className="h-full w-[42%] rounded-full bg-primary" />
        <div
          className="absolute top-1/2 size-3 rounded-full bg-primary shadow-sm border-2 border-card"
          style={{ left: "42%", transform: "translate(-50%,-50%)" }}
        />
      </div>

      {/* waveform */}
      <div className="flex items-center gap-0.5 px-6 pb-4">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-full origin-bottom"
            style={{
              height: `${h * 55}px`,
              background:
                i < 6 ? "oklch(0.54 0.20 258)" : "oklch(0.54 0.20 258 / 0.25)",
              animation: `svc-bar-wave ${0.8 + (i % 5) * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.06}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

/** Cloud & DevOps — orbiting nodes around server stack */
const CloudAnim = () => (
  <div
    className="relative flex w-full items-center justify-center overflow-hidden"
    style={{ height: 140, background: "var(--color-surface-2)" }}
  >
    {/* subtle radial glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, oklch(0.54 0.20 258 / 0.05) 0%, transparent 70%)",
      }}
    />

    {/* orbit rings */}
    <div
      className="absolute size-[88px] rounded-full border border-dashed border-primary/20"
      style={{ animation: "why-arc-spin 12s linear infinite" }}
    />
    <div
      className="absolute size-[60px] rounded-full border border-dashed border-primary/15"
      style={{ animation: "why-arc-spin 8s linear infinite reverse" }}
    />

    {/* orbiting nodes */}
    <div
      className="absolute"
      style={{ animation: "svc-cloud-orbit 4s linear infinite" }}
    >
      <div
        className="size-3.5 rounded-full bg-primary"
        style={{
          boxShadow: "0 0 8px oklch(0.54 0.20 258 / 0.5)",
          animation: "svc-server-pulse 2s ease infinite",
        }}
      />
    </div>
    <div
      className="absolute"
      style={{ animation: "svc-cloud-orbit-r 6s linear infinite" }}
    >
      <div
        className="size-2.5 rounded-full"
        style={{
          background: "oklch(0.60 0.18 220)",
          boxShadow: "0 0 6px oklch(0.60 0.18 220 / 0.6)",
        }}
      />
    </div>
    <div
      className="absolute"
      style={{
        animation: "svc-cloud-orbit 7s linear infinite",
        animationDelay: "-3.5s",
      }}
    >
      <div
        className="size-2 rounded-full"
        style={{
          background: "oklch(0.55 0.18 160)",
          boxShadow: "0 0 5px oklch(0.55 0.18 160 / 0.6)",
        }}
      />
    </div>

    {/* server stack */}
    <div className="relative z-10 flex flex-col items-center gap-1">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="flex h-3 w-16 items-center gap-1 rounded-sm px-1 border border-border"
          style={{ background: "var(--color-surface)" }}
        >
          <span
            className="size-1.5 rounded-full"
            style={{
              background:
                n === 1 ? "oklch(0.54 0.20 258)" : "var(--color-border)",
              animation:
                n === 1 ? "svc-server-pulse 1.5s ease infinite" : "none",
            }}
          />
          <div className="h-0.5 flex-1 rounded-full bg-border" />
        </div>
      ))}
    </div>
  </div>
);

/** Digital Solutions — SVG data-flow graph */
const DigitalAnim = () => (
  <div
    className="relative w-full overflow-hidden"
    style={{ height: 140, background: "var(--color-surface-2)" }}
  >
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 240 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* connection lines */}
      <line
        x1="40"
        y1="70"
        x2="120"
        y2="40"
        stroke="oklch(0.54 0.20 258 / 0.3)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <line
        x1="40"
        y1="70"
        x2="120"
        y2="100"
        stroke="oklch(0.54 0.20 258 / 0.3)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <line
        x1="120"
        y1="40"
        x2="200"
        y2="70"
        stroke="oklch(0.54 0.20 258 / 0.3)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <line
        x1="120"
        y1="100"
        x2="200"
        y2="70"
        stroke="oklch(0.54 0.20 258 / 0.3)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* flow packets */}
      <circle r="3" fill="oklch(0.54 0.20 258)" opacity="0.9">
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          path="M40,70 L120,40 L200,70"
        />
      </circle>
      <circle r="3" fill="oklch(0.60 0.18 220)" opacity="0.9">
        <animateMotion
          dur="2.8s"
          repeatCount="indefinite"
          begin="1s"
          path="M40,70 L120,100 L200,70"
        />
      </circle>

      {/* nodes */}
      <circle
        cx="40"
        cy="70"
        r="10"
        fill="oklch(0.54 0.20 258 / 0.08)"
        stroke="oklch(0.54 0.20 258 / 0.5)"
        strokeWidth="1.5"
      />
      <circle cx="40" cy="70" r="4" fill="oklch(0.54 0.20 258)">
        <animate
          attributeName="r"
          values="3;5;3"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.8;1;0.8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="120"
        cy="40"
        r="9"
        fill="oklch(0.60 0.18 220 / 0.08)"
        stroke="oklch(0.60 0.18 220 / 0.45)"
        strokeWidth="1.5"
      />
      <circle cx="120" cy="40" r="3.5" fill="oklch(0.60 0.18 220)">
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </circle>

      <circle
        cx="120"
        cy="100"
        r="9"
        fill="oklch(0.60 0.18 300 / 0.08)"
        stroke="oklch(0.60 0.18 300 / 0.45)"
        strokeWidth="1.5"
      />
      <circle cx="120" cy="100" r="3.5" fill="oklch(0.60 0.18 300)">
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="2.2s"
          repeatCount="indefinite"
          begin="0.8s"
        />
      </circle>

      <circle
        cx="200"
        cy="70"
        r="11"
        fill="oklch(0.54 0.20 258 / 0.08)"
        stroke="oklch(0.54 0.20 258 / 0.6)"
        strokeWidth="2"
      />
      <circle cx="200" cy="70" r="5" fill="oklch(0.54 0.20 258)">
        <animate
          attributeName="r"
          values="4;7;4"
          dur="1.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.7;1;0.7"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>

    {/* label */}
    <div className="absolute bottom-3 right-3 rounded-md px-2 py-1 text-[9px] font-mono text-muted-foreground opacity-50 border border-border">
      API mesh
    </div>
  </div>
);

export const services: ServiceDetailItem[] = [
  {
    slug: "software-development",
    title: "Software Development",
    desc: "Custom platforms, web apps, and internal tools engineered around your business logic, built to last and scale.",
    longDesc:
      "We design and build production-grade web applications, enterprise SaaS platforms, and custom software systems. Using modern architectures like Next.js 15, React, Node.js, and PostgreSQL, we ensure your application is fast, secure, and ready to scale with your business.",
    category: "Engineering",
    iconName: "Code2",
    glyph: <CodeAnim />,
    features: [
      "Custom SaaS & Web Platform Architecture",
      "API First & Microservices Design",
      "High Performance Frontend (Next.js 15, React 19)",
      "Robust Backend Services & Database Optimization",
      "Automated CI/CD Deployment & Testing",
    ],
    deliverables: [
      "Fully functional production codebase",
      "REST & GraphQL API Documentation",
      "Database Schemas & Migration Scripts",
      "Admin Dashboard & Role Access Controls",
      "30-Day Post-Launch Support & Warranty",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
    ],
    benefits: [
      "Sub-second load speeds and 100/100 Lighthouse performance",
      "Scalable infrastructure ready for millions of requests",
      "Clean, modular codebase easy to maintain and extend",
    ],
  },
  {
    slug: "ai-ml-solutions",
    title: "AI Solutions",
    desc: "Smart AI features, intelligent search, automated data processing, and custom ML pipelines embedded into your apps.",
    longDesc:
      "Transform your product with custom AI and Machine Learning integrations. We build custom RAG search engines, AI virtual assistants, automated data extraction tools, and predictive ML models tailored specifically to your data.",
    category: "Artificial Intelligence",
    iconName: "Cpu",
    glyph: <AIAnim />,
    features: [
      "Custom RAG (Retrieval-Augmented Generation) Vector Pipelines",
      "OpenAI & Custom Open-Source LLM Fine-Tuning",
      "Intelligent Document Processing & Semantic Search",
      "Predictive Analytics & Recommendation Engines",
      "Automated AI Customer Support Agents",
    ],
    deliverables: [
      "Trained ML models & Fine-tuned LLM Endpoints",
      "Vector Database Setup (Pinecone / Qdrant)",
      "Interactive AI Chat & Automation Widgets",
      "Performance & Latency Optimization Reports",
      "Full Integration Codebase & API Wrappers",
    ],
    technologies: [
      "Python",
      "OpenAI API",
      "Pinecone",
      "LangChain",
      "FastAPI",
      "PyTorch",
      "Hugging Face",
    ],
    benefits: [
      "Automate 70%+ of repetitive customer & data workflows",
      "Enable instant semantic search over corporate knowledge bases",
      "Unlock new data-driven revenue streams",
    ],
  },
  {
    slug: "graphic-design",
    title: "Design & Branding",
    desc: "Stunning visual identities, brand assets, UI/UX systems, and marketing graphics crafted to elevate your brand presence.",
    longDesc:
      "Your visual identity is the front door to your business. We craft cohesive brand systems, modern UI/UX design components, social media creative assets, and marketing graphics that captivate your audience and build lasting brand value.",
    category: "Creative Design",
    iconName: "Palette",
    glyph: <DesignAnim />,
    features: [
      "Complete Brand Identity & Logo Design Systems",
      "UI/UX Interface & Interactive Prototype Design",
      "Marketing Collateral & Social Media Creative Kits",
      "Pitch Deck & Executive Presentation Design",
      "Scalable Design Systems & Figma Libraries",
    ],
    deliverables: [
      "Vector Logo Assets (SVG, EPS, PNG, PDF)",
      "Brand Guidelines Book (Typography, Colors, Usage)",
      "Interactive Figma Design File & Components",
      "Social Media Kit & Ad Creative Templates",
      "Print-Ready Marketing Materials",
    ],
    technologies: [
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "InDesign",
      "Penpot",
      "Rive Animation",
    ],
    benefits: [
      "Establish a premium visual brand that builds immediate credibility",
      "Ensure visual consistency across all digital & physical touchpoints",
      "Improve UI/UX user conversion rates by up to 40%",
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    desc: "Professional video editing, motion graphics, promotional reels, and engaging visual media for products and social campaigns.",
    longDesc:
      "Capture audience attention with high-impact video post-production. From product demo videos and SaaS promotional reels to YouTube media and social ad campaigns, our video editing team delivers cinematic motion graphics, crisp audio design, and narrative pacing.",
    category: "Media Production",
    iconName: "Video",
    glyph: <VideoAnim />,
    features: [
      "Product Demo & Commercial Video Editing",
      "Motion Graphics, 2D/3D Title Animations",
      "Social Media Reels, Shorts & Ad Creatives",
      "Audio Noise Reduction, Sound Design & Scoring",
      "Color Grading & Cinematic Visual Effects",
    ],
    deliverables: [
      "Full HD & 4K Master Video Renders (MP4, MOV)",
      "Optimized Formats for Mobile, Web, YouTube & Socials",
      "Subtitles & Captions Files (.SRT)",
      "Raw Project Files & Asset Packages",
      "Multiple Aspect Ratio Exports (16:9, 9:16, 1:1)",
    ],
    technologies: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Audition",
      "Cinema 4D",
    ],
    benefits: [
      "Boost engagement and video click-through rates by up to 3x",
      "Present complex software features in digestible visual stories",
      "Accelerate social media reach with polished short-form reels",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    desc: "Reliable cloud infrastructure, automated CI/CD pipelines, and zero-downtime server setups on AWS, Docker, & Vercel.",
    longDesc:
      "Keep your systems fast, secure, and continuously online. We design resilient cloud architectures, automate build and deployment pipelines, and configure comprehensive monitoring and alert systems to make deployments predictable and stress-free.",
    category: "Cloud Infrastructure",
    iconName: "Shield",
    glyph: <CloudAnim />,
    features: [
      "Automated CI/CD Pipeline Configuration (GitHub Actions / GitLab)",
      "Docker Containerization & Kubernetes Orchestration",
      "Infrastructure as Code (Terraform / CloudFormation)",
      "Zero-Downtime Migration & Database Replication",
      "24/7 Monitoring, Logging & Alerting Setup",
    ],
    deliverables: [
      "Terraform / Infrastructure Code Repositories",
      "Docker Compose & Kubernetes Deployment Files",
      "Grafana / Datadog Monitoring Dashboards",
      "SSL Certificate & Security Hardening Audit",
      "Disaster Recovery & Backup Schedules",
    ],
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Nginx",
      "Vercel",
    ],
    benefits: [
      "Achieve 99.99% uptime with automated self-healing servers",
      "Reduce cloud hosting overhead expenses by up to 30%",
      "Ship code updates with zero downtime to end users",
    ],
  },
  {
    slug: "digital-solutions",
    title: "Digital Solutions",
    desc: "End-to-end digital delivery: API integrations, legacy system modernization, and digital transformation strategy.",
    longDesc:
      "Connect your business software ecosystems into a cohesive powerhouse. We specialize in third-party API integrations, payment gateway setups, CRM/ERP synchronizations, and modernizing legacy codebases into high-velocity digital assets.",
    category: "Enterprise Integration",
    iconName: "Layers",
    glyph: <DigitalAnim />,
    features: [
      "Payment Gateway Integrations (Stripe, PayPal, Local Gateways)",
      "CRM & ERP Data Sync (Salesforce, Hubspot, Custom DBs)",
      "Legacy Codebase Refactoring & API Wrapper Creation",
      "Real-time WebSockets & Event-Driven Workflows",
      "Security Audits & OAuth2 Authentication Setup",
    ],
    deliverables: [
      "Integration Connector Modules & Webhooks",
      "Security Compliance & Data Flow Audit Reports",
      "API Middleware Infrastructure",
      "Detailed Developer Documentation & Endpoints",
      "Handshake Testing & Staging Environment Setup",
    ],
    technologies: [
      "Node.js",
      "GraphQL",
      "REST APIs",
      "Redis",
      "Stripe API",
      "WebSockets",
      "OAuth2",
    ],
    benefits: [
      "Eliminate manual data entry across disconnected tools",
      "Process global payments securely with instant webhook updates",
      "Extend the lifespan of existing legacy business software",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetailItem | undefined {
  return services.find((s) => s.slug === slug);
}
