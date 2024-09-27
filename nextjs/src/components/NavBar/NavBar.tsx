"use client";
import Link from "next/link";
import { LuRss } from "react-icons/lu";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

import { ModeToggle } from "../ModeToggle";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import HoverLink from "./HoverLink";

const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
];

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // don't show sticky header on these pages
    const pathname = usePathname();
    const notSticky = ["/projects"];
    const isSticky = !notSticky.includes(pathname);

    return (
        <header
            className={`w-full items-center justify-between bg-slate-50 pb-3 pt-3 dark:bg-zinc-900 dark:text-white sm:flex ${
                isSticky ? "sticky top-0" : ""
            } z-10 mb-10`}
        >
            <div className="flex items-center justify-between">
                <Link
                    data-testid="headerNameHomeLink"
                    href="/"
                    className="relative mr-5 inline-block text-xl font-bold tracking-wide after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full sm:mr-10 sm:text-2xl"
                >
                    Kristian Kähkönen
                </Link>
                <div className="flex items-center space-x-5 sm:hidden">
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
                    {links.map((link) => (
                        <li key={link.href}>
                            <HoverLink href={link.href} testId={`header${link.label}Link`}>
                                {link.label}
                            </HoverLink>
                        </li>
                    ))}
                    <li
                        data-testid="headerModeToggle"
                        className="hidden items-baseline transition-all sm:block"
                    >
                        <ModeToggle />
                    </li>

                    <li className="items-baseline">
                        <Link
                            className="transition-all hover:text-gray-400"
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
