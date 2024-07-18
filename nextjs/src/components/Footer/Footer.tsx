import dynamic from "next/dynamic";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoCodeSharp } from "react-icons/io5";
import { IoCodeSlashSharp } from "react-icons/io5";

const FeaturedBlogs = dynamic(() => import("@/components/Footer/FeaturedBlogs"), { ssr: true });

export function Footer() {
    return (
        <footer className="mt-32">
            <hr className="border-gray-200 dark:border-gray-600" />
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="border-b border-gray-100 py-6 dark:border-gray-700 md:py-8 lg:py-16">
                    <div className="items-start gap-6 md:gap-8 lg:flex 2xl:gap-8">
                        <div className="grid min-w-0 flex-1 grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2">
                            <div>
                                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                                    About
                                </h6>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/projects"
                                            title=""
                                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/resume"
                                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            Resume
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            title=""
                                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <FeaturedBlogs />
                        </div>
                        <div className="mt-6 w-full md:mt-8 lg:mt-0 lg:max-w-lg">
                            <div className="space-y-5 rounded-lg bg-gray-50 p-6 dark:bg-slate-700">
                                <p className="text-base font-medium text-primary-700 dark:text-primary-500">
                                    Subscribe to the newsletter
                                </p>
                                <hr className="border-gray-200 dark:border-gray-600" />
                                <form action="#">
                                    <div className="items-end space-y-4 sm:flex sm:space-y-0">
                                        <div className="relative mr-3 w-full sm:w-96 lg:w-full">
                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Get the latest blogs to your inbox. (Coming soon!)
                                            </label>
                                            <input
                                                disabled={true}
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-300 p-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-500 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:w-96 lg:w-full"
                                                // className="block w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:w-96 lg:w-full"
                                                placeholder="Enter your email address"
                                                type="email"
                                                id="email"
                                            />
                                        </div>
                                        <div>
                                            <button
                                                disabled={true}
                                                type="submit"
                                                className="w-full cursor-pointer rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-black dark:text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-6 md:py-8">
                    <div className="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0">
                        <a
                            href="https://kristiankahkonen.com"
                            className="flex items-center hover:text-blue-500"
                        >
                            <IoCodeSharp className="h-8 w-auto mr-2" />
                            <p className="text-lg font-bold">Kristian Kähkönen</p>
                            <IoCodeSlashSharp className="ml-2 h-8 w-auto" />
                        </a>
                        <div>
                            <p className="mb-3">Thanks for visiting!</p>
                            <a
                                href="https://github.com/kristianka/kristiankahkonen.com"
                                target="_blank"
                                className=" flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                <BsGithub className="h-6 w-6" />
                                <span className="text-sm">Source code</span>
                            </a>
                            <a
                                href="mailto:kristian@kristiankahkonen.com"
                                target="_blank"
                                className="mt-1 flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                <CiMail className="h-6 w-6" />
                                <span className="text-sm">Contact</span>
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            © 2024{" "}
                            <a
                                target="_blank"
                                href="https://kristiankahkonen.com"
                                className="hover:underline"
                            >
                                Kristian Kähkönen
                            </a>
                            . All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
