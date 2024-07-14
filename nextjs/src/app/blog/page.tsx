// force site to be dynamic, otherwise blogs will not be fetched on production
export const dynamic = "force-dynamic";

import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";

import { DateToLocal } from "@/components/ui/DateToLocal";
import { Blog } from "@/types";
import { fetchBlogs } from "@/services/BlogRequests";

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
                <ul>
                    {blogs.length > 0 &&
                        blogs.map((blog) => (
                            <li
                                className=" border md:w-1/2 sm:mx-auto  hover:bg-slate-50 dark:hover:bg-cyan-950 m-5 p-5 rounded-lg shadow-md"
                                key={blog.id}
                            >
                                <Link className="" href={`/blog/${blog.id}`}>
                                    <div className="flex flex-col">
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl">
                                                {blog.title.toString()}
                                            </h2>
                                            <h3 className="prose dark:prose-invert  truncate text-lg sm:text-xl">
                                                {blog.description}
                                            </h3>
                                        </div>
                                        <div className="">
                                            {!blog.date_updated ? (
                                                <div className="flex justify-between items-center">
                                                    <h4 className="prose dark:prose-invert">
                                                        <DateToLocal
                                                            date={blog.date_created}
                                                            type="published"
                                                        />
                                                    </h4>
                                                    <div className="flex justify-end">
                                                        <FaAnglesRight className="w-4 h-4 sm:w-6 sm:h-6" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <h4 className="prose dark:prose-invert">
                                                    <DateToLocal
                                                        date={blog.date_created}
                                                        type="published"
                                                    />
                                                </h4>
                                            )}
                                            {blog.date_updated && (
                                                <div className="flex justify-between items-center">
                                                    <h4 className="prose dark:prose-invert">
                                                        <DateToLocal
                                                            date={blog.date_updated}
                                                            type="updated"
                                                        />
                                                    </h4>
                                                    <div className="flex justify-end">
                                                        <FaAnglesRight className="w-4 h-4 sm:w-6 sm:h-6" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </main>
    );
}
