import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CloseButton, Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { X } from "lucide-react";
import { Certification } from "@/types";

interface FullscreenPopupProps {
    open: boolean;
    closeModal: () => void;
    certification: Certification;
}

export default function FullscreenPopup({ open, closeModal, certification }: FullscreenPopupProps) {
    return (
        <AnimatePresence>
            <Dialog static open={open} onClose={closeModal} className="relative z-50">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/30"
                />
                <div className="fixed inset-0 z-10 h-full w-full overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-3 text-center">
                        <DialogPanel
                            as={motion.div}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full space-y-4 rounded-lg bg-white p-4 sm:max-w-4xl"
                        >
                            <div className="flex items-baseline justify-between">
                                <DialogTitle className="mx-auto p-1 text-xl font-bold text-black sm:text-2xl">
                                    {certification.title}
                                </DialogTitle>
                                <CloseButton
                                    aria-label="Close modal"
                                    onClick={closeModal}
                                    className=""
                                >
                                    <X className="h-6 w-6 text-black sm:h-8 sm:w-8" />
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
                            <Description className="text-center text-sm text-neutral-400">
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
        </AnimatePresence>
    );
}
