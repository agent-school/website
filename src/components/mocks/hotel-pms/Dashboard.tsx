"use client";

import { useMemo } from "react";
import { Users, LogOut, Home, DollarSign } from "lucide-react";

import { useMockUI } from "@/components/mocks/_framework/MockUIContext";
import { InteractiveElement } from "@/components/mocks/_framework/InteractiveElement";
import { DataDisplay } from "@/components/mocks/_framework/DataDisplay";
import { type HotelData, type Room } from "./types";

export function Dashboard() {
  const { state } = useMockUI<HotelData>();
  const data = state.data;
  const highlightedIds = state.selectedElements;

  const roomsByFloor = useMemo(() => {
    const floors: Record<number, Room[]> = {};
    data.rooms.forEach((room: Room) => {
      if (!floors[room.floor]) floors[room.floor] = [];
      floors[room.floor].push(room);
    });
    return floors;
  }, [data.rooms]);

  const upcomingReservations = useMemo(() => {
    return data.reservations
      .filter((r: typeof data.reservations[0]) => r.status === "confirmed" || r.status === "checked-in")
      .sort((a: typeof data.reservations[0], b: typeof data.reservations[0]) => a.checkIn.localeCompare(b.checkIn))
      .slice(0, 5);
  }, [data.reservations]);

  const getRoomStatusColor = (status: Room["status"]) => {
    switch (status) {
      case "available":
        return "bg-orange-500";
      case "occupied":
        return "bg-red-500";
      case "cleaning":
        return "bg-amber-500";
    }
  };

  return (
    <div className="space-y-3 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex-shrink-0">
        <h1 className="text-lg font-bold text-slate-900">
          Property Dashboard
        </h1>
        <p className="text-xs text-slate-600 mt-0.5">
          Grand Plaza Hotel • February 9, 2026
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <InteractiveElement
          id="arrivals-card"
          highlight={highlightedIds.includes("arrivals-card")}
        >
          <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-600">
                  Today's Arrivals
                </p>
                <p className="text-2xl font-bold text-slate-900 mt-0.5">
                  {data.stats.todayArrivals}
                </p>
              </div>
              <div className="bg-orange-100 p-2 rounded-lg">
                <Users className="w-4 h-4 text-orange-600" />
              </div>
            </div>
          </div>
        </InteractiveElement>

        <InteractiveElement
          id="departures-card"
          highlight={highlightedIds.includes("departures-card")}
        >
          <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-600">
                  Today's Departures
                </p>
                <p className="text-2xl font-bold text-slate-900 mt-0.5">
                  {data.stats.todayDepartures}
                </p>
              </div>
              <div className="bg-orange-100 p-2 rounded-lg">
                <LogOut className="w-4 h-4 text-orange-600" />
              </div>
            </div>
          </div>
        </InteractiveElement>

        <InteractiveElement
          id="occupancy-card"
          highlight={highlightedIds.includes("occupancy-card")}
        >
          <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-600">
                  Occupancy Rate
                </p>
                <p className="text-2xl font-bold text-slate-900 mt-0.5">
                  {data.stats.occupancyRate}%
                </p>
              </div>
              <div className="bg-purple-100 p-2 rounded-lg">
                <Home className="w-4 h-4 text-purple-600" />
              </div>
            </div>
          </div>
        </InteractiveElement>

        <InteractiveElement
          id="revenue-card"
          highlight={highlightedIds.includes("revenue-card")}
        >
          <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-600">
                  Today's Revenue
                </p>
                <p className="text-2xl font-bold text-slate-900 mt-0.5">
                  ${data.stats.todayRevenue.toLocaleString()}
                </p>
              </div>
              <div className="bg-green-100 p-2 rounded-lg">
                <DollarSign className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </div>
        </InteractiveElement>
      </div>

      {/* Room Grid */}
      <InteractiveElement
        id="room-grid"
        highlight={highlightedIds.includes("room-grid")}
      >
        <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-slate-900">
              Room Status
            </h2>
            <div className="flex gap-2 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-slate-600">Available</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-slate-600">Occupied</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-slate-600">Cleaning</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {Object.entries(roomsByFloor)
              .sort(([a], [b]) => Number(b) - Number(a))
              .slice(0, 3)
              .map(([floor, rooms]) => (
                <div key={floor}>
                  <p className="text-xs font-medium text-slate-500 mb-1">
                    Floor {floor}
                  </p>
                  <div className="grid grid-cols-10 gap-1.5">
                    {rooms.map(room => (
                      <InteractiveElement
                        key={room.number}
                        id={`room-${room.number}`}
                        highlight={highlightedIds.includes(`room-${room.number}`)}
                      >
                        <div
                          className={`
                            aspect-square rounded flex items-center justify-center
                            text-white text-[10px] font-medium cursor-pointer
                            hover:opacity-80 transition-opacity
                            ${getRoomStatusColor(room.status)}
                          `}
                          title={`Room ${room.number} - ${room.status}${room.guestName ? ` (${room.guestName})` : ""}`}
                        >
                          {room.number.slice(-2)}
                        </div>
                      </InteractiveElement>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </InteractiveElement>

      {/* Upcoming Reservations */}
      <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900 mb-2">
          Upcoming Reservations
        </h2>
        <DataDisplay
          columns={[
            { key: "id", label: "Reservation ID" },
            { key: "guestName", label: "Guest" },
            { key: "roomNumber", label: "Room" },
            { key: "checkIn", label: "Check-in" },
            { key: "checkOut", label: "Check-out" },
            { key: "nights", label: "Nights" },
            { key: "totalAmount", label: "Amount", render: (val: any) => `$${val}` },
          ]}
          data={upcomingReservations}
          highlightedRows={upcomingReservations
            .map((r, idx) => (highlightedIds.includes(`reservation-${r.id}`) ? idx : -1))
            .filter(idx => idx !== -1)
          }
        />
      </div>
    </div>
  );
}
