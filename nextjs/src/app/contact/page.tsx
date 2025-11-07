import { Contact } from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

export default function Home() {
    return (
        <main>
            <FadeIn>
                <h2 className="m-auto mb-5 text-center text-2xl font-bold tracking-wide sm:text-4xl">
                    Contact
                </h2>
                <Contact />
            </FadeIn>
        </main>
    );
}
