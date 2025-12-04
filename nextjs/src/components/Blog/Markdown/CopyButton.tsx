"use client";

import { useState } from "react";
import { LuCopy, LuCheck } from "react-icons/lu";

interface CopyButtonProps {
    code: string;
}

export const CopyButton = ({ code }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="relative h-5 w-5 text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            aria-label="Copy code"
        >
            <LuCopy
                className={`absolute inset-0 h-full w-full transition-all duration-100 ${
                    copied ? "scale-50 opacity-0" : "scale-100 opacity-100"
                }`}
            />
            <LuCheck
                className={`absolute inset-0 h-full w-full transition-all duration-100 ${
                    copied ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
            />
        </button>
    );
};
