import Link from "next/link";

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

                            <div>
                                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                                    Featured blogs
                                </h6>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            Blog 1
                                        </Link>
                                    </li>
                                </ul>
                            </div>
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
                        {/* Possibly logo here */}
                        {/* <a href="#" title="" className="block">
                            <img
                                className="block h-8 w-auto dark:hidden"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                                alt=""
                            />
                            <img
                                className="hidden h-8 w-auto dark:block"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                                alt=""
                            />
                        </a> */}
                        <a
                            href="https://github.com/kristianka/kristiankahkonen.com"
                            target="_blank"
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="text-sm"> Source code</span>
                        </a>

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
