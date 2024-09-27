import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col">
            <h1 className="text-center text-xl dark:text-gray-300">404 - Blog not found</h1>
            <h1 className="mt-5 text-center text-lg text-gray-600 dark:text-gray-300">
                Sorry, the blog you are looking for does not exist or has been removed.
            </h1>
            <Link
                className="mx-auto mt-5 rounded-lg text-center text-lg underline hover:text-gray-600"
                href="/blog"
            >
                Click here to navigate to available blogs
            </Link>
        </div>
    );
}
