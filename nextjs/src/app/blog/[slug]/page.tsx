import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { MarkdownComponents } from "@/components/Markdown";
import { DateToLocal } from "@/components/ui/DateToLocal";
import { fetchBlogById, getBlogAuthor } from "@/services/BlogRequests";

export default async function Page({ params }: { params: { slug: string } }) {
    const blog = await fetchBlogById(params.slug);
    const user = await getBlogAuthor(blog?.user_created);

    if (!blog) {
        return (
            <div>
                <h2 className="text-lg text-center text-gray-600 dark:text-gray-300">
                    Blog not found.
                </h2>
            </div>
        );
    }

    return (
        <main className="flex justify-center m-5">
            <div key={blog.id} className="sm:max-w-max w-full sm:mx-auto">
                <div>
                    <h2 className="text-clip text-3xl sm:text-4xl mb-5">{blog.title}</h2>
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
