"use client";

import { useMemo } from "react";
import { DollarSign, Calendar, User } from "lucide-react";

import { useMockUI } from "@/components/mocks/_framework/MockUIContext";
import { InteractiveElement } from "@/components/mocks/_framework/InteractiveElement";
import { type Deal, type DealStage, type CRMState } from "./types";
import { MOCK_DEALS, STAGE_LABELS, STAGE_COLORS } from "./data";

const STAGES: DealStage[] = ["lead", "qualified", "proposal", "negotiation", "won"];

export function Pipeline() {
  const { state, dispatch } = useMockUI<CRMState>();
  const crmState = state.data as CRMState;

  const handleDealClick = (dealId: string) => {
    dispatch({
      type: "UPDATE_DATA",
      payload: {
        selectedDeal: crmState.selectedDeal === dealId ? null : dealId
      }
    });
  };

  const dealsByStage = useMemo(() => {
    const grouped: Record<DealStage, Deal[]> = {
      lead: [],
      qualified: [],
      proposal: [],
      negotiation: [],
      won: []
    };

    MOCK_DEALS.forEach(deal => {
      grouped[deal.stage].push(deal);
    });

    return grouped;
  }, []);

  const stageStats = useMemo(() => {
    return STAGES.map(stage => {
      const deals = dealsByStage[stage];
      const total = deals.reduce((sum, d) => sum + d.value, 0);
      return {
        stage,
        count: deals.length,
        total
      };
    });
  }, [dealsByStage]);

  const isStageHighlighted = (stage: DealStage) => {
    return crmState.highlightedStage === stage;
  };

  const isDealHighlighted = (dealId: string) => {
    return crmState.highlightedDeals.includes(dealId);
  };

  const isDealSelected = (dealId: string) => {
    return crmState.selectedDeal === dealId;
  };

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${(value / 1000).toFixed(0)}K`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return (
    <div className="flex gap-4 overflow-x-auto p-6 h-full">
      {STAGES.map(stage => {
        const stats = stageStats.find(s => s.stage === stage)!;
        const colors = STAGE_COLORS[stage];
        const highlighted = isStageHighlighted(stage);

        return (
          <div
            key={stage}
            className={`flex-shrink-0 w-80 flex flex-col ${highlighted ? "ring-2 ring-orange-500 rounded-lg" : ""}`}
          >
            {/* Column Header */}
            <div className={`${colors.bg} ${colors.border} border-b-2 rounded-t-lg p-4`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`font-semibold text-sm ${colors.text} uppercase tracking-wide`}>
                  {STAGE_LABELS[stage]}
                </h3>
                <span className={`${colors.text} text-xs font-mono`}>
                  {stats.count}
                </span>
              </div>
              <div className={`${colors.text} text-xl font-bold font-mono`}>
                {formatCurrency(stats.total)}
              </div>
            </div>

            {/* Deals Column */}
            <div className={`${colors.bg} ${colors.border} border-l border-r border-b rounded-b-lg p-3 flex-1 overflow-y-auto space-y-3 min-h-0`}>
              {dealsByStage[stage].map(deal => {
                const dealHighlighted = isDealHighlighted(deal.id);
                const dealSelected = isDealSelected(deal.id);

                return (
                  <InteractiveElement
                    key={deal.id}
                    id={deal.id}
                    highlight={dealHighlighted}
                    onClick={() => handleDealClick(deal.id)}
                    className={`
                      bg-white rounded-lg border border-slate-200
                      shadow-sm hover:shadow-md transition-all cursor-pointer p-4
                      ${dealHighlighted ? "ring-2 ring-orange-500 shadow-lg" : ""}
                      ${dealSelected ? "ring-2 ring-orange-500 shadow-lg bg-orange-50" : ""}
                      ${deal.priority === "high" ? "border-l-4 border-l-orange-500" : ""}
                    `}
                  >
                    <div className="space-y-2">
                      {/* Company Name */}
                      <h4 className="font-semibold text-sm text-slate-900 leading-tight">
                        {deal.company}
                      </h4>

                      {/* Deal Value */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <DollarSign className="w-3.5 h-3.5 text-orange-600" />
                        <span className="font-mono font-semibold text-slate-900">
                          {formatCurrency(deal.value)}
                        </span>
                      </div>

                      {/* Contact */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <User className="w-3.5 h-3.5" />
                        <span>{deal.contact}</span>
                      </div>

                      {/* Expected Close Date */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatDate(deal.expectedCloseDate)}</span>
                      </div>

                      {/* Priority Indicator */}
                      {deal.priority === "high" && (
                        <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                          High Priority
                        </div>
                      )}
                    </div>
                  </InteractiveElement>
                );
              })}

              {dealsByStage[stage].length === 0 && (
                <div className="text-center py-8 text-sm text-slate-400">
                  No deals in this stage
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
