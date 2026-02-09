/**
 * Mock UI Framework Types
 *
 * Type definitions for the shared Mock UI Framework state management,
 * used across all interactive demos (Hotel PMS, CRM, Instagram, Notion, Granola).
 */

import { type AgentMessage, type QueryResult } from "./agent";

/**
 * Overall state for a mock UI demo.
 * Generic type T represents demo-specific data structure.
 */
export interface MockUIState<T = any> {
  /** Demo-specific data (bookings, contacts, posts, etc.) */
  data: T;
  /** IDs of currently highlighted/selected UI elements */
  selectedElements: string[];
  /** Chat conversation history (user queries + agent responses) */
  responses: AgentMessage[];
  /** Whether the agent is currently processing a query */
  isLoading: boolean;
  /** Current error message, if any */
  error: string | null;
}

/**
 * State update actions for the mock UI reducer.
 * Generic type T represents demo-specific data structure.
 */
export type MockUIAction<T = any> =
  | { type: "SELECT_ELEMENT"; payload: string }
  | { type: "DESELECT_ELEMENT"; payload: string }
  | { type: "CLEAR_SELECTION" }
  | { type: "SEND_QUERY"; payload: string }
  | { type: "ADD_RESPONSE"; payload: AgentMessage }
  | { type: "UPDATE_DATA"; payload: Partial<T> }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

/**
 * Context value exposed by MockUIProvider.
 * Contains state, dispatch, and helper functions.
 */
export interface MockUIContextValue<T = any> {
  /** Current mock UI state */
  state: MockUIState<T>;
  /** Dispatch function for state updates */
  dispatch: React.Dispatch<MockUIAction<T>>;
  /** Send a query to the agent */
  sendQuery: (query: string) => Promise<void>;
  /** Select/highlight an element by ID */
  selectElement: (id: string) => void;
  /** Deselect an element by ID */
  deselectElement: (id: string) => void;
  /** Clear all selected elements */
  clearSelection: () => void;
}

/**
 * Function type for processing user queries.
 * Each demo implements its own query handler with demo-specific logic.
 *
 * @param query - User's natural language query
 * @param state - Current mock UI state
 * @returns Promise resolving to query result with response, highlights, and data updates
 */
export type QueryHandler<T = any> = (
  query: string,
  state: MockUIState<T>
) => Promise<QueryResult>;

/**
 * Generic type for demo-specific data structures.
 * Demos should extend this with their own interfaces.
 *
 * Example:
 * ```tsx
 * interface HotelData extends MockData {
 *   bookings: Booking[];
 *   rooms: Room[];
 *   guests: Guest[];
 * }
 * ```
 */
export interface MockData {
  [key: string]: any;
}

/**
 * Props for MockUIProvider component.
 */
export interface MockUIProviderProps<T extends MockData> {
  /** Initial demo data */
  initialData: T;
  /** Query handler function for processing user queries */
  queryHandler: QueryHandler<T>;
  /** Child components */
  children: React.ReactNode;
}

/**
 * Props for MockUIShell component (window chrome wrapper).
 */
export interface MockUIShellProps {
  /** Window title displayed in the chrome */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Demo content to render inside the shell */
  children: React.ReactNode;
  /** Additional Tailwind CSS classes */
  className?: string;
  /** Visual theme variant */
  variant?: "default" | "dark";
}

/**
 * Props for AgentInterface component (chat panel).
 */
export interface AgentInterfaceProps {
  /** Callback when user sends a query */
  onSendQuery: (query: string) => void;
  /** Array of responses to display in the chat */
  responses: AgentMessage[];
  /** Suggested queries to show as clickable chips */
  suggestedQueries?: string[];
  /** Whether the agent is processing a query */
  isLoading?: boolean;
  /** Input field placeholder text */
  placeholder?: string;
}

/**
 * Props for InteractiveElement component (clickable UI wrapper).
 */
export interface InteractiveElementProps {
  /** Unique element ID for highlighting/selection */
  id: string;
  /** Element content */
  children: React.ReactNode;
  /** Optional custom click handler */
  onClick?: () => void;
  /** Whether to show visual highlight when selected */
  highlightOnSelect?: boolean;
  /** Additional Tailwind CSS classes */
  className?: string;
}

/**
 * Props for DataDisplay component (table/grid).
 */
export interface DataDisplayProps<T> {
  /** Array of data items to display */
  data: T[];
  /** Column definitions */
  columns: ColumnDef<T>[];
  /** Optional row click handler */
  onRowClick?: (row: T) => void;
  /** Message to show when data is empty */
  emptyMessage?: string;
  /** Additional Tailwind CSS classes */
  className?: string;
}

/**
 * Column definition for DataDisplay component.
 */
export interface ColumnDef<T> {
  /** Data key to display in this column */
  key: keyof T;
  /** Column header text */
  header: string;
  /** Optional custom render function for cell content */
  render?: (value: any, row: T) => React.ReactNode;
  /** Optional column width (CSS value) */
  width?: string;
}

/**
 * Reducer function type for mock UI state management.
 */
export type MockUIReducer<T = any> = (
  state: MockUIState<T>,
  action: MockUIAction<T>
) => MockUIState<T>;

/**
 * Loading state variants for UI components.
 */
export type LoadingState = "idle" | "loading" | "success" | "error";

/**
 * Props for LoadingSpinner component.
 */
export interface LoadingSpinnerProps {
  /** Spinner size variant */
  size?: "sm" | "md" | "lg";
  /** Optional label for screen readers */
  label?: string;
}

/**
 * Props for SkeletonRow component (loading placeholder).
 */
export interface SkeletonRowProps {
  /** Number of columns to show */
  columns?: number;
}

/**
 * Undoable state wrapper for advanced demos with undo/redo.
 */
export interface UndoableState<T> {
  /** Previous states */
  past: T[];
  /** Current state */
  present: T;
  /** Future states (for redo) */
  future: T[];
}

/**
 * Action types for undoable state reducer.
 */
export type UndoableAction<T> =
  | { type: "UNDO" }
  | { type: "REDO" }
  | { type: "SET"; payload: T }
  | { type: "RESET"; payload: T };
