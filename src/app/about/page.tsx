import { About } from "@/components/pages/Home/About/About";

export const metadata = {
  title: "About Us — CodeArenaX",
  description: "Learn about CodeArenaX, our mission in IT Solutions (Web, AI/ML, Video Editing, Graphic Design) and Developer Bootcamps.",
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      <About />
    </main>
  );
}
