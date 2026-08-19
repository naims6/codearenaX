export interface FooterGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const groups: FooterGroup[] = [
  {
    title: "IT Solutions",
    links: [
      { label: "Software & Web Development", href: "/services/software-development" },
      { label: "AI & ML Solutions", href: "/services/ai-ml-solutions" },
      { label: "Graphic Design & Branding", href: "/services/graphic-design" },
      { label: "Video Editing & Production", href: "/services/video-editing" },
      { label: "Cloud & DevOps Infra", href: "/services/cloud-devops" },
    ],
  },
  {
    title: "Company & Academy",
    links: [
      { label: "About CodeArenaX", href: "/about" },
      { label: "Our IT Services", href: "/services" },
      { label: "Web & CP Bootcamps", href: "/bootcamps" },
      { label: "Careers & Hiring", href: "/career" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];
