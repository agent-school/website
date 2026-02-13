"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  DollarSign,
  TrendingDown,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CardSpotlight } from "@/components/aceternity/CardSpotlight";
import { USE_CASES } from "@/lib/constants";

function DemoLoadingState() {
  return (
    <div className="w-full h-[500px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center">
      <div className="text-center space-y-3">
        <div className="w-8 h-8 border-3 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm text-slate-500 dark:text-slate-400">Loading demo...</p>
      </div>
    </div>
  );
}

const HotelPMSDemo = dynamic(() => import("@/components/mocks/hotel-pms").then((mod) => ({ default: mod.HotelPMSDemo })), {
  loading: () => <DemoLoadingState />,
  ssr: false,
});

const CRMDemo = dynamic(() => import("@/components/mocks/crm").then((mod) => ({ default: mod.CRMDemo })), {
  loading: () => <DemoLoadingState />,
  ssr: false,
});

const InstagramDemo = dynamic(() => import("@/components/mocks/instagram").then((mod) => ({ default: mod.InstagramDemo })), {
  loading: () => <DemoLoadingState />,
  ssr: false,
});

const NotionDemo = dynamic(() => import("@/components/mocks/notion").then((mod) => ({ default: mod.NotionDemo })), {
  loading: () => <DemoLoadingState />,
  ssr: false,
});

const GranolaDemo = dynamic(() => import("@/components/mocks/granola").then((mod) => ({ default: mod.GranolaDemo })), {
  loading: () => <DemoLoadingState />,
  ssr: false,
});

// Map use case IDs to their corresponding demo components
const DEMO_COMPONENTS = {
  hotel: HotelPMSDemo,
  sales: CRMDemo,
  operations: NotionDemo, // Using Notion for operations/task automation
  social: InstagramDemo,
  meeting: GranolaDemo,
} as const;

// Map for the two additional demos not in original USE_CASES
const ADDITIONAL_DEMOS = [
  {
    id: "social",
    label: "Social Media",
    component: InstagramDemo,
    scenario: "Categorize and prioritize Instagram DMs",
    suggestedQuery: "Try: 'Show me high-priority messages'",
  },
  {
    id: "meeting",
    label: "Meeting Intelligence",
    component: GranolaDemo,
    scenario: "Extract action items from meeting transcripts",
    suggestedQuery: "Try: 'What are the action items?'",
  },
] as const;

interface UseCaseTabProps {
  useCase: {
    id: string;
    label: string;
  };
  isActive: boolean;
  onClick: () => void;
}

function UseCaseTab({ useCase, isActive, onClick }: UseCaseTabProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200
        ${
          isActive
            ? "text-white dark:text-white"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
        }
      `}
    >
      {isActive && (
        <motion.div
          layoutId="active-tab"
          className="absolute inset-0 bg-gradient-to-br from-teal-600 to-orange-500 rounded-lg"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{useCase.label}</span>
    </button>
  );
}

interface MetricsDisplayProps {
  useCase: (typeof USE_CASES)[number];
}

function MetricsDisplay({ useCase }: MetricsDisplayProps) {
  return (
    <div className="space-y-6">
      {/* Before / After Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Before */}
        <div className="rounded-xl border border-red-200/50 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/20 p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle size={16} className="text-red-500 dark:text-red-400" />
            <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
              Before — Manual
            </h4>
          </div>

          <div className="space-y-2 mb-4">
            {useCase.before.steps.slice(0, 3).map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
              >
                <span className="w-4 h-4 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
            {useCase.before.steps.length > 3 && (
              <p className="text-xs text-slate-400 dark:text-slate-500 pl-6">
                +{useCase.before.steps.length - 3} more steps...
              </p>
            )}
          </div>

          <div className="space-y-1.5 pt-3 border-t border-red-200/50 dark:border-red-900/30">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">Time</span>
              <span className="font-mono text-red-600 dark:text-red-400 font-semibold">
                {useCase.before.time}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">Errors</span>
              <span className="font-mono text-red-600 dark:text-red-400 text-[10px]">
                {useCase.before.errors}
              </span>
            </div>
          </div>
        </div>

        {/* After */}
        <div className="rounded-xl border border-teal-200/50 dark:border-teal-900/30 bg-teal-50/50 dark:bg-teal-950/20 p-5">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle size={16} className="text-teal-600 dark:text-teal-400" />
            <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
              After — Agent School
            </h4>
          </div>

          <div className="space-y-2 mb-4">
            {useCase.after.steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
              >
                <span className="w-4 h-4 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>

          <div className="space-y-1.5 pt-3 border-t border-teal-200/50 dark:border-teal-900/30">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">Time</span>
              <span className="font-mono text-teal-600 dark:text-teal-400 font-semibold">
                {useCase.after.time}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">Errors</span>
              <span className="font-mono text-teal-600 dark:text-teal-400 text-[10px]">
                {useCase.after.errors}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <Clock size={16} className="text-orange-500 dark:text-orange-400 mx-auto mb-2" />
          <p className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">
            {useCase.metrics.timeSaved}
          </p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Time Saved
          </p>
        </div>
        <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <TrendingDown size={16} className="text-teal-600 dark:text-teal-400 mx-auto mb-2" />
          <p className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">
            {useCase.metrics.costReduction}
          </p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Cost Reduction
          </p>
        </div>
        <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <DollarSign size={16} className="text-teal-600 dark:text-teal-400 mx-auto mb-2" />
          <p className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">
            {useCase.metrics.monthlyImpact}
          </p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Monthly Impact
          </p>
        </div>
      </div>

      {/* Additional Workflows */}
      <div className="pt-2">
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
          Other Automatable Workflows
        </p>
        <div className="flex flex-wrap gap-2">
          {useCase.additionalWorkflows.map((workflow) => (
            <span
              key={workflow}
              className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
            >
              {workflow}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface UseCaseContentProps {
  useCase: (typeof USE_CASES)[number];
}

function UseCaseContent({ useCase }: UseCaseContentProps) {
  const DemoComponent = DEMO_COMPONENTS[useCase.id as keyof typeof DEMO_COMPONENTS];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Scenario */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/10 to-orange-500/10 dark:from-teal-500/20 dark:to-orange-500/20 border border-teal-200/50 dark:border-teal-800/50 mb-3">
          <Sparkles size={12} className="text-orange-500" />
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
            Scenario
          </p>
        </div>
        <p className="font-display text-2xl md:text-3xl text-slate-900 dark:text-slate-100">
          &ldquo;{useCase.scenario}&rdquo;
        </p>
      </div>

      {/* Full-width demo, with comparison and metrics below */}
      <div className="space-y-6">
        <CardSpotlight
          className="p-0 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800"
          color="#14b8a6"
          radius={400}
        >
          <div className="relative z-10">
            {DemoComponent ? (
              <DemoComponent />
            ) : (
              <div className="h-[600px] flex items-center justify-center text-slate-400 dark:text-slate-600">
                Demo component coming soon
              </div>
            )}
          </div>
        </CardSpotlight>
        <MetricsDisplay useCase={useCase} />
      </div>
    </motion.div>
  );
}

interface AdditionalDemoContentProps {
  demo: (typeof ADDITIONAL_DEMOS)[number];
}

function AdditionalDemoContent({ demo }: AdditionalDemoContentProps) {
  const DemoComponent = DEMO_COMPONENTS[demo.id as keyof typeof DEMO_COMPONENTS];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/10 to-orange-500/10 dark:from-teal-500/20 dark:to-orange-500/20 border border-teal-200/50 dark:border-teal-800/50 mb-3">
          <Sparkles size={12} className="text-orange-500" />
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
            Scenario
          </p>
        </div>
        <p className="font-display text-2xl md:text-3xl text-slate-900 dark:text-slate-100">
          &ldquo;{demo.scenario}&rdquo;
        </p>
        <p className="text-sm text-orange-600 dark:text-orange-400 mt-3 font-mono">
          {demo.suggestedQuery}
        </p>
      </div>

      <CardSpotlight
        className="p-0 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800"
        color="#14b8a6"
        radius={400}
      >
        <div className="relative z-10">
          {DemoComponent ? (
            <DemoComponent />
          ) : (
            <div className="h-[600px] flex items-center justify-center text-slate-400 dark:text-slate-600">
              Demo component coming soon
            </div>
          )}
        </div>
      </CardSpotlight>
    </motion.div>
  );
}

export function UseCases() {
  const [activeTab, setActiveTab] = useState<string>(USE_CASES[0].id);
  const activeUseCase = USE_CASES.find((uc) => uc.id === activeTab) || USE_CASES[0];
  const activeAdditionalDemo = ADDITIONAL_DEMOS.find((demo) => demo.id === activeTab);
  const tabItems = [...USE_CASES, ...ADDITIONAL_DEMOS];

  return (
    <section
      id="use-cases"
      className="py-24 md:py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 via-transparent to-orange-50/30 dark:from-teal-950/20 dark:via-transparent dark:to-orange-950/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <SectionHeader
            overline="Use Cases"
            title="Real Workflows, Real Results"
            description="See how Agent School transforms common business workflows across industries. Try the interactive demos below."
          />
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {tabItems.map((useCase) => (
              <UseCaseTab
                key={useCase.id}
                useCase={useCase}
                isActive={activeTab === useCase.id}
                onClick={() => setActiveTab(useCase.id)}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Active Use Case Content */}
        <ScrollReveal delay={0.2}>
          <AnimatePresence mode="wait">
            {activeAdditionalDemo ? (
              <AdditionalDemoContent key={activeTab} demo={activeAdditionalDemo} />
            ) : (
              <UseCaseContent key={activeTab} useCase={activeUseCase} />
            )}
          </AnimatePresence>
        </ScrollReveal>

        {/* Industry Note */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <p className="text-base text-slate-700 dark:text-slate-300 mb-2">
              Agent School works with any software stack in any industry.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              These are starting examples. We evaluate each use case individually
              to ensure Agent School is the right fit for your specific workflows.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
