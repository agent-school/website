"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROICalculator } from "@/components/interactive/ROICalculator";
import { CardSpotlight } from "@/components/aceternity/CardSpotlight";

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Competitor */}
      <CardSpotlight color="rgba(239, 68, 68, 0.3)">
        <motion.div
          whileHover={{ y: -2 }}
          className="h-full rounded-2xl border border-red-200 bg-red-50/50 p-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <h4 className="font-display text-heading-md text-slate-900">
              {competitor.label}
            </h4>
          </div>
          <ul className="space-y-3">
            {competitor.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-body-sm text-slate-700"
              >
                <X
                  size={16}
                  className="text-red-500 mt-0.5 flex-shrink-0"
                  strokeWidth={2.5}
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </CardSpotlight>

      {/* Agent School */}
      <CardSpotlight color="rgba(20, 184, 166, 0.3)">
        <motion.div
          whileHover={{ y: -2 }}
          className="h-full rounded-2xl border border-orange-200 bg-orange-50/50 p-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <h4 className="font-display text-heading-md text-slate-900">
              {agentSchool.label}
            </h4>
          </div>
          <ul className="space-y-3">
            {agentSchool.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-body-sm text-slate-700"
              >
                <Check
                  size={16}
                  className="text-orange-600 mt-0.5 flex-shrink-0"
                  strokeWidth={2.5}
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </CardSpotlight>
    </div>
  );
}

export function Differentiation() {
  const [activeTab, setActiveTab] = useState<"rpa" | "ai">("rpa");

  return (
    <section id="differentiation" className="relative py-24 md:py-32 px-6 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            overline="Why Agent School"
            title="Built Different, Runs Better"
            description="See how Agent School compares to traditional automation and generic AI agents on the metrics that matter: speed, cost, and reliability."
          />
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal>
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-2xl bg-slate-100 p-1.5 gap-1.5">
              <button
                onClick={() => setActiveTab("rpa")}
                className={`relative px-6 py-3 rounded-xl font-display text-sm md:text-base font-semibold transition-colors ${
                  activeTab === "rpa"
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {activeTab === "rpa" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">vs Traditional RPA</span>
              </button>
              <button
                onClick={() => setActiveTab("ai")}
                className={`relative px-6 py-3 rounded-xl font-display text-sm md:text-base font-semibold transition-colors ${
                  activeTab === "ai"
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {activeTab === "ai" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">vs Generic AI Agents</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison Content */}
        <AnimatePresence mode="wait">
          {activeTab === "rpa" && (
            <motion.div
              key="rpa"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ComparisonBlock
                title="vs Traditional RPA"
                competitor={rpaComparison.competitor}
                agentSchool={rpaComparison.agentSchool}
              />
            </motion.div>
          )}
          {activeTab === "ai" && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ComparisonBlock
                title="vs Generic AI Agents"
                competitor={aiComparison.competitor}
                agentSchool={aiComparison.agentSchool}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ROI Calculator */}
        <ScrollReveal delay={0.15}>
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="font-display text-display-sm bg-gradient-to-br from-orange-600 to-orange-500 bg-clip-text text-transparent mb-3">
                Calculate Your ROI
              </h3>
              <p className="text-body-md text-slate-600 max-w-xl mx-auto">
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
