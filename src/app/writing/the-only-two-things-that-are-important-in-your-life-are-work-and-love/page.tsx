import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "The Only Two Things That Are Important in Your Life Are Work and Love. | Jack Luo",
  description:
    "A direct examination of what actually matters — the Tolstoy-adjacent thesis that keeps proving itself true.",
};

const MEDIUM_URL =
  "https://thejackluo8.medium.com/the-only-two-things-that-are-important-in-your-life-are-work-and-love-7b8a4aa5186b";

export default function WorkAndLovePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <article className="pt-36 pb-24 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 text-body-sm text-slate-600 hover:text-teal-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Writing
            </Link>

            <header className="mb-12">
              <h1 className="font-display text-display-lg md:text-5xl text-slate-900 mb-4">
                The Only Two Things That Are Important in Your Life Are Work and Love.
              </h1>
              <div className="flex items-center gap-4 text-body-sm text-slate-500">
                <span>Jack Luo</span>
                <span>•</span>
                <time dateTime="2025-12-05">December 5th, 2025</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-body-lg">
                  Strip away the noise and you are left with two things: the work you do in the world,
                  and the love you give and receive. Everything else is a footnote.
                </p>

                <p className="text-body-md">
                  This essay examines the claim directly — not as a feel-good aphorism but as a
                  practical framework. What counts as work? What counts as love? And what happens
                  when they conflict?
                </p>

                <p className="text-body-md">
                  Read the full essay on Medium.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-body-md text-slate-700 mb-4">
                This post was originally published on Medium. Continue reading there for the full essay.
              </p>
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-body-sm font-medium hover:bg-slate-700 transition-colors"
              >
                Read on Medium
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
