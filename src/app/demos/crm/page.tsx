import { CRMDemo } from "@/components/mocks/crm";

// Force dynamic rendering - don't try to statically generate at build time
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "CRM Pipeline Demo | Agent School",
  description: "Interactive sales pipeline CRM demo with AI agent queries"
};

export default function CRMDemoPage() {
  return (
    <main className="h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4 flex flex-col">
      <div className="max-w-[1800px] mx-auto w-full flex flex-col flex-1 min-h-0">
        <div className="mb-4 flex-shrink-0">
          <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
            CRM Pipeline Demo
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Interactive sales pipeline with natural language agent queries
          </p>
        </div>

        <div className="flex-1 min-h-0">
          <CRMDemo />
        </div>
      </div>
    </main>
  );
}
