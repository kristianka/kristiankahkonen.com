import { createDirectus, rest, readItem, authentication, readUser, readItems } from "@directus/sdk";
import { Blog, User } from "@/types";

// create a Directus client to connect to the Directus API
const client = createDirectus(process.env.DIRECTUS_URL as string)
    .with(rest({ onRequest: (options) => ({ ...options, cache: "no-cache" }) }))
    .with(authentication());

export const fetchBlogs = async () => {
    try {
        await client.setToken(process.env.DIRECTUS_KEY as string);
        const res = (await client.request(readItems("blog"))) as Blog[];
        return res;
    } catch (error) {
        console.error("Error while fetching blogs", error);
        return [];
    }
};

export const fetchBlogById = async (id: string) => {
    try {
        if (!id) return null;
        await client.setToken(process.env.DIRECTUS_KEY as string);
        const result = (await client.request(readItem("blog", id))) as Blog;
        return result;
    } catch (error) {
        console.error("Error while fetching blog", error);
        return null;
    }
};

export const getBlogAuthor = async (id?: string) => {
    try {
        if (!id) return null;
        await client.setToken(process.env.DIRECTUS_KEY as string);
        const result = (await client.request(readUser(id))) as User;
        return result;
    } catch (error) {
        console.error("Error while fetching blog author", error);
        return null;
    }
};
