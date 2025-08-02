"use client";
import { Toc } from "@/types";
import { useEffect, useState } from "react";

const TableOfContents = ({ toc }: { toc: Toc[] }) => {
    const [activeHeading, setActiveHeading] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

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

    useEffect(() => {
        // Set isLoaded to true after a short delay to trigger the transition
        const timeoutId = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        // Clean up the timeout if the component unmounts before it fires
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            <h3 className="text-xl font-semibold uppercase">On this page</h3>
            <hr className="my-2 h-2" />
            <ul>
                {toc.length === 0 && (
                    <li className="prose dark:prose-invert">No headings found.</li>
                )}
                {toc.map((heading, index) => {
                    const isActive = heading.id === activeHeading;
                    const delay = `${index * 50}ms`;

                    return (
                        <li
                            key={index}
                            style={{
                                marginLeft: `${heading.level - 1}rem`,
                                transition: `opacity 0.5s ${delay}, transform 0.5s ${delay}`,
                                opacity: isLoaded ? 1 : 0,
                                transform: isLoaded ? "translateY(0)" : "translateY(-10px)"
                            }}
                        >
                            <a
                                href={`#${heading.id}`}
                                className={` ${
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
        </div>
    );
};

export default TableOfContents;
