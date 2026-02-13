import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogosSection } from "@/components/sections/LogosSection";
import { Features } from "@/components/sections/Features";
import { Journey } from "@/components/sections/Journey";
import { Testimonials } from "@/components/sections/Testimonials";
import { Differentiation } from "@/components/sections/Differentiation";
import { UseCases } from "@/components/sections/UseCases";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogosSection />
        <Features />
        <Journey />
        <Testimonials />
        <Differentiation />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
