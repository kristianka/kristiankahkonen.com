/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: ["localhost", "strapi-dev", "strapi", "kristiankahkonen.com", "media.tenor.com"]
    }
};

export default nextConfig;
