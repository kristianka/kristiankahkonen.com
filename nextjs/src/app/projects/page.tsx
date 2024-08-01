import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen">
            <div>
                <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-5">
                    Projects
                </h2>
                <p>
                    This page will be updated soon. At this moment, you can see my projects in{" "}
                    <Link
                        className="text-blue-500"
                        href="https://github.com/kristianka"
                        target="_blank"
                    >
                        my GitHub profile
                    </Link>
                    .
                </p>
            </div>
        </main>
    );
}
