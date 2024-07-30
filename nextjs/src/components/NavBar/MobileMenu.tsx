import { Rss, HomeIcon, Book, Mail, Code2, Code } from "lucide-react";

import Link from "next/link";

export function MobileMenu() {
    return (
        <nav className="mt-3 border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <div className="p-3 grid grid-cols-3">
                <Link className="mr-3 flex items-center" href="/">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    <span>Home</span>
                </Link>
                <Link className="mr-3 flex items-center" href="/blog">
                    <Book className="mr-2 h-4 w-4" />
                    <span>Blog</span>
                </Link>
                <Link className="mr-3 flex items-center" href="/projects">
                    <Code className="mr-2 h-4 w-4" />
                    <span>Projects</span>
                </Link>
            </div>
            <div className="p-3 grid grid-cols-3">
                <Link className="mr-3 flex items-center" href="/about">
                    <Code2 className="mr-2 h-4 w-4" />
                    <span>Resume</span>
                </Link>
                <Link className="mr-3 flex items-center" href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Contact</span>
                </Link>
                <Link className="mr-3 flex items-center" href="/rss.xml" target="_blank">
                    <Rss className="mr-2 h-4 w-4" />
                    <span>RSS</span>
                </Link>
            </div>
        </nav>
    );
}
