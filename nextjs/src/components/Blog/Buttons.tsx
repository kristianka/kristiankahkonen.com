"use client";
import { ArrowUp } from "lucide-react";
import { VscShare } from "react-icons/vsc";
import { share } from "./Share";

interface ButtonsProps {
    title: string;
    text: string;
    url: string;
}

export default function Buttons({ title, text, url }: ButtonsProps) {
    const shareTo = () =>
        share({
            title,
            text,
            url
        });

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="mx-auto my-5 flex justify-end gap-5">
            <button
                onClick={shareTo}
                className="flex hover:bg-blue-500 border border-black px-4 py-2 sm:px-10 sm:py-2 text-sm rounded-full bg-white dark:bg-black dark:text-white dark:border-white dark:hover:text-blue-500"
            >
                <VscShare className="w-5 h-5" />
                <span className="ml-3">Share</span>
            </button>
            <button
                onClick={backToTop}
                className="flex hover:bg-blue-500 border border-black px-4 py-2 sm:px-10 sm:py-2 text-sm rounded-full bg-white dark:bg-black dark:text-white dark:border-white dark:hover:text-blue-500"
            >
                <ArrowUp className="w-5 h-5" />
                <span className="ml-3">Back to top</span>
            </button>
        </div>
    );
}
