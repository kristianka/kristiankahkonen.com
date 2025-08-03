"use client";
import { VscShare } from "react-icons/vsc";
import { share } from "./Share";
import { useState } from "react";
import { useReward } from "react-rewards";
import { Button } from "./Button";

interface ShareButtonProps {
    title: string;
    text: string;
    url: string;
    rewardPosition: string;
}

export const ShareButton = ({ title, text, url, rewardPosition }: ShareButtonProps) => {
    const [shareHeart, setShareHeart] = useState(false);
    const { reward, isAnimating } = useReward(rewardPosition, "emoji", {
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
        <div className="ml-auto">
            <span id="shareRewardTop" />

            <Button
                text={shareHeart ? "Shared!" : "Share"}
                icon={shareHeart ? "❤️" : <VscShare className="h-4 w-4 sm:h-4 sm:w-4" />}
                onClick={shareTo}
            />
        </div>
    );
};
