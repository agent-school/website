import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Dinner Notes from a Brain That Refuses to Shut Up | Jack Luo",
  description:
    "Stream-of-consciousness thoughts scribbled between bites — the ideas that won't wait for a proper essay.",
};

const MEDIUM_URL =
  "https://thejackluo8.medium.com/dinner-notes-from-a-brain-that-refuses-to-shut-up-f8992602690c";

export default function DinnerNotesPage() {
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
                Dinner Notes from a Brain That Refuses to Shut Up
              </h1>
              <div className="flex items-center gap-4 text-body-sm text-slate-500">
                <span>Jack Luo</span>
                <span>•</span>
                <time dateTime="2025-12-12">December 12th, 2025</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-body-lg">
                  Some thoughts refuse to wait for the right context. This is a collection of
                  ideas, fragments, and observations that arrived at dinner and wouldn&apos;t let go.
                </p>

                <p className="text-body-md">
                  Stream-of-consciousness, unpolished, and exactly as they arrived — the raw material
                  of essays that haven&apos;t been written yet.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-body-sm text-orange-600 font-medium mb-2">Member-only on Medium</p>
              <p className="text-body-md text-slate-700 mb-4">
                This post is behind Medium&apos;s member paywall. You&apos;ll need a Medium membership to read
                the full piece — or follow Jack on Medium to access it through your membership.
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
