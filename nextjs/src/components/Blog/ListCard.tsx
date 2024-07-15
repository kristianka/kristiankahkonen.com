import { Blog } from "@/types";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { DateToLocal } from "../ui/DateToLocal";

export const ListCard = ({ blog }: { blog: Blog }) => {
    return (
        <>
            <li className="divide-x p-5" key={blog.id}>
                <Link className="hover:text-blue-700" href={`/blog/${blog.id}`}>
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold">{blog.title}</h2>
                            <h3 className="prose dark:prose-invert text-md sm:text-lg">
                                {blog.description}
                            </h3>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center">
                                <h4 className="prose dark:prose-invert">
                                    <DateToLocal date={blog.date_created} type="published" />
                                </h4>
                                <div className="flex justify-end">
                                    <FaAnglesRight className="w-4 h-4 sm:w-6 sm:h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    );
};
