import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { MarkdownComponents } from "../Markdown";
import { DateToLocal } from "../DateToLocal";
import { Blog, User } from "@/types";

export const BlogPage = ({ blog, user }: { blog: Blog; user: User | null }) => {
    return (
        <div key={blog.id} className="">
            <div>
                <h2 className="text-2xl sm:text-3xl mb-5 font-bold">{blog.title}</h2>
                {blog && user && (
                    <h4 className="text-xl prose dark:prose-invert">
                        Author: {user.first_name} {user.last_name}
                    </h4>
                )}
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
                    className="max-w-full w-full mt-10 mb-96 prose dark:prose-invert text-black dark:text-white"
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[
                        rehypeRaw,
                        rehypeSlug,
                        [rehypeAutolinkHeadings, { behavior: "prepend" }]
                    ]}
                    components={MarkdownComponents}
                >
                    {blog.content}
                </Markdown>
            </div>
        </div>
    );
};
