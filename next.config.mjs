/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Fix for WSL: prevent Next.js from scanning parent directories
  // This stops it from hanging while looking for dependencies
  outputFileTracingRoot: process.cwd(),
  
  // Optimize build performance
  typescript: {
    // Already type-checked in CI/CD, skip during build for speed
    ignoreBuildErrors: false,
  },
  
  // Experimental features for faster builds
  experimental: {
    // Use worker threads for faster compilation
    webpackBuildWorker: true,
  },
};

export default nextConfig;
