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
            <div className="mt-10 flex flex-wrap  justify-start gap-3">
                <Link
                    href="/blog"
                    className="hover:bg-blue-500 border border-black px-4 py-2 sm:px-10 sm:py-2 uppercase rounded-full bg-white dark:bg-black dark:text-white dark:border-white dark:hover:text-blue-500"
                >
                    Blog
                </Link>
                <Link
                    href="/projects"
                    className="hover:text-blue-500 border border-white px-4 py-2 sm:px-10 sm:py-2 uppercase rounded-full bg-black text-white dark:bg-white dark:text-black dark:border-black dark:hover:bg-blue-500"
                >
                    Projects
                </Link>
                <Link
                    href="/about"
                    className="hover:bg-blue-500 border border-black px-4 py-2 sm:px-10 sm:py-2 uppercase rounded-full bg-white dark:bg-black dark:text-white dark:border-white dark:hover:text-blue-500"
                >
                    About
                </Link>
                <Link
                    href="/contact"
                    className="hover:text-blue-500 border border-white px-4 py-2 sm:px-10 sm:py-2 uppercase rounded-full bg-black text-white dark:bg-white dark:text-black dark:border-black dark:hover:bg-blue-500"
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
