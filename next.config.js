/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: true,
    compress: true,
    swcMinify: true,
    experimental: {
        forceSwcTransforms: true
    }
}

module.exports = nextConfig
