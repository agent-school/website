# Bug Report: Invalid Turbopack Config Warning

**Date Discovered:** February 10, 2026  
**Severity:** 🟡 Major (Warning, not blocker)  
**Status:** ✅ Resolved  
**Resolution Date:** February 10, 2026

---

## Summary

Next.js 16.1.0 shows a configuration warning about an invalid `turbopack` key in `next.config.mjs`. This warning appears on every dev server startup and build, cluttering output and potentially causing confusion.

**Impact:**
- Clutters console output with warnings
- May cause confusion about configuration validity
- Could hide other important warnings
- Does not block development or builds

---

## Symptoms

### What Users Experience

Every time the dev server starts or build runs:

```bash
$ npm run dev

⚠ Invalid next.config.mjs options detected: 
⚠     Unrecognized key(s) in object: 'turbopack' at "experimental"
⚠ See more info here: https://nextjs.org/docs/messages/invalid-next-config
▲ Next.js 16.1.0 (Turbopack)
- Local:         http://localhost:3000
```

The warning references: https://nextjs.org/docs/messages/invalid-next-config

---

## Root Cause

### Technical Explanation

The `next.config.mjs` file contained an invalid configuration key:

```javascript
// ❌ INVALID - 'turbopack' is not a recognized experimental option
experimental: {
  webpackBuildWorker: true,
  turbopack: {
    root: process.cwd(),
  },
}
```

**Why this happened:**
- Developer attempted to configure Turbopack's root directory to prevent parent directory scanning
- The `experimental.turbopack` key is **not documented** in Next.js 16.1.0 config schema
- No TypeScript error because `experimental` object allows additional properties
- Warning only appears at runtime

### What Keys ARE Valid

According to Next.js 16.1.0 documentation:

```javascript
experimental: {
  webpackBuildWorker: true,        // ✅ Valid
  serverActions: true,             // ✅ Valid
  optimizePackageImports: [...],   // ✅ Valid
  // turbopack: { ... }            // ❌ NOT VALID
}
```

Turbopack configuration (if it exists) would be top-level, not under `experimental`:

```javascript
// This also doesn't work in Next.js 16.1.0
turbopack: {
  root: process.cwd(),
}
```

---

## Solution

### Fix (Applied)

Remove the invalid `turbopack` configuration from `next.config.mjs`:

**Before:**
```javascript
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  
  experimental: {
    webpackBuildWorker: true,
    
    // ❌ This is invalid
    turbopack: {
      root: process.cwd(),
    },
  },
};
```

**After:**
```javascript
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  
  experimental: {
    webpackBuildWorker: true,
  },
};
```

**Result:**
- ✅ No more warning on startup
- ✅ Clean console output
- ✅ All functionality preserved (the turbopack config wasn't doing anything anyway)

---

## Testing & Verification

### Test Steps

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Check console output for warnings**

3. **Run production build:**
   ```bash
   npm run build
   ```

4. **Verify no warnings appear**

### Success Criteria

- ✅ No "Invalid next.config.mjs options detected" warning
- ✅ Dev server starts cleanly
- ✅ Build completes without config warnings
- ✅ All functionality works as before

### Test Results

**Before fix:**
```
⚠ Invalid next.config.mjs options detected: 
⚠     Unrecognized key(s) in object: 'turbopack' at "experimental"
```

**After fix:**
```
▲ Next.js 16.1.0 (Turbopack)
- Local:         http://localhost:3000
✓ Starting...
✓ Ready in 859ms
```

✅ **Clean output - no warnings!**

---

## Prevention

### For Future Configuration Changes

1. **Always check Next.js docs:** Verify config keys exist in official documentation
2. **Use TypeScript for config:** Consider using `next.config.ts` instead of `.mjs` for better type checking
3. **Test warnings immediately:** Don't ignore yellow warning text - investigate and fix
4. **Check Next.js GitHub:** Search issues for experimental features before using

### Recommended Config Template

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core settings
  reactStrictMode: true,
  
  // Build optimization
  outputFileTracingRoot: process.cwd(),
  
  // Experimental features (only use documented ones)
  experimental: {
    webpackBuildWorker: true,  // Workers for parallel compilation
  },
};

export default nextConfig;
```

**Golden Rules:**
- ✅ Only use documented experimental features
- ✅ Check Next.js version compatibility
- ✅ Test configuration changes immediately
- ✅ Remove unused configuration keys

---

## Related Issues

### Next.js Documentation

- [Configuration Options](https://nextjs.org/docs/app/api-reference/next-config-js)
- [Experimental Features](https://nextjs.org/docs/app/api-reference/next-config-js/experimental)

### Similar Warnings

- Watch for other "Unrecognized key" warnings in console
- Check that all experimental flags are documented

---

## Additional Notes

### Why Was This Added?

The developer attempted to configure Turbopack's root directory to prevent it from scanning parent directories for dependencies. However:

1. The `experimental.turbopack.root` key doesn't exist in Next.js 16.1.0
2. The `outputFileTracingRoot` setting already accomplishes this goal
3. The invalid config key was silently ignored (didn't cause errors)

### Lessons Learned

- **TypeScript for config files** would have caught this at author-time
- **Warning fatigue** can cause developers to ignore important messages
- **Documentation first** - always check docs before adding experimental config
- **Keep configs minimal** - only add what's needed

---

## Impact Assessment

### Before Fix
- 🟡 Medium annoyance: Warning on every startup
- 🟡 Potential confusion: "Is my config valid?"
- 🟡 Console clutter: Harder to spot real issues

### After Fix
- ✅ Clean console output
- ✅ Clear configuration file
- ✅ No confusion about validity

---

**Status:** ✅ Resolved - Invalid config key removed  
**Regression Risk:** None - removed config wasn't functional  
**Follow-up:** None needed - permanent fix applied

---

**Last Updated:** February 10, 2026  
**Report Version:** 1.0  
**Related Reports:** TURBOPACK-WSL-HANG-FEB-2026.md
