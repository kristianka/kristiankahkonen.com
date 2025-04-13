"use client";
import { ArrowUp } from "lucide-react";
import { VscShare } from "react-icons/vsc";
import { share } from "./Share";
import { useReward } from "react-rewards";
import { useState } from "react";

interface ButtonsProps {
    title: string;
    text: string;
    url: string;
}

export default function Buttons({ title, text, url }: ButtonsProps) {
    const [shareHeart, setShareHeart] = useState(false);

    const { reward, isAnimating } = useReward("shareRewardBottom", "emoji", {
        emoji: ["❤️"],
        position: "absolute",
        zIndex: 100,
        angle: 90,
        spread: 15,
        startVelocity: 15,
        lifetime: 50
    });

    const shareTo = async () => {
        if (!isAnimating) {
            reward();
        }
        setShareHeart(true);
        await share({
            title,
            text,
            url
        });
    };

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="mx-auto my-5 flex justify-end gap-5">
            <span id="shareRewardBottom" />
            <button
                onClick={shareTo}
                className="flex rounded-full border border-black bg-white px-4 py-2 text-sm hover:bg-blue-500 sm:px-10 sm:py-2 dark:border-white dark:bg-black dark:text-white dark:hover:text-blue-500"
            >
                {shareHeart ? "❤️" : <VscShare className="h-5 w-5" />}
                <span className="ml-3">Share</span>
            </button>
            <button
                onClick={backToTop}
                className="flex rounded-full border border-black bg-white px-4 py-2 text-sm hover:bg-blue-500 sm:px-10 sm:py-2 dark:border-white dark:bg-black dark:text-white dark:hover:text-blue-500"
            >
                <ArrowUp className="h-5 w-5" />
                <span className="ml-3">Back to top</span>
            </button>
        </div>
    );
}
