import { type Deal, type DealStage } from "./types";

const companies = [
  "Acme Corp", "Globex Industries", "Initech", "Umbrella Corp", "Stark Industries",
  "Wayne Enterprises", "Hooli", "Pied Piper", "Massive Dynamic", "Cyberdyne Systems",
  "Weyland-Yutani", "Tyrell Corporation", "Soylent Corp", "Oscorp", "LexCorp",
  "Blue Sun Corporation", "Virtucon", "InGen", "Wonka Industries", "Aperture Science",
  "Veridian Dynamics", "Prestige Worldwide", "Dunder Mifflin", "Sterling Cooper",
  "Bluth Company", "Northwind Traders", "Contoso Ltd", "Fabrikam Inc", "Adventure Works"
];

const contacts = [
  "Sarah Mitchell", "David Chen", "Emily Rodriguez", "Michael Park", "Jessica Williams",
  "Robert Taylor", "Amanda Garcia", "James Anderson", "Maria Santos", "Christopher Lee",
  "Jennifer Brown", "Daniel Kim", "Lisa Thompson", "Kevin Martinez", "Rachel Cohen",
  "Brian Foster", "Nicole Patel", "Andrew Wilson", "Samantha Davis", "Thomas Wright",
  "Lauren Murphy", "Joshua Rivera", "Ashley Cooper", "Matthew Hayes", "Stephanie Cruz",
  "Ryan Brooks", "Michelle Evans", "Justin Powell", "Olivia Bennett", "Nathan Hughes"
];

const stages: DealStage[] = ["lead", "qualified", "proposal", "negotiation", "won"];

const stageDistribution = {
  lead: 10,
  qualified: 8,
  proposal: 6,
  negotiation: 4,
  won: 5
};

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomValue(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getExpectedCloseDate(stage: DealStage): string {
  const today = new Date();
  let daysToAdd: number;

  switch (stage) {
    case "lead":
      daysToAdd = getRandomValue(60, 120);
      break;
    case "qualified":
      daysToAdd = getRandomValue(45, 90);
      break;
    case "proposal":
      daysToAdd = getRandomValue(30, 60);
      break;
    case "negotiation":
      daysToAdd = getRandomValue(14, 30);
      break;
    case "won":
      daysToAdd = getRandomValue(-30, 0);
      break;
  }

  const closeDate = new Date(today);
  closeDate.setDate(closeDate.getDate() + daysToAdd);
  return closeDate.toISOString().split("T")[0];
}

function generateDeals(): Deal[] {
  const deals: Deal[] = [];
  let dealId = 1;
  const usedCompanies = new Set<string>();

  for (const [stage, count] of Object.entries(stageDistribution)) {
    for (let i = 0; i < count; i++) {
      const availableCompanies = companies.filter((companyName) => !usedCompanies.has(companyName));
      const company = availableCompanies.length > 0
        ? getRandomElement(availableCompanies)
        : getRandomElement(companies);

      // Keep names unique until the source pool is exhausted.
      if (availableCompanies.length > 0) {
        usedCompanies.add(company);
      }

      const value = getRandomValue(10000, 500000);
      const priority = value > 200000 ? "high" : value > 100000 ? "medium" : "low";

      deals.push({
        id: `deal-${dealId++}`,
        company,
        contact: getRandomElement(contacts),
        value,
        stage: stage as DealStage,
        expectedCloseDate: getExpectedCloseDate(stage as DealStage),
        priority
      });
    }
  }

  return deals;
}

export const MOCK_DEALS = generateDeals();

export const STAGE_LABELS: Record<DealStage, string> = {
  lead: "Lead",
  qualified: "Qualified",
  proposal: "Proposal",
  negotiation: "Negotiation",
  won: "Won"
};

export const STAGE_COLORS: Record<DealStage, { bg: string; border: string; text: string }> = {
  lead: {
    bg: "bg-slate-100 dark:bg-slate-800",
    border: "border-slate-300 dark:border-slate-600",
    text: "text-slate-700 dark:text-slate-300"
  },
  qualified: {
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
    text: "text-teal-700 dark:text-teal-300"
  },
  proposal: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700",
    text: "text-blue-700 dark:text-blue-300"
  },
  negotiation: {
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-700",
    text: "text-orange-700 dark:text-orange-300"
  },
  won: {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-700",
    text: "text-emerald-700 dark:text-emerald-300"
  }
};
