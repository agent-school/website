export const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#journey" },
  { label: "Compare", href: "#differentiation" },
  { label: "Use Cases", href: "#use-cases" },
] as const;

export const BOOKING_URL = "https://cal.com/jackagentschool/15min";
export const LINKEDIN_URL = "https://linkedin.com/company/agentschool";
export const TWITTER_URL = "https://x.com/agentschool_io";

export const FEATURES = [
  {
    id: "skill-builder",
    title: "Teach Once, Automate Forever",
    subtitle: "Turn Your Knowledge Into Unstoppable AI",
    description:
      "Show us how you work—just once. Our AI watches, learns, and transforms your expertise into an agent that never forgets. No coding. No complexity. Just demonstrate your workflow and watch it become immortal.",
    bullets: [
      "Demonstrate once in plain English or by example",
      "AI captures every nuance, every decision point",
      "Your team sees SOPs, developers see code",
      "Edge cases and exceptions handled automatically",
    ],
  },
  {
    id: "certification",
    title: "99% Reliability, Guaranteed",
    subtitle: "Every Agent Earns Its Place",
    description:
      "No agent goes live until it proves itself. Our certification pipeline tests every workflow hundreds of times. Set your threshold—90%, 95%, 99%—and watch only the best agents make it to production.",
    bullets: [
      "Automated test generation from your workflows",
      "Hundreds of scenarios in isolated sandboxes",
      "Detailed failure analysis on every miss",
      "You control the reliability bar",
    ],
  },
  {
    id: "script-viewer",
    title: "Perfect Transparency",
    subtitle: "See Everything, Trust Everything",
    description:
      "Black boxes are dead. Watch your agents work in real-time. See the exact steps, the assertions that guard them, and the fallbacks that catch failures. Complete visibility into every decision.",
    bullets: [
      "Visual timeline paired with executable code",
      "Every step protected by intelligent assertions",
      "Automatic fallbacks when conditions change",
      "Inspect, debug, and refine with ease",
    ],
  },
  {
    id: "self-healing",
    title: "Software Changes, Agents Adapt",
    subtitle: "The Automation That Never Breaks",
    description:
      "Traditional RPA dies when a button moves. Our agents understand intent, not coordinates. When software changes, they adapt automatically, re-certify themselves, and keep running. Welcome to the future.",
    bullets: [
      "Semantic AI, not fragile pixel-matching",
      "Instant adaptation when UIs change",
      "Auto re-certification after every heal",
      "95% of changes handled without human help",
    ],
  },
  {
    id: "observability",
    title: "Mission Control",
    subtitle: "Enterprise Command Center",
    description:
      "Real-time dashboards show every agent, every execution, every decision. Set guardrails. Route alerts. Require approvals. Connect to your existing monitoring tools. Total control.",
    bullets: [
      "Live feeds of all agent activity",
      "Custom guardrails and approval workflows",
      "Smart alerting by severity and type",
      "Native integrations with Datadog, Splunk, New Relic",
    ],
  },
  {
    id: "software-layer",
    title: "10x Speed Breakthrough",
    subtitle: "The Performance Revolution",
    description:
      "We generate a software layer that gives agents superhuman speed. 2-second responses instead of 45-second reasoning. No screen scraping. No fragile scripts. Just pure, deterministic speed at scale.",
    bullets: [
      "2-second execution vs 45-second AI reasoning",
      "Zero LLM calls in production workflows",
      "Works with any software—UI, API, or database",
      "Scales to thousands of parallel agents",
    ],
  },
] as const;

export const JOURNEY_STAGES = [
  {
    number: "01",
    title: "Teach Once",
    description:
      "Show us how you work. Demonstrate your workflow or describe it in plain language. Our AI observes, captures every decision, and asks the right questions to understand your expertise perfectly.",
    icon: "teach",
  },
  {
    number: "02",
    title: "AI Transforms",
    description:
      "Watch your knowledge become executable intelligence. The system converts your demonstration into deterministic, production-ready automation—complete with guards, assertions, and edge case handling.",
    icon: "convert",
  },
  {
    number: "03",
    title: "Certify & Deploy",
    description:
      "No agent goes live untested. Our certification pipeline runs hundreds of scenarios. Only agents that meet your reliability threshold earn their place in your automated workforce.",
    icon: "certify",
  },
  {
    number: "04",
    title: "Run Forever",
    description:
      "Your agents work 24/7 with real-time monitoring and automatic self-healing. When software changes, they adapt. When judgment is needed, they escalate. Everything else? Automated.",
    icon: "monitor",
  },
] as const;

export const USE_CASES = [
  {
    id: "hotel",
    label: "Hotel Operations",
    scenario: "How many arrivals and departures today?",
    before: {
      steps: [
        "Open property management system",
        "Navigate to arrivals screen",
        "Count entries manually",
        "Switch to departures screen",
        "Count entries manually",
        "Write down totals on paper",
      ],
      time: "5\u201310 minutes",
      errors: "Frequent miscounts during busy periods",
      cost: "~$8.50 per query at $50/hr",
    },
    after: {
      steps: [
        'Ask: "How many arrivals and departures today?"',
        "Instant response: 23 arrivals, 18 departures",
      ],
      time: "2 seconds",
      errors: "Zero\u2014data pulled directly from system",
      cost: "$0.02 per query",
    },
    metrics: {
      timeSaved: "99.6%",
      costReduction: "425x",
      monthlyImpact: "$4,200",
    },
    additionalWorkflows: [
      "Reservation modifications",
      "Guest communication sync",
      "Rate management updates",
      "Housekeeping coordination",
    ],
  },
  {
    id: "sales",
    label: "Sales Automation",
    scenario: "Update CRM after client call",
    before: {
      steps: [
        "Open Salesforce / HubSpot",
        "Search for deal record",
        "Update deal stage and fields",
        "Log call activity with notes",
        "Set follow-up reminder",
        "Send confirmation email",
      ],
      time: "5\u201310 minutes",
      errors: "40% of calls never logged",
      cost: "~$8.50 per update at $50/hr",
    },
    after: {
      steps: [
        '"Update CRM: Discovery call with Acme Corp, strong interest, sending proposal Friday"',
        "Agent parses, finds deal, updates fields, logs activity, sets reminder",
      ],
      time: "10 seconds",
      errors: "100% log rate, zero missed follow-ups",
      cost: "$0.05 per update",
    },
    metrics: {
      timeSaved: "98%",
      costReduction: "170x",
      monthlyImpact: "$8,500",
    },
    additionalWorkflows: [
      "Lead scoring and qualification",
      "Pipeline reporting",
      "Follow-up sequence automation",
      "Meeting prep briefings",
    ],
  },
  {
    id: "operations",
    label: "Operations",
    scenario: "Process incoming invoice",
    before: {
      steps: [
        "Receive invoice via email",
        "Extract data manually",
        "Validate against purchase order",
        "Route for appropriate approval",
        "Enter into accounting system",
        "Schedule payment",
      ],
      time: "15\u201325 minutes",
      errors: "5\u20138% error rate in data entry",
      cost: "~$16.50 per invoice at $50/hr",
    },
    after: {
      steps: [
        "Agent extracts, validates, routes automatically",
        "Human approves exceptions only (~5% of invoices)",
      ],
      time: "45 seconds + approval time",
      errors: "99.2% accuracy on extraction",
      cost: "$0.15 per invoice",
    },
    metrics: {
      timeSaved: "96%",
      costReduction: "110x",
      monthlyImpact: "$12,000",
    },
    additionalWorkflows: [
      "Cross-system data sync",
      "Compliance reporting",
      "Vendor management",
      "Expense reconciliation",
    ],
  },
] as const;
