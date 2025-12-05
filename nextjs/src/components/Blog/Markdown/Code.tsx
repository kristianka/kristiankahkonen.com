import { CodeProps } from "./types";
import "./styles.css";

import { codeToHtml } from "shiki";
import { CopyButton } from "./CopyButton";
import { LanguageIcon, getLanguageLabel } from "./LanguageIcon";

// supports formats: filename="example.ts" or filename=example.ts or title="example.ts"
const parseMetaString = (meta: string | undefined): string | undefined => {
    if (!meta) return undefined;

    // Try to match filename="..." or filename=... or title="..." or title=...
    const filenameMatch = meta.match(/(?:filename|title)=["']?([^"'\s]+)["']?/);
    return filenameMatch?.[1];
};

// Async component for syntax highlighted code blocks
export const Code = async ({ className, children, "data-meta": meta }: CodeProps) => {
    // Extract language from className
    const langMatch = /language-(\w+)/.exec(className || "");
    const language = langMatch?.[1] || "typescript";
    const hasLanguageClass = !!langMatch;

    // Get filename from meta string (passed via data-meta attribute from remarkCodeMeta)
    const filename = parseMetaString(meta);

    // clean the code content
    const code = typeof children === "string" ? children.trim() : String(children).trim();

    // still highlight inline code without language specified
    if (!hasLanguageClass) {
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

    let html = "";

    try {
        // code block with syntax highlighting using Shiki
        html = await codeToHtml(code, {
            lang: language,
            themes: {
                light: "github-light",
                dark: "github-dark"
            },
            defaultColor: false
        });
    } catch (error) {
        console.error("Error highlighting code:", error);
        // Fallback: render without highlighting
        html = `<pre><code>${code}</code></pre>`;
    }

    return (
        <div className="code-block-wrapper group relative my-4">
            {/* Header with language icon, filename/language, and copy button */}
            <div className="flex items-center justify-between rounded-t-lg bg-neutral-200 px-4 py-2 dark:bg-neutral-800">
                <div className="flex items-center gap-2">
                    <LanguageIcon language={language} />
                    <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                        {filename || getLanguageLabel(language)}
                    </span>
                </div>
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
