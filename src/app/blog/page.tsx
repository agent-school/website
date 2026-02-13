import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

interface BlogPreview {
  title: string;
  summary: string;
  category: string;
  eta: string;
}

const BLOG_PREVIEWS: BlogPreview[] = [
  {
    title: "Teach Once, Automate Forever: A Practical Playbook",
    summary:
      "How to capture expert workflows and convert them into production-ready agents with confidence.",
    category: "Foundations",
    eta: "March 2026",
  },
  {
    title: "From SOPs to Self-Healing Agents",
    summary:
      "A behind-the-scenes look at deterministic execution, assertions, and recovery loops that keep agents reliable.",
    category: "Engineering",
    eta: "March 2026",
  },
  {
    title: "What 99% Reliability Actually Looks Like",
    summary:
      "How certification pipelines, threshold gates, and failure analysis work in real deployments.",
    category: "Certification",
    eta: "April 2026",
  },
  {
    title: "RPA vs Agent School: Speed, Cost, and Adaptability",
    summary:
      "A side-by-side comparison of traditional automation and modern AI agents in changing software environments.",
    category: "Comparison",
    eta: "April 2026",
  },
  {
    title: "Launching Your First AI Operations Team",
    summary:
      "A rollout framework for teams adopting AI agents across sales, hotel ops, and back-office workflows.",
    category: "Operations",
    eta: "May 2026",
  },
  {
    title: "Building an Agent Program Your Team Trusts",
    summary:
      "Governance, observability, and approval workflows that make AI automation safe at scale.",
    category: "Leadership",
    eta: "May 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-950 text-white min-h-screen">
        <section className="pt-36 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-caption uppercase tracking-widest text-teal-300 mb-4">
              Agent School Journal
            </p>
            <h1 className="font-display text-display-lg md:text-6xl text-white max-w-3xl">
              Blog
            </h1>
            <p className="text-body-lg text-slate-300 max-w-2xl mt-6">
              This is where we will publish deep dives on AI agent training,
              certification, and real-world workflow automation.
            </p>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_PREVIEWS.map((post) => (
              <article
                key={post.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-caption text-teal-300">
                    {post.category}
                  </span>
                  <span className="text-caption text-slate-400">{post.eta}</span>
                </div>
                <h2 className="font-display text-heading-md text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-body-sm text-slate-300 leading-relaxed">
                  {post.summary}
                </p>
                <p className="mt-6 text-body-sm font-semibold text-orange-300">
                  Coming soon
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
