import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, TrendingDown, Zap, CheckCircle2 } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Case Study: How Geometry Solution Automated 40+ Hours of Weekly Invoicing | Agent School",
  description:
    "Discover how Geometry Solution used AI agents to eliminate repetitive logistics workflows, processing hundreds of invoices and warehouse receipts automatically.",
};

export default function GeometrySolutionCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-900 min-h-screen">
        <article className="pt-36 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-body-sm text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 mb-6">
                <span className="text-body-sm font-semibold text-teal-700 dark:text-teal-300">
                  Case Study
                </span>
              </div>
              <h1 className="font-display text-display-lg md:text-6xl text-slate-900 dark:text-slate-100 mb-6">
                How Geometry Solution Automated 40+ Hours of Weekly Invoicing
              </h1>
              <p className="text-body-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                From drowning in Amazon logistics paperwork to running a fully automated invoice processing system that handles hundreds of transactions daily.
              </p>
              <div className="flex items-center gap-4 text-body-sm text-slate-500 dark:text-slate-500">
                <span>Agent School Team</span>
                <span>•</span>
                <time>February 12th, 2026</time>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </header>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              <div className="bg-gradient-to-br from-teal-50 to-orange-50 dark:from-teal-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-teal-200/50 dark:border-teal-800/50">
                <div className="w-10 h-10 rounded-lg bg-teal-600 dark:bg-teal-500 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <p className="font-display text-4xl text-slate-900 dark:text-slate-100 mb-2">
                  40+
                </p>
                <p className="text-body-sm text-slate-600 dark:text-slate-400">
                  Hours saved per week
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-teal-50 dark:from-orange-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-800/50">
                <div className="w-10 h-10 rounded-lg bg-orange-600 dark:bg-orange-500 flex items-center justify-center mb-4">
                  <TrendingDown className="w-5 h-5 text-white" />
                </div>
                <p className="font-display text-4xl text-slate-900 dark:text-slate-100 mb-2">
                  95%
                </p>
                <p className="text-body-sm text-slate-600 dark:text-slate-400">
                  Reduction in manual data entry
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-orange-50 dark:from-teal-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-teal-200/50 dark:border-teal-800/50">
                <div className="w-10 h-10 rounded-lg bg-teal-600 dark:bg-teal-500 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <p className="font-display text-4xl text-slate-900 dark:text-slate-100 mb-2">
                  2 weeks
                </p>
                <p className="text-body-sm text-slate-600 dark:text-slate-400">
                  From concept to production
                </p>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
                {/* The Problem */}
                <section>
                  <h2 className="font-display text-heading-xl text-slate-900 dark:text-slate-100 mb-6">
                    The Problem: Drowning in Repetitive Logistics Work
                  </h2>
                  <p className="text-body-md mb-4">
                    Geometry Solution is an e-commerce logistics company that sources products and manages fulfillment for Amazon sellers. Their business model depends on speed and accuracy—processing hundreds of orders, invoices, and warehouse receipts every day.
                  </p>
                  <p className="text-body-md mb-4">
                    But as CEO Ryan Li describes it, the team was "drowning in paperwork." Every single day involved:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-body-md mb-6">
                    <li>
                      <strong>Manually entering invoice data</strong> from suppliers into their accounting system—line by line, product by product
                    </li>
                    <li>
                      <strong>Cross-referencing warehouse receipts</strong> with purchase orders to verify shipments arrived correctly
                    </li>
                    <li>
                      <strong>Tracking inventory across multiple warehouses</strong> and updating spreadsheets with stock counts
                    </li>
                    <li>
                      <strong>Generating customer invoices</strong> for Amazon sellers, pulling data from multiple sources
                    </li>
                    <li>
                      <strong>Printing and filing physical receipts</strong> for compliance and auditing purposes
                    </li>
                  </ul>
                  <p className="text-body-md">
                    Ryan's team was spending <strong>over 40 hours per week</strong> just on these repetitive tasks. The work was mind-numbing, error-prone, and impossible to scale. Hiring more people wasn't a solution—they'd just burn out on the same repetitive workflows.
                  </p>
                </section>

                {/* What They Tried */}
                <section className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 my-12">
                  <h3 className="font-display text-heading-lg text-slate-900 dark:text-slate-100 mb-4">
                    What They Tried Before Agent School
                  </h3>
                  <div className="space-y-4 text-body-md">
                    <p>
                      <strong className="text-slate-900 dark:text-slate-100">RPA tools (UiPath, Automation Anywhere):</strong> Broke constantly when supplier websites changed their layouts. Required full-time maintenance just to keep scripts running.
                    </p>
                    <p>
                      <strong className="text-slate-900 dark:text-slate-100">Manual workflows with spreadsheets:</strong> Couldn't keep up with growth. Human error led to mismatched invoices and inventory discrepancies.
                    </p>
                    <p>
                      <strong className="text-slate-900 dark:text-slate-100">Offshore data entry teams:</strong> Time zone delays, quality control issues, and still required internal staff to review and correct mistakes.
                    </p>
                  </div>
                </section>

                {/* The Solution */}
                <section>
                  <h2 className="font-display text-heading-xl text-slate-900 dark:text-slate-100 mb-6">
                    The Solution: Teaching Agents to Handle Logistics
                  </h2>
                  <p className="text-body-md mb-4">
                    Geometry Solution partnered with Agent School to build AI agents that could handle their entire invoice and warehouse tracking workflow. The key difference? Instead of trying to automate the tasks themselves, they taught agents how to do the work.
                  </p>
                  <p className="text-body-md mb-6">
                    Here's what that looked like in practice:
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-2">
                          1. Invoice Processing Agent
                        </h3>
                        <p className="text-body-md">
                          Ryan walked through his invoice entry workflow once while Agent School recorded every step. The agent learned to extract data from supplier invoices (PDFs, emails, web portals), validate line items against purchase orders, and enter clean data into their accounting system. The agent handles <strong>200+ invoices per day</strong> with 99.2% accuracy.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-2">
                          2. Warehouse Receipt Verification Agent
                        </h3>
                        <p className="text-body-md">
                          Every shipment that arrives at their warehouse generates a receipt that needs to be matched with the original purchase order. The agent now logs into warehouse portals, downloads receipts, cross-references SKUs and quantities, and flags discrepancies for human review. What used to take 10 hours per week now happens automatically overnight.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-2">
                          3. Inventory Tracking Agent
                        </h3>
                        <p className="text-body-md">
                          Managing stock across 4 different warehouses meant constant spreadsheet updates. The agent now monitors inventory levels in real-time, syncs data across systems, and triggers reorder alerts when stock runs low. Ryan's team gets a consolidated dashboard without lifting a finger.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-2">
                          4. Print & File Automation Agent
                        </h3>
                        <p className="text-body-md">
                          For compliance, certain documents need to be printed and physically filed. The agent now automatically identifies which documents require printing, queues them to the network printer, and logs them in the filing system. Even the most mundane task is now hands-off.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* The Results */}
                <section className="mt-16">
                  <h2 className="font-display text-heading-xl text-slate-900 dark:text-slate-100 mb-6">
                    The Results: From Bottleneck to Competitive Advantage
                  </h2>
                  <p className="text-body-md mb-6">
                    Within two weeks of deploying their first agent, Geometry Solution saw dramatic improvements:
                  </p>

                  <div className="bg-gradient-to-br from-teal-50 to-orange-50 dark:from-teal-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-teal-200/50 dark:border-teal-800/50 mb-6">
                    <ul className="space-y-4 text-body-md">
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
                        <span>
                          <strong className="text-slate-900 dark:text-slate-100">40+ hours per week reclaimed</strong> from invoice entry and data management
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
                        <span>
                          <strong className="text-slate-900 dark:text-slate-100">95% reduction in manual data entry</strong> across all logistics workflows
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
                        <span>
                          <strong className="text-slate-900 dark:text-slate-100">99.2% accuracy rate</strong> on invoice processing (higher than their previous human error rate)
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
                        <span>
                          <strong className="text-slate-900 dark:text-slate-100">Zero maintenance required</strong> after initial deployment—agents self-heal when supplier portals change
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
                        <span>
                          <strong className="text-slate-900 dark:text-slate-100">3x business growth</strong> without adding headcount to the operations team
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-body-md">
                    But the numbers only tell part of the story. Ryan describes the transformation like this:
                  </p>
                </section>

                {/* Testimonial */}
                <blockquote className="border-l-4 border-teal-500 dark:border-teal-400 pl-6 py-4 my-12 bg-slate-50 dark:bg-slate-800/50 rounded-r-xl">
                  <p className="font-display text-xl text-slate-900 dark:text-slate-100 leading-relaxed mb-4">
                    "Agent School transformed how we approach automation at Geometry Solution. What used to take our team days to configure now happens in minutes. The self-healing capabilities alone have saved us countless hours of maintenance work. This is the future of workflow automation."
                  </p>
                  <footer className="text-body-md text-slate-600 dark:text-slate-400">
                    — <strong className="text-slate-900 dark:text-slate-100">Ryan Li</strong>, CEO at Geometry Solution
                  </footer>
                </blockquote>

                {/* Why It Worked */}
                <section>
                  <h2 className="font-display text-heading-xl text-slate-900 dark:text-slate-100 mb-6">
                    Why It Worked: The Agent School Difference
                  </h2>
                  <p className="text-body-md mb-6">
                    Traditional automation would have failed here for three reasons:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-2">
                        1. Suppliers constantly change their systems
                      </h3>
                      <p className="text-body-md">
                        Invoice formats, portal layouts, and API endpoints change frequently. Traditional RPA scripts would break weekly. Agent School's self-healing architecture detects changes, adapts the workflow, and recertifies automatically—no human intervention required.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-2">
                        2. Edge cases happen daily
                      </h3>
                      <p className="text-body-md">
                        Missing line items, duplicate invoices, quantity mismatches—logistics is full of exceptions. Agent School's certification process tested hundreds of edge cases before deployment, and agents know exactly how to handle each one.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-2">
                        3. Speed matters for competitive advantage
                      </h3>
                      <p className="text-body-md">
                        Geometry Solution's agents run at software speed (2-second execution times) with zero LLM calls in production. They process hundreds of transactions daily without the latency or costs of traditional AI approaches.
                      </p>
                    </div>
                  </div>
                </section>

                {/* What's Next */}
                <section className="mt-16">
                  <h2 className="font-display text-heading-xl text-slate-900 dark:text-slate-100 mb-6">
                    What's Next for Geometry Solution
                  </h2>
                  <p className="text-body-md mb-4">
                    Now that their core logistics workflows are automated, Ryan's team is expanding into new areas:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-body-md mb-6">
                    <li>Automated product sourcing agents that find and compare suppliers</li>
                    <li>Customer service agents that handle routine Amazon seller inquiries</li>
                    <li>Financial reporting agents that generate monthly summaries and forecasts</li>
                  </ul>
                  <p className="text-body-md">
                    The pattern is clear: teach an agent once, and it runs forever. Geometry Solution has moved from scaling people to scaling knowledge.
                  </p>
                </section>

                {/* CTA */}
                <section className="mt-16 bg-gradient-to-br from-teal-600 to-orange-600 dark:from-teal-700 dark:to-orange-700 rounded-2xl p-12 text-center">
                  <h2 className="font-display text-heading-xl text-white mb-4">
                    Ready to Automate Your Repetitive Workflows?
                  </h2>
                  <p className="text-body-lg text-teal-50 mb-8 max-w-2xl mx-auto">
                    If your team is drowning in manual data entry, invoice processing, or logistics workflows, Agent School can help. Book a demo to see how agents can transform your operations.
                  </p>
                  <Link
                    href="https://cal.com/jackagentschool/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 dark:text-teal-700 font-semibold rounded-xl hover:bg-teal-50 transition-colors shadow-lg"
                  >
                    Schedule a Demo
                  </Link>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
