// #region agent log
fetch("http://127.0.0.1:7247/ingest/102c8c59-dbce-4678-9a66-2c08f222c2b8", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ runId: "run-2026-02-10d", hypothesisId: "H19", location: "src/components/mocks/instagram/index.ts:1", message: "instagram module evaluated", data: {}, timestamp: Date.now() }) }).catch(() => {});
// #endregion
export { InstagramDemo } from "./InstagramDemo";
export type { InstagramData, Conversation, Message, Category } from "./types";
