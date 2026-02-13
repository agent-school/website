"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, DollarSign, Calendar, User, TrendingUp } from "lucide-react";

import { MockUIProvider, useMockUI } from "@/components/mocks/_framework/MockUIContext";
import { MockUIShell } from "@/components/mocks/_framework/MockUIShell";
import { AgentInterface } from "@/components/mocks/_framework/AgentInterface";
import { Pipeline } from "./Pipeline";
import { handleCRMQuery } from "./queries";
import { type CRMState } from "./types";
import { MOCK_DEALS, STAGE_LABELS } from "./data";

const INITIAL_CRM_STATE: CRMState = {
  highlightedStage: null,
  highlightedDeals: [],
  filterValue: null,
  movingDeal: null,
  selectedDeal: null
};

const SUGGESTED_QUERIES = [
  "Show me proposal deals",
  "What's the total pipeline value?",
  "Show deals over $100k",
  "What's in negotiation?",
  "Show me won deals"
];

function CRMDemoContent() {
  const { state, sendQuery, dispatch } = useMockUI<CRMState>();
  const crmState = state.data as CRMState;

  const selectedDeal = crmState.selectedDeal 
    ? MOCK_DEALS.find(d => d.id === crmState.selectedDeal) 
    : null;

  const handleCloseDealDetail = () => {
    dispatch({
      type: "UPDATE_DATA",
      payload: { selectedDeal: null }
    });
  };

  return (
    <div className="flex flex-col gap-4 min-h-0">
      <AnimatePresence>
        {selectedDeal && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg text-slate-900">
                  Deal Details
                </h3>
                <button
                  onClick={handleCloseDealDetail}
                  className="p-1 hover:bg-slate-100 rounded transition-colors"
                >
                  <X size={18} className="text-slate-500" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Company</p>
                  <p className="font-semibold text-slate-900">{selectedDeal.company}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                    <DollarSign size={12} /> Deal Value
                  </p>
                  <p className="font-semibold text-orange-600 font-mono">
                    ${(selectedDeal.value / 1000).toFixed(0)}K
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                    <TrendingUp size={12} /> Stage
                  </p>
                  <p className="font-semibold text-slate-900">
                    {STAGE_LABELS[selectedDeal.stage]}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                    <User size={12} /> Contact
                  </p>
                  <p className="font-semibold text-slate-900">{selectedDeal.contact}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-slate-500" />
                  <p className="text-sm text-slate-600">
                    Expected Close: <span className="font-semibold text-slate-900">
                      {new Date(selectedDeal.expectedCloseDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                  </p>
                  {selectedDeal.priority === "high" && (
                    <span className="ml-auto px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                      High Priority
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col lg:flex-row gap-4 min-h-0">
        {/* Main Pipeline View */}
        <MockUIShell
          title="Sales CRM - Pipeline"
          className="flex-1"
        >
          <Pipeline />
        </MockUIShell>

        {/* Agent Interface Sidebar */}
        <div className="w-full lg:w-[400px] lg:max-h-full overflow-hidden">
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
      </div>

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
