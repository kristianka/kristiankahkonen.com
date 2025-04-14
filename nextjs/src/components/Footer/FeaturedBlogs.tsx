import { getBlogs, getFeaturedBlogs } from "@/services/BlogRequests";
import Link from "next/link";

export default async function FeaturedBlogs() {
    // show the latest 3 blogs
    const blogs = (await getBlogs()).slice(0, 3);
    const featuredBlogs = await getFeaturedBlogs();

    return (
        <div>
            <hr className="block border-gray-200 py-5 sm:hidden dark:border-gray-600" />
            <p className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Latest blogs
            </p>
            <ul aria-label="Footer latest blogs" className="space-y-3">
                {blogs.length === 0 && (
                    <li className="my-5 text-gray-500 dark:text-gray-400">No blogs</li>
                )}
                {blogs &&
                    blogs.map((blog) => (
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
            <p className="mt-10 mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Featured blogs
            </p>
            <ul aria-label="Footer featured blogs" className="space-y-3">
                {featuredBlogs.length === 0 && (
                    <li className="my-5 text-gray-500 dark:text-gray-400">No blogs</li>
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
