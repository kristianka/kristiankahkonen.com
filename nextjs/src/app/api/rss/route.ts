"use server";
import { Feed } from "feed";
import { NextResponse } from "next/server";

import { fetchBlogs } from "@/services/BlogRequests";
import { Blog } from "@/types";

const generateRSSFeed = (blogs: Blog[]) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL as string;
    const email = process.env.NEXT_PUBLIC_EMAIL as string;

    const feed = new Feed({
        title: "Kristian Kähkönen",
        description: "Blog posts about web development, software engineering, and more.",
        id: siteUrl,
        link: siteUrl,
        favicon: `${siteUrl}/favicon.ico`,
        language: "en",
        updated: new Date(),
        generator: "Next.js using Feed for RSS",
        copyright: "© 2024 Kristian Kähkönen. All rights reserved.",
        feedLinks: {
            rss: `${siteUrl}/rss.xml`
        }
    });

    blogs.forEach((blog) => {
        feed.addItem({
            title: blog.title,
            id: `${siteUrl}/blog/${blog.id}`,
            link: `${siteUrl}/blog/${blog.id}`,
            description: blog.description,
            author: [
                {
                    name: "Kristian Kähkönen",
                    email: email,
                    link: siteUrl
                }
            ],
            date: new Date(blog.date_created)
        });
    });

    return feed;
};

export async function GET() {
    const blogs = await fetchBlogs();
    const feed = generateRSSFeed(blogs);
    const rss = feed.rss2();

    return new NextResponse(rss, {
        headers: {
            "Content-Type": "application/xml"
        }
    });
}
