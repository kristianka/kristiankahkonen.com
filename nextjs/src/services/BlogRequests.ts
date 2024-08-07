import { createDirectus, rest, readItem, authentication, readUser, readItems } from "@directus/sdk";
import { Blog, User } from "@/types";

// create a Directus client to connect to the Directus API
const client = createDirectus(process.env.DIRECTUS_URL as string)
    .with(rest({ onRequest: (options) => ({ ...options, cache: "no-cache" }) }))
    .with(authentication());

client.setToken(process.env.DIRECTUS_KEY as string);

export const fetchBlogs = async () => {
    try {
        const res = (await client.request(readItems("blog"))) as Blog[];
        // sort by newest first
        const sortedBlogs = res
            .filter((blog) => blog.published)
            .sort(
                (a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
            );
        return sortedBlogs;
    } catch (error) {
        console.error("Error while fetching blogs", error);
        return [];
    }
};

export const fetchBlogById = async (id: string) => {
    try {
        if (!id) return null;
        const res = (await client.request(readItem("blog", id))) as Blog;
        if (!res.published) return null;
        return res;
    } catch (error) {
        console.error("Error while fetching blog", error);
        return null;
    }
};

export const getBlogAuthor = async (id?: string) => {
    try {
        if (!id) return null;
        const res = (await client.request(readUser(id))) as User;
        return res;
    } catch (error) {
        console.error("Error while fetching blog author", error);
        return null;
    }
};

export const getFeaturedBlogs = async () => {
    try {
        const res = (await client.request(readItems("blog"))) as Blog[];
        // Filter and sort the blogs. Return only the first 3 featured blogs
        const featuredBlogs = res
            .filter((blog) => blog.published)
            .filter((blog) => blog.tags?.includes("featured"))
            .sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime())
            .slice(0, 3);
        return featuredBlogs;
    } catch (error) {
        console.error("Error while fetching featured blogs", error);
        return [];
    }
};

export const getLatestBlog = async () => {
    try {
        const res = (await client.request(readItems("blog"))) as Blog[];
        // Filter and sort the blogs. Return only the first blog
        const latestBlog = res
            .filter((blog) => blog.published)
            .sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime())
            .slice(0, 1);
        return latestBlog;
    } catch (error) {
        console.error("Error while fetching latest blog", error);
        return [];
    }
};
