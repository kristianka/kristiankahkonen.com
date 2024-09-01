import { Blog } from "@/types";
import { ListCard } from "@/components/Blog/ListCard";
import { NoBlogsFound } from "@/components/Blog/NoBlogsFound";
import FadeIn from "@/components/FadeIn";
import { getBlogs } from "@/services/BlogRequests";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs - Kristian Kähkönen",
    description: "A collection of blogs written by Kristian Kähkönen."
};

export default async function Home() {
    const blogs: Blog[] = await getBlogs();

    return (
        <main>
            <FadeIn>
                <div className="flex justify-between items-baseline">
                    <h2 className="text-2xl sm:text-4xl tracking-wide font-bold">Latest content</h2>
                    <p className="flex justify-end text-lg">{blogs.length} posts</p>
                </div>
                {blogs.length === 0 && <NoBlogsFound />}
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {blogs.length > 0 &&
                        blogs.map((blog) => <ListCard key={blog.id} blog={blog} />)}
                </ul>
            </FadeIn>
        </main>
    );
}
