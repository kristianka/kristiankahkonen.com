"use client";

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import { LuCopy, LuCheck, LuX } from "react-icons/lu";

interface CopyButtonProps {
    code: string;
}

type CopyState = "idle" | "copied" | "error";

export const CopyButton = ({ code }: CopyButtonProps) => {
    const [copyState, setCopyState] = useState<CopyState>("idle");

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopyState("copied");
            setTimeout(() => setCopyState("idle"), 1000);
        } catch {
            setCopyState("error");
            setTimeout(() => setCopyState("idle"), 2500);
        }
    };

    const getTooltipText = () => {
        switch (copyState) {
            case "copied":
                return "Copied!";
            case "error":
                return "Browser denied clipboard access";
            default:
                return "Copy";
        }
    };

    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        onClick={handleCopy}
                        className="relative h-5 w-5 text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                        aria-label="Copy code"
                    >
                        <LuCopy
                            className={`absolute inset-0 h-full w-full transition-all duration-200 ease-out ${
                                copyState === "idle"
                                    ? "scale-100 rotate-0 opacity-100"
                                    : "scale-0 -rotate-12 opacity-0"
                            }`}
                        />
                        <LuCheck
                            className={`absolute inset-0 h-full w-full transition-all duration-200 ease-out ${
                                copyState === "copied"
                                    ? "scale-100 rotate-0 opacity-100"
                                    : "scale-0 rotate-12 opacity-0"
                            }`}
                        />
                        <LuX
                            className={`absolute inset-0 h-full w-full transition-all duration-200 ease-out ${
                                copyState === "error"
                                    ? "scale-100 rotate-0 opacity-100"
                                    : "scale-0 rotate-12 opacity-0"
                            }`}
                        />
                    </button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8}>
                    <span className="text-xs">{getTooltipText()}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
