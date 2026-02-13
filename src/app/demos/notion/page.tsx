import { NotionDemo } from "@/components/mocks/notion";

// Force dynamic rendering - don't try to statically generate at build time
export const dynamic = 'force-dynamic';

export default function TestNotionPage() {
  return (
    <div className="h-screen bg-slate-50 dark:bg-slate-950 py-4 px-4 flex flex-col">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col flex-1 min-h-0">
        <div className="mb-4 flex-shrink-0">
          <h1 className="font-display text-3xl text-slate-900 dark:text-slate-100 mb-1">
            Notion Task Database Demo
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Interactive demo of AI agent managing Notion tasks
          </p>
        </div>
        
        <div className="flex-1 min-h-0">
          <NotionDemo />
        </div>
      </div>
    </div>
  );
}
