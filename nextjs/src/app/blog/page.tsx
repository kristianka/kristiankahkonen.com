// force site to be dynamic, otherwise blogs will not be fetched on production
export const dynamic = "force-dynamic";
import Link from "next/link";
import type { Metadata } from "next";
import { FaAnglesRight } from "react-icons/fa6";

import { DateToLocal } from "@/components/ui/DateToLocal";
import { Blog } from "@/types";
import { fetchBlogs } from "@/services/BlogRequests";
import { ListCard } from "@/components/Blog/ListCard";

export const metadata: Metadata = {
    title: "Blogs - Kristian Kähkönen",
    description: "A collection of blogs written by Kristian Kähkönen."
};

export default async function Home() {
    const blogs: Blog[] = await fetchBlogs();

    return (
        <main className="">
            <div className="">
                <h1 className="text-3xl sm:text-4xl text-center">Blogs</h1>
                {/* <h1>Join my email list</h1> */}
                {blogs.length === 0 && (
                    <div className="mx-auto text-center mt-10">
                        <h1 className="text-2xl text-gray-600 dark:text-gray-300">
                            No blogs found.
                        </h1>
                        <h2 className="text-lg text-gray-600 dark:text-gray-300">
                            Please check back later!
                        </h2>
                    </div>
                )}
                <ul className="m-5 mx-auto max-w-5xl divide-y divide-gray-200 dark:divide-gray-700">
                    {blogs.length > 0 &&
                        blogs.map((blog) => <ListCard key={blog.id} blog={blog} />)}
                </ul>
            </div>
        </main>
    );
}
