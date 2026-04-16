import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/Webmines",
  assetPrefix: "/Webmines",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
