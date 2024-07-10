import axios from "axios";
import Link from "next/link";
import { Res } from "@/types";
import { FaAnglesRight } from "react-icons/fa6";

export const fetchBlogs = async () => {
    try {
        const res = await axios.get<Res>(`http://${process.env.STRAPI_IP}/api/blogs`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_KEY}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(error);
        return { data: [] };
    }
};

export default async function Home() {
    const blogs = await fetchBlogs();
    // sort to show the latest blog first
    blogs.data.sort(
        (a, b) =>
            new Date(b.attributes.publishedAt).getTime() -
            new Date(a.attributes.publishedAt).getTime()
    );
    return (
        <main className="">
            <div className="">
                <h1 className="text-3xl sm:text-4xl text-center">Blogs</h1>
                {/* <h1>Join my email list</h1> */}
                {blogs.data.length === 0 && <h1>No blogs found</h1>}
                <ul>
                    {blogs.data.length > 0 &&
                        blogs.data.map((blog) => (
                            <li
                                className=" border md:w-1/2 sm:mx-auto dark:bg-gray-950 hover:bg-slate-50 dark:hover:bg-slate-900 m-5 p-5 rounded-lg shadow-md"
                                key={blog.id}
                            >
                                <Link className="" href={`/blog/${blog.id}`}>
                                    <div className="flex flex-col">
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl">
                                                {blog.attributes.title}
                                            </h2>
                                            <h3 className="truncate text-lg sm:text-xl">
                                                {blog.attributes.description}
                                            </h3>
                                        </div>
                                        <div className="">
                                            <h4 className="prose dark:prose-invert">
                                                Published on{" "}
                                                {new Date(
                                                    blog.attributes.publishedAt
                                                ).toLocaleDateString()}{" "}
                                                at{" "}
                                                {new Date(
                                                    blog.attributes.publishedAt
                                                ).toLocaleTimeString()}
                                            </h4>
                                            <div className="flex justify-between items-center">
                                                <h4 className="prose dark:prose-invert">
                                                    Last updated on{" "}
                                                    {new Date(
                                                        blog.attributes.updatedAt
                                                    ).toLocaleDateString()}{" "}
                                                    at{" "}
                                                    {new Date(
                                                        blog.attributes.updatedAt
                                                    ).toLocaleTimeString()}
                                                </h4>
                                                <div className="flex justify-end">
                                                    <FaAnglesRight className="w-4 h-4 sm:w-6 sm:h-6" />
                                                </div>
                                            </div>
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
