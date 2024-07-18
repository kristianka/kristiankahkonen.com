import { NextRequest, NextResponse } from "next/server";
import { fetchBlogs } from "@/services/BlogRequests";
import { Feed } from "feed";
import { Blog } from "@/types";

const generateRSSFeed = (blogs: Blog[]) => {
    const feed = new Feed({
        title: "Kristian Kähkönen",
        description: "Blog posts about web development, software engineering, and more.",
        id: "https://kristiankahkonen.com/",
        link: "https://kristiankahkonen.com/",
        favicon: `https://kristiankahkonen.com/favicon.ico`,
        language: "en",
        updated: new Date(),
        generator: "Next.js using Feed for RSS",
        copyright: "© 2024 Kristian Kähkönen. All rights reserved.",
        feedLinks: {
            rss: "https://kristiankahkonen.com/rss.xml"
        }
    });

    blogs.forEach((blog) => {
        feed.addItem({
            title: blog.title,
            id: `https://kristiankahkonen.com/blog/${blog.id}`,
            link: `https://kristiankahkonen.com/blog/${blog.id}`,
            description: blog.description,
            author: [
                {
                    name: "Kristian Kähkönen",
                    email: "kristian@kristiankahkonen.com",
                    link: "https://kristiankahkonen.com"
                }
            ],
            date: new Date(blog.date_created)
        });
    });

    return feed;
};

export async function GET(request: NextRequest) {
    const blogs = await fetchBlogs();
    const feed = generateRSSFeed(blogs);

    return new NextResponse(feed.rss2(), {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8"
        }
    });
}
