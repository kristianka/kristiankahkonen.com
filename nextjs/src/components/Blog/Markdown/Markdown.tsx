import { Code } from "./Code";
import { Header } from "./Header";
import { Paragraph } from "./Paragraph";
import { CodeProps, HeaderProps, ParagraphProps } from "./types";

// Thanks to Amir Ardalan for the following code!
// https://amirardalan.com/blog/use-next-image-with-react-markdown

export const MarkdownComponents: object = {
    // render h1, h2, h3, h4, h5, h6 tags
    h1: (props: HeaderProps) => Header(props, 1),
    h2: (props: HeaderProps) => Header(props, 2),
    h3: (props: HeaderProps) => Header(props, 3),
    h4: (props: HeaderProps) => Header(props, 4),
    h5: (props: HeaderProps) => Header(props, 5),
    h6: (props: HeaderProps) => Header(props, 6),

    // so images are rendered with next/image
    p: (props: ParagraphProps) => Paragraph(props),

    // render codeblock with syntax highlighting
    code: (props: CodeProps) => Code(props)
};
