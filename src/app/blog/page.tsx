import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

interface BlogPost {
  title: string;
  summary: string;
  date: string;
  slug: string;
  published: boolean;
}

const BLOG_POSTS: BlogPost[] = [
  {
    title: "Agent School Manifesto",
    summary:
      "The philosophy and principles behind Agent School—why we're building a world where human knowledge becomes immortal automation.",
    date: "January 20th, 2026",
    slug: "agent-school-manifesto",
    published: true,
  },
  {
    title: "Memory Management",
    summary:
      "How AI agents remember, forget, and retrieve information across workflows. The technical foundation for reliable automation.",
    date: "February 12th, 2026",
    slug: "memory-management",
    published: true,
  },
  {
    title: "How Geometry Solution Automated 40+ Hours of Weekly Invoicing",
    summary:
      "From drowning in Amazon logistics paperwork to running a fully automated invoice processing system that handles hundreds of transactions daily.",
    date: "February 12th, 2026",
    slug: "geometry-solution-case-study",
    published: true,
  },
  {
    title: "Teach Once, Automate Forever: A Practical Playbook",
    summary:
      "How to capture expert workflows and convert them into production-ready agents with confidence.",
    date: "March 2026",
    slug: "teach-once-automate-forever",
    published: false,
  },
  {
    title: "From SOPs to Self-Healing Agents",
    summary:
      "A behind-the-scenes look at deterministic execution, assertions, and recovery loops that keep agents reliable.",
    date: "March 2026",
    slug: "from-sops-to-self-healing-agents",
    published: false,
  },
  {
    title: "What 99% Reliability Actually Looks Like",
    summary:
      "How certification pipelines, threshold gates, and failure analysis work in real deployments.",
    date: "April 2026",
    slug: "what-99-reliability-looks-like",
    published: false,
  },
  {
    title: "RPA vs Agent School: Speed, Cost, and Adaptability",
    summary:
      "A side-by-side comparison of traditional automation and modern AI agents in changing software environments.",
    date: "April 2026",
    slug: "rpa-vs-agent-school",
    published: false,
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <section className="pt-36 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-caption uppercase tracking-widest text-teal-600 mb-4">
              Agent School Journal
            </p>
            <h1 className="font-display text-display-lg md:text-6xl text-slate-900 max-w-3xl">
              Blog
            </h1>
            <p className="text-body-lg text-slate-600 max-w-2xl mt-6">
              Deep dives on AI agent training, certification, and real-world
              workflow automation.
            </p>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-8">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug} className="border-b border-slate-200 pb-8">
                  {post.published ? (
                    <Link href={`/blog/${post.slug}`}>
                      <article className="group cursor-pointer">
                        <div className="flex items-baseline justify-between gap-4 mb-2">
                          <h2 className="font-display text-heading-lg text-slate-900 group-hover:text-teal-600 transition-colors">
                            {post.title}
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
                  ) : (
                    <article>
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        <h2 className="font-display text-heading-lg text-slate-400">
                          {post.title}
                        </h2>
                        <span className="text-body-sm text-slate-400 whitespace-nowrap">
                          {post.date}
                        </span>
                      </div>
                      <p className="text-body-md text-slate-400 leading-relaxed">
                        {post.summary}
                      </p>
                      <p className="mt-3 text-body-sm font-semibold text-slate-400">
                        Coming soon
                      </p>
                    </article>
                  )}
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
