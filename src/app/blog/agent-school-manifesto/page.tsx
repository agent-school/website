import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Agent School Manifesto | Agent School",
  description:
    "The philosophy and principles behind Agent School—why we're building a world where human knowledge becomes immortal automation.",
};

export default function ManifestoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <article className="pt-36 pb-24 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-body-sm text-slate-600 hover:text-teal-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-16">
              <h1 className="font-display text-display-lg md:text-6xl text-slate-900 mb-4">
                Agent School Manifesto
              </h1>
              <div className="flex items-center gap-4 text-body-sm text-slate-500">
                <span>Jack</span>
                <span>•</span>
                <time>January 20th, 2026</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-8 text-slate-700 leading-relaxed">
                <p className="text-body-lg">
                  We built Agent School because we believe human expertise is too valuable to disappear when people leave. Every workflow you've perfected over years of experience, every edge case you've learned to handle through trial and error, every piece of institutional knowledge you carry in your head, it should outlive you. Your expertise should become the foundation for automation that runs forever, not documentation that collects dust in a wiki somewhere. The best teams know how to do things that can't easily be written down, and when those people leave, that knowledge vanishes. We're building a world where that never has to happen again.
                </p>

                <p className="text-body-md">
                  Traditional automation fails because it's fundamentally brittle. RPA tools promise efficiency, but they deliver endless maintenance instead. Change a button's position on a screen, and the entire script breaks. Update an API endpoint, and the integration collapses. Rename a field in a database, and workflows grind to a halt. Companies spend millions building automation that requires a dedicated team just to keep it running. The moment software evolves, which it always does, traditional automation becomes a liability. It's automation built on coordinates and pixel matching, not understanding. And that approach has never worked at scale.
                </p>

                <p className="text-body-md">
                  AI agents promised to solve this, but they fail for the opposite reason. They're not brittle, they're unreliable. Large language models hallucinate data, make up facts, and produce inconsistent results. You can't trust them with production workflows that matter because they might work perfectly ninety times and fail catastrophically on the ninety-first. Traditional software engineering has spent decades building deterministic systems where the same input always produces the same output. AI agents threw that away in favor of intelligence, and the result is automation that's smart but untrustworthy. No CFO wants an agent that's right most of the time when it's processing financial data. No operations team wants an agent that usually books reservations correctly. The bar for production software is perfection, and AI agents haven't met it.
                </p>

                <p className="text-body-md">
                  We're solving both problems by combining the best of traditional software engineering with the best of modern AI. Agent School captures your expertise and converts it into agents that are fast, reliable, and self-healing. Not seventy percent reliable. Not "good enough for most use cases." Ninety-nine percent reliable, with certification pipelines that prove it. Every agent we deploy has been tested hundreds of times in isolated environments. Every failure mode has been analyzed and fixed. Every edge case has been documented and handled. We give you complete transparency into how agents work, with visual timelines showing every step, every decision, and every fallback. You can inspect the generated code, review the assertions that guard each action, and understand exactly what happens when things go wrong.
                </p>

                <p className="text-body-md">
                  The secret is surprisingly simple once you see it. We generate a deterministic software layer that sits between the AI and your applications. When you teach an agent a workflow, we don't just record the steps. We analyze the intent behind each action, identify the assertions that make it safe, and build fallback logic for when conditions change. Then we convert that knowledge into executable code that runs at software speed, not AI reasoning speed. The result is agents that execute in two seconds instead of forty-five, with zero LLM calls in production. No hallucinations. No variability. Just deterministic automation that works the same way every time. And when software changes, the AI layer kicks in to adapt the code, re-certify the workflow, and keep running without human intervention.
                </p>

                <p className="text-body-md">
                  This is the future we're building. A world where your best people teach agents once, and those agents run forever. Where automation doesn't break when software changes because agents understand intent, not just coordinates. Where AI is fast enough for production, reliable enough for mission-critical workflows, and transparent enough to trust. Where companies can scale their operations without scaling their headcount, because the knowledge that used to live in people's heads now lives in agents that never forget, never get tired, and never leave. Where the expertise that takes years to develop becomes automation that runs in seconds.
                </p>

                <p className="text-body-md">
                  Human knowledge becomes immortal. Workflows become unstoppable. Teams become superhuman. That's not marketing speak. That's the technical reality we've built. When you capture expertise correctly, certify it rigorously, and execute it deterministically, automation stops being a maintenance burden and becomes a competitive advantage. Your team focuses on strategy while agents handle execution. Your experts teach workflows instead of repeating them. Your operations scale without limits because software scales infinitely once it's been proven reliable.
                </p>

                <p className="text-body-lg font-semibold text-teal-600">
                  Welcome to Agent School. We're teaching AI agents to work like your best people, and we're doing it at a level of reliability that makes automation trustworthy. This is how software should have worked from the beginning.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
