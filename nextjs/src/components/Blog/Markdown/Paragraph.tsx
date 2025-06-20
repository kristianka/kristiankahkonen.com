import Image from "next/image";
import { ParagraphProps } from "./types";
import type { JSX } from "react";

/**
 * Parses metadata from a metastring enclosed in {}.
 * Supports key=value pairs, with quoted multiline values.
 * Example usage in Markdown editor: `![My beautiful image {1200x800 caption="Caption text"}](<image-url>)`
 */
const parseMetaString = (metaString: string = ""): Record<string, string | boolean> => {
    const meta: Record<string, string | boolean> = {};

    if (!metaString) return meta;

    // check for shorthand WxH like 1200x2400
    const shorthandMatch = metaString.match(/(\d+)\s*x\s*(\d+)/i);
    if (shorthandMatch) {
        meta.width = shorthandMatch[1];
        meta.height = shorthandMatch[2];
        // Remove shorthand from string so it's not re-parsed
        metaString = metaString.replace(shorthandMatch[0], "").trim();
    }

    // parse key=value pairs
    const regex = /(\w+)=("(?:[^"\\]|\\.)*"|\S+)/g;
    let match;
    while ((match = regex.exec(metaString))) {
        const key = match[1];
        let rawValue = match[2];

        if (rawValue.startsWith('"') && rawValue.endsWith('"')) {
            rawValue = rawValue.slice(1, -1).replace(/\\"/g, '"');
        }
        meta[key] = rawValue?.trim() ?? true;
    }
    return meta;
};

// little hacky, Directus does not support image captions for whatever reason
export const Paragraph = ({ children, node }: ParagraphProps): JSX.Element => {
    if (node?.children?.[0]?.tagName === "img") {
        const image = node.children[0];
        const metastring = image.properties.alt ?? "";
        const altText = metastring.replace(/\{[\s\S]*?\}/g, "").trim();

        // Extract meta block
        const metaBlockMatch = metastring.match(/\{([\s\S]*?)\}/);
        const meta = parseMetaString(metaBlockMatch?.[1] ?? "");

        // Parse metadata with safe defaults
        const width = parseInt(meta.width as string) || 768;
        const height = parseInt(meta.height as string) || 432;
        const isPriority = meta.priority !== undefined && meta.priority !== "false";
        const caption = typeof meta.caption === "string" ? meta.caption.trim() : null;

        return (
            <div className="my-4">
                <Image
                    src={image.properties.src}
                    width={width}
                    height={height}
                    className="rounded-md p-0"
                    alt={altText}
                    priority={isPriority}
                />
                {caption && (
                    <div className="prose dark:prose-invert -mt-5 ml-1 text-gray-600 dark:text-gray-400">
                        {caption}
                    </div>
                )}
            </div>
        );
    }
    return <p>{children}</p>;
};
