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
                    className="rounded-full border-1 border-black bg-white px-4 py-2 transition-all hover:bg-black/10 sm:px-10 sm:py-2 dark:border-white dark:bg-black dark:text-white dark:hover:bg-white/1"
                >
                    {button.label}
                </Link>
            ))}
        </div>
    );
}
