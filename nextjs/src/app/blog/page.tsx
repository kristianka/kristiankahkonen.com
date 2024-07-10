import axios from "axios";
import Link from "next/link";
import { Res } from "@/types";

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
        <main className="flex justify-center">
            <div className="mx-auto">
                {/* <h1>Join my email list</h1> */}
                {blogs.data.length === 0 && <h1>No blogs found</h1>}
                <h1 className="text-3xl sm:text-4xl">Blogs</h1>
                <ul>
                    {blogs.data.length > 0 &&
                        blogs.data.map((blog) => (
                            <li key={blog.id}>
                                <Link href={`/blog/${blog.id}`}>
                                    <h2 className="text-xl sm:text-2xl">{blog.attributes.title}</h2>
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </main>
    );
}
