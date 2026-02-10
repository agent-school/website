/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Optimize build performance
  typescript: {
    // Already type-checked in CI/CD, skip during build for speed
    ignoreBuildErrors: false,
  },
  eslint: {
    // Already linted in CI/CD, skip during build for speed
    ignoreDuringBuilds: false,
  },
  
  // Experimental features for faster builds
  experimental: {
    // Use worker threads for faster compilation
    webpackBuildWorker: true,
  },
};

export default nextConfig;
