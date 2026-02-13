import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Check, X, Code, Users, Zap, DollarSign, Activity, Shield, Wrench } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

export const metadata = {
  title: "Agent School vs n8n | Built for Operations Teams, Not Developers",
  description: "Why operations teams choose Agent School over n8n: no coding required, self-healing included, 99% certified reliability, and 10x faster than manual workflows.",
};

export default function N8nComparisonPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-950 text-white">
        {/* Hero Section */}
        <section className="pt-36 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-transparent to-orange-600/10" />
          <div className="max-w-7xl mx-auto relative">
            <p className="font-mono text-caption uppercase tracking-widest text-teal-300 mb-4">
              Competitive Comparison
            </p>
            <h1 className="font-display text-display-xl md:text-7xl text-white max-w-4xl mb-6">
              Agent School vs n8n
            </h1>
            <p className="text-heading-lg text-slate-300 max-w-3xl mb-8">
              Built for <span className="text-teal-300">operations teams</span>, not developers. Get certified AI agents with no coding, self-healing, and 99% reliability.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-orange-500 px-8 py-4 font-semibold text-white transition hover:shadow-lg hover:shadow-teal-500/25"
              >
                See Why Non-Technical Teams Choose Us
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

        {/* Quick Context - Different Audiences */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Agent School */}
              <div className="rounded-2xl border border-teal-500/40 bg-gradient-to-br from-teal-500/10 to-slate-900/60 p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-display text-heading-xl text-white mb-4">
                  Agent School
                </h3>
                <p className="text-body-md text-slate-300 mb-6">
                  Built for <strong className="text-teal-300">business operations teams</strong> who need reliable automation without coding.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-body-sm text-slate-300">
                    <Check className="w-4 h-4 text-teal-300" />
                    Demonstrate workflows, no coding
                  </li>
                  <li className="flex items-center gap-2 text-body-sm text-slate-300">
                    <Check className="w-4 h-4 text-teal-300" />
                    Self-healing included
                  </li>
                  <li className="flex items-center gap-2 text-body-sm text-slate-300">
                    <Check className="w-4 h-4 text-teal-300" />
                    99% certified reliability
                  </li>
                  <li className="flex items-center gap-2 text-body-sm text-slate-300">
                    <Check className="w-4 h-4 text-teal-300" />
                    Minimal maintenance
                  </li>
                </ul>
                <p className="mt-6 text-body-sm text-teal-200">
                  <strong>Target:</strong> VP Operations, IT Directors, business process owners
                </p>
              </div>

              {/* n8n */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-600/20 to-slate-700/10 flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="font-display text-heading-xl text-slate-300 mb-4">
                  n8n
                </h3>
                <p className="text-body-md text-slate-400 mb-6">
                  Built for <strong className="text-slate-300">technical teams</strong> who want full code control and self-hosting options.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-body-sm text-slate-400">
                    <Check className="w-4 h-4 text-slate-500" />
                    Visual workflows + JavaScript/Python
                  </li>
                  <li className="flex items-center gap-2 text-body-sm text-slate-400">
                    <Check className="w-4 h-4 text-slate-500" />
                    1700+ integrations
                  </li>
                  <li className="flex items-center gap-2 text-body-sm text-slate-400">
                    <Check className="w-4 h-4 text-slate-500" />
                    Self-hostable (open-source)
                  </li>
                  <li className="flex items-center gap-2 text-body-sm text-slate-400">
                    <X className="w-4 h-4 text-slate-600" />
                    Manual maintenance required
                  </li>
                </ul>
                <p className="mt-6 text-body-sm text-slate-500">
                  <strong>Target:</strong> DevOps engineers, IT Ops managers, technical teams
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl border border-orange-500/30 bg-orange-500/5">
              <p className="text-body-md text-slate-300">
                <strong className="text-orange-300">Key Insight:</strong> Both platforms serve automation needs but target <strong>different audiences</strong>. Agent School empowers non-technical teams; n8n requires developer resources.
              </p>
            </div>
          </div>
        </section>

        {/* Key Differentiators Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-caption uppercase tracking-widest text-teal-300 mb-4">
                Why Non-Technical Teams Choose Agent School
              </p>
              <h2 className="font-display text-display-lg md:text-6xl text-white max-w-3xl mx-auto">
                7 Key Advantages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Advantage 1: No Coding */}
              <div className="rounded-2xl border border-teal-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  Zero Coding Required
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  Demonstrate workflows in plain English or by example. No JavaScript, Python, or technical expertise needed.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Natural language teaching</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Visual demonstration</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">30min-4hr to first agent</span>
                  </div>
                </div>
              </div>

              {/* Advantage 2: Self-Healing */}
              <div className="rounded-2xl border border-orange-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-orange-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  Self-Healing Built-In
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  95% of UI changes handled automatically. n8n workflows break and require manual fixes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Auto-adapts to changes</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">No maintenance overhead</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Eliminates 90% of RPA costs</span>
                  </div>
                </div>
              </div>

              {/* Advantage 3: Reliability */}
              <div className="rounded-2xl border border-teal-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  99% Certified Reliability
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  Agents tested hundreds of times before deployment. n8n offers no reliability guarantees.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Certification pipeline</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Configurable thresholds</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Production-ready guarantee</span>
                  </div>
                </div>
              </div>

              {/* Advantage 4: Speed */}
              <div className="rounded-2xl border border-orange-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-orange-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  2-3 Second Execution
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  Deterministic execution optimized for speed. n8n execution time varies by workflow complexity.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Real-time capable</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">High-volume ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Predictable performance</span>
                  </div>
                </div>
              </div>

              {/* Advantage 5: Time to Value */}
              <div className="rounded-2xl border border-teal-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  Days vs Weeks to Deploy
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  30min-4hr to first agent. n8n requires 1-16 hours for technical teams to build and test.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Rapid onboarding</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">No developer queue</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-teal-300" />
                    <span className="text-slate-400">Immediate productivity</span>
                  </div>
                </div>
              </div>

              {/* Advantage 6: Transparency */}
              <div className="rounded-2xl border border-orange-500/30 bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-orange-300" />
                </div>
                <h3 className="font-display text-heading-lg text-white mb-3">
                  Compliance-Ready
                </h3>
                <p className="text-body-md text-slate-300 mb-4">
                  Full audit trails for SOX, HIPAA, GDPR. Both platforms offer transparency; we add certification.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Visual timeline</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Executable code</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm">
                    <Check className="w-4 h-4 text-orange-300" />
                    <span className="text-slate-400">Deterministic audits</span>
                  </div>
                </div>
              </div>

              {/* Advantage 7: No DevOps Team Needed */}
              <div className="rounded-2xl border border-teal-500/30 bg-slate-900/60 p-8 backdrop-blur-sm md:col-span-2 lg:col-span-3">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-teal-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-heading-lg text-white mb-3">
                      Lower Total Cost of Ownership
                    </h3>
                    <p className="text-body-md text-slate-300 mb-4 max-w-3xl">
                      No DevOps team needed. No maintenance costs. Self-healing eliminates 90% of ongoing work. n8n requires developer resources for building, debugging, and maintenance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 text-body-sm">
                        <Check className="w-4 h-4 text-teal-300" />
                        <span className="text-slate-400">No developer costs</span>
                      </div>
                      <div className="flex items-center gap-2 text-body-sm">
                        <Check className="w-4 h-4 text-teal-300" />
                        <span className="text-slate-400">Minimal maintenance</span>
                      </div>
                      <div className="flex items-center gap-2 text-body-sm">
                        <Check className="w-4 h-4 text-teal-300" />
                        <span className="text-slate-400">3-year TCO advantage</span>
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
                A comprehensive comparison of capabilities, ease of use, and total cost of ownership
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
                      n8n
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
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
                        <span className="text-body-md text-slate-400">Technical teams (DevOps, IT)</span>
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
                        <X className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">Optional (JS/Python)</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Learning Method</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">Demonstrate once</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">Visual nodes + code</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Time to First Agent</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">30min-4hr</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <X className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">1h-16h (technical teams)</span>
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
                        <span className="text-body-md text-slate-400">Depends on workflow</span>
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
                        <X className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">No (manual fixes)</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Maintenance</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">Minimal (auto-healing)</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <X className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">High (manual updates)</span>
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
                        <span className="text-body-md text-slate-400">Variable</span>
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
                        <Check className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">Full (code visible)</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Deployment</strong>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-body-md text-slate-200">Cloud (managed)</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-body-md text-slate-400">Cloud OR self-hosted</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Pricing Model</strong>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-body-md text-slate-200">Consultation-based</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-body-md text-slate-400">Execution-based (€20-50+/mo)</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Integrations</strong>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-body-md text-slate-200">Any UI/API/Database</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-body-md text-slate-400">1700+ pre-built nodes</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">DevOps Team Needed</strong>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-300" />
                        <span className="text-body-md text-slate-200">No</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <X className="w-5 h-5 text-slate-500" />
                        <span className="text-body-md text-slate-400">Yes (for building & maintenance)</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 text-body-md text-slate-300">
                      <strong className="text-white">Best For</strong>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-body-md text-slate-200">
                        Non-technical teams needing reliable, low-maintenance automation
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-body-md text-slate-400">
                        Technical teams wanting code control and self-hosting
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
                  Choose Agent School If:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Your team doesn't have developer resources",
                    "You need 99%+ reliability for mission-critical work",
                    "You want self-healing with minimal maintenance",
                    "You need agents deployed in days, not weeks",
                    "Your team works in operations, not engineering",
                    "You need certified, compliance-ready automation",
                    "You want predictable execution speed (2-3s)",
                    "Reducing IT backlog is a priority",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-300 flex-shrink-0 mt-1" />
                      <span className="text-body-md text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Choose n8n */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 backdrop-blur-sm">
                <h3 className="font-display text-heading-xl text-slate-300 mb-6">
                  n8n Works Better If:
                </h3>
                <ul className="space-y-4">
                  {[
                    "You have a DevOps or IT Ops team available",
                    "You want full code control (JavaScript/Python)",
                    "You need self-hosting for data sovereignty",
                    "You prefer open-source platforms",
                    "Your team is comfortable with visual + code workflows",
                    "You need 1700+ pre-built integrations",
                    "You're willing to handle manual maintenance",
                    "You have budget for developer resources",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-slate-500 flex-shrink-0 mt-1" />
                      <span className="text-body-md text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-body-sm text-slate-500">
                    <strong>Note:</strong> n8n is excellent for technical teams. Agent School is built for everyone else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Total Cost of Ownership */}
        <section className="py-24 px-6 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-caption uppercase tracking-widest text-teal-300 mb-4">
                3-Year TCO Analysis
              </p>
              <h2 className="font-display text-display-lg md:text-6xl text-white max-w-3xl mx-auto mb-6">
                Hidden Costs of n8n
              </h2>
              <p className="text-body-lg text-slate-300 max-w-2xl mx-auto">
                n8n appears cheaper upfront but requires significant developer and maintenance resources
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Agent School TCO */}
              <div className="rounded-2xl border border-teal-500/30 bg-slate-900/60 p-8">
                <h3 className="font-display text-heading-xl text-white mb-6">
                  Agent School 3-Year TCO
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-body-md text-slate-300">Platform cost</span>
                    <span className="text-body-md font-semibold text-white">$60K-180K</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-body-md text-slate-300">Developer time</span>
                    <span className="text-body-md font-semibold text-teal-300">$0</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-body-md text-slate-300">Maintenance</span>
                    <span className="text-body-md font-semibold text-teal-300">$0 (self-healing)</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-body-md text-slate-300">Infrastructure</span>
                    <span className="text-body-md font-semibold text-teal-300">$0 (managed)</span>
                  </div>
                </div>
                <div className="pt-4 border-t-2 border-teal-500/40">
                  <div className="flex justify-between items-center">
                    <span className="text-heading-md text-white">Total 3-Year Cost</span>
                    <span className="text-heading-xl text-teal-300">$60K-180K</span>
                  </div>
                </div>
              </div>

              {/* n8n TCO */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8">
                <h3 className="font-display text-heading-xl text-slate-300 mb-6">
                  n8n 3-Year TCO
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-body-md text-slate-400">Platform cost</span>
                    <span className="text-body-md font-semibold text-slate-300">$12K-50K</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-body-md text-slate-400">Developer time (build)</span>
                    <span className="text-body-md font-semibold text-orange-300">$60K-120K</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-body-md text-slate-400">Maintenance (3 years)</span>
                    <span className="text-body-md font-semibold text-orange-300">$90K-180K</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-body-md text-slate-400">Infrastructure (self-host)</span>
                    <span className="text-body-md font-semibold text-slate-300">$720-7.2K</span>
                  </div>
                </div>
                <div className="pt-4 border-t-2 border-orange-500/40">
                  <div className="flex justify-between items-center">
                    <span className="text-heading-md text-slate-300">Total 3-Year Cost</span>
                    <span className="text-heading-xl text-orange-300">$163K-357K</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl border border-teal-500/30 bg-teal-500/5 text-center">
              <p className="text-heading-md text-white mb-2">
                Agent School saves <span className="text-teal-300">$103K-177K</span> over 3 years
              </p>
              <p className="text-body-md text-slate-300">
                Lower upfront cost + no developer overhead + minimal maintenance = superior TCO
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-teal-600/10 via-transparent to-orange-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-display-lg md:text-6xl text-white mb-6">
              Empower Your Operations Team
            </h2>
            <p className="text-heading-md text-slate-300 mb-8 max-w-2xl mx-auto">
              Join businesses automating workflows without developer resources. Get certified agents in days, not weeks.
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
