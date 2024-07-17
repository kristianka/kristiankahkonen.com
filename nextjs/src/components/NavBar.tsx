import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export const NavBar = () => {
    return (
        <header className="mt-5 w-full pt-3 pb-3 justify-between sm:flex items-center bg-white dark:bg-[#121212] dark:text-white sticky top-0 z-10 mb-10">
            <div className="flex justify-between items-baseline">
                <Link
                    data-testid="headerHomeLink"
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
                <ul className="flex sm:space-x-5 sm:text-right sm:text-lg">
                    <li className="mt-auto mb-auto mr-auto sm:m-auto text-left">
                        <Link
                            className="hover:text-blue-700 dark:hover:text-blue-500"
                            data-testid="headerProjectsLink"
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="m-auto">
                        <Link
                            className="hover:text-blue-700 dark:hover:text-blue-500"
                            data-testid="headerBlogLink"
                            href="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li className="mt-auto mb-auto mr-auto sm:m-auto text-left">
                        <Link
                            className="hover:text-blue-700 dark:hover:text-blue-500"
                            data-testid="headerProjectsLink"
                            href="/projects"
                        >
                            Projects
                        </Link>
                    </li>

                    <li className="m-auto">
                        <Link
                            className="hover:text-blue-700 dark:hover:text-blue-500"
                            data-testid="headerAboutLink"
                            href="/about"
                        >
                            Résumé
                        </Link>
                    </li>
                    <li className="m-auto">
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
                        className="hidden sm:block m-auto transition-all"
                    >
                        <ModeToggle />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
