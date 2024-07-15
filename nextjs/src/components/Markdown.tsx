import Image from "next/image";

// Thanks to Amir Ardalan for the following code!
// https://amirardalan.com/blog/use-next-image-with-react-markdown

export const MarkdownComponents: object = {
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
                        className="postImg rounded-md"
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
