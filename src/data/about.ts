import { Award, Code2, Cpu, Palette, Rocket, ShieldCheck, Users, Video } from "lucide-react";

export const stats = [
  {
    value: "120+",
    label: "IT Projects Delivered",
    desc: "Web, AI/ML, Media & Custom Software",
    icon: Rocket,
    color: "text-primary",
  },
  {
    value: "1,450+",
    label: "Bootcamp Developers",
    desc: "Trained in Web Dev & CP Arenas",
    icon: Award,
    color: "text-amber-500",
  },
  {
    value: "40+",
    label: "Expert Engineers",
    desc: "Developers, Designers & Editors",
    icon: Users,
    color: "text-cyan-500",
  },
  {
    value: "99.8%",
    label: "Client Satisfaction",
    desc: "Proven track record of quality",
    icon: ShieldCheck,
    color: "text-emerald-500",
  },
];

export const pillars = [
  {
    title: "Web & Software Solutions",
    desc: "Custom web applications, responsive software platforms, and internal tools engineered with Next.js 15, React, and robust backend systems.",
    icon: Code2,
  },
  {
    title: "AI & Machine Learning",
    desc: "Intelligent automation, RAG vector search, AI assistants, and machine learning models integrated directly into enterprise workflows.",
    icon: Cpu,
  },
  {
    title: "Graphic Design & Branding",
    desc: "Visually striking brand identities, UI/UX design systems, and marketing graphics that capture attention and build trust.",
    icon: Palette,
  },
  {
    title: "Video Editing & Production",
    desc: "High-end video post-production, motion graphics, promo reels, and content editing engineered for high audience engagement.",
    icon: Video,
  },
];
