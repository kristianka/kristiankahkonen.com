import React from "react";
import { TitleAnimation } from "@/components/TitleAnimation";
import FrontpageButtons from "@/components/Frontpage/FrontpageButtons";
import FrontpageBlogs from "@/components/Frontpage/FrontpageBlogs";

export default async function Home() {
    return (
        <main>
            <TitleAnimation />
            <FrontpageButtons />
            <FrontpageBlogs />
        </main>
    );
}
