"use client";

import { HotelPMSDemo } from "@/components/mocks/hotel-pms";
import { CRMDemo } from "@/components/mocks/crm";
import { NotionDemo } from "@/components/mocks/notion";

export const dynamic = "force-dynamic";

export default function AllDemosPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Demo Test Page</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Hotel PMS Demo</h2>
          <div className="max-w-6xl">
            <HotelPMSDemo />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">CRM Demo</h2>
          <div className="max-w-6xl">
            <CRMDemo />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Notion Demo</h2>
          <div className="max-w-6xl">
            <NotionDemo />
          </div>
        </section>
      </div>
    </div>
  );
}
