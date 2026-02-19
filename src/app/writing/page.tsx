import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Writing | Jack Luo",
  description:
    "Personal essays, reflections, and notes by Jack Luo — imported from Medium.",
};

interface WritingPost {
  title: string;
  summary: string;
  date: string;
  slug: string;
  memberOnly?: boolean;
}

const WRITING_POSTS: WritingPost[] = [
  {
    title: "Dear Jack,",
    summary:
      "A personal letter — reflections on growth, identity, and the road ahead.",
    date: "February 9th, 2026",
    slug: "dear-jack",
    memberOnly: true,
  },
  {
    title: "Philmont — A Journey of Hiking Through Mountains (2019)",
    summary:
      "Revisiting a formative backcountry trek through New Mexico's Philmont Scout Ranch — the altitude, the miles, and what they taught a younger Jack.",
    date: "February 8th, 2026",
    slug: "philmont-a-journey-of-hiking-through-mountains-2019",
  },
  {
    title: "The Biggest Unsolved Question",
    summary:
      "What is the single question that, if answered, would change everything? A meditation on the problems worth obsessing over.",
    date: "January 24th, 2026",
    slug: "the-biggest-unsolved-question",
  },
  {
    title: "CES 2026 NVIDIA Keynote",
    summary:
      "Live notes and reactions from Jensen Huang's CES 2026 keynote — physical AI, robotics, and what NVIDIA's next chapter looks like.",
    date: "January 24th, 2026",
    slug: "ces-2026-nvidia-keynote",
  },
  {
    title: "2026 FAQ",
    summary:
      "Questions Jack is getting asked heading into 2026 — about work, life, AI, and what comes next.",
    date: "January 18th, 2026",
    slug: "2026-faq",
  },
  {
    title: "My 2025 Recap in Bullet Points (Part 1)",
    summary:
      "The highlights, lowlights, and lessons of 2025 distilled into honest bullet points.",
    date: "January 17th, 2026",
    slug: "my-2025-recap-in-bullet-points-part-1",
  },
  {
    title: "Before the 2025 Recap",
    summary:
      "A quiet moment of reflection before looking back — sitting with the year before writing about it.",
    date: "January 4th, 2026",
    slug: "before-the-2025-recap",
    memberOnly: true,
  },
  {
    title: "Dinner Notes from a Brain That Refuses to Shut Up",
    summary:
      "Stream-of-consciousness thoughts scribbled between bites — the ideas that won't wait for a proper essay.",
    date: "December 12th, 2025",
    slug: "dinner-notes-from-a-brain-that-refuses-to-shut-up",
    memberOnly: true,
  },
  {
    title: "2025 Recap",
    summary:
      "A full look back at 2025 — what was built, what failed, what surprised, and what comes next.",
    date: "December 8th, 2025",
    slug: "2025-recap",
  },
  {
    title: "Slime, Deadlines, and Trying Not to Explode",
    summary:
      "On managing pressure, creative chaos, and the strange relief of finishing something hard.",
    date: "December 6th, 2025",
    slug: "slime-deadlines-and-trying-not-to-explode",
  },
  {
    title: "The Only Two Things That Are Important in Your Life Are Work and Love.",
    summary:
      "A direct examination of what actually matters — the Tolstoy-adjacent thesis that keeps proving itself true.",
    date: "December 5th, 2025",
    slug: "the-only-two-things-that-are-important-in-your-life-are-work-and-love",
  },
  {
    title: "Thanksgiving 2025",
    summary:
      "Gratitude notes from Thanksgiving — what Jack is thankful for this year, and why.",
    date: "November 27th, 2025",
    slug: "thanksgiving-2025",
  },
  {
    title: "Dream Journal 11/19/25",
    summary:
      "A raw, unfiltered dream journal entry from November 19th — imagery, narrative, and what the subconscious was processing.",
    date: "November 20th, 2025",
    slug: "dream-journal-11-19-25",
  },
  {
    title: "What Does AI Think Will Surprise You?",
    summary:
      "Jack asked an AI to analyze himself — the results were more revealing than expected.",
    date: "November 19th, 2025",
    slug: "what-does-ai-think-of-this-guy-called-jack",
  },
  {
    title: "Acquaintances, Friends, and Close Friends",
    summary:
      "On the spectrum of human connection — what separates an acquaintance from a friend, and a friend from someone truly close.",
    date: "November 19th, 2025",
    slug: "acquaintances-friends-and-close-friends",
  },
  {
    title: "Geometry of Success",
    summary:
      "Success is not a straight line or a ladder — it's a shape. Thinking about ambition, direction, and the structure beneath achievement.",
    date: "November 8th, 2025",
    slug: "geometry-of-success",
  },
];

export default function WritingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <section className="pt-36 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-caption uppercase tracking-widest text-orange-600 mb-4">
              Jack Luo
            </p>
            <h1 className="font-display text-display-lg md:text-6xl text-slate-900 max-w-3xl">
              Writing
            </h1>
            <p className="text-body-lg text-slate-600 max-w-2xl mt-6">
              Personal essays, reflections, and notes. Posts are mirrored from{" "}
              <a
                href="https://thejackluo8.medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 underline underline-offset-2"
              >
                Medium
              </a>
              .
            </p>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-8">
              {WRITING_POSTS.map((post) => (
                <li key={post.slug} className="border-b border-slate-200 pb-8">
                  <Link href={`/writing/${post.slug}`}>
                    <article className="group cursor-pointer">
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        <h2 className="font-display text-heading-lg text-slate-900 group-hover:text-orange-600 transition-colors">
                          {post.title}
                          {post.memberOnly && (
                            <span className="ml-2 inline-block align-middle text-caption font-mono text-slate-400 border border-slate-300 rounded px-1.5 py-0.5">
                              Member
                            </span>
                          )}
                        </h2>
                        <span className="text-body-sm text-slate-500 whitespace-nowrap">
                          {post.date}
                        </span>
                      </div>
                      <p className="text-body-md text-slate-600 leading-relaxed">
                        {post.summary}
                      </p>
                    </article>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
