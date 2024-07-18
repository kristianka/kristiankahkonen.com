import { getFeaturedBlogs } from "@/services/BlogRequests";
import Link from "next/link";

export default async function FeaturedBlogs() {
    const blogs = await getFeaturedBlogs();
    return (
        <div>
            <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Featured blogs
            </h6>
            <ul className="space-y-3">
                {blogs.length === 0 && (
                    <li className="text-gray-500 dark:text-gray-400">No featured blogs</li>
                )}
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link
                            href={`/blog/${blog.id}`}
                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            {blog.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
