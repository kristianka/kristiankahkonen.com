import { Blog } from "@/types";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { DateToLocal } from "../DateToLocal";

export const FrontpageListCard = ({ blog }: { blog: Blog }) => {
    return (
        <div className="mb-5" key={blog.id}>
            <Link
                className="hover:text-blue-700 dark:hover:text-blue-500"
                href={`/blog/${blog.id}`}
            >
                <div className="flex flex-col">
                    <div>
                        <h2 className="sm:text-lg font-bold mb-3">{blog.title}</h2>
                        <h3 className="prose dark:prose-invert text-md">{blog.description}</h3>
                        <div className="flex justify-start gap-5 items-center">
                            {/* <h4 className="mt-2 text-sm prose dark:prose-invert">
                                <DateToLocal date={blog.date_created} type="published" />
                            </h4> */}
                            {/* <div className="flex justify-end">
                                <MoveRight size={32} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
