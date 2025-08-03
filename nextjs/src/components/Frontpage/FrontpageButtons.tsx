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
                    className="inline-block overflow-hidden rounded-full border border-gray-500 px-16 py-2 transition-colors duration-300 hover:bg-black/10 dark:hover:bg-black/40"
                >
                    {button.label}
                </Link>
            ))}
        </div>
    );
}
