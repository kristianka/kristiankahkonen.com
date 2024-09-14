"use client";
import { VscShare } from "react-icons/vsc";
import { share } from "./Share";
import { useState } from "react";
import { useReward } from "react-rewards";

interface ShareButtonProps {
    title: string;
    text: string;
    url: string;
}

export const ShareButton = ({ title, text, url }: ShareButtonProps) => {
    const [shareHeart, setShareHeart] = useState(false);
    const { reward, isAnimating } = useReward("shareRewardTop", "emoji", {
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

    return (
        <div className="ml-auto rounded-full bg-white border border-black dark:border-white dark:bg-black py-1.5 px-5">
            <span id="shareRewardTop" />

            <button
                onClick={shareTo}
                className="text-sm hover:text-blue-600 dark:hover:text-blue-500 rounded-md flex items-center"
            >
                {shareHeart ? "❤️" : <VscShare className="w-4 h-4 sm:w-4 sm:h-4" />}
                <span className="ml-3">Share</span>
            </button>
        </div>
    );
};
