import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { MarkdownComponents } from "@/components/Markdown";
import { DateToLocal } from "@/components/ui/DateToLocal";
import { fetchBlogById, getBlogAuthor } from "@/services/BlogRequests";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const blog = await fetchBlogById(params.slug);

    if (!blog) {
        return {
            title: "Blog not found - Kristian Kähkönen"
        };
    }

    const title = blog.title + " - Kristian Kähkönen";
    const description = blog.description || "No description available.";

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            type: "article",
            url: `https://kristiankahkonen.com/blog/${params.slug}`
        }
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const blog = await fetchBlogById(params.slug);
    const user = await getBlogAuthor(blog?.user_created);

    if (!blog) {
        notFound();
    }

    return (
        <main className="m-5 max-w-2xl mx-auto">
            <div key={blog.id} className="">
                <div>
                    <h2 className="text-2xl sm:text-3xl mb-5">{blog.title}</h2>
                    {blog && user && (
                        <h4 className="text-xl prose dark:prose-invert">
                            Author: {user.first_name} {user.last_name}
                        </h4>
                    )}
                    {/* <h3 className="mb-3 text-lg sm:text-xl">{blog.attributes.description}</h3> */}
                    <h4 className="prose dark:prose-invert">
                        <DateToLocal date={blog.date_created} type="published" />
                    </h4>
                    {blog.date_updated && (
                        <h4 className="prose dark:prose-invert">
                            <DateToLocal date={blog.date_updated} type="updated" />
                        </h4>
                    )}
                    {/* Don't make the text gray on tailwind typography prose. It's hard to read. */}
                    <Markdown
                        className="mt-10 mb-10 prose dark:prose-invert text-black dark:text-white"
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={MarkdownComponents}
                    >
                        {blog.content}
                    </Markdown>
                </div>
            </div>
        </main>
    );
}
