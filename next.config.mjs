/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out', // Default
    images: {
        unoptimized: true,
        minimumCacheTTL: 60
    }
};

export default nextConfig;
