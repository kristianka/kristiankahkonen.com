import axios from "axios";
import { createDirectus, rest, readItem, authentication, readUser } from "@directus/sdk";
import { Blog, BlogApiResponse, User } from "@/types";

// create a Directus client to connect to the Directus API
const client = createDirectus("http://localhost:8055/").with(rest()).with(authentication());

export const fetchBlogs = async () => {
    try {
        await client.setToken(process.env.DIRECTUS_KEY as string);
        const res = await axios.get<BlogApiResponse>("/items/blog/", {
            baseURL: process.env.DIRECTUS_IP,
            headers: {
                Authorization: `Bearer ${process.env.DIRECTUS_KEY}`
            }
        });
        return res.data.data;
    } catch (error) {
        // console.log("Error while fetching blogs", error);
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
        // console.error("Error while fetching blog", error);
        return null;
    }
};

export const getBlogAuthor = async (id?: string) => {
    try {
        console.log("get blog author");
        if (!id) return null;
        await client.setToken(process.env.DIRECTUS_KEY as string);
        const result = (await client.request(readUser(id))) as User;
        console.log("result", result);
        return result;
    } catch (error) {
        // console.error("Error while fetching blog author", error);
        return null;
    }
};
