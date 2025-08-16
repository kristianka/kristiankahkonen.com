import Link from "next/link";

const buttons = [
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
];

export default function FrontpageButtons() {
    return (
        <div className="mt-15 flex flex-wrap justify-start gap-3">
            {buttons.map((button) => (
                <Link
                    key={button.href}
                    href={button.href}
                    className="rounded-full border-1 border-black bg-[#fefefe] px-6 py-2 transition-all hover:bg-black/5 sm:px-18 sm:py-2 dark:border-gray-400 dark:bg-[#0b0b0b] dark:text-white dark:hover:bg-white/5"
                >
                    {button.label}
                </Link>
            ))}
        </div>
    );
}
