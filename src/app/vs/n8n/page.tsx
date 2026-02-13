import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

export const metadata = {
  title: "Agent School vs n8n | Built for Operations Teams, Not Developers",
  description: "n8n is excellent for technical teams who want full code control. Agent School is built for business operations teams who need reliable automation without developer resources.",
};

export default function N8nComparisonPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-950 text-white">
        {/* Hero Section */}
        <section className="pt-36 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-transparent to-orange-600/10" />
          <div className="max-w-4xl mx-auto relative">
            <p className="font-mono text-caption uppercase tracking-widest text-teal-300 mb-4">
              Comparison
            </p>
            <h1 className="font-display text-display-xl md:text-7xl text-white mb-6">
              Agent School vs n8n
            </h1>
            <p className="text-heading-md text-slate-300 mb-3">
              n8n is great for technical teams who want visual workflows with code flexibility.
            </p>
            <p className="text-heading-md text-slate-300 mb-8">
              Agent School is built for business operations teams who need reliable AI agents without writing code.
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
              Both n8n and Agent School help teams automate workflows, but they're designed for completely different audiences. n8n targets DevOps engineers and IT teams who are comfortable with code. Agent School empowers non-technical operations teams to create certified AI agents through demonstration—no coding required.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-12">
              Let's explore the differences.
            </p>

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
                        n8n
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Target users
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        Business operations teams who need reliable automation without developer help
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        Technical teams (DevOps, IT Ops) comfortable with JavaScript/Python
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Ease of use
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        Demonstrate workflows in plain English or by example. No coding required.
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        Visual node builder with optional JavaScript/Python. Steeper learning curve.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Integrations
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        Works with any UI, API, or database through AI understanding
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        1,700+ pre-built nodes. Largest integration library in open-source.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Reliability
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        99% certified before deployment. Agents tested hundreds of times.
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        Depends on workflow design. No built-in certification or testing framework.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Self-healing
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        Included. Adapts when UIs change using semantic understanding.
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        Not available. Workflows break when apps update—requires manual fixes.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30 transition">
                      <td className="py-4 px-6 text-body-md text-white font-semibold">
                        Pricing
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-200">
                        Consultation-based (enterprise focus)
                      </td>
                      <td className="py-4 px-6 text-body-md text-slate-400">
                        €20-50/mo cloud OR free self-hosted (infrastructure costs apply)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="font-display text-display-md text-white mt-16 mb-8">
              Ease of Use
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              n8n is designed for technical teams. You build workflows by dragging nodes onto a canvas and connecting them—each node represents an action like "Get data from Google Sheets" or "Send Slack message." It's visual, but you'll often need to write JavaScript or Python to handle complex logic, transform data, or work around limitations in pre-built nodes.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              The learning curve is real. Setting up your first workflow can take anywhere from 1-16 hours depending on complexity, and you'll spend time debugging, testing, and maintaining it as apps change their APIs.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              Agent School takes a fundamentally different approach. You demonstrate what you want automated—either by describing it in plain English or by showing the agent how to do it once. The platform captures every decision point, converts it into a reliable workflow, and certifies it before deployment.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-8">
              <strong className="text-white">What this means in practice:</strong>
            </p>

            <ul className="space-y-3 mb-12">
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">n8n:</strong> Great if you have a DevOps team available. Time to first workflow: 1-16 hours (depending on complexity and technical skill).
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Agent School:</strong> Designed for non-technical teams. Time to first agent: 30 minutes to 4 hours (no coding required).
              </li>
            </ul>

            <h2 className="font-display text-display-md text-white mb-8">
              Integrations
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              n8n has one of the largest integration libraries in the open-source automation space—over 1,700 pre-built nodes covering everything from Slack and Google Workspace to databases, CRMs, and niche SaaS tools. If you're working with popular enterprise tools or need quick plug-and-play access, n8n's got you covered.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              But here's the catch: if the pre-built node doesn't do exactly what you need, you're writing custom JavaScript or hitting APIs directly via HTTP requests. It's flexible, but it requires technical expertise.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-12">
              Agent School uses AI to understand interfaces, APIs, and databases without needing pre-built connectors. Demonstrate what you want once, and the agent learns to interact with any system—whether it's a legacy tool with no API, a modern SaaS app, or your internal database. No hunting through integration libraries or writing glue code.
            </p>

            <h2 className="font-display text-display-md text-white mb-8">
              Self-Healing vs Manual Maintenance
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              Here's where the difference becomes expensive over time.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              n8n workflows are brittle. When Salesforce updates their UI, or your CRM changes an API endpoint, your workflow breaks. You'll get an error notification, and someone on your team (usually a developer) needs to:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-body-md text-slate-300 pl-4">
                Investigate what broke
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Update the workflow nodes
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Test everything again
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Re-deploy
              </li>
            </ul>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              For a single workflow, this might be 1-2 hours. For 20 workflows? That's a part-time job.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              Agent School agents are self-healing. When UIs change, the agent adapts automatically using semantic understanding (it knows what a "Save" button does, even if the button text or location changes). If adaptation fails, the system alerts you—but 95% of UI changes are handled without human intervention.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-12">
              This isn't theoretical. Traditional RPA tools (which n8n resembles in this regard) typically require 30-50% of development time spent on maintenance. Self-healing eliminates most of that.
            </p>

            <h2 className="font-display text-display-md text-white mb-8">
              Reliability and Certification
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              n8n gives you full transparency—you can see every node in your workflow and inspect the code. But it doesn't test your workflow for you. You're responsible for:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-body-md text-slate-300 pl-4">
                Manually testing edge cases
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Handling errors gracefully
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Ensuring the workflow works reliably in production
              </li>
            </ul>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              This is fine for internal tools where occasional failures are acceptable. But for mission-critical workflows—processing payments, verifying insurance claims, managing hotel reservations—you need guarantees.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-12">
              Agent School requires certification before deployment. Agents are tested hundreds of times across different scenarios, and you set the reliability threshold (90%, 95%, 99%). If an agent doesn't meet the threshold, it doesn't go to production. This addresses the #1 barrier to enterprise AI adoption: trust.
            </p>

            <h2 className="font-display text-display-md text-white mb-8">
              What They're Actually Used For
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">n8n excels at:</strong>
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">IT Operations:</strong> User onboarding, provisioning, infrastructure monitoring
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">DevOps:</strong> CI/CD pipelines, deployment automation, incident response
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Data pipelines:</strong> ETL workflows, database syncing, API integrations
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Marketing automation:</strong> Social media posting, SEO tracking, content distribution (when you have dev support)
              </li>
            </ul>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Agent School is built for:</strong>
            </p>

            <ul className="space-y-3 mb-12">
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Hotel operations:</strong> Reservation management, occupancy tracking, rate updates across booking platforms
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Healthcare:</strong> Patient scheduling, insurance verification, claims processing (HIPAA-compliant)
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Financial services:</strong> Reconciliation, compliance reporting, transaction processing
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Customer support:</strong> Ticket routing, response drafting, escalation workflows
              </li>
            </ul>

            <div className="not-prose bg-teal-500/5 border border-teal-500/30 rounded-2xl p-8 mb-12">
              <p className="text-body-md text-slate-300">
                <strong className="text-teal-300">The pattern:</strong> n8n shines when you have technical resources and need flexibility. Agent School wins when you need business teams to automate reliably without developer support.
              </p>
            </div>

            <h2 className="font-display text-display-md text-white mb-8">
              Total Cost of Ownership
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              Let's talk real numbers. n8n appears cheaper upfront, but the hidden costs add up fast.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-8">
              <strong className="text-white">n8n pricing for a mid-size company (50-500 employees):</strong>
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Cloud:</strong> €50/month (~$660/year) for 10,000 executions, or enterprise pricing for unlimited
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Self-hosted:</strong> Free (open-source) + $60-240/year for infrastructure (VPS/cloud hosting)
              </li>
            </ul>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              But here's what they don't advertise:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Developer time to build workflows:</strong> $20K-40K/year (part-time DevOps resource at $80-120K salary)
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Ongoing maintenance:</strong> $10K-30K/year (fixing broken workflows, updating integrations, handling edge cases)
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                <strong className="text-slate-200">Infrastructure management (self-hosted):</strong> $5K-15K/year (monitoring, updates, security patches)
              </li>
            </ul>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-12">
              <strong className="text-white">Total 3-year cost for n8n:</strong> $105K-255K (assuming part-time dev support + maintenance)
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-8">
              <strong className="text-white">Agent School pricing:</strong>
            </p>

            <ul className="space-y-3 mb-12">
              <li className="text-body-md text-slate-300 pl-4">
                Platform cost: $60K-180K over 3 years (enterprise pricing varies by scale)
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Developer time: $0 (non-technical teams build agents)
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Maintenance: Minimal (self-healing handles 95% of changes automatically)
              </li>
              <li className="text-body-md text-slate-300 pl-4">
                Infrastructure: $0 (fully managed)
              </li>
            </ul>

            <div className="not-prose bg-orange-500/5 border border-orange-500/30 rounded-2xl p-8 mb-12">
              <p className="text-body-md text-slate-300 mb-4">
                <strong className="text-orange-300">The math:</strong> If you don't have a DevOps team available, n8n's "free" tier can end up costing $30K-80K/year in developer resources. Agent School eliminates that entirely by letting operations teams build and maintain agents themselves.
              </p>
              <p className="text-body-sm text-slate-400">
                Note: If you already have in-house DevOps capacity and they're not at full utilization, n8n can be extremely cost-effective. The trade-off is time-to-value and maintenance overhead.
              </p>
            </div>

            <h2 className="font-display text-display-md text-white mb-8">
              Agent School vs n8n
            </h2>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              n8n is the right tool if you have technical teams who want full control over workflows, need to integrate with 1,700+ tools, or prefer self-hosting for data sovereignty.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed mb-6">
              But if your organization is short on developer resources, needs business teams to automate independently, or requires mission-critical reliability with minimal maintenance, Agent School is a smarter choice.
            </p>

            <p className="text-body-lg text-slate-300 leading-relaxed">
              No workarounds to do what should be simple. Just reliable agents, built by the teams who know the work best.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-teal-600/10 via-transparent to-orange-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-display-lg md:text-6xl text-white mb-6">
              See Agent School in Action
            </h2>
            <p className="text-heading-md text-slate-300 mb-8 max-w-2xl mx-auto">
              Learn how operations teams automate workflows without developer resources.
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
