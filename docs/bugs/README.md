# Bug Reports

This directory contains detailed bug reports for critical issues encountered during development and deployment of the Agent School website.

## 📋 Active Reports

| Report | Severity | Status | Date |
|--------|----------|--------|------|
| [DEMO-NOT-INTERACTIVE-FEB-2026.md](./demo-not-interactive-feb-2026.md) | 🔴 Critical | 🟡 **FIX APPLIED - NEEDS TESTING** | Feb 10, 2026 |
| [BUILD-HANG-COLLECTING-PAGE-DATA-FEB-2026.md](./build-hang-collecting-page-data-feb-2026.md) | 🔴 Critical | ✅ Resolved | Feb 10, 2026 |
| [PERFORMANCE-COMPILATION-ISSUES-FEB-2026.md](./performance-compilation-issues-feb-2026.md) | 🔴 Critical | ✅ Resolved | Feb 10, 2026 |
| [BUILD-TIMEOUT-FEB-2026.md](./build-timeout-feb-2026.md) | 🔴 Critical | ✅ Resolved | Feb 9, 2026 |
| [TURBOPACK-WSL-HANG-FEB-2026.md](./turbopack-wsl-hang-feb-2026.md) | 🔴 Critical | ✅ Resolved | Feb 10, 2026 |
| [INVALID-TURBOPACK-CONFIG-FEB-2026.md](./invalid-turbopack-config-feb-2026.md) | 🟡 Major | ✅ Resolved | Feb 10, 2026 |

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
See: [demo-not-interactive-feb-2026.md](./demo-not-interactive-feb-2026.md)
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
See: [performance-compilation-issues-feb-2026.md](./performance-compilation-issues-feb-2026.md)
- **Root Causes:**
  1. 393MB Remotion video project being compiled (✅ excluded)
  2. All 5 mock UIs loading eagerly (✅ lazy loaded)
- **Status:** ✅ RESOLVED - Dev server + compilation now fast!
- **Quick Fix:** Exclude remotion-video + lazy load demos
- **Test:** Pages should compile in < 30 seconds

#### Build Timeouts
See: [build-timeout-feb-2026.md](./build-timeout-feb-2026.md)
- **Quick Fix:** Add `export const dynamic = 'force-dynamic'` to pages with heavy client state
- **Test:** `npm run build` should complete in < 5 minutes

#### Turbopack Dev Server Hangs (WSL)
See: [turbopack-wsl-hang-feb-2026.md](./turbopack-wsl-hang-feb-2026.md)
- **Root Cause:** Turbopack lockfile permission errors on Windows filesystems in WSL
- **Quick Fix:** `npm run dev` now uses webpack by default (fully resolved)
- **Test:** Dev server should be ready in < 30 seconds

#### Invalid Config Warnings
See: [invalid-turbopack-config-feb-2026.md](./invalid-turbopack-config-feb-2026.md)
- **Root Cause:** Invalid `experimental.turbopack` key in next.config.mjs
- **Quick Fix:** Remove invalid config keys (already resolved)
- **Test:** No warnings should appear on startup

---

## 📞 Reporting New Bugs

If you discover a new critical issue:

1. Create a new `.md` file with format: `ISSUE-NAME-MMM-YYYY.md`
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
- [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md) - Design system
- [MOCK_UI_FRAMEWORK.md](../MOCK_UI_FRAMEWORK.md) - Framework architecture

---

**Maintained by:** Agent School Development Team  
**Last Updated:** February 10, 2026
