import React from "react";
import { TitleAnimation } from "@/components/TitleAnimation";
import FrontpageButtons from "@/components/Frontpage/FrontpageButtons";
import FrontpageBlogs from "@/components/Frontpage/FrontpageBlogs";
import FadeIn from "@/components/FadeIn";

export default async function Home() {
    return (
        <main className="max-w-6xl mx-auto">
            <FadeIn>
                <TitleAnimation />
                <FrontpageButtons />
                <FrontpageBlogs />
            </FadeIn>
        </main>
    );
}
