const env = process.env.NEXT_CONFIG_ENV || 'development'

/** @type {import('next').NextConfig} */
let userConfig = {
    local: {
        distDir: 'out_local',
    },
    gh: {
        distDir: 'out',
        basePath: '/timewise',
        assetPrefix: '/timewise/',
    },
    development: {
        basePath: '/timewise',
        assetPrefix: '/timewise/',
    },
}[env]

/** @type {import('next').NextConfig} */
const nextConfig = {
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

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
    if (!userConfig) {
        return
    }

    for (const key in userConfig) {
        if (
            typeof nextConfig[key] === 'object' &&
            !Array.isArray(nextConfig[key])
        ) {
            nextConfig[key] = {
                ...nextConfig[key],
                ...userConfig[key],
            }
        } else {
            nextConfig[key] = userConfig[key]
        }
    }
}

export default nextConfig
