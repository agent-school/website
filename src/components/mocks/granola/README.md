# Granola Meeting Transcript Demo

Interactive meeting transcript analysis demo showcasing AI agent capabilities for meeting note automation.

## Features

### UI Components
- **TranscriptView**: Split-panel layout with transcript (left) and AI-generated panels (right)
- **Speaker Labels**: Color-coded speakers (Teal, Orange, Purple) for easy scanning
- **Timestamps**: Minute-by-minute timestamps throughout transcript
- **Summary Panel**: AI-generated overview and key points
- **Action Items Panel**: Extracted tasks with owners and due dates
- **Decisions Panel**: Key decisions with context

### Agent Capabilities
1. **Summarization**: "Summarize this meeting" → Shows AI summary panel
2. **Action Item Extraction**: "What are the action items?" → Displays all tasks
3. **Decision Tracking**: "What decisions were made?" → Shows key decisions
4. **Topic Search**: "Show me budget discussions" → Highlights budget segments
5. **Speaker Search**: "What did Marcus say?" → Highlights speaker's segments
6. **Timeline Queries**: "When is the launch?" → Shows timeline discussions
7. **Risk Analysis**: "What risks were discussed?" → Highlights risk mitigation
8. **Note Generation**: "Generate meeting notes" → Shows all panels

## File Structure

```
granola/
├── GranolaDemo.tsx      # Main component with MockUIProvider
├── TranscriptView.tsx   # Transcript + summary panels UI
├── queries.ts           # Query handler with NLP matching
├── data.ts              # Mock meeting transcript data
├── types.ts             # TypeScript interfaces
├── index.ts             # Public exports
└── README.md            # This file
```

## Usage

```tsx
import { GranolaDemo } from "@/components/mocks/granola";

export default function Page() {
  return <GranolaDemo />;
}
```

## Demo Data

Mock meeting: Product launch planning discussion (5 minutes)
- 3 speakers (Sarah Chen, Marcus Rodriguez, Aisha Patel)
- Topics: timeline, budget, responsibilities, risks
- 7 action items, 5 key decisions
- Budget: $180K total allocation
- Launch date: April 15th, 2026

## Suggested Queries

- "Summarize this meeting"
- "What are the action items?"
- "Show me budget discussions"
- "What did Marcus say?"
- "Generate meeting notes"
- "What are the key decisions?"
- "What risks were discussed?"
- "When is the launch?"

## Design System

### Colors
- **Teal**: Speaker 1 (Sarah Chen) - bg-teal-100/900
- **Orange**: Speaker 2 (Marcus Rodriguez) - bg-orange-100/900
- **Purple**: Speaker 3 (Aisha Patel) - bg-purple-100/900
- **Slate**: Background and text - slate-50 to slate-900

### Layout
- Transcript: Full height, scrollable, 60% width
- Summary Panels: Conditional display, 40% width, right side
- Agent Interface: Integrated in sidebar via MockUIShell

## Interactive Elements

All transcript segments and panel sections are wrapped in `InteractiveElement` for highlight animations when agent references them.
