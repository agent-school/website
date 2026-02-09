export type RoomStatus = "available" | "occupied" | "cleaning";

export interface Room {
  number: string;
  floor: number;
  type: "Standard" | "Deluxe" | "Suite";
  status: RoomStatus;
  guestName?: string;
}

export interface Reservation {
  id: string;
  guestName: string;
  roomNumber: string;
  checkIn: string;
  checkOut: string;
  status: "confirmed" | "checked-in" | "checked-out" | "cancelled";
  nights: number;
  totalAmount: number;
}

export interface Stats {
  todayArrivals: number;
  todayDepartures: number;
  occupancyRate: number;
  todayRevenue: number;
}

export interface HotelData {
  rooms: Room[];
  reservations: Reservation[];
  stats: Stats;
}
