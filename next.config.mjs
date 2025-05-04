/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
    output: 'export',
    distDir: 'out', // Default
    basePath: isProd ? "/F76RDamageCalc" : "",
    assetPrefix: isProd ? "/F76RDamageCalc/" : "",
    images: {
        unoptimized: true,
        minimumCacheTTL: 60
    },
    // reactStrictMode: false,
};

export default nextConfig;
