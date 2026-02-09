# CRM (Sales Pipeline) Interactive Demo

Interactive Kanban-style sales pipeline CRM demo for Agent School website.

## Overview

A fully functional CRM pipeline visualization showing 33 deals across 5 stages (Lead → Qualified → Proposal → Negotiation → Won). Users can query the pipeline using natural language through the agent interface.

## Files

- **`CRMDemo.tsx`** - Main component with MockUIProvider wrapper
- **`Pipeline.tsx`** - Kanban board UI with 5 columns and deal cards
- **`queries.ts`** - Natural language query handler with 12+ query patterns
- **`data.ts`** - Mock pipeline data generator (33 deals with random companies/contacts/values)
- **`types.ts`** - TypeScript interfaces for Deal, Stage, CRMState
- **`index.ts`** - Barrel export file

## Features

### Visual Design
- **5-column Kanban board**: Lead, Qualified, Proposal, Negotiation, Won
- **Deal cards** with:
  - Company name
  - Deal value (formatted as $XK or $XM)
  - Contact person
  - Expected close date
  - Priority indicator (high-priority deals have orange left border)
- **Column headers** with:
  - Stage name
  - Deal count
  - Total value in that stage
- **Color coding**: Each stage has unique teal/orange shade from design system
- **Highlight effects**: 
  - Selected deals get teal ring + shadow
  - Highlighted stages get outer ring
- **Responsive**: Horizontal scroll on mobile

### Agent Queries

The demo supports 12+ natural language query patterns:

#### Stage-based filtering
- "Show me proposal deals" → Highlights Proposal column + all deals
- "What's in negotiation?" → Highlights Negotiation column
- "Show me won deals" → Highlights Won column
- "Show qualified leads" → Highlights Qualified column
- "Show me new leads" → Highlights Lead column

#### Value-based filtering
- "Show deals over $100k" → Filters and highlights deals above threshold
- "Show deals under $50k" → Filters and highlights deals below threshold
- "Deals over 200k" → Works with or without "k" suffix

#### Pipeline analytics
- "What's the total pipeline value?" → Shows sum across all deals
- "What's the average deal size?" → Calculates and displays average

#### Company search
- "Show me Acme Corp" → Finds and highlights specific company deal
- Works with any company name in the pipeline

#### Priority filtering
- "Show high-priority deals" → Filters deals with priority = "high"

#### Stage transitions (simulation)
- "Move deal to negotiation" → Simulates moving a sample deal to target stage

### Mock Data

Generated data includes:
- **33 total deals** distributed across stages:
  - Lead: 10 deals
  - Qualified: 8 deals
  - Proposal: 6 deals
  - Negotiation: 4 deals
  - Won: 5 deals
- **Deal values**: $10K - $500K range
- **Priority levels**: Automatically assigned based on value
  - High: > $200K
  - Medium: $100K - $200K
  - Low: < $100K
- **Expected close dates**: Vary by stage (leads: 60-120 days, negotiation: 14-30 days)
- **Realistic company names**: 29 companies from tech, sci-fi, and business culture
- **Contact names**: 30 diverse first/last name combinations

### State Management

Uses MockUIContext with CRMState:
```typescript
interface CRMState {
  highlightedStage: DealStage | null;      // Currently highlighted stage
  highlightedDeals: string[];              // Array of deal IDs to highlight
  filterValue: number | null;              // Value threshold for filtering
  movingDeal: MoveDealState | null;        // Deal being moved (animation)
}
```

## Usage

```tsx
import { CRMDemo } from "@/components/mocks/crm";

export default function Page() {
  return <CRMDemo />;
}
```

## Demo Page

Visit `/demos/crm` to see the live demo.

## Query Examples

Try these queries in the agent interface:
- "Show me proposal deals"
- "What's the total pipeline value?"
- "Show deals over $100k"
- "What's in negotiation?"
- "Show me won deals"
- "Show high-priority deals"
- "What's the average deal size?"
- "Show deals under $50k"
- "Find Acme Corp"

## Design System

### Colors (from DESIGN_SYSTEM.md)
- **Teal** (primary): `#14b8a6` to `#134e4a`
- **Orange** (accent): `#fb923c` to `#ea580c`
- **Slate** (neutrals): 50-950 scale for light/dark modes

### Stage Colors
Each stage has unique background/border/text colors:
- **Lead**: Slate (neutral gray)
- **Qualified**: Teal (brand primary)
- **Proposal**: Blue (information)
- **Negotiation**: Orange (warm urgency)
- **Won**: Emerald (success green)

### Typography
- **Company names**: Semibold, slate-900/100
- **Values**: Font-mono, bold (emphasize data)
- **Stage labels**: Uppercase, tracking-wide
- **Contact/date**: Small text, slate-600/400

## Architecture

Built on the **Mock UI Framework** (`/mocks/_framework/`):
- **MockUIProvider** - State management
- **MockUIShell** - Window chrome wrapper
- **AgentInterface** - Chat sidebar
- **InteractiveElement** - Clickable/highlightable wrapper

## Future Enhancements

Potential additions:
- Drag-and-drop deal movement between stages
- Filter by contact, expected close date, or priority
- Sort deals within columns (by value, date, etc.)
- Deal detail modal on click
- Pipeline metrics dashboard (conversion rates, avg days in stage)
- Multi-select deals for batch operations
- Historical pipeline snapshots (time-travel view)
