import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";

import { MarkdownComponents } from "./Markdown/Markdown";
import { DateToLocal } from "../DateToLocal";
import { Blog, Toc, User } from "@/types";

// smooth scroll to anchor links
import "../../styles.css";
import { TableOfContentsMobile } from "./TableOfContentsMobile";
import { ShareButton } from "./ShareButton";
import Buttons from "./Buttons";

export const BlogPage = ({ blog, user, toc }: { blog: Blog; user: User | null; toc: Toc[] }) => {
    const blogUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blog.id}`;

    return (
        <div key={blog.id}>
            <div>
                <h2 className="text-2xl sm:text-4xl mb-5 font-bold">{blog.title}</h2>
                <h3 className="sm:text-xl mb-3 prose dark:prose-invert italic ">
                    {blog.description}
                </h3>
                <div>
                    <div className="flex items-baseline">
                        {blog && user && (
                            <h4 className="sm:text-lg prose dark:prose-invert">
                                Author: {user.first_name} {user.last_name}
                            </h4>
                        )}
                        <div className="hidden ml-auto sm:inline">
                            <ShareButton title={blog.title} text={blog.description} url={blogUrl} />
                        </div>
                    </div>
                    <h4 className="prose dark:prose-invert">
                        <DateToLocal date={blog.date_created} type="published" />
                    </h4>
                    {blog.date_updated && (
                        <h4 className="prose dark:prose-invert">
                            <DateToLocal date={blog.date_updated} type="updated" />
                        </h4>
                    )}
                </div>
                <div className="block sm:hidden">
                    <TableOfContentsMobile
                        toc={toc}
                        title={blog.title}
                        text={blog.description}
                        url={blogUrl}
                    />
                </div>
                {/* Don't make the text gray on tailwind typography prose. It's hard to read. */}
                <Markdown
                    className="max-w-full w-full my-10 prose dark:prose-invert text-black dark:text-white"
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[
                        [rehypeRaw],
                        [rehypeSlug],
                        [rehypeExternalLinks, { target: "_blank" }]
                    ]}
                    components={MarkdownComponents}
                >
                    {blog.content}
                </Markdown>
                <Buttons title={blog.title} text={blog.description} url={blogUrl} />
            </div>
        </div>
    );
};
