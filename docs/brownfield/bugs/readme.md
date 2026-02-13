# Bug Reports

This directory contains detailed bug reports for critical issues encountered during development and deployment of the Agent School website.

## 📋 Active Reports

| Report | Severity | Status | Date |
|--------|----------|--------|------|
| [demo-not-interactive-2026-02-10](./demo-not-interactive-2026-02-10.md) | 🔴 Critical | 🟡 **FIX APPLIED - NEEDS TESTING** | 2026-02-10 |
| [build-hang-collecting-page-data-2026-02-10](./build-hang-collecting-page-data-2026-02-10.md) | 🔴 Critical | ✅ Resolved | 2026-02-10 |
| [performance-compilation-issues-2026-02-10](./performance-compilation-issues-2026-02-10.md) | 🔴 Critical | ✅ Resolved | 2026-02-10 |
| [build-timeout-2026-02-09](./build-timeout-2026-02-09.md) | 🔴 Critical | ✅ Resolved | 2026-02-09 |
| [turbopack-wsl-hang-2026-02-10](./turbopack-wsl-hang-2026-02-10.md) | 🔴 Critical | ✅ Resolved | 2026-02-10 |
| [invalid-turbopack-config-2026-02-10](./invalid-turbopack-config-2026-02-10.md) | 🟡 Major | ✅ Resolved | 2026-02-10 |

### Other Documents

| Document | Description |
|----------|-------------|
| [demo-fix-implementation-2026-02-10](./demo-fix-implementation-2026-02-10.md) | Fix implementation & verification for demo interactivity |
| [debug-changelog-2026-02-10](./debug-changelog-2026-02-10.md) | Debug session changelog (2026-02-10) |

---

## 📝 Bug Report Template

When documenting new bugs, include:

### 1. Header
- Date discovered
- Severity (🔴 Critical, 🟡 Major, 🟢 Minor)
- Status (🔴 Open, 🟡 In Progress, ✅ Resolved)
- Resolution date (if resolved)

### 2. Summary
Brief overview of the issue and impact

### 3. Symptoms
What users/developers experience

### 4. Root Cause
Technical explanation of why it happens

### 5. Solution
Step-by-step fix with code examples

### 6. Prevention
How to avoid in the future

### 7. Testing
Verification steps and checklist

---

## 🎯 Purpose

This directory serves to:
- **Document critical bugs** for future reference
- **Provide solutions** for recurring issues
- **Share knowledge** across the team
- **Prevent regressions** by documenting what went wrong
- **Speed up debugging** when similar issues arise

---

## 🔍 Quick Reference

### Common Issues

#### 🟡 FIX APPLIED: Interactive Demos Not Working
See: [demo-not-interactive-2026-02-10.md](./demo-not-interactive-2026-02-10.md)
- **User Report:** "demo still not interactive" on homepage Use Cases section
- **Status:** 🟡 **FIX APPLIED - NEEDS TESTING**
- **Fix Applied:** Removed dynamic imports from `UseCases.tsx` (lines 21-44)
- **What Changed:**
  - ✅ Replaced `dynamic()` imports with eager imports for all 5 demos
  - ✅ Removed DemoLoadingState component (no longer needed)
  - ✅ TypeScript compilation passes with no errors
- **Next Steps:** 
  1. User needs to test on browser: http://localhost:3000 → scroll to Use Cases
  2. Verify all 5 demos render and are interactive
  3. Test clicking suggested queries + typing manual queries
  4. Confirm mock UIs update based on agent responses
- **Expected Outcome:** Demos should now load reliably without async import failures
- **Impact:** 🔴 CRITICAL - Demos are core value prop, no demos = no conversions
- **Note:** Cannot verify in WSL due to Turbopack lockfile bug (unrelated to demo issue)

#### Performance & Compilation Issues
See: [performance-compilation-issues-2026-02-10.md](./performance-compilation-issues-2026-02-10.md)
- **Root Causes:**
  1. 393MB Remotion video project being compiled (✅ excluded)
  2. All 5 mock UIs loading eagerly (✅ lazy loaded)
- **Status:** ✅ RESOLVED - Dev server + compilation now fast!
- **Quick Fix:** Exclude remotion-video + lazy load demos
- **Test:** Pages should compile in < 30 seconds

#### Build Timeouts
See: [build-timeout-2026-02-09.md](./build-timeout-2026-02-09.md)
- **Quick Fix:** Add `export const dynamic = 'force-dynamic'` to pages with heavy client state
- **Test:** `npm run build` should complete in < 5 minutes

#### Turbopack Dev Server Hangs (WSL)
See: [turbopack-wsl-hang-2026-02-10.md](./turbopack-wsl-hang-2026-02-10.md)
- **Root Cause:** Turbopack lockfile permission errors on Windows filesystems in WSL
- **Quick Fix:** `npm run dev` now uses webpack by default (fully resolved)
- **Test:** Dev server should be ready in < 30 seconds

#### Invalid Config Warnings
See: [invalid-turbopack-config-2026-02-10.md](./invalid-turbopack-config-2026-02-10.md)
- **Root Cause:** Invalid `experimental.turbopack` key in next.config.mjs
- **Quick Fix:** Remove invalid config keys (already resolved)
- **Test:** No warnings should appear on startup

---

## 📞 Reporting New Bugs

If you discover a new critical issue:

1. Create a new `.md` file with format: `issue-name-YYYY-MM-DD.md` (exact date)
2. Use the template structure above
3. Add to the Active Reports table in this README
4. Commit with message: `docs: add bug report for [issue name]`
5. Notify team via Slack/email if critical

---

## 🏷️ Severity Levels

- 🔴 **Critical** - Blocks production deployments, breaks core functionality
- 🟡 **Major** - Significantly impacts development workflow
- 🟢 **Minor** - Cosmetic issues, edge cases

---

## 📚 Related Documentation

- [AGENTS.md](../../AGENTS.md) - Development context
- [README.md](../../README.md) - Project overview
- [design-system-new-purposal.md](../design/design-system-new-purposal.md) - Design system
- [mock-ui-framework.md](../design/mock-ui-framework.md) - Framework architecture

---

**Maintained by:** Agent School Development Team  
**Last Updated:** February 10, 2026
