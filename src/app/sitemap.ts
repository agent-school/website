import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agentschool.io";
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#features`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#journey`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#differentiation`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#use-cases`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Blog posts
    {
      url: `${baseUrl}/blog/agent-school-manifesto`,
      lastModified: "2026-01-20",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/memory-management`,
      lastModified: "2026-02-12",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Writing section (Jack Luo's personal Medium posts)
    {
      url: `${baseUrl}/writing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/writing/geometry-of-success`,
      lastModified: "2025-11-08",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/acquaintances-friends-and-close-friends`,
      lastModified: "2025-11-19",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/what-does-ai-think-of-this-guy-called-jack`,
      lastModified: "2025-11-19",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/dream-journal-11-19-25`,
      lastModified: "2025-11-20",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/thanksgiving-2025`,
      lastModified: "2025-11-27",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/the-only-two-things-that-are-important-in-your-life-are-work-and-love`,
      lastModified: "2025-12-05",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/slime-deadlines-and-trying-not-to-explode`,
      lastModified: "2025-12-06",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/2025-recap`,
      lastModified: "2025-12-08",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/dinner-notes-from-a-brain-that-refuses-to-shut-up`,
      lastModified: "2025-12-12",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/before-the-2025-recap`,
      lastModified: "2026-01-04",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/my-2025-recap-in-bullet-points-part-1`,
      lastModified: "2026-01-17",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/2026-faq`,
      lastModified: "2026-01-18",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/ces-2026-nvidia-keynote`,
      lastModified: "2026-01-24",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/the-biggest-unsolved-question`,
      lastModified: "2026-01-24",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/philmont-a-journey-of-hiking-through-mountains-2019`,
      lastModified: "2026-02-08",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/writing/dear-jack`,
      lastModified: "2026-02-09",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Demo pages
    {
      url: `${baseUrl}/demos/all`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/demos/hotel-pms`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/demos/crm`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/demos/notion`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/demos/granola`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    // Legal pages
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
