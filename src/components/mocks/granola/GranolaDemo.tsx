"use client";

import { MockUIProvider, useMockUI } from "@/components/mocks/_framework/MockUIContext";
import { MockUIShell } from "@/components/mocks/_framework/MockUIShell";
import { AgentInterface } from "@/components/mocks/_framework/AgentInterface";

import { GRANOLA_DATA } from "./data";
import { handleGranolaQuery } from "./queries";
import { TranscriptView } from "./TranscriptView";

const SUGGESTED_QUERIES = [
  "Summarize this meeting",
  "What are the action items?",
  "Show me budget discussions",
  "What did Marcus say?",
  "Generate meeting notes",
];

function GranolaDemoContent() {
  const { state, sendQuery } = useMockUI();

  return (
    <div className="h-[600px]">
      <MockUIShell
        title="Granola - Meeting Transcript Analysis"
        sidebar={
          <AgentInterface
            messages={state.responses}
            onSendQuery={sendQuery}
            isLoading={state.isLoading}
            placeholder="Ask about the meeting..."
            suggestedQueries={SUGGESTED_QUERIES}
            title="Meeting Assistant"
            subtitle="Ask questions about the transcript"
          />
        }
      >
        <TranscriptView />
      </MockUIShell>
    </div>
  );
}

export function GranolaDemo() {
  return (
    <MockUIProvider initialData={GRANOLA_DATA} queryHandler={handleGranolaQuery}>
      <GranolaDemoContent />
    </MockUIProvider>
  );
}
