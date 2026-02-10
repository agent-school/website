/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Optimize build performance
  typescript: {
    // Already type-checked in CI/CD, skip during build for speed
    ignoreBuildErrors: false,
  },
  
  // Experimental features for faster builds
  experimental: {
    // Use worker threads for faster compilation
    webpackBuildWorker: true,
    
    // Turbopack configuration
    turbopack: {
      // Specify project root to silence lockfile warning
      root: process.cwd(),
    },
  },
};

export default nextConfig;
