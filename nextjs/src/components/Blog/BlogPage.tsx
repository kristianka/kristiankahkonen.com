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
import Image from "next/image";
import { generatePlaceholder } from "@/misc";

export const BlogPage = async ({
    blog,
    user,
    toc
}: {
    blog: Blog;
    user: User | null;
    toc: Toc[];
}) => {
    const blogUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blog.id}`;
    const placeholder = await generatePlaceholder(blog?.imgUrl);

    return (
        <div key={blog.id}>
            <div>
                <h2 className="mb-5 text-2xl font-bold sm:text-4xl">{blog.title}</h2>
                <h3 className="prose dark:prose-invert mb-3 italic sm:text-xl">
                    {blog.description}
                </h3>
                <div>
                    <div className="flex items-baseline">
                        {blog && user && (
                            <h4 className="prose dark:prose-invert sm:text-lg">
                                Author: {user.first_name} {user.last_name}
                            </h4>
                        )}
                        <div className="ml-auto hidden sm:inline">
                            <ShareButton
                                title={blog.title}
                                text={blog.description}
                                url={blogUrl}
                                rewardPosition="shareRewardTop"
                            />
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
                    {blog.imgUrl && blog.imgUrlAlt && (
                        <div>
                            <Image
                                src={blog.imgUrl}
                                alt={blog.imgUrlAlt}
                                width={960}
                                height={540}
                                className="my-10 w-full rounded-lg"
                                priority={true}
                                placeholder="blur"
                                blurDataURL={placeholder}
                            />
                            {blog.imgCaption && (
                                <div className="prose dark:prose-invert -mt-5 ml-1 text-gray-600 dark:text-gray-400">
                                    {blog.imgCaption}
                                </div>
                            )}
                        </div>
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
                <div className="prose dark:prose-invert my-10 w-full max-w-full text-black dark:text-white">
                    <Markdown
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
                </div>
                <Buttons title={blog.title} text={blog.description} url={blogUrl} />
            </div>
        </div>
    );
};
