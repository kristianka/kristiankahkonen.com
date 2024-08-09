"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const IMG_PADDING = 2;

interface StickyImageProps {
    imgUrlPc: string;
    imgUrlMobile: string;
}

export default function StickyImage({ imgUrlPc, imgUrlMobile }: StickyImageProps) {
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
            <Image
                src={imgUrlPc}
                alt="Background Image"
                fill={true}
                style={{ objectFit: "cover" }}
                className="hidden sm:block absolute inset-0 z-[-1]"
                priority={true}
            />
            <Image
                src={imgUrlMobile}
                alt="Background Image"
                fill={true}
                style={{ objectFit: "cover" }}
                className="block sm:hidden absolute inset-0 z-[-1]"
                priority={true}
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
