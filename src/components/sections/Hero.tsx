"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Puzzle,
  ShieldCheck,
  RotateCcw,
  ArrowRight,
} from "lucide-react";
import { WordReveal } from "@/components/animations/WordReveal";
import { FloatingBlobs } from "@/components/animations/ParallaxLayer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const conceptBoxes = [
  {
    icon: FileText,
    label: "Teach",
    sublabel: "SOP / Recording / NL",
    delay: 0,
  },
  {
    icon: Puzzle,
    label: "Skill",
    sublabel: "Deterministic Workflow",
    delay: 0.1,
  },
  {
    icon: ShieldCheck,
    label: "Certify",
    sublabel: "Test & Validate",
    delay: 0.2,
  },
  {
    icon: RotateCcw,
    label: "Deploy",
    sublabel: "Deterministic Replay",
    delay: 0.3,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream-50 pt-24 pb-20 px-6">
      <FloatingBlobs />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Overline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="mb-8"
        >
          <Badge variant="amber" size="md">
            The fastest way to teach and certify AI agents
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <WordReveal
          text="We Are a School for AI Agents"
          className="font-display text-display-lg md:text-display-xl text-navy-800 mb-6"
        />

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-body-lg md:text-xl text-charcoal-500 max-w-2xl mx-auto mb-4"
        >
          AI That Learns Once, Runs Repeatedly.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-body-md text-charcoal-400 max-w-xl mx-auto mb-10"
        >
          Stop paying for AI that thinks through every step. Train once,
          certify, and replay deterministically at a fraction of the cost.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button variant="primary" size="lg" href={BOOKING_URL}>
            Book a Demo
            <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg" href="#features">
            Explore Features
          </Button>
        </motion.div>

        {/* Concept Boxes */}
        <div className="relative">
          {/* Connecting line */}
          <svg
            className="absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-[2px] hidden md:block"
            style={{ width: "76%" }}
          >
            <motion.line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#EBE7DF"
              strokeWidth="2"
              strokeDasharray="8 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.6, duration: 1.2, ease: "easeOut" }}
            />
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {conceptBoxes.map((box, i) => (
              <motion.div
                key={box.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.5 + box.delay,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative bg-white rounded-2xl border border-cream-200 p-6 shadow-soft cursor-default group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4 mx-auto group-hover:bg-amber-100 transition-colors">
                  <box.icon
                    size={22}
                    className="text-amber-500"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="font-display font-semibold text-heading-sm text-navy-800 mb-1">
                  {box.label}
                </h3>
                <p className="text-caption text-charcoal-400">
                  {box.sublabel}
                </p>

                {/* Step number */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-cream-100 flex items-center justify-center">
                  <span className="font-mono text-[10px] font-bold text-charcoal-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
