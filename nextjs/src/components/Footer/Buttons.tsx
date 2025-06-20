"use client";
import { ArrowUp } from "lucide-react";
import { IoCodeSharp } from "react-icons/io5";
import { IoCodeSlashSharp } from "react-icons/io5";
import { useReward } from "react-rewards";

export default function Buttons() {
    const { reward } = useReward("rewardAnimation", "emoji", {
        emoji: ["😍", "😮", "😎", "🧑‍💻"],
        position: "absolute",
        zIndex: 100,
        angle: 90,
        spread: 30,
        startVelocity: 20,
        lifetime: 50
    });

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <span id="rewardAnimation" className="inset-1" />
            <div className="flex items-center justify-between">
                <div className="justify-start">
                    <button
                        onClick={reward}
                        className="flex cursor-pointer items-center hover:text-blue-500"
                    >
                        <IoCodeSharp className="mr-2 h-6 w-auto sm:h-8" />
                        <p className="text-lg font-bold">Kristian Kähkönen</p>
                        <IoCodeSlashSharp className="ml-2 h-6 w-auto sm:h-8" />
                    </button>
                </div>
                <div className="justify-end">
                    <button
                        onClick={backToTop}
                        className="flex cursor-pointer items-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                        <span className="mr-3 hidden sm:block">Back to top</span>
                        <ArrowUp className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
