import { ReactNode } from "react";
import StickyImage from "./StickyImage";
import OverlayCopy from "./OverlayCopy";
import { generatePlaceholder } from "@/misc";

interface TextParallaxContentProps {
    appName: string;
    catchline: string;
    imgUrlPc: string;
    imgUrlMedium: string;
    imgUrlMobile: string;
    children: ReactNode;
}

const IMG_PADDING = 2;

export default async function TextParallaxContent({
    appName,
    catchline,
    imgUrlPc,
    imgUrlMedium,
    imgUrlMobile,
    children
}: TextParallaxContentProps) {
    const pcPlaceholder = await generatePlaceholder(imgUrlPc);
    const mobilePlaceholder = await generatePlaceholder(imgUrlMobile);
    const mediumPlaceholder = await generatePlaceholder(imgUrlMedium);

    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage
                    appName={appName}
                    imgUrlPc={imgUrlPc}
                    imgUrlPcPlaceholder={pcPlaceholder}
                    imgUrlMedium={imgUrlMedium}
                    imgUrlMediumPlaceholder={mediumPlaceholder}
                    imgUrlMobile={imgUrlMobile}
                    imgUrlMobilePlaceholder={mobilePlaceholder}
                />
                <OverlayCopy catchline={catchline} appName={appName} />
            </div>
            {children}
        </div>
    );
}
