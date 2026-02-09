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
      .slice(0, 8);
  }, [data.reservations]);

  const getRoomStatusColor = (status: Room["status"]) => {
    switch (status) {
      case "available":
        return "bg-teal-500 dark:bg-teal-600";
      case "occupied":
        return "bg-red-500 dark:bg-red-600";
      case "cleaning":
        return "bg-amber-500 dark:bg-amber-600";
    }
  };

  return (
    <div className="p-6 space-y-6 bg-slate-50 dark:bg-slate-900 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Property Dashboard
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Grand Plaza Hotel • February 9, 2026
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <InteractiveElement
          id="arrivals-card"
          highlight={highlightedIds.includes("arrivals-card")}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Today's Arrivals
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {data.stats.todayArrivals}
                </p>
              </div>
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg">
                <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
            </div>
          </div>
        </InteractiveElement>

        <InteractiveElement
          id="departures-card"
          highlight={highlightedIds.includes("departures-card")}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Today's Departures
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {data.stats.todayDepartures}
                </p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                <LogOut className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>
        </InteractiveElement>

        <InteractiveElement
          id="occupancy-card"
          highlight={highlightedIds.includes("occupancy-card")}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Occupancy Rate
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {data.stats.occupancyRate}%
                </p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                <Home className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </InteractiveElement>

        <InteractiveElement
          id="revenue-card"
          highlight={highlightedIds.includes("revenue-card")}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Today's Revenue
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  ${data.stats.todayRevenue.toLocaleString()}
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
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
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Room Status
            </h2>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-teal-500" />
                <span className="text-slate-600 dark:text-slate-400">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-slate-600 dark:text-slate-400">Occupied</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-slate-600 dark:text-slate-400">Cleaning</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(roomsByFloor)
              .sort(([a], [b]) => Number(b) - Number(a))
              .map(([floor, rooms]) => (
                <div key={floor}>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                    Floor {floor}
                  </p>
                  <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                    {rooms.map(room => (
                      <InteractiveElement
                        key={room.number}
                        id={`room-${room.number}`}
                        highlight={highlightedIds.includes(`room-${room.number}`)}
                      >
                        <div
                          className={`
                            aspect-square rounded-md flex items-center justify-center
                            text-white text-xs font-medium cursor-pointer
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
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
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
