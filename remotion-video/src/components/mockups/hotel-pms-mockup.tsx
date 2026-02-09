import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { motion } from "framer-motion";
import { Calendar, Users, Bed, Clock, DollarSign } from "lucide-react";
import { BorderBeam } from "@/components/magic-ui/border-beam";
import { cn } from "@/lib/utils";

interface HotelPMSMockupProps {
  showError?: boolean;
  scale?: number;
  className?: string;
}

export function HotelPMSMockup({ showError = false, scale = 1, className }: HotelPMSMockupProps) {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const rooms = [
    { number: "101", type: "Deluxe King", status: "occupied", guest: "Smith, J.", checkout: "Today 11 AM" },
    { number: "102", type: "Standard Queen", status: "cleaning", guest: "-", checkout: "-" },
    { number: "103", type: "Suite", status: "available", guest: "-", checkout: "-" },
    { number: "104", type: "Deluxe King", status: "occupied", guest: "Chen, M.", checkout: "Tomorrow" },
    { number: "201", type: "Standard Queen", status: "available", guest: "-", checkout: "-" },
    { number: "202", type: "Suite", status: "occupied", guest: "Johnson, R.", checkout: "Feb 12" },
  ];

  const reservations = [
    { id: "R-3421", guest: "Williams, A.", checkin: "Today 3 PM", nights: 3, status: "confirmed" },
    { id: "R-3422", guest: "Brown, K.", checkin: "Today 5 PM", nights: 2, status: "pending" },
    { id: "R-3423", guest: "Davis, L.", checkin: "Tomorrow", nights: 5, status: "confirmed" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "occupied": return "bg-red-500";
      case "cleaning": return "bg-yellow-500";
      case "available": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getReservationStatusColor = (status: string) => {
    return status === "confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700";
  };

  return (
    <div
      className={cn("relative", className)}
      style={{
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      {/* Browser Chrome */}
      <div className="bg-gray-100 rounded-t-lg px-4 py-2 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-300" />
          <div className="w-3 h-3 rounded-full bg-yellow-300" />
          <div className="w-3 h-3 rounded-full bg-green-300" />
        </div>
        <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
          https://pms.grandhotel.com/dashboard
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-lg relative overflow-hidden">
        <BorderBeam size={250} duration={12} colorFrom="#6631D7" colorTo="#D946EF" />

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-xl">Grand Hotel PMS</h1>
            <p className="text-purple-200 text-sm">Property Management Dashboard</p>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-white text-2xl font-bold">78%</div>
              <div className="text-purple-200 text-xs">Occupancy</div>
            </div>
            <div className="text-center">
              <div className="text-white text-2xl font-bold">23</div>
              <div className="text-purple-200 text-xs">Check-ins Today</div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-4 p-6">
          {/* Left: Room Status Grid */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bed className="w-5 h-5 text-purple-600" />
              <h2 className="font-bold text-lg text-gray-900">Room Status</h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {rooms.map((room) => (
                <motion.div
                  key={room.number}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: parseFloat(room.number) * 0.01 }}
                  className={cn(
                    "glassmorphism-purple border border-purple-200 rounded-lg p-3",
                    "hover:border-purple-400 transition-all cursor-pointer"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">{room.number}</span>
                    <div className={cn("w-2 h-2 rounded-full", getStatusColor(room.status))} />
                  </div>
                  <div className="text-xs text-gray-600 mb-1">{room.type}</div>
                  {room.guest !== "-" && (
                    <>
                      <div className="text-xs font-medium text-gray-800">{room.guest}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" />
                        {room.checkout}
                      </div>
                    </>
                  )}
                  {room.guest === "-" && (
                    <div className="text-xs text-gray-400 capitalize">{room.status}</div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-gray-600">Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-gray-600">Occupied</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="text-gray-600">Cleaning</span>
              </div>
            </div>
          </div>

          {/* Right: Reservations Queue */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-purple-600" />
              <h2 className="font-bold text-lg text-gray-900">Today's Arrivals</h2>
            </div>

            <div className="space-y-3">
              {reservations.map((reservation, index) => (
                <motion.div
                  key={reservation.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glassmorphism-purple border border-purple-200 rounded-lg p-4 hover:border-purple-400 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold text-gray-900">{reservation.guest}</div>
                      <div className="text-xs text-gray-500">{reservation.id}</div>
                    </div>
                    <span className={cn(
                      "px-2 py-1 rounded text-xs font-medium",
                      getReservationStatusColor(reservation.status)
                    )}>
                      {reservation.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Clock className="w-3 h-3" />
                      {reservation.checkin}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Bed className="w-3 h-3" />
                      {reservation.nights} nights
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="glassmorphism-purple border border-purple-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-600">$12,450</div>
                <div className="text-xs text-gray-600">Today's Revenue</div>
              </div>
              <div className="glassmorphism-purple border border-purple-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-600">15</div>
                <div className="text-xs text-gray-600">Check-outs Today</div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Overlay */}
        {showError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-red-500/10 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md border-2 border-red-500">
              <div className="text-5xl mb-4 text-center">⚠️</div>
              <h3 className="text-xl font-bold text-red-600 mb-2 text-center">RPA Script Failed</h3>
              <p className="text-gray-700 text-sm text-center mb-4">
                Element '#room-grid-item-101' not found. UI structure changed in v4.2 update.
              </p>
              <div className="bg-red-50 rounded p-3 font-mono text-xs text-red-800">
                TypeError: Cannot read property 'click' of null
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
