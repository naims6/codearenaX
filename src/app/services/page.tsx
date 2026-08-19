import { Services } from "@/components/pages/Home/Service/Service";

export const metadata = {
  title: "Services — CodeArenaX IT Solutions",
  description: "Explore our full range of IT Solutions: Software & Web Development, AI & Machine Learning, Graphic Design, Video Editing, and Cloud Infrastructure.",
};

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <Services />
    </main>
  );
}
