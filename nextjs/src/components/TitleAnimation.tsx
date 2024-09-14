/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TitleAnimation = () => {
    const text = "Hi, I'm Kristian Kähkönen.".split("");
    const titles = [
        "Software Engineer",
        "Frontend Developer",
        "Backend Developer",
        "DevOps Engineer",
        "Full Stack Developer"
    ];
    const [currentTitle, setCurrentTitle] = useState(titles[0]);
    // prevent animation on first render, because the whole page has a fade in animation
    const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);

    // change title every 5 seconds
    useEffect(() => {
        let currentTitleIndex = 0;
        const intervalId = setInterval(() => {
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            setCurrentTitle(titles[currentTitleIndex]);
            setHasAnimatedOnce(true);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className="flex">
            <div>
                <h1 className="text-3xl tracking-wider dark:text-white md:text-4xl">
                    {text.map((el, i) => (
                        <motion.span
                            data-testid="nameAnimation"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: i / 15
                            }}
                            key={i}
                        >
                            {el}
                        </motion.span>
                    ))}
                </h1>
                <div className="sm:flex">
                    <span className="text-3xl font-extrabold tracking-wide md:text-4xl">
                        You can hire me as a
                    </span>
                    <motion.h2
                        data-testid="jobTitleAnimation"
                        key={currentTitle}
                        initial={hasAnimatedOnce ? { opacity: 0, y: -20 } : {}}
                        animate={hasAnimatedOnce ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-extrabold tracking-wide md:text-4xl"
                    >
                        <span className="hidden sm:inline">&nbsp;</span>
                        {currentTitle}
                    </motion.h2>
                </div>
            </div>
        </main>
    );
};
