import React from "react";
import { TitleAnimation } from "@/components/TitleAnimation";
import FrontpageButtons from "@/components/Frontpage/FrontpageButtons";
import FrontpageBlogs from "@/components/Frontpage/FrontpageBlogs";
import FadeIn from "@/components/FadeIn";

export default async function Home() {
    return (
        <main className="mx-auto max-w-6xl">
            <FadeIn>
                <TitleAnimation />
                <FrontpageButtons />
                <FrontpageBlogs />
            </FadeIn>
        </main>
    );
}
