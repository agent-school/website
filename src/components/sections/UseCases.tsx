"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TabGroup } from "@/components/ui/TabGroup";
import { USE_CASES } from "@/lib/constants";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import {
  Clock,
  DollarSign,
  TrendingDown,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

function UseCaseContent({
  useCase,
}: {
  useCase: (typeof USE_CASES)[number];
}) {
  return (
    <div className="space-y-8">
      {/* Scenario */}
      <div className="text-center">
        <p className="text-caption font-semibold text-amber-500 uppercase tracking-wider mb-2">
          Scenario
        </p>
        <p className="font-display text-heading-lg text-navy-800">
          &ldquo;{useCase.scenario}&rdquo;
        </p>
      </div>

      {/* Before / After */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before */}
        <div className="rounded-2xl border border-red-100 bg-red-50/20 p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle size={18} className="text-red-400" />
            <h4 className="font-display text-heading-sm text-navy-800">
              Before — Today
            </h4>
          </div>

          <div className="space-y-2.5 mb-5">
            {useCase.before.steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 text-body-sm text-charcoal-600"
              >
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-4 border-t border-red-100">
            <div className="flex items-center justify-between text-body-sm">
              <span className="text-charcoal-500">Time</span>
              <span className="font-mono text-red-600 font-semibold">
                {useCase.before.time}
              </span>
            </div>
            <div className="flex items-center justify-between text-body-sm">
              <span className="text-charcoal-500">Errors</span>
              <span className="font-mono text-red-600">
                {useCase.before.errors}
              </span>
            </div>
            <div className="flex items-center justify-between text-body-sm">
              <span className="text-charcoal-500">Cost</span>
              <span className="font-mono text-red-600">
                {useCase.before.cost}
              </span>
            </div>
          </div>
        </div>

        {/* After */}
        <div className="rounded-2xl border border-green-100 bg-green-50/20 p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle size={18} className="text-green-500" />
            <h4 className="font-display text-heading-sm text-navy-800">
              After — Agent School
            </h4>
          </div>

          <div className="space-y-2.5 mb-5">
            {useCase.after.steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 text-body-sm text-charcoal-600"
              >
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-4 border-t border-green-100">
            <div className="flex items-center justify-between text-body-sm">
              <span className="text-charcoal-500">Time</span>
              <span className="font-mono text-green-600 font-semibold">
                {useCase.after.time}
              </span>
            </div>
            <div className="flex items-center justify-between text-body-sm">
              <span className="text-charcoal-500">Errors</span>
              <span className="font-mono text-green-600">
                {useCase.after.errors}
              </span>
            </div>
            <div className="flex items-center justify-between text-body-sm">
              <span className="text-charcoal-500">Cost</span>
              <span className="font-mono text-green-600">
                {useCase.after.cost}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Badges */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-5 rounded-xl bg-white border border-cream-200 shadow-soft">
          <Clock size={18} className="text-amber-500 mx-auto mb-2" />
          <p className="font-display text-heading-lg text-navy-800">
            {useCase.metrics.timeSaved}
          </p>
          <p className="text-caption text-charcoal-500">Time Saved</p>
        </div>
        <div className="text-center p-5 rounded-xl bg-white border border-cream-200 shadow-soft">
          <TrendingDown size={18} className="text-green-500 mx-auto mb-2" />
          <p className="font-display text-heading-lg text-navy-800">
            {useCase.metrics.costReduction}
          </p>
          <p className="text-caption text-charcoal-500">Cost Reduction</p>
        </div>
        <div className="text-center p-5 rounded-xl bg-white border border-cream-200 shadow-soft">
          <DollarSign size={18} className="text-green-500 mx-auto mb-2" />
          <p className="font-display text-heading-lg text-navy-800">
            {useCase.metrics.monthlyImpact}
          </p>
          <p className="text-caption text-charcoal-500">Monthly Impact</p>
        </div>
      </div>

      {/* Additional Workflows */}
      <div className="text-center">
        <p className="text-caption font-semibold text-charcoal-400 uppercase tracking-wider mb-3">
          Other automatable workflows
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {useCase.additionalWorkflows.map((workflow) => (
            <span
              key={workflow}
              className="px-3 py-1.5 rounded-full bg-cream-100 text-caption text-charcoal-600 border border-cream-200"
            >
              {workflow}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function UseCases() {
  const tabs = USE_CASES.map((uc) => ({
    id: uc.id,
    label: uc.label,
    content: <UseCaseContent useCase={uc} />,
  }));

  return (
    <section id="use-cases" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            overline="Use Cases"
            title="Real Workflows, Real Results"
            description="See how Agent School transforms common business workflows across industries. These are concrete examples with measurable outcomes."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <TabGroup tabs={tabs} />
        </ScrollReveal>

        {/* Industry Note */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 text-center p-8 rounded-2xl bg-cream-50 border border-cream-200">
            <p className="text-body-md text-charcoal-600 mb-2">
              Agent School works with any software stack in any industry.
            </p>
            <p className="text-body-sm text-charcoal-400">
              These are starting examples. We evaluate each use case individually
              to ensure Agent School is the right fit for your specific workflows.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
