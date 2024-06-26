"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
    const text = "Kristian Kähkönen".split("");
    return (
        <main className="flex min-h-screen dark:bg-black">
            <div className="m-5 text-3xl tracking-wider dark:text-white">
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
            </div>
        </main>
    );
}
