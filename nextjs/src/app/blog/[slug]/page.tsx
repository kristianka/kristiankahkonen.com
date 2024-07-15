import { BlogPage } from "@/components/Blog/BlogPage";
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
            <BlogPage blog={blog} user={user} />
        </main>
    );
}
