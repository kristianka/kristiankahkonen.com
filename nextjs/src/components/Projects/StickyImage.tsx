"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const IMG_PADDING = 18;

interface StickyImageProps {
    appName: string;
    imgUrlPc: string;
    imgUrlPcPlaceholder: string;
    imgUrlMedium: string;
    imgUrlMediumPlaceholder: string;
    imgUrlMobile: string;
    imgUrlMobilePlaceholder: string;
}

export default function StickyImage({
    appName,
    imgUrlPc,
    imgUrlPcPlaceholder,
    imgUrlMedium,
    imgUrlMediumPlaceholder,
    imgUrlMobile,
    imgUrlMobilePlaceholder
}: StickyImageProps) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            {/* image for pc, full width */}
            <Image
                src={imgUrlPc}
                alt={`Screenshot of ${appName}`}
                fill={true}
                style={{ objectFit: "cover" }}
                className="absolute inset-0 z-[-1] hidden lg:block"
                priority={true}
                placeholder="blur"
                blurDataURL={imgUrlPcPlaceholder}
            />

            {/* image for tablet or windowed size on pc, full width */}
            <Image
                src={imgUrlMedium}
                alt={`Screenshot of ${appName}`}
                fill={true}
                style={{ objectFit: "cover" }}
                className="absolute inset-0 z-[-1] hidden sm:block lg:hidden"
                priority={true}
                placeholder="blur"
                blurDataURL={imgUrlMediumPlaceholder}
            />

            {/* image for mobile, full width */}
            <Image
                src={imgUrlMobile}
                alt={`Screenshot of ${appName}`}
                fill={true}
                style={{ objectFit: "cover" }}
                className="absolute inset-0 z-[-1] block sm:hidden"
                priority={true}
                placeholder="blur"
                blurDataURL={imgUrlMobilePlaceholder}
            />

            <motion.div
                className="absolute inset-0 bg-neutral-950/60"
                style={{
                    opacity
                }}
            />
        </motion.div>
    );
}
