"use client";
import { Certification } from "@/types";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import FullscreenPopup from "./FullscreenPopup";
import FadeIn from "../FadeIn";

interface CertificationProps {
    certs: Certification[];
    placeholders: string[];
}

export default function Certifications({ certs, placeholders }: CertificationProps) {
    const [showMore, setShowMore] = useState(false);
    const [sliceSize, setSliceSize] = useState(3);

    const [open, setOpen] = useState(false);
    const [certification, setCertification] = useState<Certification | null>(null);

    const openModal = (certification: Certification) => {
        setCertification(certification);
        setOpen(true);
    };

    const closeModal = () => {
        setCertification(null);
        setOpen(false);
    };

    // update slice size based on screen size
    useEffect(() => {
        const updateSliceSize = () => {
            if (window.innerWidth >= 768) {
                setSliceSize(3);
            } else if (window.innerWidth >= 640) {
                setSliceSize(2);
            } else {
                setSliceSize(1);
            }
        };

        // run on initial load and when resizing
        updateSliceSize();
        window.addEventListener("resize", updateSliceSize);

        return () => window.removeEventListener("resize", updateSliceSize);
    }, []);

    return (
        <FadeIn>
            <p className="prose dark:prose-invert mx-auto my-5 text-center text-sm">
                Tip: Click on a certification to fullscreen it
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {/* render initially only one on mobile etc. */}
                {certs.slice(0, showMore ? certs.length : sliceSize).map((certification, index) => (
                    // hover animation and animation when images load
                    <motion.div
                        key={certification.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
                        whileTap={{ scale: 0.98, transition: { duration: 0.2 } }}
                        tabIndex={0}
                        onClick={() => openModal(certification)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                openModal(certification);
                            }
                        }}
                    >
                        <Image
                            src={certification.url}
                            alt={certification.alt}
                            width={2000}
                            height={1500}
                            blurDataURL={placeholders[index]}
                            placeholder="blur"
                            className="h-auto max-w-full cursor-pointer rounded-lg"
                        />
                    </motion.div>
                ))}
                {certification && (
                    <FullscreenPopup
                        open={open}
                        closeModal={closeModal}
                        certification={certification}
                    />
                )}
            </div>
            <div className="mt-3 flex items-center before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300 after:content-['']">
                <button
                    type="button"
                    onClick={() => setShowMore(!showMore)}
                    className="bg-secondary-50 z-20 flex cursor-pointer items-center rounded-full border border-gray-300 bg-white px-3 py-2 text-center text-sm font-medium text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800"
                >
                    {showMore ? <FaAngleUp className="mr-1" /> : <FaAngleDown className="mr-1" />}
                    {showMore ? "View less" : "View more"}
                </button>
            </div>
            <span className="flex flex-wrap items-center">
                Verify my certifications in
                <a
                    className="ml-1 flex text-blue-500"
                    target="_blank"
                    href="https://www.linkedin.com/in/kristian-kahkonen/details/certifications/"
                    rel="noreferrer"
                >
                    LinkedIn
                    <ArrowUpRight size={24} />
                </a>
                (account needed)
            </span>
        </FadeIn>
    );
}
