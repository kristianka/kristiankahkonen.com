import { MarkdownComponents } from "@/components/Markdown";
import { DateToLocal } from "@/components/ui/DateToLocal";
import { ResById } from "@/types";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const fetchBlogs = async (id: string) => {
    try {
        const res = await axios.get<ResById>(`/blogs/${id}?populate=createdBy`, {
            baseURL: process.env.STRAPI_IP,
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_KEY}`
            }
        });
        return res.data;
    } catch (error) {
        console.error("Error while fetching blog");
        return null;
    }
};

export default async function Page({ params }: { params: { slug: string } }) {
    const res = await fetchBlogs(params.slug);

    if (!res) {
        return <h1>Blog not found</h1>;
    }

    const blog = res.data;
    console.log(blog.attributes.createdBy.data.attributes);

    return (
        <main className="flex justify-center m-5">
            <div key={blog.id} className="sm:max-w-max w-full sm:mx-auto">
                <div>
                    <h2 className="text-clip text-3xl sm:text-4xl mb-5">{blog.attributes.title}</h2>
                    {blog.attributes.createdBy && (
                        <h4 className="text-xl prose dark:prose-invert">
                            Author: {blog.attributes.createdBy.data.attributes.firstname}{" "}
                            {blog.attributes.createdBy.data.attributes.lastname}
                        </h4>
                    )}
                    {/* <h3 className="mb-3 text-lg sm:text-xl">{blog.attributes.description}</h3> */}
                    <h4 className="prose dark:prose-invert">
                        <DateToLocal date={blog.attributes.publishedAt} type="published" />
                    </h4>
                    <h4 className="prose dark:prose-invert">
                        <DateToLocal date={blog.attributes.publishedAt} type="updated" />
                    </h4>

                    {/* Don't make the text gray on tailwind typography prose. It's hard to read. */}
                    <Markdown
                        className="mt-10 mb-10 prose dark:prose-invert text-black dark:text-white"
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={MarkdownComponents}
                    >
                        {blog.attributes.content}
                    </Markdown>
                </div>
            </div>
        </main>
    );
}
