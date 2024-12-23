import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { Book, Code, HomeIcon, Mail, Rss, User } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
    const menuVariants = {
        open: { opacity: 1, y: 1 },
        closed: { opacity: 0, y: 1 }
    };

    // Lock and unlock body scroll when menu opens or closes
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup function to ensure scroll is re-enabled on unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.nav
                    aria-label="Main navigation"
                    className="fixed left-0 z-10 h-screen w-screen bg-slate-50 dark:bg-zinc-900"
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={menuVariants}
                    transition={{ duration: 0.4 }} // Faster fade-in and fade-out
                >
                    <ul className="m-5 space-y-4 text-2xl font-bold">
                        {[
                            { href: "/", label: "Home", icon: HomeIcon },
                            { href: "/blog", label: "Blog", icon: Book },
                            { href: "/projects", label: "Projects", icon: Code },
                            { href: "/about", label: "About", icon: User },
                            { href: "/contact", label: "Contact", icon: Mail },
                            { href: "/rss.xml", label: "RSS", icon: Rss }
                        ].map((item, _index) => (
                            <motion.li
                                key={item.href}
                                // variants={linkVariants}
                                // transition={{ duration: 0.2, delay: index * 0.1 }}
                                onClick={() => setIsOpen(false)}
                            >
                                <Link href={item.href} className="flex items-center">
                                    <item.icon className="mr-4 h-6 w-6" />
                                    <span>{item.label}</span>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
