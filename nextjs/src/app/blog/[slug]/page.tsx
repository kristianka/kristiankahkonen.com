import { notFound } from "next/navigation";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import remarkParse from "remark-parse";

import { getBlogAuthor, getBlogById, getBlogs } from "@/services/BlogRequests";
import { BlogPage } from "@/components/Blog/BlogPage";
import { Toc } from "@/types";
import { generateSlug } from "@/components/GenerateSlug";
import TableOfContents from "@/components/Blog/TableOfContents";
import FadeIn from "@/components/FadeIn";

export async function generateStaticParams() {
    const blogs = await getBlogs();

    return blogs.map((blog) => ({
        params: {
            slug: blog.id
        }
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
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

export default async function Page({ params }: { params: { slug: string } }) {
    const blog = await getBlogById(params.slug);
    const user = await getBlogAuthor(blog?.user_created);

    if (!blog) {
        notFound();
    }

    // Generate Table of Contents from the headings (TOC)
    const toc: Toc[] = [];
    const tree = unified().use(remarkParse).parse(blog.content);

    visit(tree, "heading", (node) => {
        const text = node.children.map((child: any) => child.value).join("");
        const id = generateSlug(text);
        toc.push({
            id,
            text,
            level: node.depth
        });
    });

    return (
        <main className="m-5 max-w-7xl mx-auto min-h-screen">
            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-3 top-96">
                        <BlogPage blog={blog} user={user} toc={toc} />
                    </div>
                    <div className="hidden md:block col-span-1 sticky mt-56 top-36 h-max">
                        <TableOfContents toc={toc} />
                    </div>
                </div>
            </FadeIn>
        </main>
    );
}
