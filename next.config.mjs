/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'build',
    images: {
        unoptimized: true,
        minimumCacheTTL: 60
    }
};

export default nextConfig;
