import Link from "next/link";
import { LuRss } from "react-icons/lu";

import { ModeToggle } from "./ModeToggle";

export const NavBar = () => {
    return (
        <header className="mt-5 w-full pt-3 pb-3 justify-between sm:flex items-center bg-white dark:bg-[#121212] dark:text-white sticky top-0 z-10 mb-10">
            <div className="flex justify-between items-baseline">
                <Link
                    data-testid="headerNameHomeLink"
                    href="/"
                    className="mr-5 sm:mr-10 text-xl sm:text-2xl font-bold tracking-wider hover:text-blue-700 dark:hover:text-blue-500"
                >
                    Kristian Kähkönen
                </Link>
                <div className="sm:hidden">
                    <ModeToggle />
                </div>
            </div>
            {/* <p className="">Work in progress! 🚧</p> */}
            <nav className="overflow-x-auto">
                <ul className="flex space-x-5 sm:text-lg">
                    <li className="text-left">
                        <Link
                            className="hover:text-blue-700 dark:hover:text-blue-500"
                            data-testid="headerHomeLink"
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            className="hover:text-blue-700 dark:hover:text-blue-500"
                            data-testid="headerBlogLink"
                            href="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            className="hover:text-blue-700 dark:hover:text-blue-500"
                            data-testid="headerProjectsLink"
                            href="/projects"
                        >
                            Projects
                        </Link>
                    </li>

                    <li className="">
                        <Link
                            className="hover:text-blue-700 dark:hover:text-blue-500"
                            data-testid="headerAboutLink"
                            href="/about"
                        >
                            Résumé
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            className="hover:text-blue-700 dark:hover:text-blue-500"
                            data-testid="headerContactLink"
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                    <li
                        data-testid="headerModeToggle"
                        className="items-baseline hidden sm:block transition-all"
                    >
                        <ModeToggle />
                    </li>

                    <li className="items-baseline">
                        <Link
                            className="hover:text-gray-400 transition-all"
                            data-testid="headerRssLink"
                            href="/rss.xml"
                            target="_blank"
                        >
                            <LuRss className="h-6 w-6" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
