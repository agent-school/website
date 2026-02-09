"use client";

import { MockUIProvider, useMockUI } from "@/components/mocks/_framework/MockUIContext";
import { MockUIShell } from "@/components/mocks/_framework/MockUIShell";
import { AgentInterface } from "@/components/mocks/_framework/AgentInterface";
import { Pipeline } from "./Pipeline";
import { handleCRMQuery } from "./queries";
import { type CRMState } from "./types";

const INITIAL_CRM_STATE: CRMState = {
  highlightedStage: null,
  highlightedDeals: [],
  filterValue: null,
  movingDeal: null
};

const SUGGESTED_QUERIES = [
  "Show me proposal deals",
  "What's the total pipeline value?",
  "Show deals over $100k",
  "What's in negotiation?",
  "Show me won deals"
];

function CRMDemoContent() {
  const { state, sendQuery } = useMockUI<CRMState>();

  return (
    <div className="flex h-[700px] gap-4">
      {/* Main Pipeline View */}
      <MockUIShell
        title="Sales CRM - Pipeline"
        className="flex-1"
      >
        <Pipeline />
      </MockUIShell>

      {/* Agent Interface Sidebar */}
      <AgentInterface
        messages={state.responses}
        onSendQuery={sendQuery}
        isLoading={state.isLoading}
        placeholder="Ask about deals, stages, or pipeline..."
        suggestedQueries={SUGGESTED_QUERIES}
        title="CRM Agent"
        subtitle="Query your sales pipeline"
      />
    </div>
  );
}

export function CRMDemo() {
  return (
    <MockUIProvider
      initialData={INITIAL_CRM_STATE}
      queryHandler={handleCRMQuery}
    >
      <CRMDemoContent />
    </MockUIProvider>
  );
}
