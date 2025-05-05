/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out', // Default
    basePath: (process.env.NODE_ENV === "production") ? "/F76RDamageCalc" : "",
    assetPrefix: (process.env.NODE_ENV === "production") ? "/F76RDamageCalc/" : "",
    images: {
        unoptimized: true,
        minimumCacheTTL: 60
    },
    // reactStrictMode: false,
};

export default nextConfig;
