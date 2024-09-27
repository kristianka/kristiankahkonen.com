import { FrontpageListCard } from "../Blog/FrontpageListCard";
import { getFeaturedBlogs } from "@/services/BlogRequests";

export default async function FrontpageBlogs() {
    const blogs = await getFeaturedBlogs();
    const featuredBlog = blogs[0];

    return (
        <div>
            <h2 className="m-auto mb-5 mt-20 text-xl font-bold tracking-wide sm:text-2xl">
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
