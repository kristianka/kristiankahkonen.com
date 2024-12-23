import { notFound } from "next/navigation";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { Node } from "unist";
import remarkParse from "remark-parse";

import { getBlogAuthor, getBlogById, getBlogs } from "@/services/BlogRequests";
import { BlogPage } from "@/components/Blog/BlogPage";
import { Toc } from "@/types";
import { generateSlug } from "@/components/GenerateSlug";
import TableOfContents from "@/components/Blog/TableOfContents";
import FadeIn from "@/components/FadeIn";

interface HeadingNode extends Node {
    type: "heading";
    depth: 1 | 2 | 3 | 4 | 5 | 6;
    children: Array<{
        type: string;
        value: string;
    }>;
}

export async function generateStaticParams() {
    const blogs = await getBlogs();

    return blogs.map((blog) => ({
        params: {
            slug: blog.id
        }
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;
    const blog = await getBlogById(slug);
    const user = await getBlogAuthor(blog?.user_created);

    if (!blog || !user) {
        return {
            title: "Blog not found - Kristian Kähkönen"
        };
    }

    const title = blog.title + " - Kristian Kähkönen";
    const description = blog.description || "No description available.";
    const author = `${user.first_name} ${user.last_name}` || "Unknown author";

    const image = blog.imgUrl || "../opengraph-image.jpg";

    return {
        title: title,
        description: description,
        author: author,
        openGraph: {
            author: author,
            title: title,
            description: description,
            type: "article",
            url: `https://kristiankahkonen.com/blog/${params.slug}`,
            images: [
                {
                    url: image,
                    width: 960,
                    height: 540,
                    alt: blog.imgUrlAlt || "Blog image"
                }
            ]
        }
    };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const blog = await getBlogById(params.slug);
    const user = await getBlogAuthor(blog?.user_created);

    if (!blog) {
        notFound();
    }

    // Generate Table of Contents from the headings (TOC)
    const toc: Toc[] = [];
    const tree = unified().use(remarkParse).parse(blog.content);

    visit(tree, "heading", (node: Node) => {
        if (node.type === "heading") {
            const headingNode = node as HeadingNode;

            const text = headingNode.children.map((child) => child.value).join("");
            const id = generateSlug(text);

            toc.push({
                id,
                text,
                level: headingNode.depth
            });
        }
    });

    return (
        <main className="m-5 mx-auto min-h-screen max-w-7xl">
            <FadeIn>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    <div className="top-96 md:col-span-3">
                        <BlogPage blog={blog} user={user} toc={toc} />
                    </div>
                    <div className="sticky top-36 col-span-1 mt-56 hidden h-max md:block">
                        <TableOfContents toc={toc} />
                    </div>
                </div>
            </FadeIn>
        </main>
    );
}
