import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Before the 2025 Recap | Jack Luo",
  description:
    "A quiet moment of reflection before looking back — sitting with the year before writing about it.",
};

const MEDIUM_URL =
  "https://thejackluo8.medium.com/before-the-2025-recap-b8227924dff7";

export default function BeforeThe2025RecapPage() {
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
              <div className="mb-3">
                <span className="font-mono text-caption uppercase tracking-widest text-orange-600 border border-orange-300 rounded px-2 py-0.5">
                  Member Only
                </span>
              </div>
              <h1 className="font-display text-display-lg md:text-6xl text-slate-900 mb-4">
                Before the 2025 Recap
              </h1>
              <div className="flex items-center gap-4 text-body-sm text-slate-500">
                <span>Jack Luo</span>
                <span>•</span>
                <time dateTime="2026-01-04">January 4th, 2026</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-body-lg">
                  Before the formal recap, there&apos;s a quieter kind of processing that needs to happen.
                  This is that — sitting with 2025 before writing about it.
                </p>

                <p className="text-body-md">
                  What it felt like to be inside the year as it ended. The things that were still
                  unresolved. The feelings that hadn&apos;t yet crystallized into words.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-body-sm text-orange-600 font-medium mb-2">Member-only on Medium</p>
              <p className="text-body-md text-slate-700 mb-4">
                This post is behind Medium&apos;s member paywall. You&apos;ll need a Medium membership to read
                the full piece.
              </p>
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-body-sm font-medium hover:bg-slate-700 transition-colors"
              >
                Continue on Medium
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
