import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Newsletter() {
    return (
        <div className="space-y-3">
            <hr className="block sm:hidden py-2 border-gray-200 dark:border-gray-600" />
            <p className="text-base font-medium text-primary-700 dark:text-primary-500">
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
                        <SquareArrowOutUpRight className="inline-block w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
