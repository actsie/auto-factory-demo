import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.fountainofscale.com" }],
        destination: "https://fountainofscale.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
