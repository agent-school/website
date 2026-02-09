# Hotel PMS Interactive Demo

Fully interactive Property Management System (PMS) demo for Agent School, showcasing how AI agents can automate hotel operations.

## 📁 File Structure

```
hotel-pms/
├── HotelPMSDemo.tsx       # Main component (Provider + Shell wrapper)
├── Dashboard.tsx          # Dashboard UI (stats, room grid, reservations)
├── queries.ts             # Natural language query handler
├── data.ts                # Mock hotel data (50 rooms, 15 reservations)
├── types.ts               # TypeScript interfaces
├── index.ts               # Public exports
└── README.md              # This file
```

## 🎯 Features

### Dashboard Components
1. **Stats Cards** - Today's arrivals, departures, occupancy rate, revenue
2. **Room Grid** - Visual status grid (50 rooms across 5 floors)
   - Green: Available
   - Red: Occupied
   - Yellow: Cleaning
3. **Reservations Table** - Upcoming check-ins/check-outs with guest details

### Agent Capabilities
The agent can answer queries about:
- **Arrivals**: "How many arrivals today?" → Highlights arrivals card
- **Departures**: "Show departures" → Highlights departures card
- **Occupancy**: "What's our occupancy rate?" → Highlights occupancy card
- **Revenue**: "Today's revenue" → Highlights revenue card
- **Room Availability**: "Show available rooms" → Highlights room grid
- **Specific Rooms**: "Show room 305" → Highlights specific room
- **Guest Search**: "Find Sarah Chen" → Highlights guest's reservation and room
- **Housekeeping**: "Which rooms are being cleaned?" → Shows cleaning status

## 🏗️ Architecture

### Component Hierarchy
```
<HotelPMSDemo>
  <MockUIProvider>              # State management (from framework)
    <HotelPMSContent>
      <MockUIShell>             # Window chrome (from framework)
        <Dashboard>             # Main content
        <AgentInterface>        # Chat sidebar (from framework)
      </MockUIShell>
    </HotelPMSContent>
  </MockUIProvider>
</HotelPMSDemo>
```

### State Management
- Uses `MockUIProvider` from `_framework/MockUIContext`
- State includes:
  - `data`: HotelData (rooms, reservations, stats)
  - `selectedElements`: Array of highlighted element IDs
  - `responses`: Chat history (user queries + agent responses)
  - `isLoading`: Agent processing state

### Query Flow
1. User types query in AgentInterface
2. `sendQuery()` dispatches to MockUIProvider
3. Provider calls `handleHotelQuery(query, state)`
4. Query handler returns `QueryResult` with:
   - `response`: Text answer
   - `highlight`: Element IDs to highlight (e.g., `["arrivals-card"]`)
   - `dataUpdate`: Optional data mutations (not used in current version)
5. Provider updates state with response and highlights
6. Dashboard re-renders with highlighted elements

## 📊 Data Model

### HotelData
```typescript
{
  rooms: Room[];          // 50 rooms with status and guest info
  reservations: Reservation[];  // 15 reservations
  stats: Stats;           // Aggregated metrics
}
```

### Room
```typescript
{
  number: string;         // "305"
  floor: number;          // 3
  type: "Standard" | "Deluxe" | "Suite";
  status: "available" | "occupied" | "cleaning";
  guestName?: string;     // Only for occupied rooms
}
```

### Reservation
```typescript
{
  id: string;             // "RES001"
  guestName: string;
  roomNumber: string;
  checkIn: string;        // "2026-02-09"
  checkOut: string;
  status: "confirmed" | "checked-in" | "checked-out" | "cancelled";
  nights: number;
  totalAmount: number;
}
```

## 🎨 Styling

### Color Scheme
- **Teal** (`teal-600`): Primary brand color (cards, highlights)
- **Orange** (`orange-500`): Accent color (gradients, CTAs)
- **Slate** (50-950): Neutral backgrounds and text
- **Room Status Colors**:
  - Available: `teal-500`
  - Occupied: `red-500`
  - Cleaning: `amber-500`

### Dark Mode
Full dark mode support using Tailwind's `dark:` variants. Auto-detects system preference via `ThemeProvider`.

### Responsive Design
- Mobile: Stacked layout, single-column grid
- Tablet: 2-column stats, partial room grid
- Desktop: Full layout with agent sidebar

## 🧪 Usage Examples

### Import and Use
```tsx
import { HotelPMSDemo } from "@/components/mocks/hotel-pms";

export default function DemoPage() {
  return (
    <div className="h-screen p-6">
      <HotelPMSDemo />
    </div>
  );
}
```

### Access Demo Page
Navigate to: `/demos/hotel-pms`

### Example Queries
```
"How many arrivals today?"
→ Response: "There are 4 arrivals scheduled for today..."
→ Highlights: arrivals-card

"Show me available rooms"
→ Response: "There are 15 available rooms..."
→ Highlights: room-grid

"What's our occupancy rate?"
→ Response: "Current occupancy rate is 68%..."
→ Highlights: occupancy-card

"Show room 305"
→ Response: "Room 305 is currently occupied by Sarah Chen..."
→ Highlights: room-305

"Find Sarah Chen"
→ Response: "Sarah Chen has a checked-in reservation in room 305..."
→ Highlights: reservation-RES001, room-305
```

## 🔧 Extending the Demo

### Adding New Query Patterns
Edit `queries.ts`:

```typescript
// Add new pattern
if (q.includes("your pattern")) {
  return {
    response: "Your response text",
    highlight: ["element-id-to-highlight"],
  };
}
```

### Adding New Stats
1. Update `Stats` interface in `types.ts`
2. Add data to `initialHotelData.stats` in `data.ts`
3. Create new card in `Dashboard.tsx`

### Adding Data Mutations
```typescript
// In queries.ts
return {
  response: "Room marked as cleaning",
  highlight: ["room-305"],
  dataUpdate: {
    rooms: data.rooms.map(r =>
      r.number === "305" ? { ...r, status: "cleaning" } : r
    ),
  },
};
```

## 🐛 Troubleshooting

### Highlights Not Working
- Ensure element has correct `id` prop
- Check that ID matches string in `highlight` array
- Verify `InteractiveElement` wrapper is present

### Agent Not Responding
- Check console for errors
- Verify `handleHotelQuery` is async and returns `Promise<QueryResult>`
- Ensure query pattern matches in `queries.ts`

### TypeScript Errors
- Run `npx tsc --noEmit` to check for type errors
- Verify all types are imported from `@/types/agent` and `@/types/mock-ui`
- Check that data structure matches `HotelData` interface

## 📝 TODO / Future Enhancements

- [ ] Add room type filtering (Standard/Deluxe/Suite)
- [ ] Implement date range queries ("bookings this week")
- [ ] Add guest profile modal on name click
- [ ] Support data mutations (check-in/check-out actions)
- [ ] Add booking creation flow
- [ ] Revenue breakdown by room type
- [ ] Occupancy trend chart
- [ ] Export reservation list
- [ ] Multi-language support for guest names
- [ ] Integration with calendar view

## 📚 Related Files

- **Framework**: `src/components/mocks/_framework/`
  - `MockUIContext.tsx` - State management
  - `MockUIShell.tsx` - Window chrome
  - `AgentInterface.tsx` - Chat UI
  - `InteractiveElement.tsx` - Highlight wrapper
  - `DataDisplay.tsx` - Table component

- **Types**: `src/types/`
  - `agent.ts` - QueryResult, AgentMessage
  - `mock-ui.ts` - MockUIState, QueryHandler

- **Demo Page**: `src/app/demos/hotel-pms/page.tsx`

## 🎓 Learning Resources

- [Mock UI Framework Guide](../\_framework/MOCK_UI_FRAMEWORK.md)
- [Design System](../../../../DESIGN_SYSTEM.md)
- [Components Guide](../../../../COMPONENTS_GUIDE.md)
- [Redesign Roadmap](../../../../REDESIGN_ROADMAP.md)
