import { GranolaDemo } from "@/components/mocks/granola";

// Force dynamic rendering - don't try to statically generate at build time
export const dynamic = 'force-dynamic';

export default function GranolaDemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-4xl text-slate-900 dark:text-slate-100 mb-2">
            Granola Meeting Transcript Demo
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Interactive Meeting Transcript Analysis with AI Agent
          </p>
        </div>

        <div className="h-[800px]">
          <GranolaDemo />
        </div>
      </div>
    </div>
  );
}
