"use client";

import { useMockUI } from "@/components/mocks/_framework/MockUIContext";
import { InteractiveElement } from "@/components/mocks/_framework/InteractiveElement";
import { type GranolaData, type Speaker, type TranscriptSegment } from "./types";

const SPEAKER_COLORS = {
  teal: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  orange: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

export function TranscriptView() {
  const { state } = useMockUI<GranolaData>();
  const { data, selectedElements } = state;

  const getSpeaker = (speakerId: string): Speaker => {
    return data.speakers.find((s) => s.id === speakerId) || data.speakers[0];
  };

  const showSummaryPanel = selectedElements.includes("summary-panel");
  const showActionItems = selectedElements.includes("action-items");
  const showDecisions = selectedElements.includes("decisions");

  return (
    <div className="flex h-full bg-white dark:bg-slate-900">
      {/* Transcript Panel */}
      <div className="flex-1 overflow-y-auto border-r border-slate-200 dark:border-slate-700">
        <div className="p-6 space-y-4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
              Product Launch Planning Meeting
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              March 8, 2026 • 5 minutes
            </p>
          </div>

          {data.transcript.map((segment: TranscriptSegment) => {
            const speaker = getSpeaker(segment.speakerId);
            const isHighlighted = selectedElements.includes(segment.id);
            const colorClass = SPEAKER_COLORS[speaker.color as keyof typeof SPEAKER_COLORS];

            return (
              <InteractiveElement
                key={segment.id}
                id={segment.id}
                highlight={isHighlighted}
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-14 text-xs text-slate-400 dark:text-slate-500 pt-1">
                    {segment.timestamp}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${colorClass}`}>
                        {speaker.name}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {segment.text}
                    </p>
                  </div>
                </div>
              </InteractiveElement>
            );
          })}
        </div>
      </div>

      {/* Summary Panel */}
      {(showSummaryPanel || showActionItems || showDecisions) && (
        <div className="w-96 overflow-y-auto bg-slate-50 dark:bg-slate-800 p-6 space-y-6">
          {showSummaryPanel && (
            <InteractiveElement id="summary-panel" highlight={true}>
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  AI Summary
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {data.summary.overview}
                </p>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Key Points
                  </h4>
                  <ul className="space-y-2">
                    {data.summary.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-teal-500 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </InteractiveElement>
          )}

          {showActionItems && (
            <InteractiveElement id="action-items" highlight={true}>
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Action Items
                </h3>
                <ul className="space-y-3">
                  {data.actionItems.map((item) => (
                    <li key={item.id} className="border-l-2 border-orange-500 pl-3">
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-1">
                        {item.text}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-medium">{item.owner}</span>
                        {item.dueDate && (
                          <>
                            <span>•</span>
                            <span>{item.dueDate}</span>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </InteractiveElement>
          )}

          {showDecisions && (
            <InteractiveElement id="decisions" highlight={true}>
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Key Decisions
                </h3>
                <ul className="space-y-3">
                  {data.decisions.map((decision) => (
                    <li key={decision.id} className="border-l-2 border-purple-500 pl-3">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        {decision.text}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {decision.context}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </InteractiveElement>
          )}
        </div>
      )}
    </div>
  );
}
