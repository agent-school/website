"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams";
import { Button } from "@/components/ui/Button";
import { Agent, AgentVariant } from "@/components/AgentCharacters";
import { BOOKING_URL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const benefits = [
  {
    agent: "bolt",
    label: "Up to 10x Faster",
    sublabel: "Than doing it manually",
    delay: 1.4,
  },
  {
    agent: "cipher",
    label: "A Fraction of the Cost",
    sublabel: "Compared to hiring",
    delay: 1.6,
  },
  {
    agent: "flux",
    label: "Works With Your Tools",
    sublabel: "No software changes needed",
    delay: 1.8,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-24 pb-20 px-6">
      {/* Aceternity Background Beams */}
      <BackgroundBeams className="opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-6"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-slate-900">We Automate Your</span>
            <br />
            <span className="text-orange-600">Business Operations.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          We build custom AI automations tailored to how your business works.
          Show us what you do. We handle the rest.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-12"
        >
          No engineers on your end. No changes to your software. Just results.
        </motion.p>

        {/* Single CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center justify-center mb-32"
        >
          <Button
            size="lg"
            asChild
            className="bg-orange-600 hover:bg-orange-700 text-white shadow-glow-orange border-0 text-base font-semibold px-8 py-6 h-auto"
          >
            <a href={BOOKING_URL} className="flex items-center gap-2">
              Book a Free Discovery Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Benefit Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: benefit.delay,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-2xl p-6 shadow-lg border border-orange-200/50 group"
            >
              {/* Agent Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Agent variant={benefit.agent as AgentVariant} scale={0.5} />
              </div>

              {/* Benefit Label */}
              <p className="text-xl md:text-2xl font-display font-bold mb-1 text-slate-900 leading-tight">
                {benefit.label}
              </p>

              {/* Sublabel */}
              <p className="text-sm font-medium text-slate-500 leading-snug">
                {benefit.sublabel}
              </p>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-orange-500/0 group-hover:bg-orange-500/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
