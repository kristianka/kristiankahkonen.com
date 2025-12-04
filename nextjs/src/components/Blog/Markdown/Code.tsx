import { CodeProps } from "./types";
import "./styles.css";

import { codeToHtml } from "shiki";
import { CopyButton } from "./CopyButton";

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
        <div className="code-block-wrapper group relative my-4">
            {/* Language badge */}
            <div className="flex items-center justify-between rounded-t-lg bg-neutral-200 px-4 py-2 dark:bg-neutral-800">
                <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    {language}
                </span>
                <CopyButton code={code} />
            </div>
            {/* Code content */}
            <div
                className="shiki-wrapper overflow-x-auto rounded-b-lg text-sm"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
};
