import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
    return (
        <header className="uppercase sm:flex items-center p-5 dark:text-white">
            <Link
                data-testid="headerHomeLink"
                href="/"
                className="mr-5 sm:mr-10 sm:text-2xl font-bold tracking-wider hover:underline"
            >
                Kristian <br />
                Kähkönen
            </Link>
            {/* <p className="">Work in progress! 🚧</p> */}
            <nav className="overflow-x-auto">
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
                            Resume
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
