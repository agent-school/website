"use client";

import { MockUIProvider, useMockUI } from "@/components/mocks/_framework/MockUIContext";
import { MockUIShell } from "@/components/mocks/_framework/MockUIShell";
import { AgentInterface } from "@/components/mocks/_framework/AgentInterface";
import { Dashboard } from "./Dashboard";
import { initialHotelData } from "./data";
import { handleHotelQuery } from "./queries";
import { type HotelData } from "./types";

function HotelPMSContent() {
  const { state, sendQuery } = useMockUI<HotelData>();

  return (
    <MockUIShell
      title="Grand Plaza Hotel PMS"
      sidebar={
        <AgentInterface
          messages={state.responses}
          onSendQuery={sendQuery}
          isLoading={state.isLoading}
          placeholder="Ask about arrivals, rooms, occupancy..."
          suggestedQueries={[
            "How many arrivals today?",
            "Show me available rooms",
            "What's our occupancy rate?",
            "Show room 305",
          ]}
          title="Hotel Assistant"
          subtitle="Ask questions about reservations, rooms, and guests"
        />
      }
    >
      <Dashboard />
    </MockUIShell>
  );
}

export function HotelPMSDemo() {
  return (
    <MockUIProvider<HotelData>
      initialData={initialHotelData}
      queryHandler={handleHotelQuery}
    >
      <HotelPMSContent />
    </MockUIProvider>
  );
}
