// #region agent log
fetch("http://127.0.0.1:7247/ingest/102c8c59-dbce-4678-9a66-2c08f222c2b8", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ runId: "run-2026-02-10d", hypothesisId: "H18", location: "src/components/mocks/notion/index.ts:1", message: "notion module evaluated", data: {}, timestamp: Date.now() }) }).catch(() => {});
// #endregion
export { NotionDemo } from "./NotionDemo";
export { TaskTable } from "./TaskTable";
export { handleNotionQuery } from "./queries";
export * from "./types";
export * from "./data";
