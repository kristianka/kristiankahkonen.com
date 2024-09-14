import Link from "next/link";

import FeaturedBlogs from "@/components/Footer/FeaturedBlogs";
import Buttons from "./Buttons";
import Navigation from "./Navigation";
import Newsletter from "./Newsletter";
import Links from "./Links";

export function Footer() {
    return (
        <footer className="mt-48">
            <hr className="border-gray-200 dark:border-gray-600" />
            <div className="mx-auto max-w-screen-xl 2xl:px-0">
                <div className="border-b border-gray-100 py-6 dark:border-gray-700 md:py-8 lg:py-16">
                    <div className="items-start gap-6 md:gap-8 lg:flex 2xl:gap-8">
                        <div className="grid min-w-0 flex-1 grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:gap-8">
                            <Navigation />
                            <FeaturedBlogs />
                        </div>
                        <div className="mt-6 w-full px-4 sm:mt-0 lg:max-w-lg">
                            <Newsletter />
                        </div>
                    </div>
                </div>

                <div className="px-4 py-6 md:py-8">
                    <div className="gap-4 space-y-5">
                        <Buttons />
                        <div className="space-y-1">
                            <p className="mb-3">Thanks for visiting!</p>
                            <Links />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            © 2024{" "}
                            <Link target="_blank" href="/" className="hover:underline">
                                Kristian Kähkönen
                            </Link>
                            . All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
