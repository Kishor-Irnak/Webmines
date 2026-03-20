import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/EvocLabs-Next.js",
  assetPrefix: "/EvocLabs-Next.js",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
