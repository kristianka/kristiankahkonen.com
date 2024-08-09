import { ReactNode } from "react";
import StickyImage from "./StickyImage";
import OverlayCopy from "./OverlayCopy";

interface TextParallaxContentProps {
    imgUrlPc: string;
    imgUrlMobile: string;
    subheading: string;
    heading: string;
    children: ReactNode;
}

const IMG_PADDING = 2;

export default function TextParallaxContent({
    imgUrlPc,
    imgUrlMobile,
    subheading,
    heading,
    children
}: TextParallaxContentProps) {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrlPc={imgUrlPc} imgUrlMobile={imgUrlMobile} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
}
