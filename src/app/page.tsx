import { Hero } from "@/components/pages/Home/Hero/Hero";
import { Services } from "@/components/pages/Home/Service/Service";
import { WhyUs } from "@/components/pages/Home/WhyUs/WhyUs";
import { Process } from "@/components/pages/Home/Process/Process";
import { Bootcamp } from "@/components/pages/Home/Bootcamp/Bootcamp";
import { Faq } from "@/components/pages/Home/Faq/Faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyUs />
      <Bootcamp />
      <Process />
      <Faq />
    </div>
  );
}
