import { Hero } from "@/components/pages/Home/Hero/Hero";
import { Process } from "@/components/pages/Home/Process/Process";
import { Services } from "@/components/pages/Home/Service/Service";
import { Bootcamp } from "@/components/pages/Home/Bootcamp/Bootcamp";
import { WhyUs } from "@/components/pages/Home/WhyUs/WhyUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Bootcamp />
      <WhyUs />
      <Process />
    </div>
  );
}
