import type { NextConfig } from "next";
import { config } from "process";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      exclude: /node_modules/,
      use: ["raw-loader"],
    });
    return config;
  },
  transpilePackages: ["three"],
};

export default nextConfig;
