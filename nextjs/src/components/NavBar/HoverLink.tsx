import Link from "next/link";
import React, { useState } from "react";

interface HoverLinkProps {
    href: string;
    children: React.ReactNode;
    testId: string;
}

const HoverLink: React.FC<HoverLinkProps> = ({ href, children, testId }) => {
    const [hoverOrigin, setHoverOrigin] = useState<"left" | "right">("left");

    // hover animation based on mouse position
    // come from left to right or right to left depending on mouse position
    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const { clientX, currentTarget } = e;
        const { left, right } = currentTarget.getBoundingClientRect();
        if (clientX - left > right - clientX) {
            setHoverOrigin("left");
        } else {
            setHoverOrigin("right");
        }
    };

    return (
        <Link
            data-testid={testId}
            href={href}
            onMouseEnter={handleMouseEnter}
            className={`relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300 ${
                hoverOrigin === "left"
                    ? "after:origin-bottom-left hover:after:origin-bottom-right hover:after:scale-x-100"
                    : "after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100"
            }`}
        >
            {children}
        </Link>
    );
};

export default HoverLink;
