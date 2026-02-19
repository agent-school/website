import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Slime, Deadlines, and Trying Not to Explode | Jack Luo",
  description:
    "On managing pressure, creative chaos, and the strange relief of finishing something hard.",
};

const MEDIUM_URL =
  "https://thejackluo8.medium.com/slime-deadlines-and-trying-not-to-explode-4951b8cbd51a";

export default function SlimeDeadlinesPage() {
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
              <h1 className="font-display text-display-lg md:text-6xl text-slate-900 mb-4">
                Slime, Deadlines, and Trying Not to Explode
              </h1>
              <div className="flex items-center gap-4 text-body-sm text-slate-500">
                <span>Jack Luo</span>
                <span>•</span>
                <time dateTime="2025-12-06">December 6th, 2025</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-body-lg">
                  Pressure doesn&apos;t compress you evenly — it finds the cracks. This essay is about
                  what happens when deadlines pile up, creative work refuses to cooperate, and the
                  only option is to not explode.
                </p>

                <p className="text-body-md">
                  On the strange texture of crunch time, the absurdity that shows up alongside stress,
                  and the relief that arrives only after you push through to the other side.
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
