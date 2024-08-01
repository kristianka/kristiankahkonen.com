/* eslint-disable react/no-unescaped-entities */
import { Contact } from "@/components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <div>
                <h2 className="text-2xl sm:text-4xl tracking-wide font-bold m-auto mb-5">
                    Contact
                </h2>
            </div>
            <h3 className="text-lg">
                You can contact me via email at the address below. I'll be in touch ASAP!{" "}
            </h3>
            <Contact />
        </main>
    );
}
