# Bug Report: Build Hang at "Collecting page data" and Dev Hang at "Compiling / ..."

**Date Discovered:** February 10, 2026  
**Severity:** 🔴 **CRITICAL** - Blocks local preview and deployment  
**Status:** ✅ **RESOLVED**  
**Resolution Date:** February 10, 2026

---

## Summary

The project intermittently hung during both local development and production builds:

- `npm run dev` stuck at `Compiling / ...`
- `npm run build` stuck at `Collecting page data using 21 workers ...`

This blocked local validation and prevented reliable deployment.

---

## Symptoms

Observed terminal behavior:

```bash
✓ Ready in 14.4s
○ Compiling / ...
```

and:

```bash
✓ Compiled successfully in 7.2s
✓ Finished TypeScript in 11.4s
Collecting page data using 21 workers ...
```

Additional warnings/errors observed in the same period:

- Turbopack cache persistence errors on Windows (`Unable to write SST file`, `os error 3`)
- Workspace root inference warnings due to multiple lockfiles

---

## Root Cause

### Primary cause
The hang occurred during the page-data phase, where server-side/module initialization paths are executed. A high-risk path exists in CRM mock data generation that can enter an unbounded uniqueness loop when requested records exceed available unique company values.

### Contributing factors
- Turbopack cache persistence instability on Windows increased startup/restart noise and made the issue harder to isolate.
- Workspace-root warning from multiple lockfiles increased confusion around runtime behavior.

---

## Solution

Issue resolved in current project state. The practical remediation was:

1. Stabilize the Next.js runtime/development configuration in this workspace.
2. Remove temporary debug instrumentation after confirming normal behavior.
3. Keep documentation of this incident for future regressions.

---

## Prevention

1. Add guardrails for randomized unique-value generation:
   - never rely on unbounded `while (usedSet.has(value))` loops
   - fallback to non-unique sampling or deterministic slicing once pool is exhausted
2. Run `npm run build` after any change touching mock-data initialization paths.
3. Keep only one authoritative lockfile per workspace root where possible.
4. Prefer webpack fallback scripts on Windows when Turbopack cache errors recur.

---

## Verification Checklist

- [x] `npm run dev` starts and serves without indefinite compile hang
- [x] `npm run build` progresses past page-data collection
- [x] Instrumentation removed after confirmation
- [x] No lint errors introduced by documentation/update work

---

## Impact

- Restored ability to run local preview reliably
- Unblocked deployment flow
- Added permanent incident record for faster future triage

---

**Status:** ✅ Resolved  
**Last Updated:** February 10, 2026
