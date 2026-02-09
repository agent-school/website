/**
 * Agent Query System Types
 *
 * Type definitions for the agent query/response system used across
 * all interactive mock UI demos (Hotel PMS, CRM, Instagram, Notion, Granola).
 */

/**
 * User's natural language query sent to the agent.
 */
export interface AgentQuery {
  /** Unique identifier for the query */
  id: string;
  /** The query text entered by the user */
  text: string;
  /** Timestamp when the query was sent */
  timestamp: Date;
}

/**
 * Agent's response to a user query.
 * Includes the answer text, UI highlights, and optional actions.
 */
export interface QueryResult {
  /** Text response to display to the user */
  response: string;
  /** Optional data mutations to apply to the demo state */
  dataUpdate?: any;
  /** Optional element ID to highlight in the UI */
  highlight?: string | string[];
  /** Optional error message if the query failed */
  error?: string;
  /** Optional actions for the agent to perform (e.g., navigate, update) */
  actions?: AgentAction[];
}

/**
 * Single chat message in the agent interface conversation history.
 */
export interface AgentMessage {
  /** Unique identifier for the message */
  id: string;
  /** The user's query text (empty for agent responses) */
  query: string;
  /** The agent's response text (empty for user queries) */
  response: string;
  /** When the message was created */
  timestamp: Date;
  /** Message type */
  type?: "user" | "agent" | "system";
}

/**
 * IDs of UI elements to highlight in response to a query.
 */
export type HighlightTarget = string | string[];

/**
 * Actions the agent can perform on the mock UI.
 */
export type AgentAction =
  | ReadAction
  | WriteAction
  | NavigateAction
  | FilterAction
  | SortAction
  | HighlightAction;

/**
 * Action: Read data from the UI.
 */
export interface ReadAction {
  type: "read";
  /** Element ID or data path to read from */
  target: string;
  /** Optional fields to extract */
  fields?: string[];
}

/**
 * Action: Write/update data in the UI.
 */
export interface WriteAction {
  type: "write";
  /** Element ID or data path to write to */
  target: string;
  /** Data to write */
  data: Record<string, any>;
}

/**
 * Action: Navigate to a different view or element.
 */
export interface NavigateAction {
  type: "navigate";
  /** Target route or element ID */
  target: string;
  /** Optional navigation context */
  context?: Record<string, any>;
}

/**
 * Action: Filter displayed data.
 */
export interface FilterAction {
  type: "filter";
  /** Field to filter on */
  field: string;
  /** Filter operator */
  operator: "equals" | "contains" | "gt" | "lt" | "gte" | "lte";
  /** Value to filter by */
  value: any;
}

/**
 * Action: Sort displayed data.
 */
export interface SortAction {
  type: "sort";
  /** Field to sort on */
  field: string;
  /** Sort direction */
  direction: "asc" | "desc";
}

/**
 * Action: Highlight one or more UI elements.
 */
export interface HighlightAction {
  type: "highlight";
  /** Element ID(s) to highlight */
  targets: HighlightTarget;
  /** Optional highlight duration in milliseconds */
  duration?: number;
}

/**
 * Current agent processing state.
 */
export type AgentState =
  | "idle"
  | "processing"
  | "success"
  | "error";

/**
 * Function type for processing user queries.
 * Each demo implements its own query handler with demo-specific logic.
 */
export type QueryHandler<T = any> = (
  query: string,
  state: T
) => Promise<QueryResult>;

/**
 * Suggested query chip displayed in the agent interface.
 */
export interface SuggestedQuery {
  /** Display text for the query */
  text: string;
  /** Optional category for grouping */
  category?: string;
  /** Optional icon name */
  icon?: string;
}

/**
 * Agent capabilities exposed to the UI.
 * Used for showing what the agent can do in a demo.
 */
export interface AgentCapabilities {
  /** Can the agent read data? */
  canRead: boolean;
  /** Can the agent write/update data? */
  canWrite: boolean;
  /** Can the agent navigate? */
  canNavigate: boolean;
  /** Can the agent filter/sort? */
  canFilter: boolean;
  /** List of supported query patterns */
  supportedPatterns?: string[];
}
