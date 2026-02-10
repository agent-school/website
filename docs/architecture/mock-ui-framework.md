# Mock UI Framework Documentation

> Comprehensive guide to building interactive agent demos using the shared Mock UI Framework

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Core Components](#core-components)
3. [Agent Query System](#agent-query-system)
4. [TypeScript Interfaces](#typescript-interfaces)
5. [File Structure](#file-structure)
6. [Demo Template](#demo-template)
7. [Query Handler Pattern](#query-handler-pattern)
8. [State Management](#state-management)
9. [Styling Conventions](#styling-conventions)
10. [Accessibility](#accessibility)

---

## Architecture Overview

### Shared Framework Concept

The Mock UI Framework provides a **consistent, reusable foundation** for building interactive agent demos across different platforms (Hotel PMS, CRM, Instagram, Notion, Granola). Each demo inherits core UI components, state management patterns, and interaction logic while customizing visual presentation and query handling.

**Key Principles:**

1. **Separation of Concerns** — Core framework handles UI shell, agent interface, and interaction patterns. Each demo implements domain-specific data, queries, and visual themes.
2. **React Context Pattern** — Centralized state management using Context API + useReducer for predictable state updates.
3. **Composability** — Small, focused components that compose into complete mock UIs.
4. **Type Safety** — Full TypeScript coverage with strict typing for state, actions, and props.
5. **Accessibility First** — Keyboard navigation, screen reader support, and ARIA labels built into core components.

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ MockUIDemo (Demo-Specific Wrapper)                          │
│ ├─ MockUIProvider (Context)                                 │
│ │  ├─ State: selectedElements, responses, loading, data     │
│ │  ├─ Actions: selectElement, sendQuery, updateData         │
│ │  └─ Query Handler (demo-specific queries.ts)              │
│ └─ Layout (2-column grid)                                    │
│    ├─ MockUIShell (Left Panel)                              │
│    │  ├─ Window Chrome (macOS dots, title)                  │
│    │  ├─ Demo Content (custom per platform)                 │
│    │  │  ├─ InteractiveElement components                   │
│    │  │  ├─ DataDisplay components                          │
│    │  │  └─ LoadingStates                                   │
│    │  └─ Highlight Overlays (dynamic)                       │
│    └─ AgentInterface (Right Panel)                          │
│       ├─ QueryInput (input field + send button)             │
│       ├─ ResponseDisplay (markdown-style responses)         │
│       └─ SuggestedQueries (clickable chips)                 │
└─────────────────────────────────────────────────────────────┘
```

---

## Core Components

### 1. MockUIShell

**Purpose:** Provides the window chrome (macOS-style dots, title bar) and container for demo content.

**Props:**
```tsx
interface MockUIShellProps {
  title: string;                    // Window title (e.g., "Hotel PMS Dashboard")
  subtitle?: string;                // Optional subtitle
  children: React.ReactNode;        // Demo content
  className?: string;               // Additional Tailwind classes
  variant?: "default" | "dark";     // Theme variant
}
```

**Usage:**
```tsx
<MockUIShell title="Hotel PMS Dashboard" subtitle="Moonstone Hotel">
  <div className="p-6">
    {/* Demo content here */}
  </div>
</MockUIShell>
```

**Implementation:**
```tsx
export function MockUIShell({
  title,
  subtitle,
  children,
  className = "",
  variant = "default"
}: MockUIShellProps) {
  const bgClass = variant === "dark" ? "bg-charcoal-900" : "bg-white";
  const borderClass = variant === "dark" ? "border-charcoal-700" : "border-cream-200";

  return (
    <div className={`rounded-2xl border ${borderClass} shadow-xl overflow-hidden ${className}`}>
      {/* Window Chrome */}
      <div className={`flex items-center justify-between px-5 py-3 ${bgClass === "bg-white" ? "bg-cream-50" : "bg-charcoal-800"} border-b ${borderClass}`}>
        <div className="flex items-center gap-3">
          {/* macOS dots */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-300" />
            <div className="w-3 h-3 rounded-full bg-amber-300" />
            <div className="w-3 h-3 rounded-full bg-green-300" />
          </div>
          <div>
            <p className="text-sm font-medium text-charcoal-900">{title}</p>
            {subtitle && (
              <p className="text-xs text-charcoal-500">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={bgClass}>
        {children}
      </div>
    </div>
  );
}
```

---

### 2. AgentInterface

**Purpose:** Chat-style interface for sending queries and displaying agent responses.

**Props:**
```tsx
interface AgentInterfaceProps {
  onSendQuery: (query: string) => void;        // Callback when query is sent
  responses: AgentResponse[];                   // Array of responses to display
  suggestedQueries?: string[];                  // Optional suggested queries
  isLoading?: boolean;                          // Loading state
  placeholder?: string;                         // Input placeholder text
}

interface AgentResponse {
  id: string;
  query: string;
  response: string;
  timestamp: Date;
}
```

**Usage:**
```tsx
const { sendQuery, responses, isLoading } = useMockUI();

<AgentInterface
  onSendQuery={sendQuery}
  responses={responses}
  isLoading={isLoading}
  suggestedQueries={[
    "Show me today's check-ins",
    "Find overdue invoices",
    "Update room 305 status"
  ]}
  placeholder="Ask the agent..."
/>
```

**Implementation:**
```tsx
export function AgentInterface({
  onSendQuery,
  responses,
  suggestedQueries = [],
  isLoading = false,
  placeholder = "Ask the agent..."
}: AgentInterfaceProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendQuery(input.trim());
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-cream-200 shadow-lg">
      {/* Header */}
      <div className="px-6 py-4 border-b border-cream-200">
        <h3 className="font-display text-xl text-navy-800">Agent Interface</h3>
        <p className="text-sm text-charcoal-500 mt-1">
          Ask questions or give commands
        </p>
      </div>

      {/* Responses */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {responses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-charcoal-400">
              Start by asking a question or selecting an element
            </p>
          </div>
        ) : (
          responses.map((resp) => (
            <div key={resp.id} className="space-y-2">
              {/* User Query */}
              <div className="bg-navy-50 rounded-lg px-4 py-3">
                <p className="text-sm font-medium text-navy-800">{resp.query}</p>
              </div>
              {/* Agent Response */}
              <div className="bg-cream-50 rounded-lg px-4 py-3">
                <p className="text-sm text-charcoal-700 whitespace-pre-wrap">
                  {resp.response}
                </p>
              </div>
            </div>
          ))
        )}
        {isLoading && <LoadingSpinner />}
      </div>

      {/* Suggested Queries */}
      {suggestedQueries.length > 0 && responses.length === 0 && (
        <div className="px-6 py-3 border-t border-cream-200 bg-cream-50">
          <p className="text-xs font-mono uppercase tracking-widest text-charcoal-500 mb-2">
            Try asking:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedQueries.map((query, idx) => (
              <button
                key={idx}
                onClick={() => onSendQuery(query)}
                className="px-3 py-1.5 bg-white border border-cream-300 rounded-full text-xs text-charcoal-700 hover:border-amber-500 hover:text-amber-600 transition-colors"
              >
                {query}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="px-6 py-4 border-t border-cream-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            disabled={isLoading}
            className="flex-1 px-4 py-2 border border-cream-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-6 py-2 bg-amber-500 text-white rounded-lg font-medium text-sm hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
```

---

### 3. MockUIContext

**Purpose:** Centralized state management using React Context + useReducer.

**State Interface:**
```tsx
interface MockUIState<T = any> {
  data: T;                                      // Demo-specific data (bookings, contacts, posts, etc.)
  selectedElements: string[];                   // IDs of highlighted elements
  responses: AgentResponse[];                   // Chat history
  isLoading: boolean;                           // Loading state
  error: string | null;                         // Error message
}
```

**Actions Interface:**
```tsx
type MockUIAction<T = any> =
  | { type: "SELECT_ELEMENT"; payload: string }
  | { type: "DESELECT_ELEMENT"; payload: string }
  | { type: "CLEAR_SELECTION" }
  | { type: "SEND_QUERY"; payload: string }
  | { type: "ADD_RESPONSE"; payload: AgentResponse }
  | { type: "UPDATE_DATA"; payload: Partial<T> }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };
```

**Provider Implementation:**
```tsx
interface MockUIProviderProps<T> {
  initialData: T;
  queryHandler: (query: string, state: MockUIState<T>) => Promise<QueryResult>;
  children: React.ReactNode;
}

export function MockUIProvider<T>({
  initialData,
  queryHandler,
  children
}: MockUIProviderProps<T>) {
  const [state, dispatch] = useReducer(mockUIReducer<T>, {
    data: initialData,
    selectedElements: [],
    responses: [],
    isLoading: false,
    error: null
  });

  const sendQuery = async (query: string) => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({
      type: "ADD_RESPONSE",
      payload: {
        id: Date.now().toString(),
        query,
        response: "",
        timestamp: new Date()
      }
    });

    try {
      const result = await queryHandler(query, state);
      
      // Handle result
      if (result.dataUpdate) {
        dispatch({ type: "UPDATE_DATA", payload: result.dataUpdate });
      }
      if (result.highlight) {
        dispatch({ type: "SELECT_ELEMENT", payload: result.highlight });
      }
      dispatch({
        type: "ADD_RESPONSE",
        payload: {
          id: (Date.now() + 1).toString(),
          query: "",
          response: result.response,
          timestamp: new Date()
        }
      });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: (error as Error).message });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const value = {
    state,
    dispatch,
    sendQuery,
    selectElement: (id: string) => dispatch({ type: "SELECT_ELEMENT", payload: id }),
    deselectElement: (id: string) => dispatch({ type: "DESELECT_ELEMENT", payload: id }),
    clearSelection: () => dispatch({ type: "CLEAR_SELECTION" })
  };

  return (
    <MockUIContext.Provider value={value}>
      {children}
    </MockUIContext.Provider>
  );
}

export function useMockUI<T>() {
  const context = useContext(MockUIContext);
  if (!context) {
    throw new Error("useMockUI must be used within MockUIProvider");
  }
  return context as MockUIContextValue<T>;
}
```

---

### 4. InteractiveElement

**Purpose:** Wrapper for clickable UI elements that trigger highlights and interactions.

**Props:**
```tsx
interface InteractiveElementProps {
  id: string;                       // Unique element ID
  children: React.ReactNode;        // Element content
  onClick?: () => void;             // Optional custom click handler
  highlightOnSelect?: boolean;      // Show visual highlight (default: true)
  className?: string;
}
```

**Usage:**
```tsx
<InteractiveElement
  id="booking-123"
  highlightOnSelect={true}
  className="p-4 border border-cream-200 rounded-lg"
>
  <div>
    <p className="font-medium">John Doe</p>
    <p className="text-sm text-charcoal-500">Room 305 • Check-in: Today</p>
  </div>
</InteractiveElement>
```

**Implementation:**
```tsx
export function InteractiveElement({
  id,
  children,
  onClick,
  highlightOnSelect = true,
  className = ""
}: InteractiveElementProps) {
  const { state, selectElement } = useMockUI();
  const isSelected = state.selectedElements.includes(id);

  const handleClick = () => {
    selectElement(id);
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      className={`
        cursor-pointer transition-all
        ${isSelected && highlightOnSelect ? "ring-2 ring-amber-500 ring-offset-2" : ""}
        ${className}
      `}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-pressed={isSelected}
    >
      {children}
    </div>
  );
}
```

---

### 5. DataDisplay

**Purpose:** Flexible table/grid component for displaying structured data.

**Props:**
```tsx
interface DataDisplayProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
  className?: string;
}

interface ColumnDef<T> {
  key: keyof T;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
}
```

**Usage:**
```tsx
<DataDisplay
  data={bookings}
  columns={[
    { key: "guestName", header: "Guest" },
    { key: "room", header: "Room" },
    {
      key: "status",
      header: "Status",
      render: (status) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          status === "confirmed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
        }`}>
          {status}
        </span>
      )
    }
  ]}
  onRowClick={(booking) => console.log(booking)}
/>
```

**Implementation:**
```tsx
export function DataDisplay<T>({
  data,
  columns,
  onRowClick,
  emptyMessage = "No data available",
  className = ""
}: DataDisplayProps<T>) {
  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-charcoal-400">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-cream-200 bg-cream-50">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-4 py-3 text-left text-xs font-mono uppercase tracking-widest text-charcoal-500"
                style={{ width: col.width }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              onClick={() => onRowClick?.(row)}
              className={`border-b border-cream-100 ${
                onRowClick ? "cursor-pointer hover:bg-cream-50" : ""
              }`}
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-3 text-sm">
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

---

### 6. LoadingStates

**Purpose:** Consistent loading indicators and skeleton screens.

**Components:**

#### LoadingSpinner
```tsx
export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClass = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  }[size];

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`${sizeClass} border-2 border-amber-500 border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
```

#### SkeletonRow
```tsx
export function SkeletonRow({ columns = 3 }: { columns?: number }) {
  return (
    <div className="flex gap-4 p-4 animate-pulse">
      {Array.from({ length: columns }).map((_, i) => (
        <div key={i} className="flex-1 h-4 bg-cream-200 rounded" />
      ))}
    </div>
  );
}
```

#### SkeletonCard
```tsx
export function SkeletonCard() {
  return (
    <div className="p-6 border border-cream-200 rounded-lg animate-pulse space-y-3">
      <div className="h-4 bg-cream-200 rounded w-3/4" />
      <div className="h-4 bg-cream-200 rounded w-1/2" />
      <div className="h-4 bg-cream-200 rounded w-5/6" />
    </div>
  );
}
```

---

## Agent Query System

### Query Flow

1. **User Input** → Query string entered in AgentInterface or suggested query clicked
2. **Query Handler** → Demo-specific `queryHandler` function processes query
3. **Pattern Matching** → Query matched against predefined patterns (regex or keyword-based)
4. **State Updates** → Handler returns:
   - `response`: Text response to display
   - `dataUpdate`: Optional data mutations
   - `highlight`: Optional element ID to highlight
5. **UI Updates** → Context updates state, triggering re-render with highlights and responses

### Query Result Interface

```tsx
interface QueryResult {
  response: string;                 // Text response to display
  dataUpdate?: any;                 // Optional data updates
  highlight?: string;               // Optional element ID to highlight
  error?: string;                   // Optional error message
}
```

### Example Query Handler

```tsx
export async function hotelQueryHandler(
  query: string,
  state: MockUIState<HotelData>
): Promise<QueryResult> {
  const lowerQuery = query.toLowerCase();

  // Pattern: "show today's check-ins"
  if (lowerQuery.includes("check-in") && lowerQuery.includes("today")) {
    const todayCheckIns = state.data.bookings.filter(
      (b) => b.checkInDate === "today" && b.status === "confirmed"
    );

    return {
      response: `Found ${todayCheckIns.length} check-ins for today:\n${todayCheckIns
        .map((b) => `• ${b.guestName} - Room ${b.room}`)
        .join("\n")}`,
      highlight: "check-in-list"
    };
  }

  // Pattern: "update room 305 status to clean"
  const updateMatch = lowerQuery.match(/update room (\d+) status to (\w+)/);
  if (updateMatch) {
    const [, roomNumber, newStatus] = updateMatch;

    return {
      response: `Room ${roomNumber} status updated to "${newStatus}"`,
      dataUpdate: {
        rooms: state.data.rooms.map((r) =>
          r.number === roomNumber ? { ...r, status: newStatus } : r
        )
      },
      highlight: `room-${roomNumber}`
    };
  }

  // Default fallback
  return {
    response: "I'm not sure how to help with that. Try asking about today's check-ins or updating room status."
  };
}
```

---

## TypeScript Interfaces

### Core Framework Types

```tsx
// ----- State & Context -----

interface MockUIState<T = any> {
  data: T;
  selectedElements: string[];
  responses: AgentResponse[];
  isLoading: boolean;
  error: string | null;
}

interface AgentResponse {
  id: string;
  query: string;
  response: string;
  timestamp: Date;
}

type MockUIAction<T = any> =
  | { type: "SELECT_ELEMENT"; payload: string }
  | { type: "DESELECT_ELEMENT"; payload: string }
  | { type: "CLEAR_SELECTION" }
  | { type: "SEND_QUERY"; payload: string }
  | { type: "ADD_RESPONSE"; payload: AgentResponse }
  | { type: "UPDATE_DATA"; payload: Partial<T> }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

interface MockUIContextValue<T = any> {
  state: MockUIState<T>;
  dispatch: React.Dispatch<MockUIAction<T>>;
  sendQuery: (query: string) => Promise<void>;
  selectElement: (id: string) => void;
  deselectElement: (id: string) => void;
  clearSelection: () => void;
}

// ----- Query System -----

interface QueryResult {
  response: string;
  dataUpdate?: any;
  highlight?: string;
  error?: string;
}

type QueryHandler<T> = (
  query: string,
  state: MockUIState<T>
) => Promise<QueryResult>;

// ----- Component Props -----

interface MockUIShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark";
}

interface AgentInterfaceProps {
  onSendQuery: (query: string) => void;
  responses: AgentResponse[];
  suggestedQueries?: string[];
  isLoading?: boolean;
  placeholder?: string;
}

interface InteractiveElementProps {
  id: string;
  children: React.ReactNode;
  onClick?: () => void;
  highlightOnSelect?: boolean;
  className?: string;
}

interface DataDisplayProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
  className?: string;
}

interface ColumnDef<T> {
  key: keyof T;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
}
```

### Demo-Specific Types (Example: Hotel PMS)

```tsx
// Hotel PMS Demo Data Structure

interface HotelData {
  bookings: Booking[];
  rooms: Room[];
  guests: Guest[];
}

interface Booking {
  id: string;
  guestName: string;
  guestId: string;
  room: string;
  checkInDate: string;
  checkOutDate: string;
  status: "confirmed" | "checked-in" | "checked-out" | "cancelled";
  totalPrice: number;
}

interface Room {
  number: string;
  type: "single" | "double" | "suite";
  status: "clean" | "dirty" | "occupied" | "maintenance";
  floor: number;
}

interface Guest {
  id: string;
  name: string;
  email: string;
  phone: string;
  loyaltyTier: "standard" | "gold" | "platinum";
}
```

---

## File Structure

```
src/components/mocks/
├── core/                           # Shared framework components
│   ├── MockUIContext.tsx           # Context provider + hooks
│   ├── MockUIShell.tsx             # Window chrome component
│   ├── AgentInterface.tsx          # Chat interface
│   ├── InteractiveElement.tsx      # Clickable element wrapper
│   ├── DataDisplay.tsx             # Table/grid component
│   ├── LoadingStates.tsx           # Spinner, skeleton screens
│   └── index.ts                    # Re-exports all core components
│
├── hotel-pms/                      # Hotel PMS Demo
│   ├── HotelPMSDemo.tsx            # Main demo component
│   ├── data.ts                     # Mock data (bookings, rooms)
│   ├── queries.ts                  # Query handler
│   ├── components/                 # Demo-specific sub-components
│   │   ├── BookingList.tsx
│   │   ├── RoomGrid.tsx
│   │   └── GuestProfile.tsx
│   └── types.ts                    # Demo-specific TypeScript types
│
├── crm/                            # CRM Demo
│   ├── CRMDemo.tsx
│   ├── data.ts
│   ├── queries.ts
│   ├── components/
│   │   ├── ContactList.tsx
│   │   ├── DealPipeline.tsx
│   │   └── ActivityFeed.tsx
│   └── types.ts
│
├── instagram/                      # Instagram Demo
│   ├── InstagramDemo.tsx
│   ├── data.ts
│   ├── queries.ts
│   ├── components/
│   │   ├── PostGrid.tsx
│   │   ├── StoryBar.tsx
│   │   └── CommentSection.tsx
│   └── types.ts
│
├── notion/                         # Notion Demo
│   ├── NotionDemo.tsx
│   ├── data.ts
│   ├── queries.ts
│   ├── components/
│   │   ├── PageTree.tsx
│   │   ├── BlockEditor.tsx
│   │   └── DatabaseView.tsx
│   └── types.ts
│
└── granola/                        # Granola Demo
    ├── GranolaDemo.tsx
    ├── data.ts
    ├── queries.ts
    ├── components/
    │   ├── NotesList.tsx
    │   ├── TranscriptView.tsx
    │   └── ActionItems.tsx
    └── types.ts
```

---

## Demo Template

### Step-by-Step Guide to Creating a New Demo

#### Step 1: Create Directory Structure

```bash
src/components/mocks/my-demo/
├── MyDemo.tsx
├── data.ts
├── queries.ts
├── types.ts
└── components/
    └── (demo-specific components)
```

#### Step 2: Define TypeScript Types (`types.ts`)

```tsx
// types.ts
export interface MyDemoData {
  items: Item[];
  categories: Category[];
}

export interface Item {
  id: string;
  name: string;
  category: string;
  status: "active" | "inactive";
}

export interface Category {
  id: string;
  name: string;
  color: string;
}
```

#### Step 3: Create Mock Data (`data.ts`)

```tsx
// data.ts
import { type MyDemoData } from "./types";

export const INITIAL_DATA: MyDemoData = {
  items: [
    { id: "1", name: "Item One", category: "cat-1", status: "active" },
    { id: "2", name: "Item Two", category: "cat-2", status: "inactive" }
  ],
  categories: [
    { id: "cat-1", name: "Category A", color: "#FF6B6B" },
    { id: "cat-2", name: "Category B", color: "#4ECDC4" }
  ]
};

export const SUGGESTED_QUERIES = [
  "Show active items",
  "Filter by Category A",
  "Update Item One status"
];
```

#### Step 4: Implement Query Handler (`queries.ts`)

```tsx
// queries.ts
import { type MockUIState, type QueryResult } from "../core/MockUIContext";
import { type MyDemoData } from "./types";

export async function myDemoQueryHandler(
  query: string,
  state: MockUIState<MyDemoData>
): Promise<QueryResult> {
  const lowerQuery = query.toLowerCase();

  // Pattern 1: Show active items
  if (lowerQuery.includes("active")) {
    const activeItems = state.data.items.filter((i) => i.status === "active");
    return {
      response: `Found ${activeItems.length} active items:\n${activeItems
        .map((i) => `• ${i.name}`)
        .join("\n")}`,
      highlight: "item-list"
    };
  }

  // Pattern 2: Filter by category
  const categoryMatch = lowerQuery.match(/category ([a-z])/);
  if (categoryMatch) {
    const categoryName = `Category ${categoryMatch[1].toUpperCase()}`;
    const filtered = state.data.items.filter(
      (i) => state.data.categories.find((c) => c.id === i.category)?.name === categoryName
    );
    return {
      response: `Filtered by ${categoryName}: ${filtered.length} items`,
      highlight: "item-list"
    };
  }

  // Pattern 3: Update item status
  const updateMatch = lowerQuery.match(/update ([\w\s]+) status/);
  if (updateMatch) {
    const itemName = updateMatch[1].trim();
    return {
      response: `Updated "${itemName}" status to active`,
      dataUpdate: {
        items: state.data.items.map((i) =>
          i.name.toLowerCase().includes(itemName.toLowerCase())
            ? { ...i, status: "active" }
            : i
        )
      },
      highlight: "item-list"
    };
  }

  // Default fallback
  return {
    response: "I'm not sure how to help with that. Try asking about active items or filtering by category."
  };
}
```

#### Step 5: Build Main Demo Component (`MyDemo.tsx`)

```tsx
// MyDemo.tsx
"use client";

import { MockUIProvider } from "../core/MockUIContext";
import { MockUIShell } from "../core/MockUIShell";
import { AgentInterface } from "../core/AgentInterface";
import { InteractiveElement } from "../core/InteractiveElement";
import { DataDisplay } from "../core/DataDisplay";
import { useMockUI } from "../core/MockUIContext";

import { INITIAL_DATA, SUGGESTED_QUERIES } from "./data";
import { myDemoQueryHandler } from "./queries";
import { type MyDemoData } from "./types";

function MyDemoContent() {
  const { state, sendQuery } = useMockUI<MyDemoData>();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Panel: Mock UI */}
      <MockUIShell title="My Demo App" subtitle="Interactive Demo">
        <div className="p-6 space-y-6">
          <InteractiveElement id="item-list" className="space-y-2">
            <DataDisplay
              data={state.data.items}
              columns={[
                { key: "name", header: "Name" },
                { key: "category", header: "Category" },
                {
                  key: "status",
                  header: "Status",
                  render: (status) => (
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {status}
                    </span>
                  )
                }
              ]}
            />
          </InteractiveElement>
        </div>
      </MockUIShell>

      {/* Right Panel: Agent Interface */}
      <AgentInterface
        onSendQuery={sendQuery}
        responses={state.responses}
        isLoading={state.isLoading}
        suggestedQueries={SUGGESTED_QUERIES}
        placeholder="Ask about items..."
      />
    </div>
  );
}

export function MyDemo() {
  return (
    <MockUIProvider
      initialData={INITIAL_DATA}
      queryHandler={myDemoQueryHandler}
    >
      <MyDemoContent />
    </MockUIProvider>
  );
}
```

#### Step 6: Add to Parent Page

```tsx
// app/page.tsx or sections/InteractiveSection.tsx
import { MyDemo } from "@/components/mocks/my-demo/MyDemo";

<section className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="font-display text-display-md mb-12">My Demo</h2>
    <MyDemo />
  </div>
</section>
```

---

## Query Handler Pattern

### Best Practices

1. **Case-Insensitive Matching** — Always normalize query with `.toLowerCase()`
2. **Regex for Complex Patterns** — Use regex for extracting parameters (e.g., room numbers, dates)
3. **Keyword Matching for Simple Queries** — Use `.includes()` for basic keyword detection
4. **Prioritize Specificity** — Check most specific patterns first, fallback to general patterns
5. **Return Meaningful Responses** — Include context (counts, item names, confirmation messages)
6. **Highlight Relevant Elements** — Use `highlight` to draw attention to affected UI elements
7. **Handle Edge Cases** — Validate data before mutations, return helpful error messages

### Example Patterns

#### Simple Keyword Match
```tsx
if (lowerQuery.includes("overdue") && lowerQuery.includes("invoice")) {
  const overdue = state.data.invoices.filter((i) => i.status === "overdue");
  return {
    response: `Found ${overdue.length} overdue invoices`,
    highlight: "invoice-list"
  };
}
```

#### Regex Parameter Extraction
```tsx
const roomMatch = lowerQuery.match(/room (\d+)/);
if (roomMatch) {
  const roomNumber = roomMatch[1];
  const room = state.data.rooms.find((r) => r.number === roomNumber);
  if (!room) {
    return { response: `Room ${roomNumber} not found`, error: "not_found" };
  }
  return {
    response: `Room ${roomNumber} is ${room.status}`,
    highlight: `room-${roomNumber}`
  };
}
```

#### Data Mutation
```tsx
if (lowerQuery.includes("archive") && lowerQuery.includes("post")) {
  const postIdMatch = lowerQuery.match(/post (\d+)/);
  if (!postIdMatch) {
    return { response: "Please specify a post ID", error: "missing_param" };
  }

  const postId = postIdMatch[1];
  return {
    response: `Post ${postId} archived successfully`,
    dataUpdate: {
      posts: state.data.posts.map((p) =>
        p.id === postId ? { ...p, status: "archived" } : p
      )
    },
    highlight: `post-${postId}`
  };
}
```

#### Multi-Step Logic
```tsx
if (lowerQuery.includes("urgent") && lowerQuery.includes("contact")) {
  // Step 1: Filter urgent contacts
  const urgentContacts = state.data.contacts.filter((c) => c.priority === "urgent");

  // Step 2: Sort by last contact date
  urgentContacts.sort((a, b) =>
    new Date(a.lastContact).getTime() - new Date(b.lastContact).getTime()
  );

  // Step 3: Return top 5
  const top5 = urgentContacts.slice(0, 5);

  return {
    response: `Top 5 urgent contacts:\n${top5
      .map((c, i) => `${i + 1}. ${c.name} (last contact: ${c.lastContact})`)
      .join("\n")}`,
    highlight: "contact-list"
  };
}
```

---

## State Management

### useReducer Pattern

The framework uses React's `useReducer` for predictable state updates. All state changes flow through dispatched actions.

#### Reducer Implementation

```tsx
function mockUIReducer<T>(
  state: MockUIState<T>,
  action: MockUIAction<T>
): MockUIState<T> {
  switch (action.type) {
    case "SELECT_ELEMENT":
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
        error: action.payload
      };

    default:
      return state;
  }
}
```

### Action Creators (Optional Helper Functions)

```tsx
export const actions = {
  selectElement: (id: string): MockUIAction => ({
    type: "SELECT_ELEMENT",
    payload: id
  }),

  deselectElement: (id: string): MockUIAction => ({
    type: "DESELECT_ELEMENT",
    payload: id
  }),

  clearSelection: (): MockUIAction => ({
    type: "CLEAR_SELECTION"
  }),

  addResponse: (response: AgentResponse): MockUIAction => ({
    type: "ADD_RESPONSE",
    payload: response
  }),

  updateData: <T>(data: Partial<T>): MockUIAction<T> => ({
    type: "UPDATE_DATA",
    payload: data
  }),

  setLoading: (isLoading: boolean): MockUIAction => ({
    type: "SET_LOADING",
    payload: isLoading
  }),

  setError: (error: string | null): MockUIAction => ({
    type: "SET_ERROR",
    payload: error
  })
};
```

### Custom Hooks

#### useHighlight
```tsx
export function useHighlight(elementId: string) {
  const { state } = useMockUI();
  return state.selectedElements.includes(elementId);
}
```

#### useDataSelector
```tsx
export function useDataSelector<T, R>(selector: (data: T) => R): R {
  const { state } = useMockUI<T>();
  return selector(state.data);
}
```

---

## Styling Conventions

### Tailwind Patterns for Mock UIs

#### Window Chrome (macOS-style)
```tsx
<div className="flex items-center gap-3 px-5 py-3 bg-cream-50 border-b border-cream-200">
  <div className="flex gap-1.5">
    <div className="w-3 h-3 rounded-full bg-red-300" />
    <div className="w-3 h-3 rounded-full bg-amber-300" />
    <div className="w-3 h-3 rounded-full bg-green-300" />
  </div>
  <p className="text-sm font-medium text-charcoal-900">Window Title</p>
</div>
```

#### Card Container
```tsx
<div className="bg-white rounded-2xl border border-cream-200 shadow-lg overflow-hidden">
  {/* Content */}
</div>
```

#### Interactive Element Hover
```tsx
<div className="
  p-4 rounded-lg border border-cream-200
  hover:border-amber-500 hover:shadow-md
  transition-all cursor-pointer
">
  {/* Content */}
</div>
```

#### Highlight Ring
```tsx
<div className={`
  p-4 rounded-lg transition-all
  ${isSelected ? "ring-2 ring-amber-500 ring-offset-2" : ""}
`}>
  {/* Content */}
</div>
```

#### Status Badge
```tsx
<span className={`
  px-2 py-1 rounded-full text-xs font-medium
  ${status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}
`}>
  {status}
</span>
```

#### Data Table
```tsx
<table className="w-full">
  <thead>
    <tr className="border-b border-cream-200 bg-cream-50">
      <th className="px-4 py-3 text-left text-xs font-mono uppercase tracking-widest text-charcoal-500">
        Column
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-cream-100 hover:bg-cream-50 cursor-pointer">
      <td className="px-4 py-3 text-sm text-charcoal-700">Data</td>
    </tr>
  </tbody>
</table>
```

#### Chat Bubble (User)
```tsx
<div className="bg-navy-50 rounded-lg px-4 py-3">
  <p className="text-sm font-medium text-navy-800">User message</p>
</div>
```

#### Chat Bubble (Agent)
```tsx
<div className="bg-cream-50 rounded-lg px-4 py-3">
  <p className="text-sm text-charcoal-700">Agent response</p>
</div>
```

#### Loading Spinner
```tsx
<div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
```

#### Skeleton Loader
```tsx
<div className="animate-pulse space-y-3">
  <div className="h-4 bg-cream-200 rounded w-3/4" />
  <div className="h-4 bg-cream-200 rounded w-1/2" />
</div>
```

---

## Accessibility

### Keyboard Navigation

#### Focus Management
- All interactive elements must be keyboard-accessible with `tabIndex={0}`
- Use `onKeyDown` to handle Enter and Space key presses
- Provide visible focus indicators with `focus:ring-2 focus:ring-amber-500`

```tsx
<div
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  }}
  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
>
  {/* Content */}
</div>
```

#### Tab Order
- Logical tab order: Window chrome → Mock UI elements → Agent input
- Use `tabIndex={-1}` for decorative elements
- Skip links for long lists: `<a href="#main-content">Skip to content</a>`

### Screen Reader Support

#### ARIA Labels
```tsx
// Interactive element
<div
  role="button"
  aria-pressed={isSelected}
  aria-label="Select booking 123"
  tabIndex={0}
>
  {/* Content */}
</div>

// Loading state
<div
  role="status"
  aria-label="Loading data"
  aria-live="polite"
>
  <LoadingSpinner />
</div>

// Error message
<div
  role="alert"
  aria-live="assertive"
>
  {errorMessage}
</div>
```

#### Semantic HTML
- Use `<button>` for clickable actions, not `<div>` with `onClick`
- Use `<table>` for tabular data, not grid of divs
- Use `<form>` for input submission
- Use heading hierarchy: `<h2>`, `<h3>`, etc.

#### Live Regions
```tsx
// Announce responses to screen readers
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {latestResponse.response}
</div>
```

### Color Contrast

Ensure WCAG AA compliance (4.5:1 for normal text, 3:1 for large text):

- **Text on white**: `text-charcoal-700` (sufficient contrast)
- **Text on cream-50**: `text-charcoal-800` or darker
- **Links/CTAs**: `text-amber-600` (hover) / `text-amber-500` (default)
- **Status badges**: Test each color combo with contrast checker

### Focus Indicators

```tsx
// Custom focus style (consistent with brand)
<button className="
  px-4 py-2 bg-amber-500 text-white rounded-lg
  focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2
  transition-all
">
  Send
</button>
```

---

## Advanced Patterns

### Debounced Queries

For real-time search or filtering:

```tsx
import { useMemo, useCallback } from "react";
import { debounce } from "lodash"; // or custom implementation

function SearchableDemo() {
  const { sendQuery } = useMockUI();

  const debouncedQuery = useMemo(
    () =>
      debounce((query: string) => {
        sendQuery(query);
      }, 300),
    [sendQuery]
  );

  return (
    <input
      type="text"
      onChange={(e) => debouncedQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

### Undo/Redo State

```tsx
interface UndoableState<T> {
  past: T[];
  present: T;
  future: T[];
}

function undoableReducer<T>(
  state: UndoableState<T>,
  action: { type: "UNDO" | "REDO" | "SET"; payload?: T }
): UndoableState<T> {
  switch (action.type) {
    case "SET":
      return {
        past: [...state.past, state.present],
        present: action.payload!,
        future: []
      };
    case "UNDO":
      if (state.past.length === 0) return state;
      return {
        past: state.past.slice(0, -1),
        present: state.past[state.past.length - 1],
        future: [state.present, ...state.future]
      };
    case "REDO":
      if (state.future.length === 0) return state;
      return {
        past: [...state.past, state.present],
        present: state.future[0],
        future: state.future.slice(1)
      };
    default:
      return state;
  }
}
```

### Optimistic Updates

```tsx
const sendQueryOptimistic = async (query: string) => {
  // Show immediate UI update
  dispatch({
    type: "UPDATE_DATA",
    payload: { /* optimistic change */ }
  });

  try {
    const result = await queryHandler(query, state);
    // Confirm with real data
    dispatch({ type: "UPDATE_DATA", payload: result.dataUpdate });
  } catch (error) {
    // Rollback on error
    dispatch({ type: "UPDATE_DATA", payload: previousData });
    dispatch({ type: "SET_ERROR", payload: "Update failed" });
  }
};
```

---

## Testing Recommendations

### Unit Tests (Components)

```tsx
// Example: InteractiveElement.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { InteractiveElement } from "../InteractiveElement";
import { MockUIProvider } from "../MockUIContext";

test("highlights element on click", () => {
  render(
    <MockUIProvider initialData={{}} queryHandler={async () => ({ response: "" })}>
      <InteractiveElement id="test-element">
        <div>Test Content</div>
      </InteractiveElement>
    </MockUIProvider>
  );

  const element = screen.getByText("Test Content");
  fireEvent.click(element);

  expect(element.parentElement).toHaveClass("ring-2 ring-amber-500");
});
```

### Integration Tests (Query Handler)

```tsx
// Example: queries.test.ts
import { myDemoQueryHandler } from "../queries";
import { INITIAL_DATA } from "../data";

test("filters active items", async () => {
  const state = {
    data: INITIAL_DATA,
    selectedElements: [],
    responses: [],
    isLoading: false,
    error: null
  };

  const result = await myDemoQueryHandler("show active items", state);

  expect(result.response).toContain("active items");
  expect(result.highlight).toBe("item-list");
});
```

### E2E Tests (User Flows)

```tsx
// Example: Playwright test
import { test, expect } from "@playwright/test";

test("user can send query and receive response", async ({ page }) => {
  await page.goto("/");

  // Type query
  await page.fill('input[placeholder="Ask the agent..."]', "show active items");

  // Submit
  await page.click('button:has-text("Send")');

  // Verify response appears
  await expect(page.locator("text=Found 2 active items")).toBeVisible();
});
```

---

## Troubleshooting

### Common Issues

#### 1. "useMockUI must be used within MockUIProvider"

**Cause:** Component using `useMockUI()` hook is not wrapped in `<MockUIProvider>`

**Solution:**
```tsx
// ❌ Wrong
function MyDemo() {
  return <MyDemoContent />;
}

// ✅ Correct
function MyDemo() {
  return (
    <MockUIProvider initialData={INITIAL_DATA} queryHandler={myQueryHandler}>
      <MyDemoContent />
    </MockUIProvider>
  );
}
```

#### 2. Highlights not showing

**Cause:** Element ID mismatch between `highlight` return value and `<InteractiveElement id>`

**Solution:** Ensure exact ID match (case-sensitive)
```tsx
// Query handler
return { highlight: "booking-list" };

// Component
<InteractiveElement id="booking-list">
```

#### 3. State not updating after query

**Cause:** Missing `dispatch` call or incorrect action type

**Solution:** Verify reducer handles action type
```tsx
dispatch({ type: "UPDATE_DATA", payload: newData });
```

#### 4. TypeScript errors with generic types

**Cause:** Missing type parameter in `useMockUI<T>()`

**Solution:**
```tsx
// ❌ Wrong
const { state } = useMockUI();

// ✅ Correct
const { state } = useMockUI<MyDemoData>();
```

---

## Contributing

### Adding New Core Components

1. Create component in `src/components/mocks/core/`
2. Export from `src/components/mocks/core/index.ts`
3. Add TypeScript interfaces to `MockUIContext.tsx`
4. Update this documentation with usage examples
5. Add unit tests

### Demo-Specific Customizations

- Keep customizations in demo subdirectories
- Reuse core components when possible
- Extract reusable patterns to core if used in 2+ demos
- Document demo-specific quirks in demo's `README.md`

---

## Examples Gallery

See working demos:

- **Hotel PMS**: `src/components/mocks/hotel-pms/`
- **CRM**: `src/components/mocks/crm/`
- **Instagram**: `src/components/mocks/instagram/`
- **Notion**: `src/components/mocks/notion/`
- **Granola**: `src/components/mocks/granola/`

---

## Resources

- [React Context API](https://react.dev/reference/react/useContext)
- [useReducer Hook](https://react.dev/reference/react/useReducer)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated:** 2025-02-09  
**Version:** 1.0.0  
**Maintainers:** Agent School Team
