export const NAV_ITEMS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#journey" },
  { label: "Compare", href: "/#differentiation" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Blog", href: "/blog" },
  { label: "Writing", href: "/writing" },
] as const;

export const BOOKING_URL = "https://cal.com/jackagentschool/30min";
export const LINKEDIN_URL = "https://linkedin.com/company/agentschool";
export const TWITTER_URL = "https://x.com/agentschool_io";

export const FEATURES = [
  {
    id: "skill-builder",
    title: "Show Us Once, It Runs Forever",
    subtitle: "Run Any Task on Autopilot",
    description:
      "Walk us through a task once, in plain English or by showing us. We build an AI that executes it exactly your way, every time.",
    bullets: [
      "No code, no setup on your end",
      "Works for any repeatable task",
      "Handles exceptions automatically",
    ],
  },
  {
    id: "certification",
    title: "Tested Before It Touches Your Business",
    subtitle: "Nothing Goes Live Until It's Proven",
    description:
      "Every automation runs through hundreds of test scenarios before you ever see it. If it doesn't pass, it doesn't ship.",
    bullets: [
      "Hundreds of real-scenario tests",
      "You see the results before go-live",
      "You set the standard. We meet it.",
    ],
  },
  {
    id: "script-viewer",
    title: "You Always Know What's Happening",
    subtitle: "No Mystery, No Black Box",
    description:
      "Every step your automation takes is logged and visible. See exactly what ran, when, and why, whenever you want.",
    bullets: [
      "Full step-by-step activity log",
      "Pause or adjust at any time",
      "You stay in control",
    ],
  },
  {
    id: "self-healing",
    title: "Updates Itself When Your Software Changes",
    subtitle: "It Doesn't Break When Things Change",
    description:
      "When your tools update or a screen changes, the automation adjusts itself and keeps running. No maintenance calls to you.",
    bullets: [
      "Adapts to software updates automatically",
      "No downtime when layouts change",
      "Near-zero human input required",
    ],
  },
  {
    id: "observability",
    title: "One Dashboard for Everything",
    subtitle: "Your Automation Command Center",
    description:
      "See every automation running in your business at a glance. Get alerted when something needs a human. Everything else runs itself.",
    bullets: [
      "Live status across all automations",
      "Alerts only when action is needed",
      "Set rules for approvals and escalations",
    ],
  },
  {
    id: "software-layer",
    title: "Runs Fast, Not Like a Chatbot",
    subtitle: "Quick as a Keyboard Shortcut",
    description:
      "Our automations execute in seconds, not minutes. They run in the background while your team stays focused on real work.",
    bullets: [
      "Seconds to complete what used to take minutes",
      "Runs quietly in the background",
      "Scales as your business grows",
    ],
  },
] as const;

export const JOURNEY_STAGES = [
  {
    number: "01",
    title: "You Tell Us What's Eating Your Time",
    description:
      "We start with a free call where you tell us about the tasks your team does over and over. You don't need to prepare anything, just talk us through a normal week.",
    icon: "teach",
  },
  {
    number: "02",
    title: "We Build the Automation for You",
    description:
      "Our team takes what we learned and builds a custom AI automation. We do all the technical work. You stay focused on your business. We come back to you when it's ready to review.",
    icon: "convert",
  },
  {
    number: "03",
    title: "We Test It Until We're Confident It Works",
    description:
      "Before anything touches your real business, we run it through hundreds of test scenarios. We show you the results, walk you through exactly what it does, and only go live when you're comfortable.",
    icon: "certify",
  },
  {
    number: "04",
    title: "It Runs. You Don't Think About It Again.",
    description:
      "Once live, it handles the work 24/7. If your software ever changes, it adapts. If something genuinely needs a human, it flags you. Everything else? Done automatically.",
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
      time: "3–5 minutes",
      errors: "Frequent miscounts during busy periods",
      cost: "~$4.17 per query at $50/hr",
    },
    after: {
      steps: [
        'Ask: "How many arrivals and departures today?"',
        "Instant response: 23 arrivals, 18 departures",
      ],
      time: "5 seconds",
      errors: "Zero. Data pulled directly from system.",
      cost: "$0.05 per query",
    },
    metrics: {
      timeSaved: "93%",
      costReduction: "83x",
      monthlyImpact: "$2,100",
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
      time: "5–10 minutes",
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
      timeSaved: "91%",
      costReduction: "50x",
      monthlyImpact: "$3,800",
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
      time: "15–25 minutes",
      errors: "5–8% error rate in data entry",
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
      timeSaved: "88%",
      costReduction: "52x",
      monthlyImpact: "$5,200",
    },
    additionalWorkflows: [
      "Cross-system data sync",
      "Compliance reporting",
      "Vendor management",
      "Expense reconciliation",
    ],
  },
] as const;
