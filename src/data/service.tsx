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

export const services: ServiceDetailItem[] = [
  {
    slug: "software-development",
    title: "Software & Web Development",
    desc: "Custom platforms, web apps, and internal tools engineered around your business logic, built to last and scale.",
    longDesc:
      "We design and build production-grade web applications, enterprise SaaS platforms, and custom software systems. Using modern architectures like Next.js 15, React, Node.js, and PostgreSQL, we ensure your application is fast, secure, and ready to scale with your business.",
    category: "Engineering",
    iconName: "Code2",
    glyph: (
      <div className="flex flex-col gap-1.5">
        <span className="block h-1.5 w-10 rounded-full bg-primary/70" />
        <span className="block h-1.5 w-7 rounded-full bg-primary/35" />
        <span className="block h-1.5 w-12 rounded-full bg-primary/20" />
      </div>
    ),
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
    technologies: ["Next.js 15", "TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    benefits: [
      "Sub-second load speeds and 100/100 Lighthouse performance",
      "Scalable infrastructure ready for millions of requests",
      "Clean, modular codebase easy to maintain and extend",
    ],
  },
  {
    slug: "ai-ml-solutions",
    title: "AI & ML Solutions",
    desc: "Smart AI features, intelligent search, automated data processing, and custom ML pipelines embedded into your apps.",
    longDesc:
      "Transform your product with custom AI and Machine Learning integrations. We build custom RAG search engines, AI virtual assistants, automated data extraction tools, and predictive ML models tailored specifically to your data.",
    category: "Artificial Intelligence",
    iconName: "Cpu",
    glyph: (
      <div className="relative size-11">
        <span className="absolute inset-0 rounded-full border-2 border-primary/30" />
        <span className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
      </div>
    ),
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
    technologies: ["Python", "OpenAI API", "Pinecone", "LangChain", "FastAPI", "PyTorch", "Hugging Face"],
    benefits: [
      "Automate 70%+ of repetitive customer & data workflows",
      "Enable instant semantic search over corporate knowledge bases",
      "Unlock new data-driven revenue streams",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design & Branding",
    desc: "Stunning visual identities, brand assets, UI/UX systems, and marketing graphics crafted to elevate your brand presence.",
    longDesc:
      "Your visual identity is the front door to your business. We craft cohesive brand systems, modern UI/UX design components, social media creative assets, and marketing graphics that captivate your audience and build lasting brand value.",
    category: "Creative Design",
    iconName: "Palette",
    glyph: (
      <div className="grid grid-cols-2 gap-1.5">
        <span className="block size-5 rounded-full bg-primary/70" />
        <span className="block size-5 rounded-md bg-primary/25" />
        <span className="block size-5 rounded-md bg-primary/25" />
        <span className="block size-5 rounded-full bg-cyan-soft/60" />
      </div>
    ),
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
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "Penpot", "Rive Animation"],
    benefits: [
      "Establish a premium visual brand that builds immediate credibility",
      "Ensure visual consistency across all digital & physical touchpoints",
      "Improve UI/UX user conversion rates by up to 40%",
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing & Production",
    desc: "Professional video editing, motion graphics, promotional reels, and engaging visual media for products and social campaigns.",
    longDesc:
      "Capture audience attention with high-impact video post-production. From product demo videos and SaaS promotional reels to YouTube media and social ad campaigns, our video production team delivers cinematic motion graphics, crisp audio design, and narrative pacing.",
    category: "Media Production",
    iconName: "Video",
    glyph: (
      <div className="flex items-end gap-1.5">
        <span className="block h-8 w-6 rounded-md bg-primary/25" />
        <span className="block h-10 w-8 rounded-md bg-primary/70" />
      </div>
    ),
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
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Audition", "Cinema 4D"],
    benefits: [
      "Boost engagement and video click-through rates by up to 3x",
      "Present complex software features in digestible visual stories",
      "Accelerate social media reach with polished short-form reels",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps Infra",
    desc: "Reliable cloud infrastructure, automated CI/CD pipelines, and zero-downtime server setups on AWS, Docker, & Vercel.",
    longDesc:
      "Keep your systems fast, secure, and continuously online. We design resilient cloud architectures, automate build and deployment pipelines, and configure comprehensive monitoring and alert systems to make deployments predictable and stress-free.",
    category: "Cloud Infrastructure",
    iconName: "Shield",
    glyph: (
      <div className="flex flex-col items-start gap-1.5">
        <span className="block h-2.5 w-12 rounded-full bg-primary/70" />
        <span className="block h-2.5 w-9 rounded-full bg-primary/35" />
        <span className="block size-2.5 rounded-full bg-cyan-soft" />
      </div>
    ),
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
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx", "Vercel"],
    benefits: [
      "Achieve 99.99% uptime with automated self-healing servers",
      "Reduce cloud hosting overhead expenses by up to 30%",
      "Ship code updates with zero downtime to end users",
    ],
  },
  {
    slug: "digital-solutions",
    title: "Digital Solutions & Integrations",
    desc: "End-to-end digital delivery: API integrations, legacy system modernization, and digital transformation strategy.",
    longDesc:
      "Connect your business software ecosystems into a cohesive powerhouse. We specialize in third-party API integrations, payment gateway setups, CRM/ERP synchronizations, and modernizing legacy codebases into high-velocity digital assets.",
    category: "Enterprise Integration",
    iconName: "Layers",
    glyph: (
      <div className="flex items-center gap-1.5">
        <span className="block size-4 rounded-md bg-primary/70" />
        <span className="block h-0.5 w-4 bg-primary/30" />
        <span className="block size-6 rounded-lg bg-primary/25" />
      </div>
    ),
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
    technologies: ["Node.js", "GraphQL", "REST APIs", "Redis", "Stripe API", "WebSockets", "OAuth2"],
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
