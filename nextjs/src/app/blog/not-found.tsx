import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col">
            <h1 className="text-xl text-center  dark:text-gray-300">404 - Blog not found</h1>
            <h1 className="mt-5 text-lg text-center text-gray-600 dark:text-gray-300">
                Sorry, the blog you are looking for does not exist or has been removed.
            </h1>
            <Link
                className="mt-5 mx-auto underline rounded-lg text-lg text-center hover:text-gray-600"
                href="/blog"
            >
                Click here to navigate to available blogs
            </Link>
        </div>
    );
}
