import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { iconMapping } from "@/misc";

import Link from "next/link";
import FadeIn from "../FadeIn";

interface ContentProps {
    title: string;
    description: string;
    technologies: string[];
    sourceCodeUrl: string;
    liveUrl?: string;
    liveUrlShort?: string;
}

export default function Content({
    title,
    description,
    technologies,
    sourceCodeUrl,
    liveUrl,
    liveUrlShort
}: ContentProps) {
    const hasLiveUrl = liveUrl !== null && liveUrlShort !== null;

    return (
        <div className="pt-12 pb-24">
            <FadeIn>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-12">
                    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
                    <div className="col-span-1 md:col-span-8">
                        <p className="mb-4 text-xl text-neutral-600 md:text-2xl dark:text-neutral-300">
                            {description}
                        </p>
                        <div className="mb-8 grid grid-cols-2 gap-1 text-neutral-600 sm:grid-cols-3 sm:gap-3 sm:text-xl dark:text-neutral-300">
                            {technologies &&
                                technologies.map((tech) => (
                                    <div key={tech} className="flex">
                                        <div className="flex scale-100 items-center transition-all duration-300 hover:scale-110 hover:text-black dark:hover:text-white">
                                            {iconMapping[tech] || tech}
                                            <span className="ml-2">{tech}</span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            {sourceCodeUrl && (
                                <Link
                                    href={sourceCodeUrl}
                                    target="_blank"
                                    className="flex items-center rounded bg-neutral-900 px-8 py-4 text-lg text-white transition-colors hover:bg-neutral-700 sm:text-xl dark:bg-neutral-950 dark:hover:bg-neutral-800"
                                >
                                    <FaGithub className="mr-3 h-6 w-6" />
                                    Source code
                                    <FiArrowUpRight className="inline" />
                                </Link>
                            )}
                            {hasLiveUrl && (
                                <Link
                                    href={liveUrl as string}
                                    target="_blank"
                                    className="mt-5 flex items-center rounded bg-neutral-900 px-8 py-4 text-lg text-white transition-colors hover:bg-neutral-700 sm:mt-0 sm:ml-5 sm:text-xl dark:bg-neutral-950 dark:hover:bg-neutral-800"
                                >
                                    <CiGlobe className="mr-3 h-6 w-6" />
                                    Live at {liveUrlShort}
                                    <FiArrowUpRight className="inline" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
