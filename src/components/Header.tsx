import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";

export const Header = () => {
    return (
        <header className="flex justify-between items-center p-5 text-black bg-white dark:bg-black dark:text-white">
            <Link href="/" className="text-2xl font-bold hover:underline">
                Kristian Kähkönen
            </Link>
            <nav className="overflow-x-auto">
                <ul className="flex space-x-5 text-right">
                    <li className="">
                        <ToggleTheme />
                    </li>
                    <li className="m-auto hover:underline">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="m-auto hover:underline">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className="m-auto hover:underline">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="m-auto hover:underline">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="m-auto hover:underline">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
