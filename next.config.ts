import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // AGENTS.md é mantido à mão neste repositório; não deixar o Next.js regerar.
  agentRules: false,
};

export default nextConfig;
