"use client";
import { useState } from "react";
import { VscShare } from "react-icons/vsc";

interface ShareButtonProps {
    title: string;
    text: string;
    url: string;
}

export const ShareButton = ({ title, text, url }: ShareButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const share = () => {
        try {
            if (navigator.share) {
                navigator.share({
                    title: title + " - Kristian Kähkönen",
                    text: text,
                    url: url
                });
                return;
            }
            // fallback to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(url);
                setIsCopied(true);
                return;
            }
        } catch (error) {
            console.error("Error sharing", error);
        }
    };
    return (
        <button
            onClick={share}
            className="mx-3 hover:text-blue-600 dark:hover:text-blue-500 rounded-md flex ml-auto "
        >
            <VscShare className="w-5 h-5" />
            <span className="hidden sm:block ml-3">
                {isCopied ? "Copied to clipboard!" : "Share this blog"}
            </span>
            {/* small screens */}
            <span className="block sm:hidden ml-3">{isCopied ? "Copied!" : "Share"}</span>
        </button>
    );
};
