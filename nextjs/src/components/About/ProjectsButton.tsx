import FadeIn from "../FadeIn";
import Link from "next/link";

export default function ProjectsButton() {
    return (
        <FadeIn>
            <h2 className="m-auto mb-5 text-2xl font-bold tracking-wide sm:text-4xl">Projects</h2>
            <p className="">
                Click the button below to see these technologies and skills in action!
            </p>
            <div className="mt-5">
                <Link
                    href="/projects"
                    className="rounded-full border border-black bg-white px-4 py-2 uppercase hover:bg-blue-500 sm:px-10 sm:py-2 dark:border-white dark:bg-black dark:text-white dark:hover:text-blue-500"
                >
                    Projects
                </Link>
            </div>
        </FadeIn>
    );
}
