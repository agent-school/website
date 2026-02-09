import { NotionDemo } from "@/components/mocks/notion";

export default function TestNotionPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-4xl text-slate-900 dark:text-slate-100 mb-2">
            Notion Task Database Demo
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Interactive demo of AI agent managing Notion tasks
          </p>
        </div>
        
        <NotionDemo />
      </div>
    </div>
  );
}
