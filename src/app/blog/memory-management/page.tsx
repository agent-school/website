import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Memory Management | Agent School",
  description:
    "How AI agents remember, forget, and retrieve information across workflows. The technical foundation for reliable automation.",
};

export default function MemoryManagementPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-950 text-white min-h-screen">
        <article className="pt-36 pb-24 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-body-sm text-slate-400 hover:text-teal-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-16 text-right">
              <h1 className="font-display text-display-lg md:text-6xl text-white mb-4">
                Memory Management
              </h1>
              <div className="flex items-center justify-end gap-4 text-body-sm text-slate-400">
                <span>Jack</span>
                <span>•</span>
                <time>February 12th, 2026</time>
              </div>
            </header>

            <div className="prose prose-invert prose-slate max-w-none">
              <div className="space-y-8 text-slate-300 leading-relaxed text-right">
                <p className="text-body-lg">
                  The hardest problem in AI automation isn't intelligence. It's
                  memory. How does an agent remember what it learned yesterday?
                  How does it forget irrelevant details? How does it retrieve
                  the exact context it needs, when it needs it?
                </p>

                <p className="text-body-md">
                  Most AI agents fail at scale because they treat memory as an
                  afterthought. They dump everything into a vector database and
                  hope for the best. But context windows fill up. Retrieval
                  becomes slow. Critical details get lost in the noise.
                </p>

                <p className="text-body-md">
                  At Agent School, we built a memory system that mirrors how
                  humans actually work. Short-term memory for immediate tasks.
                  Long-term memory for institutional knowledge. Working memory
                  for active reasoning. And most importantly—selective
                  forgetting.
                </p>

                <p className="text-body-md">
                  When you teach an agent a workflow, we capture not just the
                  steps, but the context around each decision. Why did you
                  choose option A over option B? What edge cases exist? What
                  exceptions matter? This becomes structured knowledge that
                  agents can query instantly.
                </p>

                <p className="text-body-md">
                  During execution, agents load only the relevant memory they
                  need. A booking agent doesn't need to remember how to process
                  refunds while checking availability. A data entry agent
                  doesn't need to recall validation rules for fields it's not
                  currently filling.
                </p>

                <p className="text-body-md">
                  The result is speed and reliability. Two-second execution
                  instead of forty-five-second reasoning loops. Zero
                  hallucinations because agents only work with verified memory.
                  Perfect consistency across thousands of parallel runs.
                </p>

                <p className="text-body-md">
                  Memory isn't just storage. It's the foundation of trust. When
                  agents remember correctly, forget strategically, and retrieve
                  instantly, automation becomes reliable enough for production.
                </p>

                <p className="text-body-lg font-semibold text-teal-300">
                  The future of AI isn't smarter models. It's smarter memory.
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
