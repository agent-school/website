import { type QueryResult } from "@/types/agent";
import { type MockUIState } from "@/types/mock-ui";
import { type HotelData } from "./types";

export async function handleHotelQuery(
  query: string,
  state: MockUIState<HotelData>
): Promise<QueryResult> {
  const data = state.data;
  const q = query.toLowerCase();

  // Arrivals query
  if (q.includes("arrival") || q.includes("check in") || q.includes("checking in")) {
    return {
      response: `There are ${data.stats.todayArrivals} arrivals scheduled for today. The guests are: ${data.reservations
        .filter(r => r.checkIn === "2026-02-09")
        .map(r => r.guestName)
        .join(", ")}.`,
      highlight: ["arrivals-card"],
    };
  }

  // Departures query
  if (q.includes("departure") || q.includes("check out") || q.includes("checking out")) {
    return {
      response: `There are ${data.stats.todayDepartures} departures scheduled for today. Guests checking out: ${data.reservations
        .filter(r => r.checkOut === "2026-02-09")
        .map(r => r.guestName)
        .join(", ")}.`,
      highlight: ["departures-card"],
    };
  }

  // Occupancy query
  if (q.includes("occupancy") || q.includes("occupancy rate")) {
    return {
      response: `Current occupancy rate is ${data.stats.occupancyRate}%. We have ${data.rooms.filter(r => r.status === "occupied").length} occupied rooms out of ${data.rooms.length} total rooms.`,
      highlight: ["occupancy-card"],
    };
  }

  // Revenue query
  if (q.includes("revenue") || q.includes("sales") || q.includes("income")) {
    return {
      response: `Today's revenue is $${data.stats.todayRevenue.toLocaleString()}. This includes all check-ins, room charges, and services.`,
      highlight: ["revenue-card"],
    };
  }

  // Available rooms query
  if (q.includes("available") || q.includes("vacant") || q.includes("empty")) {
    const availableRooms = data.rooms.filter(r => r.status === "available");
    return {
      response: `There are ${availableRooms.length} available rooms. Room numbers: ${availableRooms.slice(0, 10).map(r => r.number).join(", ")}${availableRooms.length > 10 ? ", and more..." : ""}.`,
      highlight: ["room-grid"],
    };
  }

  // Specific room query
  const roomMatch = q.match(/room\s*(\d{3})/);
  if (roomMatch) {
    const roomNumber = roomMatch[1];
    const room = data.rooms.find(r => r.number === roomNumber);
    if (room) {
      const statusText = room.status === "occupied" 
        ? `occupied by ${room.guestName}` 
        : room.status;
      return {
        response: `Room ${roomNumber} is currently ${statusText}. It's a ${room.type} room on floor ${room.floor}.`,
        highlight: [`room-${roomNumber}`],
      };
    }
    return {
      response: `Room ${roomNumber} not found in the system.`,
      highlight: [],
    };
  }

  // Guest name search
  const guestMatch = data.reservations.find(r => 
    r.guestName.toLowerCase().includes(q) || q.includes(r.guestName.toLowerCase())
  );
  if (guestMatch) {
    return {
      response: `${guestMatch.guestName} has a ${guestMatch.status} reservation in room ${guestMatch.roomNumber}. Check-in: ${guestMatch.checkIn}, Check-out: ${guestMatch.checkOut} (${guestMatch.nights} nights, $${guestMatch.totalAmount}).`,
      highlight: [`reservation-${guestMatch.id}`, `room-${guestMatch.roomNumber}`],
    };
  }

  // Cleaning/housekeeping query
  if (q.includes("cleaning") || q.includes("housekeeping")) {
    const cleaningRooms = data.rooms.filter(r => r.status === "cleaning");
    return {
      response: `There are ${cleaningRooms.length} rooms currently being cleaned. Room numbers: ${cleaningRooms.map(r => r.number).join(", ")}.`,
      highlight: ["room-grid"],
    };
  }

  // Default response
  return {
    response: "I can help you with arrivals, departures, occupancy rates, revenue, available rooms, specific room lookups, or guest searches. Try asking 'How many arrivals today?' or 'Show me room 305'.",
    highlight: [],
  };
}
