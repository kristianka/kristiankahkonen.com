import { Blog } from "@/types";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { DateToLocal } from "../DateToLocal";

export const ListCard = ({ blog }: { blog: Blog }) => {
    return (
        <>
            <li className="divide-x pb-5 pt-5" key={blog.id}>
                <Link
                    className="hover:text-blue-700 dark:hover:text-blue-500"
                    href={`/blog/${blog.id}`}
                >
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-xl font-bold sm:text-2xl">{blog.title}</h2>
                            <h3 className="prose mt-3 dark:prose-invert">{blog.description}</h3>
                        </div>
                        <div className="">
                            <div className="flex items-center justify-between">
                                <h4 className="prose dark:prose-invert">
                                    <DateToLocal date={blog.date_created} type="published" />
                                </h4>
                                <div className="flex justify-end">
                                    <FaAnglesRight className="h-4 w-4 sm:h-6 sm:w-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    );
};
