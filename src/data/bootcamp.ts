export interface BootcampItem {
  id: string;
  title: string;
  category: "web" | "cp" | "ai";
  categoryLabel: string;
  tier: "Free & Paid" | "Free Starter" | "Paid Intensive";
  isFreeAvailable: boolean;
  duration: string;
  level: string;
  rating: number;
  studentsCount: string;
  startDate: string;
  description: string;
  topics: string[];
  highlights: string[];
  pricing: {
    freeTierDesc?: string;
    paidTierPrice?: string;
  };
}

export const bootcamps: BootcampItem[] = [
  {
    id: "web-dev-mastery",
    title: "Full-Stack Web Development Bootcamp",
    category: "web",
    categoryLabel: "Web Development",
    tier: "Free & Paid",
    isFreeAvailable: true,
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    rating: 4.9,
    studentsCount: "1,450+ Enrolled",
    startDate: "Starts Sept 1, 2026",
    description:
      "Master modern web development from HTML/CSS fundamentals to production-grade Next.js 15, React, Node.js, PostgreSQL, and Cloud Deployment. Build 4 real-world client projects.",
    topics: ["Next.js 15", "TypeScript", "React 19", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    highlights: [
      "Live Interactive Mentorship Sessions",
      "Free Tier: Core HTML, CSS & JS Fundamentals",
      "Paid Immersion: 1-on-1 Code Reviews & Placement Assistance",
      "Capstone Project: Full-Stack SaaS Deployment",
    ],
    pricing: {
      freeTierDesc: "Free Access to Core Track",
      paidTierPrice: "$99 Immersion Pass",
    },
  },
  {
    id: "cp-dsa-masterclass",
    title: "Competitive Programming & DSA Arena",
    category: "cp",
    categoryLabel: "Competitive Programming",
    tier: "Free & Paid",
    isFreeAvailable: true,
    duration: "8 Weeks",
    level: "Intermediate to CP Master",
    rating: 5.0,
    studentsCount: "1,120+ Programmers",
    startDate: "Starts Sept 10, 2026",
    description:
      "Boost your Codeforces rating and crack FAANG technical interviews. Master Data Structures, Algorithms, Dynamic Programming, Graphs, and Math with weekly contest battles.",
    topics: ["Data Structures", "Dynamic Programming", "Graph Theory", "Binary Search", "Math & Number Theory", "Codeforces / LeetCode"],
    highlights: [
      "Weekly Live Contest Arena & Editorial Breakdown",
      "Free Tier: Basic Data Structures & 50 Problem Set",
      "Paid Tier: 200+ Hard Problems & Rating Guarantee",
      "1-on-1 CP Strategy & Mock Interviews",
    ],
    pricing: {
      freeTierDesc: "Free Access to Weekly Contests",
      paidTierPrice: "$79 Masterclass Pass",
    },
  },
  {
    id: "ai-software-engineering",
    title: "AI & Modern Software Engineering Bootcamp",
    category: "ai",
    categoryLabel: "AI & Cloud Architecture",
    tier: "Paid Intensive",
    isFreeAvailable: false,
    duration: "6 Weeks",
    level: "Intermediate to Senior",
    rating: 4.95,
    studentsCount: "520+ Engineers",
    startDate: "Starts Sept 15, 2026",
    description:
      "Learn to engineer production-ready AI features, custom RAG vector search pipelines, LLM fine-tuning, and scalable cloud microservices with Python and Node.js.",
    topics: ["OpenAI API", "Vector DB (Pinecone)", "Python", "RAG Architecture", "LangChain", "FastAPI", "AWS Cloud"],
    highlights: [
      "Build 3 Production AI Microservices",
      "Live Architecture Breakdown & Code Reviews",
      "Verified Certificate of AI Engineering Mastery",
      "Direct Hiring Referral to CodeArenaX Network",
    ],
    pricing: {
      paidTierPrice: "$149 Executive Pass",
    },
  },
];
