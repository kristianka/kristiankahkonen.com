import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function MoreProjects() {
    return (
        <div className="mt-10">
            <h1 className="text-xl sm:text-3xl text-center">More projects</h1>
            <p className="my-8 prose dark:prose-invert text-center mx-auto">
                I{"'"}m passionate about coding and always working on something new. Check out my
                GitHub for more projects and to see what I{"'"}ve been up to lately!
            </p>
            <div className="text-center">
                <Link
                    href="https://github.com/kristianka"
                    target="_blank"
                    className="inline-flex items-center rounded bg-neutral-900 dark:bg-neutral-950 px-8 py-4 text-xl text-white transition-colors hover:bg-neutral-700 dark:hover:bg-neutral-800 "
                >
                    <FaGithub className="mr-3 w-6 h-6" />
                    GitHub profile
                    <FiArrowUpRight className="inline" />
                </Link>
            </div>
        </div>
    );
}
