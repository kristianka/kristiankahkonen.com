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
                <div className="fixed inset-0 z-10 w-full h-full overflow-y-auto">
                    <div className="flex min-h-full justify-center p-3 text-center items-center">
                        <DialogPanel
                            as={motion.div}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full sm:max-w-4xl space-y-4 bg-white p-4 rounded-lg"
                        >
                            <div className="flex justify-between items-baseline">
                                <DialogTitle className="font-bold mx-auto text-black text-xl sm:text-2xl p-1">
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
        </AnimatePresence>
    );
}
