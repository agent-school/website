2026-02-10 debug-01
- Goal: diagnose `next dev`/`next build` hangs with runtime evidence.
- Prior state: no runtime telemetry around build/page-data execution paths.
- New effect:
  - Added instrumentation to `src/components/mocks/crm/data.ts` to log deal generation start, exhaustion condition, and completion.
  - Added instrumentation to `next.config.mjs` to log Next config evaluation and current working directory.
  - Added instrumentation to `src/app/page.tsx` and `src/app/sitemap.ts` to log server render/page-data checkpoints.
2026-02-10 debug-02
- Goal: clean up temporary debug instrumentation after user-confirmed fix.
- Prior state: temporary fetch-based instrumentation remained in 4 files.
- New effect:
  - Removed all debug instrumentation from `src/components/mocks/crm/data.ts`, `next.config.mjs`, `src/app/page.tsx`, and `src/app/sitemap.ts`.
  - Runtime behavior is unchanged except debug events are no longer emitted.
2026-02-10 docs-01
- Goal: document the resolved build/dev hang incident.
- Prior state: incident existed but no dedicated report for this specific "Collecting page data"/"Compiling / ..." hang.
- New effect:
  - Added `docs/bugs/build-hang-collecting-page-data-2026-02-10.md` with summary, symptoms, root cause, mitigation, prevention, and verification checklist.
  - Updated `docs/bugs/readme.md` Active Reports table to link the new report.
2026-02-10 debug-03
- Goal: capture fresh runtime evidence for recurring compile hang.
- Prior state: no active instrumentation after cleanup.
- New effect:
  - Added debug checkpoints in `next.config.mjs`, `src/components/mocks/crm/index.ts`, `src/components/mocks/crm/data.ts`, `src/app/demos/crm/page.tsx`, and `src/app/page.tsx`.
  - Instrumentation now records module-eval and render/data-generation checkpoints to `.cursor/debug.log` via local ingest endpoint.
2026-02-10 debug-04
- Goal: isolate build stall stage inside metadata/page-data generation.
- Prior state: build stalled before enough route-level evidence to isolate source.
- New effect:
  - Added debug checkpoints to `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/app/manifest.ts`.
  - Extended instrumentation coverage to include metadata route generation during `Collecting page data`.
2026-02-10 debug-05
- Goal: apply fix backed by runtime evidence from CLI behavior.
- Prior state: `dev` and `build` scripts still launched Turbopack despite `NEXT_TURBOPACK=0`, and build repeatedly stalled at page-data collection.
- New effect:
  - Updated `package.json` scripts to force webpack for default `dev` and `build`.
  - Added explicit turbo opt-in scripts (`build:turbo` retained/added, `dev:turbo` kept) for manual testing.
2026-02-10 debug-06
- Goal: reduce debug side effects during build-stage diagnosis.
- Prior state: top-level instrumentation in `next.config.mjs` fired on every build process bootstrap and provided low-signal data.
- New effect:
  - Removed temporary `next.config.mjs` instrumentation while keeping route/data instrumentation active.
2026-02-10 debug-07
- Goal: test worker-layer hypothesis for pre-route build stall.
- Prior state: build hung at `Collecting page data` before any route instrumentation fired.
- New effect:
  - Changed `next.config.mjs` experimental `webpackBuildWorker` from `true` to `false` to disable build worker threading for verification.
2026-02-10 debug-08
- Goal: test whether high prerender worker fan-out causes page-data deadlock.
- Prior state: build consistently stalled at `Collecting page data using 21 workers`.
- New effect:
  - Set `experimental.cpus = 1` in `next.config.mjs` to force single-worker page-data processing during verification.
2026-02-10 debug-09
- Goal: test static-worker runtime mode hypothesis.
- Prior state: build still stalled with single prerender worker.
- New effect:
  - Set `experimental.workerThreads = false` in `next.config.mjs` to force process-based workers during page-data phase.
2026-02-10 debug-10
- Goal: test suspected hidden static route as hang trigger.
- Prior state: build hang persisted before any route-level instrumentation logs; discovered `src/app/test-demos/page.tsx` imports multiple heavy demos and lacked dynamic rendering override.
- New effect:
  - Added `export const dynamic = "force-dynamic";` to `src/app/test-demos/page.tsx` for isolation verification.
2026-02-10 debug-11
- Goal: test global static-generation bypass hypothesis.
- Prior state: build still hung at page-data collection after route-specific and worker-mode changes.
- New effect:
  - Added `export const dynamic = "force-dynamic";` in `src/app/layout.tsx` to force dynamic rendering for app routes during verification.
2026-02-10 debug-12
- Goal: fix confirmed infinite-loop risk in CRM mock data generation.
- Prior state: `generateDeals()` enforced uniqueness with unbounded `while` loop even after all companies were already used.
- New effect:
  - Replaced unbounded uniqueness loop with bounded sampling:
    - pick from remaining unique companies while available
    - fall back to regular sampling once pool is exhausted
2026-02-10 debug-13
- Goal: trace module-evaluation stage for app routes during build page-data phase.
- Prior state: most instrumentation fired inside component functions; build could stall before function execution.
- New effect:
  - Added top-level module-evaluation logs to `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/demos/*/page.tsx`, `src/app/test-notion/page.tsx`, and `src/app/test-demos/page.tsx`.
