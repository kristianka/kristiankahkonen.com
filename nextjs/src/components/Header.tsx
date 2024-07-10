import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
    return (
        <header className="pl-5 p-3 rounded-md shadow-sm  sm:flex items-center bg-white dark:bg-[#121212] dark:text-white sticky top-0 z-10 mb-10">
            <div className="flex justify-between items-center">
                <Link
                    data-testid="headerHomeLink"
                    href="/"
                    className="mr-5 sm:mr-10 text-xl sm:text-2xl font-bold tracking-wider hover:underline"
                >
                    Kristian <br /> Kähkönen
                </Link>
                <div className="sm:hidden flex justify-end">
                    <ModeToggle />
                </div>
            </div>

            {/* <p className="">Work in progress! 🚧</p> */}
            <nav className="overflow-x-auto uppercase">
                <ul className="flex sm:space-x-5 sm:text-right sm:text-lg">
                    <li className="mt-auto mb-auto mr-auto sm:m-auto text-left hover:underline">
                        <Link data-testid="headerProjectsLink" href="/">
                            Projects
                        </Link>
                    </li>
                    <li className="m-auto">
                        <Link className="hover:underline" data-testid="headerBlogLink" href="/blog">
                            Blog
                        </Link>
                        {/* <span className="text-xs sm:text-sm p-1 bg-violet-400 rounded-lg m-1">
                            BETA
                        </span> */}
                    </li>
                    <li className="m-auto hover:underline">
                        <Link data-testid="headerAboutLink" href="/about">
                            Résumé
                        </Link>
                    </li>
                    <li className="m-auto hover:underline">
                        <Link data-testid="headerContactLink" href="/contact">
                            Contact
                        </Link>
                    </li>
                    <li
                        data-testid="headerModeToggle"
                        className="hidden sm:block m-auto  transition-all"
                    >
                        <ModeToggle />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
