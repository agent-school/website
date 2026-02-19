import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Dream Journal 11/19/25 | Jack Luo",
  description:
    "A raw, unfiltered dream journal entry from November 19th — imagery, narrative, and what the subconscious was processing.",
};

const MEDIUM_URL =
  "https://thejackluo8.medium.com/dream-journal-11-19-25-446d7a925a42";

export default function DreamJournal11192025Page() {
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
                Dream Journal 11/19/25
              </h1>
              <div className="flex items-center gap-4 text-body-sm text-slate-500">
                <span>Jack Luo</span>
                <span>•</span>
                <time dateTime="2025-11-20">November 20th, 2025</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-body-lg">
                  A raw, unfiltered record of what happened in the dream space on the night of November 19th.
                </p>

                <p className="text-body-md">
                  Dream journals are an experiment in honesty — writing down what the subconscious surfaces
                  before the waking mind can edit it away. This entry captures images, narrative threads,
                  and whatever meaning could be pulled from the fog of sleep.
                </p>

                <p className="text-body-md">
                  Read the full entry on Medium.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-body-md text-slate-700 mb-4">
                This post was originally published on Medium. Continue reading there for the full entry.
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
