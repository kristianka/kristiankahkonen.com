import Link from "next/link";
import React from "react";

interface HoverLinkProps {
    href: string;
    children: React.ReactNode;
    testId: string;
}

const HoverLink: React.FC<HoverLinkProps> = ({ href, children, testId }) => {
    return (
        <Link
            data-testid={testId}
            href={href}
            className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
        >
            {children}
        </Link>
    );
};

export default HoverLink;
