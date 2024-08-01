import React from "react";
import { TitleAnimation } from "@/components/TitleAnimation";
import FrontpageButtons from "@/components/Frontpage/FrontpageButtons";

export default async function Home() {
    return (
        <main>
            <TitleAnimation />
            <FrontpageButtons />
        </main>
    );
}
