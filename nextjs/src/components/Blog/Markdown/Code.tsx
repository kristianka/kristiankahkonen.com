import { CodeProps } from "./types";
import "./styles.css";

import { codeToHtml } from "shiki";

// Async component for syntax highlighted code blocks
export const Code = async ({ className, children }: CodeProps) => {
    const langMatch = /language-(\w+)/.exec(className || "");
    const language = langMatch?.[1] || "typescript";

    // clean the code content
    const code = typeof children === "string" ? children.trim() : String(children).trim();

    // stil highlight inline code without language specified
    if (!langMatch) {
        const html = await codeToHtml(code, {
            lang: "typescript",
            themes: {
                light: "github-light",
                dark: "github-dark"
            },
            defaultColor: false
        });

        return <span className="inline-code-wrapper" dangerouslySetInnerHTML={{ __html: html }} />;
    }

    // code block with syntax highlighting using Shiki
    const html = await codeToHtml(code, {
        lang: language,
        themes: {
            light: "github-light",
            dark: "github-dark"
        },
        defaultColor: false
    });

    return (
        <div
            className="shiki-wrapper overflow-x-auto rounded-lg text-sm"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};
