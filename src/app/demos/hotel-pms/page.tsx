import { HotelPMSDemo } from "@/components/mocks/hotel-pms";

// Force dynamic rendering - don't try to statically generate at build time
export const dynamic = 'force-dynamic';

export default function HotelPMSDemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-4xl text-slate-900 dark:text-slate-100 mb-2">
            Hotel PMS Demo
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Interactive Property Management System with AI Agent
          </p>
        </div>

        <div className="h-[800px]">
          <HotelPMSDemo />
        </div>
      </div>
    </div>
  );
}
