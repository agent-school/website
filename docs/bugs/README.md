# Bug Reports

This directory contains detailed bug reports for critical issues encountered during development and deployment of the Agent School website.

## 📋 Active Reports

| Report | Severity | Status | Date |
|--------|----------|--------|------|
| [BUILD-TIMEOUT-FEB-2026.md](./BUILD-TIMEOUT-FEB-2026.md) | 🔴 Critical | ✅ Resolved | Feb 9, 2026 |

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

#### Build Timeouts
See: [BUILD-TIMEOUT-FEB-2026.md](./BUILD-TIMEOUT-FEB-2026.md)
- **Quick Fix:** Add `export const dynamic = 'force-dynamic'` to pages with heavy client state
- **Test:** `npm run build` should complete in < 5 minutes

#### Turbopack Hangs (Windows)
See: [BUILD-TIMEOUT-FEB-2026.md](./BUILD-TIMEOUT-FEB-2026.md#-issue-2-turbopack-compilation-hang)
- **Quick Fix:** Use `npm run dev:webpack` or `npm run dev:no-cache`
- **Test:** Dev server should compile and load pages

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
**Last Updated:** February 9, 2026
