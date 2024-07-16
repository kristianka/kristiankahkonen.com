"use client";
import { Toc } from "@/types";
import { useEffect, useState } from "react";

const TableOfContents = ({ toc }: { toc: Toc[] }) => {
    const [activeHeading, setActiveHeading] = useState<string | null>(null);

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
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            // Update the URL without reloading the page
            window.history.pushState(null, "", `#${id}`);
        }
    };

    return (
        <div>
            <h3 className="text-xl font-semibold">TABLE OF CONTENTS</h3>
            <hr className="my-2" />
            <ul>
                {toc.map((heading, index) => {
                    const marginLeft = (heading.level - 1) * 2;
                    console.log(marginLeft);
                    const isActive = heading.id === activeHeading;

                    return (
                        <li key={index} className={`ml-${marginLeft}`}>
                            <a
                                href={`#${heading.id}`}
                                className={` ${
                                    isActive
                                        ? "text-blue-600 transition-all font-bold"
                                        : "text-gray-600 font-semibold"
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
