import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Journey } from "@/components/sections/Journey";
import { Differentiation } from "@/components/sections/Differentiation";
import { UseCases } from "@/components/sections/UseCases";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Journey />
        <Differentiation />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
