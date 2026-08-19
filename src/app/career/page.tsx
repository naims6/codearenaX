import { Career } from "@/components/pages/Home/Career/Career";

export const metadata = {
  title: "Careers — CodeArenaX",
  description: "Join CodeArenaX. Explore open positions for Web Developers, AI/ML Engineers, Video Editors, Graphic Designers, and CP Mentors.",
};

export default function CareerPage() {
  return (
    <main className="pt-16">
      <Career />
    </main>
  );
}
