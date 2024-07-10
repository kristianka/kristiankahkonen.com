import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
    return (
        <header className="pl-5 p-3 rounded-md shadow-sm  sm:flex items-center bg-white dark:bg-[#121212] dark:text-white sticky top-0 z-10 mb-10">
            <Link
                data-testid="headerHomeLink"
                href="/"
                className="mr-5 sm:mr-10 text-xl sm:text-2xl font-bold tracking-wider hover:underline"
            >
                Kristian <br /> Kähkönen
            </Link>
            {/* <p className="">Work in progress! 🚧</p> */}
            <nav className="overflow-x-auto uppercase">
                <ul className="flex sm:space-x-5 sm:text-right sm:text-lg">
                    <li className="mt-auto mb-auto mr-auto sm:m-auto text-left hover:underline">
                        <Link data-testid="headerProjectsLink" href="/">
                            Projects
                        </Link>
                    </li>
                    <li className="m-auto hover:underline">
                        <Link data-testid="headerBlogLink" href="/blog">
                            Blog
                        </Link>
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
                    <li data-testid="headerModeToggle" className="m-auto  transition-all">
                        <ModeToggle />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
