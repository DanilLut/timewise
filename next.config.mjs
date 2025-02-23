const env = process.env.NEXT_CONFIG_ENV || 'gh';

let nextConfig = {
  local: {
    distDir: 'out_local',
  },
  gh: {
    distDir: 'out',
    basePath: '/timewise',
    assetPrefix: '/timewise/',
  },
}[env];

/** @type {import('next').NextConfig} */
nextConfig = {
    ...nextConfig,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    output: 'export',
    images: {
        unoptimized: true,
    },
    experimental: {
        webpackBuildWorker: true,
        parallelServerBuildTraces: true,
        parallelServerCompiles: true,
    },
    transpilePackages: ['geist'],
}

export default nextConfig
