import { Bootcamp } from "@/components/pages/Home/Bootcamp/Bootcamp";

export const metadata = {
  title: "Bootcamps — CodeArenaX Academy",
  description: "Join CodeArenaX live Free & Paid Bootcamps for Web Development and Competitive Programming.",
};

export default function BootcampsPage() {
  return (
    <main className="pt-16">
      <Bootcamp />
    </main>
  );
}
