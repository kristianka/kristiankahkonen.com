import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Newsletter() {
    return (
        <div className="space-y-3">
            <hr className="block border-gray-200 py-2 sm:hidden dark:border-gray-600" />
            <p className="text-primary-700 dark:text-primary-500 text-base font-medium">
                Subscribe to the newsletter
            </p>
            <div className="space-y-4">
                <div className="relative mr-3 w-full sm:w-96 lg:w-full">
                    <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                        Get notified of the latest posts to your email. No spam, unsubscribe at any
                        time. Powered by Substack.
                    </span>
                </div>
                <div className="flex justify-between">
                    <Link
                        className="inline-flex items-center gap-3 text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white"
                        target="_blank"
                        href="https://kristiankahkonen.substack.com/"
                    >
                        Subscribe
                        <SquareArrowOutUpRight className="inline-block h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
