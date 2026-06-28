import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pas de `output: 'export'` : le proxy Edge (proxy.ts) a besoin du runtime
  // serveur Vercel pour la redirection dynamique via Edge Config.
  images: { unoptimized: true },
};

export default nextConfig;
