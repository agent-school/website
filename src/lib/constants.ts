export const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#journey" },
  { label: "Compare", href: "#differentiation" },
  { label: "Use Cases", href: "#use-cases" },
] as const;

export const BOOKING_URL = "https://cal.com/jackagentschool/15min";

export const FEATURES = [
  {
    id: "skill-builder",
    title: "Skill Builder",
    subtitle: "From Recording to Certified Skills",
    description:
      "Create agent workflows through demonstration or natural language. Non-technical users see step-by-step SOPs. Technical users toggle into the code. The AI asks clarifying questions to handle edge cases and branching logic.",
    bullets: [
      "Record your workflow or describe it in plain English",
      "AI generates deterministic operation nodes automatically",
      "Toggle between SOP view and developer code view",
      "Decision points and edge cases built into every skill",
    ],
  },
  {
    id: "certification",
    title: "Skill Certification",
    subtitle: "Ensuring Reliability at Scale",
    description:
      "Every workflow enters a certification pipeline before production. A teacher agent writes comprehensive tests. The student agent must pass at your required threshold\u200490%, 95%, 97%, or 99%.",
    bullets: [
      "Teacher agent defines test conditions from your SOP",
      "Student agent executes in a sandbox environment",
      "Detailed pass/fail reports with failure analysis",
      "Configurable reliability thresholds per workflow",
    ],
  },
  {
    id: "script-viewer",
    title: "Deterministic Script Viewer",
    subtitle: "Full Transparency Into Execution",
    description:
      "See exactly how every agent skill executes. A split-pane interface shows the recording timeline alongside generated code with assertions and guards. Click any step to inspect execution details.",
    bullets: [
      "Split-pane: timeline on left, code on right",
      "Assertions verify conditions before each step",
      "Guards define fallback behavior on failure",
      "Test individual steps and see visual execution",
    ],
  },
  {
    id: "self-healing",
    title: "Self-Healing Technology",
    subtitle: "Adapts When Software Changes",
    description:
      "When a UI changes, traditional automation breaks instantly. Agent School understands semantic intent\u2014not just coordinates. When elements move or change labels, the system detects, adapts, re-certifies, and logs everything.",
    bullets: [
      "Semantic understanding, not pixel-matching",
      "Automatic adaptation with version control",
      "Re-certification after every self-heal event",
      "95% auto-heal rate for consistent software",
    ],
  },
  {
    id: "observability",
    title: "Observability & Guardrails",
    subtitle: "Enterprise-Grade Monitoring and Safety",
    description:
      "Real-time dashboards, configurable guardrails, approval gates, and alert routing. Every execution is logged with screenshots at decision points. Integrates with your existing monitoring stack.",
    bullets: [
      "Real-time activity feeds and performance metrics",
      "Rate limiting, data validation, approval gates",
      "Alert routing based on severity and type",
      "Integration with Datadog, Splunk, New Relic",
    ],
  },
  {
    id: "software-layer",
    title: "Software Layer Intelligence",
    subtitle: "The 10x Performance Multiplier",
    description:
      "We generate a software layer for legacy apps\u2014an MCP wrapper that lets agents interact with any software as if it exposed modern APIs. This gives agents eyes and hands inside old systems without brittle screen scraping.",
    bullets: [
      "2-second responses vs 45-second agent reasoning",
      "Deterministic replay without LLM calls",
      "Drives UIs, databases, and mainframes",
      "Scales to parallel agents across the organization",
    ],
  },
] as const;

export const JOURNEY_STAGES = [
  {
    number: "01",
    title: "Teach Once",
    description:
      "Demonstrate the workflow manually or describe it in natural language. Agent School observes, captures business logic, and asks clarifying questions to ensure accurate understanding.",
    icon: "teach",
  },
  {
    number: "02",
    title: "AI Converts",
    description:
      "The system transforms your demonstration into deterministic, replayable steps with comprehensive assertions, guards, and edge case handling. Review and refine before certification.",
    icon: "convert",
  },
  {
    number: "03",
    title: "Certify & Deploy",
    description:
      "Teacher agent writes tests. Student agent passes at your required threshold. Certified skills join a searchable library deployable across your organization.",
    icon: "certify",
  },
  {
    number: "04",
    title: "Monitor & Heal",
    description:
      "Real-time observability ensures everything runs smoothly. Self-healing adapts to software changes automatically. Human escalation when judgment is needed.",
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
