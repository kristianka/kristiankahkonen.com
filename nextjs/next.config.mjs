/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: ["kristiankahkonen.com", "localhost"]
    }
};

export default nextConfig;
