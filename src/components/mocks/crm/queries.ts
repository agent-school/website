import { type QueryResult } from "@/types/agent";
import { type CRMState, type DealStage } from "./types";
import { MOCK_DEALS, STAGE_LABELS } from "./data";

export async function handleCRMQuery(query: string): Promise<QueryResult> {
  const input = query.toLowerCase();

  // Stage-based filtering
  if (input.includes("proposal") || input.includes("proposal stage")) {
    const proposalDeals = MOCK_DEALS.filter(d => d.stage === "proposal");
    const totalValue = proposalDeals.reduce((sum, d) => sum + d.value, 0);
    
    return {
      response: `Found ${proposalDeals.length} deals in Proposal stage with total value of $${(totalValue / 1000).toFixed(0)}K. Highlighting the Proposal column.`,
      highlight: proposalDeals.map(d => d.id),
      dataUpdate: {
        highlightedStage: "proposal",
        highlightedDeals: proposalDeals.map(d => d.id),
        filterValue: null,
        movingDeal: null
      }
    };
  }

  if (input.includes("won") || input.includes("closed")) {
    const wonDeals = MOCK_DEALS.filter(d => d.stage === "won");
    const totalValue = wonDeals.reduce((sum, d) => sum + d.value, 0);
    
    return {
      response: `${wonDeals.length} deals have been won with total value of $${(totalValue / 1000).toFixed(0)}K. These are your closed deals.`,
      highlight: wonDeals.map(d => d.id),
      dataUpdate: {
        highlightedStage: "won",
        highlightedDeals: wonDeals.map(d => d.id),
        filterValue: null,
        movingDeal: null
      }
    };
  }

  if (input.includes("qualified")) {
    const qualifiedDeals = MOCK_DEALS.filter(d => d.stage === "qualified");
    const totalValue = qualifiedDeals.reduce((sum, d) => sum + d.value, 0);
    
    return {
      response: `${qualifiedDeals.length} qualified deals worth $${(totalValue / 1000).toFixed(0)}K are ready for proposals.`,
      highlight: qualifiedDeals.map(d => d.id),
      dataUpdate: {
        highlightedStage: "qualified",
        highlightedDeals: qualifiedDeals.map(d => d.id),
        filterValue: null,
        movingDeal: null
      }
    };
  }

  if (input.includes("lead") || input.includes("new")) {
    const leadDeals = MOCK_DEALS.filter(d => d.stage === "lead");
    const totalValue = leadDeals.reduce((sum, d) => sum + d.value, 0);
    
    return {
      response: `${leadDeals.length} new leads with potential value of $${(totalValue / 1000).toFixed(0)}K need qualification.`,
      highlight: leadDeals.map(d => d.id),
      dataUpdate: {
        highlightedStage: "lead",
        highlightedDeals: leadDeals.map(d => d.id),
        filterValue: null,
        movingDeal: null
      }
    };
  }

  if (input.includes("negotiation") || input.includes("negotiating")) {
    const negotiationDeals = MOCK_DEALS.filter(d => d.stage === "negotiation");
    const totalValue = negotiationDeals.reduce((sum, d) => sum + d.value, 0);
    
    return {
      response: `${negotiationDeals.length} deals are currently in negotiation, worth $${(totalValue / 1000).toFixed(0)}K. These are your hottest opportunities.`,
      highlight: negotiationDeals.map(d => d.id),
      dataUpdate: {
        highlightedStage: "negotiation",
        highlightedDeals: negotiationDeals.map(d => d.id),
        filterValue: null,
        movingDeal: null
      }
    };
  }

  // Value-based filtering
  if (input.includes("over") || input.includes("above") || input.includes(">")) {
    const match = input.match(/(\d+)k?/i);
    if (match) {
      const threshold = parseInt(match[1]) * (input.includes("k") || parseInt(match[1]) < 1000 ? 1000 : 1);
      const filteredDeals = MOCK_DEALS.filter(d => d.value > threshold);
      const totalValue = filteredDeals.reduce((sum, d) => sum + d.value, 0);
      
      return {
        response: `Found ${filteredDeals.length} deals over $${(threshold / 1000).toFixed(0)}K with total value of $${(totalValue / 1000).toFixed(0)}K.`,
        highlight: filteredDeals.map(d => d.id),
        dataUpdate: {
          highlightedStage: null,
          highlightedDeals: filteredDeals.map(d => d.id),
          filterValue: threshold,
          movingDeal: null
        }
      };
    }
  }

  if (input.includes("under") || input.includes("below") || input.includes("<")) {
    const match = input.match(/(\d+)k?/i);
    if (match) {
      const threshold = parseInt(match[1]) * (input.includes("k") || parseInt(match[1]) < 1000 ? 1000 : 1);
      const filteredDeals = MOCK_DEALS.filter(d => d.value < threshold);
      const totalValue = filteredDeals.reduce((sum, d) => sum + d.value, 0);
      
      return {
        response: `Found ${filteredDeals.length} deals under $${(threshold / 1000).toFixed(0)}K with total value of $${(totalValue / 1000).toFixed(0)}K.`,
        highlight: filteredDeals.map(d => d.id),
        dataUpdate: {
          highlightedStage: null,
          highlightedDeals: filteredDeals.map(d => d.id),
          filterValue: threshold,
          movingDeal: null
        }
      };
    }
  }

  // Pipeline calculations
  if (input.includes("total") && (input.includes("value") || input.includes("pipeline"))) {
    const totalValue = MOCK_DEALS.reduce((sum, d) => sum + d.value, 0);
    const avgValue = totalValue / MOCK_DEALS.length;
    
    return {
      response: `Total pipeline value is $${(totalValue / 1000).toFixed(0)}K across ${MOCK_DEALS.length} deals. Average deal size is $${(avgValue / 1000).toFixed(0)}K.`,
      highlight: MOCK_DEALS.map(d => d.id),
      dataUpdate: {
        highlightedStage: null,
        highlightedDeals: MOCK_DEALS.map(d => d.id),
        filterValue: null,
        movingDeal: null
      }
    };
  }

  if (input.includes("average") || input.includes("avg")) {
    const totalValue = MOCK_DEALS.reduce((sum, d) => sum + d.value, 0);
    const avgValue = totalValue / MOCK_DEALS.length;
    
    return {
      response: `Average deal size is $${(avgValue / 1000).toFixed(0)}K. Total pipeline has ${MOCK_DEALS.length} deals worth $${(totalValue / 1000).toFixed(0)}K.`,
      dataUpdate: {
        highlightedStage: null,
        highlightedDeals: [],
        filterValue: null,
        movingDeal: null
      }
    };
  }

  // Company search
  const companyMatch = MOCK_DEALS.find(d => 
    input.includes(d.company.toLowerCase())
  );
  
  if (companyMatch) {
    return {
      response: `Found ${companyMatch.company} in ${STAGE_LABELS[companyMatch.stage]} stage. Deal value: $${(companyMatch.value / 1000).toFixed(0)}K, Contact: ${companyMatch.contact}.`,
      highlight: [companyMatch.id],
      dataUpdate: {
        highlightedStage: companyMatch.stage,
        highlightedDeals: [companyMatch.id],
        filterValue: null,
        movingDeal: null
      }
    };
  }

  // Move simulation
  if (input.includes("move") && input.includes("to")) {
    const toStageMatch = input.match(/to\s+(lead|qualified|proposal|negotiation|won)/i);
    if (toStageMatch) {
      const toStage = toStageMatch[1].toLowerCase() as DealStage;
      const sampleDeal = MOCK_DEALS.find(d => d.stage !== toStage);
      
      if (sampleDeal) {
        return {
          response: `Moving ${sampleDeal.company} from ${STAGE_LABELS[sampleDeal.stage]} to ${STAGE_LABELS[toStage]}. Deal value: $${(sampleDeal.value / 1000).toFixed(0)}K.`,
          highlight: [sampleDeal.id],
          dataUpdate: {
            highlightedStage: toStage,
            highlightedDeals: [sampleDeal.id],
            filterValue: null,
            movingDeal: {
              dealId: sampleDeal.id,
              fromStage: sampleDeal.stage,
              toStage: toStage
            }
          }
        };
      }
    }
  }

  // High priority
  if (input.includes("high") && input.includes("priority")) {
    const highPriorityDeals = MOCK_DEALS.filter(d => d.priority === "high");
    const totalValue = highPriorityDeals.reduce((sum, d) => sum + d.value, 0);
    
    return {
      response: `${highPriorityDeals.length} high-priority deals worth $${(totalValue / 1000).toFixed(0)}K need attention.`,
      highlight: highPriorityDeals.map(d => d.id),
      dataUpdate: {
        highlightedStage: null,
        highlightedDeals: highPriorityDeals.map(d => d.id),
        filterValue: null,
        movingDeal: null
      }
    };
  }

  // Default response
  return {
    response: "I can help you explore your sales pipeline. Try asking about deals in specific stages, filtering by value, or viewing pipeline totals."
  };
}
