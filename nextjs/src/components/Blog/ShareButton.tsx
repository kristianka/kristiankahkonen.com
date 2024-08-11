"use client";
import { VscShare } from "react-icons/vsc";
import { share } from "./Share";

interface ShareButtonProps {
    title: string;
    text: string;
    url: string;
}

export const ShareButton = ({ title, text, url }: ShareButtonProps) => {
    const shareTo = () =>
        share({
            title,
            text,
            url
        });

    return (
        <button
            onClick={shareTo}
            className="mx-3 hover:text-blue-600 dark:hover:text-blue-500 rounded-md flex ml-auto "
        >
            <VscShare className="w-5 h-5" />
            <span className="ml-3">Share</span>
        </button>
    );
};
