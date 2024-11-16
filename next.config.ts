import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
