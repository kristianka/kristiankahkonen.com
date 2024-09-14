import Link from "next/link";

export default function FrontpageButtons() {
    return (
        <div className="mt-10 flex flex-wrap justify-start gap-3">
            <Link
                href="/blog"
                className="rounded-full border border-black bg-white px-4 py-2 uppercase hover:bg-blue-500 dark:border-white dark:bg-black dark:text-white dark:hover:text-blue-500 sm:px-10 sm:py-2"
            >
                Blog
            </Link>
            <Link
                href="/projects"
                className="rounded-full border border-white bg-black px-4 py-2 uppercase text-white hover:text-blue-500 dark:border-black dark:bg-white dark:text-black dark:hover:bg-blue-500 sm:px-10 sm:py-2"
            >
                Projects
            </Link>
            <Link
                href="/about"
                className="rounded-full border border-black bg-white px-4 py-2 uppercase hover:bg-blue-500 dark:border-white dark:bg-black dark:text-white dark:hover:text-blue-500 sm:px-10 sm:py-2"
            >
                About
            </Link>
            <Link
                href="/contact"
                className="rounded-full border border-white bg-black px-4 py-2 uppercase text-white hover:text-blue-500 dark:border-black dark:bg-white dark:text-black dark:hover:bg-blue-500 sm:px-10 sm:py-2"
            >
                Contact
            </Link>
        </div>
    );
}
