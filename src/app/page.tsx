import { Hero } from "@/components/pages/Home/Hero/Hero";
import { Process } from "@/components/pages/Home/Process/Process";
import { Services } from "@/components/pages/Home/Service/Service";
import { WhyUs } from "@/components/pages/Home/WhyUs/WhyUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
    </div>
  );
}
