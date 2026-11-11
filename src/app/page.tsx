import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
