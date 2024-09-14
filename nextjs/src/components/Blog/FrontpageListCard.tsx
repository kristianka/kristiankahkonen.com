import { Blog } from "@/types";
import Link from "next/link";

export const FrontpageListCard = ({ blog }: { blog: Blog }) => {
    return (
        <div className="mb-5" key={blog.id}>
            <Link
                className="hover:text-blue-700 dark:hover:text-blue-500"
                href={`/blog/${blog.id}`}
            >
                <div className="flex flex-col">
                    <div>
                        <h2 className="mb-3 font-bold sm:text-lg">{blog.title}</h2>
                        <h3 className="text-md prose dark:prose-invert">{blog.description}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};
