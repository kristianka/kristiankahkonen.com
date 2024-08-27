"use client";
import { Certification } from "@/types";
import { CloseButton, Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

interface CertificationProps {
    certs: Certification[];
}

export default function Certifications({ certs }: CertificationProps) {
    const [showMore, setShowMore] = useState(false);

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

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* show only 3 certifications by default */}
                {certs.slice(0, showMore ? certs.length : 3).map((certification, index) => (
                    <div key={certification.id}>
                        <Image
                            onClick={() => openModal(certification)}
                            key={index}
                            src={certification.url}
                            alt={certification.alt}
                            width={2000}
                            height={1500}
                            className="h-auto max-w-full rounded-lg"
                        />
                    </div>
                ))}
                <AnimatePresence>
                    {certification && (
                        <Dialog static open={open} onClose={closeModal} className="relative z-50">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/30"
                            />
                            <div className="fixed inset-0 z-10 w-full h-full overflow-y-auto">
                                <div className="flex min-h-full justify-center p-3 text-center items-center">
                                    <DialogPanel
                                        as={motion.div}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="w-full sm:max-w-6xl space-y-4 bg-white p-0 sm:p-12 rounded-lg"
                                    >
                                        <div className="flex justify-between items-baseline">
                                            <DialogTitle className="font-bold text-xl sm:text-2xl text-center p-1">
                                                {certification.title}
                                            </DialogTitle>
                                            <CloseButton
                                                aria-label="Close modal"
                                                onClick={closeModal}
                                                className=""
                                            >
                                                <X className="text-black w-6 h-6 sm:w-8 sm:h-8" />
                                            </CloseButton>
                                        </div>
                                        <Image
                                            src={certification.url}
                                            alt={certification.alt}
                                            width={2000}
                                            height={1500}
                                            className="h-auto max-w-full rounded-lg"
                                            priority
                                        />
                                        <Description className="text-neutral-400 text-center text-sm">
                                            <span className="block sm:hidden">
                                                Zoom in by pinching or rotate your device
                                            </span>
                                            <span className="mt-1">
                                                You can also close with a click outside or with ESC
                                            </span>
                                        </Description>
                                    </DialogPanel>
                                </div>
                            </div>
                        </Dialog>
                    )}
                </AnimatePresence>
            </div>
            <div className="mt-1 flex items-center before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
                <button
                    type="button"
                    onClick={() => setShowMore(!showMore)}
                    className="flex items-center rounded-full border bg-white dark:bg-black text-black dark:text-white border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    {showMore ? <FaAngleUp className="mr-1" /> : <FaAngleDown className="mr-1" />}
                    {showMore ? "View less" : "View more"}
                </button>
            </div>
            <div className="flex">
                <span>Verify my certifications in {"  "}</span>
                <a
                    className="text-blue-500 flex flex-wrap"
                    href="https://www.linkedin.com/in/kristian-kahkonen/details/certifications/"
                >
                    {" "}
                    LinkedIn
                    <ArrowUpRight size={24} />
                </a>
                <span>(account needed)</span>
            </div>
        </div>
    );
}
