"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROICalculator } from "@/components/interactive/ROICalculator";

const rpaComparison = {
  competitor: {
    label: "Traditional RPA",
    items: [
      "Breaks when UI changes",
      "Requires technical specialists to build",
      "High ongoing maintenance cost",
      "Scripts are opaque black boxes",
      "Months to implement new workflows",
    ],
  },
  agentSchool: {
    label: "Agent School",
    items: [
      "Self-healing adapts automatically",
      "Non-technical users create skills",
      "Certified reliability, low maintenance",
      "Full transparency into execution",
      "Days to teach and certify new skills",
    ],
  },
};

const aiComparison = {
  competitor: {
    label: "Generic AI Agents",
    items: [
      "45–60s per task (step-by-step reasoning)",
      "High token costs per execution ($0.10–$0.50)",
      "85–90% reliability in production",
      "Unpredictable behavior, hard to audit",
      "No formal testing or certification",
    ],
  },
  agentSchool: {
    label: "Agent School",
    items: [
      "2–3s per task (deterministic replay)",
      "Fraction of cost per execution ($0.01–$0.15)",
      "95–99% certified reliability",
      "Auditable, consistent, deterministic",
      "Full certification pipeline with test suites",
    ],
  },
};

function ComparisonBlock({
  title,
  competitor,
  agentSchool,
}: {
  title: string;
  competitor: { label: string; items: string[] };
  agentSchool: { label: string; items: string[] };
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {/* Competitor */}
      <motion.div
        whileHover={{ y: -2 }}
        className="rounded-2xl border border-red-100 bg-red-50/30 p-6"
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="w-3 h-3 rounded-full bg-red-300" />
          <h4 className="font-display text-heading-md text-navy-800">
            {competitor.label}
          </h4>
        </div>
        <ul className="space-y-3">
          {competitor.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-body-sm text-charcoal-600"
            >
              <X
                size={16}
                className="text-red-400 mt-0.5 flex-shrink-0"
                strokeWidth={2.5}
              />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Agent School */}
      <motion.div
        whileHover={{ y: -2 }}
        className="rounded-2xl border border-green-100 bg-green-50/30 p-6"
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <h4 className="font-display text-heading-md text-navy-800">
            {agentSchool.label}
          </h4>
        </div>
        <ul className="space-y-3">
          {agentSchool.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-body-sm text-charcoal-600"
            >
              <Check
                size={16}
                className="text-green-500 mt-0.5 flex-shrink-0"
                strokeWidth={2.5}
              />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function Differentiation() {
  return (
    <section id="differentiation" className="py-24 md:py-32 px-6 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            overline="Why Agent School"
            title="Built Different, Runs Better"
            description="See how Agent School compares to traditional automation and generic AI agents on the metrics that matter: speed, cost, and reliability."
          />
        </ScrollReveal>

        {/* vs RPA */}
        <ScrollReveal>
          <h3 className="font-display text-heading-lg text-navy-800 mb-6 text-center">
            vs Traditional RPA
          </h3>
          <ComparisonBlock
            title="vs Traditional RPA"
            competitor={rpaComparison.competitor}
            agentSchool={rpaComparison.agentSchool}
          />
        </ScrollReveal>

        {/* vs Generic AI */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-display text-heading-lg text-navy-800 mb-6 text-center">
            vs Generic AI Agents
          </h3>
          <ComparisonBlock
            title="vs Generic AI Agents"
            competitor={aiComparison.competitor}
            agentSchool={aiComparison.agentSchool}
          />
        </ScrollReveal>

        {/* ROI Calculator */}
        <ScrollReveal delay={0.15}>
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="font-display text-display-sm text-navy-800 mb-3">
                Calculate Your ROI
              </h3>
              <p className="text-body-md text-charcoal-500 max-w-xl mx-auto">
                Input your workflow details and see projected savings. Real math,
                no hand-waving.
              </p>
            </div>
            <ROICalculator />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
