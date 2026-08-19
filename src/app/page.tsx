import { Hero } from "@/components/pages/Home/Hero/Hero";
import { Services } from "@/components/pages/Home/Service/Service";
import { WhyUs } from "@/components/pages/Home/WhyUs/WhyUs";
import { Process } from "@/components/pages/Home/Process/Process";

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
