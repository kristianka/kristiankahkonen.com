"use client";
import { motion } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
}

export default function FadeIn({ children }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}
