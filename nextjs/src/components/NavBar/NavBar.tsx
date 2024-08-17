"use client";
import Link from "next/link";
import { LuRss } from "react-icons/lu";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

import { ModeToggle } from "../ModeToggle";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // don't show sticky header on these pages
    const pathname = usePathname();
    const notSticky = ["/projects"];
    const isSticky = !notSticky.includes(pathname);

    return (
        <header
            className={`w-full pt-3 pb-3 justify-between sm:flex items-center bg-slate-50 dark:bg-zinc-900 dark:text-white ${
                isSticky ? "sticky top-0" : ""
            } z-10 mb-10`}
        >
            <div className="flex justify-between items-center">
                <Link
                    data-testid="headerNameHomeLink"
                    href="/"
                    className="mr-5 sm:mr-10 text-xl sm:text-2xl font-bold tracking-wide hover:text-blue-700 dark:hover:text-blue-500"
                >
                    Kristian Kähkönen
                </Link>
                <div className="flex space-x-5 sm:hidden items-center">
                    <ModeToggle />
                    <Hamburger
                        label="Open main navigation menu"
                        toggled={isOpen}
                        size={20}
                        toggle={setIsOpen}
                    />
                </div>
            </div>
            {/* mobile nav */}
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* desktop nav */}
            <nav className="hidden sm:block">
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
                            About
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
                            aria-label="RSS Feed"
                        >
                            <LuRss className="h-6 w-6" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
