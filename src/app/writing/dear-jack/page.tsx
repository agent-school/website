import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Dear Jack, | Jack Luo",
  description:
    "A personal letter — reflections on growth, identity, and the road ahead.",
};

const MEDIUM_URL = "https://thejackluo8.medium.com/dear-dear-jack-234ba8488407";

export default function DearJackPage() {
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
                Dear Jack,
              </h1>
              <div className="flex items-center gap-4 text-body-sm text-slate-500">
                <span>Jack Luo</span>
                <span>•</span>
                <time dateTime="2026-02-09">February 9th, 2026</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-body-lg">
                  A letter to himself — the kind of writing that happens when you need to speak
                  honestly to the person you were, the person you are, and the person you&apos;re
                  becoming.
                </p>

                <p className="text-body-md">
                  Reflections on growth, identity, the hard parts, and what comes next.
                  Personal, direct, and not meant to be polished.
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
