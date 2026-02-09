import { type HotelData, type Room, type Reservation } from "./types";

// Generate 50 rooms across 5 floors
const generateRooms = (): Room[] => {
  const rooms: Room[] = [];
  const statuses: Array<{ status: Room["status"]; weight: number }> = [
    { status: "occupied", weight: 0.6 },
    { status: "available", weight: 0.3 },
    { status: "cleaning", weight: 0.1 },
  ];

  const guestNames = [
    "Sarah Chen",
    "Michael Rodriguez",
    "Emma Thompson",
    "James Wilson",
    "Olivia Martinez",
    "David Kim",
    "Sophia Patel",
    "Daniel Brown",
    "Isabella Garcia",
    "Matthew Lee",
    "Ava Johnson",
    "Christopher Davis",
    "Mia Anderson",
    "Joshua Taylor",
    "Charlotte Moore",
  ];

  let guestIndex = 0;

  for (let floor = 1; floor <= 5; floor++) {
    for (let room = 1; room <= 10; room++) {
      const roomNumber = `${floor}0${room}`;
      const rand = Math.random();
      let cumulativeWeight = 0;
      let status: Room["status"] = "available";

      for (const s of statuses) {
        cumulativeWeight += s.weight;
        if (rand < cumulativeWeight) {
          status = s.status;
          break;
        }
      }

      const type: Room["type"] =
        room <= 6 ? "Standard" : room <= 8 ? "Deluxe" : "Suite";

      rooms.push({
        number: roomNumber,
        floor,
        type,
        status,
        guestName: status === "occupied" ? guestNames[guestIndex++ % guestNames.length] : undefined,
      });
    }
  }

  return rooms;
};

// Generate reservations
const reservations: Reservation[] = [
  {
    id: "RES001",
    guestName: "Sarah Chen",
    roomNumber: "305",
    checkIn: "2026-02-09",
    checkOut: "2026-02-12",
    status: "checked-in",
    nights: 3,
    totalAmount: 450,
  },
  {
    id: "RES002",
    guestName: "Michael Rodriguez",
    roomNumber: "412",
    checkIn: "2026-02-09",
    checkOut: "2026-02-11",
    status: "confirmed",
    nights: 2,
    totalAmount: 320,
  },
  {
    id: "RES003",
    guestName: "Emma Thompson",
    roomNumber: "208",
    checkIn: "2026-02-09",
    checkOut: "2026-02-14",
    status: "confirmed",
    nights: 5,
    totalAmount: 750,
  },
  {
    id: "RES004",
    guestName: "James Wilson",
    roomNumber: "501",
    checkIn: "2026-02-08",
    checkOut: "2026-02-09",
    status: "checked-in",
    nights: 1,
    totalAmount: 180,
  },
  {
    id: "RES005",
    guestName: "Olivia Martinez",
    roomNumber: "310",
    checkIn: "2026-02-10",
    checkOut: "2026-02-13",
    status: "confirmed",
    nights: 3,
    totalAmount: 540,
  },
  {
    id: "RES006",
    guestName: "David Kim",
    roomNumber: "215",
    checkIn: "2026-02-09",
    checkOut: "2026-02-15",
    status: "checked-in",
    nights: 6,
    totalAmount: 900,
  },
  {
    id: "RES007",
    guestName: "Sophia Patel",
    roomNumber: "109",
    checkIn: "2026-02-07",
    checkOut: "2026-02-09",
    status: "checked-in",
    nights: 2,
    totalAmount: 300,
  },
  {
    id: "RES008",
    guestName: "Daniel Brown",
    roomNumber: "403",
    checkIn: "2026-02-11",
    checkOut: "2026-02-14",
    status: "confirmed",
    nights: 3,
    totalAmount: 450,
  },
  {
    id: "RES009",
    guestName: "Isabella Garcia",
    roomNumber: "509",
    checkIn: "2026-02-09",
    checkOut: "2026-02-16",
    status: "confirmed",
    nights: 7,
    totalAmount: 1260,
  },
  {
    id: "RES010",
    guestName: "Matthew Lee",
    roomNumber: "204",
    checkIn: "2026-02-08",
    checkOut: "2026-02-09",
    status: "checked-out",
    nights: 1,
    totalAmount: 150,
  },
  {
    id: "RES011",
    guestName: "Ava Johnson",
    roomNumber: "308",
    checkIn: "2026-02-10",
    checkOut: "2026-02-12",
    status: "confirmed",
    nights: 2,
    totalAmount: 300,
  },
  {
    id: "RES012",
    guestName: "Christopher Davis",
    roomNumber: "506",
    checkIn: "2026-02-09",
    checkOut: "2026-02-11",
    status: "checked-in",
    nights: 2,
    totalAmount: 360,
  },
  {
    id: "RES013",
    guestName: "Mia Anderson",
    roomNumber: "102",
    checkIn: "2026-02-11",
    checkOut: "2026-02-13",
    status: "confirmed",
    nights: 2,
    totalAmount: 280,
  },
  {
    id: "RES014",
    guestName: "Joshua Taylor",
    roomNumber: "407",
    checkIn: "2026-02-09",
    checkOut: "2026-02-10",
    status: "confirmed",
    nights: 1,
    totalAmount: 160,
  },
  {
    id: "RES015",
    guestName: "Charlotte Moore",
    roomNumber: "210",
    checkIn: "2026-02-12",
    checkOut: "2026-02-15",
    status: "confirmed",
    nights: 3,
    totalAmount: 450,
  },
];

// Calculate stats
const today = "2026-02-09";
const todayArrivals = reservations.filter(r => r.checkIn === today).length;
const todayDepartures = reservations.filter(r => r.checkOut === today).length;

export const initialHotelData: HotelData = {
  rooms: generateRooms(),
  reservations,
  stats: {
    todayArrivals,
    todayDepartures,
    occupancyRate: 68,
    todayRevenue: 12450,
  },
};
