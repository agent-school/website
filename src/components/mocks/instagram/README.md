# Instagram DM Categorization Demo

Interactive demo showcasing an AI agent that categorizes and manages Instagram direct messages.

## Features

- **DM List View**: Instagram-style conversation list with avatars, previews, and timestamps
- **Conversation Thread**: View full message history with bubble UI
- **Category System**: Support, Sales, Spam, General
- **Unread Tracking**: Badge indicators for unread message counts
- **Agent Queries**: Natural language commands to filter, search, and manage messages

## Files

- `InstagramDemo.tsx` - Main component with provider setup
- `DMList.tsx` - Instagram UI (conversation list + thread view)
- `queries.ts` - Agent query handler
- `data.ts` - Mock conversation data (20 conversations)
- `types.ts` - TypeScript interfaces
- `index.ts` - Public exports

## Usage

```tsx
import { InstagramDemo } from "@/components/mocks/instagram";

export default function Page() {
  return <InstagramDemo />;
}
```

## Agent Queries

### Category Filtering
- "Show me support requests" - Filter to Support category
- "Show sales inquiries" - Filter to Sales category
- "Filter by spam" - Show spam messages
- "Show general messages" - Show general conversations

### Unread Messages
- "How many unread messages?" - Count total unread
- "Show unread" - Filter to unread conversations

### Search & Actions
- "Find sarah" - Search by username
- "Reply to john" - Open conversation with user
- "Mark crypto as spam" - Categorize as spam
- "Show all conversations" - Reset filters

### Analytics
- "Statistics" or "Breakdown" - Show category distribution

## Data Structure

```typescript
interface Conversation {
  id: string;
  username: string;
  avatar: string;          // Initials for gradient avatar
  preview: string;         // Last message preview
  timestamp: Date;
  unread: number;
  category: Category;      // Support | Sales | Spam | General
  messages: Message[];
}
```

## Styling

- **Teal/Orange gradient**: Brand colors from design system
- **Purple accents**: Instagram-inspired (mixed with teal)
- **Category badges**:
  - Support: Blue
  - Sales: Green
  - Spam: Red
  - General: Gray
- **Dark mode**: Full support via Tailwind dark: variants

## Mock Data

20 realistic conversations:
- 40% Support (8 conversations)
- 30% Sales (6 conversations)
- 20% Spam (4 conversations)
- 10% General (2 conversations)

## Interactive Elements

All conversations are wrapped in `InteractiveElement` to:
- Show pulsing glow when highlighted by agent
- Support click-to-select
- Animate on interaction
