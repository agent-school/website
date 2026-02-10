import { CRMDemo } from "@/components/mocks/crm";

// Force dynamic rendering - don't try to statically generate at build time
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "CRM Pipeline Demo | Agent School",
  description: "Interactive sales pipeline CRM demo with AI agent queries"
};

export default function CRMDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-8">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            CRM Pipeline Demo
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Interactive sales pipeline with natural language agent queries
          </p>
        </div>

        <CRMDemo />
      </div>
    </main>
  );
}
