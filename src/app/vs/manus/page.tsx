import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Check, X, AlertTriangle, Shield, Zap, DollarSign, Lock, Activity, Users } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

export const metadata = {
  title: "Agent School vs Manus | The Independent Enterprise Alternative",
  description: "Why enterprises are choosing Agent School over Manus (now Meta-owned) for certified AI agents with 99% reliability, self-healing, and 10x speed advantages.",
};

export default function ManusComparisonPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-950 text-white">
        {/* Hero Section */}
        <section className="pt-36 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-transparent to-orange-600/10" />
          <div className="max-w-7xl mx-auto relative">
            {/* Alert Banner */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-orange-500/40 bg-orange-500/10 px-6 py-3">
              <AlertTriangle className="w-5 h-5 text-orange-300" />
              <span className="text-body-sm text-orange-200">
                <strong>Major Update:</strong> Manus acquired by Meta for $2B+ in late 2025
              </span>
            </div>

            <p className="font-mono text-caption uppercase tracking-widest text-teal-300 mb-4">
              Competitive Comparison
            </p>
            <h1 className="font-display text-display-xl md:text-7xl text-white max-w-4xl mb-6">
              Agent School vs Manus
            </h1>
            <p className="text-heading-lg text-slate-300 max-w-3xl mb-8">
              The <span className="text-teal-300">independent, enterprise-grade</span> alternative to Meta-owned AI agents. Built for reliability, compliance, and trust.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-orange-500 px-8 py-4 font-semibold text-white transition hover:shadow-lg hover:shadow-teal-500/25"
              >
                See Why Enterprises Choose Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#comparison-table"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/50 px-8 py-4 font-semibold text-white transition hover:bg-slate-700/50"
              >
                View Detailed Comparison
              </a>
            </div>
          </div>
        </section>

        {/* Quick Context - What Happened */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl border border-orange-500/40 bg-gradient-to-br from-orange-500/10 to-red-500/5 p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-300 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-heading-xl text-white mb-4">
                    The Manus-Meta Acquisition: What Changed
                  </h2>
                  <div className="space-y-4 text-body-md text-slate-300">
                    <p>
                      In <strong className="text-white">late 2025</strong>, Meta acquired Manus for <strong className="text-white">over $2 billion</strong>, fundamentally changing the competitive landscape for AI agent platforms.
                    </p>
                    <p>
                      <strong className="text-orange-300">The Impact:</strong> Some enterprise customers have left the platform due to concerns about Meta's data practices, regulatory scrutiny in China, and uncertainty about the product roadmap.
                    </p>
                    <p>
                      <strong className="text-teal-300">The Opportunity:</strong> Organizations seeking an independent, enterprise-focused alternative with stronger security, compliance, and predictable evolution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-orange-500/20">
                <p className="text-body-sm text-slate-400">
                  <strong>Sources:</strong> CNBC (Jan 2026), Wall Street Journal, New York Times
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Differentiators Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-caption uppercase tracking-widest text-teal-300 mb-4">
                Why Enterprises Choose Agent School
              </p>
              <h2 className="font-display text-display-lg md:text-6xl text-white max-w-3xl mx-auto">
                7 Critical Advantages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Advantage 1: Independent */}
              <div className="rounded-2xl border border-teal-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  Independent & Trusted
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  Not owned by Big Tech. No data mining. SOC 2 ready. Your data stays yours.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Independent company</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Predictable roadmap</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Enterprise-first focus</span>
                  </div>
                </div>
              </div>

              {/* Advantage 2: Reliability */}
              <div className="rounded-2xl border border-orange-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-orange-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  99% Certified Reliability
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  Agents must pass hundreds of test scenarios before production. Not typical 85-90% AI reliability.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Certification pipeline</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Configurable thresholds</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Continuous re-testing</span>
                  </div>
                </div>
              </div>

              {/* Advantage 3: Speed */}
              <div className="rounded-2xl border border-teal-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  10x Faster Execution
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  <strong>2-3 seconds</strong> vs 45-60 seconds for generic AI agents. Deterministic replay, not LLM reasoning.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Real-time use cases</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">High-volume workflows</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Lower infrastructure cost</span>
                  </div>
                </div>
              </div>

              {/* Advantage 4: Cost */}
              <div className="rounded-2xl border border-orange-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-orange-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  Predictable Costs
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  <strong>$0.01-$0.15</strong> per task vs $0.10-$0.50 for LLM-based agents. No variable token costs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Fixed execution cost</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">No surprise LLM bills</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Clear ROI calculation</span>
                  </div>
                </div>
              </div>

              {/* Advantage 5: Self-Healing */}
              <div className="rounded-2xl border border-teal-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  Self-Healing Agents
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  95% of UI changes handled automatically. Semantic understanding, not pixel-based.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Auto-adapts to changes</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">No maintenance overhead</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Auto re-certification</span>
                  </div>
                </div>
              </div>

              {/* Advantage 6: Compliance */}
              <div className="rounded-2xl border border-orange-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-orange-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  Compliance-Ready
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  Full transparency with visual timelines, executable code, and audit trails for SOX, HIPAA, GDPR.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Complete audit trails</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Deterministic execution</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Regulatory compliance</span>
                  </div>
                </div>
              </div>

              {/* Advantage 7: Non-Technical */}
              <div className="rounded-2xl border border-teal-500/30 bg-slate-900/60 p-8 backdrop-blur-sm md:col-span-2 lg:col-span-3">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-teal-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-heading-lg text-white mb-3">
                      Built for Operations Teams, Not Just Data Scientists
                    </h3>
                    <p className="text-body-md text-slate-300 mb-4 max-w-3xl">
                      Demonstrate workflows in plain English or by example. No coding required. Empowers non-technical teams to create reliable automation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 text-body-sm">
                        <Check className="w-4 h-4 text-teal-300" />
                        <span className="text-slate-400">Zero coding needed</span>
                      </div>
                      <div className="flex items-center gap-2 text-body-sm">
                        <Check className="w-4 h-4 text-teal-300" />
                        <span className="text-slate-400">Natural language teaching</span>
                      </div>
                      <div className="flex items-center gap-2 text-body-sm">
                        <Check className="w-4 h-4 text-teal-300" />
                        <span className="text-slate-400">Reduces IT backlog</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section id="comparison-table" className="py-24 px-6 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-caption uppercase tracking-widest text-teal-300 mb-4">
                Side-by-Side Analysis
              </p>
              <h2 className="font-display text-display-lg md:text-6xl text-white max-w-3xl mx-auto mb-6">
                Feature Comparison
              </h2>
              <p className="text-body-lg text-slate-300 max-w-2xl mx-auto">
                A comprehensive comparison of capabilities, reliability, and enterprise readiness
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-6 font-display text-heading-md text-white">
                      Feature
                    </th>
                    <th className="text-left py-4 px-6 font-display text-heading-md text-teal-300">
                      Agent School
                    </th>
                    <th className="text-left py-4 px-6 font-display text-heading-md text-slate-400">
                      Manus (Meta)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Ownership</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">Independent company</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-300" />
                        <span className="text-body-md text-slate-400">Meta-owned ($2B+ acquisition)</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Reliability</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">95-99% certified</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <X className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">85-90% typical AI</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Execution Speed</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">2-3 seconds</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <X className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">45-60 seconds</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Cost Per Task</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">$0.01-$0.15</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <X className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">$0.10-$0.50</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Self-Healing</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">Yes (95% success)</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-300" />
                        <span className="text-body-md text-slate-400">Partial</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Certification</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">Required before deployment</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <X className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">No certification</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Transparency</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">Full (timeline + code + audit)</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-300" />
                        <span className="text-body-md text-slate-400">Partial (black box LLM)</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Data Privacy</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">Independent, SOC 2 ready</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-300" />
                        <span className="text-body-md text-slate-400">Meta-owned (privacy concerns)</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Target User</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">Business operations teams</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">Individual knowledge workers</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Coding Required</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">No coding needed</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">No coding needed</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Enterprise Guardrails</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">Mission Control dashboard</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <X className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">Basic monitoring</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Best For</strong>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-body-md text-slate-200">
                        Enterprise automation requiring reliability, compliance, and audit trails
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-body-md text-slate-400">
                        Individual users, research tasks, uncertain post-Meta
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Who Should Choose What */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-caption uppercase tracking-widest text-teal-300 mb-4">
                Making The Right Choice
              </p>
              <h2 className="font-display text-display-lg md:text-6xl text-white max-w-3xl mx-auto">
                Which Platform Is Right for You?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Choose Agent School */}
              <div className="rounded-2xl border border-teal-500/40 bg-gradient-to-br from-teal-500/10 to-slate-900/60 p-8 backdrop-blur-sm">
                <h3 className="font-display text-heading-xl text-white mb-6">
                  Choose Agent School If You Need:
                </h3>
                <ul className="space-y-4">
                  {[
                    "99%+ reliability for mission-critical workflows",
                    "Enterprise-grade compliance (SOX, HIPAA, GDPR)",
                    "Independent platform not owned by Big Tech",
                    "Self-healing agents with minimal maintenance",
                    "10x speed for real-time or high-volume tasks",
                    "Predictable costs without LLM token surprises",
                    "Full transparency with audit trails",
                    "No-code automation for non-technical teams",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-300 flex-shrink-0 mt-1" />
                      <span className="text-body-md text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Choose Manus */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 backdrop-blur-sm">
                <h3 className="font-display text-heading-xl text-slate-300 mb-6">
                  Manus (Meta) Might Work If:
                </h3>
                <ul className="space-y-4">
                  {[
                    "You're an individual user with low-volume needs",
                    "Privacy concerns about Meta ownership don't apply",
                    "You're comfortable with 85-90% reliability",
                    "You need general-purpose research and content tools",
                    "You're not in a regulated industry",
                    "Variable costs ($0.10-$0.50/task) are acceptable",
                    "You don't need self-healing capabilities",
                    "Not operating mission-critical workflows",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-body-md text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-body-sm text-slate-500">
                    <strong>Note:</strong> Many enterprise customers have left Manus following the Meta acquisition due to privacy concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-teal-600/10 via-transparent to-orange-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-display-lg md:text-6xl text-white mb-6">
              Ready to See the Difference?
            </h2>
            <p className="text-heading-md text-slate-300 mb-8 max-w-2xl mx-auto">
              Join enterprises choosing the independent, certified alternative to Meta-owned AI agents.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-orange-500 px-8 py-4 font-semibold text-white transition hover:shadow-lg hover:shadow-teal-500/25"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/50 px-8 py-4 font-semibold text-white transition hover:bg-slate-700/50"
              >
                Explore Platform
              </a>
            </div>
            <p className="mt-8 text-body-sm text-slate-400">
              30-day pilot program with satisfaction guarantee
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
