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
                Agent School Manifesto
              </h1>
              <div className="flex items-center justify-end gap-4 text-body-sm text-slate-400">
                <span>Jack</span>
                <span>•</span>
                <time>January 20th, 2026</time>
              </div>
            </header>

            <div className="prose prose-invert prose-slate max-w-none">
              <div className="space-y-8 text-slate-300 leading-relaxed text-right">
                <p className="text-body-lg">
                  We built Agent School because we believe human expertise is
                  too valuable to disappear when people leave. Every workflow
                  you've perfected, every edge case you've learned to handle,
                  every institutional knowledge you carry—it should outlive you.
                </p>

                <p className="text-body-md">
                  Traditional automation fails because it's brittle. Change a
                  button, and the script breaks. Update an API, and the
                  integration collapses. RPA promises efficiency but delivers
                  endless maintenance.
                </p>

                <p className="text-body-md">
                  AI agents fail because they're unreliable. They hallucinate.
                  They make up data. They can't be trusted with production
                  workflows that matter.
                </p>

                <p className="text-body-md">
                  We're solving both problems. Agent School captures your
                  expertise and converts it into agents that are fast,
                  reliable, and self-healing. Not 70% reliable. Not "good
                  enough." Ninety-nine percent reliable. Certified.
                  Transparent. Trustworthy.
                </p>

                <p className="text-body-md">
                  The secret is simple: we generate a deterministic software
                  layer that gives agents superhuman speed and reliability.
                  When software changes, agents adapt automatically and
                  re-certify themselves. No human intervention required.
                </p>

                <p className="text-body-md">
                  This is the future we're building. A world where your best
                  people teach agents once, and those agents run forever. Where
                  automation doesn't break when software changes. Where AI is
                  fast, reliable, and fully transparent.
                </p>

                <p className="text-body-md">
                  Human knowledge becomes immortal. Workflows become
                  unstoppable. Teams become superhuman.
                </p>

                <p className="text-body-lg font-semibold text-teal-300">
                  Welcome to Agent School.
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
