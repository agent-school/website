# Notion Task Database Interactive Demo

Interactive demo showcasing an AI agent managing tasks in a Notion-style database interface.

## Overview

This demo simulates a Notion task database with full CRUD operations, filtering, and natural language queries. Users can interact with the agent to add tasks, update statuses, filter by priority/assignee/due date, and more.

## File Structure

```
src/components/mocks/notion/
├── NotionDemo.tsx       # Main component with MockUIProvider
├── TaskTable.tsx        # Notion-style database table
├── queries.ts           # Natural language query handler
├── data.ts              # Mock data (28 sample tasks)
├── types.ts             # TypeScript interfaces
├── index.ts             # Barrel exports
└── README.md            # This file
```

## Components

### NotionDemo
Main component that wraps the entire demo. Sets up MockUIProvider and renders the shell with sidebar.

```tsx
import { NotionDemo } from "@/components/mocks/notion";

<NotionDemo />
```

### TaskTable
Notion-style table with inline editing appearance, status/priority badges, assignee avatars, and row selection.

**Features:**
- Checkbox selection
- Status badges (To Do, In Progress, Done)
- Priority badges (High, Medium, Low)
- Assignee avatars with initials
- Due date formatting with overdue highlighting
- Hover effects with pencil icon
- Dark mode support

## Agent Capabilities

### Task Creation
```
"Add task: Write blog post"
"Create task: Review PRs"
```
Creates a new task with default status (To Do), priority (Medium), and due date (+7 days).

### Status Updates
```
"Mark as complete"
"Mark 'Design mockups' as done"
```
Updates task status to Done. Works with selected tasks or task name.

### Priority Filtering
```
"Show high priority tasks"
"Medium priority"
"Low priority tasks"
```
Filters tasks by priority level.

### Status Filtering
```
"Show to do tasks"
"In progress tasks"
"Completed tasks"
```
Filters tasks by status.

### Due Date Filtering
```
"Tasks due this week"
"Overdue tasks"
"Past due"
```
Filters tasks by due date ranges.

### Assignee Operations
```
"Assign to Sarah"
"Tasks assigned to Marcus"
"Show David's tasks"
```
Assigns selected tasks or filters by assignee.

### General Search
```
"blog post"
"design"
```
Searches task names for matching text.

### Reset View
```
"Show all tasks"
"Reset"
```
Clears all filters and shows all tasks.

## Data Structure

### Task Interface
```typescript
interface Task {
  id: string;
  name: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "High" | "Medium" | "Low";
  assignee: Assignee;
  dueDate: string; // ISO date
  createdAt: string;
}
```

### Assignees
6 team members:
- Sarah Chen (SC)
- Marcus Rodriguez (MR)
- Emily Watson (EW)
- David Kim (DK)
- Olivia Martinez (OM)
- James Taylor (JT)

### Initial Dataset
28 sample tasks with realistic distribution:
- **Status:** 50% To Do, 30% In Progress, 20% Done
- **Priority:** 20% High, 50% Medium, 30% Low
- **Due dates:** Mix of overdue, current week, next week, and future

## Styling

### Color System
- **Status Colors:**
  - To Do: Gray (`slate-500`)
  - In Progress: Blue (`blue-600`)
  - Done: Green (`green-600`)

- **Priority Colors:**
  - High: Red (`red-700`)
  - Medium: Orange (`orange-700`)
  - Low: Gray (`slate-600`)

- **Assignee Avatars:** Teal-to-blue gradient

### Dark Mode
All components fully support dark mode with appropriate color adjustments.

### Visual Effects
- Row hover highlights
- Pencil icon on cell hover
- Smooth animations
- Overdue date highlighting (red text)
- Selection checkboxes

## Usage Example

```tsx
import { NotionDemo } from "@/components/mocks/notion";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-6">
      <NotionDemo />
    </div>
  );
}
```

## Test Page

Visit `/test-notion` to see the demo in action.

## Query Handler Logic

The query handler (`handleNotionQuery`) processes natural language queries through pattern matching:

1. **Keyword Detection:** Checks for command keywords (add, mark, assign, etc.)
2. **Entity Extraction:** Extracts task names, assignee names, priority levels
3. **Data Filtering:** Applies filters to task list based on criteria
4. **State Updates:** Returns data updates and highlights
5. **Response Generation:** Creates human-readable response messages

## Future Enhancements

Potential additions:
- Date picker for custom due dates
- Custom properties (tags, links, etc.)
- Sorting by column headers
- Batch operations (multi-select actions)
- Task dependencies
- Subtasks
- Comments/notes
- Export functionality

## Dependencies

- React 19
- Framer Motion (animations)
- Lucide React (icons)
- Tailwind CSS (styling)
- Next.js 16 (App Router)

## Related Demos

- Hotel PMS (`/mocks/hotel-pms`)
- CRM Pipeline (`/mocks/crm`)
- Instagram DM (`/mocks/instagram`)
- Granola Transcripts (`/mocks/granola`)
