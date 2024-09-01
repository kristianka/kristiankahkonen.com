import { readItem, readUser, readItems, createItem } from "@directus/sdk";
import { Blog, Project, User } from "@/types";

import client from "./DirectusClient";

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

export const getBlogAuthor = async (id?: string) => {
    try {
        if (!id) return null;
        const res = (await client.request(readUser(id))) as User;
        return res;
    } catch (error) {
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
        return [];
    }
};

// Get all projects for the projects page
export const getProjects = async () => {
    try {
        const res = (await client.request(
            readItems("project", {
                fields: ["*", { image: ["*"], content: ["*"] }]
            })
        )) as Project[];
        // show only published projects and sort by order field
        const sortedProjects = res
            .filter((project) => project.status === "published")
            .sort((a, b) => a.order - b.order);
        return sortedProjects;
    } catch (error) {
        return [];
    }
};

export const likeBlog = async (id: string) => {
    try {
        const res = await client.request(createItem("blogLikes", { blog_id: id }));
        console.log(res);
        return res;
    } catch (error) {
        console.error("Error fetching blog likes:", error);
        return null;
    }
};

export const getBlogLikes = async (id: string) => {
    try {
        const res = await client.request(readItems("blogLikes", { filter: { blog_id: id } }));
        console.log("Response from Directus:", res);
        return res;
    } catch (error) {
        console.error("Error fetching blog likes:", error);
        return [];
    }
};
