import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";

import { BlogPage } from "@/components/Blog/BlogPage";
import TableOfContents from "@/components/Blog/TableOfContents";
import { fetchBlogById, getBlogAuthor } from "@/services/BlogRequests";
import { Toc } from "@/types";

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

    // Generate Table of Contents from the headings (TOC)
    const toc: Toc[] = [];
    const tree = unified().use(remarkParse).parse(blog.content);

    visit(tree, "heading", (node) => {
        const text = node.children.map((child: any) => child.value).join("");
        const id = text.toLowerCase().replace(/\s+/g, "-");
        toc.push({
            id,
            text,
            level: node.depth
        });
    });

    return (
        <main className="m-5 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="md:col-span-3 top-96">
                    <BlogPage blog={blog} user={user} />
                </div>
                <div className="hidden md:block col-span-1 sticky top-48 h-screen">
                    <TableOfContents toc={toc} />
                </div>
            </div>
        </main>
    );
}
