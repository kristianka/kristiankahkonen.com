"use client";
import { Toc } from "@/types";
import { useEffect, useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { ShareButton } from "./ShareButton";

interface TableOfContentsMobileProps {
    toc: Toc[];
    title: string;
    text: string;
    url: string;
}

export const TableOfContentsMobile = ({ toc, title, text, url }: TableOfContentsMobileProps) => {
    const [activeHeading, setActiveHeading] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showTOC, setShowTOC] = useState(false);

    // Not really happy with this solution, but it works for now
    // Highlight header on TOC when scrolling
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Find the currently active heading based on scroll position
            for (let i = toc.length - 1; i >= 0; i--) {
                const heading = toc[i];
                const headingElement = document.getElementById(heading.id);
                if (headingElement && headingElement.offsetTop <= scrollPosition + 100) {
                    setActiveHeading(heading.id);
                    break;
                }
            }
        };

        // Add scroll event listener when component mounts
        window.addEventListener("scroll", handleScroll);
        return () => {
            // Clean up event listener when component unmounts
            window.removeEventListener("scroll", handleScroll);
        };
    }, [toc]);

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Update the URL without reloading the page
            window.history.pushState(null, "", `#${id}`);
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Set isLoaded to true after a short delay to trigger the transition
    useEffect(() => {
        if (showTOC) {
            const timeoutId = setTimeout(() => {
                setIsLoaded(true);
            }, 100);

            // Clean up the timeout if the component unmounts before it fires
            return () => clearTimeout(timeoutId);
        } else {
            setIsLoaded(false);
        }
    }, [showTOC]);

    return (
        <div className="mt-5">
            <div className="flex items-center">
                <button
                    className="flex items-center font-semibold"
                    onClick={() => setShowTOC(!showTOC)}
                >
                    On this page
                    {showTOC ? <FaAngleUp className="ml-3" /> : <FaAngleDown className="ml-3" />}
                </button>
                <ShareButton title={title} text={text} url={url} />
            </div>
            {showTOC && (
                <ul className="">
                    <hr className="my-2 h-2" />
                    {toc.length === 0 && (
                        <li className="prose dark:prose-invert">No headings found.</li>
                    )}
                    {toc.map((heading, index) => {
                        const isActive = heading.id === activeHeading;
                        const delay = `${index * 50}ms`;
                        const ml = heading.level - 1;
                        return (
                            <li
                                key={index}
                                style={{
                                    transition: `opacity 0.5s ${delay}, transform 0.5s ${delay}`,
                                    opacity: isLoaded ? 1 : 0,
                                    transform: isLoaded ? "translateY(0)" : "translateY(-10px)"
                                }}
                            >
                                <a
                                    href={`#${heading.id}`}
                                    className={`ml-${ml} ${
                                        isActive
                                            ? "prose dark:prose-invert font-bold text-blue-600 transition-all"
                                            : "prose dark:prose-invert font-semibold transition-all hover:text-black dark:hover:text-white"
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToHeading(heading.id);
                                    }}
                                >
                                    {heading.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
