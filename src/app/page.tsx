import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Transformation from "@/components/sections/Transformation";
import HowItWorks from "@/components/sections/HowItWorks";
import Industries from "@/components/sections/Industries";
import Differentiators from "@/components/sections/Differentiators";
import Founder from "@/components/sections/Founder";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PainPoints />
        <Transformation />
        <HowItWorks />
        <Industries />
        <Differentiators />
        <Founder />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
