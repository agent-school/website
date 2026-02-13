import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, AlertTriangle } from "lucide-react";
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
          <div className="max-w-4xl mx-auto relative">
            {/* Alert Banner */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-orange-500/40 bg-orange-500/10 px-6 py-3">
              <AlertTriangle className="w-5 h-5 text-orange-300" />
              <span className="text-body-sm text-orange-200">
                <strong>Major Update:</strong> Manus acquired by Meta for $2B+ in late 2025
              </span>
            </div>

            <p className="font-mono text-caption uppercase tracking-widest text-teal-300 mb-4">
              Comparison
            </p>
            <h1 className="font-display text-display-xl md:text-7xl text-white mb-6">
              Agent School vs Manus
            </h1>
            <p className="text-heading-md text-slate-300 mb-3">
              Manus helped define AI agents for knowledge workers.
            </p>
            <p className="text-heading-md text-slate-300 mb-8">
              Agent School is built for enterprises that need reliability, compliance, and independence from Big Tech.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-orange-500 px-8 py-4 font-semibold text-white transition hover:shadow-lg hover:shadow-teal-500/25"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto prose prose-invert prose-slate">
            <p className="text-body-lg text-slate-300 leading-relaxed mb-8">
              Manus (now owned by Meta) is an excellent general-purpose AI agent for research, content creation, and browser automation. It's designed for individual knowledge workers and small teams who want quick, flexible AI assistance.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-12">
              Agent School is purpose-built for enterprises that need certified, mission-critical automation with 99% reliability, full transparency, and no Big Tech ownership concerns.
            </p>

            <h2 className="font-display text-display-md text-white mb-8">
              What Happened: The Meta Acquisition
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              In late 2025, Meta acquired Manus for over $2 billion, marking one of the largest AI agent acquisitions to date. For individual users, this might not matter much. For enterprises? It fundamentally changed the equation.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-8">
              <strong className="text-white">Why enterprises are concerned:</strong>
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Data privacy:</strong> Meta's business model relies on data monetization. Many enterprises have policies against using Meta-owned tools for sensitive workflows.
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Regulatory scrutiny:</strong> China is investigating whether the acquisition violated technology export laws. Regulatory uncertainty creates risk for mission-critical deployments.
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Product roadmap:</strong> Meta has committed to "continue delivering current services while accelerating product improvements," but long-term direction is uncertain.
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Customer exodus:</strong> According to CNBC (January 2026), some enterprise customers have already left the platform due to privacy concerns.
              </li>
            </ul>

            <div className="not-prose bg-orange-500/5 border border-orange-500/30 rounded-2xl p-8 mb-12">
              <p className="text-body-md text-slate-300">
                <strong className="text-orange-300">The opportunity:</strong> Organizations seeking an independent, enterprise-focused alternative with stronger security, compliance, and predictable evolution are looking beyond Meta-owned solutions.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="not-prose mb-16">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-4 px-6 font-display text-heading-md text-white">
                        
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
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Ownership
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        Independent company focused on enterprise automation
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        Meta subsidiary (acquired for $2B+ in late 2025)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Target users
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        Enterprise operations teams (500+ employees) needing certified, mission-critical automation
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        Individual knowledge workers and small teams (1-50 employees)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Reliability
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        99% certified before deployment through automated testing pipeline
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        85-90% typical for generic AI agents (no certification framework)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Speed
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        2-3 seconds per task (deterministic execution layer)
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        45-60 seconds (LLM reasoning for each step)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Cost per task
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        $0.01-$0.15 (no variable LLM costs)
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        $0.10-$0.50 (credit-based, varies by complexity)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Self-healing
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        Included. 95% of UI changes handled automatically.
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        Partial. Requires re-prompting when systems change.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Transparency
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        Full. Visual timeline + executable code + audit trails for SOX, HIPAA, GDPR.
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        Partial. Black box LLM reasoning limits auditability.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="font-display text-display-md text-white mb-8">
              Reliability: 99% vs 85-90%
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              Manus, like most generic AI agents, operates by reasoning through tasks using large language models. Every time it executes a workflow, it's "thinking" through the problem fresh. This makes it flexible and powerful for exploratory tasks like research or content generation.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              The trade-off? Unpredictability. Generic AI agents typically achieve 85-90% reliability in production—fine for individual users doing research, but unacceptable for enterprises processing thousands of transactions daily.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              Agent School takes a different approach. Once you demonstrate a workflow, the platform converts it into deterministic, certified automation. Before any agent reaches production:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-body-md text-slate-300 pl-4">
                Tested hundreds of times across different scenarios
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Validated against your reliability threshold (90%, 95%, or 99%)
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Continuously re-certified as systems change
              </li>
            </ul>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-12">
              For hotel reservations, insurance claims, or financial reconciliation, that 10-15% reliability gap translates to real business risk. Agent School closes that gap.
            </p>

            <h2 className="font-display text-display-md text-white mb-8">
              Speed: 2-3 Seconds vs 45-60 Seconds
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              Manus agents spend 45-60 seconds per task because they're reasoning through each step using LLMs. For research tasks or occasional automation, that's acceptable. For high-volume workflows—thousands of reservations, claims, or transactions daily—it's prohibitively slow and expensive.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              Agent School agents execute in 2-3 seconds because they use a proprietary deterministic execution layer. Once certified, agents replay workflows without LLM reasoning, achieving 10-20x faster execution at a fraction of the cost.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-12">
              <strong className="text-white">What this enables:</strong> Real-time use cases (customer-facing workflows), high-volume automation (10,000+ tasks/day), and predictable infrastructure costs.
            </p>

            <h2 className="font-display text-display-md text-white mb-8">
              Privacy and Independence
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              This is the elephant in the room. Meta's business model is built on data monetization. While Manus may have strong privacy commitments, the reality is that many enterprises have corporate policies that explicitly prohibit using Meta-owned tools for sensitive workflows.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              Beyond policy, there's regulatory risk. China's investigation into the acquisition creates uncertainty for global deployments, and Meta's track record with data privacy hasn't always inspired confidence among enterprise compliance teams.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-12">
              Agent School is an independent company focused exclusively on enterprise automation. No data mining, no advertising business, no Big Tech platform strategies. Just reliable automation with SOC 2 Type II readiness and predictable governance.
            </p>

            <h2 className="font-display text-display-md text-white mb-8">
              Pricing and Total Cost
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              Manus uses credit-based pricing starting at $19/month (4,000 credits) up to $199/month (40,000 credits) for individual users, with custom enterprise pricing. Credits are consumed per task, with more complex tasks costing more credits.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              For low-volume use (research, occasional automation), this is extremely affordable. For high-volume enterprise workflows? The math changes quickly. A single complex task might consume 10-50 credits, meaning your 40,000-credit plan covers 800-4,000 tasks—potentially just a few days of operation for an enterprise workflow.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Estimated annual costs for enterprises:</strong>
            </p>

            <ul className="space-y-3 mb-12">
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Manus:</strong> $24K-48K/year for moderate enterprise use (uncertain post-Meta; costs may rise)
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Agent School:</strong> $60K-300K/year (consultation-based, varies by scale and use case)
              </li>
            </ul>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-12">
              Agent School has higher upfront costs but predictable execution costs ($0.01-$0.15/task vs $0.10-$0.50), no LLM token surprises, and self-healing that eliminates maintenance overhead. For mission-critical workflows with high volume, the 3-year TCO typically favors Agent School.
            </p>

            <h2 className="font-display text-display-md text-white mb-8">
              What They're Actually Used For
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Manus excels at:</strong>
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Research aggregation:</strong> Multi-source information gathering
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Content creation:</strong> Presentations, web apps, AI-generated content
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Browser automation:</strong> Flexible, exploratory tasks
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Email management:</strong> Drafting, categorization, follow-ups
              </li>
            </ul>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Agent School is built for:</strong>
            </p>

            <ul className="space-y-3 mb-12">
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Mission-critical operations:</strong> Hotel reservations, healthcare scheduling, financial reconciliation
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Regulated industries:</strong> Healthcare (HIPAA), finance (SOX), government
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">High-volume workflows:</strong> Processing thousands of tasks daily with 99% reliability
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Compliance-first:</strong> Full audit trails, deterministic execution, regulatory adherence
              </li>
            </ul>

            <div className="not-prose bg-teal-500/5 border border-teal-500/30 rounded-2xl p-8 mb-12">
              <p className="text-body-md text-slate-300">
                <strong className="text-teal-300">The pattern:</strong> Manus is excellent for individual knowledge workers and small teams doing flexible, exploratory work. Agent School wins for enterprises that need certified, mission-critical automation without Big Tech dependencies.
              </p>
            </div>

            <h2 className="font-display text-display-md text-white mb-8">
              Agent School vs Manus
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              Manus helped pioneer AI agents for mainstream users. For individual knowledge workers, small teams, and low-stakes automation, it's a powerful tool—Meta ownership notwithstanding.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              But for enterprises that need:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-body-md text-slate-300 pl-4">
                99% reliability for mission-critical workflows
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Independence from Big Tech data concerns
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                10x faster execution for high-volume operations
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Full transparency for compliance and audit trails
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Self-healing to eliminate maintenance overhead
              </li>
            </ul>

            <p className="text-body-lg text-slate-300 leading-relaxed">
              Agent School is the enterprise-grade alternative.
            </p>
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
            <a
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-orange-500 px-8 py-4 font-semibold text-white transition hover:shadow-lg hover:shadow-teal-500/25"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
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
