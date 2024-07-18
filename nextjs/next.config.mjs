/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async redirects() {
        return [
            {
                source: "/rss.xml",
                destination: "/api/rss",
                permanent: true
            }
        ];
    },
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
