import Link from "next/link";

export default function Navigation() {
    return (
        <div>
            <p className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Navigation
            </p>
            <ul aria-label="Footer site navigation" className="space-y-3">
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
                        href="/about"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                        About
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
    );
}
