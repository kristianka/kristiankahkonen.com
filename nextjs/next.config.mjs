/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: ["localhost", "strapi-dev", "strapi"]
    }
};

export default nextConfig;
