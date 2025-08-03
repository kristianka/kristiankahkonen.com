"use client";
import { ArrowUp } from "lucide-react";
import { ShareButton } from "./ShareButton";
import { Button } from "./Button";

interface ButtonsProps {
    title: string;
    text: string;
    url: string;
}

export default function Buttons({ title, text, url }: ButtonsProps) {
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="mx-auto my-5 flex justify-end gap-3">
            <ShareButton title={title} text={text} url={url} rewardPosition="shareRewardBottom" />
            <span id="shareRewardBottom" />
            <Button text="Back to top" icon={<ArrowUp className="h-5 w-5" />} onClick={backToTop} />
        </div>
    );
}
