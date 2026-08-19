export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Services" | "Process" | "Pricing" | "Bootcamp" | "General";
}

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    category: "Services",
    question: "What core software services does CodeArenaX provide?",
    answer:
      "CodeArenaX delivers end-to-end software solutions including custom Web & Mobile App engineering, AI/ML integrations (RAG, predictive models, LLMs), Cloud & DevOps infrastructure setup, UI/UX Design & Branding, and Video editing. We also run intensive competitive programming and software bootcamps.",
  },
  {
    id: "faq-2",
    category: "Process",
    question:
      "How long does a typical software project take from start to launch?",
    answer:
      "MVP (Minimum Viable Product) web and mobile applications typically launch in 4 to 8 weeks. Larger enterprise platforms follow 2-week sprint cycles with continuous deployment, ensuring you see tangible progress every two weeks.",
  },
  {
    id: "faq-3",
    category: "Pricing",
    question: "How does CodeArenaX structure project pricing and scope?",
    answer:
      "We offer two flexible models: Fixed-Price Project Contracts with milestone-based billing for clearly defined scopes, and Dedicated Monthly Engineering Teams for ongoing product scaling, features, and iteration.",
  },
  {
    id: "faq-4",
    category: "Services",
    question: "Do I retain 100% ownership of the source code and IP rights?",
    answer:
      "Yes, absolutely. Upon completion of the project and full settlement, 100% of the intellectual property (IP), source code, design systems, and deployment configurations belong entirely to your company.",
  },
  {
    id: "faq-5",
    category: "General",
    question: "Do you offer post-launch support and system maintenance?",
    answer:
      "Yes! Every project includes a 30-day post-launch support and warranty period. After launch, we offer dedicated monthly SLA maintenance packages to handle security updates, cloud optimization, and feature additions.",
  },
  {
    id: "faq-6",
    category: "Bootcamp",
    question:
      "How do I enroll in CodeArenaX Bootcamps or hire program graduates?",
    answer:
      "You can explore our upcoming cohort programs on the Bootcamps page and apply directly online. For companies looking to recruit top-tier engineering talent, our hiring portal connects you with our top bootcamp graduates.",
  },
];
