/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TitleAnimation = () => {
    const text = "Kristian Kähkönen".split("");
    const titles = [
        "Software Engineer",
        "Frontend Developer",
        "Backend Developer",
        "DevOps Engineer",
        "Full Stack Developer"
    ];
    const [currentTitle, setCurrentTitle] = useState(titles[0]);

    // change title every 5 seconds
    useEffect(() => {
        let currentTitleIndex = 0;
        const intervalId = setInterval(() => {
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            setCurrentTitle(titles[currentTitleIndex]);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className="flex">
            <div className="m3-5">
                <h1 className="text-3xl sm:text-4xl tracking-wider dark:text-white">
                    {text.map((el, i) => (
                        <motion.span
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
                <motion.h2
                    key={currentTitle}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-extrabold tracking-wide"
                >
                    {currentTitle}
                </motion.h2>
            </div>
        </main>
    );
};
