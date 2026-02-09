"use client";

import { createContext, useContext, useReducer, type ReactNode } from "react";

import { type AgentMessage, type QueryResult } from "@/types/agent";
import {
  type MockUIState,
  type MockUIAction,
  type MockUIContextValue,
  type QueryHandler,
  type MockData,
  type MockUIReducer
} from "@/types/mock-ui";

// ----- Reducer -----

function mockUIReducer<T extends MockData>(
  state: MockUIState<T>,
  action: MockUIAction<T>
): MockUIState<T> {
  switch (action.type) {
    case "SELECT_ELEMENT":
      // Add element to selection if not already selected
      if (state.selectedElements.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        selectedElements: [...state.selectedElements, action.payload]
      };

    case "DESELECT_ELEMENT":
      return {
        ...state,
        selectedElements: state.selectedElements.filter((id) => id !== action.payload)
      };

    case "CLEAR_SELECTION":
      return {
        ...state,
        selectedElements: []
      };

    case "ADD_RESPONSE":
      return {
        ...state,
        responses: [...state.responses, action.payload]
      };

    case "UPDATE_DATA":
      return {
        ...state,
        data: { ...state.data, ...action.payload }
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
}

// ----- Context -----

const MockUIContext = createContext<MockUIContextValue | null>(null);

// ----- Provider Props -----

interface MockUIProviderProps<T extends MockData> {
  children: ReactNode;
  queryHandler: QueryHandler<T>;
  initialData?: T;
}

// ----- Provider Component -----

export function MockUIProvider<T extends MockData>({
  children,
  queryHandler,
  initialData
}: MockUIProviderProps<T>) {
  const [state, dispatch] = useReducer(mockUIReducer<T>, {
    data: initialData || ({} as T),
    selectedElements: [],
    responses: [],
    isLoading: false,
    error: null
  });

  // Send query to agent with 500ms simulated "thinking" delay
  const sendQuery = async (query: string) => {
    // Clear previous selection
    dispatch({ type: "CLEAR_SELECTION" });

    // Set loading state
    dispatch({ type: "SET_LOADING", payload: true });

    // Add user query message
    const userMessageId = `user-${Date.now()}`;
    dispatch({
      type: "ADD_RESPONSE",
      payload: {
        id: userMessageId,
        query,
        response: "",
        timestamp: new Date(),
        type: "user"
      }
    });

    try {
      // Simulate realistic "thinking" delay (500ms)
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Process query with demo-specific handler
      const result: QueryResult = await queryHandler(query, state);

      // Apply data updates if provided
      if (result.dataUpdate) {
        dispatch({ type: "UPDATE_DATA", payload: result.dataUpdate });
      }

      // Apply highlights if provided
      if (result.highlight) {
        const highlights = Array.isArray(result.highlight)
          ? result.highlight
          : [result.highlight];

        highlights.forEach((id) => {
          dispatch({ type: "SELECT_ELEMENT", payload: id });
        });
      }

      // Add agent response message
      const agentMessageId = `agent-${Date.now()}`;
      dispatch({
        type: "ADD_RESPONSE",
        payload: {
          id: agentMessageId,
          query: "",
          response: result.response,
          timestamp: new Date(),
          type: "agent"
        }
      });

      // Handle errors from query result
      if (result.error) {
        dispatch({ type: "SET_ERROR", payload: result.error });
      } else {
        dispatch({ type: "SET_ERROR", payload: null });
      }
    } catch (error) {
      // Handle exceptions during query processing
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      dispatch({ type: "SET_ERROR", payload: errorMessage });

      // Add error response message
      const errorMessageId = `error-${Date.now()}`;
      dispatch({
        type: "ADD_RESPONSE",
        payload: {
          id: errorMessageId,
          query: "",
          response: `Error: ${errorMessage}`,
          timestamp: new Date(),
          type: "agent"
        }
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  // Helper functions for element selection
  const selectElement = (id: string) => {
    dispatch({ type: "SELECT_ELEMENT", payload: id });
  };

  const deselectElement = (id: string) => {
    dispatch({ type: "DESELECT_ELEMENT", payload: id });
  };

  const clearSelection = () => {
    dispatch({ type: "CLEAR_SELECTION" });
  };

  const contextValue: MockUIContextValue<T> = {
    state,
    dispatch,
    sendQuery,
    selectElement,
    deselectElement,
    clearSelection
  };

  return (
    <MockUIContext.Provider value={contextValue}>
      {children}
    </MockUIContext.Provider>
  );
}

// ----- Custom Hook -----

/**
 * Hook to access mock UI context.
 * Must be used within MockUIProvider.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { state, sendQuery } = useMockUI<HotelData>();
 *   return <div>{state.data.bookings.length} bookings</div>;
 * }
 * ```
 */
export function useMockUI<T extends MockData = any>(): MockUIContextValue<T> {
  const context = useContext(MockUIContext);
  if (!context) {
    throw new Error("useMockUI must be used within MockUIProvider");
  }
  return context as MockUIContextValue<T>;
}

// ----- Additional Hook for Agent Queries -----

/**
 * Hook to simplify sending agent queries.
 * Returns sendQuery function and loading state.
 *
 * @example
 * ```tsx
 * function QueryInput() {
 *   const { sendQuery, isLoading } = useAgentQuery();
 *   return (
 *     <button onClick={() => sendQuery("Show bookings")} disabled={isLoading}>
 *       Send Query
 *     </button>
 *   );
 * }
 * ```
 */
export function useAgentQuery<T extends MockData = any>() {
  const { state, sendQuery } = useMockUI<T>();

  return {
    sendQuery,
    isLoading: state.isLoading,
    error: state.error,
    responses: state.responses
  };
}
