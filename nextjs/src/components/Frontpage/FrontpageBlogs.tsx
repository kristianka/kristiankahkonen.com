import { FrontpageListCard } from "../Blog/FrontpageListCard";
import { getFeaturedBlogs } from "@/services/BlogRequests";
import { Blog } from "@/types";

export default async function FrontpageBlogs() {
    const blogs = await getFeaturedBlogs();
    const featuredBlog = blogs[0] as Blog;

    return (
        <div>
            <h2 className="mt-20 text-xl sm:text-2xl tracking-wide font-bold m-auto mb-5">
                Featured blog post
            </h2>
            <div className="mt-5">
                {featuredBlog ? (
                    <FrontpageListCard blog={featuredBlog} />
                ) : (
                    <p>No blogs featured</p>
                )}
            </div>
        </div>
    );
}
