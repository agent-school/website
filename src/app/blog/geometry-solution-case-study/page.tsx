import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, TrendingDown, Zap, CheckCircle2 } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Case Study: How Geometry Solution Automated 40+ Hours of Weekly Invoicing | Agent School",
  description:
    "Discover how Geometry Solution built deterministic workflows on top of legacy logistics systems, eliminating 85% of manual data entry with self-healing automation.",
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
              className="inline-flex items-center gap-2 text-body-sm text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 mb-6">
                <span className="text-body-sm font-semibold text-orange-700 dark:text-orange-300">
                  Case Study
                </span>
              </div>
              <h1 className="font-display text-display-lg md:text-6xl text-slate-900 dark:text-slate-100 mb-6">
                How Geometry Solution Automated 40+ Hours of Weekly Invoicing
              </h1>
              <p className="text-body-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                From drowning in Amazon logistics paperwork to running deterministic workflows on top of legacy systems—processing hundreds of transactions with self-healing automation.
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
              <div className="bg-gradient-to-br from-orange-50 to-orange-50 dark:from-orange-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-800/50">
                <div className="w-10 h-10 rounded-lg bg-orange-600 dark:bg-orange-500 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <p className="font-display text-4xl text-slate-900 dark:text-slate-100 mb-2">
                  40+
                </p>
                <p className="text-body-sm text-slate-600 dark:text-slate-400">
                  Hours saved per week
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-50 dark:from-orange-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-800/50">
                <div className="w-10 h-10 rounded-lg bg-orange-600 dark:bg-orange-500 flex items-center justify-center mb-4">
                  <TrendingDown className="w-5 h-5 text-white" />
                </div>
                <p className="font-display text-4xl text-slate-900 dark:text-slate-100 mb-2">
                  85%
                </p>
                <p className="text-body-sm text-slate-600 dark:text-slate-400">
                  Reduction in manual data entry
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-50 dark:from-orange-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-800/50">
                <div className="w-10 h-10 rounded-lg bg-orange-600 dark:bg-orange-500 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <p className="font-display text-4xl text-slate-900 dark:text-slate-100 mb-2">
                  2 weeks
                </p>
                <p className="text-body-sm text-slate-600 dark:text-slate-400">
                  From pilot to production
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
                    Geometry Solution is an e-commerce logistics company that sources products and manages fulfillment for Amazon sellers. Their business model depends on speed and accuracy—processing hundreds of orders, invoices, and warehouse receipts every day. But as CEO Ryan Li describes it, the team was "drowning in paperwork."
                  </p>
                  <p className="text-body-md mb-4">
                    Every single day involved manually entering invoice data from suppliers into their accounting system—line by line, product by product. They had to cross-reference warehouse receipts with purchase orders to verify shipments arrived correctly, track inventory across multiple warehouses and update spreadsheets with stock counts, generate customer invoices for Amazon sellers by pulling data from multiple sources, and print and file physical receipts for compliance and auditing purposes.
                  </p>
                  <p className="text-body-md mb-4">
                    Ryan's team was spending over 40 hours per week just on these repetitive tasks. The work was mind-numbing, error-prone, and impossible to scale. Hiring more people wasn't a solution—they'd just burn out on the same repetitive workflows. The team needed automation that could handle the complexity of their legacy systems without breaking every time a supplier changed their invoice format or a warehouse portal updated its interface.
                  </p>
                </section>

                {/* What They Tried */}
                <section className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 my-12">
                  <h3 className="font-display text-heading-lg text-slate-900 dark:text-slate-100 mb-4">
                    What They Tried Before Agent School
                  </h3>
                  <p className="text-body-md mb-4">
                    Like many logistics companies, Geometry Solution experimented with traditional RPA tools like UiPath and Automation Anywhere. The promise was simple: automate repetitive workflows and free up the team. But the reality was brutal. Every time a supplier changed their website layout or moved a button on their portal, the entire script broke. Ryan's team found themselves spending more time maintaining brittle automation than they saved from the automation itself.
                  </p>
                  <p className="text-body-md mb-4">
                    They tried manual workflows with spreadsheets, but that couldn't keep up with growth. Human error led to mismatched invoices and inventory discrepancies that took days to untangle. They even experimented with offshore data entry teams, but time zone delays and quality control issues meant internal staff still had to review and correct mistakes. None of these solutions addressed the core problem: their legacy systems weren't designed for automation, and traditional tools couldn't adapt when those systems changed.
                  </p>
                </section>

                {/* The Solution */}
                <section>
                  <h2 className="font-display text-heading-xl text-slate-900 dark:text-slate-100 mb-6">
                    The Solution: Building a Software Layer for Legacy Systems
                  </h2>
                  <p className="text-body-md mb-4">
                    Geometry Solution partnered with Agent School to build a software layer on top of their legacy logistics systems. Instead of trying to automate tasks with brittle scripts, Agent School wired up deterministic workflows that could execute at software speed. The key difference? These workflows were built to be self-healing—when supplier portals changed their UI or invoice formats shifted, the system automatically detected the changes, adapted the workflows, and recertified them without human intervention.
                  </p>
                  <p className="text-body-md mb-4">
                    Here's how it worked in practice. Ryan and his team provided their standard operating procedures for each workflow—step-by-step instructions they'd been following manually. Agent School's team analyzed these SOPs and identified which steps could be converted into operation nodes (deterministic actions like clicking buttons, reading fields, or making API calls) and which steps required AI nodes (tasks needing reasoning, like validating invoice line items against purchase orders). Each operation node was stored as a reusable building block, so once it was built for one workflow, it could be reused across others.
                  </p>
                  <p className="text-body-md mb-4">
                    The workflows were then structured as JSON files that chained these operation nodes together. When a workflow ran, it executed the stored sequence of actions deterministically—no heavy LLM reasoning on every run, just fast, predictable execution. This meant workflows that used to take 45 seconds with traditional AI approaches now ran in under 2 seconds. And because the workflows were certified before deployment—tested across hundreds of edge cases in isolated environments—Ryan's team could trust them to run in production without constant monitoring.
                  </p>

                  <h3 className="font-display text-heading-lg text-slate-900 dark:text-slate-100 mb-4 mt-8">
                    Four Workflows That Transformed Operations
                  </h3>
                  
                  <p className="text-body-md mb-4">
                    <strong className="text-slate-900 dark:text-slate-100">Invoice Processing Workflow:</strong> Ryan walked through his invoice entry process once while Agent School recorded every step. The resulting workflow learned to extract data from supplier invoices (whether they came in as PDFs, emails, or web portals), validate line items against purchase orders, and enter clean data into their accounting system. The workflow now handles over 200 invoices per day with 99.2% accuracy—higher than the team's previous manual error rate. After four weeks of operation, this workflow alone is consistently saving the team 27 hours per week.
                  </p>

                  <p className="text-body-md mb-4">
                    <strong className="text-slate-900 dark:text-slate-100">Warehouse Receipt Verification Workflow:</strong> Every shipment that arrives at their warehouse generates a receipt that needs to be matched with the original purchase order. Agent School built a workflow that logs into warehouse portals, downloads receipts, cross-references SKUs and quantities, and flags discrepancies for human review. What used to take 10 hours per week now happens automatically overnight, with the team only stepping in when the workflow detects an anomaly that requires judgment.
                  </p>

                  <p className="text-body-md mb-4">
                    <strong className="text-slate-900 dark:text-slate-100">Inventory Tracking Workflow:</strong> Managing stock across four different warehouses meant constant spreadsheet updates and manual syncing. The new workflow monitors inventory levels in real-time, syncs data across systems, and triggers reorder alerts when stock runs low. Ryan's team gets a consolidated dashboard without lifting a finger, and the workflow self-heals when warehouse systems change their data formats.
                  </p>

                  <p className="text-body-md mb-4">
                    <strong className="text-slate-900 dark:text-slate-100">Print & File Automation Workflow:</strong> For compliance, certain documents need to be printed and physically filed. The workflow automatically identifies which documents require printing, queues them to the network printer, and logs them in the filing system. Even the most mundane task is now hands-off, freeing the team to focus on higher-value work.
                  </p>
                </section>

                {/* The Results */}
                <section className="mt-16">
                  <h2 className="font-display text-heading-xl text-slate-900 dark:text-slate-100 mb-6">
                    The Results: From Bottleneck to Competitive Advantage
                  </h2>
                  <p className="text-body-md mb-4">
                    Within two weeks of deploying their first workflow, Geometry Solution saw dramatic improvements. The team reclaimed over 40 hours per week from invoice entry and data management alone. Manual data entry dropped by 85% across all logistics workflows. The workflows achieved a 99.2% accuracy rate on invoice processing—higher than their previous human error rate. And because the workflows were built to self-heal, they required zero maintenance after initial deployment. When supplier portals changed their layouts or invoice formats shifted, the workflows automatically adapted and recertified themselves.
                  </p>
                  <p className="text-body-md mb-4">
                    But the numbers only tell part of the story. The real transformation came from how the workflows enabled the business to scale. Geometry Solution grew their operations 3x without adding headcount to the operations team. The team that used to spend their days on data entry now focuses on strategic work—finding new suppliers, optimizing fulfillment routes, and improving customer relationships. And after four weeks of operation, the invoice processing workflow alone is consistently saving 27 hours per week, with no signs of degradation or increased error rates.
                  </p>
                </section>

                {/* Testimonial */}
                <blockquote className="border-l-4 border-orange-500 dark:border-orange-400 pl-6 py-4 my-12 bg-slate-50 dark:bg-slate-800/50 rounded-r-xl">
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
                  <p className="text-body-md mb-4">
                    Traditional automation would have failed here for three fundamental reasons. First, suppliers constantly change their systems. Invoice formats evolve, portal layouts get redesigned, and API endpoints shift without warning. Traditional RPA scripts would break weekly, requiring constant manual fixes. Agent School's self-healing architecture detects these changes through continuous evaluation tests, automatically updates the operation nodes, and recertifies the workflows—no human intervention required.
                  </p>
                  <p className="text-body-md mb-4">
                    Second, edge cases happen daily in logistics. Missing line items, duplicate invoices, quantity mismatches, partial shipments—the list goes on. Agent School's certification process tested hundreds of edge cases in isolated environments before deployment, so the workflows knew exactly how to handle each scenario. When a workflow encounters a situation it hasn't seen before, it flags it for human review and learns from the resolution for next time.
                  </p>
                  <p className="text-body-md mb-4">
                    Third, speed matters for competitive advantage. Geometry Solution's workflows run at software speed—executing in under 2 seconds with zero LLM calls in production. Traditional AI approaches that reason through every step from scratch take 45+ seconds per task and cost 10x more per execution. By caching effective action sequences as deterministic workflows and only invoking reasoning for novel situations, Agent School delivers both reliability and efficiency. The workflows process hundreds of transactions daily without the latency or costs that make traditional AI automation prohibitively expensive for repetitive work.
                  </p>
                </section>

                {/* What's Next */}
                <section className="mt-16">
                  <h2 className="font-display text-heading-xl text-slate-900 dark:text-slate-100 mb-6">
                    What's Next for Geometry Solution
                  </h2>
                  <p className="text-body-md mb-4">
                    Now that their core logistics workflows are automated, Ryan's team is expanding the software layer into new areas. They're building workflows for automated product sourcing that find and compare suppliers across multiple platforms, customer service workflows that handle routine Amazon seller inquiries, and financial reporting workflows that generate monthly summaries and forecasts from their accounting system. Each new workflow reuses operation nodes from previous ones, making development faster and more reliable over time.
                  </p>
                  <p className="text-body-md">
                    The pattern is clear: build the software layer once, then create workflows on top of it that run forever. Geometry Solution has moved from scaling people to scaling knowledge. Their best practices are now encoded in deterministic workflows that execute perfectly every time, and their team focuses on strategic work that actually moves the business forward. That's the future of workflow automation—not replacing people, but augmenting them with software layers that make legacy systems behave like modern, automatable platforms.
                  </p>
                </section>

                {/* CTA */}
                <section className="mt-16 bg-gradient-to-br from-orange-600 to-orange-600 dark:from-orange-700 dark:to-orange-700 rounded-2xl p-12 text-center">
                  <h2 className="font-display text-heading-xl text-white mb-4">
                    Ready to Automate Your Repetitive Workflows?
                  </h2>
                  <p className="text-body-lg text-orange-50 mb-8 max-w-2xl mx-auto">
                    If your team is drowning in manual data entry, invoice processing, or logistics workflows, Agent School can help. Book a demo to see how deterministic workflows and self-healing automation can transform your operations.
                  </p>
                  <Link
                    href="https://cal.com/jackagentschool/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-700 dark:text-orange-700 font-semibold rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
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
