/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",

    // to do fix this
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            },
            {
                protocol: "http",
                hostname: "**"
            }
        ]
    }
};

export default nextConfig;
