import Image from "next/image";
import React, { createElement } from "react";
import { GoLink } from "react-icons/go";
import { generateSlug } from "./GenerateSlug";

interface H3Props {
    children: React.ReactNode;
}

const hComponent = (props: H3Props, level: number) => {
    const children = Array.isArray(props.children) ? props.children : [props.children];
    const heading = children
        .flatMap((element) =>
            typeof element === "string"
                ? element
                : element?.type !== undefined && typeof element.props.children === "string"
                ? element.props.children
                : []
        )
        .join("");

    const slug = generateSlug(heading);
    // heading tag is h2, h3, h4, h5, or h6
    const HeadingTag = `h${level}`;

    // create a new element with the same tag name
    return (
        <div className="group">
            {createElement(
                HeadingTag,
                { key: slug, className: "flex items-center", id: slug },
                <>
                    <a className="no-underline mr-3" href={`#${slug}`} {...props}></a>
                    <GoLink className="p-0.5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
            )}
        </div>
    );
};

// Thanks to Amir Ardalan for the following code!
// https://amirardalan.com/blog/use-next-image-with-react-markdown

export const MarkdownComponents: object = {
    // render h1, h2, h3, h4, h5, h6 tags
    // h1 should not be used because it's bigger than site title,
    // but just in case it's rendered as h2
    h1: (props: H3Props) => hComponent(props, 2),
    h2: (props: H3Props) => hComponent(props, 2),
    h3: (props: H3Props) => hComponent(props, 3),
    h4: (props: H3Props) => hComponent(props, 4),
    h5: (props: H3Props) => hComponent(props, 5),
    h6: (props: H3Props) => hComponent(props, 6),

    p: (paragraph: { children?: boolean; node?: any }) => {
        const { node } = paragraph;

        if (node.children[0].tagName === "img") {
            const image = node.children[0];
            const metastring = image.properties.alt;
            const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
            const metaWidth = metastring.match(/{([^}]+)x/);
            const metaHeight = metastring.match(/x([^}]+)}/);
            const width = metaWidth ? metaWidth[1] : "768";
            const height = metaHeight ? metaHeight[1] : "432";
            const isPriority = metastring?.toLowerCase().match("{priority}");
            const hasCaption = metastring?.toLowerCase().includes("{caption:");
            const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

            return (
                <div className="postImgWrapper">
                    <Image
                        src={image.properties.src}
                        width={width}
                        height={height}
                        className="postImg rounded-md w-full"
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
        return <p>{paragraph.children}</p>;
    }
};
