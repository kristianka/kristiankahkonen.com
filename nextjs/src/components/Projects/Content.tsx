import { FiArrowUpRight } from "react-icons/fi";

interface ContentProps {
    title: string;
    description: string;
    techStack: string[];
    sourceCodeUrl: string;
    liveUrl?: string;
}

export default function Content({
    title,
    description,
    techStack,
    sourceCodeUrl,
    liveUrl
}: ContentProps) {
    return (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
            <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl text-neutral-600 md:text-2xl">{description}</p>
                <p className="mb-8 text-xl text-neutral-600 md:text-2xl">{techStack}</p>
                {sourceCodeUrl && (
                    <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
                        Source code <FiArrowUpRight className="inline" />
                    </button>
                )}
                {liveUrl && (
                    <button className="md:ml-5 mt-5 md:mt-0 w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
                        Live at <FiArrowUpRight className="inline" />
                    </button>
                )}
            </div>
        </div>
    );
}
