import { generateSlug } from "@/components/GenerateSlug";
import { createElement } from "react";
import { GoLink } from "react-icons/go";
import { HeaderProps } from "./types";

export const Header = (props: HeaderProps, level: number) => {
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
    // heading tag is h1, h2, h3, h4, h5, or h6
    let HeadingTag = `h${level}`;
    const isHeading1 = HeadingTag === "h1";

    // render h1 especially as 3xl, otherwise larger than site title
    // but make it h2 so it doesn't conflict with site title (better for SEO)
    if (HeadingTag === "h1") {
        HeadingTag = "h2";
    }

    // create a new element with the same tag name
    return (
        <div className="group">
            {createElement(
                HeadingTag,
                {
                    key: slug,
                    className: ` ${isHeading1 ? "text-3xl" : ""} font-bold`,
                    id: slug
                },
                <>
                    <a
                        className="flex w-full items-center font-bold no-underline"
                        href={`#${slug}`}
                        {...props}
                    >
                        {heading}
                        <GoLink className="ml-3 p-0.5 text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </a>
                </>
            )}
        </div>
    );
};
