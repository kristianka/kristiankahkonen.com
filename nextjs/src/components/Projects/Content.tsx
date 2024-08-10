import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { iconMapping } from "@/misc";

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
                <div className="grid grid-cols-2 gap-1 sm:gap-3 sm:grid-cols-3 mb-8 text-neutral-600 dark:text-neutral-300 sm:text-xl">
                    {techStack.map((tech) => (
                        <div key={tech} className="flex">
                            <div className="flex items-center scale-100 transition-all duration-300 hover:scale-110 hover:text-black dark:hover:text-white">
                                {iconMapping[tech] || tech}
                                <span className="ml-2">{tech}</span>
                            </div>
                        </div>
                    ))}
                </div>
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
