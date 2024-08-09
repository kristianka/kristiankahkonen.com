import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

import Link from "next/link";

interface ContentProps {
    title: string;
    description: string;
    techStack: string[];
    sourceCodeUrl: string;
    liveUrl?: string;
    liveUrlShort?: string;
}

export default function Content({
    title,
    description,
    techStack,
    sourceCodeUrl,
    liveUrl,
    liveUrlShort
}: ContentProps) {
    const hasLiveUrl = liveUrl !== null && liveUrlShort !== null;
    return (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
            <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl text-neutral-600 dark:text-neutral-300 md:text-2xl">
                    {description}
                </p>
                <p className="mb-8 text-xl text-neutral-600 dark:text-neutral-300 md:text-2xl">
                    {techStack}
                </p>
                <div className="flex sm:flex-row flex-col">
                    {sourceCodeUrl && (
                        <Link
                            href={sourceCodeUrl}
                            target="_blank"
                            className="flex items-center rounded bg-neutral-900 dark:bg-neutral-950 px-8 py-4 text-xl text-white transition-colors hover:bg-neutral-700 dark:hover:bg-neutral-800 "
                        >
                            <FaGithub className="mr-3 w-6 h-6" />
                            Source code
                            <FiArrowUpRight className="inline" />
                        </Link>
                    )}
                    {hasLiveUrl && (
                        <Link
                            href={liveUrl as string}
                            target="_blank"
                            className="sm:ml-5 mt-5 sm:mt-0 flex items-center rounded bg-neutral-900 dark:bg-neutral-950 px-8 py-4 text-xl text-white transition-colors hover:bg-neutral-700 dark:hover:bg-neutral-800"
                        >
                            <CiGlobe className="mr-3 w-6 h-6" />
                            Live at {liveUrlShort}
                            <FiArrowUpRight className="inline" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
