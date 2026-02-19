import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "My 2025 Recap in Bullet Points (Part 1) | Jack Luo",
  description:
    "The highlights, lowlights, and lessons of 2025 distilled into honest bullet points.",
};

const MEDIUM_URL =
  "https://thejackluo8.medium.com/my-2025-recap-in-bullet-points-part-1-31a37a0f5068";

export default function Recap2025BulletPointsPart1Page() {
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
                My 2025 Recap in Bullet Points (Part 1)
              </h1>
              <div className="flex items-center gap-4 text-body-sm text-slate-500">
                <span>Jack Luo</span>
                <span>•</span>
                <time dateTime="2026-01-17">January 17th, 2026</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-body-lg">
                  A year is a lot to compress. This is part one of the bullet-point version — faster
                  to read, harder to write than it looks.
                </p>

                <p className="text-body-md">
                  Highlights, lowlights, pivots, wins, losses, surprises, and the things that landed
                  differently than expected. All in service of clarity about what 2025 actually was.
                </p>

                <p className="text-body-md">
                  Read the full list on Medium.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-body-md text-slate-700 mb-4">
                This post was originally published on Medium. Continue reading there for the full list.
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
