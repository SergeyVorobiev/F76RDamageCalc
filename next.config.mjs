/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out', // Default
    basePath: "/F76RDamageCalc" : "",
    assetPrefix: "/F76RDamageCalc/" : "",
    images: {
        unoptimized: true,
        minimumCacheTTL: 60
    },
    // reactStrictMode: false,
};

export default nextConfig;
