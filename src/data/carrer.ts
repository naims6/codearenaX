export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  skills: string[];
}

export const positions: JobPosition[] = [
  {
    id: "web-dev",
    title: "Full-Stack Web Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "2+ Years",
    description:
      "Build production web applications and modern SaaS tools using Next.js 15, React, Node.js, and PostgreSQL.",
    skills: ["Next.js 15", "TypeScript", "React", "Node.js", "PostgreSQL"],
  },
  {
    id: "ai-engineer",
    title: "AI / ML Solutions Engineer",
    department: "AI Research",
    location: "Remote",
    type: "Full-time",
    experience: "3+ Years",
    description:
      "Develop smart AI workflows, RAG search pipelines, and custom LLM integrations for enterprise client apps.",
    skills: ["Python", "OpenAI API", "Vector DBs", "FastAPI", "LangChain"],
  },
  {
    id: "video-editor",
    title: "Video Editor & Motion Designer",
    department: "Creative Media",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "2+ Years",
    description:
      "Create high-impact video promo reels, YouTube content, and motion graphics for CodeArenaX media campaigns.",
    skills: [
      "Premiere Pro",
      "After Effects",
      "Motion Graphics",
      "Color Grading",
    ],
  },
  {
    id: "graphic-designer",
    title: "Graphic & UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2+ Years",
    description:
      "Craft modern UI/UX design systems, visual branding assets, and marketing graphics for digital solutions.",
    skills: ["Figma", "UI/UX", "Brand Design", "Visual Systems"],
  },
  {
    id: "cp-mentor",
    title: "Competitive Programming Mentor",
    department: "CodeArenaX Academy",
    location: "Remote",
    type: "Part-time / Mentor",
    experience: "Codeforces Candidate Master+",
    description:
      "Lead live CP masterclasses, author contest problems, and mentor students in Data Structures & Algorithms.",
    skills: ["Data Structures", "Algorithms", "Codeforces", "LeetCode"],
  },
];
