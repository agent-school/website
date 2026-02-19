import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "2025 Recap | Jack Luo",
  description:
    "A full look back at 2025 — what was built, what failed, what surprised, and what comes next.",
};

const MEDIUM_URL = "https://thejackluo8.medium.com/2025-recap-b734a8433778";

export default function Recap2025Page() {
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
                2025 Recap
              </h1>
              <div className="flex items-center gap-4 text-body-sm text-slate-500">
                <span>Jack Luo</span>
                <span>•</span>
                <time dateTime="2025-12-08">December 8th, 2025</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-body-lg">
                  2025 was a year of building, breaking, and figuring out what actually matters.
                  This is the full recap — honest, unfiltered, and as complete as memory allows.
                </p>

                <p className="text-body-md">
                  What got shipped, what failed, what surprised, who showed up, and what the year
                  ultimately meant. Plus: what Jack is heading into 2026 with.
                </p>

                <p className="text-body-md">
                  Read the full recap on Medium.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-body-md text-slate-700 mb-4">
                This post was originally published on Medium. Continue reading there for the full recap.
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
