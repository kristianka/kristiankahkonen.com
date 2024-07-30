import { fetchBlogs, getFeaturedBlogs } from "@/services/BlogRequests";
import Link from "next/link";

export default async function FeaturedBlogs() {
    // show the latest 3 blogs
    const blogs = (await fetchBlogs()).slice(0, 3);
    const featuredBlogs = await getFeaturedBlogs();

    return (
        <div>
            <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Latest blogs
            </h6>
            <ul className="space-y-3">
                {blogs.length === 0 && (
                    <li className="text-gray-500 dark:text-gray-400">No blogs</li>
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
            <h6 className="mt-10 mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Featured blogs
            </h6>
            <ul className="space-y-3">
                {featuredBlogs.length === 0 && (
                    <li className="text-gray-500 dark:text-gray-400">No blogs</li>
                )}
                {featuredBlogs.map((blog) => (
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
