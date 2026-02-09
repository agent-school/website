export type DealStage = "lead" | "qualified" | "proposal" | "negotiation" | "won";

export interface Deal {
  id: string;
  company: string;
  contact: string;
  value: number;
  stage: DealStage;
  expectedCloseDate: string;
  priority: "high" | "medium" | "low";
}

export interface PipelineStats {
  totalValue: number;
  dealCount: number;
  avgDealSize: number;
  conversionRate: number;
}

export interface StageStats {
  stage: DealStage;
  totalValue: number;
  dealCount: number;
}

export interface CRMData {
  deals: Deal[];
  pipelineStats: PipelineStats;
  stageStats: StageStats[];
}

export interface CRMState {
  highlightedStage: DealStage | null;
  highlightedDeals: string[];
  filterValue: number | null;
  movingDeal: { dealId: string; fromStage: DealStage; toStage: DealStage } | null;
}
