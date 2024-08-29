/* eslint-disable react/no-unescaped-entities */
import { Contact } from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <h2 className="text-center text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-5">
                Contact
            </h2>
            <Contact />
        </main>
    );
}
