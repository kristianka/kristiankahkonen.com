"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface OverlayCopyProps {
    appName: string;
    catchline: string;
}

export default function OverlayCopy({ appName, catchline }: OverlayCopyProps) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity
            }}
            ref={targetRef}
            className="absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{appName}</p>
            <p className="text-center text-4xl font-bold md:text-7xl">{catchline}</p>
        </motion.div>
    );
}
