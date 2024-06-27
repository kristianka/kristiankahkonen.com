"use client";
import { motion } from "framer-motion";
import { ProjectsCarousel } from "./ProjectsCarousel";

export const AboutMe = () => {
    const text = "Kristian Kähkönen".split("");
    return (
        <main className="flex min-h-screen">
            <div className="m-5">
                <h1 className="text-3xl tracking-wider dark:text-white">
                    {text.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: i / 15
                            }}
                            key={i}
                        >
                            {el}
                        </motion.span>
                    ))}
                </h1>
                <h2>Software Engineer from Finland</h2>
                {/* <ProjectsCarousel /> */}
            </div>
        </main>
    );
};
