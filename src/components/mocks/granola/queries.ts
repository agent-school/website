import { type QueryHandler } from "@/types/mock-ui";
import { type GranolaData } from "./types";

export const handleGranolaQuery: QueryHandler<GranolaData> = async (query, state) => {
  const lowerQuery = query.toLowerCase();

  // Summarize meeting
  if (
    lowerQuery.includes("summarize") ||
    lowerQuery.includes("summary") ||
    lowerQuery.includes("overview")
  ) {
    return {
      response: `I've generated a comprehensive summary of the product launch planning meeting. The team finalized the April 15th launch date, locked in a $180K budget, and assigned key deliverables. Key highlights include infrastructure allocation, pre-launch email sequence, and a full dry run scheduled for April 10th.`,
      highlight: ["summary-panel"],
    };
  }

  // Action items
  if (
    lowerQuery.includes("action item") ||
    lowerQuery.includes("to do") ||
    lowerQuery.includes("todo") ||
    lowerQuery.includes("task")
  ) {
    return {
      response: `Found 7 action items from the meeting. Key tasks include: Marcus sending budget breakdown by Friday, providing demo script by March 30th, creating pre-launch email sequence by March 20th, and Aisha preparing the live demo with backup footage. Sarah will schedule the April 10th dry run.`,
      highlight: ["action-items"],
    };
  }

  // Key decisions
  if (
    lowerQuery.includes("decision") ||
    lowerQuery.includes("decided") ||
    lowerQuery.includes("agree")
  ) {
    return {
      response: `The team made 5 key decisions: (1) Launch date set for April 15th at 10 AM Pacific, (2) Budget locked at $180K with specific allocations, (3) Virtual keynote format with 12-minute scripted demo, (4) Pre-launch email sequence to reduce support tickets, and (5) Full team dry run on April 10th at 2 PM.`,
      highlight: ["decisions"],
    };
  }

  // Budget-related queries
  if (lowerQuery.includes("budget") || lowerQuery.includes("cost") || lowerQuery.includes("spend")) {
    const budgetSegments = state.data.transcript.filter((s) => s.topic === "budget");
    return {
      response: `The budget discussion covered the $180K total allocation: $95K for marketing/ads, $30K for event sponsorships, $25K for influencer partnerships, $10K for server infrastructure (to handle 5x traffic), and $20K contingency buffer. Marcus will send the detailed breakdown by Friday.`,
      highlight: budgetSegments.map((s) => s.id),
    };
  }

  // Timeline-related queries
  if (
    lowerQuery.includes("timeline") ||
    lowerQuery.includes("schedule") ||
    lowerQuery.includes("when") ||
    lowerQuery.includes("date")
  ) {
    const timelineSegments = state.data.transcript.filter((s) => s.topic === "timeline");
    return {
      response: `The launch is scheduled for April 15th at 10 AM Pacific. Engineering will complete beta testing by end of March, providing a 2-week buffer for critical bugs. Key milestones: Demo script due March 30th, email sequence drafts due March 20th, and full dry run on April 10th at 2 PM.`,
      highlight: timelineSegments.map((s) => s.id),
    };
  }

  // Speaker search - Sarah
  if (
    lowerQuery.includes("sarah") ||
    (lowerQuery.includes("who") && lowerQuery.includes("lead"))
  ) {
    const sarahSegments = state.data.transcript.filter((s) => s.speakerId === "s1");
    return {
      response: `Sarah Chen led the meeting and is responsible for: scheduling the April 10th dry run, coordinating overall launch logistics, and ensuring budget allocations are finalized. She opened the meeting, facilitated discussions, and confirmed key decisions.`,
      highlight: sarahSegments.map((s) => s.id),
    };
  }

  // Speaker search - Marcus
  if (lowerQuery.includes("marcus") || (lowerQuery.includes("marketing"))) {
    const marcusSegments = state.data.transcript.filter((s) => s.speakerId === "s2");
    return {
      response: `Marcus Rodriguez is leading go-to-market strategy and owns several action items: sending budget breakdown by Friday, providing demo script by March 30th, creating pre-launch email sequence by March 20th, and ensuring the marketing site is ready for the April 10th dry run.`,
      highlight: marcusSegments.map((s) => s.id),
    };
  }

  // Speaker search - Aisha
  if (lowerQuery.includes("aisha") || lowerQuery.includes("engineering")) {
    const aishaSegments = state.data.transcript.filter((s) => s.speakerId === "s3");
    return {
      response: `Aisha Patel is handling the engineering side. She confirmed beta testing completion by end of March, is preparing the 12-minute live demo with backup footage, allocated $10K for server infrastructure, and brought on two contract support specialists to handle launch volume.`,
      highlight: aishaSegments.map((s) => s.id),
    };
  }

  // Risks discussion
  if (lowerQuery.includes("risk") || lowerQuery.includes("concern") || lowerQuery.includes("worry")) {
    const riskSegments = state.data.transcript.filter((s) => s.topic === "risks");
    return {
      response: `The team identified two main risks: (1) Server capacity during 5x traffic surge - mitigated with $10K infrastructure allocation, and (2) High support ticket volume - addressed with two new contract specialists, comprehensive FAQ, and pre-launch email sequence expected to reduce volume by 20-30%.`,
      highlight: riskSegments.map((s) => s.id),
    };
  }

  // Responsibilities
  if (
    lowerQuery.includes("responsible") ||
    lowerQuery.includes("owner") ||
    lowerQuery.includes("who is")
  ) {
    const responsibilitySegments = state.data.transcript.filter((s) => s.topic === "responsibilities");
    return {
      response: `Responsibilities are divided: Marcus handles marketing strategy, content, and email sequences. Aisha manages engineering, live demo, and infrastructure. Sarah coordinates overall logistics and scheduling. The team will reconvene in two weeks to check progress.`,
      highlight: responsibilitySegments.map((s) => s.id),
    };
  }

  // Generate notes
  if (
    lowerQuery.includes("note") ||
    lowerQuery.includes("generate") ||
    lowerQuery.includes("export")
  ) {
    return {
      response: `I've compiled comprehensive meeting notes including the AI summary, all 7 action items with owners and due dates, and 5 key decisions. The notes are formatted and ready for distribution. Would you like me to highlight any specific section?`,
      highlight: ["summary-panel", "action-items", "decisions"],
    };
  }

  // Demo search
  if (lowerQuery.includes("demo") || lowerQuery.includes("presentation")) {
    const demoSegments = state.data.transcript.filter((s) => 
      s.text.toLowerCase().includes("demo") || s.text.toLowerCase().includes("presentation")
    );
    return {
      response: `The team is planning a 12-minute scripted live demo for the April 15th keynote. Aisha's team will prepare backup footage in case of technical issues. Marcus will provide the final script by March 30th, and the full dry run is scheduled for April 10th at 2 PM.`,
      highlight: demoSegments.map((s) => s.id),
    };
  }

  // Support/customer service
  if (lowerQuery.includes("support") || lowerQuery.includes("customer")) {
    const supportSegments = state.data.transcript.filter((s) => 
      s.text.toLowerCase().includes("support") || s.text.toLowerCase().includes("ticket")
    );
    return {
      response: `Customer support preparation includes: 2 new contract support specialists hired, comprehensive FAQ and troubleshooting guide in development, and pre-launch email sequence to reduce ticket volume by 20-30%. The last launch generated 300 tickets in the first week.`,
      highlight: supportSegments.map((s) => s.id),
    };
  }

  // Default fallback
  return {
    response: `I can help you analyze this meeting transcript. Try asking me to:\n• "Summarize the meeting"\n• "What are the action items?"\n• "Show me budget discussions"\n• "What did Marcus say?"\n• "What are the key decisions?"\n• "Generate meeting notes"`,
    highlight: [],
  };
};
