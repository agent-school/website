import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Philmont — A Journey of Hiking Through Mountains (2019) | Jack Luo",
  description:
    "Revisiting a formative backcountry trek through New Mexico's Philmont Scout Ranch — the altitude, the miles, and what they taught a younger Jack.",
};

const MEDIUM_URL =
  "https://thejackluo8.medium.com/philmont-a-journey-of-hiking-through-mountains-2019-1165c9c1f1e8";

export default function PhilmontPage() {
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
                Philmont — A Journey of Hiking Through Mountains (2019)
              </h1>
              <div className="flex items-center gap-4 text-body-sm text-slate-500">
                <span>Jack Luo</span>
                <span>•</span>
                <time dateTime="2026-02-08">February 8th, 2026</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-body-lg">
                  In 2019, Jack hiked through Philmont Scout Ranch in New Mexico — 100+ miles of
                  backcountry trails through some of the most demanding terrain in the American West.
                </p>

                <p className="text-body-md">
                  This is a retrospective: the altitude, the blisters, the miles, the people, and
                  what a trek like that teaches you about yourself when you&apos;re young and still
                  figuring out how much you can actually take.
                </p>

                <p className="text-body-md">
                  Read the full story on Medium.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-body-md text-slate-700 mb-4">
                This post was originally published on Medium. Continue reading there for the full story.
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
