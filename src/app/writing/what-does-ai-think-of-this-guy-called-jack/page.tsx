import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "What Does AI Think Will Surprise You? | Jack Luo",
  description:
    "Jack asked an AI to analyze himself — the results were more revealing than expected.",
};

const MEDIUM_URL =
  "https://thejackluo8.medium.com/what-does-ai-think-of-this-guy-called-jack-bc14cf1b8add";

export default function WhatDoesAIThinkPage() {
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
                What Does AI Think Will Surprise You?
              </h1>
              <div className="flex items-center gap-4 text-body-sm text-slate-500">
                <span>Jack Luo</span>
                <span>•</span>
                <time dateTime="2025-11-19">November 19th, 2025</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-body-lg">
                  What happens when you turn AI&apos;s analytical lens on yourself? Jack fed his
                  writing, ideas, and public presence to an AI and asked it to describe him —
                  and to predict what would surprise people most about him.
                </p>

                <p className="text-body-md">
                  The results were unexpectedly honest. Some predictions were flattering, some
                  uncomfortable. All of them provoked reflection about how we present ourselves
                  versus who we actually are.
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
