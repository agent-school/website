"use client";

import { MockUIProvider, useMockUI } from "@/components/mocks/_framework/MockUIContext";
import { MockUIShell } from "@/components/mocks/_framework/MockUIShell";
import { AgentInterface } from "@/components/mocks/_framework/AgentInterface";

import { DMList } from "./DMList";
import { INSTAGRAM_DATA } from "./data";
import { handleInstagramQuery } from "./queries";
import { type InstagramData } from "./types";

const SUGGESTED_QUERIES = [
  "Show me support requests",
  "How many unread messages?",
  "Show sales inquiries",
  "Filter by spam",
  "Show all conversations",
  "Reply to sarah",
];

function InstagramDemoInner() {
  const { state, sendQuery } = useMockUI<InstagramData>();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 h-[700px]">
      {/* Main Instagram UI */}
      <MockUIShell title="Instagram Direct Messages">
        <DMList />
      </MockUIShell>

      {/* Agent Interface */}
      <AgentInterface
        messages={state.responses}
        onSendQuery={sendQuery}
        isLoading={state.isLoading}
        placeholder="Ask about messages..."
        suggestedQueries={SUGGESTED_QUERIES}
      />
    </div>
  );
}

export function InstagramDemo() {
  return (
    <MockUIProvider initialData={INSTAGRAM_DATA} queryHandler={handleInstagramQuery}>
      <InstagramDemoInner />
    </MockUIProvider>
  );
}
