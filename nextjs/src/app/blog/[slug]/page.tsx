import { ResById } from "@/types";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export const fetchBlogs = async (id: string) => {
    try {
        const res = await axios.get<ResById>(`http://${process.env.STRAPI_IP}/api/blogs/${id}`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_KEY}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default async function Page({ params }: { params: { slug: string } }) {
    const res = await fetchBlogs(params.slug);
    if (!res) {
        return <h1>Blog not found</h1>;
    }

    const blog = res.data;
    console.log(blog);

    return (
        <main className="flex justify-center m-5">
            <div key={blog.id} className="sm:max-w-max w-full sm:mx-auto">
                <div>
                    <h2 className=" text-clip text-3xl sm:text-4xl mb-10">
                        {blog.attributes.title}
                    </h2>
                    <h3 className="mb-3 text-lg sm:text-xl">{blog.attributes.description}</h3>
                    <h4 className="prose">
                        Published on {new Date(blog.attributes.publishedAt).toLocaleDateString()} at{" "}
                        {new Date(blog.attributes.publishedAt).toLocaleTimeString()}
                    </h4>
                    <h4 className="prose">
                        Last updated on {new Date(blog.attributes.updatedAt).toLocaleDateString()}{" "}
                        at {new Date(blog.attributes.updatedAt).toLocaleTimeString()}
                    </h4>

                    {/* Don't make the text gray on tailwind typography prose. It's hard to read. */}
                    <Markdown
                        className="mt-10 mb-10 prose dark:prose-invert text-black dark:text-white"
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {blog.attributes.content}
                    </Markdown>
                </div>
            </div>
        </main>
    );
}
