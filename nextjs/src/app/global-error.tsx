"use client";

import Link from "next/link";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
    console.error(error);
    return (
        <html>
            <body>
                <div className="flex flex-col">
                    <h1 className="text-center text-xl dark:text-gray-300">
                        An error has occured.
                    </h1>
                    <h1 className="mt-5 text-center text-lg text-gray-600 dark:text-gray-300">
                        Sorry, something went wrong.
                    </h1>
                    <Link
                        className="mx-auto mt-5 rounded-lg text-center text-lg underline hover:text-gray-600"
                        href="/"
                    >
                        Click here to navigate to home
                    </Link>
                </div>
            </body>
        </html>
    );
}
