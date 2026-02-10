"use client";

import { HotelPMSDemo } from "@/components/mocks/hotel-pms";
import { CRMDemo } from "@/components/mocks/crm";
import { NotionDemo } from "@/components/mocks/notion";

export const dynamic = "force-dynamic";

// #region agent log
fetch("http://127.0.0.1:7247/ingest/102c8c59-dbce-4678-9a66-2c08f222c2b8", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ runId: "run-2026-02-10c", hypothesisId: "H14", location: "src/app/test-demos/page.tsx:9", message: "test-demos page module evaluated", data: {}, timestamp: Date.now() }) }).catch(() => {});
// #endregion

export default function TestDemosPage() {
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
