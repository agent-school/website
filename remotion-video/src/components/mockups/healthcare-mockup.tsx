import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { motion } from "framer-motion";
import { Heart, Activity, Pill, FileText, AlertTriangle, User } from "lucide-react";
import { BorderBeam } from "@/components/magic-ui/border-beam";
import { cn } from "@/lib/utils";

interface HealthcareMockupProps {
  showError?: boolean;
  scale?: number;
  className?: string;
}

export function HealthcareMockup({ showError = false, scale = 1, className }: HealthcareMockupProps) {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const vitals = [
    { label: "Heart Rate", value: "72", unit: "bpm", icon: Heart, status: "normal" },
    { label: "Blood Pressure", value: "120/80", unit: "mmHg", icon: Activity, status: "normal" },
    { label: "Temperature", value: "98.6", unit: "°F", icon: Activity, status: "normal" },
    { label: "O₂ Saturation", value: "98", unit: "%", icon: Activity, status: "normal" },
  ];

  const medications = [
    { name: "Lisinopril 10mg", dosage: "1 tablet daily", status: "active", refills: 3 },
    { name: "Metformin 500mg", dosage: "2 tablets twice daily", status: "active", refills: 2 },
    { name: "Aspirin 81mg", dosage: "1 tablet daily", status: "active", refills: 5 },
  ];

  const timeline = [
    { date: "Feb 9, 2026", event: "Annual Physical Exam", provider: "Dr. Smith", type: "appointment" },
    { date: "Jan 15, 2026", event: "Lab Results: All Normal", provider: "Quest Diagnostics", type: "lab" },
    { date: "Dec 20, 2025", event: "Prescription Refill", provider: "CVS Pharmacy", type: "prescription" },
    { date: "Nov 5, 2025", event: "Follow-up Visit", provider: "Dr. Smith", type: "appointment" },
  ];

  const getVitalStatus = (status: string) => {
    return status === "normal" ? "text-green-600" : "text-red-600";
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "appointment": return "📅";
      case "lab": return "🔬";
      case "prescription": return "💊";
      default: return "📋";
    }
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
          https://ehr.medicalcenter.org/patient/chart
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-lg relative overflow-hidden">
        <BorderBeam size={250} duration={12} colorFrom="#D946EF" colorTo="#A855F7" />

        {/* Header */}
        <div className="bg-gradient-to-r from-fuchsia-600 to-purple-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white font-bold text-xl">Electronic Health Records</h1>
              <p className="text-fuchsia-100 text-sm">Patient Medical Chart</p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg">
              <User className="w-5 h-5 text-white" />
              <div>
                <div className="text-white font-bold">Johnson, Sarah M.</div>
                <div className="text-fuchsia-100 text-xs">DOB: 03/15/1982 • MRN: 94521</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="p-6 space-y-6">
          {/* Vital Signs */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-fuchsia-600" />
              <h2 className="font-bold text-lg text-gray-900">Current Vital Signs</h2>
              <span className="text-xs text-gray-500 ml-auto">Last updated: 10:24 AM</span>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {vitals.map((vital, index) => {
                const Icon = vital.icon;
                return (
                  <motion.div
                    key={vital.label}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="glassmorphism-magenta border border-fuchsia-200 rounded-lg p-4 text-center"
                  >
                    <Icon className={cn("w-6 h-6 mx-auto mb-2", getVitalStatus(vital.status))} />
                    <div className="text-2xl font-bold text-gray-900">{vital.value}</div>
                    <div className="text-xs text-gray-500">{vital.unit}</div>
                    <div className="text-xs font-medium text-gray-700 mt-1">{vital.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Two Column: Medications + Timeline */}
          <div className="grid grid-cols-2 gap-6">
            {/* Active Medications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Pill className="w-5 h-5 text-fuchsia-600" />
                <h2 className="font-bold text-lg text-gray-900">Active Medications</h2>
              </div>

              <div className="space-y-3">
                {medications.map((med, index) => (
                  <motion.div
                    key={med.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="glassmorphism-magenta border border-fuchsia-200 rounded-lg p-4 hover:border-fuchsia-400 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-bold text-gray-900">{med.name}</div>
                        <div className="text-sm text-gray-600">{med.dosage}</div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                        {med.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {med.refills} refills remaining
                    </div>
                  </motion.div>
                ))}

                <button className="w-full py-2 border-2 border-dashed border-fuchsia-300 text-fuchsia-600 rounded-lg text-sm font-medium hover:bg-fuchsia-50 transition-colors">
                  + Add Medication
                </button>
              </div>
            </div>

            {/* Medical History Timeline */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-fuchsia-600" />
                <h2 className="font-bold text-lg text-gray-900">Recent History</h2>
              </div>

              <div className="space-y-3">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08 + 0.5 }}
                    className="glassmorphism-magenta border border-fuchsia-200 rounded-lg p-3 hover:border-fuchsia-400 transition-all relative pl-10"
                  >
                    <div className="absolute left-3 top-3 text-xl">
                      {getEventIcon(item.type)}
                    </div>
                    <div className="text-xs text-gray-500 mb-1">{item.date}</div>
                    <div className="font-medium text-gray-900">{item.event}</div>
                    <div className="text-xs text-gray-600 mt-1">{item.provider}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="grid grid-cols-4 gap-3">
            <button className="glassmorphism-magenta border border-fuchsia-300 rounded-lg py-3 font-medium text-fuchsia-700 hover:bg-fuchsia-50 transition-all">
              Order Labs
            </button>
            <button className="glassmorphism-magenta border border-fuchsia-300 rounded-lg py-3 font-medium text-fuchsia-700 hover:bg-fuchsia-50 transition-all">
              New Prescription
            </button>
            <button className="glassmorphism-magenta border border-fuchsia-300 rounded-lg py-3 font-medium text-fuchsia-700 hover:bg-fuchsia-50 transition-all">
              Schedule Visit
            </button>
            <button className="bg-fuchsia-600 text-white rounded-lg py-3 font-medium hover:bg-fuchsia-700 transition-all">
              Update Chart
            </button>
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
              <h3 className="text-xl font-bold text-red-600 mb-2 text-center">Chart Update Failed</h3>
              <p className="text-gray-700 text-sm text-center mb-4">
                Medical record form structure changed. Field 'patient_vitals_bp' renamed to 'blood_pressure_reading'.
              </p>
              <div className="bg-red-50 rounded p-3 font-mono text-xs text-red-800">
                ValueError: Field 'patient_vitals_bp' not found in form schema
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
