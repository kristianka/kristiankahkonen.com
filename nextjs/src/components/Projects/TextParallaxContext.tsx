import { ReactNode } from "react";
import StickyImage from "./StickyImage";
import OverlayCopy from "./OverlayCopy";

interface TextParallaxContentProps {
    appName: string;
    catchline: string;
    imgUrlPc: string;
    imgUrlMedium: string;
    imgUrlMobile: string;
    children: ReactNode;
}

const IMG_PADDING = 2;

export default function TextParallaxContent({
    appName,
    catchline,
    imgUrlPc,
    imgUrlMedium,
    imgUrlMobile,
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
                <StickyImage
                    imgUrlPc={imgUrlPc}
                    imgUrlMedium={imgUrlMedium}
                    imgUrlMobile={imgUrlMobile}
                />
                <OverlayCopy catchline={catchline} appName={appName} />
            </div>
            {children}
        </div>
    );
}
