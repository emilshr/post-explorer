/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: true,
    compress: true,
    swcMinify: true,
    experimental: {
        forceSwcTransforms: true,
        appDir: true
    }
}

module.exports = nextConfig
