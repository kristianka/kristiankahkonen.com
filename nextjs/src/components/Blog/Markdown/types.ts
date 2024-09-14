import { ReactNode } from "react";

export interface CodeProps {
    className: string;
    node: ReactNode;
    children: string;
}

export interface HeaderProps {
    children: ReactNode;
}

export interface HeaderProps {
    children: ReactNode;
}

export interface ParagraphProps {
    children?: ReactNode;
    node?: {
        children: {
            tagName: string;
            properties: {
                alt: string;
                src: string;
            };
        }[];
    };
}
