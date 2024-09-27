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
    // heading tag is h2, h3, h4, h5, or h6
    const HeadingTag = `h${level}`;

    // create a new element with the same tag name
    return (
        <div className="group">
            {createElement(
                HeadingTag,
                { key: slug, className: "flex items-center", id: slug },
                <>
                    <a className="mr-3 no-underline" href={`#${slug}`} {...props}></a>
                    <GoLink className="p-0.5 text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </>
            )}
        </div>
    );
};
