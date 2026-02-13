import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

export const metadata = {
  title: "Agent School vs Manus | The Independent Enterprise Alternative",
  description: "Why enterprises are choosing Agent School for certified AI agents with 99% reliability, self-healing, 10x speed advantages, and true data independence.",
};

export default function ManusComparisonPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="pt-36 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-transparent to-orange-600/10" />
          <div className="max-w-4xl mx-auto relative">
            <p className="font-mono text-caption uppercase tracking-widest text-teal-600 mb-4">
              Comparison
            </p>
            <h1 className="font-display text-display-xl md:text-7xl text-slate-900 mb-6">
              Agent School vs Manus
            </h1>
            <p className="text-heading-md text-slate-700 mb-3">
              Manus helped define AI agents for knowledge workers.
            </p>
            <p className="text-heading-md text-slate-700 mb-8">
              Agent School is built for enterprises that demand reliability, compliance, and true data independence.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-orange-500 px-8 py-4 font-semibold text-slate-900 transition hover:shadow-lg hover:shadow-orange-500/25"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <p className="text-body-lg text-slate-700 leading-relaxed mb-8">
              Manus is an excellent general-purpose AI agent for research, content creation, and browser automation. It's designed for individual knowledge workers and small teams who want quick, flexible AI assistance.
            </p>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-12">
              Agent School is purpose-built for enterprises that need certified, mission-critical automation with 99% reliability, full transparency, and architectural independence.
            </p>

            <h2 className="font-display text-display-md text-slate-900 mb-8">
              Why Independence Matters
            </h2>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              Many AI agent platforms are owned by large technology companies with complex business models. For individual users doing research or content creation, this might not matter. For enterprises processing sensitive data? Independence is foundational.
            </p>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-8">
              <strong className="text-slate-900">Agent School is built differently:</strong>
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">No data monetization:</strong> We don't operate an advertising business or user tracking platform. Your workflow data is yours—never analyzed for commercial purposes, never used to train third-party models.
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Independent governance:</strong> As a focused enterprise automation company, our product roadmap is driven by customer needs—not platform strategies, ecosystem lock-in, or cross-selling initiatives.
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Predictable compliance:</strong> No regulatory uncertainty from conglomerate ownership. We maintain SOC 2 Type II readiness, support HIPAA/GDPR/SOX requirements, and provide predictable audit trails.
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">On-premises deployment:</strong> For organizations with strict data residency requirements, Agent School can be deployed entirely within your infrastructure—no external data transmission required.
              </li>
            </ul>

            <div className="not-prose bg-orange-50 border border-teal-200 rounded-2xl p-8 mb-12">
              <p className="text-body-md text-slate-700">
                <strong className="text-teal-700">Our philosophy:</strong> Enterprise automation requires trust. Trust requires transparency, architectural simplicity, and alignment of incentives. Agent School exists solely to deliver reliable automation—not to monetize your data, sell ads, or build ecosystems.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="not-prose mb-16">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-slate-300">
                      <th className="text-left py-4 px-6 font-display text-heading-md text-slate-900">
                        
                      </th>
                      <th className="text-left py-4 px-6 font-display text-heading-md text-teal-600">
                        Agent School
                      </th>
                      <th className="text-left py-4 px-6 font-display text-heading-md text-slate-600">
                        Manus
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition">
                      <td className="py-4 px-6 text-body-md text-slate-900 font-semibold">
                        Ownership
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-800">
                        Independent company focused exclusively on enterprise automation
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-600">
                        Part of larger technology conglomerate with diverse business interests
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition">
                      <td className="py-4 px-6 text-body-md text-slate-900 font-semibold">
                        Target users
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-800">
                        Enterprise operations teams (500+ employees) needing certified, mission-critical automation
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-600">
                        Individual knowledge workers and small teams (1-50 employees)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition">
                      <td className="py-4 px-6 text-body-md text-slate-900 font-semibold">
                        Reliability
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-800">
                        99% certified before deployment through automated testing pipeline
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-600">
                        85-90% typical for generic AI agents (no certification framework)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition">
                      <td className="py-4 px-6 text-body-md text-slate-900 font-semibold">
                        Speed
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-800">
                        2-3 seconds per task (deterministic execution layer)
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-600">
                        45-60 seconds (LLM reasoning for each step)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition">
                      <td className="py-4 px-6 text-body-md text-slate-900 font-semibold">
                        Cost per task
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-800">
                        $0.01-$0.15 (no variable LLM costs)
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-600">
                        $0.10-$0.50 (credit-based, varies by complexity)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition">
                      <td className="py-4 px-6 text-body-md text-slate-900 font-semibold">
                        Self-healing
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-800">
                        Included. 95% of UI changes handled automatically.
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-600">
                        Partial. Requires re-prompting when systems change.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition">
                      <td className="py-4 px-6 text-body-md text-slate-900 font-semibold">
                        Transparency
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-800">
                        Full. Visual timeline + executable code + audit trails for SOX, HIPAA, GDPR.
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-600">
                        Partial. Black box LLM reasoning limits auditability.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="font-display text-display-md text-slate-900 mb-8">
              Reliability: 99% vs 85-90%
            </h2>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              Manus, like most generic AI agents, operates by reasoning through tasks using large language models. Every time it executes a workflow, it's "thinking" through the problem fresh. This makes it flexible and powerful for exploratory tasks like research or content generation.
            </p>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              The trade-off? Unpredictability. Generic AI agents typically achieve 85-90% reliability in production—fine for individual users doing research, but unacceptable for enterprises processing thousands of transactions daily.
            </p>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              Agent School takes a different approach. Once you demonstrate a workflow, the platform converts it into deterministic, certified automation. Before any agent reaches production:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-body-md text-slate-700 pl-4">
                Tested hundreds of times across different scenarios
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                Validated against your reliability threshold (90%, 95%, or 99%)
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                Continuously re-certified as systems change
              </li>
            </ul>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-12">
              For hotel reservations, insurance claims, or financial reconciliation, that 10-15% reliability gap translates to real business risk. Agent School closes that gap.
            </p>

            <h2 className="font-display text-display-md text-slate-900 mb-8">
              Speed: 2-3 Seconds vs 45-60 Seconds
            </h2>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              Manus agents spend 45-60 seconds per task because they're reasoning through each step using LLMs. For research tasks or occasional automation, that's acceptable. For high-volume workflows—thousands of reservations, claims, or transactions daily—it's prohibitively slow and expensive.
            </p>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              Agent School agents execute in 2-3 seconds because they use a proprietary deterministic execution layer. Once certified, agents replay workflows without LLM reasoning, achieving 10-20x faster execution at a fraction of the cost.
            </p>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-12">
              <strong className="text-slate-900">What this enables:</strong> Real-time use cases (customer-facing workflows), high-volume automation (10,000+ tasks/day), and predictable infrastructure costs.
            </p>

            <h2 className="font-display text-display-md text-slate-900 mb-8">
              Data Privacy and Architecture
            </h2>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              Agent School's architecture is designed from the ground up for data sovereignty. Unlike platforms built on continuous LLM analysis of your workflows, our deterministic execution layer means your sensitive data never leaves your control for "learning" or "improvement" purposes.
            </p>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              <strong className="text-slate-900">What this means in practice:</strong>
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Zero telemetry by default:</strong> We don't collect usage analytics, workflow patterns, or behavioral data unless explicitly enabled for debugging purposes—and even then, it's anonymized and under your control.
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">No model training on customer data:</strong> Your workflows, documents, and business logic are never used to improve our models or anyone else's. What you teach your agents stays with your agents.
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Transparent data flows:</strong> Every data movement is logged in audit trails. You can see exactly what data touched which systems, when, and why—critical for GDPR Article 30 compliance.
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Air-gapped deployment option:</strong> For government, healthcare, and financial institutions with strict data residency requirements, Agent School can operate entirely within your private infrastructure—no internet connectivity required.
              </li>
            </ul>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-12">
              Many enterprises have policies that restrict use of platforms owned by advertising-driven companies or those with complex data monetization models. Agent School is built for organizations where data privacy isn't a feature—it's a requirement.
            </p>

            <h2 className="font-display text-display-md text-slate-900 mb-8">
              Pricing and Total Cost
            </h2>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              Manus uses credit-based pricing starting at $19/month (4,000 credits) up to $199/month (40,000 credits) for individual users, with custom enterprise pricing. Credits are consumed per task, with more complex tasks costing more credits.
            </p>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              For low-volume use (research, occasional automation), this is extremely affordable. For high-volume enterprise workflows? The math changes quickly. A single complex task might consume 10-50 credits, meaning your 40,000-credit plan covers 800-4,000 tasks—potentially just a few days of operation for an enterprise workflow.
            </p>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              <strong className="text-slate-900">Estimated annual costs for enterprises:</strong>
            </p>

            <ul className="space-y-3 mb-12">
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Manus:</strong> $24K-48K/year for moderate enterprise use (varies by credit consumption)
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Agent School:</strong> $60K-300K/year (consultation-based, varies by scale and use case)
              </li>
            </ul>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-12">
              Agent School has higher upfront costs but predictable execution costs ($0.01-$0.15/task vs $0.10-$0.50), no LLM token surprises, and self-healing that eliminates maintenance overhead. For mission-critical workflows with high volume, the 3-year TCO typically favors Agent School.
            </p>

            <h2 className="font-display text-display-md text-slate-900 mb-8">
              What They're Actually Used For
            </h2>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              <strong className="text-slate-900">Manus excels at:</strong>
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Research aggregation:</strong> Multi-source information gathering
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Content creation:</strong> Presentations, web apps, AI-generated content
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Browser automation:</strong> Flexible, exploratory tasks
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Email management:</strong> Drafting, categorization, follow-ups
              </li>
            </ul>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              <strong className="text-slate-900">Agent School is built for:</strong>
            </p>

            <ul className="space-y-3 mb-12">
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Mission-critical operations:</strong> Hotel reservations, healthcare scheduling, financial reconciliation
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Regulated industries:</strong> Healthcare (HIPAA), finance (SOX), government
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">High-volume workflows:</strong> Processing thousands of tasks daily with 99% reliability
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                <strong className="text-slate-900">Compliance-first:</strong> Full audit trails, deterministic execution, regulatory adherence
              </li>
            </ul>

            <div className="not-prose bg-orange-50 border border-teal-200 rounded-2xl p-8 mb-12">
              <p className="text-body-md text-slate-700">
                <strong className="text-teal-700">The pattern:</strong> Manus is excellent for individual knowledge workers and small teams doing flexible, exploratory work. Agent School wins for enterprises that need certified, mission-critical automation with true data independence.
              </p>
            </div>

            <h2 className="font-display text-display-md text-slate-900 mb-8">
              Agent School vs Manus
            </h2>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              Manus helped pioneer AI agents for mainstream users. For individual knowledge workers, small teams, and low-stakes automation, it's a powerful tool.
            </p>

            <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
              But for enterprises that need:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-body-md text-slate-700 pl-4">
                99% reliability for mission-critical workflows
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                True data independence without platform dependencies
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                10x faster execution for high-volume operations
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                Full transparency for compliance and audit trails
              </li>
              <li className="text-body-md text-slate-700 pl-4">
                Self-healing to eliminate maintenance overhead
              </li>
            </ul>

            <p className="text-body-lg text-slate-700 leading-relaxed">
              Agent School is the enterprise-grade alternative.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-teal-600/10 via-transparent to-orange-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-display-lg md:text-6xl text-slate-900 mb-6">
              Ready to See the Difference?
            </h2>
            <p className="text-heading-md text-slate-700 mb-8 max-w-2xl mx-auto">
              Join enterprises choosing the independent, certified alternative for AI automation.
            </p>
            <a
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-orange-500 px-8 py-4 font-semibold text-slate-900 transition hover:shadow-lg hover:shadow-orange-500/25"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-8 text-body-sm text-slate-600">
              30-day pilot program with satisfaction guarantee
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
