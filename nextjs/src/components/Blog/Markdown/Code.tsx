import rangeParser from "parse-numeric-range";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import { CodeProps } from "./types";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

const syntaxTheme = vscDarkPlus;

export const Code = ({ node, inline, className, ...props }: CodeProps) => {
    const hasLang = /language-(\w+)/.exec(className || "");
    const text = className;
    const regex = /\{([^{}]*)\}/;
    const match = text.match(regex);

    const hasMeta = match !== null;

    const applyHighlights = (lineNumber: number) => {
        if (hasMeta) {
            const highlightLines = rangeParser(match[1]);
            const data = highlightLines.includes(lineNumber) ? { className: "highlight-line" } : {};
            console.log(data);
            return data;
        } else {
            return {};
        }
    };

    return hasLang ? (
        <SyntaxHighlighter
            style={syntaxTheme}
            language={hasLang[1]}
            PreTag="div"
            className="rounded-lg"
            showLineNumbers={true}
            lineNumberStyle={{ display: "none" }}
            wrapLines={hasMeta}
            useInlineStyles={true}
            lineProps={applyHighlights}
        >
            {props.children}
        </SyntaxHighlighter>
    ) : (
        <code className={className} {...props}>
            {props.children}
        </code>
    );
};
