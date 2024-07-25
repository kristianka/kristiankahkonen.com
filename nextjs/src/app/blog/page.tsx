import type { Metadata } from "next";
import { Blog } from "@/types";
import { fetchBlogs } from "@/services/BlogRequests";
import { ListCard } from "@/components/Blog/ListCard";
import { NoBlogsFound } from "@/components/Blog/NoBlogsFound";

export const metadata: Metadata = {
    title: "Blogs - Kristian Kähkönen",
    description: "A collection of blogs written by Kristian Kähkönen."
};

export default async function Home() {
    const blogs: Blog[] = await fetchBlogs();

    return (
        <main className="mx-auto max-w-7xl min-h-screen">
            <div className="">
                <div className="flex justify-between items-baseline">
                    <h1 className="text-3xl sm:text-4xl">Latest content</h1>
                    <p className="flex justify-end text-lg">{blogs.length} posts</p>
                </div>
                {blogs.length === 0 && <NoBlogsFound />}
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {blogs.length > 0 &&
                        blogs.map((blog) => <ListCard key={blog.id} blog={blog} />)}
                </ul>
            </div>
        </main>
    );
}
