import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export untuk GitHub Pages
  output: "export",

  // GitHub Pages deploys ke /web-arimbi/ (nama repo)
  basePath: "/web-arimbi",

  // Image optimization tidak tersedia di static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
