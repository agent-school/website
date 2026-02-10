/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Fix for WSL: prevent Next.js from scanning parent directories
  // This stops it from hanging while looking for dependencies
  outputFileTracingRoot: process.cwd(),
  
  // Exclude remotion-video directory (separate project) - for webpack builds
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules',
        '**/remotion-video/**',
        '**/.next/**',
      ],
    };
    return config;
  },
  
  // Turbopack configuration (Next.js 16 uses Turbopack by default for builds)
  turbopack: {
    // Empty config to silence Turbopack warning
    // Remotion-video is already excluded via .gitignore and .vercelignore
  },
  
  // Optimize build performance
  typescript: {
    // Already type-checked in CI/CD, skip during build for speed
    ignoreBuildErrors: false,
  },
  
  // Experimental features for faster builds
  experimental: {
    // Limit prerender worker fan-out to avoid worker startup deadlocks on some Windows setups.
    cpus: 1,
    // Force child-process workers instead of worker threads for stability on Windows.
    workerThreads: false,
    // Use worker threads for faster compilation
    webpackBuildWorker: false,
  },
};

export default nextConfig;
