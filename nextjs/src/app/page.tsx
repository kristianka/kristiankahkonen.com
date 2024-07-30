import { TitleAnimation } from "@/components/TitleAnimation";
import React from "react";
import Link from "next/link";
import { getFeaturedBlogs } from "@/services/BlogRequests";
import { FrontpageListCard } from "@/components/Blog/FrontpageListCard";
import { Blog } from "@/types";

export default async function Home() {
    const blogs = await getFeaturedBlogs();
    const featuredBlog = blogs[0] as Blog;
    return (
        <main className="">
            <TitleAnimation />
            <div className="mt-10 space-x-3">
                <Link
                    href="/blog"
                    className="hover:bg-blue-500 border border-black px-10 py-2 uppercase rounded-full bg-white"
                >
                    Blog
                </Link>
                <Link
                    href="/about"
                    className="hover:text-blue-500 border border-white px-10 py-2 uppercase rounded-full bg-black text-white"
                >
                    About
                </Link>
                <Link
                    href="/projects"
                    className="hover:bg-blue-500 border border-black px-10 py-2 uppercase rounded-full bg-white"
                >
                    Projects
                </Link>
                <Link
                    href="/contact"
                    className="hover:text-blue-500 border border-white px-10 py-2 uppercase rounded-full bg-black text-white"
                >
                    Contact
                </Link>
            </div>
            <h2 className="mt-20 text-xl sm:text-2xl tracking-wide font-bold m-auto mb-5">
                Featured blog post
            </h2>
            <div className="mt-5">
                <FrontpageListCard blog={featuredBlog} />
            </div>
        </main>
    );
}
