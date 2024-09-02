import { readItem, readUser, readItems } from "@directus/sdk";
import { Blog, User } from "@/types";
import client from "./DirectusClient";

// Get all blogs for the blogs page
export const getBlogs = async () => {
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
        return [];
    }
};

// Get a single blog by id
export const getBlogById = async (id: string) => {
    try {
        if (!id) return null;
        const res = (await client.request(readItem("blog", id))) as Blog;
        if (!res.published) return null;
        return res;
    } catch (error) {
        return null;
    }
};

// Get the author of a blog by id
export const getBlogAuthor = async (id?: string) => {
    try {
        if (!id) return null;
        const res = (await client.request(readUser(id))) as User;
        return res;
    } catch (error) {
        return null;
    }
};

// Get the featured blogs for the home page and footer
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
        return [];
    }
};

// Get the latest blog for the home page
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
        return [];
    }
};
