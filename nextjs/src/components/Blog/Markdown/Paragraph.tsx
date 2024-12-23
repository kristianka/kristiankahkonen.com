import Image from "next/image";
import { ParagraphProps } from "./types";
import type { JSX } from "react";

export const Paragraph = ({ children, node }: ParagraphProps): JSX.Element => {
    if (node?.children[0].tagName === "img") {
        const image = node.children[0];
        const metastring = image.properties.alt;
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
        const metaWidth = metastring.match(/{([^}]+)x/);
        const metaHeight = metastring.match(/x([^}]+)}/);
        const width = metaWidth ? metaWidth[1] : "768";
        const height = metaHeight ? metaHeight[1] : "432";
        const isPriority = metastring?.toLowerCase().match("{priority}") !== null;
        const hasCaption = metastring?.toLowerCase().includes("{caption:");
        const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

        return (
            <div className="postImgWrapper">
                <Image
                    src={image.properties.src}
                    width={Number(width)}
                    height={Number(height)}
                    className="postImg w-full rounded-md"
                    alt={alt}
                    priority={isPriority}
                />
                {hasCaption ? (
                    <div className="caption" aria-label={caption}>
                        {caption}
                    </div>
                ) : null}
            </div>
        );
    }
    return <p>{children}</p>;
};
