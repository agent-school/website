"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams";
import { HyperText } from "@/components/magic/HyperText";
import { NumberTicker } from "@/components/magic/NumberTicker";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Agent, AgentVariant } from "@/components/AgentCharacters";
import { BOOKING_URL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  {
    agent: "bolt",
    value: 99,
    suffix: "%",
    label: "Accuracy Rate",
    delay: 1.6,
  },
  {
    agent: "cipher",
    value: 10,
    suffix: "x",
    label: "Faster Training",
    delay: 1.8,
  },
  {
    agent: "flux",
    value: 95,
    suffix: "%",
    label: "Cost Reduction",
    delay: 2.0,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-24 pb-20 px-6">
      {/* Aceternity Background Beams */}
      <BackgroundBeams className="opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Overline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8"
        >
          <Badge className="px-4 py-2 text-sm font-mono uppercase tracking-widest border border-orange-500/50 text-orange-600 bg-orange-50/50">
            The Future of AI Automation
          </Badge>
        </motion.div>

        {/* Main Headline with HyperText Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-6"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <HyperText
              className="text-orange-600"
              duration={1500}
              delay={400}
            >
              Turn Human Knowledge
            </HyperText>
            <br />
            <span className="text-slate-900">
              Into AI That Never Forgets
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          The first platform that transforms human expertise into certified AI
          agents. Teach once. Deploy everywhere. Automate forever.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-12"
        >
          Stop paying for AI that rethinks every task. Train deterministic
          workflows that execute flawlessly at a fraction of the cost.
        </motion.p>

        {/* CTAs with Gradient Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-32"
        >
          <Button
            size="lg"
            asChild
            className="bg-orange-600 hover:bg-orange-700 text-white shadow-glow-orange border-0 text-base font-semibold px-8 py-6 h-auto"
          >
            <a href={BOOKING_URL} className="flex items-center gap-2">
              Join The Revolution
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-stone-300 text-stone-700 hover:border-orange-500 hover:text-orange-600 text-base font-semibold px-8 py-6 h-auto"
          >
            <a href="#features">Explore Capabilities</a>
          </Button>
        </motion.div>

        {/* Animated Stats with NumberTicker */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: stat.delay,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative glass-card rounded-2xl p-6 shadow-lg border border-orange-200/50 group"
            >
              {/* Agent Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Agent variant={stat.agent as AgentVariant} scale={0.5} />
              </div>

              {/* Animated Number */}
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-orange-600">
                <NumberTicker value={stat.value} />
                {stat.suffix}
              </div>

              {/* Label */}
              <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                {stat.label}
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
